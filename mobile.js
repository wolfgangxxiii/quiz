// mobile.js

// Plik ładowany po questions_formatted.js oraz quiz-core.js

// Upewnij się, że menu jest wyświetlane po załadowaniu strony (jeśli np. przechodzimy z desktopa):
document.addEventListener('DOMContentLoaded', showMenu);

// Przykład: automatyczny scroll do przycisku "Następne pytanie" po każdym pytaniu
function scrollToNextButton() {
  const nextBtn = document.getElementById('next-button');
  if (nextBtn && nextBtn.offsetParent !== null) {
    nextBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

// Po każdym renderowaniu pytania/fiszki przewijaj do przycisku:
const origRenderExamQuestion = window.renderExamQuestion;
window.renderExamQuestion = function() {
  origRenderExamQuestion();
  scrollToNextButton();
};
const origRenderLearningQuestion = window.renderLearningQuestion;
window.renderLearningQuestion = function() {
  origRenderLearningQuestion();
  scrollToNextButton();
};
const origRenderExamQuestionRange = window.renderExamQuestionRange;
window.renderExamQuestionRange = function() {
  origRenderExamQuestionRange();
  scrollToNextButton();
};

// Możesz dodać dowolne inne mobile-only usprawnienia, np. wykrywanie orientacji, wibracje itd.

// Np. lekkie wibracje przy błędnej odpowiedzi (jeśli przeglądarka obsługuje):
function vibrateOnWrongAnswer() {
  const answersDiv = document.getElementById('answers');
  if (answersDiv) {
    answersDiv.addEventListener('click', function(event) {
      if (event.target.tagName === 'BUTTON' && event.target.classList.contains('wrong')) {
        if (navigator.vibrate) navigator.vibrate(80);
      }
    }, { once: true });
  }
}
const origRenderLearningQuestion2 = window.renderLearningQuestion;
window.renderLearningQuestion = function() {
  origRenderLearningQuestion2();
  scrollToNextButton();
  vibrateOnWrongAnswer();
};
const origRenderExamQuestion2 = window.renderExamQuestion;
window.renderExamQuestion = function() {
  origRenderExamQuestion2();
  scrollToNextButton();
  vibrateOnWrongAnswer();
};
const origRenderExamQuestionRange2 = window.renderExamQuestionRange;
window.renderExamQuestionRange = function() {
  origRenderExamQuestionRange2();
  scrollToNextButton();
  vibrateOnWrongAnswer();
};

// To wszystko! Dodawaj własne funkcje według potrzeb wersji mobilnej.
