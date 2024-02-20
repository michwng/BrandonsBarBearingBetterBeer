// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var progressCounter = 0;
const bgm = new Audio();
bgm.src = "./GSounds/susi.mp3";
bgm.load();
bgm.play();

/**
 * testClick is a debug method used to test clicking functionality.
 * It's not needed in the actual code.
 */
function testClick() {
    progressCounter++;
    console.log("Incremented progressCounter by 1. It's now: " + progressCounter);
    alert("Ey, you pressed za button");
}

/**
 * The main trigger method.
 */
function incrementCounter() {
    updateTextBoxes();
    progressCounter++;
}

/**
 * The meat of the Visual Novel.
 * The incrementCounter will call upon this method everytime the gamebox is clicked.
 * This method's sole purpose is to update the dialogue box and character name box
 * based on the value of progressCounter.
 */
function updateTextBoxes() {
    switch (progressCounter)
    {
        case 0:
            document.getElementById("CharacterNameBox").innerHTML = "???";
            document.getElementById("DialogueBox").innerHTML = "Wassup";
            break;
        case 1:
            document.getElementById("CharacterNameBox").innerHTML = "Second Test";
            document.getElementById("DialogueBox").innerHTML = "DUSHFLUISDFn";
            break;
        case 2:
            document.getElementById("CharacterNameBox").innerHTML = "SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS";
            document.getElementById("DialogueBox").innerHTML = "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF";
            break;
        default:
            document.getElementById("CharacterNameBox").innerHTML = "???";
            document.getElementById("DialogueBox").innerHTML = "You've reached the end of the story. \nThanks for Playing!";
            break;

    }

}