const GRIDSIDE = 600;
let rows = 16;
let cols = 16;
let clr="blue"
let click=false;


const sketchArea = document.querySelector("#sketch-area");

const body=document.querySelector("body")
body.addEventListener("click", function (e) {
    if (e.target.tagName !="BUTTON") {  //checks whether the pressed key is "Enter"
        click=!click;
    }
});


sketchArea.style.width = `${GRIDSIDE}px`;
sketchArea.style.height = `${GRIDSIDE}px`;

function createGridCells() {
    for (let i = 0; i < (rows * cols); i++) {
        const gridCell = document.createElement("div");

        gridCell.style.width = `${(GRIDSIDE / cols) - 2}px`;
        gridCell.style.height = `${(GRIDSIDE / rows) - 2}px`;
        gridCell.classList.add("cell");

        sketchArea.appendChild(gridCell);
  
        function addHovermouse() {
            gridCell.addEventListener("mouseover", (event) => {
                if (click){
                    event.target.style.backgroundColor =clr;
                }
            })
        }
        addHovermouse()
    }
    function changeColor(){
        clr=prompt("Type the color you need")
        /*gridCell.addEventListener("mouseover", (event) => {
                
            event.target.style.backgroundColor =clr;
        })*/
        addHovermouse()
    
    }
    colorButton.addEventListener("click",changeColor);
    
    body.addEventListener("keydown",toggler(e))


}
const gridButton=document.querySelector("#gridButton");
function change(){
    let changer=0
    do{
        changer=prompt("How many square do you want per line?");
    }
    while(changer>150);
    rows=changer;
    cols=changer;
    document.querySelectorAll('.cell').forEach(e => e.remove());
    createGridCells()

}
const colorButton=document.querySelector('#colorButton')

gridButton.addEventListener("click",change)


createGridCells();

