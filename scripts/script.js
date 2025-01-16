
function details_opener(path) {
    const id = path.split("#").pop();
    var details = document.getElementById(id + "-details");
    if (details) { 
        details.open = true;
    }
}

function init() {
    const path = document.URL;
    details_opener(path);
}

window.onload = init;
