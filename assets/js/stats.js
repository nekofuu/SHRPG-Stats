//  VARIABLES NEEDED
//  INPUT - Current Stat Total(x), Graded Stats(x), Base Level(x)
//  DEFAULT - baseStatLow(x), baseStatHigh(x), baseLevelPercent(), Earned Stats(x)
//
//
//

///////////////////////
// ELEMENT VARIABLES //
///////////////////////
var elementGradedStats = document.getElementById('gradedStats');
var elementStatTotal = document.getElementById('statTotal');
var elementBaseLevel = document.getElementById('baseLevel');
var elementEarnedStats = document.getElementById('earnedStats');
var elementCalculateButton = document.getElementById('calculateButton');
var elementErrorMsg = document.querySelectorAll('.error');
var elementSplit = document.getElementById('split');
var elementNewStats = document.getElementById('newStats');

/////////////////
// INPUT STATS //
/////////////////
var currentStatTotal = elementStatTotal.value, gradedStats = elementGradedStats.value, baseLevel = elementBaseLevel.value;

///////////////////
// DEFAULT STATS //
///////////////////
var earnedStats = 0;

///////////////////////////
// STAT TABLES VARIABLES //
///////////////////////////
/*
var levelTable = [
    { //1
        low: 0,
        high: 50
    },
    { //2
        low: 0,
        high: 50
    },
    { //3
        low: 0,
        high: 50
    },
    { //4
        low: 0,
        high: 50
    },
    { //5
        low: 0,
        high: 50
    },
    { //6
        low: 0,
        high: 50
    },
    { //7
        low: 0,
        high: 50
    },
    { //8
        low: 0,
        high: 50
    },
    { //9
        low: 0,
        high: 50
    },
    { //10
        low: 0,
        high: 50
    },
    { //11
        low: 0,
        high: 50
    },
    { //12
        low: 0,
        high: 50
    },
    { //13
        low: 0,
        high: 50
    },
    { //14
        low: 0,
        high: 50
    },
    { //15
        low: 0,
        high: 50
    },
    { //16
        low: 0,
        high: 50
    },
    { //17
        low: 0,
        high: 50
    },
    { //18
        low: 0,
        high: 50
    },
    { //19
        low: 0,
        high: 50
    },
    { //20
        low: 0,
        high: 50
    },
    { //21
        low: 0,
        high: 50
    },
    { //22
        low: 0,
        high: 50
    },
    { //23
        low: 0,
        high: 50
    },
    { //24
        low: 0,
        high: 50
    },
    { //25
        low: 0,
        high: 50
    },
    { //26
        low: 0,
        high: 50
    },
    { //27
        low: 0,
        high: 50
    },
    { //28
        low: 0,
        high: 50
    },
    { //29
        low: 0,
        high: 50
    },
    { //30
        low: 0,
        high: 50
    },
    { //31
        low: 0,
        high: 50
    },
    { //32
        low: 0,
        high: 50
    },
    { //33
        low: 0,
        high: 50
    },
    { //34
        low: 0,
        high: 50
    },
    { //35
        low: 0,
        high: 50
    },
    { //36
        low: 0,
        high: 50
    },
    { //37
        low: 0,
        high: 50
    },
    { //38
        low: 0,
        high: 50
    },
    { //39
        low: 0,
        high: 50
    },
    { //40
        low: 0,
        high: 50
    },
    { //41
        low: 0,
        high: 50
    },
    { //42
        low: 0,
        high: 50
    },
    { //43
        low: 0,
        high: 50
    },
    { //44
        low: 0,
        high: 50
    },
    { //45
        low: 0,
        high: 50
    },
    { //46
        low: 0,
        high: 50
    },
    { //47
        low: 0,
        high: 50
    },
    { //48
        low: 0,
        high: 50
    },
    { //49
        low: 0,
        high: 50
    },
    { //50
        low: 0,
        high: 50
    }
];
*/
var baseLevels = {
    //threshold = levelTable.low
    base_0: [
    { //1
        threshold: 0,
        percent: 1.0
    },
    { //2
        threshold: 101,
        percent: 0.85
    },
    { //3
        threshold: 151,
        percent: 0.70
    },
    { //4
        threshold: 201,
        percent: 0.55
    },
    { //5
        threshold: 251,
        percent: 0.40
    }], //DONE
    
    base_1: [
    { //1
        threshold: 0,
        percent: 2.0
    },
    { //2
        threshold: 301,
        percent: 1.0
    },
    { //3
        threshold: 351,
        percent: 0.85
    },
    { //4
        threshold: 401,
        percent: 0.70
    },
    { //5
        threshold: 451,
        percent: 0.55
    },
    { //6
        threshold: 501,
        percent: 0.40
    }], //DONE
    
    base_2: [
    { //1
        threshold: 0,
        percent: 3.0
    },
    { //2
        threshold: 351,
        percent: 2.0
    },
    { //3
        threshold: 551,
        percent: 1.0
    },
    { //4
        threshold: 601,
        percent: 0.85
    },
    { //5
        threshold: 651,
        percent: 0.70
    },
    { //6
        threshold: 700,
        percent: 0.55
    },
    { //7
        threshold: 751,
        percent: 0.40
    }], //DONE
    
    base_3: [
    { //1
        threshold: 0,
        percent: 4.0
    },
    { //2
        threshold: 401,
        percent: 3.0
    },
    { //3
        threshold: 601,
        percent: 2.0
    },
    { //4
        threshold: 801,
        percent: 1.0
    },
    { //5
        threshold: 851,
        percent: 0.85
    },
    { //6
        threshold: 901,
        percent: 0.70
    },
    { //7
        threshold: 951,
        percent: 0.55
    },
    { //8
        threshold: 1001,
        percent: 0.40
    }], //DONE
        
    base_4: [
    { //1
        threshold: 0,
        percent: 5.0
    },
    { //2
        threshold: 351,
        percent: 4.0
    },
    { //3
        threshold: 651,
        percent: 3.0
    },
    { //4
        threshold: 851,
        percent: 2.0
    },
    { //5
        threshold: 1051,
        percent: 1.0
    },
    { //6
        threshold: 1101,
        percent: 0.85
    },
    { //7
        threshold: 1151,
        percent: 0.70
    },
    { //8
        threshold: 1201,
        percent: 0.55
    },
    { //9
        threshold: 1251,
        percent: 0.40
    }], //DONE
    
    base_5: [
    { //1
        threshold: 0,
        percent: 6.0
    },
    { //2
        threshold: 301,
        percent: 5.0
    },
    { //3
        threshold: 601,
        percent: 4.0
    },
    { //4
        threshold: 801,
        percent: 3.0
    },
    { //5
        threshold: 1051,
        percent: 2.0
    },
    { //6
        threshold: 1301,
        percent: 1.0
    },
    { //7
        threshold: 1351,
        percent: 0.85
    },
    { //8
        threshold: 1401,
        percent: 0.70
    },
    { //9
        threshold: 1451,
        percent: 0.55
    },
    { //10
        threshold: 1501,
        percent: 0.40
    }], //DONE
    
    base_6: [
    { //1
        threshold: 0,
        percent: 7.0
    },
    { //2
        threshold: 301,
        percent: 6.0
    },
    { //3
        threshold: 551,
        percent: 5.0
    },
    { //4
        threshold: 801,
        percent: 4.0
    },
    { //5
        threshold: 1051,
        percent: 3.0
    },
    { //6
        threshold: 1301,
        percent: 2.0
    },
    { //7
        threshold: 1551,
        percent: 1.0
    },
    { //8
        threshold: 1601,
        percent: 0.85
    },
    { //9
        threshold: 1651,
        percent: 0.70
    },
    { //10
        threshold: 1701,
        percent: 0.55
    },
    { //11
        threshold: 1751,
        percent: 0.40
    }], //DONE
    
    base_7: [
    { //1
        threshold: 0,
        percent: 8.0
    },
    { //2
        threshold: 301,
        percent: 7.0
    },
    { //3
        threshold: 551,
        percent: 6.0
    },
    { //4
        threshold: 801,
        percent: 5.0
    },
    { //5
        threshold: 1051,
        percent: 4.0
    },
    { //6
        threshold: 1301,
        percent: 3.0
    },
    { //7
        threshold: 1551,
        percent: 2.0
    },
    { //8
        threshold: 1801,
        percent: 1.0
    },
    { //9
        threshold: 1851,
        percent: 0.85
    },
    { //10
        threshold: 1901,
        percent: 0.70
    },
    { //11
        threshold: 1951,
        percent: 0.55
    },
    { //12
        threshold: 2001,
        percent: 0.40
    }], //DONE
    
    base_8: [
    { //1
        threshold: 0,
        percent: 9.0
    },
    { //2
        threshold: 301,
        percent: 8.0
    },
    { //3
        threshold: 551,
        percent: 7.0
    },
    { //4
        threshold: 801,
        percent: 6.0
    },
    { //5
        threshold: 1051,
        percent: 5.0
    },
    { //6
        threshold: 1301,
        percent: 4.0
    },
    { //7
        threshold: 1551,
        percent: 3.0
    },
    { //8
        threshold: 1801,
        percent: 2.0
    },
    { //9
        threshold: 2051,
        percent: 1.0
    },
    { //10
        threshold: 2101,
        percent: 0.85
    },
    { //11
        threshold: 2151,
        percent: 0.70
    },
    { //12
        threshold: 2201,
        percent: 0.55
    },
    { //13
        threshold: 2251,
        percent: 0.40
    }], //DONE
    
    base_9: [
    { //1
        threshold: 0,
        percent: 10.0
    },
    { //2
        threshold: 301,
        percent: 9.0
    },
    { //3
        threshold: 551,
        percent: 8.0
    },
    { //4
        threshold: 801,
        percent: 7.0
    },
    { //5
        threshold: 1051,
        percent: 6.0
    },
    { //6
        threshold: 1301,
        percent: 5.0
    },
    { //7
        threshold: 1551,
        percent: 4.0
    },
    { //8
        threshold: 1801,
        percent: 3.0
    },
    { //9
        threshold: 2051,
        percent: 2.0
    },
    { //10
        threshold: 2301,
        percent: 1.0
    },
    { //11
        threshold: 2351,
        percent: 0.85
    },
    { //12
        threshold: 2401,
        percent: 0.70
    },
    { //13
        threshold: 2451,
        percent: 0.55
    }]  //DONE
};

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

function Round(value) {
    if(Math.floor(value) + 0.50 < value) {
        value = Math.round(value);
    } else {
        value = Math.floor(value);
    }
    
    return value;
}

function setValues() {
        baseLevel = elementBaseLevel.value;
        currentStatTotal = Number(elementStatTotal.value);
        gradedStats = Number(elementGradedStats.value);
        
        if(gradedStats > 50) {
            elementErrorMsg[1].textContent = "You're giving them too many stats! Stop!";
        } else if (gradedStats < 0) {
            elementErrorMsg[1].textContent = "Come on, Hitler! You have to give them something!";
        } else {
            elementErrorMsg[1].textContent = "";
        }
}

elementCalculateButton.onclick = function() {
    setValues();
    //Reset earned stats to avoid bugs
    earnedStats = 0;
    //Get level based on current stats
    var rangeLevel = 0;
    var baseArray = baseLevels[baseLevel];
    var baseRangeLimit = baseArray[Object.size(baseArray) - 1].threshold + 49;
    var percent;
    var isBaseValid, isBottomRange;
    
    if(currentStatTotal > baseRangeLimit) {
        isBaseValid = false;
        elementErrorMsg[0].textContent = "Current Stat Total outside of Base Range!";
    } else {
        elementErrorMsg[0].textContent = "";
        isBaseValid = true;
    }
    
    // If the current stat total is outside of the range, set the rangeLevel
    // to the size of the array.
    if(isBaseValid) {
        if(currentStatTotal >= (baseArray[Object.size(baseArray) - 1].threshold)) {
            rangeLevel = Object.size(baseArray) - 1;
        } else {
            // Iterate through the baseArray to find what rangeLevel we're at
            for(var i = 0; i < Object.size(baseArray); i++) {
                if(currentStatTotal > baseArray[i].threshold &&
                   currentStatTotal < baseArray[i+1].threshold) {
                    rangeLevel = i;
                }
            }
        }
    }

    while(isBaseValid && gradedStats > 0) {
        percent = baseArray[rangeLevel].percent;
        
        if(currentStatTotal + earnedStats >= baseArray[Object.size(baseArray) - 1].threshold) {
            isBottomRange = true;
        } else {
            isBottomRange = false;
        }
        
        var temp = Round(gradedStats * percent);
        
        var statsNeeded = 0;
        if(isBottomRange) {
            statsNeeded = baseRangeLimit - currentStatTotal;
            if(temp >= statsNeeded) {
                elementErrorMsg.textContent[0] = "You need to Base Up!";
                break;
            }
        } else {
            var tmp = Round((baseArray[rangeLevel + 1].threshold - 1) - (currentStatTotal));
            statsNeeded = tmp;            
        }
        
        if (temp >= statsNeeded) {
            gradedStats -= Round(statsNeeded / percent);
            console.log(gradedStats);
            earnedStats += statsNeeded;
            rangeLevel++;
        } else {
            earnedStats += temp;
            gradedStats = 0;
        }
    }
    
    var physSplit = earnedStats * 0.6, mentSplit = earnedStats * 0.4;
    
    physSplit = Round(physSplit);
    mentSplit = Round(mentSplit);
    
    elementEarnedStats.textContent = earnedStats;
    elementSplit.textContent = "(" + physSplit + "/" + mentSplit + ")";
    elementNewStats.textContent = currentStatTotal + earnedStats;
}