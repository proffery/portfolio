import type { ISourceOptions } from "@tsparticles/engine";
import polygonMask from '../../assets/images/photo.svg'
import {themeObj} from "./themeObj";

export const options: ISourceOptions =  {
    key: "polygonMask",
    name: "Polygon Mask",
    interactivity: {
        events: {
            onClick: {
                enable: false,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "bubble",
                parallax: {
                    enable: false,
                    force: 2,
                    smooth: 10,
                },
            },
        },
        modes: {
            bubble: {
                distance: 40,
                duration: 2,
                opacity: 8,
                size: 6,
            },
            connect: {
                distance: 80,
                links: {
                    opacity: 0.5,
                },
                radius: 80,
            },
            grab: {
                distance: 400,
                links: {
                    opacity: 1,
                },
            },
            push: {
                quantity: 4,
            },
            remove: {
                quantity: 2,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
            slow: {
                active: false,
                radius: 0,
                factor: 1,
            },
        },
    },
    particles: {
        color: {
            value: themeObj.light.color.background.second,
        },
        move: {
            enable: true,
            outModes: "bounce",
            speed: .4,
        },
        number: {
            value: 20,
        },
        opacity: {
            animation: {
                enable: true,
                speed: .5,
                sync: false,
            },
            value: {
                min: 0.05,
                max: 0.4,
            },
        },
        shape: {
            type: ["circle", "triangle", "square"],
        },
        size: {
            value: {min: 5, max: 15},
        },
    },
};

export default options;