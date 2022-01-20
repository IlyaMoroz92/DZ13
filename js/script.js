const url = "https://www.nbrb.by/api/exrates/currencies";
let restData = [];
const h1 = document.querySelector('.idd')

function rand (num) {
    let newNum = Math.floor(Math.random() * (num.length));
    return newNum
}

function getJson () {
    fetch(url)  
    .then((response) => response.json()) 
    .then(function (json) {  
        json.map(el => {
            if(parseFloat(el.Cur_DateEnd) > 2022){
                restData.push(el.Cur_ID)
                console.log(restData)
            }
    });
    let randId = rand(restData)
    getDollars(restData[randId]) 
    }) 
}

function getDollars (param) {
    fetch(`https://www.nbrb.by/api/exrates/rates/${param}?ondate=2022-1-1`)  
    .then((response) => response.json()) 
    .then(function (json) {  
        h1.innerHTML = `Курс ${json.Cur_Name} ${json.Cur_OfficialRate}`
        })
}
