import React from "react";
import Style from "./Botao.module.scss"

interface Props{
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    children?: React.ReactNode
}

export default function Botao({ onClick, type, children }: Props){
    return(
        <button onClick={onClick} type={type} className={Style.botao}>
            {children}
        </button>
    )
}


