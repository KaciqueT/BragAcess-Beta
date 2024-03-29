let tempo=2000;
let idx = 0;
const imgs = document.querySelectorAll("#carrossel1 img");
//const container = document.querySelector(".image-container");
//const btnvoltar=document.getElementsByClassName("id1")[0];
//const btnproximo=document.getElementsByClassName("id2")[0];

function intervaloImagens(num){ //função para puxar a proxima imagem
    imgs[idx].classList.remove("selecionar")
    idx = idx + num


    if(idx >= imgs.length){
        idx = 0;
    }else if(idx < 0){
        idx = imgs.length-1
    }
    console.log("imagem numero: " + idx)
    imgs[idx].classList.add("selecionar")
    
    
}


function Btn_proximo(){
    intervaloImagens(1)
}
function Btn_voltar(){
    intervaloImagens(-1)
}
//btnproximo.addEventListener("click",Btn_proximo);
//btnvoltar.addEventListener("click", Btn_voltar);
    
    

setInterval(()=>{
    intervaloImagens(1)
},tempo)