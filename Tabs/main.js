// setup
const db = document.querySelector('.db');
const b = document.querySelector('.b');
const lb = document.querySelector('.lb');

const tabsArr = [db,b,lb];

// remove open class from all tabs
function removeOpen(){
    tabsArr.forEach(tab => {
        tab.classList.remove('open');
    })
}

// click event
const tabsMenu = document.querySelector('.tab-nav');

tabsMenu.addEventListener('click', e => {
    if(e.target.classList.contains('dark-blue')){
        removeOpen();
        db.classList.add('open');

    } else if(e.target.classList.contains('blue')){
        removeOpen();
        b.classList.add('open');
    } else if(e.target.classList.contains('light-blue')){
        removeOpen();
        lb.classList.add('open');
    }
})

