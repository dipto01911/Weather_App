
let key="49caf3da4935969bb9c70ad5418d8e76"
city='khulna';
let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;



function Getdata(){
 let city=document.getElementById("data").value;
 let element=document.getElementById('element');
let key="49caf3da4935969bb9c70ad5418d8e76"

 if(!city){
    alert("Please enter data")
    return
 }

let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

try{
 fetch(url)
 .then(res => res.json())
 .then(data =>{
    console.log(data)
    if(data.cod == 200){
        element.innerHTML=
        `<div>
            <p>City:${data.name} (${data.sys.country}) </p>
            <p>Temperature:  ${data.main.temp}  K</p>
            <p>Humidity: ${data.main.humidity} g/m3</p>
            <p class='text-danger'>Weather: "${data.weather[0].description}"</p>
            <p>Wind Speed: ${data.wind.speed} km/hr</p>
            
            </div>`
           
    }else{
        element.innerHTML=`<p>${data.message} </p>`
    }
 })
}catch(error){
  console.log(error)
  element.innerHTML=`<p>Failed to read data</p>`
}

}