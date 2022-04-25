export interface Product {
    SKU: string,
    Name: string,
    Price: number
}
export interface SpecialRule {
    RuleID: number,
    Name: string,
    calculateDiscount: (products: Product[]) => number
}
