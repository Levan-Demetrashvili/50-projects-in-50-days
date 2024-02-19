'use strict';
const countersEl = document.querySelectorAll('.counter')

countersEl.forEach(counter => {
   

    const updateCounter = () => {
        const c = +counter.textContent

        const increment = +counter.dataset.target / 200
        counter.textContent = `${Math.ceil(c + increment)}`

        if (c < +counter.dataset.target) setTimeout(updateCounter, 1)
         else counter.textContent = +counter.dataset.target
        
    }

    updateCounter()
})