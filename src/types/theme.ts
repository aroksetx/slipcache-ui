export interface ThemeUI {
    fonts?: any;
    colors?: CommonColors;
    gradients?: any;
    sizes?: any;
}


export interface CommonColors {
    lightMud: string;
    black: string;
    white: string;
    grey: string;
    blumud: string;
}

export interface UIProps {
    theme: ThemeUI;
    params?: any;
}
