export interface User {
    id: number;
    name?: string | undefined;
    department?: string;
    position?: string;
    details?:{
        role: [number,string];
    }
}

