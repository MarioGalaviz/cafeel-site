docker build -t mariogalaviz/cafeel-site:latest -t mariogalaviz/cafeel-site:$SHA -f ./site/Dockerfile ./site
docker build -t mariogalaviz/cafeel-site-api:latest -t mariogalaviz/cafeel-site-api:$SHA -f ./api/Dockerfile ./api

docker push mariogalaviz/cafeel-site:latest
docker push mariogalaviz/cafeel-site:$SHA 
docker push mariogalaviz/cafeel-site-api:latest
docker push mariogalaviz/cafeel-site-api:$SHA 

kubectl apply -f k8s
kubectl set image deployments/cafeel-site-deployment site=mariogalaviz/cafeel-site:$SHA 
kubectl set image deployments/cafeel-site-api-deployment api=mariogalaviz/cafeel-site-api:$SHA 