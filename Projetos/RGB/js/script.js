var r = document.querySelector('#r');
var txtred = document.querySelector('#txtred');
function fRed() {
    return txtred.value = r.value
}

var g = document.querySelector('#g');
var txtgreen = document.querySelector('#txtgreen');
function fGreen() {
    return txtgreen.value = g.value
}

var b = document.querySelector('#b');
var txtblue = document.querySelector('#txtblue');
function fBlue() {
    return txtblue.value = b.value
}

function fRgb() {
    return document.querySelector('#RGB').style.background = `rgb(${r.value}, ${g.value}, ${b.value})`, 
    document.querySelector('#sec').style.borderColor = `rgb(${r.value}, ${g.value}, ${b.value})`,
    document.querySelector('#sec').style.boxShadow = `10px 10px 20px rgba(${r.value}, ${g.value}, ${b.value})`
}