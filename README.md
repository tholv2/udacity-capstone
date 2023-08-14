# udacity-capstone
This is a system manager gold.

In this project, I builded a CI/CD pipeline for a microservices application for RollingUpdate deployment strategy.

### Files description

* `.circleci` - CircleCI Pipeline config.
* `frontend` - Application source code, Dockerfile, K8S deployment template.
* `infra` - File config used to deploy a kubernetes cluster using eksctl.
* `screenshots` - Screenshots for deployment, application logs and CircleCI pipeline.

### Instructions

You will find below how to configure the environment and run the application.

## CircleCI

* An image will be built and pushed to dockerhub, it will be tagged with `CIRCLE_SHA1` (The SHA1 hash of the last commit of the current build.).
* K8S template can be found under `frontend/.k8s/template`, it will be used to generate a deployment file and it will be saved under `.k8s/.generated/`.

## Infra

* Enter in infra directory `cd infra`
* To create the cluster run `eksctl create cluster -f cluster.yaml`