const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');


const b = document.querySelector('b');
const a = document.querySelector('a');



const openModal = function () {
    console.log('button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};


for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


// If we want to use same function in multiple adEventListener,
// we can simply create a separate function and store it in a variable.
// after that we will pass that function as an arugement to the addEventListener parameter.

//add and remove classList helps very much to manipulate multiple css function without creating multiple css class.


/////////keyboard events//////

document.addEventListener('keydown', function (e) {
    console.log(e.key);

    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
})