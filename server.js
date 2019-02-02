const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//bodyparser
app.use(bodyParser.urlencoded({ extended: true }));

//setting ejs

app.set("view engine", "ejs");

//use css

app.use(express.static("public"));

const people = [
  {
    name: "Jon",
    email: "jon@gmail.com",
    mobile: "9874563210",
    jobTitle: "Tester"
  },
  {
    name: "Jack",
    email: "jack@gmail.com",
    mobile: "9877893210",
    jobTitle: "Developer"
  },
  {
    name: "Sharon",
    email: "sharon@gmail.com",
    mobile: "7884563210",
    jobTitle: "Manager"
  }
];

// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
  res.render("index");
  //console.log(people);
});

app.post("/", (req, res) => {
  let newadd = {
    name: "",
    email: "",
    mobile: "",
    jobTitle: ""
  };
  newadd.name = req.body.name;
  newadd.email = req.body.email;
  newadd.mobile = req.body.mobile;
  newadd.jobTitle = req.body.job;

  people.push(newadd);

  res.render("index", { people: people });
  console.log(people);
});

app.listen(3000, () => {
  console.log("Listening to port 3000");
});
