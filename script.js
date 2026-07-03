let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");
const userScoreSpan=document.querySelector(".user-score");
const compScoreSpan=document.querySelector(".comp-score");
const genCompChoice= () =>{
    const options=["rock","paper","scissor"];
    const randomIndex=Math.floor(Math.random()*3);
    return options[randomIndex];
};

const drawGame=(userChoice)=>{
    console.log("It's a tie!");
    msg.innerText=`It is a tie! , both chose ${userChoice}`;
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScoreSpan.innerText="user: "+userScore;
        console.log("You win!"+"userScore: "+userScore+", compScore: "+compScore);
        msg.innerText=`you win! , ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScoreSpan.innerText="Computer: "+ compScore;
        console.log("You lose!"+"userScore: "+userScore+", compScore: "+compScore);
        msg.innerText=`You lose! , ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    console.log("User choice: "+userChoice);
    const compChoice=genCompChoice();
    console.log("Computer choice: "+compChoice);
    if(userChoice===compChoice){
        drawGame(userChoice);
    }else {
        let userWin=true;
        if(userChoice==="rock" && compChoice==="paper"){
            userWin=false;
        }else if(userChoice==="paper" && compChoice==="scissor"){
            userWin=false;
        }else if(userChoice==="scissor" && compChoice==="rock"){
            userWin=false;
        }else{
            userWin=true;
        }
        showWinner(userWin,userChoice,compChoice);
        // Add more conditions for other winning scenarios
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
