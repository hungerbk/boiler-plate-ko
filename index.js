const express = require('express'); //express 모듈 가져옴
const app = express(); //가져온 모듈을 통해 새로운 앱을 만듦
const port = 5000;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://hungerbk:1q23we4r@cluster0.x68tt.mongodb.net/cluster0?retryWrites=true&w=majority').then(() => console.log('MongoDB Connected..')) //연결 시 메시지
  .catch(err => console.log(err)) //에러 시 메시지


app.get('/', (req, res) => {
  res.send('Hello World!')
}) //root 디렉토리에 hello world 출력되게 함

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`) //port 접속하면 해당 문구 보여줌
})
