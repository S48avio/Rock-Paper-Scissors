let user = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
let userscore=document.querySelector("#user-score");
let compscores=document.querySelector("#comp-score");
const Generate=()=>
{
    const options=["rock","paper","scissors"]
    const randindex=Math.floor(Math.random()*3);
    return options[randindex];
}
const PlayGame=(userChoice)=>
{
    console.log("User choice:", userChoice);
    //genertae computer choice
    const compchoice=Generate();
    console.log("Compchoice:", compchoice);
    if (compchoice=="rock" && userChoice=="paper"){
        user++;
        msg.innerText = `You won!!!!!.Userchoice- ${userChoice} and comp-${compchoice}`;
        msg.style.backgroundColor="green";

    }
    else if(compchoice=="paper" && userChoice=="scissors"){
        user++;
        msg.innerText = `You won!!!!!.Userchoice- ${userChoice} and compchoice-${compchoice}`;
        msg.style.backgroundColor="green";

        
    }
    else if(compchoice=="scissors" && userChoice=="rock"){
        user++;
        msg.innerText = `You won!!!!!.Userchoice- ${userChoice} and compchoice-${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else if(compchoice=="rock" && userChoice=="scissors"){
        compscore++;
        msg.innerText = `You Lose!!!!!.Userchoice- ${userChoice} and compchoice-${compchoice}`;
        msg.style.backgroundColor="red";

    }
    else if(compchoice=="paper" && userChoice=="rock"){
        compscore++;
        msg.innerText = `You Lose!!!!!.Userchoice- ${userChoice} and compchoice-${compchoice}`;
        msg.style.backgroundColor="red";
    }
    else if(compchoice=="scissors" && userChoice=="paper"){
        compscore++;
        msg.innerText = `You Lose!!!!!.Userchoice- ${userChoice} and compchoice-${compchoice}`;
        msg.style.backgroundColor="red";
    }
    else{
        msg.innerText = "Its a Draw.Try Again";
        msg.style.backgroundColor="blue";
    }

    userscore.innerText=user;
    compscores.innerText=compscore;

  



}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        
        PlayGame(userChoice);

    });
});