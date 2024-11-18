function shuffleChildren(parent) {
    let children = parent.children; //make it easier to acces children of parent
    let i = children.length, k, temp; // declaration of the variable we need for the function
    while(--i > 0) {
        k = Math.floor(Math.random() * (i+1)); //generate a random number from the number of boxes inside the board
        temp = board.children[k]; // copy temporarily the random children to a temp var
        board.children[k] = board.children[i]; // replace the ramdom by the i board
        board.appendChild(temp); // add the random box to the board
    }
}

function showReaction(type, clickedBox) { 
    clickedBox.classList.add(type);
    if (type !== "success") {
        setTimeout(function() {
            clickedBox.classList.remove(type);
        }, 800)
    }
}

const box = document.createElement("div"); //add new html tag (div) stock new div in a variable to modify it in the future
box.classList.add("box"); //add css class 
const board = document.querySelector("#board"); //add parent div with board id to variable board

let nb = 1;

for (let i = 1; i <= 10; i++) { //loop that add 10 clones on the box
    let newBox = box.cloneNode(); //clone the box to a new variable
    newBox.innerText = i; //add text inside the box
    board.appendChild(newBox); //add the new cloned box to the board
    newBox.addEventListener("click", function (){ //event listener of click
        console.log("Boite n."+ i +", click !") // message in console
        if (i == nb) { //check if good box (it is)
            newBox.classList.add("box-clicked"); // add new class to the div to modify its color
            if (nb == board.children.length){
                board.querySelectorAll(".box").forEach(function(box) {
                    showReaction("success", box);
                })
            }
            nb++;
        }
        else if (i > nb) { // check if wrong box 
            showReaction("error", newBox);
            nb = 1;
            board.querySelectorAll(".box-clicked").forEach(function(validBox){ // reset box color
                validBox.classList.remove("box-clicked");
            })
        }
        else { // case if the box has already been clicked because all other case have been manage
            showReaction("notice", newBox);
        }
    })
}

shuffleChildren(board); // call to the function that shuffle the board