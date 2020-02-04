function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    let rotatedArray = A;
    
    while (K > 0) {
        let currentArray = rotatedArray.slice();
        
        for (let i = 0; i < currentArray.length; i++) {
            rotatedArray[(i + 1) % currentArray.length] = currentArray[i];
        }
        K--;
    }
    
    return rotatedArray;
}