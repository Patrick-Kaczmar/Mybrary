const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log("here");
    res.send({message: "error"})
})

const userRouter = require('./routes/users')

app.use('/users', userRouter)

app.listen(3000);

console.log("server is listening on localhost:3000")