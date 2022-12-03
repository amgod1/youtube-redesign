const left_1 = document.getElementById('left_1')
const right_1 = document.getElementById('right_1')
const left_2 = document.getElementById('left_2')
const right_2 = document.getElementById('right_2')
const left_3 = document.getElementById('left_3')
const right_3 = document.getElementById('right_3')

const slider_1 = document.getElementById('slider_1')
const slider_2 = document.getElementById('slider_2')
const slider_3 = document.getElementById('slider_3')


left_1.onclick = () => slider_1.classList.remove('swipe')
right_1.onclick = () => slider_1.classList.add('swipe')

const sliderSecondRemove = () => {
    if (window.screen.width >= 1083) { slider_2.classList.remove('swipe-giant-end'); return }
    (slider_2.classList.contains('swipe-giant-end'))
        ? slider_2.classList.remove('swipe-giant-end')
        : slider_2.classList.remove('swipe-giant-center')
}

const sliderSecondAdd = () => {
    if (window.screen.width >= 1083) { slider_2.classList.add('swipe-giant-end'); return }
    (slider_2.classList.contains('swipe-giant-center'))
        ? slider_2.classList.add('swipe-giant-end')
        : slider_2.classList.add('swipe-giant-center')
}

left_2.onclick = () => sliderSecondRemove()
right_2.onclick = () => sliderSecondAdd()

left_3.onclick = () => slider_3.classList.remove('swipe')
right_3.onclick = () => slider_3.classList.add('swipe')
