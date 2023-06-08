let img_inma = document.getElementById('foto-inma');
let boc_inma = document.getElementById('bocadillo');

function bocadillo_switch () {
    if(boc_inma.style.display === 'none') {
        boc_inma.style.display = 'block';
    } else {
        boc_inma.style.display = 'none';
    }
}

img_inma.addEventListener('click', bocadillo_switch);
boc_inma.addEventListener('click', bocadillo_switch);

function random () {
    return Math.floor(Math.random()*256);
}

//let mist_button = document.getElementById('mistery');
function change_color () {
    let mist_button = document.getElementById('mistery');
    let newcolor= `rgb(${random()}, ${random()}, ${random()})`
    mist_button.style.backgroundColor = newcolor;
}

setInterval(change_color, 250);

let mistery = document.getElementById('mistery');

function mustafaFurioso (){
    
    document.getElementById('malvado_mustafa').style.display = 'block';
    alert('Oh, no!! Un Malvado Mustafa Salvaje ha aparecido! Lo mejor es que huyas');
}


mistery.addEventListener('click',mustafaFurioso);