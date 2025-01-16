function init() {
    const path = document.URL;
    const page = path.split("/").pop();
    var stage_details = document.getElementById("stage-L3-details");
    if (page.match("career.html#stage-L3")) {
        stage_details.open = true;
    }
}

window.onload = init;
