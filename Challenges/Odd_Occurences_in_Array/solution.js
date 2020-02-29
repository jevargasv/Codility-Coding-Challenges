function solution(A) {
    
    let result;
    let array = A.sort(function(a, b) {
        return (a - b);
    });
    
    for (let i = 0; i < array.length; i+=2) {
        if ((array[i] !== array[i + 1]) || i + 1 == array.length) return array[i];
    }
}
