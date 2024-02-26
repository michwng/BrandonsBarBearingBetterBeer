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
 * Version: V0.5 - Story inclusion and more sprites.
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

    //You cannot overwrite text files using JavaScript. Here's proof of my implemented concept.
    //https://stackoverflow.com/questions/61660578/how-can-i-overwrite-a-text-file-through-javascript-in-edge-browser
    /*try {
        fetch("progress.txt")
            .then((res) => res.text())
            .then((text) => {
                console.log(`Loaded Text. It was: ${text}`);
                progressCounter = Number.parseInt(text);
            })
            .catch((e) => console.error(e));

        console.log(`Loaded progress counter. It was: ${progressCounter}`);
        //Then, everytime updateTextBoxes is called, write the current progressCounter to progress.txt.
        //PseudoCode:
        //File.get("progress.txt").write(progressCounter);
    }
    catch (e) {
        progressCounter = 0;
        console.log(`Failed to load progress counter. It reset to ${progressCounter}.`);
        console.log(`Error: ${e}`)
    }*/
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
            textEngine("Well, not as empty as you think. There's a lone Bartender cleaning up his tables after a day of work.", "Narrator.mp3", 50);
            break;
        case 2:
            fadeinElement(leftPicture, "/Gsprites/Bartender/BartenderTB.png", 0.05);
            changeCharacterName("Narrator");
            textEngine("His name is Brandon. He owns this bar and is the only employee.", "Narrator.mp3", 50);
            break;
        case 3:
            changeLeftPicture("/Gsprites/Bartender/BartenderSweatSmall.png");
            changeCharacterName("Brandon");
            textEngine("*sigh*, Michael should be here by now...", "Brandon.mp3", 50);
            break;
        case 4:
            changeCharacterName("Narrator");
            textEngine("It's Friday, 10:47PM. No more customers are here today. It's just the lone bartender cleaning up his tables.", "Narrator.mp3", 50);
            break;
        case 5:
            //removed Voiceover.
            changeLeftPicture("/Gsprites/Bartender/BartenderXC.png")
            changeCharacterName("???");
            textEngine("YO, What's UP?!", "Michael.mp3", 50);
            break;
        case 6:
            changeCharacterName("Narrator");
            textEngine("Someone barges into the bar. Brandon flinches from the sudden scare, but immediately knows who it is.", "Narrator.mp3", 50);
            break;
        case 7:
            fadeinElement(rightPicture, "/Gsprites/Michael/MichaelHappy.png", 0.03);
            changeLeftPicture("/Gsprites/Bartender/BartenderTB.png");
            changeCharacterName("Brandon");
            textEngine("What's up, my dude?", "Brandon.mp3", 50);
            break;
        case 8:
            changeCharacterName("Michael");
            textEngine("I just came back from work, I'm pretty beat.", "Michael.mp3", 50);
            break;
        case 9:
            changeLeftPicture("/Gsprites/Bartender/BartenderHappy.png");
            changeLeftPictureSize(0.75);
            changeCharacterName("Brandon");
            textEngine("Yeah? Go sit down.", "Brandon.mp3", 50);
            break;
        case 10:
            changeLeftPicture("/Gsprites/Bartender/BartenderHappy.png");
            changeRightPicture("/Gsprites/Michael/MichaelTB.png");
            changeCharacterName("Narrator");
            textEngine("Brandon gestured to one of the bar seats at the front. Michael obliged.", "Narrator.mp3", 50);
            break;
        case 11:
            changeLeftPicture("/Gsprites/Bartender/BartenderTB.png");
            changeRightPictureSize(0.75);
            changeCharacterName("Brandon");
            textEngine("The usual?", "Brandon.mp3", 50);
            break;
        case 12:
            changeRightPicture("/Gsprites/Michael/MichaelWINK.png");
            changeCharacterName("Michael");
            textEngine("You know me.", "Michael.mp3", 50);
            break;
        case 13:
            changeRightPicture("/Gsprites/Michael/MichaelTB.png");
            changeCharacterName("Narrator");
            textEngine("Brandon filled the glasses up with a beer he had brewed himself, sliding it over to Michael. The two clinked their glasses together.", "Narrator.mp3", 50);
            break;
        case 14:
            changeCharacterName("Michael");
            textEngine("Ice cold. Just the way I like it.", "Michael.mp3", 50);
            break;
        case 15:
            changeLeftPicture("/Gsprites/Bartender/BartenderConfused.png");
            changeCharacterName("Brandon");
            textEngine("You'll need it. Can't imagine running every second in a place where the A/C isn't working.", "Brandon.mp3", 50);
            break;
        case 16:
            changeLeftPicture("/Gsprites/Bartender/BartenderTB.png");
            changeCharacterName("Narrator");
            textEngine("The two clinked their glasses together.", "Narrator.mp3", 50);
            break;
        case 17:
            changeCharacterName("Brandon & Michael");
            textEngine("Cheers.", "Narrator.mp3", 50);
            break;
        case 18:
            changeLeftPicture("/Gsprites/Bartender/BartenderHappy.png");
            changeRightPicture("/Gsprites/Michael/MichaelHappy.png");
            changeCharacterName("Narrator");
            textEngine("The two brothers gulped down their respective drinks. When they were finished, they set their empty glasses on the counter.", "Narrator.mp3", 50);
            break;
        case 19:
            changeLeftPicture("/Gsprites/Bartender/BartenderTB.png");
            changeCharacterName("Brandon");
            textEngine("So, how was your day?", "Brandon.mp3", 50);
            break;
        case 20:
            changeRightPicture("/Gsprites/Michael/MichaelXC.png");
            changeCharacterName("Michael");
            textEngine("Well, we had a particularly rude customer. She complained that the food on the buffet was old and demanded her dinner be free.", "Michael.mp3", 50);
            break;
        case 21:
            changeLeftPicture("/Gsprites/Bartender/BartenderConfused.png");
            changeCharacterName("Brandon");
            textEngine("What did you do?", "Brandon.mp3", 50);
            break;
        case 22:
            changeRightPicture("/Gsprites/Michael/MichaelSweat.png");
            changeCharacterName("Michael");
            textEngine("I asked the manager and she decided to cut the price in half after a little bit of haggling. We also cooked up some new food for her. She even ended up staying past closing.", "Michael.mp3", 50);
            break;
        case 23:
            changeLeftPicture("/Gsprites/Bartender/BartenderXD.png");
            changeCharacterName("Brandon");
            textEngine("*laughs* That's good, man! I hope you're getting paid extra for that!", "Brandon.mp3", 50);
            break;
        case 24:
            changeLeftPicture("/Gsprites/Bartender/BartenderTB.png");
            changeRightPicture("/Gsprites/Michael/MichaelXD.png");
            changeCharacterName("Michael");
            textEngine("Yo, I only get paid $2.5 an hour. The wage of a server is so luxurious, bro.", "Michael.mp3", 50);
            break;
        case 25:
            changeRightPicture("/Gsprites/Michael/MichaelSweatBig.png");
            changeCharacterName("Michael");
            textEngine("*Sighs* Yeah, no. Most of my paycheck comes from my tips.", "Michael.mp3", 50);
            break;
        case 26:
            changeLeftPicture("/Gsprites/Bartender/BartenderHappy.png");
            changeCharacterName("Brandon");
            textEngine("Wow, tips? Maybe I should have been a waiter!", "Brandon.mp3", 50);
            break;
        case 27:
            changeRightPicture("/Gsprites/Michael/MichaelTB.png");
            changeCharacterName("Michael");
            textEngine("What? Do you not get tips with that face of yours?", "Michael.mp3", 50);
            break;
        case 28:
            changeLeftPicture("/Gsprites/Bartender/BartenderTB.png");
            changeCharacterName("Brandon");
            textEngine("Nah, man. They just like my beer.", "Brandon.mp3", 50);
            break;
        case 29:
            changeCharacterName("Michael");
            textEngine("Ok, Sure.", "Michael.mp3", 50);
            break;
        case 30:
            changeLeftPicture("/Gsprites/Bartender/BartenderHappy.png");
            changeCharacterName("Narrator");
            textEngine("Brandon poured Michael another glass of his beer.", "Narrator.mp3", 50);
            break;
        case 31:
            changeRightPicture("/Gsprites/Michael/MichaelSweatSmall.png");
            changeCharacterName("Michael");
            textEngine("*Shakes Head* <br> Bro, if I drink this, I'm gonna be seeing an IRL fisheye effect. I can't hold more than 1 beer.", "Michael.mp3", 50);
            break;
        case 32:
            changeLeftPicture("/Gsprites/Bartender/BartenderWINK.png");
            changeCharacterName("Brandon");
            textEngine("Oh, I thought you said you were beat.", "Brandon.mp3", 50);
            break;
        case 33:
            changeRightPicture("Gsprites/Michael/MichaelTicked.png");
            changeCharacterName("Michael");
            textEngine("You're gonna be beat if you keep stealing my jokes.", "Michael.mp3", 50);
            break;
        case 34:
            changeLeftPicture("/Gsprites/Bartender/BartenderTB.png");
            changeCharacterName("Brandon");
            textEngine("Aw, so you came here just to talk to me?", "Brandon.mp3", 50);
            break;
        case 35:
            changeRightPicture("Gsprites/Michael/MichaelTB.png");
            changeCharacterName("Michael");
            textEngine("What else would I be doing at 11 PM?", "Michael.mp3", 50);
            break;
        case 36:
            changeLeftPicture("/Gsprites/Bartender/BartenderSweatSmall.png");
            changeCharacterName("Brandon");
            textEngine("It's still early for me.", "Brandon.mp3", 50);
            break;
        case 37:
            changeCharacterName("Narrator");
            textEngine("Michael stared at the clock hanging on the wall.", "Narrator.mp3", 50);
            break;
        case 38:
            changeCharacterName("Michael");
            textEngine("Really? I thought you'd usually close by now.", "Michael.mp3", 50);
            break;
        case 39:
            changeLeftPicture("/Gsprites/Bartender/BartenderTB.png");
            changeCharacterName("Brandon");
            textEngine("Yeah, well, it's Friday.", "Brandon.mp3", 50);
            break;
        case 40:
            changeRightPicture("Gsprites/Michael/MichaelXD.png");
            changeCharacterName("Michael");
            textEngine("Okay, whatever. How's life been treating you?", "Michael.mp3", 50);
            break;
        case 41:
            changeLeftPicture("/Gsprites/Bartender/BartenderHappy.png");
            changeCharacterName("Brandon");
            textEngine("Eh, you know how it is. Business has been doing good lately. I get to meet new people every day, and they all seem to like me for some reason.", "Brandon.mp3", 50);
            break;
        case 42:
            changeRightPicture("Gsprites/Michael/MichaelWINK.png");
            changeCharacterName("Michael");
            textEngine("You, or your beer?", "Michael.mp3", 50);
            break;
        case 43:
            changeLeftPicture("/Gsprites/Bartender/BartenderConfused.png");
            changeCharacterName("Brandon");
            textEngine("Both, probably. But at least I'm making friends.", "Brandon.mp3", 50);
            break;
        case 44:
            changeRightPicture("Gsprites/Michael/MichaelTB.png");
            changeCharacterName("Michael");
            textEngine("Friends, huh? You think I could make some friends too?", "Michael.mp3", 50);
            break;
        case 45:
            changeLeftPicture("/Gsprites/Bartender/BartenderWINK.png");
            changeCharacterName("Brandon");
            textEngine("Of course you can, man! You just need to try harder. Just like that customer you had today.", "Brandon.mp3", 50);
            break;
        case 46:
            changeRightPicture("/Gsprites/Michael/MichaelSweatBig.png");
            changeCharacterName("Michael");
            textEngine("You know what? I'm not even going to get mad at you for that.", "Michael.mp3", 50);
            break;
        case 47:
            changeLeftPicture("/Gsprites/Bartender/BartenderTB.png");
            changeCharacterName("Brandon");
            textEngine("See? That's what I mean. I'm sure you'll find some nice people out there who'll appreciate your sense of humor.", "Brandon.mp3", 50);
            break;
        case 48:
            changeRightPicture("/Gsprites/Michael/MichaelTB.png");
            changeCharacterName("Michael");
            textEngine("*Sigh* Maybe. Maybe not.", "Michael.mp3", 50);
            break;
        case 49:
            changeCharacterName("Brandon & Michael");
            textEngine("...", "Narrator.mp3", 50);
            break;
        case 50:
            changeCharacterName("Michael");
            textEngine("Mind if I clean the tables with ya?", "Michael.mp3", 50);
            break;
        case 51:
            changeCharacterName("Brandon");
            textEngine("Go ahead.", "Brandon.mp3", 50);
            break;
        case 52:
            changeCharacterName("Narrator");
            textEngine("Brandon grabbed table cleaner spray bottles and washcloths and handed some to Michael. They begin cleaning.", "Narrator.mp3", 50);
            break;
        case 53:
            changeLeftPicture("/Gsprites/Bartender/BartenderTB.png");
            changeCharacterName("Brandon");
            textEngine("I'll take this side of the room, you can take that side.", "Brandon.mp3", 50);
            break;
        case 54:
            changeRightPicture("/Gsprites/Michael/MichaelXD.png");
            changeCharacterName("Michael");
            textEngine("Yo, you wanna compete again to see who gets the high score?", "Michael.mp3", 50);
            break;
        case 55:
            changeLeftPicture("/Gsprites/Bartender/BartenderSweatSmall.png");
            changeCharacterName("Brandon");
            textEngine("Bro, it's not even going to be a competition.", "Brandon.mp3", 50);
            break;
        case 56:
            changeCharacterName("Michael");
            textEngine("Yo, at Ming's Garden, I clean the tables everytime one of my customers leave.<br>I don't have to worry about old stains on the table.", "Michael.mp3", 50);
            break;
        case 57:
            changeLeftPicture("/Gsprites/Bartender/BartenderXC.png");
            changeCharacterName("Brandon");
            textEngine("Well, I'm the only employee here, so it's not like I could clean if I wanted to.", "Brandon.mp3", 50);
            break;
        case 58:
            changeRightPicture("/Gsprites/Michael/MichaelTB.png");
            changeCharacterName("Michael");
            textEngine("K, fair.", "Michael.mp3", 50);
            break;
        case 59:
            changeLeftPicture("/Gsprites/Bartender/BartenderSweatSmall.png");
            changeCharacterName("Narrator");
            textEngine("With Michael's help, cleaning the tables took much less time to finish.", "Narrator.mp3", 50);
            break;
        case 60:
            changeRightPicture("/Gsprites/Michael/MichaelSweatSmall.png");
            changeCharacterName("Michael");
            textEngine("Alright, done. Man, cleaning 10 hour old beer is so much harder than soup.", "Michael.mp3", 50);
            break;
        case 61:
            changeLeftPicture("/Gsprites/Bartender/BartenderTB.png");
            changeCharacterName("Brandon");
            textEngine("Hey, thanks for helping me with this. I would have had to close early otherwise.", "Brandon.mp3", 50);
            break;
        case 62:
            changeRightPicture("/Gsprites/Michael/MichaelHappy.png");
            changeCharacterName("Michael");
            textEngine("I clean tables all the time. It's no problem.", "Michael.mp3", 50);
            break;
        case 63:
            changeRightPicture("/Gsprites/Michael/MichaelTB.png");
            changeCharacterName("Narrator");
            textEngine("Michael stared at the clock at the wall again. It's 11:30 PM.", "Narrator.mp3", 50);
            break;
        case 64:
            changeRightPicture("/Gsprites/Michael/MichaelTB.png");
            changeCharacterName("Michael");
            textEngine("It's about time for me to leave. Hey, see you tomorrow, yeah?", "Michael.mp3", 50);
            break;
        case 65:
            changeLeftPicture("/Gsprites/Bartender/BartenderHappy.png");
            changeCharacterName("Brandon");
            textEngine("Sure thing.", "Michael.mp3", 50);
            break;
        case 66:
            //This should return a 404 error, which doesn't halt the program, 
            //but it causes nothing to play, which is what I want!
            changeBGM("/Gsounds/Nothing.mp3");
            changeLeftPicture("/Gsprites/Bartender/BartenderTB.png");
            changeRightPicture("/Gsprites/Michael/MichaelTB.png");
            fadeOutElement(leftPicture, 0.01);
            fadeOutElement(rightPicture, 0.01);

            changeRightPictureSize(1);
            changeCharacterName("Narrator");
            textEngine("Michael begins to leave the bar, but as he is walking, he notices a young lady crying to herself.", "Narrator.mp3", 50);
            break;
        case 67:
            changeCharacterName("Michael");
            textEngine("He noticed that the tears stained the makeup on her face, leaving a black trail of tears falling down her eyes. It was a pitiful spectacle. Michael decided to stop her.", "Narrator.mp3", 50);
            break;
        case 68:
            fadeinElement(rightPicture, "/Gsprites/Michael/MichaelTB.png", 0.03);
            changeCharacterName("Michael");
            textEngine("Excuse me, Miss? Are you alright?", "Michael.mp3", 50);
            break;
        case 69:
            changeCharacterName("Narrator");
            textEngine("She stopped in her tracks, staring at Michael for a few seconds before running off back towards the entrance.", "Narrator.mp3", 50);
            break;
        case 70:
            fadeinElement(rightPicture, "/Gsprites/Michael/MichaelXC.png", 0.03);
            changeCharacterName("Narrator");
            textEngine("Michael froze to process what had happened. Then he returned to Brandon.", "Narrator.mp3", 50);
            break;
        case 71:
            changeRightPictureSize(0.75);
            changeRightPicture("/GSprites/Michael/MichaelTB.png");
            fadeinElement(leftPicture, "/Gsprites/Bartender/BartenderConfused.png");
            changeCharacterName("Michael");
            textEngine("Yo, Did you see that?", "Michael.mp3", 50);
            break;
        case 72:
            changeCharacterName("Brandon");
            textEngine("Yeah. What happened?", "Brandon.mp3", 50);
            break;
        case 73:
            changeRightPicture("/GSprites/Michael/MichaelSweatSmall.png");
            changeCharacterName("Michael");
            textEngine("I don't know, but it looked like she was crying.", "Michael.mp3", 50);
            break;
        case 74:
            changeLeftPicture("/Gsprites/Bartender/BartenderSweatSmall.png");
            changeCharacterName("Brandon");
            textEngine("That's no good. I hope she's doing alright.", "Brandon.mp3", 50);
            break;
        case 75:
            changeRightPicture("/GSprites/Michael/MichaelTB.png");
            changeCharacterName("Michael");
            textEngine("Do you know her?", "Michael.mp3", 50);
            break;
        case 76:
            changeLeftPicture("/Gsprites/Bartender/BartenderTB.png");
            changeCharacterName("Brandon");
            textEngine("No, I don't, but if you see her again, you should talk to her.", "Brandon.mp3", 50);
            break;
        case 77:
            changeCharacterName("Michael");
            textEngine("Alright, then. I hope she's doing alright.", "Michael.mp3", 50);
            break;
        case 78:
            fadeOutElement(rightPicture, 0.02);
            fadeOutElement(leftPicture, 0.01);
            fadeOutElement(backgroundImage, 0.01);
            changeCharacterName("Narrator");
            textEngine("Michael leaves for the night. Brandon stood still in the bar wondering what'd happened.", "Narrator.mp3", 50);
            break;
        case 79:
            changeCharacterName("");
            changeDialogBoxText("");
            break;
        case 80:
            changeBGM("nothing.mp3");
            fadeinElement(rightPicture, "/Gsprites/Michael/MichaelXC.png", 0.01);
            resetSpriteContainer();
            changeRightPictureSize(1);
            changeCharacterName("Narrator");
            textEngine("The next morning, Michael arrived at Ming's Garden early, as he usually does. He does his usual duties of restocking the bathroom, ice cream, sauces, and the salad bar until the restaurant opens.", "Narrator.mp3", 50);
            break;
        case 81:
            changeBackgroundImage("/gbackgrounds/blackbackground.jpg");
            fadeinElement(backgroundImage, "/gbackgrounds/busychinesebuffet.jpg", 0.01);
            changeCharacterName("Narrator");
            textEngine("After he was done, he went to the bathroom before the opening rush.", "Narrator.mp3", 50);
            break;
        case 82:
            changeCharacterName("Michael");
            textEngine("I'm a college graduate and I'm still here in this restaurant - picking up dirty dishes, running around for 10 hours straight, and getting complaints about small things. I must be pathetic.", "Michael.mp3", 50);
            break;
        case 83:
            changeCharacterName("Narrator");
            textEngine("This year was rough on Michael. Although he puts on a cheery face, on the inside, he feels upset and that he's not reaching his full potential. Among all, his application to Westman was declined due to hiring freezes. ", "Narrator.mp3", 50);
            break;
        case 84:
            changeRightPicture("/Gsprites/Michael/MichaelSweatBig.png");
            changeCharacterName("Michael");
            textEngine("He began washing his hands and then looked at himself in the mirror. That was his true self. A big frown - aimed upon the life he was living. Yet, as soon as he left the bathroom, his face transformed into that cheerful mask. That mask was his persona - made only to hide the true person behind him.", "Michael.mp3", 50);
            break;
        case 85:
            changeBGM("/Gsounds/An Empty Bar (No Melody).mp3");
            changeBackgroundImage("/gbackgrounds/BusyChineseBuffet.jpg");
            fadeinElement(backgroundImage, "/gbackgrounds/BusyChineseBuffet.jpg", 0.02);
            resetSpriteContainer();
            changeRightPicture("/gsprites/Michael/MichaelHappy.png");
            changeRightPictureSize(0.75);
            changeCharacterName("Michael");
            textEngine("The restaurant opened, with 15 customers having entered within the first 3 minutes. Michael was one of 2 other waiters working in the restaurant.", "Narrator.mp3", 50);
            break;
        case 86:
            changeRightPicture("/gsprites/Michael/MichaelHappy.png");
            changeCharacterName("Michael");
            textEngine("Understaffing was always an issue at Ming's Garden, so Michael worked 42 - 47 hour work weeks, where he would constantly be running to keep up with the onslaught of customers.", "Narrator.mp3", 50);
            break;
        case 87:
            changeCharacterName("Michael");
            textEngine("The first hour was up, with Michael barely breaking a sweat. Now, it was time for the lunch rush.", "Narrator.mp3", 50);
            break;
        case 88:
            changeCharacterName("Michael");
            textEngine("[Asking another waiter] Hey, who's turn is it?", "Michael.mp3", 50);
            break;
        case 89:
            changeCharacterName("Michael");
            textEngine("Wassup", "Narrator.mp3", 50);
            break;
        case 90:
            changeCharacterName("Waiter");
            textEngine("It's your turn.", "Narrator.mp3", 50);
            break;
        case 91:
            changeCharacterName("Narrator");
            textEngine("Michael saw a young girl, a young man, an adult man, and an adult lady coming in. He thought that the girl looked familiar but didn't have time to dwell on the thought.", "Narrator.mp3", 50);
            break;
        case 92:
            changeCharacterName("Michael");
            textEngine("Hello, two for here?", "Michael.mp3", 50);
            break;
        case 93:
            changeCharacterName("Man");
            textEngine("Yes, four.", "Brandon.mp3", 50);
            break;
        case 94:
            changeCharacterName("Michael");
            textEngine("Alright, follow me.", "Michael.mp3", 50);
            break;
        case 95:
            changeCharacterName("Narrator");
            textEngine("Michael led them to the booths, where he served for the day.", "Narrator.mp3", 50);
            break;
        case 96:
            changeCharacterName("Michael");
            textEngine("What would you all like to drink?", "Michael.mp3", 50);
            break;
        case 97:
            changeCharacterName("Young Man");
            //Sprite, but it's trademarked. So, spright.
            textEngine("Hmm... Diet Cohke.", "Narrator.mp3", 50);
            break;
        case 98:
            changeCharacterName("Adult Lady");
            textEngine("Spright.", "Narrator.mp3", 50);
            break;
        case 99:
            changeCharacterName("Adult Man");
            textEngine("Sweet Tea.", "Brandon.mp3", 50);
            break;
        case 100:
            changeCharacterName("Narrator");
            textEngine("The young lady was silent. She didn't look comfortable at all. ", "Narrator.mp3", 50);
            break;
        case 101:
            changeCharacterName("Adult Man");
            textEngine("We'll just get water for her.", "Brandon.mp3", 50);
            break;
        case 102:
            changeCharacterName("Michael");
            textEngine("Alright, thank you.", "Michael.mp3", 50);
            break;
        case 103:
            changeCharacterName("Narrator");
            textEngine("Like the wind, Michael dashed and got the drinks while they headed for the buffet. When he came back, the young lady was still there.", "Narrator.mp3", 50);
            break;
        case 104:
            changeCharacterName("Narrator");
            textEngine("She was hiding her head under her arms.", "Narrator.mp3", 50);
            break;
        case 105:
            changeCharacterName("Narrator");
            textEngine("Wassup", "Narrator.mp3", 50);
            break;
        case 106:
            changeCharacterName("Narrator");
            textEngine("Wassup", "Narrator.mp3", 50);
            break;
        case 107:
            changeCharacterName("Narrator");
            textEngine("Wassup", "Narrator.mp3", 50);
            break;
        case 108:
            changeCharacterName("Narrator");
            textEngine("Wassup", "Narrator.mp3", 50);
            break;
        case 109:
            changeCharacterName("Narrator");
            textEngine("Wassup", "Narrator.mp3", 50);
            
            break;
        default:
            changeCharacterName("Thanks for Playing!");
            textEngine("Credits:"
                + "<br>Lead Designer: Michael Ng"
                + "<br>Programmer: Michael Ng"
                + "<br>Director: Michael Ng"
                + "<br>Art & Editing: Michael Ng"
                + "<br>Soundtrack: Michael Ng", "Michael.mp3", 50);
            var theUglyForm = (x) =>
            {
                console.log(x);
                console.log("You reached the end, now go fetch!");
            }
            theUglyForm(54);
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
 * Plays an mp3 file voiceover.
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
/**
 * Fades out the given element. 
 * You may also change the speed of which the element fades out.
 * 
 * @param {any} element - the element fading out.
 * @param {Number} speed - the speed of which the fade out occurs. Values can range from (>0 - 1).
 */
function fadeOutElement(element, speed) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1 || waiting == false) {
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op = op - speed;
    }, 50);
}

//Coped from https://stackoverflow.com/questions/6121203/how-to-do-fade-in-and-fade-out-with-javascript-and-css.
//Thanks to Ibu from StackOverflow.
/**
 * Fades in the given element. 
 * You may also change the picture in the element and the speed of which the element fades in.
 * 
 * @param {any} element - the element fading in.
 * @param {String} filePath - the path to an image file used for fading in.
 * @param {Number} speed - the speed of which the fade in occurs. Values can range from (>0 - 1).
 */
async function fadeinElement(element, filePath, speed) {
    element.style.opacity = 0;
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
    }, 50);
    element.src = filePath;
}


/**
 * Plays sounds asyncronously.
 * 
 * 
 * @param {String} soundLocation
 */
function playSoundAsync(soundLocation) {
    new Audio("/GSounds/" + soundLocation).play();
}


function changeBGM(soundLocation) {
    bgm.pause();
    bgm.src = `${soundLocation}`;
    bgm.load();
    bgm.play();
}


function resetSpriteContainer() {
    var spriteContainer = document.getElementById("SpritesContainer");
    spriteContainer.style.width = "100%";
    spriteContainer.style.height = "100%";

}


/*=============================*/
/* - (END) HELPER FUNCTIONS -  */
/*=============================*/


/*==============================*/
/* ------- TEXT ENGINE -------  */
/*==============================*/
//Credit to my brother Brandon for giving me the inspiration to code this.

var buildString = "";

/**
 * 
 * @param {any} stringToEngine
 * @param {any} voice
 * @param {any} msWait
 */
async function textEngine(stringToParse, voice, msWait) {
    if (typeof voice === undefined) {
        voice = "Narrator.mp3";
    }
    if (typeof msWait === undefined) {
        msWait = 100;
    }
    buildString = "";
    let charArray = stringToParse.split("");
    waiting = true;
    for (let i = 0; i < charArray.length; i++) {
        buildString = buildString + charArray[i];

        //Small reminder: Waiting is a boolean meant to represent the patience level of the player.
        //If the user is waiting (patient), we continue parsing all the text until it is finished.
        if (waiting) {
            await waitAsync(msWait);
            playSoundAsync(voice);
            changeDialogBoxText(buildString);
        }
        else {
            //Immediately put the stringToParse into the Dialog Box.
            changeDialogBoxText(stringToParse);
        }
    }
    waiting = false;
}

//A delay method generated by AI by googling "javascript wait synchronous".
/**
 * waitAsync allows for the user to await an asyncronous call through the use of Promise.
 * Example Use: " await waitAsync(40); "
 * In the example above, the program waits 40 milliseconds until the next 
 * 
 * @param {any} ms The amount of milliseconds to wait.
 * @returns a Promise (Represents the eventual completion or failure of an asynchronous operation and its resulting value).
 */
function waitAsync(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}


/*==============================*/
/* ---- (END) TEXT ENGINE ----  */
/*==============================*/

