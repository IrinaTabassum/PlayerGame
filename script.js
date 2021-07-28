const playoneDisplay = document.querySelector('#ploneSc'); 
const playtwoDisplay = document.querySelector('#pltwoSc'); 
const displayTarget = document.querySelector('#disInput');
const inputBox = document.querySelector('#inputScore'); 
const pOneBtn= document.querySelector('#btn1') ;  
const pTwoBtn= document.querySelector('#btn2') ;
const reFrBtn = document.querySelector('#RBtn');

// let p1count=0;
// let p2count=0;
// let wineScore = 5;
// let gameover = 0;

// inputBox.addEventListener('change', ()=>{
// displayTarget.textContent= inputBox.value;
// wineScore = Number(inputBox.value);
// inputBox.value='';
// reset();
// }) 

// pOneBtn.addEventListener('click', ()=>{
//    if(!gameover){
//        p1count++;
//        winer(p1count);
//    }
   
//   playoneDisplay.innerHTML = p1count;
// })
// pTwoBtn.addEventListener('click', ()=>{
//    if(!gameover){
//        p2count++;
//    winer(p2count);
//    }
//   playtwoDisplay.innerHTML = p2count;
// })

// function winer(score){
//    if(score === wineScore){
//        gameover=1;
//        pOneBtn.setAttribute('disabled','disabled');
//        pTwoBtn.setAttribute('disabled','disabled'); 
//    }  

// }
// function reset(){
//     p1count=0;
//     p2count=0;
//     gameover=0;
//     playoneDisplay.innerHTML = 0;
//     playtwoDisplay.innerHTML = 0;
//     pOneBtn.removeAttribute('disabled');
//     pTwoBtn.removeAttribute('disabled');

// }


const playerGame ={
     p1count : 0,
     p2count : 0,
     wineScore : 5,
     gameover : 0,

     listenp1(){ 
        if(!this.gameover){
            this.p1count++;
           this.winer(this.p1count);
        } 
       playoneDisplay.innerHTML = this.p1count;
     },
     listenp2(){
        if(!this.gameover){
            this.p2count++;
        this.winer(this.p2count);
        }
       playtwoDisplay.innerHTML = this.p2count;
     },
     winer(score){
        if(score === wineScore){
            this.gameover=1;
            pOneBtn.setAttribute('disabled','disabled');
            pTwoBtn.setAttribute('disabled','disabled'); 
        }  
     },
     reset(){
        this.p1count=0;
        this.p2count=0;
        this.gameover=0;
        playoneDisplay.innerHTML = 0;
        playtwoDisplay.innerHTML = 0;
        pOneBtn.removeAttribute('disabled');
        pTwoBtn.removeAttribute('disabled');
    },
    inputNumber(){
        displayTarget.textContent= inputBox.value;
        wineScore = Number(inputBox.value);
        inputBox.value='';
        this.reset();
    },
    
}

reFrBtn.addEventListener('click', playerGame.reset.bind(playerGame));
pOneBtn.addEventListener('click', playerGame.listenp1.bind(playerGame));
pTwoBtn.addEventListener('click', playerGame.listenp2.bind(playerGame));
inputBox.addEventListener('change', playerGame.inputNumber.bind(playerGame));
