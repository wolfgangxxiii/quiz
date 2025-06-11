// desktop.js

// Plik ładowany po questions_formatted.js oraz quiz-core.js

// Jeśli chcesz obsługę typowo desktopowych ficzerów, np. obsługę klawiszy:
document.addEventListener('keydown', function(e) {
  // Przykład: N - następne pytanie (gdy widoczny quiz)
  if (document.getElementById('quiz-main-container').style.display === 'flex') {
    if (e.key === 'n' || e.key === 'N') {
      const nextBtn = document.getElementById('next-button');
      if (nextBtn && !nextBtn.disabled && nextBtn.style.display !== 'none') {
        nextBtn.click();
      }
    }
    // Możesz tu dodać więcej skrótów!
  }
});

// Możesz dodać np. automatyczne focusowanie na pierwszym przycisku po każdym pytaniu:
function focusFirstAnswer() {
  const answersDiv = document.getElementById('answers');
  if (answersDiv) {
    const btn = answersDiv.querySelector('button');
    if (btn) btn.focus();
  }
}

// Przykład: focusuj pierwszy przycisk odpowiedzi po załadowaniu pytania w trybie egzamin/nauka:
const origRenderExamQuestion = window.renderExamQuestion;
window.renderExamQuestion = function() {
  origRenderExamQuestion();
  focusFirstAnswer();
};
const origRenderLearningQuestion = window.renderLearningQuestion;
window.renderLearningQuestion = function() {
  origRenderLearningQuestion();
  focusFirstAnswer();
};

// Opcjonalnie – po zamknięciu modala autora, focus wraca do menu:
const origHideAuthorInfo = window.hideAuthorInfo;
window.hideAuthorInfo = function() {
  origHideAuthorInfo();
  const firstBtn = document.querySelector('#menu button');
  if (firstBtn) firstBtn.focus();
};

// Dodatkowe funkcje specyficzne dla desktopa możesz dodać tutaj...

// Upewnij się, że menu jest wyświetlone po załadowaniu:
document.addEventListener('DOMContentLoaded', showMenu);
