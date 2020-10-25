(function(){
'use strict';

angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
    let itemsToBuy = this;

    itemsToBuy.items = ShoppingListCheckOffService.getItemsToBuy();

    itemsToBuy.buyItem = function (item) {
        ShoppingListCheckOffService.buyItem(item);
    }
};

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
    let alreadyBoughtList = this;

    alreadyBoughtList.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
};

function ShoppingListCheckOffService() {
    let service = this;
    let itemsToBuy =  [
        {name: "apple", quantity: 2},
        {name: "watermelon", quantity: 7},
        {name: "orange", quantity: 3},
        {name: "strawberry", quantity: 9},
        {name: "banana", quantity: 1},
        {name: "nectarine", quantity: 5},
        {name: "mango", quantity: 8}
    ];
    let alreadyBoughtItems = [];

    service.getItemsToBuy = function() {
        return itemsToBuy;
    }
    service.getAlreadyBoughtItems = function() {
        return alreadyBoughtItems;
    };
    service.buyItem = function (item) {
        let itemIndex = itemsToBuy[item];
        alreadyBoughtItems.push(itemIndex);
        itemsToBuy.splice(item,1);
    }
}

})();