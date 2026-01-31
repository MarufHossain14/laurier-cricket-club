const light = {
    bg: {
        primary: '#f8f7f4',
        secondary: '#ffffff',
        tertiary: '#f2f1ed',
        border: '#e1ddd5',
        inset: '#ece9e3',
        input: '#ffffff',
        hover: '#f5f4f0',
    },
    text: {
        primary: '#1f1c1a',
        secondary: '#5c5b58',
        tertiary: '#7a7874',
        quarternary: '#9a9892',
        placeholder: '#a4a29d',
        onPrimary: '#ffffff',
    },
    img: {
        filter: 'invert(0)'
    },
    accent: {
        primary: '#411884',
        soft: '#f3edfa',
        contrast: '#fcc314',
    },

}

const dark = {
    bg: {
        primary: '#141312',
        secondary: '#1b1a19',
        tertiary: '#22211f',
        border: '#2a2927',
        inset: '#0f0e0d',
        input: '#1b1a19',
        hover: '#1f1e1c',
    },
    text: {
        primary: '#f4f1ea',
        secondary: '#c9c5bc',
        tertiary: '#a9a39a',
        quarternary: '#7f7b73',
        placeholder: '#8f8b82',
        onPrimary: '#11100f',
    },
    img: {
        filter: 'invert(1)'
    },
    accent: {
        primary: '#7b5cc3',
        soft: '#2a2238',
        contrast: '#fcc314',
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
        subheading: 400,
        link: 600,
        bold: 600,
        heading: 600,
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
