# Quiz do Egzaminu Dyplomowego – Informatyka

Interaktywny quiz przygotowujący do egzaminu dyplomowego na kierunku Informatyka (specjalizacja: Aplikacje mobilne i bazy danych, WSB Merito Gdańsk).  
Aplikacja pozwala efektywnie powtarzać materiał w kilku trybach, także na urządzeniach mobilnych.

## Demo online

Quiz dostępny jest online:  
👉 [https://quiz-egazmin.netlify.app/](https://quiz-egazmin.netlify.app/)

---

## Spis treści

- [Opis projektu](#opis-projektu)
- [Technologie](#technologie)
- [Jak korzystać](#jak-korzystać)
  - [Uruchomienie online](#uruchomienie-online)
  - [Uruchomienie lokalne](#uruchomienie-lokalne)
- [Struktura projektu](#struktura-projektu)
- [Funkcjonalności](#funkcjonalności)
- [Wkład własny i rozwój](#wkład-własny-i-rozwój)
- [FAQ](#faq)
- [Autor](#autor)

---

## Opis projektu

Aplikacja pozwala powtarzać zagadnienia z informatyki (m.in. bazy danych, programowanie, bezpieczeństwo, algorytmy, aplikacje mobilne) w formie:

- **Quizu egzaminacyjnego** – 20 losowych pytań z odpowiedziami wielokrotnego wyboru,
- **Trybu nauki** – przechodzenie przez wszystkie pytania wraz z podpowiedziami,
- **Fiszki** – powtórka całego zakresu pytań w formie pytanie-odpowiedź,
- **Quizów i fiszek z wybranego zakresu** – możesz wybrać tylko fragment bazy pytań,
- **Podsumowania wyników** – z opcją powtórki błędnych pytań.

Aplikacja działa zarówno na **desktopie**, jak i **smartfonach/tabletach** – wyświetla optymalny interfejs w zależności od urządzenia.

---

## Technologie

Projekt został stworzony z wykorzystaniem:

- **JavaScript** (logika quizu, obsługa widoków i pytań)
- **HTML** (struktura aplikacji)
- **CSS** (wygląd i responsywność – oddzielne style dla desktop/mobile)

---

## Jak korzystać

### Uruchomienie online

Najprościej:  
Otwórz stronę [https://quiz-egazmin.netlify.app/](https://quiz-egazmin.netlify.app/) i korzystaj od razu w przeglądarce (nie wymaga instalacji).

### Uruchomienie lokalne

1. **Sklonuj repozytorium**:
    ```sh
    git clone https://github.com/wolfgangxxiii/quiz.git
    ```
2. **Wejdź do katalogu z projektem**:
    ```sh
    cd quiz
    ```
3. **Uruchom plik**  
   Otwórz plik `index.html` **w przeglądarce internetowej** (np. przeciągnij plik na okno Chrome/Edge/Firefox).

**Uwaga:**  
- Nie jest wymagany żaden serwer, backend, ani instalacja bibliotek – wystarczy przeglądarka!
- Quiz automatycznie wykrywa, czy korzystasz z komputera czy smartfona/tabletu i uruchamia odpowiedni widok.

---

## Struktura projektu

├── index.html # Strona główna – wersja mobilna

├── desktop.html # Wersja na komputery stacjonarne/laptopy

├── style_mobile.css # Style CSS dla wersji mobilnej

├── style_desktop.css # Style CSS dla wersji desktop

├── questions_formatted.js # Baza pytań i odpowiedzi (JSON/JS)

├── quiz-core.js # Główna logika quizu, wspólna dla obu widoków

├── desktop.js # Skrypt inicjujący widok desktopowy

├── mobile.js # Skrypt inicjujący widok mobilny



**Dane quizu** możesz edytować w pliku `questions_formatted.js` (format: tablica obiektów `{question, answer}`).

---

## Funkcjonalności

- Quiz 20 losowych pytań (wielokrotnego wyboru)
- Tryb nauki – bez presji czasu, wszystkie pytania po kolei
- Tryb fiszek – szybkie powtarzanie (pytanie i odpowiedź)
- Wybór zakresu pytań (np. 1-20, 21-40)
- Możliwość powtarzania tylko błędnych pytań
- Automatyczne dostosowanie wyglądu do urządzenia (mobile/desktop)
- Tryb ciemny (jeśli masz włączony dark mode w systemie/przeglądarce)
- Lekka, szybka aplikacja, działa offline (możesz pobrać i używać bez internetu)
- Przejrzysty kod, łatwy do modyfikacji

---

## Wkład własny i rozwój

Chcesz zgłosić błąd lub rozwinąć projekt?  
- Załóż **issue** na GitHubie  
- Stwórz **pull request** z nową funkcją lub poprawką  
- Pomysły na kolejne tryby/usprawnienia są mile widziane!

---

## FAQ

**1. Czy aplikacja działa na telefonie?**  
Tak! Quiz automatycznie uruchamia się w wersji mobilnej na smartfonach/tabletach.

**2. Nie mam serwera, czy muszę coś instalować?**  
Nie. Wystarczy otworzyć `index.html` (na telefonie) lub `desktop.html` (na komputerze).

**3. Jak dodać własne pytania/odpowiedzi?**  
Edytuj plik `questions_formatted.js` – każdy wpis to jeden obiekt `{question: "...", answer: "..."}`.

**4. Czy mogę użyć quizu do własnych celów edukacyjnych?**  
Tak, repozytorium jest otwarte – możesz korzystać i rozwijać quiz do woli!

---

## Autor

**Szymon Piotr BŁAWAT**  
- [gdx161056@student.gdansk.merito.pl](mailto:gdx161056@student.gdansk.merito.pl)  
- [szymon.bawat@gmail.com](mailto:szymon.bawat@gmail.com)  
- [GitHub: wolfgangxxiii/quiz](https://github.com/wolfgangxxiii/quiz)  
- Wyższa Szkoła Bankowa Merito Gdańsk, kierunek Informatyka  
- Specjalizacja: Aplikacje mobilne i bazy danych

---

**Miłej nauki i powodzenia na egzaminie! 🎓**
