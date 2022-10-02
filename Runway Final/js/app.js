const auth = firebase.auth();

const whenSignedIn = document.getElementById("whenSignedIn");
const whenSignedOut = document.getElementById("whenSignedOut");

const signInBtn = document.getElementById("signInBtn");
const signOutBtn = document.getElementById("signOutBtn");

const userDetails = document.getElementById("userDetails");

const provider = new firebase.auth.GoogleAuthProvider();

signInBtn.onclick = () => auth.signInWithPopup(provider);
signOutBtn.onclick = () => auth.signOut();

auth.onAuthStateChanged(user => {
    if(user) {
        whenSignedIn.hidden = false;
        whenSignedOut.hidden = true;
        $("#userName").html("Username: " + user.displayName);
        $("#userEmail").html("User email: " + user.email);
        $("#userId").html("User Id: " + user.uid);
        console.log(user);
    }
    else {
        whenSignedIn.hidden = true;
        whenSignedOut.hidden = false;
    }
    
});

