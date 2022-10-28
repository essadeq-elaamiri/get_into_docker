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
    1. [Commands table 1](#commands_1)
6. [Debugging a Container](#debugging-a-container)
7. [Workflow with a demo project](#workflow-with-a-demo-project)
    1. [Developing localy with Containers](#developing-localy-with-containers)
        1. [Docker Network](#docker-network)
    2. [Docker Compose Running multiple services](#docker-compose-running-multiple-services)
    3. [Dockerfile- Building own Docker image](#dockerfile--building-own-docker-image)
    4. [Docker repository](#private-docker-repository)
        1. [Creating a private repository on DockerHub](#creating-a-private-repository-on-dockerhub)
        2. [Image Naming in Docker registries](#image-naming-in-docker-registries)
    5. [Deploy our containerized application](#deploy-our-containerized-application)
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

<span id="commands_1"></span>

|Command|Description|
|--|--|
|`docker images`| Show available Images|
|`docker pull redis`| Download the latest version of `redis`|
|`docker pull redis:2.3`| Download the version 2.3 of `redis`|
|`docker run redis`|Create Container for `redis` image / running an instance of the Image / running a n environment for the image (In an attached mode = should clic CTRL+C to terminate) [This command pulls the image if it not available locally]|
|`docker run -d redis`|Run a Container for `redis` image (in the background / detached mode)|
|`docker run -d redis:4.0.1`|Runs the redis of version 4.0.1, if not avaailable, pulls it first (d for detached)|
|`docker run -p <host-port>:<container-port> redis`|Runs the redis image, binding the ports (p for port)|
|`docker run --name redis-older redis `| Run Container  with costum name (redis-older)|
|`docker ps`| List the running contaniers|
|`docker stop <container-id>`| Stop a running container (first 4 chars of ID are enough)|
|`docker start <container-id>`| Start a stopped  container|
|`docker ps -a`| Show all the Containers (Running or Not)|
|`docker logs <container-id/name>`|Troubleshooting the container|
|`docker logs <container-id/name> | tail`|Show the last part of the container logs|
|`docker logs <container-id/name> -f`|Stream the container logs (Show it in real time ??)|
|`docker exec -it <container-id/name> /bin/bash `|Enter the container in an interactive mode (Container terminal)[can be `/bin/bash` or `/bin/sh`][`exit`: to exit the mode]|
|`docker network ls` |list the available docker networks|
|`docker network create mongo-network`| Create our own Docker network |
|`docker run -d  -p27017:27017 -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=root  --name mongo_db --net mongo-network mongo`| Running continer to a network (-e for environment variables) |
|`docker-compose -f docker-compose.yaml up`| Start all the listed containers in `docker-compose.yaml` file|
|`docker-compose -f docker-compose.yaml up -d`| Start all the listed containers in `docker-compose.yaml` file (in detached mode lol)|
|`docker-compose -f docker-compose.yaml down`|Shutdown the containers|
|`docker build -t cats-app:1.0.1 .` / `docker build -t <image-name>:<tag> <Dockerfile-location>`|Build our image (-t for tag)|
|`docker rm <docker-id>`| delete a container|
|`docker rmi <image-id>`|detele an image|
|`docker login`|login to docker repositories|
|`docker tag <imageName>:<tag> <registryName>/<imageName>:<tag>`|tag/ rename image before push it to the registry/ repository|
|`docker push <registryName>/<imageName>:<tag>`|push image to the registry/ repository|


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


#### Debugging a container

- Troubleshooting the container with `docker logs <container-id/name>`.
- Get the terminal of the runing container by: `docker exec -it <container-id/name> /bin/bash `.



### Workflow with a demo project
Practical Activity 
1. Developement 
2. Continous integration/ Delivery
3. Deployment

1. **Use case**

    1. We are developing a JavaScript Application that uses MongoDB as DB.
    2. MongoDB is dowloaded via Docker Hub
    3. The first version of the application is developped locally and we want to deploy it.
    4. So we should Create a docker image out of our App and push it to our private repository.
    5. We will have after that, the possibility to pull our image + MongoDB image in any other server and run them.

![1](imgs/1.PNG)



#### Developing localy with Containers

1. JS & Nodejs App
2. Connect it to MongoDB docker container 

![2](imgs/2.PNG)

Here is our nodejs app : [app](./application/cats-app/server.mjs)

Pull our MongoDb image :  https://hub.docker.com/_/mongo
And MongoExpress used for the UI : https://hub.docker.com/_/mongo-express 

```
> docker pull mongo
> docker pull mongo-express
```

![3](./imgs/3.PNG)

##### Docker Network

Now we have mongo and mongo-express, and we should connect them and after connect mongo with our app.

Here we have another Concept: Docker Network

Here Docker creates an isolated Network where the containers can run.


In this case when  run 2 containers (mongodb + mongo-express UI) in the  same docker network this two can talk to each other just by the name, no need to port number or ip addresss.

Our node js app, will connect them from the external with the address + port.

In other case we will connect the app with the mongo and mongo-express from the same network, and access the app from the browser (external).

To list the available networks : `docker network ls` 
Create our network : `docker network create mongo-network`

Run the 2 containers in this network:

```
> docker run -d  -p27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=root \
    -e MONGO_INITDB_ROOT_PASSWORD=root \
    --name mongo_db \
    --net mongo-network mongo 
```

Run the `mongo-express` in the same network, and connect it with the `mongo`.

```
> docker run -d  -p8081:8081 \
    -e ME_CONFIG_MONGODB_ADMINUSERNAME=root \
    -e ME_CONFIG_MONGODB_ADMINPASSWORD=root \
    -e ME_CONFIG_MONGODB_SERVER=mongo_db \
    --name mongo_express \
    --net mongo-network mongo-express
```

![4](./imgs/4.PNG)

Check if everything  is OK!

![5](./imgs/5.PNG)

Visit: `http://localhost:8081/`

![6](./imgs/6.PNG)

- Created our `cat-db` database.
- Connect our db to Node JS

Here is our app:

```js
import express from "express"
import {v4 as uuidv4} from 'uuid';
import { MongoClient } from "mongodb";

const app = express()
const port = 3000

// Connection URL
const url = 'mongodb://root:root@localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'cat-db';

async function main() {
	// Use connect method to connect to the server
	await client.connect();
	console.log('Connected successfully to server');
	const db = client.db(dbName);
	const collection = db.collection('cats');
    
	const findResult = await collection.find({}).toArray();
	console.log('Found documents =>', findResult);

  return findResult;
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

app.get('/', async (req, res)=>{
	cats = main()
    res.json(cats)
})



app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})
```

- Now our application is not dockenized but it is connected to the mongo container from the localhost via the provided port 27017.

- Here we are selecting data from our data base

![7](./imgs/7.PNG)

- We can also see that in our mongo express UI

![8](./imgs/8.PNG)


#### Docker Compose Running multiple services
- In the previous section we create a connection between 2 container and run them with command line.
- A lot of pain !! hhh
- Can we execute this commands in a easier way ?
- Of course: There is **Docker compose** 
- Here is for example the docker compose file to run this commands and run the 2 connected containers :

```
> docker run 
    -d  
    -p27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=root \
    -e MONGO_INITDB_ROOT_PASSWORD=root \
    --name mongo_db \
    --net mongo-network 
    mongo 
```
and 

```
> docker run -d  -p8081:8081 \
    -e ME_CONFIG_MONGODB_ADMINUSERNAME=root \
    -e ME_CONFIG_MONGODB_ADMINPASSWORD=root \
    -e ME_CONFIG_MONGODB_SERVER=mongo_db \
    --name mongo_express \
    --net mongo-network mongo-express
```


It is  `.yaml` file
file_name: `mongo-docker-compose.yaml`

```yaml
version: '3' # docker-compose versions
services: ## containers we want to connect
    mongodb: # that is the container name
        image: monog # that is the image name
        ports:
            - 27017:27017 # <host>:<container> ports mappings
        environment:
            - MONGO_INITDB_ROOT_USERNAME=root
            - MONGO_INITDB_ROOT_PASSWORD=root # env variabless
    mongo_express: #container 2 name
        image: monog-express # that is the image name
        ports:
            - 8081:8081 # <host>:<container> ports mappings
        environment:
            - ME_CONFIG_MONGODB_ADMINUSERNAME=root
            - ME_CONFIG_MONGODB_ADMINPASSWORD=root # env variabless
            - ME_CONFIG_MONGODB_SERVER=mongo_db # env variabless

```

- So docker compose is just a structured way to avoid command line pain if we have a lot of containers to be connected and run.

- **Note**: notice that we did not provid the **network to docker compose**, because, it takes care of creating a common Network for the specified containers (if we did not set a custom one).

```diff
+ Docker Compose sets up a single network for your application(s) by default, adding each container for a service to the default network. Containers on a single network can reach and discover every other container on the network.
```
INFO : https://runnable.com/docker/docker-compose-networking 

- We added the `docker-compose.yaml` file to the application code, just in the same folder as `server.mjs` [LINK_TO_FILE](./docker_nana_course\application\cats-app\docker-compose.yaml).


```yaml
version: '3' # docker-compose versions
services: ## containers we want to connect
    mongo_db: # that is the container name
        image: mongo # that is the image name
        ports:
            - 27017:27017 # <host>:<container> ports mappings
        environment:
            - MONGO_INITDB_ROOT_USERNAME=root
            - MONGO_INITDB_ROOT_PASSWORD=root # env variabless
    mongo_express: #container 2 name
        image: mongo-express # that is the image name
        ports:
            - 8081:8081 # <host>:<container> ports mappings
        environment:
            - ME_CONFIG_MONGODB_ADMINUSERNAME=root
            - ME_CONFIG_MONGODB_ADMINPASSWORD=root # env variabless
            - ME_CONFIG_MONGODB_SERVER=mongo_db # env variabless
```

- To run the file content we use :

`docker-compose -f docker-compose.yaml up`

that command starts all the containers in the yaml file.

No container is running 

![9](./imgs/9.PNG)

After the command 

![10](./imgs/10.PNG)

In this phase I was not aable to connect the mongo-express to mongo, because I had a mistake in the name of the mongo container. ==> be careful.

After some correction here and there (with usage of the option `docker-compose -f docker-compose.yaml up  --remove-orphans`)

![11](./imgs/11.PNG)

- ** Oh but where is my database and all my records ???**
- lol, here is another concept of the containers : **Volumes**

- https://stackoverflow.com/questions/56521547/why-do-i-lose-data-if-docker-restarts 

- https://lovethepenguin.com/docker-you-might-loose-your-data-if-you-do-this-mistake-d3268bc87865

```diff
! Why this is happening?
- Despite it is logical that if you delete your container any saved data will be lost, its not for docker newbies, because it needs some time to realize that  the image that is used to create a container has not been updated with the data you created inside the container, so any containers based on the original image will not have any of the extra data that created on a running container of the same image.

```
- There is no data persistence in the container itself.

- Ok, now i want to stop the container I run using docker-compose file :
easy

`docker-compose -f docker-compose.yaml down`

![12](./imgs/12.PNG)

#### Dockerfile- Building own Docker image

- Now let's conceder that we have developped our Application, and we tested it, we want to deploy it now.
- To be deployed, our application should be packaged in its own docker container (docker image).
- So now we will build our docker image from our application using a dockerfile.
- **Dockerfile**: it is a blueprint for building images.


```dockerfile
FROM node 
# from image (our app is based on it)=> install node in our image
ENV MONGO_DB_USERNAME=root MONGO_DB_PASSWORD=root
# set some env variables to image environment (not recommanded, because if there a change, we should rebuild the image, instead we can set them in docker comose file)
RUN mkdir -p /home/app
# create a folder inside of the container
# RUN runs any linux command | RUN <linux-command>
COPY . /home/app
# Copy the current folder content (in the host) to the folder /home/app
## COPY is executed on the HOST
CMD ["node", "server.js"]
# Execute the command (node server.js) on the container
# entrypoint command
```

- Lets create the `dockerfile`, it also a part of our application code.
- Just in the same folder as `server.js` we create the file : [LINK_TO_FILE](.docker_nana_course\application\cats-app\dockerfile)

```dockerfile
# the file must be nammed as : Dockerfile (with capital D)
FROM node:16-alpine
# from image (our app is based on it)=> install node in our image
# node:16-alpine is the base image of our app now
ENV MONGO_DB_USERNAME=root MONGO_DB_PASSWORD=root
# set some env variables to image environment (not recommanded, because if there a change, we should rebuild the image, instead we can set them in docker comose file)
RUN mkdir -p /home/app
# create a folder inside of the container
# RUN runs any linux command | RUN <linux-command>
COPY . /home/cats-app
# Copy the current folder content (in the host) to the folder /home/app
## COPY is executed on the HOST
CMD ["node", "server.js"]
# Execute the command (node server.js) on the container
# entrypoint command
```
- The `Dockerfile` must be the name....

- Now let's build our image:

`docker build -t cats-app:1.0.1 .`
`docker build -t <image-name>:<tag> <Dockerfile-location>`

- `-t` to provid a tag to our image.

Here is the result

![13](./imgs/13.PNG)

- **Jenkins** : builds image from Dockerfile, just like we did

![14](./imgs/14.PNG)

- Now we start our app to test it:

`docker run cats-app`

Here the result:
1. The tag should be specified (error if not)
2. The App throws an exception that it can not find the module `server.js`


![15](./imgs/15.PNG)

- **Solution**: provide the correct name and path in `CMD ["node", "server.mjs"]` ==> `CMD ["node", "/home/cats-app/server.mjs"]`

- And everything is OKKK! **After rebuilding the image** [Images can not be overrided, they are read only lool].

![16](./imgs/16.PNG)

- Some command on my Image:

![17](./imgs/17.PNG)



#### Private Docker repository 

- Creating a private repository on `Amazon ECR`.
- Creating Reqistry and Registry options
- Build & tag an image and push them to the Repositpory

##### Creating a private repository on DockerHub
- We have to have an account on dockerhub
- We can create a reposotory per image
- In every repository we can store different versions and tags of an image
- Here my image `cats-app`

![19](./imgs/19.PNG)

- We create a  repository on `https://hub.docker.com/` with the same name :

![18](./imgs/18.PNG)

More Info : https://jfrog.com/knowledge-base/docker-hub-and-docker-registries-a-beginners-guide/ 

- In order to push our image to the repo we should login to our acount via `docker login`:

![20](./imgs/20.PNG)

- Our image is built already, we are going now to tag it 

##### Image Naming in Docker registries

- `registryDomain/imageName:tag`
- In dockerhub when we execute `docker pull mongo:4.2` for exemple
We in reality use a shorthand for this command 
`docker pull docker.io/library/mongo:4.2 `

- If we are using some other private registries like (AWS, `Amazon ECR`), we should use the fill naming convention, because there no builtin shurthand there for them.

- Now returning to push our Image :

1. Tagging the image :

```
> docker tag cats-app:1.0.3 elaamiri/cats-app:latest
```

In this case `tag` will rename our local image `cats-app:1.0.3` with name `elaamiri/cats-app:latest`

![21](./imgs/21.PNG)


2. Pushing the image to the repo

```
> docker push elaamiri/cats-app:latest
```

![22](./imgs/22.PNG)

And in the dockerhub

![23](./imgs/23.PNG)


- No let's say we have some changes on the app, and we want to rebuild it and push it with other version:

1. Make changes 
2. Rebuild it 

![24](./imgs/24.PNG)

3. tag it `docker tag cats-app:2.0.0 elaamiri/cats-app:2.0.0`
4. push it `docker push elaamiri/cats-app:2.0.0`

here is it on the repo :

![25](./imgs/25.PNG)

#### Deploy our containerized application

- After packaging our app in a docker image, and save it in a repository, we need to deploy it on a server for example.

- From the server we can pull our image and all the containers needed for it (mongo in our case ..).
- Using `docker compose`.
- So in a `cats-app.yaml` (compose) file we write :

```yml
version: '3'
services: 
  cats-app: 
      image: elaamiri/cats-app:2.0.0
      ports: 
          - 5000:3000
  mongo_db: # that is the container name
      image: mongo # that is the image name
      ports:
          - 27017:27017 # <host>:<container> ports mappings
      environment:
          - MONGO_INITDB_ROOT_USERNAME=root
          - MONGO_INITDB_ROOT_PASSWORD=root # env variabless
  mongo_express: #container 2 name
      image: mongo-express # that is the image name
      ports:
          - 8081:8081 # <host>:<container> ports mappings
      environment:
          - ME_CONFIG_MONGODB_ADMINUSERNAME=root
          - ME_CONFIG_MONGODB_ADMINPASSWORD=root # env variabless
          - ME_CONFIG_MONGODB_SERVER=mongo_db # env variabless
```

This file now is enough to download the application and all related images and run the containers..=> And voilà the application is deployer on the server

**Problem**, we could have a connection problem, between our app and the mongodb.
So in the connection code we should 
- change  `mongodb://root:root@localhost:27017`
- with `mongodb://root:root@mongo_db:27017`
- `mongodb`is the name of the service or the container (used in docker comose file)
- in this cas we do not have even to specify the port (because the services are in the same netwoek, and they locate each other).
- We should rebuild the image, tag it, push it and modify the compose file with updated image 

Here is the app:

![26](./imgs/26.PNG)
And the app

![27](./imgs/27.PNG)

-  As we can see there is no data persistence :

- But everything is looking good :smile:

