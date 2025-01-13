const lang = navigator.language;
const path = window.location.pathname;
const page = path.split("/").pop();
if (lang.startsWith("fr")) {
    window.location.replace("fr/" + page);
} else {
    window.location.replace("en/" + page);
}