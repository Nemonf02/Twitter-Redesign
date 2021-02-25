const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const mongo = require('./api/mongo')
const tweet = require('./api/tweet')
const user = require ('./api/user');
const Tweet = require('./models/Tweet');
const mongoPath = require('./api/mongo');

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/tweet', tweet)
app.use('/user', user)

mongoose.connect('mongodb://localhost/twitter',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error(err))


app.get('/', (req, res) =>{
    res.send('This is my first path')
})

// app.get("/getTrends", (request, response, next) => {
//     console.log("Received Get trends request for Country : " + request.query.country  + " Date  : " + request.query.date)
 
//     getDataUrl(  request.query.country , request.query.date  ).then( dataUrl => {
 
//         getTrendsData(dataUrl).then( topTrends => {
 
//                     response.json( topTrends ) ;
 
//                     pickedUpArray = {};
 
//         });
//     });  
// });

app.get('/aacount/settings', (req, res) =>{
    res.send(req.params)
})

app.post('/statuses/update', (req, res) =>{
    res.send('this works')
})







const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port} ...`))

//Timeline
//Profile
