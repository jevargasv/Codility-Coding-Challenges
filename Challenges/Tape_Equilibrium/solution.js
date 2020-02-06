function solution(A) {
    let sum1 = 0;
    let sum2 = A.reduce(function(acc, i) {
        return acc + i;
    });

    let minDiff = Number.POSITIVE_INFINITY;
    
    for (let p = 0; p < A.length - 1; p++)
    {
        sum1 += A[p];
        sum2 -= A[p];
        let diff = sum2 - sum1;
        minDiff = Math.min(minDiff, Math.abs(diff));
    }
    
    return minDiff;
}