# CRUD Application with Express.js, EJS, MongoDB, MongoDB UI Deployed on Kubernetes Cluster

This README file provides an overview and instructions for a basic CRUD (Create, Read, Update, Delete) application built using Express.js, EJS, MongoDB, and deployed on a Kubernetes (K8s) cluster. The deployment utilizes Kubernetes components such as Deployment, Service, ConfigMap, and Secrets.

## Getting Started

### Kubernetes Deployment

1. Install and configure Minikube/Docker-desktop or use a Kubernetes cluster of your choice.

2. Deploy the application using Kubernetes manifests:

3. Clone the repository:

```bash
git clone https://github.com/iAhmedMusa/k8s-basic.git
cd k8s-basic
```

4. Create a namespace `ns1`

```bash
kubectl create namespace ns1
```

5. Deploy Secrets, ConfigMap, Deployment, services:

```bash
- kubectl apply -f mongo-secret.yaml
- kubectl apply -f mongo-configmap.yaml
- kubectl apply -f mongo.yaml
- kubectl apply -f mongo-express.yaml
- kubectl apply -f ahmed-app.yaml
```

6. Monitor the deployment:

```bash
kubectl get pods -n ns1
```

5. Access the application:

```bash
- kubectl get services -n ns1
```
Visit the external IP or NodePort to access the application.

The application will be accessible at `http://localhost:5500`.

MongoDB UI will be accessible at `http://localhost:5678`.


## Application Structure

The application follows a structure:

- `server.js`: Main application file.
- `views/`: EJS templates.



## MongoDB UI

MongoDB UI is included in the deployment for easy database management. Access it using the provided external IP or NodePort.

## License

This CRUD application is open-source and distributed under the [MIT License](LICENSE). Feel free to use, modify, and distribute as needed.
