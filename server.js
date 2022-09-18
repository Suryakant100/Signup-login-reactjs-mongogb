const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const port = 9002

const app = express();
app.use(express.json());
// app.use(express.urlencoded());
app.use(cors());

mongoose.connect(
  "mongodb://localhost:27017/testdb",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB connected");
  }
);

const userSchema = new mongoose.Schema({
  fname: "",
  lname: String,
  email: String,
  password: String,
});

const User = new mongoose.model("User", userSchema);

//Routes
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  //check email
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      //check password
      if (password === user.password) {
        res.send({ message: "Login successfully", user: user });
      } else {
        res.send({ message: "Password and confirm password didn't match" });
      }
    } else {
      res.send({ message: "Please login to proceed" });
    }
  });
});

app.post("/signup", (req, res) => {
  const { fname, lname, email, password } = req.body;
  //check email
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User is already registerd" });
    } else {
      const user = new User({
        fname,
        lname,
        email,
        password,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Account has been created!! Successfully" });
        }
      });
    }
  });
  // res.send("register");
  //   console.log(req.body);
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Sever is running on port ${port}`);
});

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })