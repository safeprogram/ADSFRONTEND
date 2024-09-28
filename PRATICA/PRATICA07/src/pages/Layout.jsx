import Cabecalho from '../components/Cabecalho';
import Conteudo from '../components/Conteudo';
import Menu from '../components/Menu';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Cabecalho />
      <Conteudo>
        <Menu />
        <Outlet />
      </Conteudo>
    </>
  );
}

export default Layout;
