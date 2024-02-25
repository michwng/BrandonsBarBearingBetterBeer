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
 * Version: V0.4 - Text Engine and Fade-In Concept.
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

var waiting = false;


var bgm = new Audio();
bgm.src = "./GSounds/An Empty Bar.mp3";
bgm.loop = true;
bgm.load();

var soundUse = 1;
var sound = new Audio();
sound.loop = false;

var sound2 = new Audio();
sound2.loop = false;

var sound3 = new Audio();
sound3.loop = false;


var voice = new Audio("/GVoiceovers/M1.mp3");
voice.load();


/*=============================*/
/* ----- (END) VARIABLES ----- */
/*=============================*/


/*=============================*/
/* -----  MAIN FUNCTION -----  */
/*=============================*/
/**
 * The main trigger method.
 */
function uponLoad() {
    updateTextBoxes();
    bgm.play();
}
/*=============================*/
/* --- MAIN FUNCTION (END) --- */
/*=============================*/


/*=============================*/
/* -------  TRIGGERS  -------  */
/*=============================*/
/**
 * The main trigger method.
 */
function incrementCounter() {
    if (waiting == false) {
        updateTextBoxes();
        progressCounter++;
    } else {
        waiting = false;
    }

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
    //Ensure that the Background Music is playing in the background.
    //This doesn't start the music at the beginning everytime it's called;
    //It only plays the music. 
    voice.pause();
    bgm.play();
    switch (progressCounter)
    {
        case 0:
            changeBackgroundImage("/GBackgrounds/EmptyBar.jpg");
            changeLeftPicture("/GSprites/Nothing.png");
            changeRightPicture("/GSprites/Nothing.png");
            changeCharacterName("Narrator");
            changeDialogBoxText("An empty bar.");
            break;
        case 1:
            changeCharacterName("Narrator");
            textEngine("Well, not as empty as you think. There's a lone Bartender cleaning up his tables after a day of work.");
            break;
        case 2:
            fadeinElement(leftPicture, "/Gsprites/Bartender/BartenderTB.png", 0.01);
            changeCharacterName("Narrator");
            changeDialogBoxText("His name is Brandon. He owns this bar and is the only employee.");
            break;
        case 3:
            changeLeftPicture("/Gsprites/Bartender/BartenderSweatSmall.png");
            changeCharacterName("Brandon");
            changeDialogBoxText("*sigh*, Michael should be here by now...");
            break;
        case 4:
            changeCharacterName("Narrator");
            changeDialogBoxText("It's Friday, 10:47PM. No more customers are here today. It's just the lone bartender cleaning up his tables.");
            break;
        case 5:
            playVoice("/GVoiceovers/M1.mp3");
            changeCharacterName("???");
            changeDialogBoxText("YO, What's UP?!");
            break;
        case 6:
            changeCharacterName("Narrator");
            changeDialogBoxText("Someone barges into the bar. Brandon flinches from the sudden scare, but immediately knows who it is.");
            break;
        case 7:
            changeLeftPicture("/Gsprites/Bartender/BartenderTB.png");
            changeCharacterName("Brandon");
            changeDialogBoxText("What's up, my dude?");
            break;
        case 8:
            changeRightPicture("/Gsprites/Michael/MichaelHappy.png");
            changeCharacterName("Michael");
            changeDialogBoxText("I just came back from work, I'm pretty beat.");
            break;
        case 9:
            changeLeftPicture("/Gsprites/Bartender/BartenderHappy.png");
            changeLeftPictureSize(0.75);
            changeCharacterName("Brandon");
            changeDialogBoxText("Yeah? Go sit down.");
            break;
        case 10:
            changeLeftPicture("/Gsprites/Bartender/BartenderTB.png");
            changeRightPicture("/Gsprites/Michael/MichaelTB.png");
            changeCharacterName("Narrator");
            changeDialogBoxText("Brandon gestured to one of the bar seats at the front. Michael obliged.");
            break;
        case 11:
            changeRightPictureSize(0.75);
            changeCharacterName("Brandon");
            changeDialogBoxText("The usual?");
            break;
        case 12:
            changeCharacterName("Michael");
            changeDialogBoxText("You know me.");
            break;
        case 13:
            changeCharacterName("Narrator");
            changeDialogBoxText("Brandon filled the glasses up with a beer he had brewed himself, sliding it over to Michael. The two clinked their glasses together.");
            break;
        case 14:
            changeCharacterName("Michael");
            changeDialogBoxText("Ice cold. Just the way I like it.");
            break;
        case 15:
            changeCharacterName("Brandon");
            changeDialogBoxText("You'll need it. Can't imagine running every second in a place where the A/C isn't working.");
            break;
        case 16:
            changeCharacterName("Narrator");
            changeDialogBoxText("The two clinked their glasses together.");
            break;
        case 17:
            changeCharacterName("Brandon & Michael");
            changeDialogBoxText("Cheers.");
            break;
        case 18:
            changeCharacterName("Narrator");
            changeDialogBoxText("The two brothers gulped down their respective drinks. When they were finished, they set their empty glasses on the counter.");
            break;
        case 19:
            changeCharacterName("Brandon");
            changeDialogBoxText("So, how was your day?");
            break;
        case 20:
            changeCharacterName("Michael");
            changeDialogBoxText("Well, we had a particularly rude customer. She complained that the food on the buffet was old and demanded her dinner be free.");
            break;
        case 21:
            changeCharacterName("Brandon");
            changeDialogBoxText("What did you do?");
            break;
        case 22:
            changeCharacterName("Michael");
            changeDialogBoxText("I asked the manager and she decided to cut the price in half after a little bit of haggling. We also cooked up some new food for her. She even ended up staying past closing.");
            break;
        case 23:
            changeCharacterName("Brandon");
            changeDialogBoxText("*laughs* That's good, man! I hope you're getting paid extra for that!");
            break;
        case 24:
            changeCharacterName("Michael");
            changeDialogBoxText("*Grimacing* Yo, I only get paid $2.5 an hour. It's mad.");
            break;
        case 25:
            changeCharacterName("Michael");
            changeDialogBoxText("*Sighs* Yeah, not really. Most of my paycheck is my tips.");
            break;
        case 26:
            changeCharacterName("Brandon");
            changeDialogBoxText("Tips, huh? Maybe I should have been a waiter!");
            break;
        case 27:
            changeCharacterName("Michael");
            changeDialogBoxText("What, do you not get tips with that face of yours?");
            break;
        case 28:
            changeCharacterName("Brandon");
            changeDialogBoxText("Nah, man. They just like my beer.");
            break;
        case 29:
            changeCharacterName("Michael");
            changeDialogBoxText("Ok, Sure.");
            break;
        case 30:
            changeCharacterName("Narrator");
            changeDialogBoxText("Brandon poured Michael another glass of his beer.");
            break;
        case 31:
            changeCharacterName("Michael");
            changeDialogBoxText("*Shakes Head* <br> Bro, if I drink this, I'm gonna be seeing an IRL fisheye effect. I can't hold more than 1 beer.");
            break;
        case 32:
            changeCharacterName("Brandon");
            changeDialogBoxText("Oh, I thought you said you were beat.");
            break;
        case 33:
            changeRightPicture("Gsprites/Michael/MichaelTicked.png");
            changeCharacterName("Michael");
            changeDialogBoxText("You're gonna be beat if you keep stealing my jokes.");
            break;
        case 34:
            changeCharacterName("Brandon");
            changeDialogBoxText("[Smiling] Aw, so you came here just to talk to me?");
            break;
        case 35:
            changeRightPicture("Gsprites/Michael/MichaelTB.png");
            changeCharacterName("Michael");
            changeDialogBoxText("What else would I be doing at 11 PM?");
            break;
        case 36:
            changeCharacterName("Brandon");
            changeDialogBoxText("It's still early for me.");
            break;
        case 37:
            changeCharacterName("Narrator");
            changeDialogBoxText("Michael stared at the clock hanging on the wall.");
            break;
        case 38:
            changeCharacterName("Michael");
            changeDialogBoxText("Really? I thought you'd usually close by now.");
            break;
        case 39:
            changeCharacterName("Brandon");
            changeDialogBoxText("Yeah, well, it's Friday.");
            break;
        case 40:
            changeCharacterName("Michael");
            changeDialogBoxText("Okay, whatever. How's life been treating you?");
            break;
        case 41:
            changeCharacterName("Brandon");
            changeDialogBoxText("Eh, you know how it is. Business has been doing good lately. I get to meet new people every day, and they all seem to like me for some reason.");
            break;
        case 42:
            changeCharacterName("Michael");
            changeDialogBoxText("You, or your beer?");
            break;
        case 43:
            changeCharacterName("Brandon");
            changeDialogBoxText("[Smirking] Both, probably. But at least I'm making friends.");
            break;
        case 44:
            changeCharacterName("Michael");
            changeDialogBoxText("Friends, huh? You think I could make some friends too?");
            break;
        case 45:
            changeLeftPicture("/Gsprites/Bartender/BartenderWINK.png");
            changeCharacterName("Brandon");
            changeDialogBoxText("Of course you can, man! You just need to try harder. Just like that customer you had today.");
            break;
        case 46:
            changeRightPicture("/Gsprites/Michael/MichaelSweatSmall.png");
            changeCharacterName("Michael");
            changeDialogBoxText("You know what? I'm not even going to get mad at you for that.");
            break;
        case 47:
            changeCharacterName("Brandon");
            changeDialogBoxText("See? That's what I mean. I'm sure you'll find some nice people out there who'll appreciate your sense of humor.");
            break;
        case 48:
            changeRightPicture("/Gsprites/Michael/MichaelTB.png");
            changeCharacterName("Michael");
            changeDialogBoxText("*Sigh* Maybe. Maybe not.");
            break;
        case 49:
            changeCharacterName("Brandon & Michael");
            changeDialogBoxText("...");
            break;
        case 50:
            changeCharacterName("Michael");
            changeDialogBoxText("Mind if I clean the tables with ya?");
            break;
        case 51:
            changeCharacterName("Brandon");
            changeDialogBoxText("Go ahead.");
            break;
        case 52:
            changeCharacterName("Narrator");
            changeDialogBoxText("Brandon grabbed table cleaner spray bottles and washcloths and handed some to Michael. They begin cleaning.");
            break;
        case 53:
            changeCharacterName("Brandon");
            changeDialogBoxText("I'll take this side of the room, you can take that side.");
            break;
        case 54:
            changeCharacterName("Michael");
            changeDialogBoxText("Yo, you wanna compete again to see who gets the high score?");
            break;
        case 55:
            changeCharacterName("Brandon");
            changeDialogBoxText("Bro, it's not even going to be a competition.");
            break;
        case 56:
            changeCharacterName("Michael");
            changeDialogBoxText("Yo, at Ming's Garden, I clean the tables everytime one of my customers leave.<br>I don't have to worry about old stains on the table.");
            break;
        case 57:
            changeCharacterName("Brandon");
            changeDialogBoxText("Well, I'm the only employee here, so it's not like I could clean if I wanted to.");
            break;
        case 58:
            changeCharacterName("Michael");
            changeDialogBoxText("Ok, fair.");
            break;
        case 59:
            changeCharacterName("Narrator");
            changeDialogBoxText("They eventually reached the final table, which was covered in sticky spilled beer.");
            break;
        case 60:
            changeCharacterName("Michael");
            changeDialogBoxText("Someone really... Hung over.");
            break;
        case 61:
            changeCharacterName("Brandon");
            changeDialogBoxText("Who... Wha, the carpet!. Bro, how am I gonna get this cleaned off?");
            break;
        case 62:
            changeCharacterName("Michael");
            changeDialogBoxText("You'll have to hire some professional floor cleaners to clean that for you.<br> For now, let's just clean the table. You got soap and a sponge?");
            break;
        case 63:
            changeCharacterName("Brandon");
            changeDialogBoxText("Yeah.");
            break;
        case 64:
            changeCharacterName("Michael");
            changeDialogBoxText("Cool. Let's get them and scrub away.");
            break;
        case 65:
            changeCharacterName("Narrator");
            changeDialogBoxText("They get the materials and scrub all the beer off the table. <br>Unfortunately, that leaves a lot of suds in the process.");
            break;
        case 66:
            changeCharacterName("Michael");
            changeDialogBoxText("Whoops. I forgot about that. That's why we needed baking soda.");
            break;
        case 67:
            changeCharacterName("Brandon");
            changeDialogBoxText("What do we do now?");
            break;
        case 68:
            changeCharacterName("Michael");
            changeDialogBoxText("I guess we just ");
            break;
        case 69:
            changeCharacterName("Michael");
            changeDialogBoxText("Wassup");
            break;
        case 70:
            changeCharacterName("Michael");
            changeDialogBoxText("Wassup");
            break;
        case 71:
            changeCharacterName("Michael");
            changeDialogBoxText("Wassup");
            break;
        case 72:
            changeCharacterName("Michael");
            changeDialogBoxText("Wassup");
            break;
        case 73:
            changeCharacterName("Michael");
            changeDialogBoxText("Wassup");
            break;
        case 74:
            changeCharacterName("Michael");
            changeDialogBoxText("Wassup");
            break;
        case 75:
            changeCharacterName("Michael");
            changeDialogBoxText("Wassup");
            break;
        case 76:
            changeCharacterName("Michael");
            changeDialogBoxText("Wassup");
            break;
        case 77:
            changeCharacterName("Michael");
            changeDialogBoxText("Wassup");
            break;
        case 78:
            changeCharacterName("Michael");
            changeDialogBoxText("Wassup");
            break;
        case 79:
            changeCharacterName("Michael");
            changeDialogBoxText("Wassup");
            break;
        case 80:
            changeCharacterName("Michael");
            changeDialogBoxText("Wassup");
            break;
        case 81:
            changeCharacterName("Michael");
            changeDialogBoxText("Wassup");
            break;
        case 82:
            changeCharacterName("Michael");
            changeDialogBoxText("Wassup");
            break;
        case 83:
            changeCharacterName("Michael");
            changeDialogBoxText("Wassup");
            break;
        case 84:
            changeCharacterName("Michael");
            changeDialogBoxText("Wassup");
            break;
        case 85:
            changeCharacterName("Michael");
            changeDialogBoxText("Wassup");
            break;
        case 86:
            changeCharacterName("Michael");
            changeDialogBoxText("Wassup");
            break;
        case 87:
            changeCharacterName("Michael");
            changeDialogBoxText("Wassup");
            break;
        case 88:
            changeCharacterName("Michael");
            changeDialogBoxText("Wassup");
            break;
        case 89:
            changeCharacterName("Michael");
            changeDialogBoxText("Wassup");
            break;
        case 90:
            changeCharacterName("Michael");
            changeDialogBoxText("Wassup");
            break;
        case 91:
            changeCharacterName("Michael");
            changeDialogBoxText("Wassup");
            break;
        case 92:
            changeCharacterName("Michael");
            changeDialogBoxText("Wassup");
            break;
        case 93:
            changeCharacterName("Michael");
            changeDialogBoxText("Wassup");
            break;
        case 94:
            changeCharacterName("Michael");
            changeDialogBoxText("Wassup");
            break;
        case 95:
            changeCharacterName("Michael");
            changeDialogBoxText("Wassup");
            break;
        case 96:
            changeCharacterName("Michael");
            changeDialogBoxText("Wassup");
            break;
        case 97:
            changeCharacterName("Michael");
            changeDialogBoxText("Wassup");
            break;
        case 98:
            changeCharacterName("Michael");
            changeDialogBoxText("Wassup");
            break;
        case 99:
            changeCharacterName("Michael");
            changeDialogBoxText("Wassup");
            break;
        case 100:
            changeCharacterName("Michael");
            changeDialogBoxText("Wassup");
            break;
        case 101:
            changeCharacterName("Michael");
            changeDialogBoxText("Wassup");
            break;
        case 102:
            changeCharacterName("Michael");
            changeDialogBoxText("Wassup");
            break;
        case 103:
            changeCharacterName("Michael");
            changeDialogBoxText("Wassup");
            break;
        case 104:
            changeCharacterName("Michael");
            changeDialogBoxText("Wassup");
            break;
        case 105:
            changeCharacterName("Michael");
            changeDialogBoxText("Wassup");
            break;
        case 106:
            changeCharacterName("Michael");
            changeDialogBoxText("Wassup");
            break;
        case 107:
            changeCharacterName("Michael");
            changeDialogBoxText("Wassup");
            break;
        case 108:
            changeCharacterName("Michael");
            changeDialogBoxText("Wassup");
            break;
        case 109:
            changeCharacterName("Michael");
            changeDialogBoxText("Wassup");
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

/**
 * Changes the left image of the game
 * to be the image defined in the path.
 * This method is overloaded, accepting an oldPathToImage. 
 * Unfortunately, there is no method overloading in JavaScript, 
 * so I renamed this function to changeLeftPictureFailsafe.
 * 
 * pathToImage MUST BE a string type.
 * 
 * @param {string} pathToImage The path to the new image to be used.
 * @param {string} oldPathToImage The previously used image.
 */
function changeLeftPictureFailsafe(pathToImage, oldPathToImage) {
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

        leftPicture.src = oldPathToImage;
        console.log("The previous image was loaded.");
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

/**
 * Changes the right image of the game
 * to be the image defined in the path.
 * This method is overloaded, accepting an oldPathToImage. 
 * Unfortunately, there is no method overloading in JavaScript, 
 * so I renamed this function to changeRightPictureFailsafe.
 * 
 * pathToImage MUST BE a string type.
 * 
 * @param {string} pathToImage The path to the new image to be used.
 * @param {string} oldPathToImage The previously used image.
 */
function changeRightPictureFailsafe(pathToImage, oldPathToImage) {
    //We put this try / catch here just in case our loading fails.
    try {
        //Actually easier than you think.
        //Without the condensation, it'd look like this:
        //document.getElementById ("leftPicture").src = pathToImage;
        rightPicture.src = pathToImage;
    }
    catch (err) {
        console.log("Failure to change image. Please check the query to see if it is a string and a path to an image file.");
        console.log("pathToImage: \"" + pathToImage + "\"");
        console.log("Error: " + err);
        rightPicture.src = oldPathToImage;
        console.log("The previous image was loaded.");
    }
}

/**
 * Changes the size of the left picture.
 * 
 * The parameter percentage MUST be of int or double type.
 * 
 * @param {any} percentage modifies the size of the image. >1 increases size, <1 decreases size. 1 is the average.
 */
function changeLeftPictureSize(percentage) {
    var averageWidth = 50 * percentage;
    var averageHeight = 100 * percentage;
    leftPicture.style.width = averageWidth + "%";
    leftPicture.style.height = averageHeight + "%";
    leftPicture.style.alignSelf = "end";
}

/**
 * Changes the size of the right picture.
 * 
 * The parameter percentage MUST be of int or double type.
 * 
 * @param {any} percentage modifies the size of the image. >1 increases size, <1 decreases size. 1 is the average.
 */
function changeRightPictureSize(percentage) {
    var averageWidth = 50 * percentage;
    var averageHeight = 100 * percentage;
    rightPicture.style.width = averageWidth + "%";
    rightPicture.style.height = averageHeight + "%";
    rightPicture.style.alignSelf = "end";
}


/**
 * Plays an mp3 file that should be a voiceover.
 * 
 * 
 * @param {String} pathToVoiceOver The file path to the voiceover. MUST be a string.
 */
function playVoice(pathToVoiceOver) {
    voice = new Audio();
    voice.src = `${pathToVoiceOver}`;
    voice.load()
    voice.play();
}


//Coped from https://stackoverflow.com/questions/6121203/how-to-do-fade-in-and-fade-out-with-javascript-and-css.
//Thanks to Ibu from StackOverflow.
function fadeOutElement(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1) {
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

//Coped from https://stackoverflow.com/questions/6121203/how-to-do-fade-in-and-fade-out-with-javascript-and-css.
//Thanks to Ibu from StackOverflow.
async function fadeinElement(element, filePath, speed) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    waiting = true;
    var timer = setInterval(function () {
        if (op >= 1 || waiting == false) {
            clearInterval(timer);
            op = 1;
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op = op + speed;
    }, (1 / speed));

    await waitAsync(100);
    changeLeftPicture(filePath);
}


function playSound(soundLocation) {
    if (soundUse == 1) {
        sound.src = "/GSounds/" + soundLocation;
        sound.load();
        sound.play();
        soundUse++;
    }
    else if (soundUse == 2) {
        sound2.src = "/GSounds/" + soundLocation;
        sound2.load();
        sound2.play();
        soundUse++;
    }
    else{
        sound3.src = "/GSounds/" + soundLocation;
        sound3.load();
        sound3.play();
        soundUse = 1;
    }

}


/*=============================*/
/* - (END) HELPER FUNCTIONS -  */
/*=============================*/


/*=============================*/
/* - Some Concept Code by Brandon -  */
/*=============================*/


var buildString = "";
async function textEngine(stringToEngine) {
    buildString = "";
    let charArray = stringToEngine.split("");
    waiting = true;
    for (let i = 0; i < charArray.length; i++) {
        buildString = buildString + charArray[i];
        if (waiting) {
            await waitAsync(50);
            playSound("MVoice.mp3");
            changeDialogBoxText(buildString);
        }
        else {
            changeDialogBoxText(stringToEngine);
        }
    }
    waiting = false;
}

//A delay method generated by AI by googling "javascript wait synchronous".
function waitAsync(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}












/*=============================*/
/* - (End) Concept Code by Brandon -  */
/*=============================*/