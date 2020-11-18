
const arrGoods = [
    {price: 255, name: 'T-Shirt1', color: 'green'},
    {price: 205, name: 'T-Shirt2', color: 'red'},
    {price: 105, name: 'T-Shirt3', color: 'blue'},
    {price: 205, name: 'T-Shirt4', color: 'black'},
    {price: 235, name: 'T-Shirt5', color: 'grey'},
    {price: 225, name: 'T-Shirt6', color: 'white'},
];



class GoodsList {
    constructor(products) {
        this.products = products;
        this.totalSum = 0;

        
    }

    goodsSum() {
        for(let item of this.products) {
            this.totalSum += item.price;
        }
        return this.totalSum;
    }

}

const ProductList = new GoodsList(arrGoods);
ProductList.goodsSum();
console.log(ProductList.goodsSum());