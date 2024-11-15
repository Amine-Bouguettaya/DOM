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

const box = document.createElement("div"); //add new html tag (div) stock new div in a variable to modify it in the future
box.classList.add("box"); //add css class 
const board = document.querySelector("#board"); //add parent div with board id to variable board

for (let i = 1; i <= 10; i++) { //loop that add 10 clones on the box
    let newBox = box.cloneNode(); //clone the box to a new variable
    newBox.innerText = i; //add text inside the box
    board.appendChild(newBox); //add the new cloned box to the board
    newBox.addEventListener("click", function (){
        console.log("Boite n."+ i +", click !")
    })
}

shuffleChildren(board); // call to the function that shuffle the board