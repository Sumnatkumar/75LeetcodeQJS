var canVisitAllRooms = function(rooms) {
    let visited = new Array(rooms.length).fill(false); // Track visited rooms
    let count = 0; // Track the number of rooms visited

    function dfs(room) {
        if (visited[room]) return; // Skip if already visited
        visited[room] = true; // Mark the room as visited
        count++; // Increment visited count

        for (const key of rooms[room]) {
            dfs(key); // Visit the rooms for which we have keys
        }
    }

    dfs(0); // Start DFS from room 0

    return count === rooms.length; // Check if all rooms are visited
};
// var canVisitAllRooms = function(rooms) {
//     let visited = new Array(rooms.length).fill(false);
//     let queue = [0]; // Initialize the queue with room 0
//     visited[0] = true;
//     let count = 1;

//     while (queue.length) {
//         let room = queue.shift(); // Visit the room

//         for (const key of rooms[room]) {
//             if (!visited[key]) {
//                 visited[key] = true;
//                 queue.push(key); // Add the new room to the queue
//                 count++;
//             }
//         }
//     }

//     return count === rooms.length; // Check if all rooms are visited
// };
let rooms = [
    [1],
    [2],
    [3],
    []
];
console.log(canVisitAllRooms(rooms)); // Output: true