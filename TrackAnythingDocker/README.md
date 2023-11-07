# Track-Anything Docker Installation Guide

This guide details the steps required to install Track-Anything into a Docker container with GPU support.

I have not made Track-Anything this is just a guide to get it running in docker.
All credit to original repo [Track-anything](https://github.com/gaomingqi/Track-Anything).
## Prerequisites
Ensure that you have the following prerequisites set up and installed on your system:

1. **Virtualization Technology:** Enable virtualization in the BIOS settings of your device.
2. **Git:** Clone the Track-Anything repository:
    ```
    git clone https://github.com/gaomingqi/Track-Anything
    ```
    or you can use this as base.
3. **WSL2:** Install WSL2 on Windows to allow GPU passthrough to the Linux-based Docker container.
4. **Docker Desktop:** Install Docker Desktop from [Docker's website](https://docs.docker.com/desktop/install/windows-install/).
5. **Anaconda:** Download and install Anaconda from [Anaconda's website](https://www.anaconda.com/download).
6. **Python:** Install Python 3.8 or higher from [Python's official website](https://www.python.org/downloads/).
7. **Nvidia CUDA Toolkit:** Download the CUDA Toolkit from [NVIDIA's website](https://developer.nvidia.com/cuda-toolkit).

### Additional Installations
Inside the Track-Anything folder, install the required torch libraries via Anaconda:
```sh
conda install pytorch==2.0.1 torchvision==0.15.2 torchaudio==2.0.2 pytorch-cuda=11.8 -c pytorch -c nvidia
```
## Building the Docker Image

### 1. Dockerfile Modificarions
```
RUN apt-get update && apt-get install -y \
    git \
    libgl1-mesa-glx \
    libglib2.0-0
```
Update the run command at the end of the Dockerfile

```
CMD python app.py --device cuda:0
```
Remove or comment out the USER appuser line.

## Build and run
```
docker compose up --build
```

After completing these steps, your Docker container should be up and running with Track-Anything installed and ready to use.


This Markdown formatted `README.md` provides a structured guide for setting up Track-Anything in a Docker container. It outlines the required software, steps to prepare the environment, and the commands needed to build and run the Docker image.


