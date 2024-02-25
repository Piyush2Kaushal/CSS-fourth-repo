let box = document.querySelectorAll(".box");
let h3 = document.getElementById("h3");
let box1 = document.querySelector(".box_1");
let newgame = document.getElementById("new_game");
let reset = document.getElementById("reset");

let turn = true;

let winning_pattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
reset.addEventListener("click", () => {
    box.forEach((ee) => {
        ee.innerHTML = "";
        ee.disabled = false;
    });
    box1.classList.add("hide");
    newgame.classList.add("hide");
});
newgame.addEventListener("click", () => {
    box.forEach((ee) => {
        ee.innerHTML = "";
        ee.disabled = false;
    });
    turn = true;
    box1.classList.add("hide");
    newgame.classList.add("hide");
});

box.forEach((boxx) => {
    boxx.addEventListener("click", () => {
        if (turn) {
            boxx.innerHTML = 'O';
            turn = false;
        }
        else {
            boxx.innerHTML = "X";
            turn = true;
        }
        boxx.disabled = true;

        checkwinner();
    })
});
function Showwinner(winner) {
    h3.innerText = `winner is : ${winner}`;
    box1.classList.remove("hide");
    newgame.classList.remove("hide");
    box.forEach((e) => {
        e.disabled = true;
    });
}

function checkwinner() {
    for (const pattern of winning_pattern) {
        let p1 = box[pattern[0]].innerHTML;
        let p2 = box[pattern[1]].innerHTML;
        let p3 = box[pattern[2]].innerHTML;

        if (p1 !== "" && p2 !== "" && p3 !== "") {
            if (p1 === p2 && p2 === p3) {
                Showwinner(p1);
            }
        };
    }
}
