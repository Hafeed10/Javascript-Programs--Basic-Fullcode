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


let maxTotalMarks = -1; // Initialize with a very low value

for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let totalMarks = student.marks.reduce((sum, mark) => sum + mark, 0);

    if (totalMarks > maxTotalMarks) {
        maxTotalMarks = totalMarks;
        topper_name = student.name;
        topper_class = student.class;
    }
}

console.log("Topper Name: " + topper_name);
console.log("Topper Class: " + topper_class);
