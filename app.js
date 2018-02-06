(function () {
    
    var app = angular.module('store', [ ] );

    app.controller('StoreController' , function () {
        this.products = gems;
    });

    var gems = [{
        name: 'Dodecahedron',
        price: 2.95,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti fugit consequuntur nihil nemo quidem! Adipisci, aliquam placeat. Accusantium unde inventore necessitatibus deserunt itaque perferendis consequatur. A ut laborum consequuntur consectetur. ',
        canPurchase: true,
        soldOut: false
    },
    {
        name: 'Pensagonal Gem',
        price: 5.95,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti fugit consequuntur nihil nemo quidem! Adipisci, aliquam placeat. Accusantium unde inventore necessitatibus deserunt itaque perferendis consequatur. A ut laborum consequuntur consectetur. ',
        canPurchase: false,
        soldOut: false
    },
    {
        name: 'Hexagonal Gem',
        price: 7.95,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti fugit consequuntur nihil nemo quidem! Adipisci, aliquam placeat. Accusantium unde inventore necessitatibus deserunt itaque perferendis consequatur. A ut laborum consequuntur consectetur. ',
        canPurchase: false,
        soldOut: true
    }
]

})();