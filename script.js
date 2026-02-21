const gridSpace=960;

const body = document.querySelector("body");
const container = document.querySelector(".container");
body.appendChild(container);

const btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
    let numberofsquare = parseInt(prompt("Number of Square Per Side For The Grid"))
    if(numberofsquare > 100){
        alert("limit exceeded please specify number between 0 to 100")
    }
    else if(numberofsquare < 0){
        alert('please give a positive number betweeen 0 and 100')
    }else{
        container.innerHTML = "";
        createGrid(numberofsquare);
    }
})

function createGrid(size){
    
    const squareSize = gridSpace / size;
    
    for(let i=0; i < size*size;i++){
        const grid = document.createElement("div");
        grid.style.width = `${squareSize}px`;
        grid.style.height = `${squareSize}px`;
    
        grid.classList.add("grid-item");
        container.appendChild(grid);

        grid.addEventListener("mousemove", () =>{
            let r=Math.floor(Math.random()*256);
            let g=Math.floor(Math.random()*256);
            let b=Math.floor(Math.random()*256);
            grid.style.backgroundColor=`rgb(${r},${g},${b})`;
        })
}}

createGrid(16)