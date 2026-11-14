<div align="center">

# 🎓 Quiz dyplomowy · Informatyka

**Ucz się do egzaminu dyplomowego w trybie testu, nauki i fiszek — także na telefonie.**

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Offline](https://img.shields.io/badge/Tryb-offline-16A34A?style=flat-square)
![License](https://img.shields.io/badge/Apache-2.0-16A34A?style=flat-square)

### [🚀 Otwórz quiz online](https://quiz-egazmin.netlify.app/)

[📚 Tryby](#-tryby-nauki) · [💻 Uruchomienie](#-uruchomienie-lokalne) · [📁 Pliki](#-struktura-projektu)

</div>

---

## 💡 Dla kogo?

Aplikacja wspiera przygotowanie do egzaminu dyplomowego z **informatyki** (specjalność: **Aplikacje mobilne i bazy danych**, WSB Merito Gdańsk). Zagadnienia obejmują m.in. programowanie, bazy danych, algorytmy, bezpieczeństwo i aplikacje mobilne.

## 📚 Tryby nauki

| 🎯 Tryb | 📖 Jak działa |
| :--- | :--- |
| **Egzamin** | 20 losowych pytań, wybór odpowiedzi, wynik procentowy na końcu |
| **Nauka** | Przechodzenie przez pulę pytań z natychmiastową informacją o odpowiedzi |
| **Fiszki** | Przeglądanie pytań i odpowiedzi jedna po drugiej |
| **Wybrany zakres** | Quiz i fiszki dla określonych przedziałów pytań |
| **Powtórka błędów** | Ponowne przejście przez pytania, na które odpowiedziano błędnie |

Interfejs ma osobne widoki **mobilny i desktopowy**. Całość działa po stronie przeglądarki — nie wymaga konta ani serwera aplikacyjnego.

## 💻 Uruchomienie lokalne

~~~bash
git clone https://github.com/wolfgangxxiii/quiz.git
cd quiz
~~~

Otwórz `index.html` w przeglądarce. Możesz także bezpośrednio otworzyć `desktop.html`, aby skorzystać z widoku komputerowego.

> Po pobraniu plików quiz może działać **bez dostępu do internetu**. Nie potrzebujesz instalować zależności ani uruchamiać backendu.

## 📁 Struktura projektu

| Plik | Zastosowanie |
| :--- | :--- |
| [`index.html`](index.html) | Główny punkt wejścia i widok mobilny |
| [`desktop.html`](desktop.html) | Układ desktopowy |
| [`quiz-core.js`](quiz-core.js) | Wspólna logika quizów i fiszek |
| [`questions_formatted.js`](questions_formatted.js) | Baza pytań i odpowiedzi |
| [`mobile.js`](mobile.js), [`desktop.js`](desktop.js) | Obsługa interfejsów |
| [`style_mobile.css`](style_mobile.css), [`style_desktop.css`](style_desktop.css) | Stylizacja obu wersji |

### ✏️ Własne pytania

Dane zapisane są w `questions_formatted.js` jako obiekty zawierające pola `question` i `answer`. Możesz edytować tę bazę, zachowując istniejący format.

## ❓ FAQ

<details>
<summary><strong>Czy quiz działa na smartfonie?</strong></summary>

Tak, interfejs rozróżnia widok mobilny i komputerowy.

</details>

<details>
<summary><strong>Czy potrzebuję konta albo internetu?</strong></summary>

Nie. Do lokalnego używania wystarczą pobrane pliki i przeglądarka.

</details>

<details>
<summary><strong>Czy można ćwiczyć tylko część materiału?</strong></summary>

Tak. W menu dostępny jest wybór zakresu pytań dla quizu i fiszek.

</details>

## 👤 Autor i licencja

**Szymon Piotr Bławat** · Informatyka, WSB Merito Gdańsk.

[Apache License 2.0](LICENSE.txt) · [Zgłoś błąd lub pomysł](https://github.com/wolfgangxxiii/quiz/issues)

<div align="center"><sub>Powodzenia na egzaminie! 🎓</sub></div>
