import { InventoryItem } from "../../models/inventoryitem"
import Page from "./page"
import {InventoryCard} from "./inventorycard.component"


class InventoryPage extends Page{


    get inventory () { return $('#inventory_container') }
    get cartLink () { return $('//a[@class=shopping_cart_link]') }
    get cartBadge () { return $('//span[@class="shopping_cart_badge"]') }

    async addItemToCard(item: InventoryItem){
        const card = new InventoryCard({itemName : item.Name});
        await card.addToCart();
    }

    async removeItemFromCart(item: InventoryItem){
        const card = new InventoryCard({itemName : item.Name});
        await card.removeFromCart();
    }

    async removeItemsFromCart(items : string[]){
        for(var item of items){
           await this.removeItemFromCart(new InventoryItem({Name:item}));
        }
    }

    async getShoppingCartCounter(){
        return await this.cartBadge;
    }

}

export default new InventoryPage();
