window.document.querySelector('.formContainer').addEventListener('submit', function(event){
    event.preventDefault()
    var hora1 = document.querySelector('#hora1')
    var hora2 = document.querySelector('#hora2')
    var containerResposta = document.querySelector('.containerResposta')
    var mensagemError = document.querySelector('.mensagemError')

    var h1 = hora1.value
    var h2 = hora2.value
    
    var valorh1 = null
    var valorh2 = null

    
    validationValor()

    function calculo1h(){ 
        return valorh1 = ((50/h1).toFixed(2))  
    }

    function calculo2h(){
        return valorh2 = (((50/h2) + (50/h1)).toFixed(2))
    }
    
    function validationValor(){
        if(h1 != "" && h2 != "null"){
            calculo1h()
            calculo2h()
            hora1.value = null
            hora2.value = null
            

            containerResposta.style.display = 'block'

            var respostaH1 = document.querySelector('.respostaH1');
            var respostaH2 = document.querySelector('.respostaH2');

            respostaH1.textContent = `${valorh1}`;
            respostaH2.textContent = `${valorh2}`;

            mensagemError.style.display = 'none'
            return
        }
        else{
            mensagemError.style.display = 'block'
            containerResposta.style.display = 'none'
        }
    } 

})



