// const wrapper = document.querySelector('.wrapper');
// const toggler = document.querySelectorAll('.toggler');
// const d = document;

// wrapper.addEventListener('click', e => {
//     let parent = e.target.parentElement.parentElement;
//     if(parent.classList.contains('b1')){
//         const b = d.querySelector('.b1');
//         b.classList.toggle('open');
//     } 
//     else if(parent.classList.contains('b2')){
//         const b = d.querySelector('.b2');
//         b.classList.toggle('open');
//     }
//     else if(parent.classList.contains('b3')){
//         const b = d.querySelector('.b3');
//         b.classList.toggle('open');
//     }
//     else if(parent.classList.contains('b4')){
//         const b = d.querySelector('.b4');
//         b.classList.toggle('open');
//     }
//     else if(parent.classList.contains('b5')){
//         const b = d.querySelector('.b5');
//         b.classList.toggle('open');
//     }
// })

// wrapper.addEventListener('click', e => {
//     if(e.target.classList.contains('toggler')){
//         e.target.classList.toggle('open');
//     }
// })

// faq section
function toggleAccordion() {
    const faqWrapper = document.querySelector('.faq-wrapper');

    faqWrapper.addEventListener('click', function(e){
        const parent = e.target.parentElement.parentElement;
        if(e.target.classList.contains('faq-toggler')){
            parent.classList.toggle('open');
        }
    })
}

toggleAccordion();