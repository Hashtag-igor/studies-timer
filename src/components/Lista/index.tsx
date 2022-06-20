import Style from "./Lista.module.scss"
import Item from "../Lista/item"
import { Itarefa } from "../../types/tarefa"

interface Props{
    tarefas: Itarefa[],
    selecionaTarefa: (tarefaSeleciona: Itarefa) => void
}

export default function Lista({tarefas, selecionaTarefa}: Props){
    return(
        <aside className={Style.ListaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map(item => (
                    <Item selecionaTarefa={selecionaTarefa} key={item.id}
                       {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}