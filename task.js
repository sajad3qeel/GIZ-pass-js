let fs = require("fs");

let numbers = [
    5,
    8,
    0,
    1,
    9,
    11,
    15,
    16
];

let data = fs.readFileSync('data.txt', 'utf8').split(',');
let output = ASC(data.map(Number)).toString();

//write data To File
function writeToFile(name,data) {
    fs.writeFile(name, data, (err) => {
        if (err) console.log(err);
        console.log("Successfully Written to File.");
    });
}
// asc sorting
function ASC(numbers){
    for(let i = 0 ; i < numbers.length ; i++)
    {
        for(let j = 0 ; j < numbers.length; j++)
        {
            if(numbers[j] > numbers[j + 1])
            {
                let temp = numbers[j];
                numbers[j] = numbers[j + 1]
                numbers[j + 1] = temp;
            }
        }
    }
    return numbers
}
// Desc sorting
function DESC(numbers){
    for(let i = 0 ; i < numbers.length ; i++)
    {
        for(let j = 0 ; j < numbers.length; j++)
        {
            if(numbers[j] < numbers[j + 1])
            {
                let temp = numbers[j];
                numbers[j] = numbers[j + 1]
                numbers[j + 1] = temp;
            }
        }
    }
    return numbers
}

// output
writeToFile("output.txt",output)

console.log("Original numbers list: ", numbers)
console.log("Numbers list After sorting: ", ASC(numbers))
console.log("Numbers list After Desc sorting: ", DESC(numbers))
