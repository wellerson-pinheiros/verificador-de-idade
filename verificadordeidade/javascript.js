function calcular(){
    let idade = window.document.getElementById('idade').value
    let cchekbox = window.document.getElementsByClassName('genero')
    let imgs = window.document.getElementById('imgs')
    let resultado = window.document.getElementById('res')
            if (idade == 0){
                window.alert('erro')
            } else if( idade <=10) {
                res.innerHTML = 'vc é uma criança'
                 img.src = 'imagens/crianca-masc.png' 

            }

}   