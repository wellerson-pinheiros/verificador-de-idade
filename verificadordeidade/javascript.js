function calcular(){
    let idade = window.document.getElementById('idade').value
    let cchekbox = window.document.getElementsByClassName('genero')
    let imag = window.document.getElementById('imgs')
    let resultado = window.document.getElementById('res')
            if (idade == 0 ){
                window.alert('erro')
            } else if( idade <=10) {
                res.innerHTML = 'vc é uma criança'
                 imag.src = 'imagens/crianca-masc.png' 

            }

}   