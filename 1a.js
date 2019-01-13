let callbtn = document.querySelector("#callbtn");

let signupBtn = document.querySelector("#signup");

 callbtn.addEventListener("click", docall);

// require(['fs'], function (fs){
//     console.log('fs is now loaded')
// })


function docall() {
    let carno = document.querySelector("#carno").value
    // console.log(username, pwd);

    fetch("https://api.jsonbin.io/b/5c39efac7b31f426f8573145/latest")
    .then(res => res.json()
    .then(data => checkCredentials(data, carno,))
    )
}

// function checkCredentials(data, carno,) {
//     console.log(data);
//     console.log(carno);

//     for(let i=0; i<data.length; i++){
//         if(carno == data[i].carno ){
//             phn = data[i].phn;
//             console.log(phn);
//             console.log('success');
            
//             const accSid = "AC7461c843aad174daae516d26a92a6e31";
//      const authToken = "cef7a23385cb5236fc9e6f0151879737";
//      const client = require('twilio')(accSid, authToken);
    
//      client.calls.create(
//        {
//         url: 'https://pastebin.com/raw/DVbVckd0',
//          to: '+919971804516',
//          from: '+14695186067',
//        },
//        (err, call) => {
//         if(err){console.log(err);}
//    else{
//          console.log(call.sid);
//        }}
//      );

//             break
//         } else {
//             console.log("invalid credentials");
            
//         }
//     }
// }

















// const accSid = "AC7461c843aad174daae516d26a92a6e31";
// const authToken = "cef7a23385cb5236fc9e6f0151879737";
// const client = require('twilio')(accSid, authToken);

// client.calls.create(
//   {
//     url: 'https://pastebin.com/raw/DVbVckd0',
//     to: '+919971804516',
//     from: '+14695186067',
//   },
//   (err, call) => {
//    if(err){console.log(err);}
//   else{
//     console.log(call.sid);
//   }}
// );
