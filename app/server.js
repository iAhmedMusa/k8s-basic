const express = require("express");
const bodyParser = require("body-parser")
const app = express()
const MongoClient = require("mongodb").MongoClient;
let ObjectId = require("mongodb").ObjectID;

// MongoDB config
const db_server = process.env.MONGODB_SERVER
const db_user = process.env.MONGODB_ADMINUSERNAME
const db_password = process.env.MONGODB_ADMINPASSWORD

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`System listening on :${port}`);
});

const url = `mongodb://${db_user}:${db_password}@${db_server}:27017`;
const dbName = process.env.DB_NAME;
let db;

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) return console.log(err);
    
    db = client.db(dbName);
    console.log(`Connected MongoDB with ${url}`)
    console.log(`Database: ${dbName}`)

    const personsCollection = db.collection("persons");
    

    app.set('view engine', 'ejs')

    app.use(bodyParser.urlencoded({ extended: true }));

    app.get("/", (req, res) => {
        // res.sendFile(__dirname + "/index.html");
        personsCollection.find().toArray()
            .then((results) => {
                // res.send(results)
                res.render('index.ejs', { output: results })
                // console.log('at root directory');
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


    app.get("/api", (req, res) => {
        personsCollection.find().toArray()
            .then((rs) => {
                res.send(rs);
            })
            .catch((e) => console.error(e));
    })


});
// console.log('May Allah be with ME');