# Energy-Efficient CPU Scheduling Algorithm Simulator

## Overview  
This project implements an energy-efficient CPU scheduling algorithm in C, designed to simulate realistic CPU behaviour while minimizing power consumption. It demonstrates practical integration of process scheduling, context switching, and performance metrics such as waiting time and turnaround time. Built for academic and experimental use, this simulator supports adjustable parameters and scenarios to showcase trade-offs between performance and energy saving.

## Key Features  
- Implements a custom scheduling algorithm that dynamically adapts based on CPU load and energy consumption constraints.  
- Tracks and reports metrics including average wait time, turnaround time, idle time, and estimated energy usage.  
- Provides command-line interface with configurable input (number of processes, burst times, priority levels, etc.).  
- Modular C code structure, making it straightforward to extend or plug in alternate scheduling strategies for comparison.

## Technologies  
- **Language:** C (ANSI C / C99)  
- **Concepts:** Operating systems scheduling, process management, context switching, energy-aware computing  
- **Development:** GCC toolchain (Linux/Unix environment) or equivalent  
- **Simulation:** Custom code simulates process arrival, execution, waiting and context-switch overhead.

## Usage  
1. Clone the repository:  
   ```bash
   git clone https://github.com/shivansh-12315646/Energy-Efficient-CPU-Scheduling-Algorithm-Simulator.git
Compile the code:
gcc -o scheduler simulator.c

Run the simulator:
./scheduler

Review output metrics showing scheduling performance and estimated energy consumption.

Why It Matters

In today’s computing environments—especially mobile, embedded or data-centre systems—energy efficiency is no longer optional. This simulator helps illustrate how scheduling strategies influence energy usage without sacrificing responsiveness. It’s a practical demonstration of how theory in operating systems can be applied to emerging real-world demands for sustainable computing.

Limitations & Future Work

Currently supports a single algorithm; future work may include multiple strategies for comparison (e.g., Round Robin, SJF, EDF) under identical conditions.

Energy estimation uses simplified model; more accurate simulation could involve real‐hardware measurements or power profiling.

Could be extended to multi-core/multi-processor scheduling, heterogeneous architectures (big.LITTLE), or thermal constraints.
