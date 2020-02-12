# Techempower Benchmarks Conclusion
https://www.techempower.com/benchmarks is a great tool, but can't show "high level view" of performance for specific language.

Data presented in CSV files is average value for best 3 results for specific language.
Because of **average**, for specific round, number one language could be in lower places here - because of tests on slower frameworks.

This repo in not an app, lib or anything like this. 
This is only collection of scripts and data for drawing some conclusions.

## Results and conclusions
There is no perfect way of testing frameworks or languages. With even slight change of methodology we could get different conclusions. Taking 5 best results for specific language give different result than 3 best results. And taking into consideration all results, also from very slow frameworks would change results dramatically.
If you want to be sure about results you have to dive deep into data, and make your own, manual research.

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