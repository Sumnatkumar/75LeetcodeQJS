// var predictPartyVictory = function(senate) {
//     let queueR = []; // Queue for Radiant senators
//     let queueD = []; // Queue for Dire senators

//     // Initialize the queues with the indexes of 'R' and 'D' senators
//     for (let i = 0; i < senate.length; i++) {
//         if (senate[i] === 'R') {
//             queueR.push(i);
//         } else {
//             queueD.push(i);
//         }
//     }

//     // Simulate the rounds
//     while (queueR.length > 0 && queueD.length > 0) {
//         let rIndex = queueR.shift(); // Get the front Radiant senator
//         let dIndex = queueD.shift(); // Get the front Dire senator

//         // The senator with the smaller index bans the other
//         if (rIndex < dIndex) {
//             queueR.push(rIndex + senate.length); // Move to next round
//         } else {
//             queueD.push(dIndex + senate.length);
//         }
//     }

//     // The party with remaining senators wins
//     return queueR.length > 0 ? "Radiant" : "Dire";
// };
var predictPartyVictory = function(senate) {
    let senateArray = senate.split("");
    let stack = [];
    for (let s of senateArray) {
        if (!stack.length || stack[stack.length - 1] == s) {
            stack.push(s);
        } else {
            senateArray.push(stack.pop());
        }
    }
    return stack[0] == 'R' ? 'Radiant' : 'Dire';
};
console.log(predictPartyVictory("RD"));