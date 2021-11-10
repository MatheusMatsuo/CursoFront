var area = document.getElementById('area');

area.addEventListener('click', clicar);
area.addEventListener('mouseenter', entrar);
area.addEventListener('mouseout', sair);


function clicar(){
    area.innerHTML = 'clicou!';
    area.style.fontSize = '3em';
}

function sair(){
    area.innerHTML = 'saiu!';
    area.style.fontSize = '3em';
}

function entrar(){
    area.innerHTML = 'entrou!';
    area.style.fontSize = '3em';
    area.style.backgroundColor = 'red';
}

