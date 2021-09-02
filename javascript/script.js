const urlPrincipal= "https://api.openweathermap.org/data/2.5/weather?";

const clave = 'da1aa8888fee1d55f577a627a9bb7a3d';

const lenguaje = 'ep'


const form = document.getElementById('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const city = document.getElementById('ciudad').value;
    fetchWater(city);
})

async function fetchWater(city){
    const apiResponse = await fetch(`${urlPrincipal}q=${city}&lang=${lenguaje}&appid=${clave}`)
    const weatherData = apiResponse.json();
     
    weatherData.then(data=>{
        console.log(data)
        document.getElementById('nameCiudad').textContent= `Ciudad: ${data.name}`
       
        document.getElementById('temperatura').textContent = `Temperatura: ${data.main.temp}`

    })
    
}