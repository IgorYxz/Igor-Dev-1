function alertar() {
  var feedback = prompt("Digite seu feedback:");
  
  if (feedback) {
    alert("Obrigado pelo seu feedback: ");
  } else {
    alert("Você não inseriu nenhum feedback.");
  }
}

function enviarFeedback(feedback) {
  var formData = new FormData();
  formData.append("feedback", feedback);

  fetch("http://seu-servidor.com/rota-de-recebimento", {
    method: "POST",
    body: formData
  })
  .then(function(response) {
    if (response.ok) {
      enviarEmail(feedback);
      console.log("Feedback enviado com sucesso!");
    } else {
      console.log("Erro ao enviar o feedback.");
    }
  })
  .catch(function(error) {
    console.log("Erro de conexão:", error);
  });
}

function enviarEmail(feedback) {
  // Aqui você pode implementar o código para enviar um e-mail com o feedback
  // Pode ser usando uma biblioteca de e-mail ou integrando um serviço de e-mail
  // Por exemplo, usando a biblioteca Nodemailer com um servidor SMTP
  
  // Exemplo usando o Nodemailer com um servidor SMTP
  const nodemailer = require('nodemailer');

  // Configurar o transporte do e-mail
  const transporter = nodemailer.createTransport({
    host: 'smtp.seu-servidor-smtp.com',
    port: 587,
    auth: {
      user: 'seu-usuario',
      pass: 'sua-senha'
    }
  });

  // Configurar o e-mail a ser enviado
  const mailOptions = {
    from: 'seu-email@dominio.com',
    to: 'igorbarros5805@gmail.com',
    subject: 'Novo Feedback Recebido',
    text: 'Feedback: ' + feedback
  };

  // Enviar o e-mail
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log('Erro ao enviar o e-mail:', error);
    } else {
      console.log('E-mail enviado:', info.response);
    }
  });
}
  