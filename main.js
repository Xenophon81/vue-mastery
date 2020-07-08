
// Part One: introduction
// https://www.vuemastery.com/courses/intro-to-vue-js/vue-instance

/* Old School */
// var product = "Socks";
// var x = document.querySelector('h1');
// x.innerHTML = product;

// var app = new Vue({
//     el: '#app',
//     data: {
//         product: 'Socks',
//         description: 'The best Socks in the Whole world'
//     }
// })


// changes values with regular JavaScript
//app.product = 'Compass';


// Part 2: attribute binding
// https://www.vuemastery.com/courses/intro-to-vue-js/attribute-binding

// var app = new Vue({
//     el: '#app',
//     data: {
//         product: 'Socks',
//         image: 'green.png',
//     }
// })


// part 3: conditional rendering
// https://www.vuemastery.com/courses/intro-to-vue-js/conditional-rendering

// var app = new Vue({
//     el: '#app',
//     data: {
//         product: 'Socks',
//         image: 'green.png',
//         onSale: true,
//         inventory: 9
//     }
// })

// part 4: list rendering

var app = new Vue({
    el: '#app',
    data: {
        brand: 'Vue Mastery',
        product: 'Socks',
        color: 'hotpink',
        inventory: 0,
        inStock: false,
        headerStyles: {
            color: 'red',
            fontSize: '2rem'
        },
        image: 'green.png',
        onSale: true,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants:[
            {
                variantId: 2213,
                variantColor: "green",
                variantImage: './green.png',
            },
            {
                variantId: 2214,
                variantColor: "blue",
                variantImage: './blue.png',
            }
        ],
        sizes: [ 21, 22, 23],
        cart: 0
    },
    methods:{
        addToCart: function(){
            this.cart +=1;
        },
        removeFromCart: function(){
            if(this.cart > 0){
                this.cart -= 1;
            }
            else{
                return false;
            }
        },
        updateProduct: function(variantImage){
            this.image = variantImage;
        }
    }
});

