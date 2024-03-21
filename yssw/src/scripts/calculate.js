

function aveCalculate(allscore){
    var aveScore = 0;
    allscore.forEach(score => {
        aveScore += score;
    });
    aveScore /= allscore.length;
    return aveScore;
}

function prCalculate(){

}

export {aveCalculate,prCalculate};