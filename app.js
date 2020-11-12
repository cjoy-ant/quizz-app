/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */


$(function() {

  const STORE = {
    questions: [
      // 1
      {
        picture: URL('images/question-1.jpg'),
        question: 'What year was the Japanese animation film studio, Studio Ghibli, founded?',
        answers: [
          '1979',
          '1985',
          '1989',
          '1992'
        ],
        correctAnswer: '1985'
      },
      // 2
      {
        picture: URL('images/question-2.jpg'),
        question: 'Who of the following is not one of the co-founders of Studio Ghibli?',
        answers: [
          'Hayao Miyazaki',
          'Takahata Isao',
          'Suzuki Toshio',
          'Hideaki Anno'
        ],
        correctAnswer: 'Hideaki Anno'
      },
      // 3
      {
        picture: URL('images/question-3.jpg'),
        question: "A common theme throughout Studio Ghibli's animations is:",
        answers: [
          'Environmentalism',
          'Dystopia',
          'Good VS. Evil',
          'Survival'
        ],
        correctAnswer: 'Environmentalism'
      },
      // 4
      {
        picture: URL('images/question-4.jpg'),
        question: "Which of the following is Studio Ghibli's highest grossing animation?",
        answers: [
          'My Neighbor Totoro',
          'Spirited Away',
          "Howl's Moving Castle",
          'Princess Mononoke'
        ],
        correctAnswer: 'Spirited Away'
      },
      // 5
      {
        picture: URL('images/question-5.jpg'),
        question: 'Which real world town served as inspiration for the setting of the animation, Spirited Away?',
        answers: [
          'Jiufen, Taiwan',
          'Nara, Japan',
          'Xiamen, China',
          'Penang, Malaysia'
        ]
      }
    ],
    quizStarted: false,
    currentQuestion: 0,
    score: 0
  }

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates
  
  // generate HTML for start page

  function generateStartPage () {
    return
      `
      <div class="start-page">
          <h2>Welcome! I hope you like anime!</h2>
          <p>This is a short and sweet quiz about Studio Ghibli, the Disney of Japanese animation.</p>
        <button type="submit" id="start-quiz-btn">Start Quiz</button>
      </div>
      `
    ;
  }

  // generates HTML for question number
  function generateQuestionNumber () {
    return
      <span class="question-number">
        <h2>Question </h2> + ${STORE.currentQuestion}
      </span>
    ;
  }

  // generate HTML for current score
  function generateScore () {
    return
      <span class="score">
        <h2>Your current score is </h2> + ${currentScore}
      </span>
    ;
  }

  // generates HTML for answers

  function generateAnswers () {
    let answerOptions = "";
    let questionIndex = 0;
    for (let i = 0; i < STORE.questions.answers.length; i++) {
      questionIndex = 
    }
    
  function currentQuestion () {
    let index = STORE.questionNumber;
    let currentQuestion = store.questions[index];
    return {
      index = index + 1;
    }
  }
  
  // generates HTML for current question

  function generateQuestion () {
    return `
      <div class="questionsAndAnswers">
        <form class="question-form">
          <fieldset>
              <legend>
                <p>Question ${currentQuestion().index}/${STORE.questions.length}</p>
                <p>Current Score: ${STORE.score}/${STORE.questions.length}</p>
              </legend>
            <div class="question">
              ${STORE.questions.currentQuestion}
            <div class="answer-options">
              ${STORE.questions.answers[currentQuestion]}.each(){
                <input type="radio" value="${answer}" >
              }
            </div>
            <button type="submit" id="submit-answer-btn" tabIndex="5">Submit</button>
            <button type="button" id="next-question-btn" tabIndex="6">Next</button>
          </fieldset>
        </form>
      </div>
      `;
  }

  // generates HTML for results page
  function generateResults () {
    return 
      `
      <div class="results-page">
        <h2>Congrats on finishing this quiz!</h2>
        function generateScore  
      function 
        <form id="js-restart-quiz">
          <fieldset>
            <legend>You scored ${currentScore}</legend>
            <button type="submit" id="restart-quiz-btn">Restart Quiz</button>
          </fieldset>
        </form>
      </div>
      `
    ;
  }
  
/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

  function renderQuiz () {
    if (STORE.quizStarted === false) {
      $('main').html(generateStartPage());
    }
    else if (STORE.currentQuestion >=0 && STORE.currentQuestion < STORE.questions.length)
      $('main').html(generateQuestionNumber());
      $('main').html(generateScore());
    }
    else {
      $('main').html(generateResults());
    }
  }

  // changes state of quizStarted to true
  function startQuiz () {
    STORE.quizStarted = true;
  }

  // finds which question to display to the user
  // changes value of STORE.currentQuestion to the current question number
  function currentQuestion () {
    let index = STORE.questionNumber;
    let thisQuestion = store.questions[index];
    return {
      index++,
    }
  }

  // checks if answer is correct
  // displays results for current question
  // next question button is available
  function checkAnswer () {

  }

  // changes state of quizStarted to false
  // changes the questionNumber to 0
  function restartQuiz () {
    store.quizStarted = false;
    store.questionNumber = 0;
  }


/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

  // listens for when user clisk start-quiz-btn
  function handleStartQuiz() {
    $('main').on('click', '#start-quiz-btn', event => {
      event.preventDefault();
      startQuiz();
      generateQuestion();
    });
  }

  // listens for when the user submits the question-form
  function handleSubmitAnswer() {
    $('main').on('submit', '#question-form', event => {
      event.preventDefault();
      checkAnswer();
      renderQuiz();
    });
  }

  // listens for when user clicks the next-question-btn
  function handleNextQuestion() {
    $('main').on('click', '#next-question-btn', event => {
      event.preventDefault();
      nextQuestion();
      renderQuiz();
    }
  }

  // listens for when user clicks the see-results-btn
  function handleSeeResults () {
    $('main').on('click', '#see-results-btn', event => {
      event.preventDefault();
      seeResults ();
    }
  }

  // listens for when user clisk the restart-quiz-btn
  // only available on last question page
  function handleRestartQuiz() {
    $('main').on('click', '#restart-quiz-btn', event => {
      event.preventDefault();
      restartQuiz();
      renderQuiz();
    });
  }

  // runs all of the functions for the quiz
  function runQuiz () {
    renderQuiz();
    handleStartQuiz();
    handleSubmitAnswer();
    handleNextQuestion();
    handleSeeResults();
    handleRestartQuiz();

  }

  $(runQuiz);

});

  /***
  // create variables to hold information about what question the user is on (currentQuestion)
  // and what is the user's current score (currentScore)
  var questionNumber = 0;
  var currentScore = 0;
  var totalQuestions = STORE.questions.length;

  // listen for when user clicks Start Quiz Button (#start-quiz-button)
  // if clicked, it will take them to Question 1
  function startQuiz () {
    $('.start-quiz-page').on('click', '.start-quiz-button', function() {
      questionNumber++;
    });
  }


  function generateAnswers () {
  let answersArray = STORE.questions[currentQuestion].answers;
  let answersHTML = "";
  let i=0;
  answersArray.forEach() {
    <div class="answers-container">
      <input type="radio" value="${answer}" required></input>
      <label for=""></label>
    </div>
  }
}
  // display form for currentQuestion

  function displayQuestion () {
    $('.current-question-form').toggleClass(currentQuestion)
  }
  
  // listen for when user submits question form by clicking Next Question button
  // selecting an answer should be required
  // check if the selected answer matches the correctAnswer
  // if correct, return "Great job! Your current score is " and display currentScore
  // if incorrect, return "Sorry, that was not the right answer. Your current score is "
  // and display currentScore
  // will need a separate functions checkAnswer and displayScore

  function checkAnswer () {

  }

  function displayScore () {

  }

  // will display response and currentScore
  // submitAnswer button changes to nextQuestion button
  function submitAnswer () {

  }

  // listens for when user clicks nextQuestion
  // goes to next question
  function nextQuestion () {

  }




  // listen for when user submits final question (use .length)
  // go to finish quiz page
  // "Congratulations on finishing this quiz. You scored " + display currentScore
  // retake quiz button that clears the DOM and takes user to start quiz page

  function finishQuiz () {

  }

});