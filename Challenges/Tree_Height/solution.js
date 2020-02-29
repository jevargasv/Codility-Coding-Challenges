function solution(T) {
    
    let l = [];
    let r = [];
    
    if (T == null)
        return -1;
        result = 0;
        result = Math.max(result, 1 + solution(T.l));
        result = Math.max(result, 1 + solution(T.r));
    return result;
    
}
