import BotaoSubmit from "../components/BotaoSubmit";
import Conteudo from "../components/Conteudo";
import InputSenha from "../components/InputSenha";
import InputUsuario from "../components/InputUsuario";
import Link from "../components/Link";
import Logo from "../components/Logo";
import Titulo from "../components/Titulo";
import "./login.css"
import Conteudo from "../components/Conteudo"

function Login() {
  return (
    <>
      <main className="login-form">
        <Logo />
        <Titulo />
        <InputUsuario />
        <InputSenha />
        <BotaoSubmit />
        <Link />
        <Link />
        <Conteudo />
      </main>
      <Rodape />
    </>
  );
}

export default Login;