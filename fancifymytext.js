// Alert test
function helloWorld() {
    alert("Hello, world!");
}

// Make text bigger
function makeTextBigger() {
    document.getElementById("textInput").style.fontSize = "24pt";
}

// Apply fancy styles
function applyStyles() {
    let textArea = document.getElementById("textInput");
    if (document.getElementById("fancyShmancy").checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

// Convert text to uppercase and add "-Moo" to last word of each sentence
function mooifyText() {
    let textArea = document.getElementById("textInput");
    let text = textArea.value.toUpperCase();

    let sentences = text.split(".");
    text = sentences.map(sentence => {
        let words = sentence.trim().split(" ");
        if (words.length > 0) {
            words[words.length - 1] += "-Moo";
        }
        return words.join(" ");
    }).join(". ");

    textArea.value = text;
}

// Add event listeners
window.onload = function () {
    document.getElementById("biggerButton").onclick = makeTextBigger;
    document.getElementById("fancyShmancy").onchange = applyStyles;
    document.getElementById("boringBetty").onchange = applyStyles;
    document.getElementById("mooButton").onclick = mooifyText;
};
