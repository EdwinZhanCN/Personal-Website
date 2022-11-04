//The  contents that will shown on cards.
var letterList = ["yes","yes","no","no","maybe","maybe"
,"good","good","wow","wow","sad","sad"];
refillList(letterList);
//var imageList = [];
//refillList(imageList);
//a sample of adding extra contents for cards

//BackGroundMusic
playSound("assets/mincraft.mp3");

//The code.org Class;
//I don't know how to use Class in code.org, so I make a Class by myself.
var cardId = ["1","2","3","4","5","6","7","8","9","10","11","12"];


//define each cards.
  var card1 = {"isMatched":false, "isFaceUp": false,"id": "1", "cardContent": "", "clickble": true};
  var card2 = {"isMatched":false, "isFaceUp": false,"id": "2", "cardContent": "", "clickble": true};
  var card3 = {"isMatched":false, "isFaceUp": false,"id": "3", "cardContent": "", "clickble": true};
  var card4 = {"isMatched":false, "isFaceUp": false,"id": "4", "cardContent": "", "clickble": true};
  var card5 = {"isMatched":false, "isFaceUp": false,"id": "5", "cardContent": "", "clickble": true};
  var card6 = {"isMatched":false, "isFaceUp": false,"id": "6", "cardContent": "", "clickble": true};
  var card7 = {"isMatched":false, "isFaceUp": false,"id": "7", "cardContent": "", "clickble": true};
  var card8 = {"isMatched":false, "isFaceUp": false,"id": "8", "cardContent": "", "clickble": true};
  var card9 = {"isMatched":false, "isFaceUp": false,"id": "9", "cardContent": "", "clickble": true};
  var card10 = {"isMatched":false, "isFaceUp": false,"id": "10", "cardContent": "", "clickble": true};
  var card11= {"isMatched":false, "isFaceUp": false,"id": "11", "cardContent": "", "clickble": true};
  var card12 = {"isMatched":false, "isFaceUp": false,"id": "12", "cardContent": "", "clickble": true};
var Class = [card1, card2, card3,card4, card5, card6, card7, card8, card9, card10, card11, card12,];

//StartGame
var cardGroup = getText("cardchoose");
HighLightText();

onEvent("StartButton", "click", function( ) {
  if (cardGroup == "lettercards"){
    updateGame(lettercards,letterList);
  }
//  if (cradGroup == "imageList"){
//   updateGame(imageList);
//  }
  setScreen("MemoryGame");
  tapGesture();
});

onEvent("Home","click",function(){
  setScreen("Start");
});

onEvent("HomeButton", "click", function(){
  setScreen("Start");
});


// Game Logic
//Used to sort the cardContentList
function refillList(list){
  function randomsort() {
      return Math.random(0,10)>0.5 ? -1 : 1;
  }
  list.sort(randomsort);
  console.log(list);
}


//This list used to determine the whether the cards are matched.
var matchingCardList = [];


//To Update the Cards
//The List of Cards
var lettercards= [];
//var imagecards = [];
function updateGame(Cards,cardContent){
  for(var i = 0; i< cardId.length; i ++){
     appendItem(Cards,Class[i]);
    if (Cards[i].isMatched == false && Cards[i].isFaceUp == false){
      setProperty(Cards[i].id, "background-color", "#6cc190");
      Cards[i].cardContent = cardContent[i];
      setProperty(Cards[i].id, "text", Cards[i].cardContent);
      setProperty(Cards[i].id, "border-color", "white");
      setProperty(Cards[i].id,"border-width","0");
    }
  }
}


//tapGesture
function flipCards (idOfCard,card){ 
  if(card.isMatched == false){
    setProperty(idOfCard, "background-color", " #6181dc");
    setProperty(idOfCard, "height", "110");
    setProperty(idOfCard, "width", "90");
    setTimeout(function () {
      setProperty(idOfCard, "height", "100");
      setProperty(idOfCard, "width", "80");
    },300);
    card.isFaceUp= true;
    appendItem(matchingCardList,card);
    card.clickble = false;
  }
}


//The Game Logic
function matchingCrads(){
  if(matchingCardList.length == 2 && matchingCardList[0].cardContent == matchingCardList[matchingCardList.length-1].cardContent){
    matchingCardList[0].isMatched = true;
    matchingCardList[matchingCardList.length-1].isMatched = true;
    matchingCardList[0].clickble = true;
    matchingCardList[matchingCardList.length-1].clickble = true;
    setProperty(matchingCardList[0].id, "border-color", "#d2e217");
    setProperty(matchingCardList[matchingCardList.length-1].id,"border-color","#d2e217");
    setProperty(matchingCardList[0].id, "border-width", "2");
    setProperty(matchingCardList[matchingCardList.length-1].id,"border-width","2");
    matchingCardList = [];
    
  }
  if(matchingCardList.length == 2 && matchingCardList[0].cardContent !== matchingCardList[matchingCardList.length-1].cardContent){
    setTimeout(function() {
      setProperty(matchingCardList[0].id, "background-color", "#6cc190");
      setProperty(matchingCardList[matchingCardList.length-1].id,"background-color","#6cc190");
      matchingCardList[0].clickble = true;
      matchingCardList[matchingCardList.length-1].clickble = true;
      matchingCardList = [];
    }, 600);
  }

  if(card1.isMatched == true && card2.isMatched == true && card3.isMatched == true && card4.isMatched == true && card5.isMatched == true && card5.isMatched == true && card6.isMatched == true && card7.isMatched == true && card8.isMatched == true && card9.isMatched == true && card10.isMatched == true && card11.isMatched == true && card12.isMatched == true ){
    setTimeout(function(){
      setScreen("FinishPage");
      for (var i = 0; i<cardId.length;i++){
        lettercards[i].isMatched = false;
        lettercards[i].isFaceUp = false;
      }
      lettercards = [];
    },1000);
  }
}



//The UI control
function tapGesture() {
  onEvent("1", "click", function( ) {
    if (card1.clickble == true && card1.isMatched == false && matchingCardList.length <2){
      flipCards(card1.id,card1);
      matchingCrads();
      console.log(matchingCardList);
    }
     console.log(card1.isMatched);
  });
  onEvent("2", "click", function( ) {
     if (card2.clickble == true && card2.isMatched == false && matchingCardList.length <2){
      flipCards(card2.id,card2);
      matchingCrads();
      console.log(matchingCardList);
    }
     console.log(card2.isMatched);
  });
  onEvent("3", "click", function( ) {
    if (card3.clickble == true && card3.isMatched == false && matchingCardList.length <2){
      flipCards(card3.id,card3);
      matchingCrads();
    }
  });
  onEvent("4", "click", function( ) {
    if (card4.clickble == true && card4.isMatched == false && matchingCardList.length <2){
      flipCards(card4.id,card4);
      matchingCrads();
    }
  });
  onEvent("5", "click", function( ) {
    if (card5.clickble == true && card5.isMatched == false && matchingCardList.length <2){
      flipCards(card5.id,card5);
      matchingCrads();
    }
  });
  onEvent("6", "click", function( ) {
    if (card6.clickble == true && card6.isMatched == false && matchingCardList.length <2){
      flipCards(card6.id,card6);
      matchingCrads();
    }
  });
  onEvent("7", "click", function( ) {
    if (card7.clickble == true && card7.isMatched == false && matchingCardList.length <2){
      flipCards(card7.id,card7);
      matchingCrads();
    }
  });
  onEvent("8", "click", function( ) {
    if (card8.clickble == true && card8.isMatched == false && matchingCardList.length <2){
      flipCards(card8.id,card8);
      matchingCrads();
    }
  });
  onEvent("9", "click", function( ) {
    if (card9.clickble == true && card9.isMatched == false && matchingCardList.length <2){
      flipCards(card9.id,card9);
      matchingCrads();
    }
  });
  onEvent("10", "click", function( ) {
    if (card10.clickble == true && card10.isMatched == false && matchingCardList.length <2){
      flipCards(card10.id,card10);
      matchingCrads();
    }
  });
  onEvent("11", "click", function( ) {
    if (card11.clickble == true && card11.isMatched == false && matchingCardList.length <2){
      flipCards(card11.id,card11);
      matchingCrads();
    }
  });
  onEvent("12", "click", function( ) {
    if (card12.clickble == true && card12.isMatched == false && matchingCardList.length <2){
      flipCards(card12.id,card12);
      matchingCrads();
    }
  });
}

//UI 
function HighLightText(){

  onEvent("text_area1","mouseover", function(){
    setProperty("text_area1","text-color", "rgba(255,255,255,1.0)");
  });
  onEvent("StartButton", "mouseover",function(){
    setProperty("StartButton","text-color", "#8092e6");
     
  });
  onEvent("Home", "mouseover",function(){
    setProperty("Home","text-color", "#8092e6");
     
  });
}



  

  
  




