import LoginPage from  '../pageobjects/saucedemo/login.page';
import Credential from '../models/credential'
import InventoryPage from '../pageobjects/saucedemo/inventory.page';
import { InventoryItem } from '../models/inventoryitem';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {

        const credential = new Credential({username : "standard_user", password :"secret_sauce"});

        await LoginPage.open();

        await LoginPage.login(credential);

        await expect(InventoryPage.inventory).toBeExisting();
        
    });
});

describe('Add an item to the cart', () => {
    it('should add an item to the cart and increment the badge number', async () => {
        const credential = new Credential({username : "standard_user", password :"secret_sauce"});
        const item = new InventoryItem({Name: "Sauce Labs Backpack"});
        await LoginPage.open();
        await LoginPage.login(credential);

        await InventoryPage.addItemToCard(item);
        const items = await InventoryPage.cartBadge.getText();
        await expect(items).toBe("1");
        await InventoryPage.removeItemFromCart(item);
    });    
});


