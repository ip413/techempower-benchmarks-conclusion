## Results for last round (18), normalized

Data source [github.com/ip413/techempower-benchmarks-conclusion/
](https://github.com/ip413/techempower-benchmarks-conclusion/tree/master/csv
)

### Conclusion

On average web apps written in:
- Rust performs more operations* than Java
- Java performs more operations* than C++ etc.

On average web apps written in:
- Rust or Java performs two times more operations* than VB, Kotlin, JavaScript or Crystal

On average web apps written in:
- Java are as fast as apps written in Nim
- Go are as fast as written in C++ or C#
- Scala are as fast as apps written in PHP

\* operations - responses, updates, queries etc.

### Data (normalized)
```
 average            cloud            physical
Rus    100        Rus    100        Rus    100
Jav     95        Jav     93        Jav     99
Nim     95        C++     81        Nim     94
C++     77        C#      71        Go      79
Go      74        Go      68        C#      74
C#      73        C       65        C++     73
C       67        Hkl     45        C       70
vb      44        vb      45        JS      46
Kot     44        Cry     42        Kot     46
JS      44        f#      42        Cry     43
Cry     43        Kot     42        vb      43
Hkl     43        JS      41        f#      42
f#      42        Sca     35        PHP     42
Sca     38        PHP     34        Sca     41
PHP     38        Clj     33        Hkl     40
Clj     35        D       29        Clj     37
Py      28        Py      27        Py      29
Lua     24        Lua     22        Lua     26
D       24        Rby     18        Rby     21
Rby     19        Grv     17        D       18
Dar     15        Prl     14        Dar     16
Grv     13        Dar     13        Grv     10
Prl     11        Eli     13        Eli      9
Eli     11        Swi     12        Swi      9
Swi     10        typ      7        Prl      9
typ      4        Ur       4        Ur       2
Ur       3        val      2        typ      1
val      1        Erl      1        Erl      1
Erl      1                          val      1
```