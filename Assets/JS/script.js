        // First Program: Maximum and Minimum
        let numbers = document.querySelector(".input");
        let result = document.querySelector(".submit");
        let resultMaxMin = document.querySelector(".result-max-min");

        result.addEventListener("click", () => {
            let value = numbers.value.trim();
            if (value === "") {
                alert("Please enter some numbers.");
                return;
            }
            if (!value.includes(",")) {
                alert("Please add a comma between numbers.");
                return;
            }
            let valuesArray = value.split(",");
            for (let i = 0; i < valuesArray.length; i++) {
                if (valuesArray[i].trim() === "" || isNaN(valuesArray[i].trim())) {
                    alert("Please ensure all entries are numbers, separated by commas, and not empty.");
                    return;
                }
            }
            valuesArray = valuesArray.map(Number);
            let max = Math.max(...valuesArray);
            let min = Math.min(...valuesArray);
            resultMaxMin.textContent = `Max = ${max}, Min = ${min}`;
        });

        // Second Program: Vowel or Consonant
        let inputChar = document.querySelector(".input-char");
        let resultChar = document.querySelector(".submit-char");
        let resultVowel = document.querySelector(".result-vowel");

        resultChar.addEventListener("click", () => {
            let inputValue = inputChar.value.trim();
            let char = inputValue.slice(-1);
            if (!/[a-zA-Z]/.test(char)) {
                resultVowel.textContent = "Please Enter A Valid Alphabetic Character.";
                return;
            }
            if ("aeiouAEIOU".includes(char)) {
                resultVowel.textContent = "Vowel";
            } else {
                resultVowel.textContent = "Consonant";
            }
        });

        // Third Program: Multiplication Table
        let inputMulti = document.querySelector(".input-multi");
        let submitMulti = document.querySelector(".submit-multi");
        let resultMulti = document.querySelector(".result-multi");

        submitMulti.addEventListener("click", () => {
            let num = parseInt(inputMulti.value);
            if (isNaN(num)) {
                resultMulti.textContent = "Please Enter A Valid Number";
                return;
            }
            let table = "";
            for (let i = 1; i <= 12; i++) {
                table += `${num} x ${i} = ${num * i}, `;
            }
            resultMulti.textContent = table.slice(0, -2);
        });

        // Fourth Program: Even Numbers
        let inputEven = document.querySelector(".input-even");
        let submitEven = document.querySelector(".submit-even");
        let resultEven = document.querySelector(".result-even");

        submitEven.addEventListener("click", () => {
            let valueEven = parseInt(inputEven.value);
            if (isNaN(valueEven)) {
                resultEven.textContent = "Please Enter A Valid Number";
                return;
            }
            let evens = [];
            for (let i = 1; i <= valueEven; i++) {
                if (i % 2 === 0) {
                    evens.push(i);
                }
            }
            resultEven.textContent = evens.join(", ");
        });

        // Fifth Program: Marks Percentage
        let inputMark = document.querySelector(".input-mark");
        let submitMark = document.querySelector(".submit-mark");
        let resultMark = document.querySelector(".result-mark");

        submitMark.addEventListener("click", () => {
            let valueMark = inputMark.value.trim();
            let markArray = valueMark.split(",").map(mark => mark.trim());
            if (markArray.length !== 5) {
                resultMark.textContent = "Please enter marks of five subjects and make sure separated by commas.";
                return;
            }
            let areMarkValid = markArray.every(mark => !isNaN(mark) && mark !== "");
            if (!areMarkValid) {
                resultMark.textContent = "Please enter valid numbers for all marks.";
                return;
            }
            let total = markArray.reduce((sum, mark) => sum + parseFloat(mark), 0);
            let average = total / 5;
            let percentage = (total / 500) * 100;
            resultMark.innerHTML = `Total: ${total}<br>Average: ${average}<br>Percentage: ${percentage.toFixed(2)}%`;
        });

        // Sixth Program: Grade Calculation
        document.querySelector(".submit-marks").addEventListener("click", () => {
            let physics = parseFloat(document.getElementById("physics").value);
            let chemistry = parseFloat(document.getElementById("chemistry").value);
            let biology = parseFloat(document.getElementById("biology").value);
            let mathematics = parseFloat(document.getElementById("mathematics").value);
            let computer = parseFloat(document.getElementById("computer").value);
            let resultMarks = document.querySelector(".result-marks");

            if (isNaN(physics) || isNaN(chemistry) || isNaN(biology) || isNaN(mathematics) || isNaN(computer)) {
                resultMarks.textContent = "Please enter valid numbers for all subjects.";
                return;
            }
            let totalMarks = physics + chemistry + biology + mathematics + computer;
            let percentage = (totalMarks / 500) * 100;
            let grade;
            if (percentage >= 90) {
                grade = "A";
            } else if (percentage >= 80) {
                grade = "B";
            } else if (percentage >= 70) {
                grade = "C";
            } else if (percentage >= 60) {
                grade = "D";
            } else if (percentage >= 40) {
                grade = "E";
            } else {
                grade = "F";
            }
            resultMarks.innerHTML = `Total Marks: ${totalMarks}<br>Percentage: ${percentage.toFixed(2)}%<br>Grade: ${grade}`;
        });


// Task 2
//Task 2_1
document.addEventListener('DOMContentLoaded', () => {
  let images = document.querySelectorAll('.images');
  let bgColor = document.querySelector('.first-task');
  let mainImage = document.querySelector('.iphone.active');

  images.forEach(image => {
      image.addEventListener('click', () => {
          let newColor = image.getAttribute('data-color');
          bgColor.style.backgroundColor = newColor;
          mainImage.src = image.src;
      });
    });
  });
  //Task 2_1
  
  //Task 2_2
  let icon = document.querySelector('.fa-moon') ;
  let mode = document.querySelector('.second-task')
  icon.addEventListener('click', () => {
    mode.classList.toggle('dark-mode')
  })
  //Task 2_2
  
  //Task 2_3
  document.addEventListener('DOMContentLoaded', () => {

    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        item.querySelector('.accordion-title').addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            accordionItems.forEach(i => i.classList.remove('active'));
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});
  //Task 2_3

  //Task 2_4
  document.addEventListener('DOMContentLoaded', () => {
    let stars = document.querySelectorAll('.fa-star');
    let ratingText = document.querySelector('.rating-text');

    stars.forEach(star => {
        star.addEventListener('click', () => {
            let rating = star.getAttribute('data-rating');
            updateRating(rating);
        });
    });

    function updateRating(rating) {
        stars.forEach(star => {
            star.classList.remove('selected');
            if (star.getAttribute('data-rating') <= rating) {
                star.classList.add('selected');
            }
        });

        let ratingMessage = '';
        switch (rating) {
            case '1':
                ratingMessage = 'Very Bad';
                break;
            case '2':
                ratingMessage = 'Bad';
                break;
            case '3':
                ratingMessage = 'It is awesome';
                break;
            case '4':
                ratingMessage = 'Good';
                break;
            case '5':
                ratingMessage = 'Excellent';
                break;
            default:
                ratingMessage = '';
        }

        ratingText.textContent = ratingMessage;
    }
});

  
  //Task 2_4
