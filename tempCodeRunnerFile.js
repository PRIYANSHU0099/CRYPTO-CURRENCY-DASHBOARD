const express = require('express')
const app = express()
const port = 3000
var request = require('request')
var multer = require('multer');
var upload = multer();
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(upload.array());

let mData = ""
let coinName = "bitcoin"
let mChart = ""


async function resData(coinName){
    var marketData = await new Promise((resolve,reject)=>{
        request('https://api.coingecko.com/api/v3/coins/' + coinName, function (error, response, body) {
            console.error('error:', error); 
            console.log('statusCode:', response && response.statusCode); 
            console.log('body:', typeof body);
            mData = JSON.parse(body)
            console.log(mData)
        resolve(mData)
        });
    })
