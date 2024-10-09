import {createContext, useState} from 'react';

const TarefaContext = createContext();

function TarefaProvider(props){
const [tarefas, setTarefa] = useState(["Estudar React", "Fazer a pratica"]);

const incluir = (tarefa) => {
    setTarefa([...tarefas, tarefa]);
};

const remover = (tarefa) => {
    setTarefa(tarefas.filter((item) => item != tarefa));
}

const contexto = {tarefas, incluir, remover}

    return (
    <TarefaContext.Provider value={contexto}>
        {props.children}
    </TarefaContext.Provider>
    )
}

export {TarefaContext, TarefaProvider};