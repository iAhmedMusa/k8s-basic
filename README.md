# Assessment details

A basic application deployed into a K8s cluster. Used EKS. There are three microservices

- A nodejs application (Custom dockerized app)
- MongoDB GUI (Mongo Express)
- MongoDB as Database

### Links

To access the application,

```
http://ace718caf1db34618bdf141a18c7370e-785151129.ap-southeast-1.elb.amazonaws.com:8080/
```

To access the DB GUI,

```
http://acfe302d1947d4193bd4995753d14104-1945513419.ap-southeast-1.elb.amazonaws.com:8081/
```

Container Registry,

```
https://hub.docker.com/r/ahmedmusa/express-crud-mongo/tags
```

### Docker file location

/app/Dockerfile
