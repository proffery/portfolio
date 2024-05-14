import {MoveDirection, OutMode} from "@tsparticles/engine";
import {theme} from "../../styles/Theme.styled";

export const particlesObj =  {
    // background: {
    //     color: {
    //         value: "transparent",
    //     },
    // },
    fpsLimit: 120,
    interactivity: {
        events: {
            // onClick: {
            //     enable: true,
            //     mode: "push",
            // },
            // onHover: {
            //     enable: true,
            //     mode: "repulse",
            // },
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 10,
                duration: 0.8,
            },
        },
    },
    particles: {
        color: {
            value: theme.light.color.background.second,
        },
        links: {
            color: theme.light.color.background.second,
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        move: {
            direction: MoveDirection.none,
            enable: true,
            outModes: {
                default: OutMode.out,
            },
            random: false,
            speed: 1,
            straight: false,
        },
        number: {
            density: {
                enable: true,
            },
            value: 50,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
}