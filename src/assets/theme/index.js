import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        darkBlue: "#202733",
        white: "#FFF" 
    },
    breakpoints: {
        sm: '375px',
        lg: '1440px'
    },
    styles: {
        global: {

            body: {bg: 'darkBlue'}
        }

    }
})

export default theme;