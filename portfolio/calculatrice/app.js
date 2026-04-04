const info = document.querySelector('.infos')

const allBtns = document.querySelectorAll('input[type="button"]')



function val(resultat){
    form.fenetre.value = form.fenetre.value + resultat
}

function calcule(){
    if(form.fenetre.value==""){
        info.innerText = 'Veuillez saisir une valeur';
        allBtns.forEach(btn=>{
            btn.addEventListener('click', function(){
                info.innerText=""
            })
    })
    
    }else{
        form.fenetre.value=eval(form.fenetre.value)
    }
    
}

function supr(){
    form.fenetre.value="";
}