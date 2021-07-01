var clicked = false;

function toggle() {
    if(!clicked) {
        clicked = true;
        document.getElementById("loginBtn").innerHTML = "Login";
    }else{
        clicked = false;
        document.getElementById("loginBtn").innerHTML = "Logout";
    }
}

function likesBtn() {
    alert("Ninja was liked");
}

function removeBtn() {
    document.getElementById("defBtn").innerHTML = "Join";
    document.getElementById("defBtn").remove();
    
}

