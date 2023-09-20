export const theme = {
    light: {
        color: {
            background: {
                primary: 'rgb(255, 255, 255)',
                second: ' rgb(166, 188, 250)',
                input: ' rgba(245, 245, 245, 1)',
                form: ' rgba(0, 0, 0, 0.05)',
                card: ' rgba(249, 249, 252, 1)',
            },
            text: {
                primary: 'rgba(57, 57, 57, 1)',
                second: 'rgb(255, 255, 255)',
                link: 'rgb(33, 87, 242)',
                placeholder: 'rgba(165, 165, 165, 1)',
            },
        },
        shadow: {
            main: 'rgba(0, 0, 0, 0.05) 8px 8px 34px 0',
            card: 'rgba(0, 0, 0, 0.15) 0 4px 6px 0'
        },
        gradient: {
            dot: 'linear-gradient(180deg, rgba(166, 188, 250, 1), rgba(33, 87, 242, 1))',
            banner: 'linear-gradient(45deg, rgba(255, 255, 255, 0.5), rgba(0, 71, 255, 0.05), rgba(71, 71, 71, 0.15), rgba(131, 131, 131, 0.5))',
            bannerBorder: 'linear-gradient(to left, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.25))'
        }
    },
    dark: {
        color: {
            background: {
                primary: 'rgba(34, 34, 34, 1)',
                second: ' rgba(36, 51, 92, 1)',
                input: ' rgba(57, 56, 56, 1)',
                form: ' rgba(0, 0, 0, 0.05)',
                card: ' rgba(53, 53, 53, 1)',
            },
            text: {
                primary: 'rgb(255, 255, 255)',
                second: 'rgba(57, 57, 57, 1)',
                link: 'rgb(33, 87, 242)',
                placeholder: 'rgba(165, 165, 165, 1)',
            },
        },
        shadow: {
            main: 'rgba(0, 0, 0, 0.05) 8px 8px 34px 0',
            card: 'rgba(0, 0, 0, 0.15) 0 4px 6px 0'
        },
        gradient: {
            dot: 'linear-gradient(180deg, rgba(166, 188, 250, 1), rgba(33, 87, 242, 1))',
            banner: 'linear-gradient(45deg, rgba(57, 57, 57, 0.5), rgba(0, 66, 255, 0.05), rgba(71, 71, 71, 0.15), rgba(131, 131, 131, 0.5))',
            bannerBorder: 'linear-gradient(to left, rgba(71, 71, 71, 0.15), rgba(131, 131, 131, 0.5))'
        }
    }
}