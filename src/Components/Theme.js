import { ThemeProvider } from 'styled-components';

const theme = {
color: {
desaturatedRed: 'hsl(0, 36%, 70%)',
softRed: 'hsl(0, 93%, 68%)',
darkGrayishRed: 'hsl(0, 6%, 24%)',
},
font: {
size: {
extraSmall: '14px',
small: '16px',
medium: '18px',
large: '20px',
extraLarge: '24px',
},
family: "'Josefin Sans', sans-serif",
},
breakpoint: {
mobile: '850px',
},
borderWidth: '2px',
};

const Theme = ({ children }) => {
return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;