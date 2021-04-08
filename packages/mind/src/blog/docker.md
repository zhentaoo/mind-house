# Docker

https://segmentfault.com/a/1190000003951028

Docker: repo => imgs => container
K8S: 业务上的编排、管理、调度

## 基本操作

### 1.拉取镜像

```bash
docker pull centos
```

### 2.列出所有镜像

```bash
docker images
```

### 3.运行镜像 (使用 镜像名:版本号 创建一个容器)

```bash
docker run -it --name node node:latest /bin/bash
docker run -it --name xxx stag-reg.llsops.com/node-lzt/odeer:2333c0c4 /bin/bash
```

### 4.列出正在运行的 container 容器
```bash
docker ps -a：列出所有容器
```

### 5.使用 ContainerId 创建一个新的 image (zhentaoo/node:0.0.1)
```bash
docker commit -m "install nodejs v6.9.1" -a "zhentaoo" 3d68c5917064 zhentaoo/node:0.0.1
docker commit -m "yum install nginx" -a "zhentaoo" 4f30fa562e16 zhentaoo/node
docker commit -m "first commit" -a "zhentao.li" 17cd36b8bd7d docker-hack.ele.me/zhentao.li/node:0.0.1
```

### 5-1.使用 dockerfile + docker build 命令构建镜像
```bash
docker build -t nodells:v1 .
```

### 6. push 新的 image
```bash
docker push docker-hack.ele.me/zhentao.li/node
```

### 7.删除所有容器
```bash
docker kill $(docker ps -a -q)
docker rm $(docker ps -a -q)
```

### 8.删除镜像
```bash
docker rmi centos
```