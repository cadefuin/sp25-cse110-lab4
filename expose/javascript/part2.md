1. Line 12 prints `3` because `var` makes `i` accessible outside of the `for` loop. The `for` loop ends when `i = 3`, so that value is printed by line 12.
2. Line 13 prints `150` because `var` makes `discountedPrice` accessible outside of the `for` loop. In the last iteration of the `for` loop, `discountedPrice = 150`, so that value is printed by line 13.
3. Line 13 prints `150` because the last iteration of the `for` loop assigns `150` to `finalPrice`.
4. This function returns a list of the discounted prices `[50, 100, 150]` because line 9 pushes each `finalPrice` from each `for` loop iteration to the end of the array.
5. The code returns a ReferenceError because `let` makes `i` only accessible within the `for` loop. Line 12 attempts to access `i` outside of the `for` loop.
6. The code returns a ReferenceError because `let` makes `discountedPrice` only accessible within the `for` loop. Line 13 attempts to access `discountedPrice` outside of the `for` loop.
7. Line 14 prints `150` because the last iteration of the `for` loop assigns `150` to `finalPrice`. There are no issues because `let` allows `finalPrice` to be accessible within the same block.
8. This function returns a list of the discounted prices `[50, 100, 150]` because line 9 pushes each `finalPrice` from each `for` loop iteration to the end of the array. `let` allows `discounted` to be accessible in the same block and within the `for` loop, so no issues arise.
9. The code returns a ReferenceError because `let` makes `i` only accessible within the `for` loop. Line 11 attempts to access `i` outside of the `for` loop.
10. Line 12 prints `3` because `length` is assigned the length of the given `prices` array, which is `3`. There are no issues with accessing this `const` variable within the same block.
11. This function returns a list of the discounted prices `[50, 100, 150]` because line 8 pushes each `discountedPrice` from each `for` loop iteration to the end of the array. `const` prevents the array value from being reassigned, but `push()` is allowed.
12. a. `student.name`
    b. `student['Grad Year']`
    c. `student.greeting();`
    d. `student['Favorite Teacher'].name`
    e. `student.courseLoad[0]`
13. a. `32` because `2` is converted to the string `'2'`.
    b. `1` because `'3'` is converted to the integer `3`. Strings cannot be subtracted.
    c. `3` because `null` is converted to the integer `0`.
    d. `3null` because `null` is converted to the string `'null'`.
    e. `4` because `true` is converted to the integer `1`.
    f. `0` because `false` and `null` are both converted to the integer `0`.
    g. `3undefined` because `undefined` is converted to the string `'undefined'`.
    h. `NaN` because undefined cannot be converted to a string, and strings cannot be subtracted.
14. a. `true` because `'2'` is converted to the integer `2`, which is greater than `1`.
    b. `false` because string comparison identifies the first character `'2'` as greater than `'1'`.
    c. `true` because `'2'` is converted to the integer `2`, which is equal to `2`.
    d. `false` because `2` and `'2'` are different types.
    e. `false` because `true` is converted to the integer `1`, which is not equal to `2`.
    f. `true` because `Boolean(2)` is converted to `true` since it is not `0`.
15. `==` checks equality after type conversion, while `===` checks equality without type conversion.
16. (See [part2-question16.js](part2-question16.js))
17. The result will be the array `[2, 4, 6]`. This is the result because the `for` loop iterates over the given array `[1, 2, 3]`, multiplies each element by 2 (using `callback()` which refers to the function `doSomething()`), and pushes each element to `newArr`.
18. (See [part2-question18.js](part2-question18.js))
19. The output is:
```
1
4
3
2
```