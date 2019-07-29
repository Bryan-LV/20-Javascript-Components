function toggleModal() {
    const modal = document.querySelector('.modal');
    // click btn
    const btn = document.querySelector('.btn');

    btn.addEventListener('click', function(){
        // toggle open class to modal
        modal.classList.toggle('open');
        console.log('toggle function envoked');
    })
}

function closeModal() {
    const modal = document.querySelector('.modal');
    // click btn to close modal
    const modalbtn = document.querySelector('.modal-close');

    modalbtn.addEventListener('click',function(){
        modal.classList.remove('open');
        console.log('modal btn clicked');
    })
}

toggleModal();
closeModal();