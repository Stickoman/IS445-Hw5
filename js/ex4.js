const studentList = [
    {
        firstName: "Allan",
        lastName: "Able",
        scores: [95, 85, 92, 98]
    },
    {
        firstName: "Amy",
        lastName: "Alexander",
        scores: [80, 88, 100]
    },
    {
        firstName: "Betty",
        lastName: "Barns",
        scores: [70, 80, 90, 100]
    },
    {
        firstName: "Bob",
        lastName: "Bones",
        scores: [75, 85, 95, 85]
    },
    {
        firstName: "Cindy",
        lastName: "Chase",
        scores: [95, 90, 92, 98]
    },
    {
        firstName: "Charles",
        lastName: "Chips",
        scores: [88, 99, 90]
    },
];

studentList.forEach(student => {
    student.scores = student.scores.map(score => score + 5);
});

studentList.forEach(student => {
    const total = student.scores.reduce((sum, score) => sum + score, 0);
    const avgScore = total / student.scores.length;
    student.scores.push(avgScore);
});

console.log("Output:");
studentList.forEach(student => {
    console.log(`Full name (last, first): ${student.lastName}, ${student.firstName}`);
    console.log(`Updated scores are: ${student.scores.join(",")}`);
});

document.addEventListener("DOMContentLoaded", () => {
    const outputDiv = document.getElementById("output");

    studentList.forEach(student => {
        let studentInfo = document.createElement("p");
        studentInfo.classList.add("result");
        studentInfo.innerHTML = `<strong>Full name (last, first):</strong> ${student.lastName}, ${student.firstName}<br>
                                 <strong>Updated scores are:</strong> ${student.scores.join(", ")}`;
        outputDiv.appendChild(studentInfo);
    });
});
