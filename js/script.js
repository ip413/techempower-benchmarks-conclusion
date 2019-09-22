// this script is awful, but there is no point in changing it
// 
// paste this script into js console in web broswer on page with test result, 
// like https://www.techempower.com/benchmarks/#section=data-r18&hw=ph&test=json
//
// var is used in case of executing this script several times for different tests (let and const will fail)

// hellper: calculates average from array
function average(arr) {
    return arr.reduce((p, c) => p + c, 0) / arr.length;
}

// putting all tests in nested array: [["jav", 23423], ["c++", 6434245], ["java": 342] ...]
var tableElement = Array.prototype.filter.call(document.querySelectorAll("table"), t => t.clientWidth !== 0)[0]
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

// puts final array together with average values: [["java", 245345], ["c++", 2342], ....]
var resultArray = []
for (let [key, value] of Object.entries(languagesMap)) {
    let numericValue = average(value.map(i => Number(i.replace(/,/g, ''))))
    resultArray.push([key, numericValue])
}
// sorting final array
resultArray = resultArray.sort(function (a, b) {
    if (a[1] > b[1]) return -1;
    if (b[1] > a[1]) return 1;
    return 0;
});

// replace absolute result with relative result column
resultArray = resultArray.map(arr => [arr[0], (arr[1] * 100 / resultArray[0][1]).toFixed(1)]);

// printing csv
resultArray.map(v => v.join(",")).join("\n");