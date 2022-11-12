const btc = document.getElementById('btc')
const eth = document.getElementById('eth')
const doge = document.getElementById('doge')
const btcURL = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum%2Cdogecoin&vs_currencies=usd'

async function getPrice() {
    const response = await fetch(btcURL)
    const data = await response.json()
    btc.innerText = data.bitcoin.usd
    eth.innerText = data.ethereum.usd
    doge.innerText = data.dogecoin.usd
}
setInterval(getPrice, 10000)