// union: ket hop

let age: number | string = 32

age = "ba muoi hai"

type Account = {
    email:string,
    password:string
}

type Information = {
    avatar:string,
    address:string[],
    age:number;
}

type UserInfor = Account & Information

let userA = {email:"f8@gmail.com",
    password:"123456",
    avatar:"https://avatar.png",
    address:["Hoai Duc - HN"],
    age: 33, 
}