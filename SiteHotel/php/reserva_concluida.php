<?php
// Se os dados do formulário foram submetidos
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Conectar ao banco de dados (substitua com suas credenciais)
    $conexao = new mysqli("localhost", "usuario", "senha", "nome_do_banco_de_dados");

    // Verificar a conexão
    if ($conexao->connect_error) {
        die("Erro ao conectar ao banco de dados: " . $conexao->connect_error);
    }

    // Extrair os dados do formulário
    $nome = $_POST['fname'];
    $cpf = $_POST['cpf'];
    $email = $_POST['email'];
    $data_chegada = $_POST['arrival_date'];
    $quantidade_dias = $_POST['dias'];
    $quantidade_pessoas = $_POST['pessoas'];
    $quarto = $_POST['quarto'];
    $sexo = $_POST['sexo'];

    // Inserir os dados na tabela
    $sql = "INSERT INTO Reservas (nome, cpf, email, data_chegada, quantidade_dias, quantidade_pessoas, quarto, sexo)
            VALUES ('$nome', '$cpf', '$email', '$data_chegada', '$quantidade_dias', '$quantidade_pessoas', '$quarto', '$sexo')";

    if ($conexao->query($sql) === TRUE) {
        // Redirecionar o usuário para a página de confirmação
        header("Location: reserva_concluida.php");
        exit();
    } else {
        echo "Erro ao registrar a reserva: " . $conexao->error;
    }

    // Fechar a conexão
    $conexao->close();
}
?>
