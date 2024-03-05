const app = Vue.createApp({
    data() {
        return {
            test_src: 'https://i.imgur.com/5O8MvG8.png',
            // New Item Add objects: 
            new_items: [ 
                {new_name: 'Test Item', new_price: 10, new_src: 'imgurlink.com'},
            ],
            new_name: '',
            new_price: '',
            new_img: ''
        };
    },
    methods: {
        // Define your methods here
        add_new(name, price, img_src) { 
            console.log(name, price, img_src)
            new_item = { 
                new_name: name, 
                new_price: price, 
                new_src: img_src
            }
            console.log(new_item)
            this.new_items.push(new_item)
        }
    }
});

app.mount('#app');
