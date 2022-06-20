import { useState, useEffect } from 'react'
import Botao from "../Botao"
import Relogio from "./Relogio"
import Style from "./Cronometro.module.scss"
import tempoParaSegundos from "../../common/utils/time"
import { Itarefa } from '../../types/tarefa'

interface Props{
    selecionado: Itarefa | undefined,
    finalizarTarefa: () => void
}

export default function Cronometro({selecionado, finalizarTarefa}: Props){
    const [tempo,setTempo] = useState<number>()

    useEffect(() => {
        if(selecionado?.tempo){
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    },[selecionado])

    function regressiva(contador: number = 0){
        setTimeout(() =>{
            if(contador > 0){
                setTempo(contador -1)
                return regressiva(contador -1)
            }
            finalizarTarefa()
        }, 1000)
    }

    return(
        <div className={Style.cronometro}>
            <p className={Style.titulo}>Escolha um Card e inicie o cronômetro</p>
            <div className={Style.relogioWrapper}>
                <Relogio tempo={tempo}></Relogio>
            </div>
            <Botao onClick={() => regressiva(tempo)} type="submit">Começar</Botao>
        </div>
    )
}