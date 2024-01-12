
//Jquery //

var count = 0

$(document).ready(function(){
        //mask
    $('#cep').mask('00000-000');

    $('#btn-cep-finder').click(function(){
        const cep = $('#cep').val();
        const button = $(this);
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;

            //oculta e mostra icon
        $(button).find('i').addClass('d-none')
        $(button).find('span').removeClass('d-none')

            
        fetch(endpoint)
        .then(resposta =>{
            return resposta.json();
        })

        .then(resposta => {
            const logradouro = resposta.logradouro;
            const bairro = resposta.bairro;
            const cidade = resposta.localidade;
            const estado = resposta.uf;
            const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`
            $('#address').val(endereco);
        })
    

        .catch(function(error){
            alert('Error! Please try again');
        })
        .finally(function(){
            
            setTimeout(function(){
                $(button).find('i').removeClass('d-none')
                $(button).find('span').addClass('d-none')
            },1000)
        })
    
    });

//Criando ERRO
    // $('#form').submit(function(event){
    //     event.preventDefault();
        
    //     if($('#name').val().length == 0){
    //             throw new Error("Digite o nome");
    //         }
    // })
    $("#botao").click(function(){

        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(data => {
            return data.json();
        })

        .then(json =>{


            const name= json[count]['name']
            const user = json[count]['username'];
            const email = json[count]['email'];
            const company = json[count]['company']['name'];
            const phone = json[count]['phone'];
            

            $("#name").val(name);
            $("#user").val(user);
            $("#email").val(email);
            $("#company").val(company);
            $("#phone").val(phone);

            count++;
        })

        .catch(error =>{
            alert('Error! Please try again');
        })
    });
    $("form").blur(function(){
        if($(this).val() == ""){
                $(this).css({"border" : "1px solid #F00", "padding": "2px"});
            }else{
                $(this).css({"border" : "none"});

            }
    })

    $("#botao2").click(function(){
        var cont = 0;

        $("input").each(function(){
            if($(this).val() == ""){
                    $(this).css({"border" : "1px solid #F00", "padding": "2px"});
                    cont++;
            }
        })
        if(cont == 0){
                $("#form").submit();
        }
    })
});
