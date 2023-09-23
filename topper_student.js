
let students = [
    {
        name: "Muhammed",
        class: 2,
        division: "A",
        marks: [10, 15, 25, 22, 20],
    },
    {
        name: "Hafeez",
        class: 3,
        division: "B",
        marks: [12, 15, 35, 12, 20],
    },
    {
        name: "Salman",
        class: 4,
        division: "C",
        marks: [20, 15, 15, 22, 20],
    },
    {
        name: "Rashid",
        class: 2,
        division: "A",
        marks: [10, 15, 25, 21, 20],
    },
    {
        name: "Hamid",
        class: 5,
        division: "D",
        marks: [14, 11, 25, 22, 10],
    },
    {
        name: "Sabith",
        class: 6,
        division: "F",
        marks: [11, 25, 25, 12, 20],
    }
];

let topper_name = "";
let topper_mark = 0;

for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let totalMarks = student.marks.reduce((acc, mark) => acc + mark, 0);

    if (totalMarks > topper_mark) {
        topper_name = student.name;
        topper_mark = totalMarks;
    }
}

console.log("Topper's Name:", topper_name);
console.log("Topper's Total Marks:", topper_mark);
