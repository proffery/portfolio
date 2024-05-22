import Particles, {initParticlesEngine} from "@tsparticles/react";
import {useEffect, useMemo, useState} from "react";
import {loadSlim} from "@tsparticles/slim";
import {useAppContext} from "../../common/context/appContext";
import {extractNumberFromString} from "../../common/utils/extractNumberFromString";
import {themeObj} from "../../common/const/themeObj";
import options from "../../common/const/particlesOptions";

export const BackgroundParticles = () => {
    const [init, setInit] = useState(false);
    const { width } = useAppContext()
    const breakpoint = extractNumberFromString(themeObj.media.mobile)

    useEffect(() => {
        if (width > breakpoint) {
            initParticlesEngine(async (engine) => {
                await loadSlim(engine);
            }).then(() => {
                setInit(true);
            });
        } else setInit(false)
    }, [width]);


    return init ? <Particles
        id="tsparticles"
        options={options}
    /> : null
}