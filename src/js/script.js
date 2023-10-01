let numeroTelefone = "5521973739881";

// Mais pedidos
function maisPedidos01() {
  let pedidoNome01 = document.querySelector('#pedidoNome01');

  let mensagem = `Olá, gostaria de pedir o combo: ${pedidoNome01.textContent}!`;
  
  // Formate o número de telefone removendo caracteres especiais e espaços.
  numeroTelefone = numeroTelefone.replace(/\D/g, '');

  // Crie o link do WhatsApp com o número de telefone e a mensagem.
  let urlWhatsApp = "https://api.whatsapp.com/send?phone=" + numeroTelefone + "&text=" + encodeURIComponent(mensagem);

  // Redirecione o usuário para o link do WhatsApp.
  window.location.href = urlWhatsApp;
}

function maisPedidos02() {
  let pedidoNome02 = document.querySelector('#pedidoNome02');

  var mensagem = `Olá, gostaria de pedir o combo: ${pedidoNome02.textContent}!`;
  
  // Formate o número de telefone removendo caracteres especiais e espaços.
  numeroTelefone = numeroTelefone.replace(/\D/g, '');

  // Crie o link do WhatsApp com o número de telefone e a mensagem.
  var urlWhatsApp = "https://api.whatsapp.com/send?phone=" + numeroTelefone + "&text=" + encodeURIComponent(mensagem);

  // Redirecione o usuário para o link do WhatsApp.
  window.location.href = urlWhatsApp;
}

function maisPedidos03() {
  let pedidoNome03 = document.querySelector('#pedidoNome03');

  var mensagem = `Olá, gostaria de pedir o combo: ${pedidoNome03.textContent}!`;
  
  // Formate o número de telefone removendo caracteres especiais e espaços.
  numeroTelefone = numeroTelefone.replace(/\D/g, '');

  // Crie o link do WhatsApp com o número de telefone e a mensagem.
  var urlWhatsApp = "https://api.whatsapp.com/send?phone=" + numeroTelefone + "&text=" + encodeURIComponent(mensagem);

  // Redirecione o usuário para o link do WhatsApp.
  window.location.href = urlWhatsApp;
}

// Combos +Familia
function combo01() {
  let comboNome01 = document.querySelector('#comboNome01');

  var mensagem = `Olá, gostaria de pedir o combo: ${comboNome01.textContent}!`;
  
  // Formate o número de telefone removendo caracteres especiais e espaços.
  numeroTelefone = numeroTelefone.replace(/\D/g, '');

  // Crie o link do WhatsApp com o número de telefone e a mensagem.
  var urlWhatsApp = "https://api.whatsapp.com/send?phone=" + numeroTelefone + "&text=" + encodeURIComponent(mensagem);

  // Redirecione o usuário para o link do WhatsApp.
  window.location.href = urlWhatsApp;
}

function combo02() {
  let comboNome02 = document.querySelector('#comboNome02');

  var mensagem = `Olá, gostaria de pedir o combo: ${comboNome02.textContent}!`;
  
  // Formate o número de telefone removendo caracteres especiais e espaços.
  numeroTelefone = numeroTelefone.replace(/\D/g, '');

  // Crie o link do WhatsApp com o número de telefone e a mensagem.
  var urlWhatsApp = "https://api.whatsapp.com/send?phone=" + numeroTelefone + "&text=" + encodeURIComponent(mensagem);

  // Redirecione o usuário para o link do WhatsApp.
  window.location.href = urlWhatsApp;
}

function combo03() {
  let comboNome03 = document.querySelector('#comboNome03');

  var mensagem = `Olá, gostaria de pedir o combo: ${comboNome03.textContent}!`;
  
  // Formate o número de telefone removendo caracteres especiais e espaços.
  numeroTelefone = numeroTelefone.replace(/\D/g, '');

  // Crie o link do WhatsApp com o número de telefone e a mensagem.
  var urlWhatsApp = "https://api.whatsapp.com/send?phone=" + numeroTelefone + "&text=" + encodeURIComponent(mensagem);

  // Redirecione o usuário para o link do WhatsApp.
  window.location.href = urlWhatsApp;
}

// Botão principal
function peçaAgora() {
    var mensagem = "Olá, gostaria de pedir um Frango Assado! poderia me enviar o cardápio?";
    
    // Formate o número de telefone removendo caracteres especiais e espaços.
    numeroTelefone = numeroTelefone.replace(/\D/g, '');
  
    // Crie o link do WhatsApp com o número de telefone e a mensagem.
    var urlWhatsApp = "https://api.whatsapp.com/send?phone=" + numeroTelefone + "&text=" + encodeURIComponent(mensagem);
  
    // Redirecione o usuário para o link do WhatsApp.
    window.location.href = urlWhatsApp;
}