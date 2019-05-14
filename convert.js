
function formatcurrency(amount){
    return parseFloat(amount).toFixed(2)
      .replace('.', ',')
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      .replace(/,([^,]*)$/, '.' + '$1')
  }
  
function determineExchangeRate (currency1, currency2, amount){
   
    if (currency1 === 'usd' && currency2 === 'vnd'){
        return formatcurrency(amount * 23000)
      }
      if (currency1 === "vnd" && currency2 ==="usd"){
        return formatcurrency(amount / 23000)
    }
      if (currency1 === 'usd' && currency2 === 'eur') {
        return formatcurrency(amount * 0.89)
      }
      if (currency1 === 'eur' && currency2 ==="usd"){
        return formatcurrency(amount / 0.89)
      }
      if (currency1 === 'eur' && currency2 ==="vnd"){
        return formatcurrency(amount * 30000)
      }
      if (currency1 === 'vnd' && currency2 ==="eur"){
        return formatcurrency(amount / 30000)
      }
      if (currency1 === 'vnd' && currency2 ==="krw"){
        return formatcurrency(amount * 0.051)
      }
      if (currency1 === 'krw' && currency2 ==="vnd"){
        return formatcurrency(amount /0.051)
      }
      if (currency1 === 'krw' && currency2 ==="usd"){
        return formatcurrency(amount * 0.00084)
      }
      if (currency1 === 'usd' && currency2 === "krw"){
        return formatcurrency(amount * 1,187.07)
      }
      if (currency1 === 'krw' && currency2 ==="eur"){
        return formatcurrency(amount * 0.00075)
      }
      if (currency1 === 'eur' && currency2 ==="krw"){
        return formatcurrency(amount / 0.00075)
      }
    }


function convertCurrency(){

    const valueOfInput = document.getElementById("amount").value
    const initialCurrency = document.getElementById("currency1").value
    const fianllyCurrency = document.getElementById("currency2").value

    const convertValue = determineExchangeRate(initialCurrency,fianllyCurrency,valueOfInput)
    
    document.getElementById("result").innerHTML = ` YOUR RESULT HERE ` + convertValue + ` ${fianllyCurrency}` 
    document.getElementById("messenger").innerHTML = `THANK FOR USING `

}



