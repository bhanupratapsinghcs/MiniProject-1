const router = require('./routers/submitQues')
const router2 = require('./routers/viewQuiz')
const router3 = require('./routers/startQuiz')
const userRoute = require('./routers/UserCradRoute')
const express = require('express');
const { urlencoded } = require('body-parser');
const mongoose = require('mongoose')

const cors = require('cors')
const app = express();
const port = 80;
const server = app.listen(port, () => { console.log('Listening..') })

app.use(urlencoded({ extended: true }))
app.use(cors());


mongoose.connect('mongodb://localhost:27017/quizmania', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then((result) => server)
    .catch((err) => console.log(err));

mongoose.connection.once('open', () => {
    console.log('connection made');
}).on('err', (err) => {
    console.log(err);
})

router2(app);
router(app);
router3(app, server);
userRoute(app);