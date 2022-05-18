let btns = document.getElementsByClassName("btnClick");
let count = 0;
console.log(btns);

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {

        let gift = document.getElementById(btns[i].dataset.id);
        gift.style.filter = "none";
        count++;
        this.style.visibility = "hidden";
        if (count >= 2) {
            for (let index = 0; index < btns.length; index++) {
                btns[index].style.visibility = "hidden";

            }
        }
    })
}

// btns.forEach(btn => {
//     btn.addEventListener("click", function() {
//         let gift = document.getElementById(btnClick.dataset.id);
//         gift.style.filter = "none";
//         count++;
//         // this.style.visibility = "hidden";
//         // if (count >= 2) {
//         //     btns.foreach(button => button.style.visibility = "hidden")
//         // }
//     })

// });