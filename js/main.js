// 장바구니
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

// 헤더 검색!
// 헤더 검색 관련 요소 찾기.
const headerEl = document.querySelector('header')
const headerMenuEls = [...headerEl.querySelectorAll('ul.menu > li')]
const searchWrapEl = headerEl.querySelector('.search-wrap')
const searchStarterEl = headerEl.querySelector('.search-starter')
const searchCloserEl = searchWrapEl.querySelector('.search-closer')
const searchShadowEl = searchWrapEl.querySelector('.shadow')
const searchInputEl = searchWrapEl.querySelector('input')
const searchDelayEls = [...searchWrapEl.querySelectorAll('li')]
// const duration = .4 // 초(seconds) 단위, 시간을 변수에 저장해서 사용하면 쉽게 관리 용이

searchStarterEl.addEventListener('click', showSearch)
searchCloserEl.addEventListener('click', hideSearch)
searchShadowEl.addEventListener('click', hideSearch)

function showSearch(){
    headerEl.classList.add('searching')
    document.documentElement.classList.add('fixed')
    headerMenuEls.reverse().forEach(function (el, index){
        el.style.transitionDelay = index * .4 / headerMenuEls.length + 's'
    })
    searchDelayEls.forEach(function (el, index){
        el.style.transitionDelay = index * .4 / searchDelayEls.length + 's'
    })
    setTimeout(function (){
        searchInputEl.focus()
    }, 600)
}
function hideSearch(){
    headerEl.classList.remove('searching')
    document.documentElement.classList.remove('fixed')
    headerMenuEls.reverse().forEach(function (el, index){
        el.style.transitionDelay = index * .4 / headerMenuEls.length + 's'
    })
    searchDelayEls.reverse().forEach(function (el, index){
        el.style.transitionDelay = index * .4 / searchDelayEls.length + 's'
    })
    searchDelayEls.reverse()
    searchInputEl.value = ''
}

// 요소의 가시성 관찰
const io = new IntersectionObserver(function (entries){
    entries.forEach(function (entry){
        if(!entry.isIntersecting){
            return
        }
        entry.target.classList.add('show')
    })
})

const infoEls = document.querySelectorAll('.info')
infoEls.forEach(function (el){
    io.observe(el)
})

// 비디오 재생!
const video = document.querySelector('.stage video')
const playBtn = document.querySelector('.stage .controller--play')
const pauseBtn = document.querySelector('.stage .controller--pause')

playBtn.addEventListener('click', function (){
    video.play()
    playBtn.classList.add('hide')
    pauseBtn.classList.remove('hide')
})
pauseBtn.addEventListener('click', function (){
    video.pause()
    playBtn.classList.remove('hide')
    pauseBtn.classList.add('hide')
})