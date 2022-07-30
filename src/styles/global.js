import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root {
    --color-white: #fff;
    --color-primary: #27AE60;
    --color-primary-50: #93D7AF;
    --color-secondary: #EB5757;

    --grey-100: #333333;
    --grey-50: #828282;
    --grey-20: #E0E0E0;
    --grey-0: #F5F5F5;

    --negative: #E60000;
    --warning: #FFCD07;
    --success: #168821;
    --information: #155BCB;
};

    * {
        margin: 0;
        border: 0;
        padding: 0px;
        outline: unset;

        font-family: 'Inter', sans-serif;
        font-size: 1.1rem;

        list-style: none;

        box-sizing: border-box;
    };

`
export default GlobalStyle

