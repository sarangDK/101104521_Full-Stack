const express = require('express');
const path = require('path');
const app = express();
const User = require('./user.json');
const router = express.Router();
const fs = require('fs');


/* - Done
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
router.get('/home', (req,res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

/* -- D
- Return all details from user.json file to client as JSON format
*/ 
router.get('/profile', (req,res) => {
  fs.readFile(path.join(__dirname, 'user.json'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Server Error');
    }
  res.json(JSON.parse(data));
  });
});

/*
- Modify /login router to accept username and password as JSON body parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
app.use(express.json());
router.post('/login', (req, res) => {
  const { username, password } = req.body;


  fs.readFile(path.join(__dirname, 'user.json'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ status: false, message: 'Server Error' });
    }


    const user = JSON.parse(data);
   
    // Check if both username and password are valid
    if (user.username === username && user.password === password) {
      return res.json({ status: true, message: 'User Is valid' });
    }

    // If username is invalid
    if (user.username !== username) {
      return res.json({ status: false, message: 'User Name is invalid' });
    }

    // If password is invalid
    return res.status(401).json({ status: false, message: 'Password is invalid' });
  });
});
/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout', (req,res) => {
  const {username} = req.query;

  if(!username) {
    return res.status(400).send('Bad Request');
  }

  res.send(`<b>${username} successfully logout.</b>`);
});

/*
Add error handling middleware to handle below error
- Return 500 page with message "Server Error"
*/

router.get('/error', (req,res) => {
  throw new Error('This is error router');
});
app.use((err,req,res,next) => {
  console.error(err.stack); 
  res.status(500).send('Server Error');
});

app.use('/', router);

app.listen(process.env.port || 8082);

console.log('Web Server is listening at port '+ (process.env.port || 8082));
console.log('Open http://localhost:8082/home in browser');
console.log('Open http://localhost:8082/profile in browser');
console.log('Open http://localhost:8082/login in browser');
console.log('Open http://localhost:8082/logout in browser');
console.log('Open http://localhost:8082/error in browser');
