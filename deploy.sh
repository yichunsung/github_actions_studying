sudo gcloud docker -- pull gcr.io/elk-tree-studio/gitub_actions_studying:latest

sudo docker images

sudo docker-compose up -d --build

sudo docker images -f dangling=true -q | xargs -r sudo docker rmi

echo "~~~~~~~~~~~ Successfully ~~~~~~~~~~~"