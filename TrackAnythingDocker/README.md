# Track-Anything Docker Installation Guide

This guide details the steps required to install Track-Anything into a Docker container with GPU support.

## Prerequisites
Ensure that you have the following prerequisites set up and installed on your system:

1. **Virtualization Technology:** Enable virtualization in the BIOS settings of your device.
2. **Git:** Clone the Track-Anything repository:
    ```
    git clone https://github.com/gaomingqi/Track-Anything
    ```
3. **WSL2:** Install WSL2 on Windows to allow GPU passthrough to the Linux-based Docker container.
4. **Docker Desktop:** Install Docker Desktop from [Docker's website](https://docs.docker.com/desktop/install/windows-install/).
5. **Anaconda:** Download and install Anaconda from [Anaconda's website](https://www.anaconda.com/download).
6. **Python:** Install Python 3.8 or higher from [Python's official website](https://www.python.org/downloads/).
7. **Nvidia CUDA Toolkit:** Download the CUDA Toolkit from [NVIDIA's website](https://developer.nvidia.com/cuda-toolkit).

### Additional Installations
Inside the Track-Anything folder, install the required torch libraries via Anaconda:
```sh
conda install pytorch==2.0.1 torchvision==0.15.2 torchaudio==2.0.2 pytorch-cuda=11.8 -c pytorch -c nvidia
