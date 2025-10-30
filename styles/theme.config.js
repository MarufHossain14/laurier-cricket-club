const light = {
    bg: {
        primary: 'linear-gradient(135deg, rgba(75, 46, 131, 0.25) 0%, rgba(70, 45, 120, 0.23) 20%, rgba(65, 40, 110, 0.20) 40%, rgba(100, 75, 70, 0.20) 60%, rgba(140, 110, 60, 0.20) 75%, rgba(160, 130, 70, 0.23) 85%, rgba(180, 151, 90, 0.25) 100%)',
        secondary: `var(--light-black)`,
        tertiary: 'rgba(0,0,0,0.03)',
        border: "#EAEAEA",
        inset: '#e2e4e8',
        input: 'rgba(65,67,78,0.12)',
        hover: 'linear-gradient(270deg, #FFF7FB 0%, #F4F8FF 100%);',
    },
    text: {
        primary: `var(--black)`,
        secondary: 'rgba(0,0,0,0.5)',
        tertiary: '#646464',
        quarternary: '#9194a1',
        placeholder: 'rgba(82,85,96,0.5)',
        onPrimary: '#ffffff',
    },
    img: {
        filter: 'invert(0)'
    },

}

const dark = {
    bg: {
        primary: 'linear-gradient(135deg, rgba(75, 46, 131, 0.65) 0%, rgba(70, 45, 120, 0.63) 20%, rgba(65, 40, 110, 0.60) 40%, rgba(100, 75, 70, 0.60) 60%, rgba(140, 110, 60, 0.60) 75%, rgba(160, 130, 70, 0.63) 85%, rgba(180, 151, 90, 0.65) 100%)',
        secondary: `var(--light-white)`,
        tertiary: 'rgba(255,255,255,0.03)',
        border: "#EAEAEA",
        inset: '#111111',
        input: 'rgba(191,193,201,0.12)',
        hover: 'linear-gradient(270deg, #131628 0%, #27141C 100%);',
    },
    text: {
        primary: `var(--white20)`,
        secondary: 'rgba(255,255,255,0.3)',
        tertiary: '#a9abb6',
        quarternary: '#6c6f7e',
        placeholder: 'rgba(145,148,161,0.5)',
        onPrimary: '#050505',
    },
    img: {
        filter: 'invert(1)'
    },
    // ...
}

const defaultTheme = {
    fontSizes: [
        '14px', // 0
        '16px', // 1
        '18px', // 2
        '22px', // 3
        '26px', // 4
        '32px', // 5
        '40px', // 6
    ],
    fontWeights: {
        body: 400,
        subheading: 500,
        link: 600,
        bold: 700,
        heading: 800,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.3,
        code: 1.6,
    },
    deviceSize: {
        mobileS: '320px',
        mobileM: '375px',
        mobileL: '425px',
        tablet: '768px',
        laptop: '1024px',
        laptopL: '1440px',
        desktop: '2560px'
    },
    // ...
}

export const lightTheme = { ...defaultTheme, ...light }
export const darkTheme = { ...defaultTheme, ...dark }
