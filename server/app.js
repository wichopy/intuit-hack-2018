require('dotenv').config()
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const MongoClient = require('mongodb').MongoClient;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const Nexmo = require('nexmo')

const nexmo = new Nexmo({
  apiKey: process.env.NEXMO_API_KEY,
  apiSecret: process.env.NEXMO_SECRET
})

const from = process.env.MANAGER_PHONE_NUMBER
const to = process.env.JIM_PHONE_NUMBER
const text = 'Hello from Nexmo'

nexmo.message.sendSms(from, to, text)
var app = express();

// Connection URL
const dbURL = process.env.DB_URL;

const updateTask = (phone, timeStamp) => {
  // Use connect method to connect to the server
  return new Promise((res, rej) => {
    MongoClient.connect(dbURL, function (err, client) {
      console.log("Connected successfully to server");
      // console.log(client)
      console.log('err', err)
      const db = client.db(process.env.DB_NAME);
      console.log('db', collection)
      console.log(collection)
      db.manager.find({})
      // const employee = collection.employees.filter(employee => employee.phone === phone)
      // console.log(employee)
      // res(employee)
      //   db.employees.findOne({ phone }, function (err, employee) {
      //     if (err) {
      //       rej(err)
      //       return
      //     }
      //     console.log(employee)
      //     res(employee)
      //     client.close();
      //   })
      //   console.log("Close DB");
      //   client.close();
    });
  })
}

const start = new Date().getTime();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app
  .route('/webhooks/inbound-sms')
  .get(handleInboundSms)
  .post(handleInboundSms)

function handleInboundSms(request, response) {
  const params = Object.assign(request.query, request.body)
  console.log(params)
  const done = new Date(params['message-timestamp']).getTime();
  // Look at the phone number,
  // Find the employee that has this phone number,
  // Find the job that the employee is working on.
  // If not started, updated the start time.
  // If started, updated the end time.


  console.log(start)
  console.log(done)
  // 'YYYY-MM-DD HH:MM:SS'

  console.log('This guy took this long:', done - start)
  // updateTask(params['msisdn:'], params['message-timestamp']).then(response => {
  response.status(204).send();
  // }).catch(err => {
  //   response.status(500).send(err);
  // })
}

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
