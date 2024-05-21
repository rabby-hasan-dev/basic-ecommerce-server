// Products interface


export type Variants = {
    type: string;
    value: string
}


export type Inventory = {

    quantity: number;
    inStock: boolean;

}


export type Products = {
    name: string;
    description: string;
    price: number;
    category: string;
    tags: Array<string>;
    variants: Array<Variants>;
    inventory: Inventory;
}



