
//Dice Rolls
const rollD100 = () => Math.floor(Math.random() * 100) + 1;
const rollD20 = () => Math.floor(Math.random() * 20) + 1;
const rollD4 = () => Math.floor(Math.random() * 4) + 1;
const rollD3 = () => Math.floor(Math.random() * 3) + 1;
const rollD2 = () => Math.floor(Math.random() * 2) + 1;
const rollD10 = () => Math.floor(Math.random() * 10) + 1;


const calculateProbability = () => rollD100();


const findCoins = () => rollD4();


const calculateWeaponDamage = () => rollD10();


const dailyHealing = () => rollD3();


const gamblerBet = () => rollD2();


const kmsAdvancedPerDay = () => rollD10();



//Day Cycles
const morningCycle = () => { 
    console.log("Morning cycle started.");

    const restPhase = () => {
        console.log("Rest phase started.");
        
    };

    const gatheringPhase = () => {
        console.log("Gathering phase started.");

    };

    restPhase();
    gatheringPhase();
};


const noonCycle = () => { 
    console.log("Noon cycle started.");

};

const afternoonCycle = () => { 
    console.log("Afternoon cycle started.");

};


const nightCycle = () => { 
    console.log("Night cycle started.");

};


const calculateDayCycle = () => {

    morningCycle();
    noonCycle();
    afternoonCycle();
    nightCycle();
}

