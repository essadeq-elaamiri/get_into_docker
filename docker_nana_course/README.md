## Docker with Nana.
![docker](https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png)


Link: https://youtu.be/3c-iBn73dDE

### Content

1. [What is Docker](#what-is-docker)
2. [What is a Container]()
3. [Docker vs Virtal Machine]()
4. [Docker Installation]()
5. [Docker Main commands]()
6. [Debugging a Container]()
7. [Workflow with a demo project]()
    1. [Developing localy with Containers]()
    2. [Docker Compose Running multiple services]()
    3. [Dockerfile- Building own Docker image]()
    4. [Private Docker repository (AWS)]()
    5. [Deploying our containarized application]()
8. [Volumes -persisting data]()

------------------------

### What is docker ?

**What is a Container and what problems does it solves ?**
- A container is a way to **package** application with all the necessary dependencies and configuration.
- Package is a **Protable artifact**, can be easily shared and moved around (between the developers and the operationnals (devOps)).
- That Makes developement and deployement **more efficient**

**Where do containers live ?**
- Containers live in a **Container Repository**.
- There are Private  and public Repositories.
- One of the public repositories is `DockerHub` => https://hub.docker.com/ .

**How containers improved the development process?**

1. Before containers:
    - Installing and configuring the environement and services locally.
    - Installation and config process depends on the OS and the environnement.
    - Lot of steps (setting up the environement ) where we could face something wrong ...
2. With containers:
    - We do not have to install any service in our own system, containers provide an isolated environement for each service.
    - The services are packaged with all the needed configuration and dependencies.
    - No uncounted steps, One command to install the service.
    - What ever the OS is, the service is complitly has its own environement.
    
