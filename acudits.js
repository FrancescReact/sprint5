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

async function meteo() {
    const response = await fetch('dadesobertes_pg.json', {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        },
        'Access-Control-Allow-Origin': 'http://static-m.meteo.cat/content/opendata/dadesobertes_pg.json'
    });

    const temps = await response.json();
    console.log(temps[0])
    var tempus = temps[0].versio.variables.estatDelCel;
    document.getElementById("temps").innerHTML = (tempus);
}

function play() {
    var audio = document.getElementById("audio");
    audio.play();
}




