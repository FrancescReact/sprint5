async function acuditPlus() {
    const response = await fetch('https://icanhazdadjoke.com/', {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    });

    const pepe = await response.json();
    console.log(response);
    console.log(pepe.joke);
    document.getElementById("xiste").innerHTML = (pepe.joke);
}


        function madox(){
            fetch(' https://api.meteo.cat/pronostic/v1/catalunya/2021/05/01',{
            method: 'GET',
            headers: {
                    'Accept': 'application/json',
                    'x-api-key': "hyXR2GmmOF9M3hY2Tthy5axOUCpD5IBL2Cp30AKM",
                    'origin':'https://api.meteo.cat',
            }})
            .then( res => res.json())
            .then(data =>{
                console.log(data.variables.estatDelCel)
            })
        
    }

function play() {
    var audio = document.getElementById("audio");
    audio.play();
}




