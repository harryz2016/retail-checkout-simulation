import {Product, SpecialRule} from "../type/interface";

export const rules: SpecialRule[] = [
    {
        RuleID: 1,
        Name: " a 3 for 2 deal on Apple TVs. For example, if you buy 3 Apple TVs, you will pay the price of 2 only",
        calculateDiscount: (scannedProducts: Product[]) => {
            const appleTVs = scannedProducts.filter(item => item.SKU === 'atv')
            const discount = appleTVs.length === 0 ? 0 : Math.floor(appleTVs.length / 3) * appleTVs[0].Price
            return discount
        }
    },
    {
        RuleID: 2,
        Name: " the brand new Super iPad will have a bulk discounted applied, where the price will drop to $499.99 each, if someone buys more than 4",
        calculateDiscount: (scannedProducts: Product[]) => {
            const iPads = scannedProducts.filter(item => item.SKU === 'ipd')
            const discount = iPads.length <= 4 ? 0 : iPads.length * (iPads[0].Price - 499.99)
            return discount
        }
    },
    {
        RuleID: 3,
        Name: "we will bundle in a free VGA adapter free of charge with every MacBook Pro sold",
        calculateDiscount: (scannedProducts: Product[]) => {
            const mbps = scannedProducts.filter(item => item.SKU === 'mbp')
            const vgas = scannedProducts.filter(item => item.SKU === 'vga')
            const min = mbps.length < vgas.length? mbps.length : vgas.length
            const discount = min* 30
            return discount
        }
    },
]