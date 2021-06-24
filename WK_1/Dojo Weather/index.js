function weatherAlert(){
    alert("Loading weather report...");
}

// document.getElementById("pet-choice") .onchange = function() {
//     alert (this.value);
// }

document.getElementById("deleteBtn").addEventListener("click", function()){

    let policy = document.getElementById("cookie-policy");
    if (policy.style.display==none) {
        policy.style.display="block";
    } else {
        policy.style.display="none";
    }

}
