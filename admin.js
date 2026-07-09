import { db } from "./firebase.js";

import {
collection,
getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

async function loadUsers() {

const querySnapshot = await getDocs(collection(db, "users"));

const table = document.getElementById("userTable");

table.innerHTML = "";

querySnapshot.forEach((doc) => {

const user = doc.data();

table.innerHTML += `
<tr>
<td>${user.name}</td>
<td>${user.email}</td>
</tr>
`;

});

}

loadUsers();