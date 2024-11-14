/*

Challenge 1: Get access to the terminal!

We are in trouble. IA ΩMEGA is out of control.

Luckily, I managed to add a password to prevent you from accessing this terminal.

The system is not difficult, but it should give us enough time.

I'm going to give you a list of numbers and, next to it, the movements you should make in these numbers. 

Imagine the number padlocks that go with combinations.

The number on the left is the initial combination and the
text strings on the right are the movements you should make.

We always start from the first number on the left. The movements are:

R (Right)     move to the next digit
L (Left)      scroll to the previous digit
U (Up)        increase that digit
D (Down)      decrease the current digit

If we get to the right of the whole and receive a R, we return to the
first digit. If we receive L and we are in the first, we go to the
last. In the event that the current digit is 9 and we receive one U,
will pass to 0. And if it is D and that digit is 0, will become 9.

Do you understand? It is very important that you
understand! Look, I leave you some examples:

000 RURD -> 119
1111 URUUUU -> 4411
9999 LULULULD -> 8000

Do you get it? Okay, so to unlock the terminal you
must send the number when executing this combination:

528934712834 RDURDRUDRULLLUDUDUDUDDLLRRRR

Hurry up! We do not have much time!

Tests:

solveLock('000', 'URURD') // 119
solveLock('1111', 'UUURUUU') // 4411
solveLock('9999', 'LULULULD') // 8000
solveLock('528934712834', 'URDURUDRUDLLLLUUDDUDUDUDLLRRRR') // SOLUTION: ************

*/

export function solveLock(initialCombination: string, movementsToDo: string): string {
  //
  let currentPos = 0
  const newCombination: number[] = initialCombination.split('').map(Number)
  for (let mov of movementsToDo) {
    switch (mov) {
      case 'R':
        currentPos = currentPos + 1 >= initialCombination.length ? 0 : currentPos + 1
        break
      case 'L':
        currentPos = currentPos - 1 < 0 ? initialCombination.length - 1 : currentPos - 1
        break
      case 'U':
        newCombination[currentPos] =
          newCombination[currentPos] + 1 > 9 ? 0 : newCombination[currentPos] + 1
        break
      case 'D':
        newCombination[currentPos] =
          newCombination[currentPos] - 1 < 0 ? 9 : newCombination[currentPos] - 1
        break
    }
  }
  return newCombination.join('')
}

/*

SOLUTION: 628934712834

solveLock('528934712834', 'URDURUDRUDLLLLUUDDUDUDUDLLRRRR') // 628934712834

*/
