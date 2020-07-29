window.addEventListener ('load', start)

function start(){
    fRgb()

    var r = document.querySelector('#r');
    r.addEventListener('input', fRed);

    var g = document.querySelector('#g');
    g.addEventListener('input', fGreen);

    var b = document.querySelector('#b');
    b.addEventListener('input', fBlue);
}

var txtred = document.querySelector('#txtred');
function fRed() {
    return txtred.value = r.value, fRgb()  
}

var txtgreen = document.querySelector('#txtgreen');
function fGreen() {
    return txtgreen.value = g.value, fRgb()
}

var txtblue = document.querySelector('#txtblue');
function fBlue() {
    return txtblue.value = b.value, fRgb()
}

function fRgb() {
    return document.querySelector('#RGB').style.background = `rgb(${r.value}, ${g.value}, ${b.value})`,
    document.querySelector('#sec').style.borderColor = `rgb(${r.value}, ${g.value}, ${b.value})`,
    document.querySelector('#sec').style.boxShadow = `10px 10px 20px rgba(${r.value}, ${g.value}, ${b.value})`
}