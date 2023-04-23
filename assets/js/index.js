function sendEmail() {
//     Email.send({
//         Host : "smtp.mailtrap.io",
//         Username : "julroubens2005@gmail.com",
//         Password : "Julroub2005@nko",
//         To : 'julroubens2005@gmail.com',
//         From : "rougens.jules@esih.edu",
//         Subject : "Test email",
//         Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
//       }).then(
//         message => alert(message)
//       );
var templateParams = {
    name: 'James',
    notes: 'Check this out!'
};
 
emailjs.send('service_7gbgr5d', 'YOUR_TEMPLATE_ID', templateParams) //use your Service ID and Template ID
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
  }
