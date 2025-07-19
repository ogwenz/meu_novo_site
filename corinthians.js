document.getElementById("botao").addEventListener("click", validaFormulario ) 

function validaFormulario() {
    if (document.getElementById("nome").value != '' && document.getElementById("email").value !='' ){
    alert ("palmeiras não tem mundial!")
    }else{
    alert("por favor preencha os campos com nome e email")
    }
}
