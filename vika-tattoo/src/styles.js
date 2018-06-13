import {css, injectGlobal} from 'styled-components';

export const theme = {
    colors: {
        white: '#ffffff',
        lightGrey: '#e5e5e5',
        lighterGrey: '#f7f7f7',
        grey: '#707070',
        darkGrey: '#aaaaaa',
        black: '#000000'
    }
};

const sizes = {
    desktop: 1524,
    tablet: 768,
    phone: 376
};
export const media = Object.keys(sizes).reduce((acc, label) => {
    const emSize = sizes[label] / 16;
    acc[label] = (...args) => css`
      @media (max-width: ${emSize}em){
        ${css(...args)}
      }
      `;
    return acc;
}, {});

export const setUpGlobals = () => {
    injectGlobal`    
      html,body, div#root{
        height: 100%;
      }
      body{
        background-color: ${theme.colors.lighterGrey};
        margin: 0;
        padding: 0;
        box-sizing: border-box;
}`;
};

