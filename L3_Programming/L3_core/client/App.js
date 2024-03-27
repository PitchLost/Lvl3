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
            CartClass: { 
                cart_name: '',
                cart_qty: 1,
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
            }, 
            runLoop: false
        

        };
    },
    methods: { // Methods are the vue.js functions
        // Define your methods here

        vue_onload() { 
            console.log('vue onload function')
            this.dropdownItems = this.dropdownItems.sort((a,b) => a.ITEM_NAME.localeCompare(b.ITEM_NAME))
            runLoop = true
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
            let time = new Date()
            console.log('Compact mode opened', time)
            this.compactOpen = !this.compactOpen
        },
        toggleDropdown() { 
            let time = new Date()
            console.log('Dropdown opened',time)
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

            //TODO: Update the logic on the following code:
            
            this.CartClass = { 
                cart_name: name, 
                cart_qty: 1,
                cart_price: price * this.CartClass.cart_qty, 
                cart_new_price: 0
            } 
            alert('You haved added 1x' + ' ' + this.CartClass.cart_name + ' ' + 'priced at' + ' ' + '$' + this.CartClass.cart_price + ' ' + 'to your cart')
            this.item_counter++; // Increment the item counter

            // Add the item to the cart items array: 
            this.cart_items.push(this.CartClass) // Push the new item into the main cart array
            console.log('Item added to cart:',this.CartClass) //* Log 
            console.log('Cart Contents:', this.cart_items) //* Log

            // Increment the cart Price: 
            this.cart_total = this.cart_total + this.CartClass.cart_price // Calculate a grand total 
            console.log('The cart running total is:',this.cart_total) //* Log
            
        }, 
        removeFromCart() { 
            this.cart_items.splice(this.CartClass) // Remove the target item from the main cart array. Doing this will remove it automatically thanks to vue
            console.log('Removed the following item from cart:', this.CartClass) //* Log
        },
        updateQty() { 
            console.log('Update cart qty') //* Log
            this.CartClass.cart_new_price = this.CartClass.cart_price * this.CartClass.cart_qty // Multiply the item price with the qty
            if (this.CartClass.cart_qty == 0 ) { // Check if the item qty is 0 If so then remove from cart
                this.removeFromCart(this.CartClass) // Call the remove from cart function passing the element we want to remove with the function
            }
            console.log('The updated price = ', this.CartClass.cart_price, this.CartClass.cart_new_price, this.CartClass.cart_qty) //* Log
        },
        toggle_cart_window() { 
            let time = new Date()
            this.cart_open = !this.cart_open
            console.log('Toggle cart', this.cart_open, time)
        },

        toggle_checkout() { 
            let time = new Date()
            console.log('Opening Checkout', time)
            this.checkout_open = !this.checkout_open
        },
        
        submit_checkout() { 
            let time = new Date()
            console.log('Checkout Submitted', this.PaymentInfo, 'Items Checked Out:',this.cart_items, time )
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
        alert('Checking Card info...')
    }, 
    mounted() { 
        this.vue_onload()
    }
}});




app.mount('#app');


},100)


