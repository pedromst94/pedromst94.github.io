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