/* function Monday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
}

function Tuesday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
}

function Wednesday() {
    console.log("Go for a five-mile run");
    console.log("Go for a five-mile run");
}

function Thursday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
}

function Friday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
}

// We can make this shorter!

function runFiveMiles() {
    console.log("Go for a five-mile run");
}
function liftWeights() {
    console.log("Pump iron");
}
function swimFortyLaps() {
    console.log("Swim 40 laps");
}

function monday() {
    runFiveMiles();
    liftWeights();
}

// We can make this even shorter!

function excerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
}

function Monday() {
    excerciseRoutine(liftWeights);
}

function excerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
}
*/

// INLINE FUNCTIONS

/* excerciseRoutine(function() {
    console.log("Stretch! Work that core!");
});
// "Go for a five-mile run"
// "Stretch! Work that core!"

// We can rewrite this to be more concise by using arrow functiom:
excerciseRoutine(() => {
    console.log("Stretch! Work that core!");
});

// or even shorter
excerciseRoutine(() => console.log("Stretch! Work that core!")); 
*/

/* function morningRoutine(excercise) {
    let breakfast;
    if (excercise === liftWeights) {
        breakfast = "protein bar";
    } else if (excercise === swimFortyLaps) {
        breakfast = "kale smoothie";
    } else {
        breakfast = "granola";
    }
    excerciseRoutine(excercise);
    return function() {
        console.log (`nom nom, this ${breakfast} is delicious!`);
    };
}

const afterExcercise = morningRoutine(liftWeights);
// LOG: Go for a five-mile run
// LOG: Pump Iron
afterExcercise;
//=> f() { console.log(`nom nom, this ${breakfast} is delicious!`); }
*/

function receivesAFunction(callback){
    console.log(callback());
}
receivesAFunction(Spy);

function returnsANamedFunction(){
    return function logan(){
    }
}

function returnsAnAnonymousFunction(){
    return function(){

    }
}

