const container = document.querySelector(".container")
const resizeBtn = document.querySelector(".resizeBtn")

function createGrid(size){
    container.innerHTML = "";

    const squareSize = 960/size;

    for (i=0;i<size*size;i++){
        const square = document.createElement("div");
        square.classList.add("square");

        square.style.width = `${squareSize}px`
        square.style.width = `${squareSize}px`

        square.addEventListener("mouseenter", ()=>{
            square.style.backgroundColor = "red";
        });
        container.appendChild(square)
    }
}

resizeBtn.addEventListener("click", ()=>{
    let newSize = prompt("enter squares per side");

    if (newSize === null) return;

    newSize = Number(newSize);

    if (newSize >0 && newSize<=100){
        createGrid(newSize);
    }else{
        alert("only between 1 to 100")
    }
});

createGrid(16);

