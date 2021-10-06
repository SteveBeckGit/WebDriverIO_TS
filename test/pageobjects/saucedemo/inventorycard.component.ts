export class InventoryCard{

    constructor(init?: Partial<InventoryCard>){
        Object.assign(this,init);
    }

    itemName : string
    get card() {return $("//div[text()='"+this.itemName+"']/ancestor::div[@class='inventory_item']")}
    addToCartBtn : string = ".//button[text()='Add to cart']";
    removeBtn : string = ".//button[text()='Remove']";

    async addToCart(){
        await this.card.$(this.addToCartBtn).click();
    }

    async removeFromCart(){
        await this.card.$(this.removeBtn).click();
    }
}
