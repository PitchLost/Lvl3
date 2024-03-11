setTimeout(_ => {

const app = Vue.createApp({
    data() {
        return {
          // Check for admin/developer mode
          developer_mode: false, // False by defualt
          admin_mode: false, // False by default
            // New Item Add objects: 
            new_items: [ // This does something
                {new_name: 'Test Item', new_price: 10, new_src: 'imgurlink.com'},
            ],
            new_item: { // Used in the add_item process
                new_name: '',
                new_price: '',
                new_img: ''
            }, 
            shop_items: db_items, // array for the flex display

            // Dropdown menu data: 
            dropdownOpen: false, 

            // Compact Mode Data: 
            compactOpen: false
        

        };
    },
    methods: { // Methods are the vue.js functions
        // Define your methods here
        add_new(name, price, img_src) { // add new items to database/DOM
            console.log(name, price, img_src) // Log
            new_item = { // Set the values of new_item to the newly obtained data
                new_name: name, 
                new_price: price, 
                new_img: img_src
            }
            console.log(new_item) // Log
            this.new_items.push(new_item) // add to new_items array
            db_add(new_item) // Add the new items to the database using the nodeReq function
        }, 

        // Toggle the developer mode
        toggleDevMode() { 
            this.developer_mode = !this.developer_mode // Toggle
            console.log('Dev Mode:', developer_mode) // Log
        }, 

        // Make the dropdown menu
        //! This will not be used yet!!
        createDropdown() {  
            for (let i = 0;  i < this.shop_items.length; i++) { 
                this.dropdown_items.push(this.shop_items[i])
                console.log('dropdown items:', dropdown_items)
            }
        }
    }
});
console.log('Vue shop items',this.shop_items)



app.mount('#app');


},100)


