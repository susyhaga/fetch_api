// //XMLHttpRequest  

// //Você faz uso da solicitação GET quando deseja recuperar dados de um servidor. 
// // Crie um novo objeto XMLHttpRequest.
// // Abra uma conexão especificando o tipo de solicitação e o endpoint (a URL do servidor).
// // Envie a solicitação.



// // var count = 0;// para iteracao (incrementacao do i)

// // document.addEventListener('DOMContentLoaded', function(){   
        
// //         document.getElementById('botao').addEventListener('click', function(e){
// //         e.preventDefault();


// //                 const xhr= new XMLHttpRequest();
// //                 const endpoint = `https://jsonplaceholder.typicode.com/users`;

// //                 xhr.open("GET", endpoint, false); //false ele roda de forma sincrona...true eh padrao (roda de forma assincrona)
// //                 xhr.send()

//         //Como podemos ver, através do responseText conseguimos obter a resposta do nosso servidor, 
//         //porém o JSON está em formato de string, sendo assim, 
//        //precisamos convertê-lo para um objeto JSON em Javascript, podemos fazer isso através do JSON.parse:

//                 const data = JSON.parse(xhr.responseText); //responseText eh onde fica guardada a responsta da API

//                 console.log(data)
//         //xhr.responseType = "json"; // nao DEFINIR o tipo aqui pq preciso usar de forma SINCRONA
//         //onreadystatechange = a propriedade onreadystatechange que é disparada sempre que nossa requisição 
//         //sofre alguma alteração durante seu processamento

//         // ou

//         //xhr.onload = ()  ----> que eh addEventListiner
//                 xhr.onreadystatechange = () => { 
//                         if (xhr.readyState == 4 && xhr.status == 200) {
//                         const nome = data[count]['name'];
                
//                         console.log(nome)
//                         } else {
                                

//                         console.log(`Error: ${xhr.status}`);
//                         }
//                 };

//                 //transferindo os dados para html

//                 //document.querySelector('#name').value = data[count]['name'];
//                 // document.querySelector('#user').value = data[count]['username'];
//                 // document.querySelector('#email').value = data[count]['email'];
//                 // document.querySelector('#company').value = data[count]['company']['name']
//                 // document.querySelector('#phone').value = data[count]['phone']

                
//                 count++;
//         })
// })

///////////////////////////////////////////////////////////////////////////////
//Jquery //AJAX

// $(document).ready(function(){
        

//         //mask
//         $('#cep').mask('00000-000');

//         $('#btn-cep-finder').click(function(){
//         const cep = $('#cep').val();
//         const button = $(this);
//         const endpoint1 = `https://viacep.com.br/ws/${cep}/json`;

//             //oculta e mostra icon
//         $(button).find('i').addClass('d-none')
//         $(button).find('span').removeClass('d-none')
        
//                 $.ajax(endpoint1).done(function(resposta){
//                         const logradouro = resposta.logradouro;
//                         const bairro = resposta.bairro;
//                         const cidade = resposta.localidade;
//                         const estado = resposta.uf;
//                         const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`

//                         $('#address').val(endereco);

//                         //oculta e mostra icon
//                         setTimeout(function(){
//                                 $(button).find('i').removeClass('d-none')
//                                 $(button).find('span').addClass('d-none')
//                         },1000)
//                 })
//         })
// })
