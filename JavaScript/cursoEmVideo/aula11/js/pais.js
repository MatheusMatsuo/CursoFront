class Paiss  {
    constructor(namee){
        this._name= namee;
    };
    
   verificar(){
    var pais = document.getElementById('txtpais');
    var res = document.querySelector('div#res');
    var p = pais.value;

    if(pais == 'Brasil'){
        res.innerHTML = 'Vc é brasileiro!'
    }else{
        res.innerHTML =`Vc é do país ${p}`
    }
}

set novoNome(novoNome){
    this._name = novoNome;
}

get name(){
    return this._name;
}


}

var person = new Paiss('Matheus');
console.log(person.name);
person.novoNome = 'Daniel';
console.log(person.name);
