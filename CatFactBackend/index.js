import express from 'express';
import cors from 'cors';


const app = express();


app.use(cors());

app.use(express.json())

app.get("", (request, response) => {


    response.send('hwyyyyyy')
})

app.get("/asdfsdaf", (request, response) => {
    response.send('asdfsdaf')
})

app.get('/cat-fact', (req, res) => {

    let fact = {
        fact: "A cat can spend five or more hours a day grooming himself.",
        length: 58
    }


    res.json(fact)
})



let users = ["Sagar", "Mike"]


app.get('/users', (req, res) => {

    res.json(users)
})

app.post('/users', (req, res) => {

    users.push(req.body.username)

    res.json(users)
})


app.listen('3000')
console.log('server listening on port 3000')