require('dotenv').config()
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var companyDB = require('./inMemoryDb').companyDB
var employeesDB = require('./inMemoryDb').employeesDB
var jobsDB = require('./inMemoryDb').jobsDB
// const MongoClient = require('mongodb').MongoClient;

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

// nexmo.message.sendSms(from, to, text)
var app = express();

// Connection URL
//const dbURL = process.env.DB_URL;

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

function updateJobEmployee(phone, timestamp, keyword, callback) {
  console.log("updating", employeesDB)
  const employeeID = employeesDB.find(employee => employee.phone === phone)["id"]
  const job = jobsDB.find(job => job.assignee_id === employeeID)
  console.log("THIS IS THE JOB BEFORE", job)
  if (keyword.toLowerCase() === "here") {
    job["actual_time_started"] = timestamp 
    console.log("TIME STARTED UPDATED", job)
    return callback({
      msg: "Time Start Update Successful.",
      status: 200,
      job
    })
  } else if (keyword.toLowerCase() === "done") {
    job["actual_time_ended"] = timestamp
    job["completed"] = true
    console.log("TIME ENDED UPDATED", job)
    return callback({
      msg: "Time End Update Successful.",
      status: 200,
      job
    })
  }
}

function updateJobManager(job_id) {
  const job = jobsDB.find(job => job.id === job_id)
  job["approved"] = true
  console.log("LoOK AT THE JOB NOW", job)
  const employeeID = job['assignee_id']
  const employee = employeesDB.find(employee => employee.id === job['assignee_id'])
  employee['points'] += job['points']
}

function handleInboundSms(req, res) {
  const params = Object.assign(req.query, req.body)
  console.log(params)
  updateJobEmployee(params['msisdn'], params['message-timestamp'], params['keyword'], (response) => {
    console.log("HELLO this is a response", response)
    res.send(response)
  })
}

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
