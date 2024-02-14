import React from "react";
import { Pessoa } from "../models/Pessoa";

export function HeaderComponent({ pessoa }: { pessoa: Pessoa }) {
    return (
        <>
            <p>{pessoa.nome} é seu nome</p>
            <p>{pessoa.altura} de altura</p>
            <p>{pessoa.corDeCabelo} é sua cor de pelinho</p>
            <p>{pessoa.tamanhoDeCabelo}cm de tamanho de pelinho</p>
            <p>Seu pelinho é {pessoa.tipoDeCabelo}</p>
        </>
    );
}