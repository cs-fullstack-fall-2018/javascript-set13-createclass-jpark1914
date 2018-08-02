class Product{

    constructor(price, quatity, name){
        this.price = price;
        this.quantity = quatity;
        this.name = name;

    }

    printAllAttributes(){
        alert("The product is : " + this.name + "\n The price: " + this.price + "\n We have: " + this.quantity +" left!");


    }


}

function main(){
    var diamond = new Product(35000, 2, "Pink Razor Diamond");
    var link = new Product(200, 100, "Sterling Silver Diamond Insert Link");

    diamond.printAllAttributes();
    link.printAllAttributes();

}

main();