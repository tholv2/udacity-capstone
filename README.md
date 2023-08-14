# udacity-capstone
This is a system manager gold.

In this project, I builded a CI/CD pipeline for a microservices application for RollingUpdate deployment strategy.

### Files description

* `.circleci` - CircleCI Pipeline config.
* `.kubernetes` - Include k8s templace auto deploy pod and service.
* `create_eks_cluster.sh` - File config used to deploy a kubernetes cluster using eksctl.
* `screenshots` - Screenshots for deployment, application logs and CircleCI pipeline.

### Instructions

You will find below how to configure the environment and run the application.

## CircleCI

* An image will be built and pushed to dockerhub, it will be tagged with `CIRCLE_SHA1` (The SHA1 hash of the last commit of the current build.).

## Infra
* To create the cluster run `create_eks_cluster.sh`