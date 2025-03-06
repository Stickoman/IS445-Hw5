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

const cLastNameResults = studentList
    .filter(student => student.lastName.startsWith("C"))
    .map(student => {
        const {scores} = student;

        const minScore = scores.reduce((min, score) => (score < min ? score : min), scores[0]);
        const maxScore = scores.reduce((max, score) => (score > max ? score : max), scores[0]);
        const avgScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;

        return {
            firstName: student.firstName,
            lastName: student.lastName,
            minScore,
            maxScore,
            avgScore: avgScore.toFixed(2)
        };
    });

console.log(cLastNameResults);

document.addEventListener("DOMContentLoaded", () => {
    const outputDiv = document.getElementById("output");

    cLastNameResults.forEach(student => {
        let p = document.createElement("p");
        p.classList.add("result");
        p.textContent = `${student.firstName} ${student.lastName} - Min Score: ${student.minScore}, Max Score: ${student.maxScore}, Avg Score: ${student.avgScore}`;
        outputDiv.appendChild(p);
    });
});
