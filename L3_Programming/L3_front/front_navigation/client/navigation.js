const app = Vue.CreateApp({ 
    data() { 
        return { 
            ShowNav: true, // Show the nav bar?
            leftItems: [ 
                {name: 'Left Item 1', url: 'https://url.com'}
            ]
        }
    }
}) 

app.mount('#top_nav')