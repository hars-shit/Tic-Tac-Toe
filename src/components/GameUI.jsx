import React, { useState } from "react";
import '/home/harshit/Desktop/React/tic-tac-toe/src/styles/GameUI.css';
function GameUI(){
    
   const [chance,setChance]=useState(Array(9).fill(''));

//    for changing user O from X ->
   const [move,setMove]=useState('X');
   const handleClick=(e)=>{
    console.log(`new Array :`,move);
    console.log(`Chance:`,chance)

    // forming new array to save the user steps 
   let newArr=[...chance];
   newArr[e]=move;
   setChance(newArr);
   if(move==='X'){
    setMove("O");
   }
   else{
    setMove("X");
   }
  
   if(chance[e] !== ''){
    alert("Already Clicked !!");
    return;
   }
   if(checkWin(newArr)){
    alert("Winner");
    chance.fill("");
    setChance(chance);
    return;
   }
   if(checkDraw(newArr)){
    alert("Match Draws");
    return;
   }
}

// for check if the user win or not ->
  const checkWin=(chance)=>{
    const conditions=[

        // every winning conditions 
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,6,8],
        [0,4,8],
        [2,4,6]
    ]
    let flage=false;
   conditions.forEach(element=>{
    if(chance[element[0]] !=='' && chance[element[1]] !== '' && chance[element[2]]!==''){
            // checking if it match any conditon or not
        if(chance[element[0]] === chance[element[1]] && chance[element[1]] === chance[element[2]]){
           flage=true;
        }
       
    }
})
return flage;
}
 
// for draw 

const checkDraw=(chance)=>{
    let count =0;
    chance.forEach(element=>{
        if(element !== ''){
            count++;
        }
    });
    if(count >= 9){
        return true;
    }
}
return(
    <>
   
    <div className="main-container-for-game">
    
    <div className="upper-container">
        <img src="https://media.istockphoto.com/id/531507581/vector/panda-in-welcoming-gesture.jpg?s=612x612&w=0&k=20&c=7eFeNjGUMPoLVaLqkcRZhd0Q7kFZjjU_BA3NHn6pVSI=" alt="" />
        <div className="heading">ENJOY TIC-TAC-TOE</div>
        </div>

        <div className="game-container">
            <button id="btn-1"     onClick={()=>handleClick(0)}>{chance[0]}</button>
            <button id="btn-2"    onClick={()=>handleClick(1)}>{chance[1]}</button>
            <button id="btn-3"    onClick={()=>handleClick(2)}>{chance[2]}</button>
            <button id="btn-4"   onClick={()=>handleClick(3)}>{chance[3]}</button>
            <button id="btn-5"   onClick={()=>handleClick(4)}>{chance[4]}</button>
            <button id="btn-6"   onClick={()=>handleClick(5)}>{chance[5]}</button>
            <button id="btn-7"  onClick={()=>handleClick(6)}>{chance[6]}</button>
            <button id="btn-8" onClick={()=>handleClick(7)}>{chance[7]}</button>
            <button id="btn-9"   onClick={()=>handleClick(8)}>{chance[8]}</button>
        </div>
    </div>
    </>
)
}
export default GameUI;