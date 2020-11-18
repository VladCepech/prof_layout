
class Goods{
    constructor(name, color, size, price) {
        this.name = name;
        this.color = color;
        this.size = size;
        this.price = price;
    }
}


class CartElement extends Goods{
    constructor(name, color, size, price, quantity, element = undefined) {
        super(name, color, size, price);

        this.quantity = quantity; //количество товара
        this.element = element; //код HTML одного элемента корзины
    }

    subtotal() {
        // метод возвращает стоимость позиции товара 
        // в зависимости от его количества
        return this.price * this.quantity;
    }

    changeQuantity() {
        //метод изменяет количество выбранного элемента
        // при нажатии кнопок увеличить/уменьшить количество  штук товара
        // в корзине
        return this.quantity;
    }
    
    getHtml() {
        //метод отрисовывает элемент корзины
        // и возвращает код HTML элемента корзины
        return this.element;
    }

}

class Cart extends CartElement{
    constructor(element, shipping, discount) {
        super(element);

        this.shipping = shipping; // способ доставки
        this.discount = discount; // скидка клиента
    }

    shipping() {
        //метод описывает способ доставки товара
    }
    
    shippingTotal() {
        //метод подсчитывает сумму доставки
    }

    delateElement() {
        //метод удаляет елемент их корзины при нажатии на крестик,
        // а так же при изменении количества на ноль.
    }

    clearCart() {
        // метод очищает корзину при нажатии кнопки очистки
    }

    applyDiscount() {
        //метод применяет дискоунт, если у клиента имеется скидка.
    }

    grandTotal() {
        //метод считает итоговую сумму корзины с учетом стоимости доставки,
        //если она не бесплатная
    }

    render() {
        //метод наполняет страницу корзины элементами 
        //созданными методом getHTML()
    }
}
