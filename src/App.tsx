import { Suspense, lazy } from 'react'

import { AppContextProvider } from './common/context/appContext'
import { LoadingLoader } from './components/loader/LoadingLoader.styled'
const BackgroundParticles = lazy(() => import('./components/particles/BackgroundParticles'))
const Footer = lazy(() => import('./layout/footer/Footer'))
const Header = lazy(() => import('./layout/header/Header'))
const About = lazy(() => import('./layout/sections/about/About'))
const Contact = lazy(() => import('./layout/sections/contact/Contact'))
const Interests = lazy(() => import('./layout/sections/interests/Interests'))
const Main = lazy(() => import('./layout/sections/main/Main'))
const Projects = lazy(() => import('./layout/sections/projects/Projects'))
const Skills = lazy(() => import('./layout/sections/skills/Skills'))

function App() {
  return (
    <AppContextProvider>
      <Suspense fallback={<LoadingLoader />}>
        <BackgroundParticles />
        <Header />
        <Main />
        <Projects />
        <About />
        <Interests />
        <Skills />
        <Contact />
        <Footer />
      </Suspense>
    </AppContextProvider>
  )
}

export default App
