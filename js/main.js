

window.onload = function(){

    let header = document.getElementById('topo');
    let tamanhoScroll = document.body.scrollHeight;
    let textWhite = document.querySelector('.white');

    window.addEventListener('scroll',()=>{

        let scrollAtual = document.body.scrollTop;

        if(tamanhoScroll > scrollAtual){

            header.classList.add('add-color');
            textWhite.style.color = 'white';

        } else{
            header.style.backgroundColor = 'transparent';
        }


    });

}


 // SLIDER PROJETOS

let prev = document.getElementById('prev');
let next = document.getElementById('next');
let thumb = document.getElementsByClassName('thumb');
let work = document.querySelector('.work');

let backgroundImg = new Array(
    "img/projeto02.png",
    "img/projeto01.jpg",
    "img/projeto3.png",
    "img/projeto4.png",
    "img/projeto5.jpg"

);

let i = 0;

next.onclick = ()=>{
    if(i < 4){
        work.style.backgroundImage = 'url("'+backgroundImg[i+1]+'")';
        
        thumb[i+1].classList.add('active');
        thumb[i].classList.remove('active');
        i++;
    }
}

prev.onclick = ()=>{
    if(i > 0){
        work.style.backgroundImage = 'url("'+backgroundImg[i-1]+'")';
        thumb[i-1].classList.add('active');
        thumb[i].classList.remove('active');
        i--;
    }
}