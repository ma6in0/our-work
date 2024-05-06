

// const free = document.querySelectorAll(".freemium")


// free.forEach((li, index) => {
//     li.addEventListener("click", () => {
//         free.forEach((li, i) => {
//             if(index === i) {
//                 li.classList.add("active")
//             } else{
//                 li.classList.remove("active")
//             }
//         })
//     })
// })





const freeItems = document.querySelectorAll(".freemium");

freeItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        freeItems.forEach((el, i) => {
            if (index === i) {
                el.classList.add("active");
            } else {
                el.classList.remove("active");
            }
        });
    });
});
