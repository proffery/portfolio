import { AppContextProvider, Theme} from './common/context/appContext'
import { Footer } from './layout/footer/Footer'
import { Header } from './layout/header/Header'
import { About } from './layout/sections/about/About'
import { Contact } from './layout/sections/contact/Contact'
import { Interests } from './layout/sections/interests/Interests'
import { Main } from './layout/sections/main/Main'
import { Projects } from './layout/sections/projects/Projects'
import { Skills } from './layout/sections/skills/Skills'
import {BackgroundParticles} from "./components/particles/BackgroundParticles";


function App() {
    return <AppContextProvider>
        <BackgroundParticles />
        <Header />
        <Main />
        <Projects />
        <About />
        <Interests />
        <Skills />
        <Contact />
        <Footer />
    </AppContextProvider>
}

export default App