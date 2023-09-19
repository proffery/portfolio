import styled from 'styled-components';
import { theme } from './components/styles/Theme.styled';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Projects } from './layout/sections/projects/Projects';
import { About } from './layout/sections/about/About';
import { Services } from './layout/sections/services/Services';
import { Learning } from './layout/sections/learning/Learning';
import { Contact } from './layout/sections/contact/Contact';
import { Footer } from './layout/footer/Footer';


function App() {
    return ( 
        <>
            <Header />
            <Main />
            <Projects />
            <About />
            <Services />
            <Learning />
            <Contact />
            <Footer />
        </>
    );
}

export default App;