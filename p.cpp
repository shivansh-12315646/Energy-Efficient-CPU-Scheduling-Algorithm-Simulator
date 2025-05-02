#include <stdio.h>
#include <stdlib.h>
#include <limits.h> // For INT_MAX

#define MAX_PROCESSES 100 // Define a maximum number of processes

typedef struct {
    int pid;
    int arrival_time;
    int burst_time;
    int waiting_time;
    int turnaround_time;
    int is_completed;
} Process;

int main() {
    int n, i, j, time = 0, completed = 0;
    Process processes[MAX_PROCESSES];
    float total_waiting_time = 0, total_turnaround_time = 0;

    printf("-------Shortest Job First Scheduling (Non-Preemptive)-------\n");
    printf("Enter the number of processes: ");
    if (scanf("%d", &n) != 1 || n <= 0 || n > MAX_PROCESSES) {
        fprintf(stderr, "Invalid number of processes.\n");
        return 1; // Indicate an error
    }

    // Input process details
    for (i = 0; i < n; i++) {
        processes[i].pid = i + 1;
        printf("For P%d:\n", processes[i].pid);

        printf("Arrival time: ");
        if (scanf("%d", &processes[i].arrival_time) != 1 || processes[i].arrival_time < 0) {
            fprintf(stderr, "Invalid arrival time.\n");
            return 1;
        }

        printf("Burst time: ");
        if (scanf("%d", &processes[i].burst_time) != 1 || processes[i].burst_time <= 0) {
            fprintf(stderr, "Invalid burst time.\n");
            return 1;
        }

        processes[i].is_completed = 0;
    }

    // SJF Scheduling
    while (completed < n) {
        int shortest_job_index = -1;
        int shortest_burst_time = INT_MAX;

        for (i = 0; i < n; i++) {
            if (processes[i].arrival_time <= time && !processes[i].is_completed && processes[i].burst_time < shortest_burst_time) {
                shortest_burst_time = processes[i].burst_time;
                shortest_job_index = i;
            }
        }

        if (shortest_job_index == -1) {
            time++;
        } else {
            processes[shortest_job_index].waiting_time = time - processes[shortest_job_index].arrival_time;
            processes[shortest_job_index].turnaround_time = processes[shortest_job_index].waiting_time + processes[shortest_job_index].burst_time;
            time += processes[shortest_job_index].burst_time;
            processes[shortest_job_index].is_completed = 1;
            completed++;
        }
    }

    // Calculate and display results
    printf("\nRESULTS:\n");
    printf("Process\tArrival\tBurst\tWaiting\tTurnaround\n");
    for (i = 0; i < n; i++) {
        printf("P%d\t%d\t%d\t%d\t%d\n", processes[i].pid, processes[i].arrival_time, processes[i].burst_time, processes[i].waiting_time, processes[i].turnaround_time);
        total_waiting_time += processes[i].waiting_time;
        total_turnaround_time += processes[i].turnaround_time;
    }

    printf("\nAVERAGE WAITING TIME: %.2f\n", total_waiting_time / n);
    printf("AVERAGE TURNAROUND TIME: %.2f\n", total_turnaround_time / n);

    return 0;
}