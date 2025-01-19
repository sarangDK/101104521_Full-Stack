


// express is a module that makes it easier to create a server
// express 모듈을 사용하여 서버를 쉽게 만들수있음 
const express = require('express');
// app is an instance of express - 하나의 서버를 만들어주는 것 
const app = express();


// app.get()은 서버에 GET 요청이 오면 어떻게 응답할지를 설정하는 함수
app.get('/', (req, res) => {
    res.send('Hello World');
});

// /about 경로로 요청이 오면 'About Us'를 응답
app.get('/about', (req, res) => {
    res.send('About Us');
});

// /contact 경로로 요청이 오면 'Contact Us'를 응답
app.get('/contact', (req, res) => {
  res.send('Contact Us');
});

app.get('/hello', (req, res) => {
  res.status(200)
  res.send('Hello World!\n');
});
// /hello 경로로 요청이 오면 'Hello World'를 응답
app.post('/hello', (req, res) => {
  res.status(201).send('You just called the post method at "/hello"!\n');
});

app.put('/hello', (req, res) => { 
  res.status(203).send('You just called the put method at "/hello"!\n');
});

app.delete('/hello', (req, res) => {
  res.status(204)
  res.send('You just called the delete method at "/hello"!\n');
});

app.get("/student", (req, res) => {
  res.status(200)
  const stud = {
    name: "John Doe",
    age: 25,
  }
  res.json(stud);
  
});

// Query String Parameters
//http://localhost:3000/student/steven/park/toronto
//http://localhost:3000/student?name=steven&city=toronto

app.get('/employee', (req, res) => {
  console.log(req.query);
  // res.send(res.query);
  const fnm = req.query.fnm;
  const lnm = req.query.lnm;
  res.send(`Firstname: ${fnm} , Last Name: ${lnm}`);

  });

  // path parameters -> url 에 있는 값을 가져올때 사용
  app.get('/employee/:fnm/:lnm:/city', (req, res) => {
    console.log(req.params);
    const fnm = req.params.fnm;
    const lnm = req.params.lnm;
    // params 은 url 에 있는 값을 가져올때 사용 
    const city = req.params.city;
    res.send(`Firstname: ${fnm} , Last Name: ${lnm}`);
  });

// app.listen()은 서버를 시작하는 함수이며 첫번째 인자로 포릍번호를 받음
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000"); 
});