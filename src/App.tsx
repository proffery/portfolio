import styled from 'styled-components';
import { theme } from './components/styles/Theme.styled';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Projects } from './layout/sections/projects/Projects';


function App() {
    return ( 
        <>
            <Header />
            <Main />
            <Projects />
        </>
    );
}

export default App;