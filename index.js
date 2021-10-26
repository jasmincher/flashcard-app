function App() {
  let form = document.getElementById("flashcard-form");
  let questionInput = document.getElementById("question-input");
  let answerInput = document.getElementById("answer-input");
  let flashcardList = document.getElementById("flashcard-list");
  let addFlashCard = document.getElementById("add-flashcard-btn");

  let id = 0;
  let createCard = new CreateCard();

  //will toggle flashcard form by checking the display
  addFlashCard.addEventListener("click", function () {
    if (form.style.display === "flex") {
      form.style.display = "none";
    } else {
      form.style.display = "flex";
    }
  });

  //on submitting form, we are creating a new card with methods addQuestion
  //and clearFields
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    let questionValue = questionInput.value;
    let answerValue = answerInput.value;
    let flashcard = new Card(id, questionValue, answerValue);
    id++;

    if(questionValue !==  "" && answerValue !== "" ){
      createCard.addQuestion(flashcardList, flashcard);
      createCard.clearFields(questionInput, answerInput);
    }else{
      alert("No empty fields!")
    }
    form.style.display = "none";
  });
}

class CreateCard {
  //creating new div element with question title and its answer
  addQuestion(element, question) {
    let div = document.createElement("div");
    div.innerHTML = `<div class="card-container">
       <div class="question-side"> ${question.title}</div>
       <div class="answer-side">${question.answer} </div>
       </div>`;
    element.appendChild(div);
  }

  //clearing input fields after entering previous fields
  clearFields(question, answer) {
    question.value = "";
    answer.value = "";
  }
}

//creating a constructor for an id, title and answer
//for each flashcard
class Card {
  constructor(id, title, answer) {
    this.id = id;
    this.title = title;
    this.answer = answer;
  }
}

App();
