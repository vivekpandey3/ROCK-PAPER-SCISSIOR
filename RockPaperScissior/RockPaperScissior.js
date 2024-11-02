let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#userscore")
const compscorepara = document.querySelector("#compscore")
const gencompchoice = () =>{
    const options = ["rock","paper","scissors"];
   const randidx = Math.floor(Math.random()*3);
   return options[randidx];
};
const drawgame = () =>{
    console.log('game was draw')
      msg.innerText="Game Was Draw . Play Again!!!"
      msg.style.backgroundColor = "aqua";
};
const showwinner =(userwin) =>{
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        console.log("you win")
        msg.innerText="You Win!!!"
        msg.style.backgroundColor = "green";
    } else{
        compscore++
        compscorepara.innerText = compscore;
        console.log("you lose")
          msg.innerText="You lose!!!"
          msg.style.backgroundColor = "red";
    }
}
const playgame = (userchoice) => {
    console.log("userchoice = " , userchoice);
    const compchoice = gencompchoice();
    console.log("compchoice = " , compchoice);
  if (userchoice===compchoice){
    drawgame();
  } else{
    let userwin = true;
    if(userchoice ==='rock'){
        userwin = compchoice==='paper'?false:true;
    }else if(userchoice==='paper'){
        userwin = compchoice==='scissiors' ? false: true;
  } else{
    userwin = compchoice ==='rock'?false: true;
  }
    showwinner(userwin);
  } 
  };



choices.forEach((choice) =>{
  
choice.addEventListener("click", ( ) =>{
    const userchoice =choice.getAttribute("id");
playgame(userchoice);

});
});