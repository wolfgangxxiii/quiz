// Stan aplikacji
let currentMode = null; // "quiz" | "exam" | "learning" | "flashcards"
let questionsToAsk = [];
let questionIndex = 0;
let score = 0;
let examWrongQuestions = [];
let selectedListItem = null;

const questionListEl = document.getElementById('question-list');
const questionTitleEl = document.getElementById('question-title');
const questionBodyEl = document.getElementById('question-body');
const answersEl = document.getElementById('answers');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const resultPanel = document.getElementById('result-panel');
const modeExamBtn = document.getElementById('mode-exam');
const modeLearningBtn = document.getElementById('mode-learning');
const modeFlashcardsBtn = document.getElementById('mode-flashcards');
const flashcardControls = document.getElementById('flashcard-controls');
const prevFlash = document.getElementById('prev-flash');
const nextFlash = document.getElementById('next-flash');

// ============ Tryby ==============

modeExamBtn.onclick = startExamMode;
modeLearningBtn.onclick = startLearningMode;
modeFlashcardsBtn.onclick = startFlashcardsMode;

function renderQuestionList(selectIdx) {
  questionListEl.innerHTML = '';
  questionsToAsk.forEach((q, idx) => {
    const li = document.createElement('li');
    li.textContent = `#${idx+1}. ${q.question.slice(0,55)}${q.question.length>55?'...':''}`;
    li.onclick = () => {
      if (currentMode === "learning" || currentMode === "quiz") {
        questionIndex = idx;
        if (currentMode === "learning") renderLearningQuestion();
        if (currentMode === "quiz") renderQuizQuestion();
        updateListHighlight();
      }
    };
    if (idx === selectIdx) {
      li.classList.add('selected');
      selectedListItem = li;
    }
    questionListEl.appendChild(li);
  });
}

function updateListHighlight() {
  const lis = questionListEl.querySelectorAll('li');
  lis.forEach((li, idx) => {
    li.classList.toggle('selected', idx === questionIndex);
  });
}

// ==================== TRYB EGZAMIN ====================

function startExamMode() {
  currentMode = "exam";
  questionsToAsk = shuffle([...questions]).slice(0,20);
  questionIndex = 0;
  score = 0;
  examWrongQuestions = [];
  prevBtn.disabled = true;
  nextBtn.disabled = false;
  flashcardControls.style.display = "none";
  resultPanel.style.display = "none";
  answersEl.innerHTML = '';
  renderQuestionList(null); // brak listy w egzaminie
  renderExamQuestion();
}

function renderExamQuestion() {
  resultPanel.style.display = "none";
  questionTitleEl.textContent = `Egzamin – pytanie ${questionIndex+1} z ${questionsToAsk.length}`;
  questionBodyEl.textContent = questionsToAsk[questionIndex].question;
  answersEl.innerHTML = '';

  // losowe odpowiedzi (jedna dobra + 3 losowe złe z innej puli)
  let good = questionsToAsk[questionIndex].answer;
  let otherIdxs = [];
  for(let i=0;i<questions.length;i++) if(questions[i].answer!==good) otherIdxs.push(i);
  otherIdxs = shuffle(otherIdxs).slice(0,3);
  let allAnswers = [good, ...otherIdxs.map(i=>questions[i].answer)];
  allAnswers = shuffle(allAnswers);

  allAnswers.forEach(ans => {
    const btn = document.createElement('button');
    btn.textContent = ans;
    btn.onclick = () => {
      if (btn.classList.contains('correct') || btn.classList.contains('wrong')) return;
      if (ans === good) {
        btn.classList.add('correct');
        score++;
      } else {
        btn.classList.add('wrong');
        examWrongQuestions.push(questionsToAsk[questionIndex]);
        // podświetl dobrą
        [...answersEl.children].forEach(b => {
          if (b.textContent === good) b.classList.add('correct');
        });
      }
      // odblokuj next
      nextBtn.disabled = false;
    };
    answersEl.appendChild(btn);
  });

  prevBtn.disabled = questionIndex === 0;
  nextBtn.disabled = true;
  prevBtn.onclick = () => {
    if (questionIndex > 0) {
      questionIndex--;
      renderExamQuestion();
    }
  };
  nextBtn.onclick = () => {
    if (questionIndex < questionsToAsk.length - 1) {
      questionIndex++;
      renderExamQuestion();
    } else {
      showExamResult();
    }
  };
}

function showExamResult() {
  questionTitleEl.textContent = "Wynik egzaminu";
  questionBodyEl.textContent = "";
  answersEl.innerHTML = '';
  prevBtn.disabled = true;
  nextBtn.disabled = true;
  let percent = Math.round(100*score/questionsToAsk.length);
  resultPanel.style.display = "";
  resultPanel.innerHTML = `
    <p>Twój wynik: <strong>${score} / ${questionsToAsk.length}</strong> (${percent}%)</p>
    ${examWrongQuestions.length ? `<button id="repeat-wrong-btn">Powtórz błędne pytania (${examWrongQuestions.length})</button>` : ""}
    <button id="restart-exam-btn">Zacznij jeszcze raz</button>
  `;
  if (examWrongQuestions.length) {
    document.getElementById('repeat-wrong-btn').onclick = () => {
      questionsToAsk = shuffle([...examWrongQuestions]);
      examWrongQuestions = [];
      score = 0;
      questionIndex = 0;
      renderExamQuestion();
    }
  }
  document.getElementById('restart-exam-btn').onclick = startExamMode;
}

// ==================== TRYB NAUKI ====================

function startLearningMode() {
  currentMode = "learning";
  questionsToAsk = [...questions];
  questionIndex = 0;
  prevBtn.disabled = false;
  nextBtn.disabled = false;
  flashcardControls.style.display = "none";
  resultPanel.style.display = "none";
  renderQuestionList(questionIndex);
  renderLearningQuestion();
}

function renderLearningQuestion() {
  resultPanel.style.display = "none";
  questionTitleEl.textContent = `Tryb nauki – pytanie ${questionIndex+1} z ${questionsToAsk.length}`;
  questionBodyEl.textContent = questionsToAsk[questionIndex].question;
  answersEl.innerHTML = '';
  const btn = document.createElement('button');
  btn.textContent = questionsToAsk[questionIndex].answer;
  btn.classList.add('correct');
  btn.style.margin = "1.2em auto";
  btn.style.display = "block";
  btn.disabled = true;
  answersEl.appendChild(btn);

  prevBtn.disabled = questionIndex === 0;
  nextBtn.disabled = questionIndex === questionsToAsk.length-1;
  prevBtn.onclick = () => {
    if (questionIndex > 0) {
      questionIndex--;
      renderLearningQuestion();
      updateListHighlight();
    }
  };
  nextBtn.onclick = () => {
    if (questionIndex < questionsToAsk.length - 1) {
      questionIndex++;
      renderLearningQuestion();
      updateListHighlight();
    }
  };
  updateListHighlight();
}

// ==================== TRYB FISZEK ====================

function startFlashcardsMode() {
  currentMode = "flashcards";
  questionsToAsk = [...questions];
  questionIndex = 0;
  flashcardControls.style.display = "";
  prevBtn.disabled = true;
  nextBtn.disabled = true;
  resultPanel.style.display = "none";
  renderQuestionList(null); // lista nieaktywna w fiszkach
  renderFlashcard();
}

function renderFlashcard() {
  questionTitleEl.textContent = `Fiszki – pytanie ${questionIndex+1} z ${questionsToAsk.length}`;
  questionBodyEl.innerHTML = `<div style="font-weight:600; margin-bottom:1.2em;">${questionsToAsk[questionIndex].question}</div>
    <button id="show-answer-btn" style="margin: 1.1em auto; display: block;">Pokaż odpowiedź</button>`;
  answersEl.innerHTML = '';

  document.getElementById('show-answer-btn').onclick = () => {
    questionBodyEl.innerHTML = `<div style="font-weight:600; margin-bottom:1.2em;">${questionsToAsk[questionIndex].question}</div>
      <div class="flashcard-answer">${questionsToAsk[questionIndex].answer}</div>`;
  };
  prevFlash.disabled = questionIndex === 0;
  nextFlash.disabled = questionIndex === questionsToAsk.length-1;

  prevFlash.onclick = () => {
    if (questionIndex > 0) {
      questionIndex--;
      renderFlashcard();
    }
  };
  nextFlash.onclick = () => {
    if (questionIndex < questionsToAsk.length-1) {
      questionIndex++;
      renderFlashcard();
    }
  };
}

// ==================== FUNKCJE POMOCNICZE ====================

function shuffle(arr) {
  let array = arr.slice();
  for (let i = array.length-1; i>0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [array[i],array[j]] = [array[j],array[i]];
  }
  return array;
}

// ============ START =============

window.onload = () => {
  // domyślnie start w trybie nauki
  startLearningMode();
};
