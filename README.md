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
