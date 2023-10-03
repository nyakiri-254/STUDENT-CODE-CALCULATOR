// Function to calculate the grade based on scores
function calculateGrade() {
    // Get input values
    const programmingScore = parseFloat(document.getElementById("c").value) || 0;
    const mathsScore = parseFloat(document.getElementById("mt").value) || 0;
    const phpScore = parseFloat(document.getElementById("ph").value) || 0;
    const javaScore = parseFloat(document.getElementById("ja").value) || 0;
    const csaScore = parseFloat(document.getElementById("csa").value) || 0;

    // Calculate the total and percentage
    const totalScore = programmingScore + mathsScore + phpScore + javaScore + csaScore;
    const percentage = (totalScore / 500) * 100;

    // Determine the grade based on percentage
    let grade = "";
    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    // Display the result in the result div
    const resultDiv = document.querySelector(".result");
    resultDiv.innerHTML = `
        <h2>Result</h2>
        <p>Total Score: ${totalScore}</p>
        <p>Percentage: ${percentage.toFixed(2)}%</p>
        <p>Grade: ${grade}</p>
    `;
}

// Add an event listener to the "Show result" button
const calculateButton = document.querySelector("button[type='button']");
calculateButton.addEventListener("click", calculateGrade);

   

