var last = document.querySelectorAll('.hidden')

var myOb = new IntersectionObserver ( (teste) => {
    teste.forEach( (teste) => {
        if(teste.isIntersecting){
            teste.target.classList.add('show')
        } else {
            teste.target.classList.remove('show')
        }
    })
})


last.forEach( (last) => myOb.observe(last))