// Cyclic Rotation (Practice)

function solution(A, K) {
    
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
