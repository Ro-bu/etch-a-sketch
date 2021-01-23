
// Main function for creating grids
function createGrid(x){
    let numberOfDivs = x*x;
    let divToAdd = document.createElement("div");
    for(let i = numberOfDivs;i=0;i--){
        document.getElementById("playArea").appendChild(divToAdd);
    }
}