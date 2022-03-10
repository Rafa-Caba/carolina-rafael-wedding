import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { ContextoInvitados } from '../contexts/contextoInvitados';
import Contenedor from '../elements/Contenedor'
import ConfirmacionDecision from './ConfirmacionDecision';

const Confirmacion = () => {
    // Recibimos invitadoInfo del Contexto y tomamos el Apellido 
    const { invitadoInfo } = useContext(ContextoInvitados);
    // Estado para activar componente ´ConfirmacionOpciones´
    const [confirmando, cambiarConfirmando] = useState(false);
    // Estado de la opcion elegida, yas sea 'Familia Completa' o 'Individualmente'
    const [opcionElegida, cambiarOpcionElegida] = useState('');

    // Agregamos a apellido el valor apellido de InvitadoInfo
    const apellido = invitadoInfo.apellido;

    // Al enviar el Formulario, se activa la opcion de 
    // confirmacion y se cambia su estado a verdadero 'TRUE'
    const opcionSeleccionada = (e) => {
        e.preventDefault();
        cambiarConfirmando(!confirmando);
    }

    return (
        <Contenedor>
            <MsgFamilia>
                Bienvenida Familia {apellido}
            </MsgFamilia>
            <MsgIndOFam>
                Por favor confirma: Toda la familia o Individualmente
            </MsgIndOFam>

            <ConfirmacionOpciones>   
                <FormularioOpciones onSubmit={opcionSeleccionada}>
                    <RadioInput 
                        type="radio" 
                        name="option" 
                        id="familia_completa" 
                        value="Familia completa"
                        onChange={(e) => cambiarOpcionElegida(e.target.value)}
                    />
                    <RadioLabel htmlFor="familia_completa">
                        Familia completa
                    </RadioLabel>

                    <RadioInput 
                        type="radio" 
                        name="option" 
                        id="individual" 
                        value="Individualmente" 
                        onChange={(e) => cambiarOpcionElegida(e.target.value)}
                    />
                    <RadioLabel htmlFor="individual">
                        Individualmente
                    </RadioLabel>

                    {!confirmando &&
                        <SubmitInput 
                            type="submit" 
                            value="Continuar" 
                            disabled={!opcionElegida ? true : false}
                        />
                    }
                </FormularioOpciones>
            </ConfirmacionOpciones>

            {confirmando && 
                <ConfirmacionDecision 
                    opcionElegida={opcionElegida} 
                />
            }
        </Contenedor>
    );
}

const MsgFamilia = styled.p`
    font-size: 2.6em;
    text-align: center;
    padding: 0.5em 0.2em 1em 0.2em;
    margin: 0;

    @media (max-width: 900px) {
		font-size: 2.2em;
	}
`;

const MsgIndOFam = styled.p`
    font-size: 2em;
    text-align: center;
    padding: 0.5em 0.2em 1em 0.2em;
    margin: 0;

    @media (max-width: 900px) {
		font-size: 1.5em;
	}
`;

const ConfirmacionOpciones = styled.div`
    width: 100%;
	margin: auto;
	display: flex;
    padding: 1em 1em 2em 1em;
    align-items: center;
    justify-content: center;
`;

const FormularioOpciones = styled.form`
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    width: 42em;
    gap: 0.8em;
    margin: 0, auto;
    justify-content: center;
    align-items: center;
`;

const RadioLabel = styled.label`
    font-size: 1.5em;
    cursor: pointer;
    text-align: center;
`;

const RadioInput = styled.input`
    cursor: pointer;
    padding: 1em;
    height: 1.5em;
    width: 1.5em;
`;

const SubmitInput = styled.input`
    cursor: pointer;
    font-size: 1.2em;
    margin-top: 0.8em;
    width: 50%;
    padding: 10px 5px;
    background: rgb(197, 127, 250);
    border-radius: 10px;
    border: rgb(212, 158, 253);

    &:hover {
        background: rgb(186, 106, 248);
    }
`;

 
export default Confirmacion;