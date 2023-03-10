//Ideas: hard mode(faster clock), one viewport. Reverb on click. Random audio files on click.  Backgroundmusic also randomized.

//Globals
const tileChoices = [red, green, blue, yellow];
let tileArray = [tileRandomizer()];
let score = 0;
let levelScore = 0;


//Constructor
function TileColor(color, offColor, toneSrc,colorID,audioID){
  this.color = color;
  this.offColor = offColor;
  this.toneSrc = toneSrc;
  this.colorID = document.getElementById(colorID);
  this.audioID = document.getElementById(audioID);
  
}

//Constructs
const red = new TileColor('red', 'dark red','red.mp3','red-div','red-audio');
const green = new TileColor('green', 'dark green','green.mp3','green-div','green-audio');
const blue = new TileColor('blue', 'dark blue','blue.mp3', 'blue-div','blue-audio');
const yellow = new TileColor('yellow','dark yellow', 'yellow.mp3', 'yellow-div','yellow-audio');  

//Prototype Methods
TileColor.prototype.renderColor_Audio = function(){
  this.colorID.style.backgroundColor = this.color;
  this.audioID.src = this.toneSrc;
}

TileColor.prototype.removeRenderColor_Audio = function(){
  this.colorID.style.backgroundColor = this.offColor;
  this.audioID.src = null;
}

//utility randomizer
function tileRandomizer(){
  let randomTileIndex = Math.floor(Math.random()*tileChoices.length);
  let randomTile = tileChoices[randomTileIndex];
  return randomTile;
}

//Event Listener Functions
function eventListenerAndClick(){
let tileIDArray =[redTile, greenTile, blueTile, yellowTile];
let tileDivArray = ['red-div', 'green-div', 'blue-div', 'yellow-div'];
for (let i = 0; i < tileArray.length; i++) {
  tileIDArray[i] = document.getElementById(tileDivArray[i]);

  tileIDArray[i].addEventListener('click', function (){
    setTimeout(() => {
      tileChoices[i].renderColor_Audio();
    }, 4000);
    removeEventListeners();
    eventListeners();
  }); 
  }
}

function removeEventListeners(){

}

//Game Functions
function game(){
  for (let i = 0; i < tileArray.length; i++){
    setTimeout (() => {
       tileArray[i].renderColor_Audio;
    }, 3000);
    tileArray[i].removeRenderColor_Audio;
  }
}

//iterate over each state and check if they are correctly chosen.
eventListeners();

for (let i = 0; i < tileArray.length; i++){
  if (event.target.id === tileArray[i].colorID){
    score++
    continue;
  }
  else {
    // break;
    removeEventListeners();
    alert();
    tileArray = [tileRandomizer()];
    game();
  }
removeEventListeners();
addTileAndAdjustLevel();
levelScore++;
tileArray.push(tileRandomizer());
game();
}


//Code 
game();




// create an audio element
var audio = document.createElement('audio');

// set the audio source
audio.src = 'path/to/audio/file.mp3';

// set other audio attributes if desired
audio.controls = true; // add controls to the audio player
audio.autoplay = true; // start playing the audio automatically

// add the audio element to the webpage
document.body.appendChild(audio);

















// //Globals 
// let stage = 4;

// let redArray = [];
// let greenArray = [];
// let blueArray = [];
// let yellowArray = [];

// const arrayArray = [redArray, greenArray, blueArray, yellowArray];

// //Randomizer function
// function getRandomIndexes(stageNumber) {
//   let randomIndexes = [];
//   for (let i = 0; i < stageNumber; i++) {
//     randomIndexes.push(Math.floor(Math.random() * arrayArray.length));
  
//   return randomColorIndexes; //This in array for randomized indeces. 
// }

// //Display the color arrays randomly through time with two for loops.
// function arrayArraySweeper() {
//   for (let i = 0; i < stage; i++) {
//     coloredSquareDisplay(randomColorIndexes[i]);
//   }
// }

// function coloredSquareDisplay (rIndex){
//   let square = document.getElementById("square");
//   let img = document.createElement('img')
//   document.appendChild(img);
//   for (let i = 0; i < redArray.length; i++){
//     document.setAttribute("src", arrayArray[rIndex[i]]);
//     document.removeChild(img);
//     square.appendChild(img);
//   }
// }



// // function arraySweeper(){
// //   let indexArray = [];

// //   while (indexArray.length < 2) {
// //     let randomIndex = getRandomIndex();
// //     if (!indexArray.includes(randomIndex)) {
// //       indexArray.push(randomIndex);
// //       indexArray.shift();
// //     }
// //   }