const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser")
const app = express()
const port = 3000
const MongoClient = require("mongodb").MongoClient;
let ObjectId = require("mongodb").ObjectID;

app.listen(port, () => {
    console.log(`System listening on port: ${port}`);
});

const dbHost = process.env.DB_HOST || "";
const dbUser = process.env.DB_USER || "";
const dbPass = process.env.DB_PASS || "";
const dbName = process.env.DB_NAME || "";

// const dbHost = process.env.DB_HOST || "";
// const dbPort = process.env.DB_PORT || "";
// const dbUser = process.env.DB_USER || "";
// const dbPass = process.env.DB_PASS || "";
// const dbName = process.env.DB_NAME || "";

const url = "mongodb://"+dbUser+":"+dbPass+"@"+dbHost;
let db;

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) return console.log(err);
    
    db = client.db(dbName);
    console.log(`Database connection connected with ${url}`)
    console.log(`Database Name: ${dbName}`)

    const personsCollection = db.collection("persons");
    
    app.set('view engine', 'ejs')

    app.use(bodyParser.urlencoded({ extended: true }));

    app.get("/", (req, res) => {
        personsCollection.find().toArray()
            .then((results) => {
                res.render('index.ejs', { output: results })
            })
            .catch((e) => console.error(e));
    });

    app.post("/insert", (req, res) => {
        let name = req.body.name;
        console.log(name);
        personsCollection.insertOne(req.body)
            .then((result) => {
                res.redirect("/");
                console.log('Data inserted');
            })
            .catch((e) => console.error(e));
    });

    app.get("/create/:id", (req, res) => {
        const id = req.params.id;
        personsCollection.find({_id : ObjectId(id)}).toArray()
            .then((results) => {
                res.render('createProfile.ejs' , { output: results })
            })
            .catch((e) => res.send(e));
    });


    app.post("/update/:id", (req, res) => {
        const id = req.params.id;
        personsCollection.updateOne({_id: ObjectId(id)}, {$set: {"name" : (req.body.name), "phone" : (req.body.phone)}})
        .then((result) => {
            res.redirect("/");
            console.log('Data updated');
        })
        .catch((e) => console.error(e));
    });

    app.get("/delete/:id", (req, res) => {
        const id = req.params.id;
        console.log('your id is: '+ id);
        personsCollection.deleteOne( {_id : ObjectId(id)} )
            .then((result) => {
                res.redirect("/");
                console.log('Data Deleted');
            })
            .catch((e) => console.error(e));
    });
});