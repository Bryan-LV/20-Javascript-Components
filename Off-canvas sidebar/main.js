function toggleAside() {
    const aside = document.querySelector('.aside');
    const hamNav = document.querySelector('.ham-icons');
    const mainWrapper = document.querySelector('main');
    const wrapper = document.querySelector('.wrapper');

    hamNav.addEventListener('click', e => {
        if(window.matchMedia("(max-width:769px")){
            mainWrapper.classList.toggle('zeroWidth');
            wrapper.classList.toggle('zeroWidth')
        }

        aside.classList.toggle('open');
    })

}

function toggleBC() {
    const body = document.querySelector('body');
    const mediaquery = window.matchMedia('(min-width:769px');

    if(mediaquery.matches){
        body.classList.add('blue')
    }

}

toggleBC();
toggleAside();