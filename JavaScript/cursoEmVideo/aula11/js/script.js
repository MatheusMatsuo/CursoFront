

function calcular(){
    var txtv = document.getElementById('txtvel');
    var res = document.querySelector('div#res');
    var vel = Number(txtv.value);
    res.innerHTML = `Velocidade: ${vel} km/h`;
}