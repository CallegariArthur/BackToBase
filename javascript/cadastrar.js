



function cadastrar() {
    let email = document.getElementById("email").value;
    let cpf = document.getElementById("cpf").value;
    let nomeCompleto = document.getElementById("nomeCompleto").value;
    let rua = document.getElementById("rua").value;
    let nascimento = document.getElementById("nascimento").value;
    let numero = document.getElementById("numero").value;
    let complemento = document.getElementById("complemento").value;
    let senha = document.getElementById("senha").value;
    let confsenha = document.getElementById("confsenha").value;
    let referencia = document.getElementById("referencia").value;
    let cel1 = document.getElementById("cel1").value;
    let cel2 = document.getElementById("cel2").value;
    let usuario = {

        email: email,

        cpf: cpf,

        nomeCompleto: nomeCompleto,

        rua: rua,

        nascimento: nascimento,

        numero: numero,

        complemento: complemento,

        senha: senha,

        referencia: referencia,

        cel1: cel1,

        cel2: cel2

    };
    console.log("Usuário cadastrado:", usuario);
}
function formatCPF() {

    let value = input.value;
    value = value.replace(/\D/g, '');

    if (value.length > 11) {

        value = value.substring(0, 11);

    }
    // if (value.length < 9) {

    //     document.getElementById("mensagem").innerHTML = "o cpf esta incorreto"

    // }
    value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');

    input.value = value;

}
