//! The following will need to be changed to constant variables:

let users_storage; //TODO: Add the logic for this
let users_account; // TODO: Check browser storage or database for user account
let session_length = 0


document.addEventListener('DOMContentLoaded', _ => { 
console.log('core.js executing')

//Increment the session duration timer:
setInterval(_ => { 
    session_length++
},1000)

})