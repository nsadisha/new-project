const signinForm = document.querySelector('#signin-form');

signinForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const email = signinForm['email'].value;
    const password = signinForm['password'].value;

    firebase.auth().signInWithEmailAndPassword(email, password).then(res => {
        console.log('Sign in successfull!');
        // window.location.href = "/profile/index.html";
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      
        console.log(errorMessage);
        });
})






















function signin(){
    let isok = true;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  
    console.log(errorMessage);
    });
  }