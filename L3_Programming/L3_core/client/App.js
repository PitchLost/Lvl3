setTimeout(_ => {

const app = Vue.createApp({
    data() {
        return {
          // Check for admin/developer mode
          developer_mode: false,
          admin_mode: false,
            // New Item Add objects: 
            new_items: [ 
                {new_name: 'Test Item', new_price: 10, new_src: 'imgurlink.com'},
            ],
            new_item: {
                new_name: '',
                new_price: '',
                new_img: ''
            }, 
            shop_items: db_items
        };
    },
    methods: {
        // Define your methods here
        add_new(name, price, img_src) { 
            console.log(name, price, img_src)
            new_item = { 
                new_name: name, 
                new_price: price, 
                new_img: img_src
            }
            console.log(new_item)
            this.new_items.push(new_item)
            db_add(new_item)
        }
    }
});
console.log('Vue shop items',this.shop_items)



app.mount('#app');


},100)


