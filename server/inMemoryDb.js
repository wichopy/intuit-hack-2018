var companyDB = {
	company_name: "Dirty Boi Cleaning Services",
  project_manager: "David Patel",
  email: "kdfgj@grjk.com",
  paswrd: "123456",
  employees: employeesDB
}

var employeesDB = [
	{
    "id": 1,
    "name": "Jim Halpert",
    "phone": "16134002850",
    "points": 130
  },
	{
    "id": 2,
    "name": "Michael Scott",
    "points": 200
  },
  {
    "id": 3,
    "name": "Dwight Schrute",
    "points": 5
  },
  {
    "id": 4,
    "name": "Pam Beesly",
    "points": 500
  },
  {
    "id": 5,
    "name": "Andy Bernard",
    "points": 20
  }
]

var jobsDB = [
  {
  	"id": 1,
	  "assignee_id": 1,
	  "name": "Darius Meek",
	  "address": "6ix Place",
	  "phone_number": 567890123,
	  "description": "Friday night party woes. Dirty dishes, spilled beers, stained cupbards, clogged toilet.",
	  "est_start": "2018-12-01 21:35:00",
	  "est_end": "2018-12-01 21:40:00",
	  "actual_time_started": "",
	  "actual_time_ended": "",
	  "points": 100,
	  "imgs": [],
	  "completed": false,
	  "approved": false
	}
]


module.exports = {
	companyDB,
	employeesDB,
	jobsDB
}