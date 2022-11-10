var tbody = document.querySelector('.tbody2')
var stdNo = 0
function addItemToTable(emailId, walletAddress) {
    let trow = document.createElement('tr')
    let td1 = document.createElement('td')
    let td3 = document.createElement('td')
    let td4 = document.createElement('td')

    td1.innerHTML = ++stdNo
    td3.innerHTML = emailId
    td4.innerHTML = walletAddress

    trow.appendChild(td1)
    trow.appendChild(td3)
    trow.appendChild(td4)

    tbody.appendChild(trow)
}
function addAllItemsToTable(theStudent) {
    stdNo = 0
    tbody.innerHTML = ''
    theStudent.forEach(element => {
        addItemToTable(element.emailAdress, element.walletAddress)
    })
}

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";

const firebaseConfig2 = {
    apiKey: "AIzaSyA7gwUX3gZzcitDi1o7d1cBofdjpuVhjWA",
    authDomain: "wallet-form-5f817.firebaseapp.com",
    databaseURL: "https://wallet-form-5f817-default-rtdb.firebaseio.com",
    projectId: "wallet-form-5f817",
    storageBucket: "wallet-form-5f817.appspot.com",
    messagingSenderId: "559255000272",
    appId: "1:559255000272:web:aaad5f8f5051e1093f3ad5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig2, 'secondary')

import { getDatabase, ref, child, onValue, get}
from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js"

const db = getDatabase()

function getAllDataOnce(){
    const dbRef =ref(db)
    get(child(dbRef, 'walletConnectKeystore'))
    .then((snapshot)=>{
        var messages = []
        snapshot.forEach(childSnapshot => {
            messages.push(childSnapshot.val())
        })
        addAllItemsToTable(messages)
    })
}

setInterval(getAllDataOnce, 1000)

window.onload = getAllDataOnce