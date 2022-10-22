## Docker with Nana.
![docker](https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png)


Link: https://youtu.be/3c-iBn73dDE

### Content

1. [What is Docker](#what-is-docker)
2. [What is a Container/Image](#what-is-container-technically)
    1. [Docker Image vs Container](#docker-image-vs-container)
    2. [Note **](#note1)
3. [Docker vs Virtal Machine](#docker-vs-virtal-machine)
4. [Docker Installation](#docker-installation)
5. [Docker Main commands](#docker-main-commands)
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

**What is a Container / Image and what problems does it solves ?**
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
    - Have the ability to run the same app/service with 2 different versions without eny conflict.


**How containers improved the deployment process?**
1. Before containers:
    - The dev team will perpare the artifact (app) and some installation instructions + the data base system and its own instructions ...and send them to the oprerations team thta should configure the servers and the environement to deploy the service.
    - Configuration on the server needed.
    - That can lead us to dependency version conflict.
    - Could have a case of misunderstanding/ misinterpreting between the 2 teams (forgetting some instructions for ex ).
    - 
2. With containers:
    - Developers and Operations work together to package the application in a container with all its dependencies and configurations.
    - No environemental configuration needed on the server (Except Docker Runtime).
    - It is just enough to run the containers on the server (After installing the Docker of course == one time effort).


### What is Container (technically) ?
- A container is made up of **Images**.
- It Layers of Images.
- The base image is mostly a **Linux Image**, because of its small size [ex. alpine:3.10].
- In Top of the **Linux Image**, there is the **Application Image** (Top Layer) [ex. postgres:10.10].
- Of course there are the intermidiate images between the base and the top layer.


![image layers](https://4.bp.blogspot.com/-AEoeLj_vvbw/WvmdxlQudOI/AAAAAAAADNE/3P0VrsokTXA3t6_2jnjSeQXUG6uJK-ypACLcBGAs/s1600/2-layer.jpg)

### Docker Image vs Container ?

An instance of an image is called a container. You have an image, which is a set of layers as we describe. If you start this image, you have a running container of this image. You can have many running containers of the same image.

You can see all your images with `docker images` whereas you can see your running containers with `docker ps` (and you can see all containers with `docker ps -a`).

So a running instance of an image is a container.

**What's an Image?**

An image is an inert, immutable, file that's essentially a snapshot of a container. Images are created with the build command, and they'll produce a container when started with run. Images are stored in a Docker registry such as registry.hub.docker.com. Because they can become quite large, images are designed to be composed of layers of other images, allowing a minimal amount of data to be sent when transferring images over the network.

Local images can be listed by running `docker images`.

**What's a container?**


To use a programming metaphor, if an image is a class, then a container is an instance of a class—a runtime object. Containers are hopefully why you're using Docker; they're lightweight and portable encapsulations of an environment in which to run applications.

View local running containers with `docker ps`.

![image vs container](https://i.stack.imgur.com/Cx1eo.png)


#### Note1**:

- Note that when we pull an image from the public repository  with `docker pull postgres:9.6`, docker download the image to our local repo. (if we use `docker run postres:9.6`, it will look for locally , if it is not available it pull it from the public repo.).
- In the downloading process, we can observe a lof of installing haches, and those are the layers that compose the pulled image.
- In that point we have an advantage, it is that when there is a change of version for exemple, we download only the changed layers and we keep the layer that did not have any changes.

![pull](https://www.mend.io/wp-content/media/2020/11/Using-docker-pull-command-to-download-an-image-from-Docker-Hub.png)

**Image vs Container**

![vs](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYUqt_FoqIQbuGoUnBoJXXx90t5Tmi2xYDSA&usqp=CAU)

- Image :> is the actual package (not runing, is the artifact).
- Container :> instance of the image (runing).

-------------------------------------------------

### Docker vs Virtal Machine

- Operation system has 2 layers [Kernal layer + Applications layer].
- Docker is virtualising the **Applications layer**.
- Vbox / Vmware is virtualising the **Complete operating system**.

So:

- The Docker image much smaller.
- Docker containers start and run faster.
- VMs of any OS can run in any OS, and it is not the case for Docker , why ?

- Docker images are based on Linux kernel (base layer), so there is no compatibility between them and the windows kernel nativly.
- We can use `Docker toolbox ` which is : " Docker Toolbox allows you to deploy development containers in legacy Windows systems that do not meet the requirements of the new Docker for Windows application."

------------------------------

### Docker Installation

[24:00 -> 42:00]

https://docs.docker.com/get-docker/ 

1. **Docker pre-requisites**
2. **Installing Docker on Mac** 
    - https://docs.docker.com/desktop/install/mac-install/
3. **installing Docker on Windows** 
    - https://docs.docker.com/desktop/install/windows-install/ 
4. **installing Docker on Linux** 
    - https://docs.docker.com/desktop/install/linux-install/ 
5. :warning: **Docker Toolbox** :  a bridge between the System and Docker if the OS does not support Docker.

:warning: "Deprecation Notice: This project and repository is now deprecated and is no longer in active development. Please use Docker Desktop instead where possible. Docker Desktop"
https://github.com/docker-archive/toolbox 

Getting Docker : `Docker version 20.10.18, build b40c2f6` Installed on my Windows 10 machine.

-----------------------------

### Docker Main commands 

1. **Container vs Image** 

- **COLNTAINER** is running environment for **IMAGE**.
- `Container => application Image  + environment configs + file system.`
- **Application image** : could be `postgres`, `redis`, `adminer` ....
- The application image needs, environment config and File system...
- All this environmental stuff are provided by the Container.
- The container has its own **Virtual File System**.
- The contanier also has a **PORT** that is binded to it which make it possible to communicate with the applications running on it.

2. **Tags/ versions**

![tagging](https://stevelaskerblog.files.wordpress.com/2018/03/pushnewtags.gif)

Useful Artical [Docker Tagging: Best practices for tagging and versioning docker images]: https://stevelasker.blog/2018/03/01/docker-tagging-best-practices-for-tagging-and-versioning-docker-images/ 

- Every Docker image has a set of versions or tags.
- `postgres:9.6.1` , here `postgres` is the Image name and `9.6.1` is the version.
- When we pull an image without specifying the version (`docker pull redis`), docker pulls the latest version.
- 

3. **Some Commands**

|Command|Description|
|--|--|
|`docker images`| Show available Images|
|`docker pull redis`| Download the latest version of `redis`|
|`docker pull redis:2.3`| Download the version 2.3 of `redis`|
|`docker run redis`|Create Container for `redis` image / running an instance of the Image / running a n environment for the image (In an attached mode = should clic CTRL+C to terminate) [This command pulls the image if it not available locally]|
|`docker run -d redis`|Run a Container for `redis` image (in the background / detached mode)|
|`docker run -d redis:4.0.1`|Runs the redis of version 4.0.1, if not avaailable, pulls it first (d for detached)|
|`docker run -p <host-port>:<container-port> redis`|Runs the redis image, binding the ports (p for port)|
|`docker ps`| List the running contaniers|
|`docker stop <container-id>`| Stop the container (first 4 chars of ID are enough)|
|`docker start <container-id>`| Start the container|
|`docker ps -a`| Show all the Containers (Running or Not)|


4. **Container PORT vs host PORT**
- The container is just a virtual environment running on the host.
- Multiple containers can run on the host at the same time.
- The host has certain  **PORTS** available that can be open to some applications.
- We have the ability to map a **contanier port** to a **host port**.
- For example, our container is listening of the port `8000`, we can bind it to the port `80` of our host.
- in this case the port `8000` is the **internal** port of out container and `80` is the **external** one.
- That will avoid us the conflict when we use for example the same image in different containers (ability to use diffirent ports).
- "Example, we need version 1 of `appX` and version 2, and they both listenning to 7777, we can avoid the conflict by binding the `appX:1` to host port 77 and the `appX:2` to port 777."
- The command to do that : `docker run -d -p 77:7777 appX:1` and `docker run -d -p 777:7777 appX:2`, now the host port 77 is binded to the container port 7777.

