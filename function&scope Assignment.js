// --------------------------------------------------------------------------Exercise 1---------------------------------------------------------
function calculateFee(monthPayments,timePayments){
    let realPayment = monthPayments - 3*timePayments - monthPayments*0.01
    return realPayment 
}



//-------------------------------------------------------------------------- Exercise 2---------------------------------------------------------
// part 1 
function welcome(...name){
    let welcome = "welcome";
    for(let i = 0; i < name.length; i++){
        welcome += " " + name[i];
    }
    return welcome;
}
// console.log(welcome("vit", "bright", "poohbear"))
// part 2 
function calculateAge(birthYear,presentYear){
    return age = presentYear-birthYear
}
// part 3 
function welcomeCard(presentYear, name, birthYear){
    let welcomeCard = ""
    for(i=0;i<name.length;i++){
        welcomeCard += `welcome ${name[i]}, you are ${presentYear-birthYear[i]}. `
    }
    return welcomeCard
}

// console.log(welcomeCard(2023,['vit','bright','poohbear'],[1996,1997,2000]))

//-------------------------------------------------------------------------- Exercise 3---------------------------------------------------------

// part1 
function checkPass(point){
    if(point>=5){
        return true;
    }else{
        return false;
    }
}
// part 2 
function findExcellentGrade(point){
    if(point>=8){
        return "Excellent";
    }else{
        return "Good point try hader but don't forget some rest and play!!!";
    }
}
// part 3 
function findPerfectGrade(point){
    if(point === 11){
        return "Perfect Score!!!";
    }else{
        return "Don't be serious"
    }
}