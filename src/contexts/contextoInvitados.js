import React, { useEffect, useState } from 'react';
import db from '../firebase/firebaseConfig';
import { collection, doc, onSnapshot, updateDoc } from 'firebase/firestore';

// Creamos contexto = estado global
const ContextoInvitados = React.createContext();

const ProverdorInvitados = ({ children }) => {
    // Invitados registrados en FireBase
    const [invitados, cambiarInvitados] = useState([]);
    // Arreglo con la familia filtrada por su codigo
    const [familiaFiltradaPorCodigo, cambiarFamiliaFiltradaPorCodigo] = useState([])
    // Codigo y apellido para usar
    const [invitadoInfo, cambiarInvitadoInfo] = useState({});

    useEffect(() => {
        // Obetenemos los datos de Firebase cuando inicia la App
        onSnapshot(
            collection(db, 'invitados'),
            (snapshot) => {
                const arregloInvitados = snapshot.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id }
                });

                cambiarInvitados(arregloInvitados);
            },
            (error) => {
                console.log(error)
            }
        );
    }, []);
    
    // Filtramos a la familia por su codigo
    const filtrarFamilia = (codigoFamilia) => {
        const nuevoArregloFailiaFiltrada = invitados.filter((invitado) => invitado.codigoFamilia === codigoFamilia);
        cambiarFamiliaFiltradaPorCodigo(nuevoArregloFailiaFiltrada);
        // Se agrega el apellido y codigo a InvitadoInfo
        cambiarInvitadoInfo({ 
            apellido: nuevoArregloFailiaFiltrada[0].apellido, 
            codigoFamilia: nuevoArregloFailiaFiltrada[0].codigoFamilia 
        });
    }    

    // Actualiza los invitados en Firebase
    const actualizandoInvitados =  async (invitado) => {
        try {
            await updateDoc(doc(db, 'invitados', invitado.id), {
                nombre: invitado.nombre,
                apellido: invitado.apellido,
                codigoFamilia: invitado.codigoFamilia,
                confirmStatus: invitado.confirmStatus
            });
        } catch (err) {
            console.log(err);
        }
    }

    // ID: es el id del invitado a confirmar
    // confirmarStatus: TRUE si checked o FALSE si unchecked
    const confimarAssistenciaIndividual = (id, confirmacionStatus) => {
        // Obtener Invitado por ID
        const invitado = familiaFiltradaPorCodigo.find((invitado) => invitado.id === id);

        // Si 'confirmStatus' = true: estadoConfirmacion = CONFIRMADO. 
        // O si 'confirmStatus' = false: estadoConfirmacion = NO CONFIRMADO 
        const confirmStatus = confirmacionStatus ? 'Confirmado' : 'No Confirmado';

        // Actualizamos el invitado con el nuevo ConfirmStatus
        const nuevoInvitado = { ...invitado, confirmStatus }
        const arregloClonado = [...familiaFiltradaPorCodigo];

        familiaFiltradaPorCodigo.forEach((invitado, index) => {
            if (invitado.id === id) {
                arregloClonado.splice(index, 1, nuevoInvitado);
                cambiarFamiliaFiltradaPorCodigo(arregloClonado);
                // Actualiza el invitado con el nuevo ConfirmStatus
                actualizandoInvitados(nuevoInvitado);
            }
        });
    }


    // Confirmara a toda la familia completa
    const confirmarFamilia = (confirmacionStatus) => {
        const confirmStatus = confirmacionStatus && "Confirmado";

        familiaFiltradaPorCodigo.forEach((invitado) => {
            const nuevoInvitado = { ...invitado, confirmStatus };
            // Actualiza el invitado con el nuevo ConfirmStatus
            actualizandoInvitados(nuevoInvitado);
        });
    }

    return (
        <ContextoInvitados.Provider 
            value={{ 
                invitadoInfo,
                familiaFiltradaPorCodigo,
                filtrarFamilia,
                confimarAssistenciaIndividual,
                confirmarFamilia
            }}
        >
            {children}
        </ContextoInvitados.Provider>
    );
}

export {
    ContextoInvitados,
    ProverdorInvitados
};