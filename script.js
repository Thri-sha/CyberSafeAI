// ===============================
// CyberSafe AI - JavaScript Part 1
// ===============================

// -------- Mobile Menu --------
function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("show");
}

// -------- Smooth Scroll --------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// -------- Dark Mode --------
const darkBtn = document.getElementById("darkModeBtn");

if(darkBtn){
    darkBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });
}

// -------- Welcome Message --------
window.onload = function(){

    const msg = document.getElementById("welcomeMessage");

    if(msg){
        msg.innerHTML =
        "👋 Welcome to <b>CyberSafe AI</b>. Stay safe from online scams and cyber attacks!";
    }

}

// ===============================
// Offline Chatbot
// ===============================

function sendMessage(){

    const input = document.getElementById("userInput");
    const chatBox = document.getElementById("chatBox");

    if(input.value.trim()==""){
        return;
    }

    let userMessage = input.value;

    chatBox.innerHTML +=
    "<div class='user'><b>You:</b> "+userMessage+"</div>";

    let message = userMessage.toLowerCase();

    let reply = "";

    if(message.includes("hello") || message.includes("hi")){
        reply="Hello! 😊 How can I help you today?";
    }

    else if(message.includes("password")){
        reply="Use at least 12 characters with uppercase, lowercase, numbers and symbols.";
    }

    else if(message.includes("phishing")){
        reply="Never click suspicious links. Always verify the sender.";
    }

    else if(message.includes("otp")){
        reply="Never share your OTP with anyone.";
    }

    else if(message.includes("scam")){
        reply="Scammers create urgency. Stop and verify before paying.";
    }

    else if(message.includes("virus")){
        reply="Install antivirus and keep your system updated.";
    }

    else if(message.includes("safe")){
        reply="Use strong passwords and enable Two-Factor Authentication.";
    }

    else if(message.includes("thank")){
        reply="You're welcome! Stay cyber safe.";
    }

    else{
        reply="Sorry, I'm an offline chatbot. Please ask about passwords, scams, phishing, OTP, viruses or online safety.";
    }

    setTimeout(function(){

        chatBox.innerHTML +=
        "<div class='bot'><b>CyberSafe AI:</b> "+reply+"</div>";

        chatBox.scrollTop=chatBox.scrollHeight;

    },500);

    input.value="";
}

// Press Enter to Send
const inputBox=document.getElementById("userInput");

if(inputBox){

inputBox.addEventListener("keypress",function(event){

if(event.key==="Enter"){

sendMessage();

}

});

}
// ===============================
// Password Strength Checker
// ===============================

function checkPassword() {

    const password = document.getElementById("passwordInput").value;
    const result = document.getElementById("passwordResult");

    if (password.length === 0) {
        result.innerHTML = "Please enter a password.";
        return;
    }

    let score = 0;

    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    let strength = "";
    let crackTime = "";
    let color = "";

    if (score <= 2) {
        strength = "Very Weak";
        crackTime = "Less than 1 minute";
        color = "red";
    }
    else if (score === 3) {
        strength = "Weak";
        crackTime = "A few hours";
        color = "orange";
    }
    else if (score === 4) {
        strength = "Medium";
        crackTime = "Several months";
        color = "#e6b800";
    }
    else if (score === 5) {
        strength = "Strong";
        crackTime = "Hundreds of years";
        color = "green";
    }
    else {
        strength = "Very Strong";
        crackTime = "Millions of years";
        color = "darkgreen";
    }

    result.innerHTML = `
        <b>Password Strength:</b> <span style="color:${color}">${strength}</span><br>
        <b>Estimated Crack Time:</b> ${crackTime}<br><br>
        <b>Tips:</b>
        <ul>
            <li>Use at least 12 characters.</li>
            <li>Mix uppercase and lowercase letters.</li>
            <li>Include numbers.</li>
            <li>Add special symbols like @, #, $, %.</li>
            <li>Never reuse passwords.</li>
        </ul>
    `;
}
function showChat() {
    document.getElementById("chatbot").scrollIntoView({
        behavior: "smooth"
    });
}

function showPassword() {
    document.getElementById("password").scrollIntoView({
        behavior: "smooth"
    });
}

function showQuiz() {
    document.getElementById("quiz").scrollIntoView({
        behavior: "smooth"
    });
}

function showScam() {
    document.getElementById("alerts").scrollIntoView({
        behavior: "smooth"
    });
}
// ===============================
// Cyber Security Quiz
// ===============================

const quizQuestions = [
{
question: "1. What should you never share with anyone?",
options: ["OTP", "Name", "City", "Age"],
answer: "OTP"
},
{
question: "2. Which password is strongest?",
options: ["123456", "password", "Admin123", "T@9xL#8qP!2"],
answer: "T@9xL#8qP!2"
},
{
question: "3. What is phishing?",
options: [
"A fishing game",
"A fake attempt to steal information",
"An antivirus",
"A browser"
],
answer: "A fake attempt to steal information"
},
{
question: "4. Before clicking a link, you should...",
options: [
"Click immediately",
"Verify the website",
"Ignore everything",
"Turn off Wi-Fi"
],
answer: "Verify the website"
},
{
question: "5. Two-Factor Authentication improves...",
options: [
"Security",
"Internet speed",
"Battery",
"Brightness"
],
answer: "Security"
},
{
question: "6. Which is a common online scam?",
options: [
"Lottery message",
"School notice",
"Weather report",
"Calculator"
],
answer: "Lottery message"
},
{
question: "7. Public Wi-Fi should not be used for...",
options: [
"Gaming",
"Watching videos",
"Banking",
"Reading news"
],
answer: "Banking"
},
{
question: "8. Antivirus software helps protect against...",
options: [
"Viruses",
"Rain",
"Electricity",
"Bluetooth"
],
answer: "Viruses"
},
{
question: "9. QR codes should be scanned only when...",
options: [
"Trusted",
"Random",
"Unknown",
"Fake"
],
answer: "Trusted"
},
{
question: "10. CyberSafe AI helps users learn...",
options: [
"Cooking",
"Cyber Security",
"Drawing",
"Music"
],
answer: "Cyber Security"
}
];

function startQuiz(){

let html="";

quizQuestions.forEach((q,index)=>{

html+=`
<div style="margin-bottom:20px;">
<h3>${q.question}</h3>

${q.options.map(option=>`
<label>
<input type="radio"
name="q${index}"
value="${option}">
${option}
</label><br>
`).join("")}

</div>
`;

});

html+=`
<button onclick="submitQuiz()">
Submit Quiz
</button>

<div id="quizResult"></div>
`;

document.getElementById("quizContainer").innerHTML=html;

}

function submitQuiz(){

let score=0;

quizQuestions.forEach((q,index)=>{

let answer=document.querySelector(
'input[name="q'+index+'"]:checked'
);

if(answer && answer.value===q.answer){
score++;
}

});

document.getElementById("quizResult").innerHTML=
`
<h2>Your Score: ${score}/10</h2>

${score>=7?
"<h3 style='color:green;'>🎉 Congratulations! You Passed!</h3><button onclick='downloadCertificate()'>Download Certificate</button>"
:
"<h3 style='color:red;'>Keep Learning and Try Again!</h3>"
}
`;

}
function downloadCertificate(){

const name=prompt("Enter your Name");

if(name==null || name=="") return;

const certificate=`
🏆 CYBERSAFE AI CERTIFICATE 🏆

This certifies that

${name}

has successfully completed the

Cyber Security Awareness Quiz.

Congratulations!

CyberSafe AI
`;

const blob=new Blob([certificate],{type:"text/plain"});

const link=document.createElement("a");

link.href=URL.createObjectURL(blob);

link.download="CyberSafeAI_Certificate.txt";

link.click();

}
// ===============================
// Contact Form Validation
// ===============================

const contactForm = document.querySelector("#contact form");

if (contactForm) {

contactForm.addEventListener("submit", function(e) {

e.preventDefault();

const name = contactForm.querySelector('input[type="text"]').value.trim();
const email = contactForm.querySelector('input[type="email"]').value.trim();
const message = contactForm.querySelector("textarea").value.trim();

if (name === "" || email === "" || message === "") {
    alert("Please fill all fields.");
    return;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
}

alert("✅ Thank you! Your message has been sent successfully.");

contactForm.reset();

});

}

// ===============================
// Random Cyber Safety Tip
// ===============================

const safetyTips = [
"Never share your OTP with anyone.",
"Use a different password for every account.",
"Enable Two-Factor Authentication.",
"Keep your software updated.",
"Never click suspicious links.",
"Verify QR codes before scanning.",
"Avoid public Wi-Fi for banking.",
"Install trusted antivirus software."
];

function showRandomTip() {

const random = Math.floor(Math.random() * safetyTips.length);

alert("🛡️ Cyber Safety Tip:\n\n" + safetyTips[random]);

}

// Show a tip every 30 seconds
setInterval(showRandomTip, 30000);

// ===============================
// Welcome Popup
// ===============================

setTimeout(function() {
alert("👋 Welcome to CyberSafe AI!\nStay alert. Stay secure.");
}, 1000);