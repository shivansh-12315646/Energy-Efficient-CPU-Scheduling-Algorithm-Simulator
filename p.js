let processes = [];
let pid = 1;
let cpuTime = 0;
let clockInterval;

function addProcess() {
    const arrival = document.getElementById('arrival').value;
    const burst = document.getElementById('burst').value;

    if (arrival === "" || burst === "") {
        alert("Please enter Arrival and Burst time.");
        return;
    }

    processes.push({
        pid: pid++,
        arrival_time: parseInt(arrival),
        burst_time: parseInt(burst),
        waiting_time: 0,
        turnaround_time: 0,
        completed: false
    });

    document.getElementById('arrival').value = "";
    document.getElementById('burst').value = "";
    updateTable();
}

function updateTable() {
    const tbody = document.getElementById('processTable').getElementsByTagName('tbody')[0];
    tbody.innerHTML = "";

    processes.forEach(proc => {
        const row = tbody.insertRow();
        row.insertCell(0).innerText = proc.pid;
        row.insertCell(1).innerText = proc.arrival_time;
        row.insertCell(2).innerText = proc.burst_time;
        row.insertCell(3).innerText = proc.waiting_time !== 0 ? proc.waiting_time : '-';
        row.insertCell(4).innerText = proc.turnaround_time !== 0 ? proc.turnaround_time : '-';
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function startClock() {
    clockInterval = setInterval(() => {
        document.getElementById('liveClock').innerText = `CPU Time: ${cpuTime}`;
    }, 500);
}

async function scheduleProcesses() {
    if (processes.length === 0) {
        alert("No processes to schedule! Please add some processes first.");
        return;
    }

    startClock();
    let completed = 0;
    let idle_time = 0;
    let total_wait = 0, total_turnaround = 0;
    const ganttChart = document.getElementById('ganttChart');
    ganttChart.innerHTML = "";

    while (completed !== processes.length) {
        let idx = -1;
        let min_burst = Infinity;

        for (let i = 0; i < processes.length; i++) {
            if (processes[i].arrival_time <= cpuTime && !processes[i].completed) {
                if (processes[i].burst_time < min_burst) {
                    min_burst = processes[i].burst_time;
                    idx = i;
                }
            }
        }

        if (idx !== -1) {
            document.getElementById('status').innerText = `Status: Running Process P${processes[idx].pid}`;
            const block = document.createElement('div');
            block.className = "gantt-block";
            block.innerText = `P${processes[idx].pid}`;
            ganttChart.appendChild(block);

            await sleep(500);

            processes[idx].waiting_time = cpuTime - processes[idx].arrival_time;
            cpuTime += processes[idx].burst_time;
            processes[idx].turnaround_time = processes[idx].waiting_time + processes[idx].burst_time;
            processes[idx].completed = true;
            completed++;
        } else {
            document.getElementById('status').innerText = `Status: CPU in Sleep Mode at time ${cpuTime}`;
            const block = document.createElement('div');
            block.className = "gantt-block sleep-block";
            block.innerText = "Sleep";
            ganttChart.appendChild(block);

            await sleep(500);
            cpuTime++;
            idle_time++;
        }

        updateTable();
    }

    clearInterval(clockInterval);

    processes.forEach(p => {
        total_wait += p.waiting_time;
        total_turnaround += p.turnaround_time;
    });

    document.getElementById('avgWait').innerText = `Average Waiting Time: ${(total_wait / processes.length).toFixed(2)} units`;
    document.getElementById('avgTAT').innerText = `Average Turnaround Time: ${(total_turnaround / processes.length).toFixed(2)} units`;
    document.getElementById('idleTime').innerText = `Total CPU Idle Time: ${idle_time} units`;

    document.getElementById('status').innerText = "Status: All processes completed!";
}


function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}