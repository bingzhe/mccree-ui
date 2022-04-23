const defaultColors = {
    primaryColor: "#333",
    secondaryColor: "#E6E6E6"
};

export interface HelperRenderOptions {
    placeholders?: {
        primaryColor: string;
        secondaryColor: string;
    };
    extraSVGAttrs?: {
        [key: string]: string;
    };
}


function renderAbstractNodeToSVGElement(){
    
}