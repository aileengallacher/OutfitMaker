   // Outfit generator

// function buildQuiz() {
//     // this is the variable that will store the HTML output
//     const output = [];
//     myQuestions.forEach(
//         (currentQuestion, questionNumber) => {

//             // variable to store the list of possible answers
//             const answers = [];

//             // and for each available answer...
//             for (letter in currentQuestion.answers) {

//                 // ...add an HTML radio button
//                 answers.push(
//                     `<label>
//                 <input type="radio" name="question${questionNumber}" value="${letter}">
//                 ${letter} :
//                 ${currentQuestion.answers[letter]}
//               </label>`
//                 );
//             }

//             // add this question and its answers to the output
//             output.push(
//                 `<div class="question"> ${currentQuestion.question} </div>
//             <div class="answers"> ${answers.join('')} </div>`
//             );
//         }
//     );

//     // finally combine our output list into one string of HTML and put it on the page
//     quizContainer.innerHTML = output.join('');
// }


// function showResults() {

//     // gather answer containers from our quiz
//     const answerContainers = quizContainer.querySelectorAll('.answers');

//     // keep track of user's answers
//     let numCorrect = 0;

//     // for each question...
//     myQuestions.forEach((currentQuestion, questionNumber) => {

//         // find selected answer
//         const answerContainer = answerContainers[questionNumber];
//         const selector = `input[name=question${questionNumber}]:checked`;
//         const userAnswer = (answerContainer.querySelector(selector) || {}).value;

//         // if answer is correct
//         if (userAnswer == currentQuestion.correctAnswer) {
//             // add to the number of correct answers
//             numCorrect++;

//             // color the answers green
//             // answerContainers[questionNumber].style.color = 'lightgreen';
//         }
//         // if answer is wrong or blank
//         // else {
//         //     // color the answers red
//         //     answerContainers[questionNumber].style.color = 'red';
//         }
//     });

//     // show number of correct answers out of total
//     // resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
// }

// // Variables
// const quizContainer = document.getElementById('quiz');
// const resultsContainer = document.getElementById('results');
// const submitButton = document.getElementById('submit');
// const myQuestions = [
//     {
//       question: "What is the weather forecast?",
//       answers: {
//         a: "Sunny",
//         b: "Cold",
//         c: "Rainy"
//       },
//       questionNumber: "1"
//     },
//     {
//       question: "Where are you going?",
//       answers: {
//         a: "Casual/Social",
//         b: "Work",
//         c: "Formal Event"
//       },
//       questionNumber: "2"
//     },
//     {
//       question: "Wht type of shoes?",
//       answers: {
//         a: "Flats",
//         b: "Mid-heels",
//         c: "High-heels",
//       },
//       questionNumber: "3"
//     }
//   ];

// // display quiz right away
// buildQuiz();

// // on submit, show results
// submitButton.addEventListener('click', showResults); 
// </script> 