/*
function tocaSomPom (){
    document.querySelector('#som_tecla_pom').play();
};

document.querySelector('.tecla_pom').onclick = tocaSomPom;
*/
// fazer nos outros o mesmo codigo -----

// outra maneira ...


function tocaSom (seletorAudio){
    const elemento = document.querySelector(seletorAudio);
    
    if (elemento && elemento.localName === 'audio'){
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado');
    }
}

const listaDeTeclas =  document.querySelectorAll('.tecla');

let contador = 0; 

while (contador < listaDeTeclas.length){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];


    const idAudio = `#som_${instrumento}`;

    
    //console.log(idAudio);

    tecla.onclick = function(){
        tocaSom(idAudio);
    };
    contador = contador +1;
}
    //console.log(contador); 

    
    tecla.onkeydown = function(evento){
        
     if(evento.code === 'Space'|| evento.code === 'Enter'){
        tecla.classList.add('ativa');
        
    }
    
    tecla.onkeyup = function(){
        tecla.classList.remover('ativa');
    }

    
}











// maneira mais facil ainda !!!! -------------------

/*
function tocaSom (idElementAudio){
    document.querySelector(idElementAudio).play();
}

const listaDeTeclas =  document.querySelectorAll('.tecla');

for (let contador = 0 < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio);
    };
   
}

*/