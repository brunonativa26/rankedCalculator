function rankedLevel(victory, defeat) {
    //Calcula os pontos de vitoria
    let   victoryBalance = victory - defeat; 

    //Determina o nível com base no saldo de vitórias
    
    let level;

    if (victoryBalance < 10) {
        level = "iron";
    } 
     else if (victoryBalance >= 11 && victoryBalance <= 20) {
        level = "bronze";
    }
     else if (victoryBalance >= 21 && victoryBalance <=  50) {
        level = "silver";
    }
     else if (victoryBalance >= 51 && victoryBalance <= 80) {
        level = "Gold"; 
    }
     else if (victoryBalance >= 81 && victoryBalance <= 90) {
        level = "diamond";
    }  
     else if (victoryBalance >= 91 && victoryBalance <= 100) {
         level = "legendary";
    }
     else {
        level = "immortal";
     }
      //return msg saida
  return `O herói tem um balance de ${victoryBalance} está no level ${level}!`;
 }

    let victory = 120;
    let defeat = 15;
    const  result = rankedLevel(victory, defeat);
    console.log(result);
