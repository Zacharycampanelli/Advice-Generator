import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        darkBlue: '#202733',
        darkGrayBlue: '#313A48',
        lightCyan: '#CEE3E9',
        neonGreen: '#53FFAA' 
    },
    breakpoints: {
        sm: '375px',
        lg: '1440px'
    },
    fonts: {
        body: 'Manrope, sans-serif'
    },
    styles: {
        global: {
            h2: {
                fontSize: '24px',
                color: 'lightCyan'
            },
            p: { 
                fontSize: '11px',
                color: 'neonGreen',
                letterSpacing: '4px',
            },

            body: {bg: 'darkBlue'}
        }

    }
})

export default theme;