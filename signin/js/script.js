let email = document.getElementById("email");
let password = document.getElementById("password");

let check = document.getElementById("show-password");
check.checked = false;

function Showpass(){
    if(check.checked){
        password.type = "text";
        
    }else{
        password.type = "password";
    }
}

// firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//       // User is signed in.
//       console.log(user.email+" Signed in.");
//     } else {
//       // No user is signed in.
//       console.log("sign in plz");
//     }
//   })

// function signout(){
//   firebase.auth().signOut().then(function() {
//     console.log('Signed out!');
//   }).catch(function(error) {
//     console.log(error);
//   });
  
// }