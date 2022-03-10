import React, { useContext } from 'react';
import styled from 'styled-components';
import Contenedor from '../elements/Contenedor'
import { NavLink, useParams } from 'react-router-dom';
import { ContextoInvitados } from '../contexts/contextoInvitados';

const Bienvenida = () => {
    // Funcion que filtrara los invitados por codigo recibido en useParams
    const { filtrarFamilia } = useContext(ContextoInvitados);
    // Obtenemos el codigo por el parametro en el URL
    const { codigo } = useParams();

    return (
        <Contenedor>
            <Titulo>
                Bienvenido a nuestro Registro de Invitados
            </Titulo>
            <ContenedorBtn>
                <Boton onClick={() => (
                    // Corremos esta funcion al dar click en el boton 
                    // para filtrar los invitados por codigo y actualizar el estado
                    filtrarFamilia(codigo)
                )}>
                    <NavLink to={`/confirmacion/${codigo}`}>Iniciar registro</NavLink>
                </Boton>
            </ContenedorBtn>
        </Contenedor>
    );
}

const Titulo = styled.p`
    color: #fff;
    margin: 0;
    padding: 1em 0.5em;
    font-size: 2.2em;
    width: 80%;
    text-align: center;
`;

const ContenedorBtn = styled.div`
    display: flex;
    justify-content: center;
`;

const Boton = styled.button`
    display: flex;
    justify-content: center;
    margin: 0;
    background: rgb(197, 127, 250);
	font-size: 1.5em;
    border-radius: 10px;
    border: rgb(212, 158, 253);
    padding: 0.8em 1.5em;
    margin: auto;
    cursor: pointer;

    &:hover {
        background: rgb(186, 106, 248);
        cursor: pointer;
    }
`;

export default Bienvenida;