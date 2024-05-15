import {useEffect, useMemo, useState} from 'react'
import { ThemeContext } from './common/context/ThemeContext'
import { Footer } from './layout/footer/Footer'
import { Header } from './layout/header/Header'
import { About } from './layout/sections/about/About'
import { Contact } from './layout/sections/contact/Contact'
import { Services } from './layout/sections/interests/Services'
import { Main } from './layout/sections/main/Main'
import { Projects } from './layout/sections/projects/Projects'
import { Skills } from './layout/sections/skills/Skills'
import {particlesObj} from "./common/const/particlesObj";

import Particles, { initParticlesEngine } from "@tsparticles/react";

import { loadSlim } from "@tsparticles/slim";
import {Container, ISourceOptions} from "@tsparticles/engine";


function App() {
    const [currentTheme, setCurrentTheme] = useState<ThemeType>
        (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);


    const options: ISourceOptions = useMemo(
        () => (particlesObj),
        [],
    );

    return <ThemeContext.Provider value={currentTheme === 'light' ? 'light' : 'dark'}>
        <Particles
            id="tsparticles"
            options={options}
        />
        <Header setCurrentTheme={setCurrentTheme} />
        <Main />
        <Projects />
        <About />
        <Services />
        <Skills />
        <Contact />
        <Footer />
    </ThemeContext.Provider>
}

export default App

export type ThemeType = 'light' | 'dark'