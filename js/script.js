/**
 * This script is awful... I have no time deal with it.
 * 
 * Paste this script into js console in web browser on page with test result,
 * like https://www.techempower.com/benchmarks/#section=data-r18&hw=ph&test=json
 * 
 * Manually save data printed in console to csv file.
 * 
 * Note: var is used in case of executing this script several times for different 
 * tests (let and const will fail) and reloading page every time is a waste of time.
 */

(function getData(document) {
    // html element with data
    var tableElement = Array.prototype.filter.call(document.querySelectorAll("table"), t => t.clientWidth !== 0)[0]

    // [["jav", 23423], ["c++", 6434245], ["java": 342] ...]
    var allTestsArray = [];
    tableElement.querySelectorAll(".datarow").forEach((element) => { allTestsArray.push([element.children[2].textContent, element.children[6].textContent]) })

    // keeps all results for specific language: {"c++": [43534, 356345], "rust": [123,23552,676] ...}
    var languagesMap = {};
    allTestsArray.forEach((record) => {
        if (record[0] !== "—") {
            if (!languagesMap[record[1]]) {
                languagesMap[record[1]] = []
            }
            languagesMap[record[1]].push(record[0])
        }
    })

    // take only few best results for every language
    for (let [key, value] of Object.entries(languagesMap)) {
        languagesMap[key] = value.map(v => parseInt(v.replace(/,/g, ''))).sort((a, b) => b-a).slice(0, 3);
    }
    // console.log(languagesMap)

    // put final array together with average values: [["java", 245345], ["c++", 2342], ....]
    var resultArray = []
    for (let [key, value] of Object.entries(languagesMap)) {
        resultArray.push([key, value.reduce((p, c) => p + c, 0) / value.length])
    }
    // console.log(resultArray)

    // sort final array
    resultArray = resultArray.sort(function (a, b) {
        if (a[1] > b[1]) return -1;
        if (b[1] > a[1]) return 1;
        return 0;
    });

    // replace absolute result with relative result column
    resultArray = resultArray.map(arr => [arr[0], Math.round(arr[1] * 100 / resultArray[0][1])]);

    // printing csv
    var csvData = resultArray.map(v => v.join(",")).join("\n");

    // print final result
    console.log(csvData)
})(document)