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
            dropdownItems: db_items,

            dropdownOpen: false, 

            // Compact Mode Data: 
            compactOpen: false, 


            // Cart Data: 

            // If the cart is open or not
            cart_open: false,

            cart_total: 0, // Running total of the cart

            // Array for all cart items: 
            cart_items: [],

            // Item being added to the cart
            cart_add_item: { 
                cart_name: '',
                cart_price: 0
            }, 
            item_counter: 0,

            // Checkout Data: 

            checkout_open: false, 

            PaymentInfo: { 
                CardNum: '', 
                CardName: '', 
                CardCvc: '',
                CardExpiry: ''
            }
        

        };
    },
    methods: { // Methods are the vue.js functions
        // Define your methods here

        vue_onload() { 
            console.log('vue onload function')
            this.dropdownItems = this.dropdownItems.sort((a,b) => a.ITEM_NAME.localeCompare(b.ITEM_NAME))
        },
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


        //Compact Mode Functions: 
        toggleCompact() { 
            this.compactOpen = !this.compactOpen
        },
        toggleDropdown() { 
            this.dropdownOpen = !this.dropdownOpen
        },

        // Make the dropdown menu
        //! This will not be used yet!!
        createDropdown() {  
            for (let i = 0;  i < this.shop_items.length; i++) { 
                this.dropdown_items.push(this.shop_items[i])
                console.log('dropdown items:', dropdown_items)
            }
        }, 


        // Cart Functions: 
        cart_add(name, price) { 
            this.cart_add_item = { 
                cart_name: name, 
                cart_price: price
            } 
            this.item_counter++; // Increment the item counter

            // Add the item to the cart items array: 
            this.cart_items.push(this.cart_add_item)
            console.log('Item added to cart:',this.cart_add_item)
            console.log('Cart Contents:', this.cart_items)

            // Increment the cart Price: 
            this.cart_total = this.cart_total + this.cart_add_item.cart_price
            console.log('The cart running total is:',this.cart_total)
            
        }, 
        toggle_cart_window() { 
            this.cart_open = !this.cart_open
            console.log('Toggle cart', this.cart_open)
        },

        toggle_checkout() { 
            console.log('Opening Checkout')
            this.checkout_open = !this.checkout_open
        },
        
        submit_checkout() { 
            console.log('Checkout Submitted', this.PaymentInfo, 'Items Checked Out:',this.cart_items)
            console.log('Length of card num =',this.PaymentInfo.CardNum.length)
            console.log('Length of CVC =', this.PaymentInfo.CardCvc.length)
            // Check if the data entered in the checkout is correct: 
            
            if (this.PaymentInfo.CardNum.length > 19 || this.PaymentInfo.CardNum.length < 19) {
                alert('The Card Number is to short! Please Try again')
                return
        }   
            if (this.PaymentInfo.CardCvc.length > 3 || this.PaymentInfo.CardCvc.length < 3) { 
                alert('The CVC is to short! Please Try again')
                return
            }
        alert('Dead End Reached.. The Application goes no further than this')
    }, 
    mounted() { 
        this.vue_onload()
    }
}});




app.mount('#app');


},100)


