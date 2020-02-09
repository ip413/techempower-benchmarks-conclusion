process.stdin.on('data', processLine)

const languagesMap = {};
let resultArray = []

function calcAverage() {
    for (let [key, value] of Object.entries(languagesMap)) {
        resultArray.push([key, average(value)])
    }
    // console.log(resultArray)
    sortResultsArray()
}

function sortResultsArray() {
    resultArray = resultArray.sort(function (a, b) {
        if (a[1] > b[1]) return -1;
        if (b[1] > a[1]) return 1;
        return 0;
    });

    normalizeTo100Percent()
}

function normalizeTo100Percent() {
    resultArray = resultArray.map(row => {
        return [row[0], parseFloat(Number(row[1] * 100 / resultArray[0][1]).toFixed(1))]
    })
    console.log(resultArray.map(v => v.join(",")).join("\n"))
}

function average(arr) {
    return arr.reduce((p, c) => p + c, 0) / arr.length;
}

function processLine(lines) {
    ("" + lines).split("\n").forEach(line => {
        const splitted = line.split(",")
        const lang = splitted[0]
        const result = Number.parseFloat(splitted[1])

        if (result && lang ) {

            if (!languagesMap[lang]) {
                languagesMap[lang] = []
            }
            languagesMap[lang].push(result)
        }
    });
    // console.log(languagesMap)

    calcAverage();
}