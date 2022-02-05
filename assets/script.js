//Click the plus and minus buttons
//The plus button increases the quantity by 1
//The minus button decreases the quantity by 1
//The quantity cannot drop below 0
//The quantity number is updated and displayed when clicking the plus or minus buttons

let minus = document.querySelector('#quantity-down')
let plus = document.querySelector('#quantity-up')
let num = 1
let quant = document.querySelector('.total-quantity')

plus.addEventListener('click', function(){
    num++
    console.log('plus button worked')
    console.log(num)
    quant.textContent = `Quantity: ${num}`
})

minus.addEventListener('click', function(){
    if (num <= 0) {
        num = 0
    } else {
        num--
        console.log('minus button worked')
        quant.textContent = `Quantity: ${num}`
    }
})

//minus.addEventListener('click', function(){
//    if (num > 0) {
//        num--
//        console.log('minus button worked')
//        quant.textContent = `Quantity: ${num}`
//    }
//})