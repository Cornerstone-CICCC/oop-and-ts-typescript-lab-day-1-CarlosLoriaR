// 🍎 Create an Inventory System where items can be added, updated, and checked for stock.
// 1. Create a tuple type called ItemDetails which holds (string, number, boolean) representing itemName, quantity, and isAvailable.
// 2. Create a type alias called InventoryItem which contains: itemId (number), details (ItemDetails).
// 3. Create a function called addItem which adds an item to the inventory array. The function needs to return an InventoryItem object.
// 4. Create a function called updateStock which updates the quantity of an item. The return needs to be a string.
// 5. Create a function called checkStock which returns true if the item is available and false otherwise.

type ItemDetails = [string, number, boolean];

type InventoryItem = {
  itemId: number;
  details: ItemDetails;
};

let inventory: InventoryItem[] = [];

function addItem(
  itemId: number,
  itemName: string,
  quantity: number,
  isAvailable: boolean,
): InventoryItem {
  const itemDetails: ItemDetails = [itemName, quantity, isAvailable];
  const newItem: InventoryItem = {
    itemId,
    details: itemDetails,
  };
  inventory.push(newItem);
  return newItem;
}

function updateStock(itemId: number, quantity: number) {
  const itemIndex = inventory.findIndex((item) => item.itemId === itemId);
  if (itemIndex === -1) {
    return `Item with ID ${itemId} not found`;
  }
  const item = inventory[itemIndex];
  const [itemName, _, isAvailable] = item.details;
  inventory[itemIndex].details = [itemName, quantity, isAvailable];
  return `Stock updated for ${itemName}, new quantity: ${quantity}`;
}

function checkStock(itemId: number) {
  const item = inventory.find((item) => item.itemId === itemId);
  if (!item) {
    return false;
  }
  const [_, quantity, isAvailable] = item.details;
  return isAvailable && quantity > 0;
}

// Test cases (Create more if needed)
console.log(addItem(1, "Laptop", 5, true)); // { itemId: 1, details: ["Laptop", 5, true] }
console.log(updateStock(1, 3)); // "Stock updated for Laptop, new quantity: 3"
console.log(checkStock(1)); // true
