'use strict';


function User(uName, password, age, email, phoneNumber, bankCard){
  this.userId = uName + phoneNumber;
  this.uName = uName;
  this.password = password;
  this.age = age;
  this.email = email;
  this.phoneNumber = phoneNumber;
  this.bankCard = bankCard;
}
