document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('clickMeButton').addEventListener('click', function() {
        const now = new Date();
        const dateTimeString = `Date: ${now.toLocaleDateString()} Time: ${now.toLocaleTimeString()}`;
        alert(`Thanks for clicking me. Today's date and current time is: ${dateTimeString}`);
    });
    

    document.getElementById('multiplyButton').addEventListener('click', function() {
        const number = prompt("Enter a number to see its multiplication table:");
        if (number !== null && !isNaN(number)) {
            const num = parseInt(number);
            let resultHTML = `<h5>Multiplication Table for ${num}:</h5><ul>`;
            for (let i = 1; i <= 10; i++) {
                resultHTML += `<li>${num} x ${i} = ${num * i}</li>`;
            }
            resultHTML += '</ul>';
            document.getElementById('resultContainer').innerHTML = resultHTML;
        } else {
            alert("Please enter a valid number.");
        }
    });
});
