import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <Contenedor>
            <div>
                <Titulo>Carolina & Rafael</Titulo>
            </div>
        </Contenedor>
    );
}

const Contenedor = styled.div`
    align-items: center;
    background-color: rgba(161, 104, 253, 0.657);
    box-shadow: 0.4em 0.4em 10px rgb(136, 66, 248), -0.4em -0.4em 10px rgb(136, 66, 248); 
    backdrop-filter: blur(5px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 6em;
    margin: 2em;
    width: 90%;
`;

const Titulo = styled.h1`
    font-size: 3em;
	line-height: 2em;
	font-weight: 600;
    color: white;
    text-align: center;
    padding: 1em;
    margin: 1em;
`;
 
export default Header;
