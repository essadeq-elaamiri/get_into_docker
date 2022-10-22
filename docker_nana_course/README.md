## Docker with Nana.
![docker](https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png)


Link: https://youtu.be/3c-iBn73dDE

### Content

1. [What is Docker](#what-is-docker)
2. [What is a Container/Image](#what-is-container-technically)
    1. [Docker Image vs Container](#docker-image-vs-container)
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
