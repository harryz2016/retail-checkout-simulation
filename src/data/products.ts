import {Product} from "../type/interface";

export const products: Product[] = [
    {SKU: "ipd", Name: "Super iPad", Price: 549.99},
    {SKU: "mbp", Name: "MacBook Pro", Price: 1399.99},
    {SKU: "atv", Name: "Apple TV", Price: 109.5},
    {SKU: "vga", Name: "VGA adapter", Price: 30}
]

export const ipd:Product = products[0]
export const mbp:Product =  products[1]
export const atv:Product = products[2]
export const vga:Product = products[3]