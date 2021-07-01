function removeBtn() {
    document.getElementById("first-btn").innerHTML = "Join";
    document.getElementById("first-btn").remove();
    
}

document.getElementById("dessert-choice").onchange = function() {
    alert ("You are searching for " + this.value);
}

let count = 0

function incrementLikes() {
    count += 1
    countEl.innerText = count
}

let countEl = document.getElementById("orange-tart-likes")

console.log(countEl)

