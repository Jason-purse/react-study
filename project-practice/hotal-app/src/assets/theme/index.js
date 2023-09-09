import {createTheme} from "@mui/material/styles";

export default {
    color: {
        primaryColor: '#ff385c',
        secondPrimaryColor: '#00848A'
    },
    text: {
        primaryColor: "#484848",
        secondaryColor: "#222"
    },
    // 还可以用其他方式
    boxShadow: {
        simple: `
          transition: box-shadow 200ms ease;
          &:hover {
            box-shadow: 0 2px 4px rgba(0, 0, 0, .18);
          }
        `
    }
}

export const antDesignTheme = {
    token: {
        colorPrimary: '#00b96b'
    }
}

export const muiTheme = createTheme()