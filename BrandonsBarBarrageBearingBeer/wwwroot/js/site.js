// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.
/*
 * -------------------------------------------------------------------
 * File name: site.js
 * Project name: Brandon's Bar Barrage Bearing Beer Project (B5 Project).
 * -------------------------------------------------------------------
 * Author's name and email:	Michael Ng, mwnmwn07@gmail.com			
 * A personal project for ETSU ACM Game Jam Spring 2023.
 * Creation Date: 2/18/2024
 * Last Modified: 2/20/2024
 * Description:   This javascript file provides full game functionality through the website.
 * No tutorial was used.
 * Version: V0.2 Tech Demo
 * -------------------------------------------------------------------
 */

/*=============================*/
/* -------- VARIABLES -------- */
/*=============================*/
var progressCounter = 0;
var backgroundImage = document.getElementById("GBackground");
var leftPicture = document.getElementById("LeftPicture");
var rightPicture = document.getElementById("RightPicture");
var characterNameBox = document.getElementById("CharacterNameBox");
var dialogueBox = document.getElementById("DialogueBox");


const bgm = new Audio();
bgm.src = "./GSounds/susi.mp3";
bgm.load();
bgm.play();

/*=============================*/
/* ----- (END) VARIABLES ----- */
/*=============================*/


/**
 * testClick is a debug method used to test clicking functionality.
 * It's not needed in the actual code.
 
function testClick() {
    progressCounter++;
    console.log("Incremented progressCounter by 1. It's now: " + progressCounter);
    alert("Ey, you pressed za button");
}*/


/*=============================*/
/* -------  TRIGGERS  -------  */
/*=============================*/
/**
 * The main trigger method.
 */
function incrementCounter() {
    updateTextBoxes();
    progressCounter++;
}
/*=============================*/
/* ----- (END) TRIGGERS -----  */
/*=============================*/


/*=============================*/
/* ----- HELPER METHODS -----  */
/*=============================*/
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
            



            break;
        case 1:
            document.getElementById("CharacterNameBox").innerHTML = "Second Test";
            document.getElementById("DialogueBox").innerHTML = "DUSHFLUISDFn";
            break;
        case 2:
            document.getElementById("CharacterNameBox").innerHTML = "SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS";
            document.getElementById("DialogueBox").innerHTML = "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF";
            break;
        case 3:
            changeCharacterName("Brandon");
            changeDialogBoxText("Wassup my bro?");
            break;
        case 4:
            changeBackgroundImage("/GBackgrounds/CozyHome.jpg");
            changeRightPicture("/GSprites/Lady/Lady.jpg");
            changeCharacterName("Brandon");
            changeDialogBoxText("Wassup my bro?");
            break;
        case 5:
            changeBackgroundImage("/GBackgrounds/CozyHome.jpg");
            changeRightPicture("/GSprites/Lady/Lady.jpg");
            changeCharacterName("Brandon");
            changeDialogBoxText("Wassup my bro?");
            break;
        default:
            document.getElementById("CharacterNameBox").innerHTML = "???";
            document.getElementById("DialogueBox").innerHTML = "You've reached the end of the story. \nThanks for Playing!";
            break;
    }
}
/*=============================*/
/* -- (END) HELPER METHODS --  */
/*=============================*/



/************************************
 ************************************
 *                                  *
 *         HELPER FUNCTIONS         *
 These functions help update elements
 on index.html that would otherwise
 be difficult to understand.
 ************************************
 ************************************/


/*=============================*/
/* ---- HELPER FUNCTIONS ----  */
/*=============================*/
/* These functions help update elements
 * on index.html that would otherwise
 * be difficult to understand.
 */

/**
 * Changes the text of the dialogBox element 
 * to be the input in the parameter newText.
 * 
 * newText should preferrably be a string type,
 * but you may input other types.
 * 
 * @param {string} newText
 */
function changeDialogBoxText(newText) {
    dialogueBox.innerHTML = newText;
}

/**
 * Changes the text of the character name to be 
 * the value of the newName parameter.
 * 
 * newName should preferrably be a string type,
 * but you may input other types.
 * 
 * @param {string} newName
 */
function changeCharacterName(newName) {
    characterNameBox.innerHTML = newName;
}

/**
 * Changes the background image of the game
 * to be the image defined in the path.
 * 
 * pathToImage MUST BE a string type.
 * 
 * @param {string} pathToImage
 */
function changeBackgroundImage(pathToImage) {
    //We put this try / catch here just in case our loading fails.
    try {
        //Because backgroundImage is actually a div (not an <img>),
        //We change its picture by changing it's background-image in css.
        //You can find this exact attribute on line 58 in wwwroot/GStylesheets/index.css.
        //In JavaScript, it looks like this:
        backgroundImage.style.backgroundImage = `url(${pathToImage})`;
    }
    catch (err) {
        console.log("Failure to change image. Please check the query to see if it is a string and a path to an image file.");
        console.log("pathToImage: \"" + pathToImage + "\"");
        console.log("Error: " + err);
    }
}

/**
 * Changes the left image of the game
 * to be the image defined in the path.
 * 
 * pathToImage MUST BE a string type.
 * 
 * @param {string} pathToImage
 */
function changeLeftPicture(pathToImage) {
    //We put this try / catch here just in case our loading fails.
    try {
        //Actually easier than you think.
        //Without the condensation, it'd look like this:
        //document.getElementById ("leftPicture").src = pathToImage;
        leftPicture.src = pathToImage;
    }
    catch (err) {
        console.log("Failure to change image. Please check the query to see if it is a string and a path to an image file.");
        console.log("pathToImage: \"" + pathToImage + "\"");
        console.log("Error: " + err);
    }
}


function changeRightPicture(pathToImage) {
    //We put this try / catch here just in case our loading fails.
    try {
        //Actually easier than you think.
        //Without the condensation, it'd look like this:
        //document.getElementById ("rightPicture").src = pathToImage;
        rightPicture.src = pathToImage;
    }
    catch (err) {
        console.log("Failure to change image. Please check the query to see if it is a string and a path to an image file.");
        console.log("pathToImage: \"" + pathToImage + "\"");
        console.log("Error: " + err);
    }
}


/*=============================*/
/* - (END) HELPER FUNCTIONS -  */
/*=============================*/

