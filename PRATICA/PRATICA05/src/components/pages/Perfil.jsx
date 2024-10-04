import Cabecalho from "../Cabecalho";
import Conteudo from "../Conteudo";
import Menu from "../Menu";
import Secao from "../Secao";
import InputEmail from "../InputEmail";
import InputSenha from "../InputSenha";
import Botao from "../Botao";

function Perfil(){
    return(
        <>
        <Cabecalho></Cabecalho>
        <Conteudo>
            <Menu/>
            <Secao texto="Perfil do Usuario">
                <InputEmail />
                <InputSenha />
                <Botao texto = "Salvar"/>
            </Secao>
        </Conteudo>
        </>
    )
}

export default Perfil;