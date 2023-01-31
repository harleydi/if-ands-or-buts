let prompt = require('prompt-sync')({sigint: true})

let pincode = 2801

let attempt = Number(prompt('Please enter the passcode: '))

if (attempt === pincode) {
    return 'You may enter'
} else {
    return 'Please try again'
}