import { Header } from './layout/header/Header'
import { Main } from './layout/sections/main/Main'
import { Projects } from './layout/sections/projects/Projects'
import { About } from './layout/sections/about/About'
import { Services } from './layout/sections/interests/Services'
import { Learning } from './layout/sections/skills/Learning'
import { Contact } from './layout/sections/contact/Contact'
import { Footer } from './layout/footer/Footer'
import { ThemeContext } from './context/ThemeContext'
import { useState } from 'react'


function App() {
    const [currentTheme, setCurrentTheme] = useState('light')
    return (
        <>
            <ThemeContext.Provider value={currentTheme === 'light' ? 'light' : 'dark'}>
                <Header setCurrentTheme={setCurrentTheme} />
                <Main />
                <Projects />
                <About />
                <Services />
                <Learning />
                <Contact />
                <Footer />
            </ThemeContext.Provider>
        </>
    )
}

export default App