//Seu JavaScript de validação aqui

document.getElementById("form-contato").addEventListener("submit", validarFormulario);


function validarFormulario(event) {
    // previne o envio do formulário
    event.preventDefault();
  
    // verifica se o campo "nome" está preenchido
    if (document.getElementById("nome").value.trim() === "") {
      alert("Por favor, preencha o campo Nome.");
      return false;
    }
  
    // verifica se o campo "email" está preenchido e é um email válido
    const email = document.getElementById("email").value.trim();
    if (email === "") {
      alert("Por favor, preencha o campo Email.");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Por favor, preencha um endereço de email válido.");
      return false;
    }
  
    // verifica se o campo "assunto" está preenchido
    if (document.getElementById("assunto").value.trim() === "") {
      alert("Por favor, preencha o campo Assunto.");
      return false;
    }
  
    // verifica se o campo "mensagem" está preenchido
    if (document.getElementById("mensagem").value.trim() === "") {
      alert("Por favor, preencha o campo Mensagem.");
      return false;
    }
  
    // se todos os campos estão preenchidos corretamente, o formulário pode ser enviado
    alert("O formulário foi enviado com sucesso!");
    return true;
  }
  