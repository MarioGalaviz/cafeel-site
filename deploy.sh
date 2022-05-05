docker build -t mariogalaviz/cafeel-site:latest -t mariogalaviz/cafeel-site:$SHA -f ./site/Dockerfile ./site

docker push mariogalaviz/cafeel-site:latest
docker push mariogalaviz/cafeel-site:$SHA 

kubectl apply -f k8s
kubectl set image deployments/cafeel-site-deployment site=mariogalaviz/cafeel-site:$SHA 