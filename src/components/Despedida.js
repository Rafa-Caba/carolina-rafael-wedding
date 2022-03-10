import React, { useContext, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ContextoInvitados } from '../contexts/contextoInvitados';

const Despedida = () => {
    const { invitadoInfo } = useContext(ContextoInvitados);
    const [finalizar, cambiarFinalizar] = useState(false);
    const { trigger } = useParams();

    setTimeout(() => {
        cambiarFinalizar(!finalizar);
    }, 3000);

    return (
        <ContenedorDespedida>
            {parseInt(trigger) > 0 ?
                <>
                    <DespedidaMsg>
                        ¡Muchas gracias Familia:
                    </DespedidaMsg>
                    <DespedidaTitulo>
                        '{invitadoInfo.apellido}'
                    </DespedidaTitulo>
                    <DespedidaMsg>
                        Por confirmar tu asistencia a nuestra Boda!
                    </DespedidaMsg>
                    <DespedidaMsg>
                        ¡Te esperamos el dia 10 de Septiembre!
                    </DespedidaMsg>
                    { finalizar && 
                        <Navigate to={`/${invitadoInfo.codigoFamilia}`} />
                    }
                </>
            :
                <>
                    <DespedidaTitulo>
                        ¡Lamentamos mucho
                        que no puedan <br /> acompañarnos a nuestra Boda! :(
                    </DespedidaTitulo>
                    { finalizar && 
                        <Navigate to={`/${invitadoInfo.codigoFamilia}`} />
                    }
                </>
            }
        </ContenedorDespedida>
    );
}

const ContenedorDespedida = styled.section`
    background-color: rgba(161, 104, 253, 0.657);
    box-shadow: 0.3em 0.3em 8px rgb(136, 66, 248), -0.3em -0.3em 8px rgb(136, 66, 248);
    backdrop-filter: blur(5px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1.5em 1em;
    margin: auto;
    margin-top: 1em;
    font-size: 2.5em;
`;

const DespedidaTitulo = styled.h2`
    padding: 0.5em 0.2em;
    text-align: center;
    margin: 0.3em
`;

const DespedidaMsg = styled.p`
    text-align: center;
    font-size: 1em;
    margin-top: 0.4em;
`;
 
export default Despedida;
