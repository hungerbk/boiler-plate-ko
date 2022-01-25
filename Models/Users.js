const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50
  },
  email: {
    type: String,
    trim: true, //공백 제거
    unique: 1 //하나만 존재할 수 있음
  },
  password: {
    type: String,
    minlength: 5
  },
  lastname:{
    type: String,
    maxlength: 50
  },
  role: { //관리자, 일반 사용자 등의 역할 부여
    type: Number,
    default: 0
  },
  image: String,
  token: {
    type: String
  },
  tokenExp: { //토큰 유효기간
    type: Number
  }
})

const User = mongoose.model('User', userSchema); //(모델 이름, 사용할 스키마)

module.experts = { User }; // User 모델을 다른 파일에서도 쓸 수 있게 함
