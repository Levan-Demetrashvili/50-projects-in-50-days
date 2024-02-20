'use strict'
const glassesCont = document.querySelector('.glasses') 
const glasses = document.querySelectorAll('.glass') 

const remainedCont = document.querySelector('.remained')
const litersEl = document.querySelector('.liters')
const percentageEl = document.querySelector('.percentage')

let filledGlasses;

glassesCont.addEventListener('click',function (e) {
    if (!e.target.classList.contains('glass')) return 

    //* Fill Small Cup
    const glass = e.target
   
    if (filledGlasses?.length == +glass.dataset.num + 1) glass.classList.remove('filled')
    else glass.classList.add('filled')
   
    glasses.forEach((g,i) => {
        if (glass.dataset.num > i ) g.classList.add('filled')
        else if (i !== +glass.dataset.num)  g.classList.remove('filled')
})

 filledGlasses = document.querySelectorAll('.filled')

// TODO: Fill big cup

    percentageEl.style.height = percentageEl.textContent = filledGlasses.length !== 0 ? `${filledGlasses.length * 12.5}%` : ''  
    if (filledGlasses.length === glasses.length) remainedCont.style.height = '0'
    else litersEl.textContent = `${2 - (0.25 * filledGlasses.length)}L`

})