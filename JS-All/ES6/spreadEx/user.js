const bcrypt = require('bcrypt')
let user = {
    name: "Rahul",
    email: "rahul@tcs.com",
    password: '123456',
    cc: '5566 7788 2222 4444',
    cvv: '123'
}
//user sensive data to hashed formart
//using bcrypt JS

let salt = bcrypt.genSaltSync(10);
let newCC = bcrypt.hashSync(user.cc, salt);
let newPassword = bcrypt.hashSync(user.password, salt)
let newCVV = bcrypt.hashSync(user.cvv, salt)
/* console.log(user.cc)
console.log(newCC)
console.log(newPassword)
console.log(newCVV) */


let new_User = { ...user, cc: newCC, password: newPassword, cvv: newCVV }
console.log(user)
console.log(new_User)