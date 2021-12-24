class Product{

    #id
    #pname
    #price


    constructor(id, pname, price) {
        this.#id = id;
        this.#pname = pname;
        this.#price = price;
    }


    get id() { return this.#id }
    
    get pname() { return this.#pname }
    
    get price() { return this.#price}
}

export default Product;