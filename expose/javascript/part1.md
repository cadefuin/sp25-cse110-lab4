1. 20
2. 20
3. Since var can be accessed outside of its block, it can be difficult to control and track changes to it.
4. 20
5. The code returns a ReferenceError because `let` only defines `result` within the `if` block. Line 13 is trying to access `result` from outside of the defined code block.
6. The code returns a TypeError because `const` prevents `result` from being overwritten. Line 7 attempts to rewrite `result`.
7. Line 13 does not execute because of the error at line 7.
8. 