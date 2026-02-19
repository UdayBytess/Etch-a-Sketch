function makeGrid(size){
    const container = document.querySelector(".container");
    for(let i = 0; i < size; i++){
        const column = document.createElement("div");
        column.classList.add("column");

        for(let j = 0; j < size; j++){
            const row = document.createElement("div");
            row.classList.add("row");
            row.style.border = "2px solid black";
            row.style.width = "75px";
            row.style.height = "75px";
            row.style.backgroundColor = "blue";
            column.appendChild(row);
        }
        container.appendChild(column);
    }
}

const size = Number(prompt("Enter the size of the grid..."));
makeGrid(size);