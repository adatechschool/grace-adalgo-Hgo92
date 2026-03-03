export function fibonacci(num : number) {
    if (num == 0) return []
    if (num == 1) return [0]
    if (num == 2) return [0, 1]
    
    let array : number[] = [0, 1];
    for (let i = 2; i < num; i++) {
        array.push((array[i-1] + array[i-2]))
    }
    return array
}

/*
This function generates the Fibonacci sequence.

The Fibonacci sequence starts with 0 and 1.
Each next number is the sum of the two previous numbers.

The function takes a number as parameter,
which represents how many elements of the sequence
should be generated.

If the number is 0, the function should return an empty array.
If the number is 1, it should return [0].
If the number is 2, it should return [0, 1].

For example:

const max = 5
fibonacci(max) => return 0, 1, 1, 2, 3

const max = 1
fibonacci(max) => return 0

const max = 0
fibonacci(max) => return []
*/

