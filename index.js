const goods = [
    {
        id: 1,
        name: "shorts",
        description: "lightweight comfortable shorts",
        sizes: [48, 50, 52, 54],
        price: 2000,
        available: true
    },
    {
        id: 2,
        name: "skirt",
        description: "summer skirt",
        sizes: [48, 50, 52, 54],
        price: 2300,
        available: true
    },
    {
        id: 3,
        name: "shirt",
        description: "men's shirt",
        sizes: [48, 50, 52, 54, 56],
        price: 2500,
        available: true
    },
    {
        id: 4,
        name: "cap",
        description: "the cap is light",
        sizes: [48, 50, 52, 54],
        price: 1200,
        available: true
    },
    {
        id: 5,
        name: "trousers",
        description: "trousers are strict",
        sizes: [48, 50, 52, 54],
        price: 3000,
        available: true
    },
]

var basket = [
    {
        good: goods[0],
        amount: 2
    },
    {
        good: goods[2],
        amount: 1
    }
]

var total = {
    'totalAmount': 0,
    'totalSumm' : 0
}

function addGood(goodId) {
    for (var products of goods) {
        if (products.id == goodId) {
            var i = 0
            for (var productInBasket of basket) {
                if (productInBasket.good == products) {
                    productInBasket.amount++
                    i++
                    break
                }
            }
            if (i === 0) {
                var product = {
                    good: products,
                    amount: 1
                }
                basket.push (product);
            }
        }
    }
    return basket
}

function deleteGood(goodNumber) {
    basket.splice(goodNumber, 1)
    return basket
}

function deleteAll(){
    basket.splice(0,basket.length);
    return basket
}

function results(){
    for (products of basket) {
        total['totalAmount'] += products.amount
        var cost = products.good.price * products.amount
        total['totalSumm'] += cost
    }

    return total
}
deleteAll()
addGood(2)
addGood(4)
addGood(3)
addGood(5)
addGood(2)
addGood(2)
addGood(2)
deleteGood(1)
console.log(results(process.argv[2]));