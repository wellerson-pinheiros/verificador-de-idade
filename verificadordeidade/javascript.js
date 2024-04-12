function calcular()
{
        let data = new Date()
        let horas = data.getFullYear()
        let nasc = window.document.getElementById('idade')
        let res = window.document.getElementById('res')
        let img = window.document.getElementById('imgs')

            if (nasc.length == 0 || Number(nasc.value) > horas || nasc.value < 1950) 
            {   window.alert('erro por favor coloque a data de nascimento')
                } else {

                   let sex = window.document.getElementsByName('sex')
                   let idade = horas - Number(nasc.value) 
                   let genero = ''
                    if(sex[0].checked ){
                    genero = 'homem'
                    if(idade >=0 && idade <10){

                            img.src = 'imagens/crianca-masc.png'

                    }else if (idade >=11 && idade <= 26){

                            img.src = 'imagens/adolescente-masc.png'
                    
                    }else if (idade >26 && idade <= 50)
                    {
                            img.src='imagens/adulto-masc.png'                
             
                        } else {
                                img.src='imagens/idoso-masc.png'
                                }
                        }else if (sex[1].checked){
                            genero = 'mulher'
                            if(idade >=0 && idade <= 10) {
                                img.src='imagens/criança-fem.png'
                            }
                            else if(idade >10 && idade < 18){
                                 img.src = 'iamgens/adolescente-fem.png'                                                                                       
                    } else if (idade > 18 && idade < 50){
                                img.src = 'imagens/adulta-fem.png'
                    }else{
                                img.src = 'imagens/idosa-fem.png'
                    }
                                
                   res.innerHTML = `detectamos genero ${genero} com ${idade} anos`
              }  }}