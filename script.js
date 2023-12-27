let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let msg = document.querySelector(".msg");
let msgcontainer = document.querySelector(".msg-container")

let turnO = true;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
let disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
let enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = ""
    }
}
const resetgame = () => {
    turnO = false;
    enableboxes();
    msgcontainer.classList.add("hide")
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations, ${winner} WON`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {
            box.innerText = "X"
            turnO = false;
        } else {
            box.innerText = "O"
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    for (pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val == pos2val && pos2val == pos3val) {
                console.log("winner", pos1val);
                showWinner(pos1val)
            }
        }
    }
};

reset.addEventListener("click", resetgame)