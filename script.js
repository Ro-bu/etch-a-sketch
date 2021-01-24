
// Main function for creating grids
function createGrid(x){
    let numberOfDivs = x*x;
    let divSize = 100/x;
    let divSizeCssFriendly = divSize + "%";
    for(let i = 0;i<numberOfDivs;i++){
        let divToAdd = document.createElement("div");
        divToAdd.style.width = divSizeCssFriendly;
        divToAdd.style.height = divSizeCssFriendly;
        divToAdd.addEventListener("mouseenter",colorChanger);
        document.getElementById("playArea").appendChild(divToAdd);
    }
}
// RESET THE GRID ELEMENTS
function gridReset(){
    let playArea = document.querySelector("#playArea");
    while(playArea.lastChild){
        playArea.removeChild(playArea.lastChild)
    }
}

// CREATE RANDOM COLOR
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
// EVENT FOR CHANGING THE GRID COLOR
  function colorChanger(){
      event.target.style.backgroundColor = getRandomColor();
  }
// GAME BUTTON PRESS FUNCTION
// CLEARS GRID AND STARTS THE GAME
function gameStart(){
    gridReset();
    let newGridSize = document.querySelector("#gridSize").value;
    newGridSize = parseInt(newGridSize);
    console.log(Number.isInteger(newGridSize));
    // if is correct int, clear error text
    if(Number.isInteger(newGridSize) && newGridSize>0 && newGridSize<100){
      document.querySelector("#errorText").textContent = "";
    }
    // check if number
    if(Number.isInteger(newGridSize) == false){
      document.querySelector("#errorText").textContent = "Please enter an integer";
      newGridSize = 1;
    }
    // // check number size
    if(newGridSize<0 || newGridSize>99){
      document.querySelector("#errorText").textContent = "Please enter an integer between 0 and 100";
      newGridSize = 1;
    }
    document.querySelector("#gridSize").value= "";
    createGrid(newGridSize);

}
// TRIGGER BUTTON CLICK ON ENTER PRESS
document.querySelector("#gridSize").addEventListener("keyup",function(event){
  if (event.keyCode ==13){
    document.querySelector("#startButton").click();
  }
})
// ENTER 1 GRID ON PAGE LOAD
  createGrid(1);