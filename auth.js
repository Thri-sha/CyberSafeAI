// ===============================
// CyberSafe AI - auth.js (Part 1)
// ===============================

import { auth, db } from "./firebase.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  doc,
  setDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Registration Elements
const registerBtn = document.getElementById("registerBtn");

// Login Elements
const loginBtn = document.getElementById("loginBtn");

// Message Area
const message = document.getElementById("message");
// ===============================
// Registration
// ===============================

if (registerBtn) {

registerBtn.addEventListener("click", async () => {

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

if(name==="" || email==="" || password===""){
message.innerHTML="Please fill all fields.";
return;
}

try{

const userCredential = await createUserWithEmailAndPassword(
auth,
email,
password
);

const user = userCredential.user;

// Save user data in Firestore

await setDoc(doc(db,"users",user.uid),{

name:name,
email:email,
createdAt:serverTimestamp()

});

message.style.color="green";
message.innerHTML="Registration Successful!";

setTimeout(()=>{

window.location.href="login.html";

},1500);

}catch(error){

message.style.color="red";
message.innerHTML=error.message;

}

});

}
// ===============================
// Login
// ===============================

if (loginBtn) {

loginBtn.addEventListener("click", async () => {

const email = document.getElementById("loginEmail").value;
const password = document.getElementById("loginPassword").value;

if(email==="" || password===""){
message.style.color="red";
message.innerHTML="Please enter email and password.";
return;
}

try{

await signInWithEmailAndPassword(auth,email,password);

message.style.color="green";
message.innerHTML="Login Successful!";

setTimeout(()=>{

window.location.href="index.html";

},1500);

}catch(error){

message.style.color="red";
message.innerHTML=error.message;

}

});

}