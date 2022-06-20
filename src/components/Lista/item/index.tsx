import Style from "./Item.module.scss"
import { Itarefa } from "../../../types/tarefa"

interface Props extends Itarefa{
    selecionaTarefa: (tarefaSelecionada: Itarefa) => void
}

export default function Item({tarefa, tempo, selecionado, completado, id, selecionaTarefa}: Props){
    
    return(
        <li className={`${Style.item} ${selecionado ? Style.itemSelecionado : ''} ${completado ? Style.itemCompletado: ''}`} onClick={()=> !completado && selecionaTarefa({tarefa, tempo, selecionado, completado, id})}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {completado  && <span className={Style.concluido} aria-label="Tarefa Completada"></span>}
        </li>
            
    )
}