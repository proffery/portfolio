import styled from 'styled-components';
import { theme } from './components/styles/Theme.styled';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';


function App() {
    return ( 
        <>
            <Header />
            <Main />
        </>
    );
}

export default App;