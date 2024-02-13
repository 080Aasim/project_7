const accordion = document.querySelectorAll(".accordion");
const imageUrl = 'assets/images/icon-plus.svg'
accordion.forEach(accordion => {
    const answer = accordion.querySelector(".answer");
    const minus = accordion.querySelector(".minus");
    const plus = accordion.querySelector(".plus")

    accordion.addEventListener('click',()=>{
        answer.classList.toggle('active');
        answer.classList.toggle('pad');
        minus.classList.toggle('op-0');
        plus.classList.toggle('op-1');

    })
});