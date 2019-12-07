#!/bin/bash
WORK_PATH='/usr/object-server'
cd $WORK_PATH
echo "清理代码"
git reset --hard origin/master
git clean -f
echo "拉取最新代码"
git pull origin master
echo "开始构建镜像"
docker build -t object-server .
echo "删除旧容器"
docker stop object-server-container
docker rm object-server-container
echo "启动新容器"
docker container run -p 3000:3000 -d --name object-server-container object-server