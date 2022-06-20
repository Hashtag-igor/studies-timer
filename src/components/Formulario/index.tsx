import { useState } from "react";
import Botao from "../Botao";
import Style from "./Formulario.module.scss"
import { Itarefa } from "../../types/tarefa"
import { v4 as uuidv4 } from "uuid"

interface Props{
    setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>
}

export default function Formulario({ setTarefas }: Props){
    const [tempo,setTempo] = useState("00:00")
    const [tarefa,setTarefa] = useState("")

    function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
        setTarefas(tarefasAntigas => [...tarefasAntigas, {tarefa, tempo, selecionado: false, completado: false, id: uuidv4()}])
        setTarefa("")
        setTempo("00:00")  
}

    return(
        <form className={Style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={Style.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input type="text" value={tarefa} name="tarefa" id="tarefa" placeholder="O que você quer estudar" onChange={evento => setTarefa(evento.target.value)} required/>
            </div>
    
            <div className={Style.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input type="time" value={tempo} name="tempo" step="1" id="tempo" min="00:00:00" max="01:30:00" onChange={evento => setTempo(evento.target.value)} required/>
            </div>

            <Botao type="submit">Adicionar</Botao>
        </form>
    )
}

