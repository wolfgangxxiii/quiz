// quiz-core.js

// Globalne zmienne quizu/fiszek (każdy widok korzysta z tych samych zmiennych)
let currentQuestionIndex = 0;
let score = 0;
let allowClick = true;
let questionsArray = [];
let wrongQuestions = [];
let rangeMode = false;

// =========================
// POMOCNICZE
// =========================

function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

// =========================
// MENU
// =========================

function showMenu() {
  document.getElementById("menu").style.display = "flex";
  document.getElementById("quiz-main-container").style.display = "none";
  document.getElementById("flashcard-container").style.display = "none";
  document.getElementById("range-container").style.display = "none";
  rangeMode = false;
}

// =========================
// TRYB EGZAMIN: 20 losowych pytań
// =========================

function startExamMode() {
  questionsArray = getRandomQuestions(questions, 20);
  currentQuestionIndex = 0;
  score = 0;
  allowClick = true;
  wrongQuestions = [];
  rangeMode = false;
  document.getElementById("menu").style.display = "none";
  const quiz = document.getElementById("quiz-main-container");
  quiz.style.display = "flex";
  quiz.innerHTML = `
    <div class="title">Quiz Dyplomowy – Tryb egzamin<br><span style="font-size:0.8em;">(20 losowych pytań)</span></div>
    <div class="progress" id="progress"></div>
    <div class="question" id="question"></div>
    <div class="answers" id="answers"></div>
    <button class="next-btn" id="next-button" onclick="nextExamQuestion()">Następne pytanie</button>
    <button class="back-btn" onclick="showMenu()">Powrót do menu</button>
  `;
  renderExamQuestion();
}

function getRandomQuestions(arr, n) {
  let arrCopy = [...arr];
  let result = [];
  for (let i = 0; i < n && arrCopy.length; i++) {
    let idx = Math.floor(Math.random() * arrCopy.length);
    result.push(arrCopy[idx]);
    arrCopy.splice(idx, 1);
  }
  return result;
}

function renderExamQuestion() {
  allowClick = true;
  const questionData = questionsArray[currentQuestionIndex];
  document.getElementById("question").innerText = questionData.question;
  document.getElementById("progress").innerText = `Pytanie ${currentQuestionIndex + 1} z ${questionsArray.length}`;
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = '';

  let allAnswers = [questionData.answer];
  let indices = [...Array(questionsArray.length).keys()].filter(i => i !== currentQuestionIndex);
  shuffle(indices);
  for (let i = 0; i < 3 && i < indices.length; i++) {
    if (questionsArray[indices[i]]) {
      allAnswers.push(questionsArray[indices[i]].answer);
    }
  }
  allAnswers = shuffle(allAnswers);

  allAnswers.forEach((ans, idx) => {
    const btn = document.createElement("button");
    btn.innerText = `${String.fromCharCode(65+idx)}. ${ans}`;
    btn.onclick = () => {
      if (!allowClick) return;
      allowClick = false;
      if (ans === questionData.answer) {
        btn.classList.add("correct");
        score++;
      } else {
        btn.classList.add("wrong");
        wrongQuestions.push(questionData);
        let btns = answersDiv.querySelectorAll("button");
        btns.forEach(b => {
          if (b.innerText.slice(3) === questionData.answer) b.classList.add("correct");
        });
      }
    };
    answersDiv.appendChild(btn);
  });
  document.getElementById("next-button").style.display = "block";
}

function nextExamQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questionsArray.length) {
    renderExamQuestion();
  } else {
    showExamResults();
  }
}

function showExamResults() {
  const quiz = document.getElementById("quiz-main-container");
  quiz.innerHTML = `
    <div class="title">Quiz Dyplomowy – Tryb egzamin</div>
    <div id="results">
      <p>Twój wynik: ${score} z ${questionsArray.length} (${((score/questionsArray.length)*100).toFixed(1)}%)</p>
      ${wrongQuestions.length > 0 ? `<button class="next-btn" onclick="repeatWrongQuestions()">Powtórz błędne pytania (${wrongQuestions.length})</button>` : ""}
    </div>
    <button class="restart-btn" onclick="startExamMode()">Powtórz egzamin</button>
    <button class="back-btn" onclick="showMenu()">Powrót do menu</button>
  `;
}

function repeatWrongQuestions() {
  if (wrongQuestions.length === 0) return;
  questionsArray = shuffle([...wrongQuestions]);
  wrongQuestions = [];
  currentQuestionIndex = 0;
  score = 0;
  allowClick = true;
  renderExamQuestion();
}

// =========================
// TRYB NAUKI
// =========================

function startLearningMode() {
  questionsArray = [...questions];
  currentQuestionIndex = 0;
  document.getElementById("menu").style.display = "none";
  const quiz = document.getElementById("quiz-main-container");
  quiz.style.display = "flex";
  quiz.innerHTML = `
    <div class="title">Quiz Dyplomowy – Tryb nauki</div>
    <div class="progress" id="progress"></div>
    <div class="question" id="question"></div>
    <div class="answers" id="answers"></div>
    <button class="next-btn" id="next-button" onclick="nextLearningQuestion()">Następne pytanie</button>
    <button class="back-btn" onclick="showMenu()">Powrót do menu</button>
  `;
  renderLearningQuestion();
}

function renderLearningQuestion() {
  allowClick = true;
  const questionData = questionsArray[currentQuestionIndex];
  document.getElementById("question").innerText = questionData.question;
  document.getElementById("progress").innerText = `Pytanie ${currentQuestionIndex + 1} z ${questionsArray.length}`;
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = '';

  let allAnswers = [questionData.answer];
  let indices = [...Array(questionsArray.length).keys()].filter(i => i !== currentQuestionIndex);
  shuffle(indices);
  for (let i = 0; i < 3 && i < indices.length; i++) {
    if (questionsArray[indices[i]]) {
      allAnswers.push(questionsArray[indices[i]].answer);
    }
  }
  allAnswers = shuffle(allAnswers);

  allAnswers.forEach((ans, idx) => {
    const btn = document.createElement("button");
    btn.innerText = `${String.fromCharCode(65+idx)}. ${ans}`;
    btn.onclick = () => {
      if (!allowClick) return;
      allowClick = false;
      if (ans === questionData.answer) {
        btn.classList.add("correct");
      } else {
        btn.classList.add("wrong");
        let btns = answersDiv.querySelectorAll("button");
        btns.forEach(b => {
          if (b.innerText.slice(3) === questionData.answer) b.classList.add("correct");
        });
      }
    };
    answersDiv.appendChild(btn);
  });
  document.getElementById("next-button").style.display = "block";
}

function nextLearningQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questionsArray.length) {
    renderLearningQuestion();
  } else {
    showLearningEnd();
  }
}

function showLearningEnd() {
  const quiz = document.getElementById("quiz-main-container");
  quiz.innerHTML = `
    <div class="title">Quiz Dyplomowy – Tryb nauki</div>
    <div id="results">
      <p>Koniec sesji nauki!</p>
    </div>
    <button class="restart-btn" onclick="startLearningMode()">Powtórz naukę</button>
    <button class="back-btn" onclick="showMenu()">Powrót do menu</button>
  `;
}

// =========================
// FISZKI
// =========================

function startFlashcardsMode() {
  questionsArray = [...questions];
  currentQuestionIndex = 0;
  document.getElementById("menu").style.display = "none";
  document.getElementById("quiz-main-container").style.display = "none";
  document.getElementById("flashcard-container").style.display = "flex";
  renderFlashcard();
}

function renderFlashcard() {
  const cont = document.getElementById("flashcard-container");
  const q = questionsArray[currentQuestionIndex];
  cont.innerHTML = `
    <div class="title">Fiszki – powtarzanie pytań</div>
    <div class="progress">${currentQuestionIndex + 1} z ${questionsArray.length}</div>
    <div class="flashcard-question">${q.question}</div>
    <div class="flashcard-answer">${q.answer}</div>
    <div class="flashcard-nav">
      <button onclick="prevFlashcard()" ${currentQuestionIndex===0?'disabled':''}>Poprzednia</button>
      <button onclick="nextFlashcard()" ${currentQuestionIndex===questionsArray.length-1?'disabled':''}>Następna</button>
    </div>
    <button class="back-btn" onclick="showMenu()" style="margin-top:1.3em;">Powrót do menu</button>
  `;
}

function prevFlashcard() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderFlashcard();
  }
}
function nextFlashcard() {
  if (currentQuestionIndex < questionsArray.length - 1) {
    currentQuestionIndex++;
    renderFlashcard();
  }
}

// =========================
// WYBÓR ZAKRESU PYTAŃ (quiz)
// =========================

function showRangeSelection() {
  document.getElementById("menu").style.display = "none";
  document.getElementById("range-container").style.display = "flex";
  let total = questions.length;
  let html = `<div class="title">Wybierz zakres pytań</div>
    <div class="category-list">
      <label><input type="radio" name="range" value="all" checked> Wszystkie pytania (1-${total})</label>`;
  let rangeStep = 20;
  for (let i = 0; i < total; i += rangeStep) {
    let start = i + 1;
    let end = Math.min(i + rangeStep, total);
    html += `<label><input type="radio" name="range" value="${start}-${end}"> Pytania ${start}-${end}</label>`;
  }
  html += `
    </div>
    <button onclick="startExamWithRange()">Rozpocznij quiz z wybranego zakresu</button>
    <button class="back-btn" onclick="showMenu()">Powrót do menu</button>
  `;
  document.getElementById("range-container").innerHTML = html;
}

function startExamWithRange() {
  const radios = document.getElementsByName('range');
  let value = "all";
  for(let r of radios) { if(r.checked) value = r.value; }
  let start=0, end=questions.length;
  if (value !== "all") {
    let [s,e] = value.split('-').map(x=>parseInt(x));
    start = s-1; end = e;
  }
  questionsArray = [...questions.slice(start, end)];
  currentQuestionIndex = 0;
  score = 0;
  allowClick = true;
  wrongQuestions = [];
  rangeMode = true;
  document.getElementById("range-container").style.display = "none";
  const quiz = document.getElementById("quiz-main-container");
  quiz.style.display = "flex";
  quiz.innerHTML = `
    <div class="title">Quiz Dyplomowy – Zakres: ${value==="all"?"Wszystkie pytania":value.replace("-","–")}</div>
    <div class="progress" id="progress"></div>
    <div class="question" id="question"></div>
    <div class="answers" id="answers"></div>
    <button class="next-btn" id="next-button" onclick="nextExamQuestionRange()">Następne pytanie</button>
    <button class="back-btn" onclick="showMenu()">Powrót do menu</button>
  `;
  renderExamQuestionRange();
}

function renderExamQuestionRange() {
  allowClick = true;
  const questionData = questionsArray[currentQuestionIndex];
  document.getElementById("question").innerText = questionData.question;
  document.getElementById("progress").innerText = `Pytanie ${currentQuestionIndex + 1} z ${questionsArray.length}`;
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = '';

  let allAnswers = [questionData.answer];
  let indices = [...Array(questionsArray.length).keys()].filter(i => i !== currentQuestionIndex);
  shuffle(indices);
  for (let i = 0; i < 3 && i < indices.length; i++) {
    if (questionsArray[indices[i]]) {
      allAnswers.push(questionsArray[indices[i]].answer);
    }
  }
  allAnswers = shuffle(allAnswers);

  allAnswers.forEach((ans, idx) => {
    const btn = document.createElement("button");
    btn.innerText = `${String.fromCharCode(65+idx)}. ${ans}`;
    btn.onclick = () => {
      if (!allowClick) return;
      allowClick = false;
      if (ans === questionData.answer) {
        btn.classList.add("correct");
        score++;
      } else {
        btn.classList.add("wrong");
        wrongQuestions.push(questionData);
        let btns = answersDiv.querySelectorAll("button");
        btns.forEach(b => {
          if (b.innerText.slice(3) === questionData.answer) b.classList.add("correct");
        });
      }
    };
    answersDiv.appendChild(btn);
  });
  document.getElementById("next-button").style.display = "block";
}

function nextExamQuestionRange() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questionsArray.length) {
    renderExamQuestionRange();
  } else {
    showExamResultsRange();
  }
}

function showExamResultsRange() {
  const quiz = document.getElementById("quiz-main-container");
  quiz.innerHTML = `
    <div class="title">Quiz Dyplomowy – Quiz z zakresu</div>
    <div id="results">
      <p>Twój wynik: ${score} z ${questionsArray.length} (${((score/questionsArray.length)*100).toFixed(1)}%)</p>
      ${wrongQuestions.length > 0 ? `<button class="next-btn" onclick="repeatWrongQuestionsRange()">Powtórz błędne pytania (${wrongQuestions.length})</button>` : ""}
    </div>
    <button class="restart-btn" onclick="showRangeSelection()">Wybierz inny zakres</button>
    <button class="back-btn" onclick="showMenu()">Powrót do menu</button>
  `;
}

function repeatWrongQuestionsRange() {
  if (wrongQuestions.length === 0) return;
  questionsArray = shuffle([...wrongQuestions]);
  wrongQuestions = [];
  currentQuestionIndex = 0;
  score = 0;
  allowClick = true;
  renderExamQuestionRange();
}

// =========================
// WYBÓR ZAKRESU PYTAŃ (FISZKI)
// =========================

function showRangeSelectionFlashcards() {
  document.getElementById("menu").style.display = "none";
  document.getElementById("range-container").style.display = "flex";
  let total = questions.length;
  let html = `<div class="title">Wybierz zakres pytań (fiszki)</div>
    <div class="category-list">
      <label><input type="radio" name="range" value="all" checked> Wszystkie pytania (1-${total})</label>`;
  let rangeStep = 20;
  for (let i = 0; i < total; i += rangeStep) {
    let start = i + 1;
    let end = Math.min(i + rangeStep, total);
    html += `<label><input type="radio" name="range" value="${start}-${end}"> Pytania ${start}-${end}</label>`;
  }
  html += `
    </div>
    <button onclick="startFlashcardsWithRange()">Rozpocznij fiszki z wybranego zakresu</button>
    <button class="back-btn" onclick="showMenu()">Powrót do menu</button>
  `;
  document.getElementById("range-container").innerHTML = html;
}

function startFlashcardsWithRange() {
  const radios = document.getElementsByName('range');
  let value = "all";
  for(let r of radios) { if(r.checked) value = r.value; }
  let start=0, end=questions.length;
  if (value !== "all") {
    let [s,e] = value.split('-').map(x=>parseInt(x));
    start = s-1; end = e;
  }
  questionsArray = [...questions.slice(start, end)];
  currentQuestionIndex = 0;
  document.getElementById("range-container").style.display = "none";
  document.getElementById("quiz-main-container").style.display = "none";
  document.getElementById("flashcard-container").style.display = "flex";
  renderFlashcard();
}

// =========================
// MODAL AUTORA (wspólny dla desktop/mobile)
// =========================

function showAuthorInfo() {
  document.getElementById('author-modal').style.display = 'flex';
  setTimeout(() => {
    document.getElementById('author-modal').focus();
  }, 10);
}
function hideAuthorInfo() {
  document.getElementById('author-modal').style.display = 'none';
}
// Ukrywanie po kliknięciu tła i ESC:
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('author-modal');
  if(modal){
    modal.addEventListener('click', (e) => {
      if(e.target === modal) hideAuthorInfo();
    });
    window.addEventListener('keydown', (e) => {
      if (modal.style.display === 'flex' && e.key === 'Escape') hideAuthorInfo();
    });
  }
});

// =========================
// START: wywołanie menu po załadowaniu skryptu (jeśli nie przejął tego desktop.js/mobile.js)
// =========================

if (
  document.getElementById("menu") &&
  document.getElementById("quiz-main-container") &&
  document.getElementById("flashcard-container") &&
  document.getElementById("range-container")
) {
  showMenu();
}
