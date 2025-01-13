const lang = navigator.language;
if (lang.startsWith("fr")) {
    window.location.replace("fr/index.html");
} else {
    window.location.replace("en/index.html");
}