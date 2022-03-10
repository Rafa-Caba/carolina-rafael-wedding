import styled from "styled-components";

const Contenedor = styled.div`
    background-color: rgba(161, 104, 253, 0.657);
    box-shadow: 0.4em 0.4em 10px rgb(136, 66, 248), -0.4em -0.4em 10px rgb(136, 66, 248); 
    backdrop-filter: blur(5px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 39em;
    minWidth: 39em;
    maxWidth: 39em;
    minHeight: 20em;
	margin: 2em auto;
    font-size: 1.2em;
    padding: 0.8em;
`;

export default Contenedor;