import styled from 'styled-components';
import { theme } from './components/styles/Theme.styled';


function App() {
    return (
        <div className="App">
            <Title>Welcome to IT-INCUBATOR</Title>
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
    box-shadow: ${theme.light.shadow.main};
    background-image: ${theme.dark.gradient.banner};
    border-width: 2px;
    border-style: solid;
    border-image: ${theme.dark.gradient.bannerBorder};
`