function reverse(x: number): number {
    let result = ''
    const arg = String(x).split('')

    for(let i=arg.length-1; i>=0; i--) {
        result += arg[i]
    }
    return Number(result)
};