import {Checkout} from "../service/Checkout";
import {rules} from "../data/rules";
import {atv, ipd, mbp, vga} from "../data/products";
import {expect} from "chai";

describe("Checkout",  () => {

    it("SKUs Scanned: atv, atv, atv, vga Total expected: $249.00",  function () {
        const co = new Checkout(rules);
        co.scan(atv);
        co.scan(atv);
        co.scan(atv);
        co.scan(vga);
        const total  = co.total();
        expect(total).to.eq(249)
    })

    it("atv, ipd, ipd, atv, ipd, ipd, ipd Total expected: $2718.95",  function () {
        const co = new Checkout(rules);
        co.scan(atv);
        co.scan(ipd);
        co.scan(ipd);
        co.scan(atv);
        co.scan(ipd);
        co.scan(ipd);
        co.scan(ipd);
        const total  = co.total();
        expect(total).to.eq(2718.95)
    })

    it("SKUs Scanned: vga, mbp Total expected: $1399.99",  function () {
        const co = new Checkout(rules);
        co.scan(mbp);
        co.scan(vga);
        const total  = co.total();
        expect(total).to.eq(1399.99)
    })
})