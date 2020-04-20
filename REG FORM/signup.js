const signupForm = document.querySelector('#signup-form');

let db = firebase.firestore();

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const firstName = signupForm['first-name'].value;
    const district = signupForm['district'].value;
    const lastName = signupForm['last-name'].value;
    const town = signupForm['town'].value;
    const email = signupForm['email'].value;

    const photoEditing = signupForm['photo-editing'].checked;
    const videoEditing = signupForm['video-editing'].checked;
    const logoDesigning = signupForm['logo-designing'].checked;
    const interiorDesign = signupForm['interior-design'].checked;
    const printDesigns = signupForm['print-designs'].checked;
    const graphicArts = signupForm['graphic-arts'].checked;
    const artAndIllustration = signupForm['art-and-illustration'].checked;
    const photography = signupForm['photography'].checked;
    const password = signupForm['password'].value;
    const confirmPassword = signupForm['confirm-password'].value;

    firebase.auth().createUserWithEmailAndPassword(email, password).then(cred => {
        
        return db.collection('users').doc(cred.user.uid).set({
            firstName : firstName,
            lastName : lastName,
            email : email,
            profile_pic_url : null,
            cover_pic_url : null,
            district : district,
            town : town,
            businesstype : {
                photo_editing : photoEditing,
                video_editing : videoEditing,
                logo_designing : logoDesigning,
                interior_design : interiorDesign,
                print_designs : printDesigns,
                graphic_arts : graphicArts,
                art_and_illustration : artAndIllustration,
                photography : photography
            },
            contact : {
                phone : null,
                email : null,
                website : null,
                facebook : null,
                instagram : null
            },
            about : null,
            packages_prices : null,
            gallery : {}
        });
    }).then(() => {
        console.log('Successfull!');
        signupForm.reset();
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        
        console.log(errorMessage);
        window.alert(errorMessage);
    });
})