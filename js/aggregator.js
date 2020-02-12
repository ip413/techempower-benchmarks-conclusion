/**
 * Usage:
 * cat csv/round18-cloud-* | node js/aggregator.js > csv/round18-aggregated-cloud.csv
 * cat csv/round18-physical-* | node js/aggregator.js > csv/round18-aggregated-physical.csv
 * cat csv/round18-cloud-* csv/round18-physical-* | node js/aggregator.js > csv/round18-aggregated.csv
 */

const languagesMap = {};
let resultArray = [];

process.stdin.on('data', processLine);


/**
 * Creates languagesMap which looks like
 * {
 *     C: [ 100, 70.5, 88 ...],
 *     Rus: [ 75.5, 83.8, 63.9 ...],
 *     vb: [ 50.3, 62, 70.2 ...],
 *     [...]
 * }
 * @param {String} lines
 */
function processLine(lines) {
    ("" + lines).split("\n").forEach(line => {
        const splitted = line.split(",")
        const lang = splitted[0]
        const result = Number.parseFloat(splitted[1])

        if (result && lang) {
            if (!languagesMap[lang]) {
                languagesMap[lang] = [];
            }
            languagesMap[lang].push(result);
        }
    });
    // console.log(languagesMap)
    calcAverage();
}

function calcAverage() {
    for (let [key, value] of Object.entries(languagesMap)) {
        resultArray.push([key, average(value)]);
    }
    sortResultsArray();
}

function sortResultsArray() {
    resultArray = resultArray.sort(function (a, b) {
        if (a[1] > b[1]) return -1;
        if (b[1] > a[1]) return 1;
        return 0;
    });

    normalizeTo100Percent();
}

function normalizeTo100Percent() {
    resultArray = resultArray.map(row => {
        return [row[0], Math.round((Number(row[1] * 100 / resultArray[0][1]).toFixed(1)))];
    })
    // this is final result for script run
    console.log(resultArray.map(v => v.join(",")).join("\n"));
}

/* HELPERS */
function average(arr) {
    return arr.reduce((p, c) => p + c, 0) / arr.length;
}