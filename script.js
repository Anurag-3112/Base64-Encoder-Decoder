function encode() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");

    try {
        output.value = btoa(input);
    } catch (e) {
        output.value = "Invalid input";
    }
}

function decode() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");

    try {
        output.value = atob(input);
    } catch (e) {
        output.value = "Invalid Base64";
    }
}
