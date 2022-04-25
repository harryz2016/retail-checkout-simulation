import {Product, SpecialRule} from "../type/interface";

export class Checkout{
    private scannedProducts : Product[]
    constructor(private readonly pricingRules: SpecialRule[]) {
        this.scannedProducts = []
    }

    public scan = (product:Product)=>{
        this.scannedProducts.push(product)
    }

    public total = ():number=>{
        const sum  = this.scannedProducts.reduce((prev:number, prod:Product) => {
            return prev + prod.Price
        },0);
        const discount =  this.pricingRules.reduce((accumulated:number,rule:SpecialRule)=>{
            return accumulated + rule.calculateDiscount(this.scannedProducts)
        },0)

        return sum - discount
    }
}