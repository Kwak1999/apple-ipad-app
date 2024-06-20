const basketStarterEl = document.querySelector('header .basket-starter');
const basketEl = document.querySelector('.basket');

basketStarterEl.addEventListener('click', function (event){
    event.stopPropagation() // 전파중지
    if(basketEl.classList.contains('show')){  // false & true
        //hide
        hideBasket()
    } else{
        // show
        showBasket()
    }
})
basketEl.addEventListener('click', function (event){
    event.stopPropagation()
})
window.addEventListener('click', function (){
    hideBasket()
})

function showBasket(){
    basketEl.classList.add('show')
}
function hideBasket(){
    basketEl.classList.remove('show')
}