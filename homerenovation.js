function addPaintAndSupplies(totalCost, callback) {
    let cost = prompt("Enter the cost for the paint and supplies");
    cost = parseFloat(cost);
    if (cost > 100)
        cost *= 1.1;

    let paintArea = document.querySelector(".paint");
    paintArea.innerHTML = 'Paint $ '+ cost.toFixed(2);

    callback(totalCost + cost);

    return (totalCost + cost);
}

function addFurnitures(totalCost, callback) {
    let cost = prompt("Enter the cost of the Furnitures");
    cost = parseFloat(cost);
    if (cost < 500)
        cost -= cost * 0.10;

    let furnitureArea = document.querySelector(".furniture");
    furnitureArea.innerHTML = 'Furniture $ ' + cost.toFixed(2);
    callback(totalCost + cost);
    return (totalCost + cost);
}

function addFloorCoverings(totalCost, callback) {
    let cost = prompt("Enter the cost of the Floor Coverings");
    cost = parseFloat(cost);
    if (cost < 500)
        cost -= cost * 0.15;

    let floorArea = document.querySelector(".floorCoverings");
    floorArea.innerHTML = 'Floor Coverings $ ' + cost.toFixed(2);

    callback(totalCost + cost);

    return (totalCost + cost);
}

const updateTotals = (cost) => {
    let totalsArea = document.querySelector(".totalCost");
    totalsArea.innerHTML = 'Total $ ' + cost.toFixed(2);
}

let totalCost = 0;

    totalCost = addPaintAndSupplies(totalCost, updateTotals);
function timeToFurnitures() {
    totalCost = addFurnitures(totalCost, updateTotals);
    setTimeout(timeToFloor, 1000);
}
setTimeout(timeToFurnitures, 1000);
function timeToFloor() {
    totalCost = addFloorCoverings(totalCost, updateTotals);
}
