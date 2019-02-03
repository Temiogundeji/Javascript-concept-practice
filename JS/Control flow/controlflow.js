function rand(m,n){
    return m + Math.floor((n-m+1)*Math.random());
}
function randFace() {
    return ["crown", "anchor", "heart", "spade", "club", "diamond"]
    [rand(0, 5)];
}
//Starting condition
let fund = 50;
let  rand = 0;

while(fund > 1 && fund < 100){
    round++;
    console.log(`round ${round}`);
    console.log(`\t Starting fund is ${fund}p`);

    //place bet
    let bets = { crown: 0, anchor: 0, heart: 0,
         spade: 0, club: 0, diamond: 0 };
    let totalBet = rand(1, fund);

    if(totalBet == 7){
        totalBet = fund;
        bets.heart = totalBet;
    }
    else{
        let remaining = totalBet;
        do{
            
        }while(remaining > 0);
    }
}

