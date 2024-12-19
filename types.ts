export interface nav {
    name: string
    slug: string
}

export interface textBounce {
    text: string
    direction: {
        x : number
        y : number
    }    
}

export interface imageBounce {
    className: string;
    src: string;
    alt: string;
    dimension: {
        width: number
        height: number
    }
    animation: {
        initial: { [key: string]: any }
        animate: { [key: string]: any }
        transition: { [key: string]: any }
    }
}
