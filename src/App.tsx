import { useState } from 'react'
import { ThemeContext } from './context/ThemeContext'
import { Footer } from './layout/footer/Footer'
import { Header } from './layout/header/Header'
import { About } from './layout/sections/about/About'
import { Contact } from './layout/sections/contact/Contact'
import { Services } from './layout/sections/interests/Services'
import { Main } from './layout/sections/main/Main'
import { Projects } from './layout/sections/projects/Projects'
import { Learning } from './layout/sections/skills/Learning'


function App() {
    const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>
        (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

    return <ThemeContext.Provider value={currentTheme === 'light' ? 'light' : 'dark'}>
        <Header setCurrentTheme={setCurrentTheme} />
        <Main />
        <Projects />
        <About />
        <Services />
        <Learning />
        <Contact />
        <Footer />
    </ThemeContext.Provider>
}

export default App