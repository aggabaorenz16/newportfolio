// const card1 = document.querySelector("#card1");
// const card2 = document.querySelector("#card2");
// const card3 = document.querySelector("#card3");
// const nextpage = document.querySelector("#next");
// const prevpage = document.querySelector("#prev");

// const next = () => {
//     if(nextpage.clicked = true) {
//         card1.style.display = 'none'
//         card2.style.display = 'block'
//     }
// }
// const prev = () => {
//     if(prevpage.clicked = true) {
//         card1.style.display = 'block'
//         card2.style.display = 'none'
//     }
// }

const icon = document.querySelector("#navbar");

icon.addEventListener('click', () => {
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars')
        icon.classList.add('fa-close')
        alert("Don't use Mobile")
    } else {
        icon.classList.add('fa-bars')
        alert("Use Desktop")
        icon.classList.remove('fa-close')
    }
})
