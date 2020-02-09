# Techempower Benchmarks Conclusion
https://www.techempower.com/benchmarks is a great tool, but can't show "high level view" of performance for specific language.

Data presented in CSV files is average value for all tests done for specific language. This is why for specific round, number one language could be in lower places here - because of tests on slower frameworks.
Slower frameworks makes final results for specific language worse.

This repo in not an app, lib or anything like this. 
This is only collection of scripts and data for drawing some conclusions
about current state of programming languages.

## Results for last round (18) - results normalized to best result (100)
Data in this table comes from **csv/round18-aggregated\*** files.

Conclusions: C faster than Rust, Rust faster than VB, VB faster than Go... etc

```
   average          cloud           physical   
C         100    C         100    C         100
Rus        91    Rus      96.6    Rus      83.9
vb       80.6    vb       83.2    vb       74.1
Go       74.8    Go       76.1    Go         70
Jav      65.2    Hkl      67.5    Jav      60.1
Cry      63.1    Jav      67.2    Cry      56.9
Hkl        61    Cry      66.3    f#       53.3
f#       59.6    f#       63.1    Hkl      51.6
C#       51.8    C#       54.6    C++      50.5
C++      48.8    Kot      48.1    C#       46.6
Kot      47.8    C++        45    Kot      45.2
Lua      42.6    Lua      40.6    Lua      42.8
Sca      35.1    D        36.9    Sca      33.1
Clj        35    Clj      36.3    Clj        32
D        29.5    Sca      35.4    Dar      27.8
Dar      26.9    Grv      28.8    JS       25.6
JS       25.9    JS         25    PHP      23.9
PHP      24.2    Dar      24.8    D        20.7
Grv      22.4    PHP      23.4    Eli      16.1
Eli        20    Eli        23    Grv      14.8
Swi        15    Swi      17.8    Rby      13.7
Prl      14.8    Py         15    Py       13.1
Py       14.4    Prl      13.9    Prl      12.6
Rby      13.7    Rby      13.1    Swi      11.5
typ       7.4    typ        13    Ur        2.8
Ur        5.3    Ur        7.5    typ       1.3
val       1.7    val       2.7    Erl       0.6
Erl       0.7    Erl       0.8    val       0.6
```

## Contribution
- go to tech https://www.techempower.com/benchmarks
- click on some benchmark (bars with results should be shown)
- paste script.js content into devtools console
- data in console output are related to the chosen language and context (physical/cloud)

## Files
All files with data are placed in **csv** dir.
All files with world **aggregated** are aggregated form all other files - this is the final product of this repo.
All other files comes directly form techempower.com console output.

## TODO
- add bar chart generation from csv http://www.data-forge-js.com/