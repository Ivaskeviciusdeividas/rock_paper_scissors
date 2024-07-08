const moveList=["rock", "paper", "scissors"]; //list of moves with a winning order ascending

// function for randomized computer answer
let computerMove_func=(moveList)=>{
    const amntDifferent=moveList.length;
    return Math.floor(Math.random()*amntDifferent); //returns move index
}
//console.log(computerMove()); // checking randomized answer

let playerMove_func=(moveList)=>{

    const printMoves=(moveList)=>{
        let baseString="Please input your move out of the following choices : ";
        for(let i=0; i<moveList.length;i++)
            {
            if(i===moveList.length-1){
                baseString+=`${moveList[i]}. `;
                }
            else{
                baseString+=`${moveList[i]}, `;
                }
            }
        return baseString;
    };
    let myMove = prompt(printMoves(moveList));
    if(moveList.includes(myMove)){
    return moveList.indexOf(myMove)  // returns player move index
    }
    else{
        return -1;
    }      
}
const prompt=require("prompt-sync")();

//console.log(playerMove(moveList));

function playGame(movesList, tryAgain){
    do{
        
        console.log("Game start\n");
        let playerMove=playerMove_func(movesList);
        let computerMove=computerMove_func(movesList);
        if(playerMove!==-1){        // check if the prompt satisfies the list
            console.log(`Your move : ${movesList[playerMove]}`);
            console.log(`Computer move : ${movesList[computerMove]}`);
            if(playerMove===computerMove)
                console.log("It's a draw");
            else if(playerMove===0 && (computerMove===(movesList.length-1)))
                console.log("You Win");
            else if((playerMove>computerMove)&&(playerMove===(computerMove+1)))
                console.log("You Win");
            else{
            console.log("You Lose");
        }
    }else{
        console.log("no such move is available");
    }

        let reset=prompt("Try again?");
        reset==="yes"?tryAgain=1:tryAgain=0;
        
    }while(tryAgain>0);

}

let tryAgain=1;
playGame(moveList,tryAgain);