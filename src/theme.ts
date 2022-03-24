import {deepMerge} from "grommet/utils";

const palette = {
    Grey: '#313131',
    Blue: '#356AE5'
}

export const theme = {
    global: {
        font: {
            family: "Gotham-Rounded",
            size: "14px",
            height: "20px",
        },
        colors: {
            background: 'white',
            border: palette.Grey
        }
    }
};

export const darkTheme = deepMerge({
    global: {
        colors: {
            background: 'black',
            border: palette.Grey
        }
    }
})
