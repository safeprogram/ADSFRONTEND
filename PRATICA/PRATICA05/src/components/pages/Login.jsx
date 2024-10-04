import React from "react";
import Conteudo from "../Conteudo";
import Rodape from "../Rodape";
import Icone from "../Icone";
import Titulo from "../Titulo";
import InputEmail from "../InputEmail";
import InputSenha from "../InputSenha";
import Botao from "../Botao";
import Link from "../Link";
import './Login.css'

function Login(){
    return(
        <>
            <Conteudo className="login-container">
                <Icone imagem="" texto="Logo da Aplicação"/>
                <Titulo texto="Aluno Online"/>
                <InputEmail/>
                <InputSenha/>
                <Botao texto="Entrar"/>
                <Link texto="Esqueceu a Senha?"/>
            </Conteudo>
            <Rodape texto = "Copyright (c) 2024" />
        </>
    )
}

export default Login