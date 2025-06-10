const questions = [
  {
    "question": "Ochrona programów komputerowych przez prawo autorskie i licencje",
    "answers": [
      {
        "text": "Testy jednostkowe: Narzędzia takie jak JUnit (Android) lub XCTest (iOS) do testowania pojedynczych funkcji. Testy integracyjne: Użycie testów integracyjnych do sprawdzania poprawności działania aplikacji z backendem oraz integracji z bazami danych. Testy UI: Narzędzia jak Espresso (Android) i XCUITest (iOS) umożliwiają automatyczne testowanie interakcji użytkownika z aplikacją. Symulowanie różnych scenariuszy: Korzystanie z emulatorów i rzeczywistych urządzeń, aby testować aplikację w różnych warunkach (np. w trybie offline).",
        "correct": false
      },
      {
        "text": "Teoria prawdopodobieństwa pozwala na efektywne przechowywanie i wyszukiwanie danych z pewnym marginesem błędu. Filtr Blooma: Używany w bazach danych (np. Google BigTable) do szybkiego sprawdzania obecności elementu w zbiorze. Drzewa probabilistyczne: Algorytm Huffmana – kompresja danych poprzez drzewo kodowe. Modele Markowa – przewidywanie kolejnych elementów (np. autokorekta w klawiaturach).",
        "correct": false
      },
      {
        "text": "Python zarządza pamięcią za pomocą automatycznego zarządzania pamięcią i garbage collection. Zmienna w Pythonie nie jest przypisana do konkretnego miejsca w pamięci, a obiekt, który jej odpowiada, jest przechowywany w dynamicznie alokowanej pamięci (sterta). Mechanizmy: Garbage collection: Python automatycznie zwalnia pamięć, gdy obiekt nie jest już używany. Referencje: Liczba referencji do obiektów jest monitorowana, a obiekt zostaje usunięty, gdy nie ma do niego żadnej referencji.",
        "correct": false
      },
      {
        "text": "Programy komputerowe są chronione jako utwory literackie w ramach prawa autorskiego. Oznacza to, że autorzy mają wyłączne prawa do kopi owania, modyfikowania i dystrybucji kodu.\nTypy licencji oprogramowania: Proprietary (zamknięte) – np. Windows, Photoshop – użytkownik może korzystać, ale nie ma dostępu do kodu źródłowego. Open Source (otwarte) – np. Linux, Firefox – kod jest dostępny dla wszystkich, ale licencje określają warunki użytkowania (np. GPL, MIT). Freeware, Shareware, Trial – darmowe lub czasowo ograniczone wersje programów.\nKonsekwencje naruszeń: Mogą obejmować kary finansowe, odpowiedzialność cywilną i karną oraz wykluczenie z rynku.",
        "correct": true
      }
    ]
  },
  {
    "question": "Różnice między Waterfall a Agile (Scrum, Kanban)",
    "answers": [
      {
        "text": "Cechy baz NoSQL: Elastyczność schematów: Brak sztywno zdefiniowanego schematu bazy danych pozwala na przechowywanie różnorodnych typów danych (np. JSON, BSON). Wysoka dostępność: NoSQL zapewnia rozproszone przechowywanie danych na wielu węzłach, co poprawia dostępność i odporność na awarie. Skalowalność: Umożliwia łatwe poziome skalowanie poprzez dodawanie nowych serwerów (sharding), co pozwala obsługiwać duże ilości danych. Replikacja: Dane mogą być replikowane na różnych serwerach, co zapewnia ich bezpieczeństwo i dostępność. Założenia rozproszenia: Partycjonowanie danych (Sharding): Dzieli dane na fragmenty (shardy), które są przechowywane na różnych serwerach, aby zwiększyć wydajność. Replikacja: NoSQL często stosuje replikację danych na różnych węzłach, co zapewnia odporność na awarie i zwiększa dostępność.",
        "correct": false
      },
      {
        "text": "Aby aplikacja była zgodna z nowoczesnymi trendami UX/UI: Dark Mode: Implementacja trybu ciemnego zgodnie z wytycznymi systemów operacyjnych (np. iOS i Android). Użycie systemowych trybów zmiany motywów (np. UIUserInterfaceStyle w iOS) pozwala na łatwą implementację, która będzie zmieniać wygląd aplikacji w zależności od preferencji użytkownika. Gesty nawigacyjne: Integracja gestów takich jak przewijanie, przesuwanie, czy gesty dotykowe (np. Swipe, Tap, Pinch) do nawigacji, które poprawiają interakcję użytkownika. Należy również zadbać o ich spójność z systemem operacyjnym, aby uniknąć konfliktów z wbudowanymi gestami. Minimalistyczny design: Redukowanie elementów graficznych do niezbędnego minimum, co poprawia czytelność i nawigację. Zastosowanie dużych czcionek, prostych ikon oraz eliminacja zbędnych animacji zwiększa efektywność UX.",
        "correct": false
      },
      {
        "text": "Waterfall – sztywna struktura, każda faza projektu (analiza, projektowanie, implementacja, testowanie) jest wykonywana po kolei. Dobra dla dużych projektów z jasno określonymi wymaganiami. Agile (Scrum, Kanban) – elastyczne podejście, iteracyjne, szybkie dostosowywanie do zmian. Scrum wykorzystuje sprinty, a Kanban pozwala na ciągły przepływ zadań.\nKiedy stosować? Waterfall – projekty rządowe, medyczne, gdzie wymagania są stałe. Agile – dynamiczne projekty IT, startupy, aplikacje webowe.",
        "correct": true
      },
      {
        "text": "Obsługa wyjątków jest mechanizmem pozwalającym na zarządzanie błędami w programie. Dzięki niej, kiedy pojawia się błąd, program nie przerywa działania, lecz reaguje na niego w zaplanowany sposób. W językach takich jak Java, C# czy Python, wyjątkami zarządza się przy pomocy bloków try-catch. Blok try zawiera kod, który może spowodować wyjątek, a blok catch obsługuje go, oferując odpowiednią reakcję. Najlepsze praktyki: Zawsze obsługuj konkretne wyjątki, unikaj ogólnych catch. Unikaj używania wyjątków do kontrolowania przepływu programu (np. zamiast try-catch do logiki). Korzystaj z finally do zwalniania zasobów, np. zamykania plików.",
        "correct": false
      }
    ]
  },
  {
    "question": "Znaczenie responsywności w systemach informatycznych",
    "answers": [
      {
        "text": "Najpopularniejsze systemy: Git (rozproszony) – używany w GitHub, GitLab, Bitbucket. SVN (Subversion) – scentralizowany, popularny w korporacjach. Mercurial – podobny do Gita, ale mniej popularny.",
        "correct": false
      },
      {
        "text": "Podejście algorytmiczne – ścisłe reguły, gwarantuje optymalne rozwiązanie (np. Dijkstra do wyznaczania najkrótszej ścieżki). Podejście heurystyczne – przybliżone rozwiązania, szybsze, ale nie zawsze optymalne (np. algorytm mrówkowy do problemu komiwojażera). Zastosowanie: Algorytmy – lepsze w zadaniach wymagających precyzji (np. szyfrowanie). Heurystyki – lepsze w problemach NP-trudnych, gdy optymalne rozwiązanie jest zbyt kosztowne (np. AI, optymalizacja grafiki).",
        "correct": false
      },
      {
        "text": "Aby zoptymalizować wydajność aplikacji mobilnej, można zastosować: Lazy loading: Wczytywanie danych lub widoków tylko wtedy, gdy są one potrzebne, zamiast ładowania wszystkiego na raz. Kompresja zasobów: Kompresowanie obrazów, plików wideo i innych zasobów w celu zmniejszenia ich rozmiaru, co pozwala na szybsze ładowanie aplikacji. Optymalizacja zapytań sieciowych: Redukcja liczby zapytań sieciowych, używanie odpowiednich algorytmów kompresji, minimalizacja danych przesyłanych między urządzeniem a serwerem. Użycie pamięci podręcznej: Przechowywanie często używanych danych (np. obrazy, dane z API) w pamięci podręcznej, co przyspiesza dostęp do nich i zmniejsza obciążenie sieci.",
        "correct": false
      },
      {
        "text": "Responsywność oznacza szybkość reakcji systemu na działania użytkownika. Jest kluczowa dla UX (User Experience), wpływa na wydajność pracy i satysfakcję użytkowników. W systemach krytycznych, np. medycznych, może decydować o bezpieczeństwie pacjentów.",
        "correct": true
      }
    ]
  },
  {
    "question": "Mobile First – co to i dlaczego ważne?",
    "answers": [
      {
        "text": "Podejście Mobile First oznacza projektowanie aplikacji/webów najpierw pod urządzenia mobilne, a potem dostosowywanie do większych ekranów. Jest to ważne, bo: Większość użytkowników korzysta z internetu na smartfonach. Wpływa na SEO – Google promuje strony przyjazne mobilnie. Poprawia UX, bo eliminuje zbędne elementy i optymalizuje działanie na mniejszych ekranach.",
        "correct": true
      },
      {
        "text": "Silne hasła – unikanie prostych kombinacji, używanie menedżerów haseł. Aktualizacje oprogramowania – usuwanie luk w zabezpieczeniach. Zasada najmniejszych uprawnień – użytkownicy powinni mieć tylko niezbędne uprawnienia. Kopia zapasowa (backup) – ochrona przed awariami i ransomware. Unikanie publicznych sieci Wi-Fi – korzystanie z VPN w przypadku łączenia się w niezaufanych sieciach. Edukacja użytkowników – szkolenia z cyberbezpieczeństwa.",
        "correct": false
      },
      {
        "text": "Biblioteki wsparcia wzornictwa w Androidzie oferują narzędzia i komponenty ułatwiające projektowanie interfejsów zgodnych z wytycznymi Material Design. Do najważniejszych funkcji należą: Zestaw komponentów UI: Takich jak widżety przycisków, przełączników, pasków narzędzi, które pozwalają na spójne projektowanie aplikacji. Material Theming: Umożliwia łatwe dostosowanie wyglądu aplikacji poprzez palety kolorów, style typografii i kształty elementów UI. Gesty i animacje: Ułatwiają dodawanie animacji, jak przejścia między ekranami czy efekty dotykowe, które poprawiają interaktywność aplikacji. Zgodność z wersjami Androida: Zapewniają wsparcie dla różnych wersji systemu Android, co pozwala na tworzenie spójnego UI, niezależnie od wersji OS.",
        "correct": false
      },
      {
        "text": "Algebra liniowa jest kluczowa w reprezentacji i manipulacji danymi w postaci macierzy i wektorów. Macierze: Grafika komputerowa – transformacje 3D w OpenGL. Sztuczna inteligencja – operacje na zbiorach danych w uczeniu maszynowym. Wektory: Silniki rekomendacyjne – Word2Vec w NLP do analizy znaczenia słów. Kompresja obrazów – SVD stosowane w redukcji wymiarów.",
        "correct": false
      }
    ]
  },
  {
    "question": "Organizacja danych w systemach plików a bezpieczeństwo",
    "answers": [
      {
        "text": "Tworzenie nowych klas poprzez dziedziczenie z istniejących klas pozwala na reużywanie kodu, co upraszcza organizację programu. Dziedziczenie wspomaga tworzenie hierarchii klas, w których klasy dziedziczą właściwości i metody innych klas. Techniki: Dziedziczenie pojedyncze: Klasa pochodna dziedziczy po jednej klasie bazowej. Dziedziczenie wielokrotne (w językach wspierających): Klasa pochodna dziedziczy po wielu klasach. Zalety: Redukcja powtarzalności kodu. Ułatwienie rozwoju programu przez dodawanie nowych funkcji bez zmiany istniejącego kodu.",
        "correct": false
      },
      {
        "text": "Dane w systemach plików są organizowane hierarchicznie (katalogi, pliki). Kluczowe aspekty bezpieczeństwa: Uprawnienia dostępu (np. chmod w Linuxie). Szyfrowanie plików i dysków. Kontrola wersji i kopie zapasowe. Ograniczenia uprawnień dla użytkowników (zasada najmniejszych uprawnień).",
        "correct": true
      },
      {
        "text": "Systemy rekomendacyjne i analiza danych opierają się na modelach probabilistycznych i metodach statystycznych, aby przewidywać preferencje użytkowników oraz analizować wzorce w danych. Systemy rekomendacyjne: Filtracja kolaboratywna – analiza podobieństw między użytkownikami (np. system Netflix przewiduje filmy na podstawie ocen innych użytkowników o podobnych gustach). Modele Bayesowskie – prognozowanie na podstawie prawdopodobieństwa (np. filtry antyspamowe analizujące treść e-maili). Analiza danych: Regresja liniowa i wieloraka – wykorzystywane do przewidywania trendów na podstawie wcześniejszych danych (np. prognozy sprzedaży). Analiza wariancji (ANOVA) – stosowana do porównywania różnych grup danych (np. testowanie skuteczności reklam w różnych regionach).",
        "correct": false
      },
      {
        "text": "Zasady Human Interface Guidelines (HIG): Spójność: Zgodność z systemowym wyglądem, zapewnienie użytkownikowi intuicyjnego i spójnego doświadczenia z innymi aplikacjami i systemem. Zrozumiałość: Aplikacja powinna mieć logiczną strukturę, nawigację, a przyciski i elementy sterujące powinny być łatwe do znalezienia i używania. Czytelność: Użycie odpowiedniego rozmiaru czcionek, kontrastu oraz przestrzeni pomiędzy elementami interfejsu. Feedback: Aplikacja powinna reagować na akcje użytkownika, np. przez animacje, wibracje lub dźwięki, co zwiększa komfort użytkowania. Dostosowanie do urządzenia: UI powinno dostosować się do różnych rozdzielczości ekranów, formatu urządzenia (iPhone, iPad), oraz wykorzystać natywne gesty. Łatwość używania: Ułatwienia takie jak prostota w obsłudze aplikacji, możliwość szybkiego dostępu do głównych funkcji oraz ograniczenie złożoności interfejsu.",
        "correct": false
      }
    ]
  },
  {
    "question": "Uwarunkowania wykorzystania CMS (Content Management System)",
    "answers": [
      {
        "text": "UIKit: Tradycyjny framework UI używany w iOS. Wymaga ręcznego zarządzania hierarchią widoków i kontrolerów. Bardziej rozbudowany i elastyczny, ale ma wyższą krzywą uczenia się. SwiftUI: Nowoczesny framework oparty na deklaratywnym podejściu do tworzenia UI. Umożliwia łatwiejsze tworzenie UI poprzez deklarację stanu aplikacji i jego aktualizację. Lepsza integracja z nowymi funkcjami systemu iOS, takich jak Dark Mode i Accessibility. Korzyści i wyzwania: UIKit: Jest bardziej dojrzały, szeroko wspierany i elastyczny, ale wymaga więcej kodu do zarządzania widokami. SwiftUI: Uproszczony kod, lepsze wsparcie dla dynamicznych interfejsów, ale może mieć ograniczenia w starszych wersjach iOS (przynajmniej na początku). Preferencje: SwiftUI może być preferowany w nowych projektach, natomiast UIKit pozostaje preferowaną opcją w starszych aplikacjach, gdzie konieczne jest utrzymanie kompatybilności wstecznej.",
        "correct": false
      },
      {
        "text": "CMS (np. WordPress, Joomla, Drupal) ułatwiają zarządzanie treścią, ale: Wymagają aktualizacji dla bezpieczeństwa. Mogą mieć ograniczenia w personalizacji (bez dodatkowego kodowania). Mogą być podatne na ataki (np. SQL Injection, ataki na wtyczki).",
        "correct": true
      },
      {
        "text": "Data Binding w WPF to mechanizm, który pozwala na synchronizację danych między modelem danych a interfejsem użytkownika. Główna idea polega na tym, że zmiany w danych modelu automatycznie odzwierciedlają się w interfejsie, a zmiany w interfejsie mogą być przekazywane do modelu. Przykład w XAML i C#: <TextBox Text=\"{Binding Name}\" /> W tym przypadku Text w kontrolce TextBox jest powiązany z właściwością Name w modelu danych. Zmiana w Name zaktualizuje tekst w polu.",
        "correct": false
      },
      {
        "text": "VLAN (Virtual Local Area Network) to logiczny podział jednej fizycznej sieci na kilka podsieci. Zalety VLAN: Lepsza kontrola ruchu i bezpieczeństwa. Separacja sieci bez potrzeby dodatkowego sprzętu. Redukcja ruchu broadcastowego.",
        "correct": false
      }
    ]
  },
  {
    "question": "Najczęstsze zagrożenia dla bezpieczeństwa sieci",
    "answers": [
      {
        "text": "Wyzwania: Fragmentacja urządzeń: Różne wersje systemów operacyjnych, urządzenia o różnych rozdzielczościach ekranów, procesorach, pojemności pamięci itp. mogą prowadzić do problemów z kompatybilnością aplikacji. Różnice w interfejsie użytkownika: Systemy operacyjne mogą mieć różne wytyczne dotyczące interfejsu użytkownika, co wymaga dostosowania aplikacji do specyficznych wymagań platformy. Jak radzić sobie z wyzwaniami: Testowanie na różnych urządzeniach: Regularne testowanie aplikacji na różnych wersjach systemów operacyjnych i urządzeniach za pomocą emulatorów oraz rzeczywistych urządzeń. Używanie narzędzi takich jak Firebase czy TestFlight (iOS) oraz Android Emulator: Pomagają w testowaniu aplikacji na różnych wersjach systemów operacyjnych. Responsywny design: Użycie rozwiązań responsywnych, które umożliwiają dostosowanie UI do różnych rozdzielczości ekranów. Wersjonowanie kodu: Korzystanie z narzędzi do wersjonowania kodu oraz wtyczek umożliwiających wsparcie dla starszych wersji systemów operacyjnych.",
        "correct": false
      },
      {
        "text": "Podczas budowy systemów AI kluczowe jest odpowiednie zarządzanie danymi treningowymi. Obejmuje to kilka aspektów: Gromadzenie danych – Dane powinny pochodzić z wiarygodnych i legalnych źródeł oraz być zgodne z regulacjami (np. RODO). Warto stosować techniki anonimizacji. Przechowywanie – Dane powinny być zabezpieczone przed nieautoryzowanym dostępem, a ich przechowywanie powinno uwzględniać redundancję (backupy, chmura). Przetwarzanie – Należy zadbać o jakość danych (czyszczenie, normalizacja, usuwanie błędów). Warto stosować techniki augmentacji danych w AI. Zabezpieczanie – Dane muszą być chronione przed wyciekiem (szyfrowanie, kontrola dostępu, audyty).",
        "correct": false
      },
      {
        "text": "Ataki DDoS – przeciążenie serwera. Phishing – wyłudzanie danych. Malware, ransomware – złośliwe oprogramowanie. Man-in-the-middle – przechwytywanie komunikacji. Nieaktualne oprogramowanie – podatności bezpieczeństwa.",
        "correct": true
      },
      {
        "text": "Aby aplikacja była przyjazna dla starszych użytkowników: Duża czcionka i kontrast: Zapewnienie dużych i czytelnych czcionek oraz wysokiego kontrastu, by poprawić czytelność. Prosty, intuicyjny interfejs: Stosowanie prostych i zrozumiałych interakcji, unikanie nadmiernej liczby opcji na ekranie. Pomocne może być użycie jednego ekranu głównego z wyraźnymi przyciskami do podstawowych funkcji. Zwiększona responsywność dotyku: Ułatwienie obsługi aplikacji osobom z ograniczoną sprawnością motoryczną poprzez większe przyciski i obszary dotykowe. Integracja z funkcjami systemowymi: Wykorzystanie funkcji systemowych takich jak Zoom, VoiceOver (iOS) czy TalkBack (Android) do poprawy dostępności aplikacji. Instrukcje i wsparcie: Proste, zrozumiałe komunikaty i dostępność samouczków lub wsparcia na każdym etapie korzystania z aplikacji.",
        "correct": false
      }
    ]
  },
  {
    "question": "Systemy IDS/IPS – wykrywanie i zapobieganie intruzom",
    "answers": [
      {
        "text": "Wirtualizacja to technika, która pozwala uruchamiać wiele systemów operacyjnych na jednym fizycznym komputerze. ✅ Korzyści: Efektywne wykorzystanie sprzętu. Możliwość testowania różnych systemów operacyjnych. Łatwe skalowanie infrastruktury IT. Przykłady narzędzi: VMware, VirtualBox, Hyper-V.",
        "correct": false
      },
      {
        "text": "IDS (Intrusion Detection System) – monitoruje sieć i wykrywa potencjalne ataki, ale nie blokuje ich. IPS (Intrusion Prevention System) – działa aktywnie, wykrywa i blokuje ataki w czasie rzeczywistym.\nDziałają na zasadzie analizy sygnatur lub anomalii ruchu sieciowego.",
        "correct": true
      },
      {
        "text": "Podczas budowy systemów AI kluczowe jest odpowiednie zarządzanie danymi treningowymi. Obejmuje to kilka aspektów: Gromadzenie danych – Dane powinny pochodzić z wiarygodnych i legalnych źródeł oraz być zgodne z regulacjami (np. RODO). Warto stosować techniki anonimizacji. Przechowywanie – Dane powinny być zabezpieczone przed nieautoryzowanym dostępem, a ich przechowywanie powinno uwzględniać redundancję (backupy, chmura). Przetwarzanie – Należy zadbać o jakość danych (czyszczenie, normalizacja, usuwanie błędów). Warto stosować techniki augmentacji danych w AI. Zabezpieczanie – Dane muszą być chronione przed wyciekiem (szyfrowanie, kontrola dostępu, audyty).",
        "correct": false
      },
      {
        "text": "Szyfrowanie chroni dane przed nieautoryzowanym dostępem, poprzez konwersję ich do postaci nieczytelnej dla osób nieposiadających klucza deszyfrującego.\nPrzykłady: HTTPS – szyfrowana komunikacja w sieci. VPN – tunelowanie ruchu internetowego. AES, RSA – algorytmy szyfrowania danych.",
        "correct": false
      }
    ]
  },
  {
    "question": "Zapory sieciowe (firewalle) i ich ograniczenia",
    "answers": [
      {
        "text": "Firewalle filtrują ruch sieciowy na podstawie reguł (np. IP, porty, protokoły). Mogą być sprzętowe lub programowe.\nOgraniczenia: Nie chronią przed atakami wewnętrznymi. Nie zabezpieczają przed phishingiem. Mogą blokować legalne usługi przy błędnej konfiguracji.",
        "correct": true
      },
      {
        "text": "Maska podsieci określa, która część adresu IP jest siecią, a która urządzeniem. Cel – Dzieli sieć na mniejsze podsieci, zwiększając efektywność adresowania. Przykład – Maska 255.255.255.0 oznacza, że pierwsze trzy bajty IP to adres sieci, a ostatni to urządzenie.",
        "correct": false
      },
      {
        "text": "Szyfrowanie symetryczne – Używa jednego klucza do szyfrowania i deszyfrowania (np. AES). Zalety: szybkie, wydajne. Wady: problem z bezpiecznym przekazaniem klucza. Szyfrowanie asymetryczne – Używa dwóch kluczy: publicznego i prywatnego (np. RSA). Zalety: bezpieczniejsze przy wymianie danych. Wady: wolniejsze niż szyfrowanie symetryczne.",
        "correct": false
      },
      {
        "text": "Generics (wzorce szablonów) to technika umożliwiająca tworzenie funkcji i klas, które mogą działać na różnych typach danych bez potrzeby wielokrotnego definiowania tych samych funkcji. Generics zwiększają reużywalność i bezpieczeństwo kodu, ponieważ umożliwiają operowanie na typach w sposób ogólny i elastyczny. Przykład w Javie (Generics): class Para<T, U> { private T pierwszy; private U drugi; public Para(T pierwszy, U drugi) { this.pierwszy = pierwszy; this.drugi = drugi; } public T getPierwszy() { return pierwszy; } public U getDrugi() { return drugi; } } Tutaj Para<T, U> to klasa, która może przechowywać dwa obiekty różnych typów, np. Para<Integer, String>.",
        "correct": false
      }
    ]
  },
  {
    "question": "Zasady bezpiecznego wykorzystywania systemów teleinformatycznych",
    "answers": [
      {
        "text": "Silne hasła – unikanie prostych kombinacji, używanie menedżerów haseł. Aktualizacje oprogramowania – usuwanie luk w zabezpieczeniach. Zasada najmniejszych uprawnień – użytkownicy powinni mieć tylko niezbędne uprawnienia. Kopia zapasowa (backup) – ochrona przed awariami i ransomware. Unikanie publicznych sieci Wi-Fi – korzystanie z VPN w przypadku łączenia się w niezaufanych sieciach. Edukacja użytkowników – szkolenia z cyberbezpieczeństwa.",
        "correct": true
      },
      {
        "text": "Podejście obiektowe (OOP): Uwarunkowania: Stosowane w przypadku systemów, które wymagają dużej elastyczności, rozwoju i ponownego wykorzystania kodu. Dobre dla aplikacji złożonych, które muszą być łatwe w utrzymaniu i rozszerzaniu. Przykład: Programy oparte na aplikacjach mobilnych i rozbudowanych systemach informatycznych. Podejście strukturalne: Uwarunkowania: Skierowane na proste, sekwencyjne operacje, gdzie kod jest bardziej liniowy i łatwiejszy do zrozumienia w mniejszych projektach. Przykład: Systemy wbudowane, proste aplikacje desktopowe.",
        "correct": false
      },
      {
        "text": "Programowanie dynamiczne – np. optymalizacja problemów plecakowych. Podział i zwyciężaj (Divide & Conquer) – np. QuickSort, MergeSort. Kompresja danych – np. Huffman coding w kompresji plików. Równoległe przetwarzanie – np. MapReduce w big data. Przybliżone algorytmy – np. heurystyki dla NP-trudnych problemów.",
        "correct": false
      },
      {
        "text": "Aby zaprojektować aplikację mobilną, która będzie skalowalna: Modularność: Tworzenie aplikacji w sposób modularny, dzieląc ją na mniejsze komponenty. Umożliwia to łatwiejsze zarządzanie aplikacją przy wzroście liczby użytkowników. Chmurowa infrastruktura: Wykorzystanie chmurowych usług backendowych (np. AWS, Google Cloud) do przechowywania danych i obsługi logiki biznesowej, co zapewnia skalowalność. Optymalizacja zapytań sieciowych: Używanie algorytmów kompresji oraz zmniejszenie liczby zapytań do serwera w celu zminimalizowania opóźnień i zmniejszenia obciążenia serwerów. Zastosowanie CDN: Korzystanie z sieci dostarczania treści (CDN), aby przyspieszyć ładowanie zasobów aplikacji z różnych lokalizacji geograficznych. Użycie load balancerów i rozproszonych baz danych: Rozdzielanie obciążenia między serwery i stosowanie baz danych, które obsługują dużą ilość danych oraz zapewniają redundancję.",
        "correct": false
      }
    ]
  },
  {
    "question": "Wpływ szyfrowania na bezpieczeństwo systemów teleinformatycznych",
    "answers": [
      {
        "text": "Normalizacja to proces organizowania danych w bazach danych w celu eliminacji redundancji i zapewnienia integralności danych. Głównym celem normalizacji jest zmniejszenie duplikacji danych, co poprawia efektywność przechowywania i aktualizowania informacji. Pierwsza postać normalna (1NF): Zakłada, że każda kolumna w tabeli zawiera tylko pojedyncze wartości (atomowe) oraz, że wszystkie rekordy są unikalne. Dodatkowo, wszystkie atrybuty muszą być jednorodne, tzn. zawierać dane tego samego typu. Przykład (1NF): Przed normalizacją: ID | Imię | Zajęcia 1  | Jan  | Matematyka, Fizyka 2  | Anna | Historia Po normalizacji do 1NF: ID | Imię | Zajęcia 1  | Jan  | Matematyka 1  | Jan  | Fizyka 2  | Anna | Historia Druga postać normalna (2NF): Wymaga, aby spełniona była 1NF, a także, aby każda kolumna była zależna od całkowitej klucza głównego, a nie tylko od jego części. Przykład (2NF): Przed normalizacją: ID | Nazwa kursu  | Imię nauczyciela | Zajęcia 1  | Matematyka   | Jan Kowalski     | Fizyka 1  | Fizyka       | Anna Nowak       | Matematyka Po normalizacji do 2NF: Tabela 1 (Kursy): ID | Nazwa kursu 1              | Matematyka 2              | Fizyka Tabela 2 (Nauczyciele): Kurs_ID | Nauczyciel 1         | Jan Kowalski 2         | Anna Nowak Trzecia postać normalna (3NF): Wymaga, aby spełniona była 2NF, a także aby każda kolumna niekluczowa była zależna bezpośrednio od klucza głównego i nie miała zależności przechodnich (tzn. nie może być zależna od innych kolumn, które nie są kluczem głównym). Przykład (3NF): Przed normalizacją: ID | Imię | Miasto    | Kod pocztowy 1  | Jan  | Warszawa  | 00-000 2  | Anna | Kraków    | 30-000 Po normalizacji do 3NF: Tabela 1 (Osoby): ID | Imię | Miasto_ID 1                 | Jan  | 1 2                 | Anna | 2 Tabela 2 (Miasta): Miasto_ID | Miasto     | Kod pocztowy 1              | Warszawa  | 00-000 2              | Kraków    | 30-000",
        "correct": false
      },
      {
        "text": "Szyfrowanie chroni dane przed nieautoryzowanym dostępem, poprzez konwersję ich do postaci nieczytelnej dla osób nieposiadających klucza deszyfrującego.\nPrzykłady: HTTPS – szyfrowana komunikacja w sieci. VPN – tunelowanie ruchu internetowego. AES, RSA – algorytmy szyfrowania danych.",
        "correct": true
      },
      {
        "text": "Komputer komunikuje się z urządzeniami poprzez sterowniki oraz interfejsy (USB, PCI, Bluetooth).\nPrzykłady: Klawiatura i mysz (wejście) → przesyłanie sygnałów przez sterownik HID. Monitor (wyjście) → karta graficzna renderuje obraz. Drukarka (wyjście) → komputer wysyła dane w formacie obsługiwanym przez drukarkę (np. PCL, PostScript).",
        "correct": false
      },
      {
        "text": "BPMN (Business Process Model and Notation) to standard notacji graficznej służący do modelowania procesów biznesowych. Dzięki BPMN można tworzyć zrozumiałe i spójne diagramy procesów, które pomagają w analizie, automatyzacji i optymalizacji działań organizacyjnych. Zastosowanie BPMN: Wizualizacja procesów: BPMN umożliwia tworzenie przejrzystych i zrozumiałych schematów procesów, co ułatwia zrozumienie skomplikowanych działań w organizacji. Komunikacja z interesariuszami: Umożliwia przekazywanie zrozumiałych informacji między zespołami biznesowymi i technicznymi. Optymalizacja: Pozwala na identyfikację wąskich gardeł, redundancji i innych problemów w procesach. Wyzwania: Złożoność procesów: Duża liczba elementów BPMN może sprawić, że diagramy staną się nieczytelne. Integracja z systemami IT: Implementacja procesów BPMN w systemach informatycznych może wymagać zaawansowanych narzędzi do automatyzacji procesów. Szkolenie zespołów: Użycie BPMN wymaga pewnego poziomu wiedzy i doświadczenia, co może stanowić wyzwanie w organizacjach bez odpowiedniego przeszkolenia.",
        "correct": false
      }
    ]
  },
  {
    "question": "Główne zagrożenia w systemach teleinformatycznych",
    "answers": [
      {
        "text": "Ataki DDoS – przeciążenie serwerów np. blokowanie dostępu do strony rządowej. Phishing – fałszywe e-maile próbujące wyłudzić dane logowania. Ransomware – szyfrowanie plików i żądanie okupu (np. WannaCry). SQL Injection – atak na bazę danych poprzez wstrzyknięcie złośliwego kodu SQL. Zero-day – wykorzystanie niezałatanych luk bezpieczeństwa.",
        "correct": true
      },
      {
        "text": "Biblioteki wsparcia wzornictwa w Androidzie oferują narzędzia i komponenty ułatwiające projektowanie interfejsów zgodnych z wytycznymi Material Design. Do najważniejszych funkcji należą: Zestaw komponentów UI: Takich jak widżety przycisków, przełączników, pasków narzędzi, które pozwalają na spójne projektowanie aplikacji. Material Theming: Umożliwia łatwe dostosowanie wyglądu aplikacji poprzez palety kolorów, style typografii i kształty elementów UI. Gesty i animacje: Ułatwiają dodawanie animacji, jak przejścia między ekranami czy efekty dotykowe, które poprawiają interaktywność aplikacji. Zgodność z wersjami Androida: Zapewniają wsparcie dla różnych wersji systemu Android, co pozwala na tworzenie spójnego UI, niezależnie od wersji OS.",
        "correct": false
      },
      {
        "text": "Aby zaimplementować funkcje współdzielenia zawartości: Integracja z mediami społecznościowymi: Użycie API takich jak Facebook SDK, Twitter SDK do łatwego udostępniania treści. Udostępnianie plików: Możliwość wysyłania plików za pomocą systemów udostępniania plików, takich jak AirDrop (iOS) lub Intent (Android). Tworzenie uniwersalnych przycisków udostępniania: Umożliwienie użytkownikom udostępniania treści w różnych serwisach społecznościowych bez konieczności przełączania aplikacji.",
        "correct": false
      },
      {
        "text": "Klasa to definicja szablonu dla obiektów, zawierająca zmienne i metody. Jest jak plan budowy domu, natomiast obiekt jest jego fizycznym odpowiednikiem. Obiekt to instancja klasy, tworzona na podstawie tej definicji, która zawiera konkretne dane. Przykład w Java: class Samochod { String model; void uruchomSilnik() { System.out.println(\"Silnik uruchomiony\"); } } Samochod auto = new Samochod(); W tym przykładzie Samochod to klasa, a auto to obiekt.",
        "correct": false
      }
    ]
  },
  {
    "question": "Usługi bezpieczeństwa informacji i możliwe ataki",
    "answers": [
      {
        "text": "Ataki DDoS – przeciążenie serwerów np. blokowanie dostępu do strony rządowej. Phishing – fałszywe e-maile próbujące wyłudzić dane logowania. Ransomware – szyfrowanie plików i żądanie okupu (np. WannaCry). SQL Injection – atak na bazę danych poprzez wstrzyknięcie złośliwego kodu SQL. Zero-day – wykorzystanie niezałatanych luk bezpieczeństwa.",
        "correct": false
      },
      {
        "text": "Poufność – ochrona przed nieautoryzowanym dostępem (zagrożenie: sniffing, ataki man-in-the-middle). Integralność – zapewnienie, że dane nie zostały zmodyfikowane (zagrożenie: ataki typu man-in-the-middle). Dostępność – zapewnienie dostępności usług (zagrożenie: ataki DDoS). Autoryzacja i uwierzytelnianie – weryfikacja tożsamości użytkowników (zagrożenie: brute-force, kradzież sesji).",
        "correct": true
      },
      {
        "text": "Klasa jest definicją, która wskazuje, jakie właściwości i metody będą dostępne dla tworzonych obiektów. Obiekt to instancja klasy, która może być stworzona za pomocą słowa kluczowego new. Przykład w Java: class Samochod { String model; } Samochod auto = new Samochod(); Usuwanie obiektów w Java odbywa się automatycznie przez Garbage Collector, który zarządza pamięcią.",
        "correct": false
      },
      {
        "text": "Indeksowanie: Tworzenie odpowiednich indeksów na kolumnach, które są używane w zapytaniach. Optymalizacja zapytań: Używanie EXPLAIN w SQL do analizy zapytań i identyfikowania nieoptymalnych operacji. Cache'owanie wyników: Przechowywanie często używanych wyników zapytań w pamięci podręcznej. Sharding i replikacja: Dzielnie danych na różne serwery w celu zwiększenia dostępności i wydajności.",
        "correct": false
      }
    ]
  },
  {
    "question": "Sprzętowe i programowe składniki sieci komputerowych",
    "answers": [
      {
        "text": "Sprzętowe: Router – przekierowuje ruch w sieci. Switch – łączy urządzenia w sieci LAN. Firewall sprzętowy – filtruje ruch sieciowy. Serwery – przechowują dane i aplikacje. Programowe: Systemy operacyjne sieciowe (np. Windows Server, Linux). Oprogramowanie firewall (np. iptables, pfSense). VPN – szyfrowanie ruchu internetowego. Systemy IDS/IPS – wykrywanie i zapobieganie atakom.",
        "correct": true
      },
      {
        "text": "Szyfrowanie symetryczne – Używa jednego klucza do szyfrowania i deszyfrowania (np. AES). Zalety: szybkie, wydajne. Wady: problem z bezpiecznym przekazaniem klucza. Szyfrowanie asymetryczne – Używa dwóch kluczy: publicznego i prywatnego (np. RSA). Zalety: bezpieczniejsze przy wymianie danych. Wady: wolniejsze niż szyfrowanie symetryczne.",
        "correct": false
      },
      {
        "text": "Zmienne automatyczne są tworzone i usuwane w czasie działania funkcji, w której zostały zadeklarowane. Przechowywane są na stosie, co zapewnia szybki dostęp, ale mają ograniczony czas życia. Są automatycznie usuwane, gdy funkcja kończy działanie. Zmienne dynamiczne są tworzone na stercie (heap), co daje im możliwość dłuższego życia niż zmienne automatyczne. Muszą być zarządzane ręcznie lub przez system garbage collection (np. w Javie czy Pythonie). Zalety i wady: Zmienne automatyczne: Szybki dostęp, ale ograniczony czas życia i wielkość. Zmienne dynamiczne: Większa elastyczność, ale wymagają zarządzania pamięcią, co może prowadzić do wycieków pamięci.",
        "correct": false
      },
      {
        "text": "CMS (np. WordPress, Joomla, Drupal) ułatwiają zarządzanie treścią, ale: Wymagają aktualizacji dla bezpieczeństwa. Mogą mieć ograniczenia w personalizacji (bez dodatkowego kodowania). Mogą być podatne na ataki (np. SQL Injection, ataki na wtyczki).",
        "correct": false
      }
    ]
  },
  {
    "question": "Efekt lawinowy w kryptografii",
    "answers": [
      {
        "text": "W programowaniu obiektowym, interfejs to kontrakt, który definiuje zestaw metod, które muszą zostać zaimplementowane przez klasy go implementujące. Interfejsy nie zawierają implementacji metod, jedynie ich deklaracje. Implementacja klasy to z kolei rzeczywista definicja metod i zmiennych w klasie. Klasa implementuje interfejs, ale może zawierać także dodatkową funkcjonalność, która nie została określona w interfejsie. Zalety interfejsów: Zwiększają elastyczność i umożliwiają wielokrotne dziedziczenie metod w językach, które tego nie wspierają (np. Java). Ułatwiają tworzenie testowalnych i łatwych do utrzymania systemów, ponieważ można je wymieniać, nie zmieniając implementacji.",
        "correct": false
      },
      {
        "text": "Aby zapewnić płynne działanie aplikacji i zachowanie danych podczas zmiany konfiguracji (np. obrót ekranu), można zastosować: Przechowywanie stanu w pamięci: Korzystanie z mechanizmów przechowywania stanu (np. onSaveInstanceState w Androidzie lub state restoration w iOS), które umożliwiają zachowanie danych i ponowne załadowanie ich po zmianie konfiguracji. Zarządzanie danymi w bazach danych: Przechowywanie kluczowych danych aplikacji w bazach danych lub innych trwałych magazynach, aby były dostępne po ponownym uruchomieniu aplikacji. Unikanie blokowania interfejsu: Aplikacja powinna wykorzystywać asynchroniczne operacje w celu uniknięcia blokowania interfejsu użytkownika podczas zmian konfiguracji.",
        "correct": false
      },
      {
        "text": "Efekt lawinowy oznacza, że nawet minimalna zmiana w danych wejściowych (np. jednym bicie) powoduje znaczącą zmianę w wyniku szyfrowania. Jest kluczowy w algorytmach takich jak AES czy SHA-256, ponieważ zwiększa odporność na ataki.",
        "correct": true
      },
      {
        "text": "Klasa to definicja szablonu dla obiektów, zawierająca zmienne i metody. Jest jak plan budowy domu, natomiast obiekt jest jego fizycznym odpowiednikiem. Obiekt to instancja klasy, tworzona na podstawie tej definicji, która zawiera konkretne dane. Przykład w Java: class Samochod { String model; void uruchomSilnik() { System.out.println(\"Silnik uruchomiony\"); } } Samochod auto = new Samochod(); W tym przykładzie Samochod to klasa, a auto to obiekt.",
        "correct": false
      }
    ]
  },
  {
    "question": "Właściwości grafiki rastrowej i wektorowej",
    "answers": [
      {
        "text": "Grafika rastrowa (np. JPEG, PNG): Składa się z pikseli. Traci jakość po powiększeniu. Nadaje się do zdjęć i realistycznych obrazów. Grafika wektorowa (np. SVG, AI): Składa się z figur geometrycznych. Można skalować bez utraty jakości. Idealna do logotypów i ikon.",
        "correct": true
      },
      {
        "text": "Komputer komunikuje się z urządzeniami poprzez sterowniki oraz interfejsy (USB, PCI, Bluetooth).\nPrzykłady: Klawiatura i mysz (wejście) → przesyłanie sygnałów przez sterownik HID. Monitor (wyjście) → karta graficzna renderuje obraz. Drukarka (wyjście) → komputer wysyła dane w formacie obsługiwanym przez drukarkę (np. PCL, PostScript).",
        "correct": false
      },
      {
        "text": "Obsługa wyjątków jest mechanizmem pozwalającym na zarządzanie błędami w programie. Dzięki niej, kiedy pojawia się błąd, program nie przerywa działania, lecz reaguje na niego w zaplanowany sposób. W językach takich jak Java, C# czy Python, wyjątkami zarządza się przy pomocy bloków try-catch. Blok try zawiera kod, który może spowodować wyjątek, a blok catch obsługuje go, oferując odpowiednią reakcję. Najlepsze praktyki: Zawsze obsługuj konkretne wyjątki, unikaj ogólnych catch. Unikaj używania wyjątków do kontrolowania przepływu programu (np. zamiast try-catch do logiki). Korzystaj z finally do zwalniania zasobów, np. zamykania plików.",
        "correct": false
      },
      {
        "text": "Responsywny design: Użycie technik takich jak Auto Layout (iOS) czy ConstraintLayout (Android) do dostosowania układu do różnych rozmiarów ekranów. Testowanie na różnych urządzeniach: Regularne testowanie aplikacji na różnych urządzeniach o różnych rozdzielczościach ekranów. Minimalizm w designie: Prosty, przejrzysty design z jasnymi i łatwymi do zrozumienia interakcjami. Interaktywne elementy: Używanie animacji i przejść w sposób, który poprawia użyteczność i wrażenia użytkownika.",
        "correct": false
      }
    ]
  },
  {
    "question": "Znane topologie sieci komputerowych",
    "answers": [
      {
        "text": "Heurystyki Nielsena to 10 zasad UX, pomagające w projektowaniu intuicyjnych interfejsów. Przykład: \"Zapewnij informację o stanie systemu\" Użytkownik powinien zawsze wiedzieć, co się dzieje (np. pasek ładowania, komunikaty błędów). Przykład: Gmail informuje o wysyłaniu wiadomości („Wiadomość została wysłana”).",
        "correct": false
      },
      {
        "text": "Magistrali – wszystkie urządzenia podłączone do jednej linii (prosta, ale awaryjna). Pierścienia – dane krążą w jednym kierunku (wydajna, ale podatna na awarie). Gwiazdy – centralny punkt (switch/router) łączy wszystkie urządzenia (popularna i bezpieczna). Siatki (mesh) – każde urządzenie może łączyć się z każdym (wysoka redundancja).",
        "correct": true
      },
      {
        "text": "Testy jednostkowe (Unit tests): Testowanie poszczególnych funkcji i metod aplikacji w celu sprawdzenia, czy działają one zgodnie z oczekiwaniami. Testy integracyjne (Integration tests): Testowanie interakcji pomiędzy różnymi modułami lub komponentami aplikacji. Testy funkcjonalne (Functional tests): Sprawdzanie, czy aplikacja działa zgodnie z wymaganiami i specyfikacjami. Testy UI (User Interface tests): Testowanie interakcji użytkownika z aplikacją, sprawdzanie, czy elementy UI są odpowiednio rozmieszczone i czy są intuicyjne. Testy wydajnościowe (Performance tests): Mierzenie szybkości działania aplikacji, jej odpowiedzi na różne operacje, np. ładowanie danych. Testy bezpieczeństwa (Security tests): Sprawdzanie, czy aplikacja jest odporna na ataki i zapewnia bezpieczeństwo danych użytkownika.",
        "correct": false
      },
      {
        "text": "Aby zapewnić niezawodną komunikację i synchronizację danych, należy: Używać bezpiecznych połączeń (HTTPS): Zapewnienie bezpieczeństwa danych przesyłanych między aplikacją mobilną a backendem. Wykorzystanie technologii push (np. FCM, APNs): Umożliwia to synchronizację danych w czasie rzeczywistym. Zoptymalizowane API: Tworzenie RESTful API, które jest szybkie, wydajne i łatwe w integracji z aplikacjami mobilnymi. Używanie lokalnych baz danych: Zapewnia to możliwość przechowywania danych offline i synchronizacji ich, gdy połączenie z internetem będzie dostępne.",
        "correct": false
      }
    ]
  },
  {
    "question": "Współpraca komputera z urządzeniami wejścia/wyjścia",
    "answers": [
      {
        "text": "Komputer komunikuje się z urządzeniami poprzez sterowniki oraz interfejsy (USB, PCI, Bluetooth).\nPrzykłady: Klawiatura i mysz (wejście) → przesyłanie sygnałów przez sterownik HID. Monitor (wyjście) → karta graficzna renderuje obraz. Drukarka (wyjście) → komputer wysyła dane w formacie obsługiwanym przez drukarkę (np. PCL, PostScript).",
        "correct": true
      },
      {
        "text": "Testy jednostkowe: Używanie frameworków takich jak XCTest do testowania poszczególnych funkcji i metod aplikacji. Testy UI: Automatyzacja testów UI za pomocą narzędzi takich jak XCUITest do interakcji z interfejsem aplikacji. Mockowanie danych: Używanie mocków i stubów do symulacji danych, które aplikacja przetwarza. Continuous Integration (CI): Używanie narzędzi CI, takich jak Jenkins lub Bitrise, do automatyzacji testów podczas każdego commita w kodzie. Testy wydajnościowe: Używanie narzędzi takich jak Instruments w Xcode, które pozwala na śledzenie użycia CPU, pamięci, animacji i renderowania UI w aplikacji.",
        "correct": false
      },
      {
        "text": "Efekt lawinowy oznacza, że nawet minimalna zmiana w danych wejściowych (np. jednym bicie) powoduje znaczącą zmianę w wyniku szyfrowania. Jest kluczowy w algorytmach takich jak AES czy SHA-256, ponieważ zwiększa odporność na ataki.",
        "correct": false
      },
      {
        "text": "SOLID to zestaw zasad ułatwiających tworzenie czytelnego i elastycznego kodu: S (Single Responsibility Principle) – Każda klasa powinna mieć tylko jedną odpowiedzialność. O (Open/Closed Principle) – Klasy powinny być otwarte na rozszerzenia, ale zamknięte na modyfikacje. L (Liskov Substitution Principle) – Obiekty klas pochodnych powinny być wymienne z obiektami klas bazowych. I (Interface Segregation Principle) – Interfejsy powinny być dopasowane do potrzeb klas. D (Dependency Inversion Principle) – Zależności powinny być skierowane na abstrakcje, a nie konkretne klasy.",
        "correct": false
      }
    ]
  },
  {
    "question": "Rodzaje testów i korzyści automatyzacji",
    "answers": [
      {
        "text": "BPMN (Business Process Model and Notation) to standard notacji graficznej służący do modelowania procesów biznesowych. Dzięki BPMN można tworzyć zrozumiałe i spójne diagramy procesów, które pomagają w analizie, automatyzacji i optymalizacji działań organizacyjnych. Zastosowanie BPMN: Wizualizacja procesów: BPMN umożliwia tworzenie przejrzystych i zrozumiałych schematów procesów, co ułatwia zrozumienie skomplikowanych działań w organizacji. Komunikacja z interesariuszami: Umożliwia przekazywanie zrozumiałych informacji między zespołami biznesowymi i technicznymi. Optymalizacja: Pozwala na identyfikację wąskich gardeł, redundancji i innych problemów w procesach. Wyzwania: Złożoność procesów: Duża liczba elementów BPMN może sprawić, że diagramy staną się nieczytelne. Integracja z systemami IT: Implementacja procesów BPMN w systemach informatycznych może wymagać zaawansowanych narzędzi do automatyzacji procesów. Szkolenie zespołów: Użycie BPMN wymaga pewnego poziomu wiedzy i doświadczenia, co może stanowić wyzwanie w organizacjach bez odpowiedniego przeszkolenia.",
        "correct": false
      },
      {
        "text": "Modele relacyjne: Bazują na tabelach, gdzie dane są przechowywane w wierszach i kolumnach. Relacyjne bazy danych, jak MySQL, PostgreSQL, SQL Server, używają języka SQL do zarządzania danymi. Zalety: Struktura danych jest bardzo uporządkowana i spójna. Zastosowanie kluczy głównych i obcych zapewnia integralność danych. Obsługują transakcje ACID (Atomicity, Consistency, Isolation, Durability). Wady: Skalowalność może być problemem w przypadku dużych zbiorów danych. Modele relacyjne mogą być mniej elastyczne w przypadku nieustrukturalizowanych danych. Modele nierelacyjne (NoSQL): Bazy danych, które nie stosują tabeli i wierszy. Zamiast tego mogą używać różnych formatów przechowywania danych, takich jak dokumenty, klucze-wartości, grafy czy kolumny. Zalety: Lepsza skalowalność pozioma. Elastyczność w przechowywaniu danych niestrukturalnych. Wydajność w obsłudze dużych ilości danych w czasie rzeczywistym. Wady: Brak jednolitej struktury może prowadzić do problemów z integralnością danych. Brak standardowego języka zapytań.",
        "correct": false
      },
      {
        "text": "Szyfrowanie symetryczne – Używa jednego klucza do szyfrowania i deszyfrowania (np. AES). Zalety: szybkie, wydajne. Wady: problem z bezpiecznym przekazaniem klucza. Szyfrowanie asymetryczne – Używa dwóch kluczy: publicznego i prywatnego (np. RSA). Zalety: bezpieczniejsze przy wymianie danych. Wady: wolniejsze niż szyfrowanie symetryczne.",
        "correct": false
      },
      {
        "text": "Rodzaje testów: Jednostkowe – testowanie pojedynczych modułów kodu. Integracyjne – sprawdzanie komunikacji między modułami. Systemowe – testowanie całości aplikacji. Akceptacyjne – testowanie zgodności z wymaganiami biznesowymi. Korzyści automatyzacji: Szybsze wykrywanie błędów. Możliwość wielokrotnego powtarzania testów. Redukcja kosztów testowania. Mniejsze ryzyko błędu ludzkiego.",
        "correct": true
      }
    ]
  },
  {
    "question": "Kluczowe funkcje narzędzi do zarządzania projektami",
    "answers": [
      {
        "text": "Android Studio to oficjalne środowisko programistyczne dla systemu Android. Jego główne funkcje to: Edytor kodu: Zaawansowany edytor z funkcjami automatycznego uzupełniania kodu, refaktoryzacji oraz diagnostyki błędów. Emulator Android: Umożliwia uruchomienie aplikacji na różnych wersjach Androida i urządzeniach wirtualnych. Narzędzia do debugowania: Android Studio zapewnia narzędzia do debugowania aplikacji, które pomagają śledzić błędy i analizować logi. Wbudowane narzędzia do testowania: Integracja z narzędziami do testowania, zarówno jednostkowymi, jak i UI, umożliwia sprawdzanie jakości aplikacji. Designer UI: Graficzny edytor do tworzenia interfejsów użytkownika w technologii XML oraz Jetpack Compose.",
        "correct": false
      },
      {
        "text": "Wirtualizacja to technika, która pozwala uruchamiać wiele systemów operacyjnych na jednym fizycznym komputerze. ✅ Korzyści: Efektywne wykorzystanie sprzętu. Możliwość testowania różnych systemów operacyjnych. Łatwe skalowanie infrastruktury IT. Przykłady narzędzi: VMware, VirtualBox, Hyper-V.",
        "correct": false
      },
      {
        "text": "Narzędzia takie jak Jira, Trello, Asana, Redmine oferują: Zarządzanie zadaniami – tworzenie i przypisywanie zadań. Harmonogramowanie – wykresy Gantta, sprinty Scrum. Śledzenie postępów – tablice Kanban. Zarządzanie dokumentacją – wiki, repozytoria kodu. Integracje z narzędziami deweloperskimi (np. GitHub, CI/CD).",
        "correct": true
      },
      {
        "text": "Komputer komunikuje się z urządzeniami poprzez sterowniki oraz interfejsy (USB, PCI, Bluetooth).\nPrzykłady: Klawiatura i mysz (wejście) → przesyłanie sygnałów przez sterownik HID. Monitor (wyjście) → karta graficzna renderuje obraz. Drukarka (wyjście) → komputer wysyła dane w formacie obsługiwanym przez drukarkę (np. PCL, PostScript).",
        "correct": false
      }
    ]
  },
  {
    "question": "Najpopularniejsze systemy kontroli wersji i ich zalety/wady",
    "answers": [
      {
        "text": "Najpopularniejsze systemy: Git (rozproszony) – używany w GitHub, GitLab, Bitbucket. SVN (Subversion) – scentralizowany, popularny w korporacjach. Mercurial – podobny do Gita, ale mniej popularny.",
        "correct": true
      },
      {
        "text": "Silne hasła – unikanie prostych kombinacji, używanie menedżerów haseł. Aktualizacje oprogramowania – usuwanie luk w zabezpieczeniach. Zasada najmniejszych uprawnień – użytkownicy powinni mieć tylko niezbędne uprawnienia. Kopia zapasowa (backup) – ochrona przed awariami i ransomware. Unikanie publicznych sieci Wi-Fi – korzystanie z VPN w przypadku łączenia się w niezaufanych sieciach. Edukacja użytkowników – szkolenia z cyberbezpieczeństwa.",
        "correct": false
      },
      {
        "text": "Modyfikatory dostępu kontrolują, który kod może uzyskać dostęp do członków klasy. W różnych językach (np. Java, C#) są stosowane modyfikatory takie jak: public – dostęp do członka klasy z każdej lokalizacji w kodzie. private – dostęp tylko wewnątrz klasy. protected – dostęp w obrębie klasy i klas dziedziczących. Przykład w Java: public class Osoba { private String imie; protected int wiek; }",
        "correct": false
      },
      {
        "text": "Dziedziczenie to jedna z podstawowych zasad programowania obiektowego, która umożliwia tworzenie nowych klas na podstawie już istniejących, odziedziczając ich właściwości i metody. Pozwala to na organizowanie klas w hierarchię, gdzie klasy pochodne (subklasy) dziedziczą po klasach bazowych (superklasach). Dzięki dziedziczeniu możemy ponownie wykorzystać kod, a także rozszerzać funkcjonalność bez konieczności pisania tego samego kodu od nowa. Przykład w Javie: class Pojazd { void uruchomSilnik() { System.out.println(\"Silnik uruchomiony!\"); } } class Samochod extends Pojazd { void włączKlimatyzację() { System.out.println(\"Klimatyzacja włączona!\"); } } public class Main { public static void main(String[] args) { Samochod samochod = new Samochod(); samochod.uruchomSilnik(); // metoda odziedziczona samochod.włączKlimatyzację(); // metoda specyficzna dla Samochodu } } W tym przypadku klasa Samochod dziedziczy metodę uruchomSilnik z klasy Pojazd.",
        "correct": false
      }
    ]
  },
  {
    "question": "Heurystyki Jacoba Nielsena – zasady użyteczności interfejsów",
    "answers": [
      {
        "text": "Złożoność czasowa określa, jak szybko rośnie czas wykonania w zależności od ilości danych. np. O(n log n) (Merge Sort) jest lepsze niż O(n²) (Bubble Sort) dla dużych zbiorów. Złożoność pamięciowa – ile pamięci zajmuje algorytm. np. DFS może być bardziej pamięciooszczędny niż BFS w niektórych sytuacjach.",
        "correct": false
      },
      {
        "text": "Wzorce projektowe to sprawdzone, powtarzalne rozwiązania dla najczęstszych problemów projektowych w inżynierii oprogramowania. Pomagają w tworzeniu elastycznych, skalowalnych i łatwych do utrzymania systemów. Rodzaje wzorców: Creational (tworzeniowe): Wzorce służące do tworzenia obiektów, np. Factory Method. Structural (strukturalne): Wzorce organizujące klasy i obiekty, np. Adapter. Behavioral (behawioralne): Wzorce definiujące komunikację między obiektami, np. Observer.",
        "correct": false
      },
      {
        "text": "Badania użytkowników – analiza potrzeb, np. wywiady, ankiety. Tworzenie person i scenariuszy – definiowanie grup docelowych. Wireframing i prototypowanie – szkice i interaktywne modele UI. Testy użyteczności – weryfikacja projektu na użytkownikach. Iteracyjne poprawki – dostosowanie UX na podstawie testów.",
        "correct": false
      },
      {
        "text": "Heurystyki Nielsena to 10 zasad UX, pomagające w projektowaniu intuicyjnych interfejsów. Przykład: \"Zapewnij informację o stanie systemu\" Użytkownik powinien zawsze wiedzieć, co się dzieje (np. pasek ładowania, komunikaty błędów). Przykład: Gmail informuje o wysyłaniu wiadomości („Wiadomość została wysłana”).",
        "correct": true
      }
    ]
  },
  {
    "question": "Etapy procesu UX produktu cyfrowego",
    "answers": [
      {
        "text": "Polimorfizm to cecha programowania obiektowego, która pozwala na wykorzystanie tej samej metody w różnych klasach. Pozwala to na elastyczność i ponowne użycie kodu. Przykład w Java: class Zwierze { void dzwiek() { System.out.println(\"Dźwięk zwierzęcia\"); } } class Kot extends Zwierze { void dzwiek() { System.out.println(\"Miau\"); } } Polimorfizm pozwala na to, by obiekt Kot zachowywał się zgodnie z własną implementacją metody dzwiek(), nawet jeśli jego typ to Zwierze.",
        "correct": false
      },
      {
        "text": "MVC (Model-View-Controller) to wzorzec architektoniczny, który dzieli aplikację na trzy główne komponenty: Model: Odpowiada za logikę biznesową i dostęp do danych. View: Odpowiada za interfejs użytkownika (UI). Controller: Pośredniczy pomiędzy modelem a widokiem, zarządza logiką aplikacji. Zastosowanie: MVC jest idealne w aplikacjach webowych i mobilnych, gdzie mamy wyraźny podział na dane (Model), interfejs użytkownika (View) i logikę sterującą (Controller). Przykład: aplikacje typu e-commerce, blogi.",
        "correct": false
      },
      {
        "text": "Badania użytkowników – analiza potrzeb, np. wywiady, ankiety. Tworzenie person i scenariuszy – definiowanie grup docelowych. Wireframing i prototypowanie – szkice i interaktywne modele UI. Testy użyteczności – weryfikacja projektu na użytkownikach. Iteracyjne poprawki – dostosowanie UX na podstawie testów.",
        "correct": true
      },
      {
        "text": "Aplikacje natywne to programy stworzone specjalnie dla konkretnego systemu operacyjnego (np. Android, iOS), natomiast aplikacje internetowe działają w przeglądarce i nie wymagają instalacji. ✅ Zalety aplikacji natywnych: Lepsza wydajność i szybkość działania. Pełny dostęp do funkcji urządzenia (kamera, GPS, powiadomienia). Możliwość pracy offline. ❌ Wady aplikacji natywnych: Wyższy koszt i czas produkcji (osobne wersje na Androida i iOS). Konieczność aktualizacji przez użytkownika. ✅ Zalety aplikacji internetowych: Działają na wszystkich urządzeniach z przeglądarką. Aktualizacje są natychmiastowe i nie wymagają instalacji. ❌ Wady aplikacji internetowych: Wolniejsze działanie w porównaniu do natywnych. Ograniczony dostęp do funkcji urządzenia. Wymagają stałego połączenia z internetem.",
        "correct": false
      }
    ]
  },
  {
    "question": "Główne kroki projektowania algorytmu i ich wpływ na system",
    "answers": [
      {
        "text": "Definicja problemu – jasne określenie celu. Analiza danych wejściowych i wyjściowych – określenie struktur danych. Projektowanie algorytmu – wybór metody rozwiązania (np. rekurencja, programowanie dynamiczne). Analiza złożoności – ocena wydajności (czas/pamięć). Implementacja i testowanie – sprawdzenie poprawności działania. Optymalizacja – ulepszanie algorytmu dla lepszej efektywności.",
        "correct": true
      },
      {
        "text": "Podejście algorytmiczne – ścisłe reguły, gwarantuje optymalne rozwiązanie (np. Dijkstra do wyznaczania najkrótszej ścieżki). Podejście heurystyczne – przybliżone rozwiązania, szybsze, ale nie zawsze optymalne (np. algorytm mrówkowy do problemu komiwojażera). Zastosowanie: Algorytmy – lepsze w zadaniach wymagających precyzji (np. szyfrowanie). Heurystyki – lepsze w problemach NP-trudnych, gdy optymalne rozwiązanie jest zbyt kosztowne (np. AI, optymalizacja grafiki).",
        "correct": false
      },
      {
        "text": "Aby aplikacja była zgodna z nowoczesnymi trendami UX/UI: Dark Mode: Implementacja trybu ciemnego zgodnie z wytycznymi systemów operacyjnych (np. iOS i Android). Użycie systemowych trybów zmiany motywów (np. UIUserInterfaceStyle w iOS) pozwala na łatwą implementację, która będzie zmieniać wygląd aplikacji w zależności od preferencji użytkownika. Gesty nawigacyjne: Integracja gestów takich jak przewijanie, przesuwanie, czy gesty dotykowe (np. Swipe, Tap, Pinch) do nawigacji, które poprawiają interakcję użytkownika. Należy również zadbać o ich spójność z systemem operacyjnym, aby uniknąć konfliktów z wbudowanymi gestami. Minimalistyczny design: Redukowanie elementów graficznych do niezbędnego minimum, co poprawia czytelność i nawigację. Zastosowanie dużych czcionek, prostych ikon oraz eliminacja zbędnych animacji zwiększa efektywność UX.",
        "correct": false
      },
      {
        "text": "Wątek to podstawowa jednostka wykonawcza w systemie operacyjnym. Jest częścią procesu, ale ma własny licznik rozkazów i stos. Wątki pozwalają na równoległe wykonywanie zadań, np. odtwarzanie muzyki i przeglądanie internetu jednocześnie. Zalety wielowątkowości: poprawa wydajności, efektywne wykorzystanie procesora, szybsza reakcja aplikacji. Problemy: synchronizacja wątków (np. dostęp do tych samych zasobów).",
        "correct": false
      }
    ]
  },
  {
    "question": "Wpływ analizy złożoności obliczeniowej na wybór algorytmu",
    "answers": [
      {
        "text": "Aplikacje natywne to programy stworzone specjalnie dla konkretnego systemu operacyjnego (np. Android, iOS), natomiast aplikacje internetowe działają w przeglądarce i nie wymagają instalacji. ✅ Zalety aplikacji natywnych: Lepsza wydajność i szybkość działania. Pełny dostęp do funkcji urządzenia (kamera, GPS, powiadomienia). Możliwość pracy offline. ❌ Wady aplikacji natywnych: Wyższy koszt i czas produkcji (osobne wersje na Androida i iOS). Konieczność aktualizacji przez użytkownika. ✅ Zalety aplikacji internetowych: Działają na wszystkich urządzeniach z przeglądarką. Aktualizacje są natychmiastowe i nie wymagają instalacji. ❌ Wady aplikacji internetowych: Wolniejsze działanie w porównaniu do natywnych. Ograniczony dostęp do funkcji urządzenia. Wymagają stałego połączenia z internetem.",
        "correct": false
      },
      {
        "text": "Aby zoptymalizować wydajność aplikacji na iOS, programiści używają różnych technik i narzędzi: Profilowanie: Xcode oferuje narzędzia takie jak Instruments, które umożliwiają profilowanie aplikacji pod kątem zużycia CPU, pamięci i innych zasobów. Profilowanie pomaga zidentyfikować miejsca w aplikacji, które wymagają optymalizacji. Zarządzanie pamięcią: iOS zarządza pamięcią automatycznie, ale programiści muszą unikać wycieków pamięci i odpowiednio zarządzać zasobami. Używanie ARC (Automatic Reference Counting) w iOS pozwala na automatyczne zwalnianie pamięci, ale należy pamiętać o odpowiednim zarządzaniu cyklem życia obiektów. Optymalizacja renderowania UI: iOS oferuje różne narzędzia do analizy renderowania interfejsu użytkownika, takie jak Instruments (Core Animation) do monitorowania opóźnień renderowania UI. Optymalizacja animacji, redukcja liczby widoków w hierarchii UI i używanie lazy loading może znacznie poprawić wydajność. Redukcja operacji synchronizacji: Zbyt częsta synchronizacja z serwerem może prowadzić do spowolnienia aplikacji. Optymalizowanie czasów synchronizacji i zarządzanie nimi, np. w tle, może poprawić wydajność.",
        "correct": false
      },
      {
        "text": "Responsywność oznacza szybkość reakcji systemu na działania użytkownika. Jest kluczowa dla UX (User Experience), wpływa na wydajność pracy i satysfakcję użytkowników. W systemach krytycznych, np. medycznych, może decydować o bezpieczeństwie pacjentów.",
        "correct": false
      },
      {
        "text": "Złożoność czasowa określa, jak szybko rośnie czas wykonania w zależności od ilości danych. np. O(n log n) (Merge Sort) jest lepsze niż O(n²) (Bubble Sort) dla dużych zbiorów. Złożoność pamięciowa – ile pamięci zajmuje algorytm. np. DFS może być bardziej pamięciooszczędny niż BFS w niektórych sytuacjach.",
        "correct": true
      }
    ]
  },
  {
    "question": "Najczęstsze techniki optymalizacji algorytmów i ich zastosowania",
    "answers": [
      {
        "text": "Programowanie dynamiczne – np. optymalizacja problemów plecakowych. Podział i zwyciężaj (Divide & Conquer) – np. QuickSort, MergeSort. Kompresja danych – np. Huffman coding w kompresji plików. Równoległe przetwarzanie – np. MapReduce w big data. Przybliżone algorytmy – np. heurystyki dla NP-trudnych problemów.",
        "correct": true
      },
      {
        "text": "Biblioteki wsparcia wzornictwa w Androidzie oferują narzędzia i komponenty ułatwiające projektowanie interfejsów zgodnych z wytycznymi Material Design. Do najważniejszych funkcji należą: Zestaw komponentów UI: Takich jak widżety przycisków, przełączników, pasków narzędzi, które pozwalają na spójne projektowanie aplikacji. Material Theming: Umożliwia łatwe dostosowanie wyglądu aplikacji poprzez palety kolorów, style typografii i kształty elementów UI. Gesty i animacje: Ułatwiają dodawanie animacji, jak przejścia między ekranami czy efekty dotykowe, które poprawiają interaktywność aplikacji. Zgodność z wersjami Androida: Zapewniają wsparcie dla różnych wersji systemu Android, co pozwala na tworzenie spójnego UI, niezależnie od wersji OS.",
        "correct": false
      },
      {
        "text": "Responsywność oznacza szybkość reakcji systemu na działania użytkownika. Jest kluczowa dla UX (User Experience), wpływa na wydajność pracy i satysfakcję użytkowników. W systemach krytycznych, np. medycznych, może decydować o bezpieczeństwie pacjentów.",
        "correct": false
      },
      {
        "text": "Zasady teorii liczb są stosowane w mechanizmach bezpieczeństwa. Drzewa Merkle’a: Używane w blockchainie do weryfikacji integralności danych. Generatory liczb losowych: Oparte na kongruencjach liniowych, np. w szyfrowaniu strumieniowym.",
        "correct": false
      }
    ]
  },
  {
    "question": "Wpływ podejść algorytmicznych na skalowalność systemu",
    "answers": [
      {
        "text": "Aby zaprojektować aplikację mobilną, która będzie skalowalna: Modularność: Tworzenie aplikacji w sposób modularny, dzieląc ją na mniejsze komponenty. Umożliwia to łatwiejsze zarządzanie aplikacją przy wzroście liczby użytkowników. Chmurowa infrastruktura: Wykorzystanie chmurowych usług backendowych (np. AWS, Google Cloud) do przechowywania danych i obsługi logiki biznesowej, co zapewnia skalowalność. Optymalizacja zapytań sieciowych: Używanie algorytmów kompresji oraz zmniejszenie liczby zapytań do serwera w celu zminimalizowania opóźnień i zmniejszenia obciążenia serwerów. Zastosowanie CDN: Korzystanie z sieci dostarczania treści (CDN), aby przyspieszyć ładowanie zasobów aplikacji z różnych lokalizacji geograficznych. Użycie load balancerów i rozproszonych baz danych: Rozdzielanie obciążenia między serwery i stosowanie baz danych, które obsługują dużą ilość danych oraz zapewniają redundancję.",
        "correct": false
      },
      {
        "text": "Efektywne algorytmy (np. O(n log n) zamiast O(n²)) pozwalają na obsługę większej liczby użytkowników. Struktury danych (np. drzewa AVL zamiast list) mogą poprawić czas dostępu do danych. Równoległość – algorytmy równoległe (np. MapReduce) zwiększają skalowalność w systemach rozproszonych.",
        "correct": true
      },
      {
        "text": "Silniki ORM umożliwiają mapowanie obiektów w programowaniu obiektowym na tabele w relacyjnej bazie danych, co upraszcza pracę z bazą danych w aplikacjach. Przykłady ORM: Hibernate (Java): Umożliwia mapowanie klas Java do tabel w bazach SQL, automatyzując operacje CRUD. Entity Framework (C#): Narzędzie ORM dla platformy .NET, pozwala na manipulację danymi w bazie danych przy użyciu obiektów C#. Django ORM (Python): Zintegrowane w Django ORM, umożliwia interakcję z bazą danych SQL za pomocą Pythonowych obiektów.",
        "correct": false
      },
      {
        "text": "Teoria prawdopodobieństwa pozwala na efektywne przechowywanie i wyszukiwanie danych z pewnym marginesem błędu. Filtr Blooma: Używany w bazach danych (np. Google BigTable) do szybkiego sprawdzania obecności elementu w zbiorze. Drzewa probabilistyczne: Algorytm Huffmana – kompresja danych poprzez drzewo kodowe. Modele Markowa – przewidywanie kolejnych elementów (np. autokorekta w klawiaturach).",
        "correct": false
      }
    ]
  },
  {
    "question": "Podejście algorytmiczne vs. heurystyczne w rozwiązywaniu problemów",
    "answers": [
      {
        "text": "Android Studio to oficjalne środowisko programistyczne dla systemu Android. Jego główne funkcje to: Edytor kodu: Zaawansowany edytor z funkcjami automatycznego uzupełniania kodu, refaktoryzacji oraz diagnostyki błędów. Emulator Android: Umożliwia uruchomienie aplikacji na różnych wersjach Androida i urządzeniach wirtualnych. Narzędzia do debugowania: Android Studio zapewnia narzędzia do debugowania aplikacji, które pomagają śledzić błędy i analizować logi. Wbudowane narzędzia do testowania: Integracja z narzędziami do testowania, zarówno jednostkowymi, jak i UI, umożliwia sprawdzanie jakości aplikacji. Designer UI: Graficzny edytor do tworzenia interfejsów użytkownika w technologii XML oraz Jetpack Compose.",
        "correct": false
      },
      {
        "text": "Podejście algorytmiczne – ścisłe reguły, gwarantuje optymalne rozwiązanie (np. Dijkstra do wyznaczania najkrótszej ścieżki). Podejście heurystyczne – przybliżone rozwiązania, szybsze, ale nie zawsze optymalne (np. algorytm mrówkowy do problemu komiwojażera). Zastosowanie: Algorytmy – lepsze w zadaniach wymagających precyzji (np. szyfrowanie). Heurystyki – lepsze w problemach NP-trudnych, gdy optymalne rozwiązanie jest zbyt kosztowne (np. AI, optymalizacja grafiki).",
        "correct": true
      },
      {
        "text": "Poufność – ochrona przed nieautoryzowanym dostępem (zagrożenie: sniffing, ataki man-in-the-middle). Integralność – zapewnienie, że dane nie zostały zmodyfikowane (zagrożenie: ataki typu man-in-the-middle). Dostępność – zapewnienie dostępności usług (zagrożenie: ataki DDoS). Autoryzacja i uwierzytelnianie – weryfikacja tożsamości użytkowników (zagrożenie: brute-force, kradzież sesji).",
        "correct": false
      },
      {
        "text": "Wzorce projektowe to sprawdzone, powtarzalne rozwiązania dla najczęstszych problemów projektowych w inżynierii oprogramowania. Pomagają w tworzeniu elastycznych, skalowalnych i łatwych do utrzymania systemów. Rodzaje wzorców: Creational (tworzeniowe): Wzorce służące do tworzenia obiektów, np. Factory Method. Structural (strukturalne): Wzorce organizujące klasy i obiekty, np. Adapter. Behavioral (behawioralne): Wzorce definiujące komunikację między obiektami, np. Observer.",
        "correct": false
      }
    ]
  },
  {
    "question": "Rachunek różniczkowy i całkowy w optymalizacji algorytmów i modeli predykcyjnych",
    "answers": [
      {
        "text": "Optymalizacja funkcji kosztu w AI – gradient descent używa pochodnych do minimalizacji błędów w sieciach neuronowych. Analiza szybkości zmian – różniczkowanie pomaga w dynamicznym sterowaniu systemami. Interpolacja i aproksymacja – całkowanie pozwala modelować złożone funkcje w analizie danych.",
        "correct": true
      },
      {
        "text": "Szyfrowanie danych: Użycie szyfrowania zarówno na poziomie aplikacji (AES), jak i podczas przesyłania danych (SSL/TLS). Ochrona przed atakami Man-in-the-Middle: Użycie certyfikatów SSL/TLS do zabezpieczenia komunikacji między aplikacją a serwerem. Wykrywanie malware: Implementacja narzędzi do wykrywania złośliwego oprogramowania, jak również technik antypirackich. Bezpieczne przechowywanie danych: Unikanie przechowywania wrażliwych informacji w pamięci urządzenia, zamiast tego używanie bezpiecznych magazynów danych, takich jak Keychain (iOS) lub Keystore (Android).",
        "correct": false
      },
      {
        "text": "Wątek to podstawowa jednostka wykonawcza w systemie operacyjnym. Jest częścią procesu, ale ma własny licznik rozkazów i stos. Wątki pozwalają na równoległe wykonywanie zadań, np. odtwarzanie muzyki i przeglądanie internetu jednocześnie. Zalety wielowątkowości: poprawa wydajności, efektywne wykorzystanie procesora, szybsza reakcja aplikacji. Problemy: synchronizacja wątków (np. dostęp do tych samych zasobów).",
        "correct": false
      },
      {
        "text": "Język zapytań do baz danych (SQL) to język służący do komunikacji z bazami danych, umożliwiający wykonywanie operacji na danych. Składniki: DML (Data Manipulation Language): Służy do manipulacji danymi (np. SELECT, INSERT, UPDATE, DELETE). DDL (Data Definition Language): Służy do definiowania struktury bazy danych (np. CREATE, ALTER, DROP). DCL (Data Control Language): Służy do kontrolowania dostępu do danych (np. GRANT, REVOKE). TCL (Transaction Control Language): Zarządza transakcjami (np. COMMIT, ROLLBACK). Przeznaczenie: SQL jest używany do zarządzania bazami danych, pobierania, modyfikowania, dodawania i usuwania danych.",
        "correct": false
      }
    ]
  },
  {
    "question": "Teoria prawdopodobieństwa i statystyka w systemach rekomendacyjnych i analizie danych",
    "answers": [
      {
        "text": "Systemy rekomendacyjne i analiza danych opierają się na modelach probabilistycznych i metodach statystycznych, aby przewidywać preferencje użytkowników oraz analizować wzorce w danych. Systemy rekomendacyjne: Filtracja kolaboratywna – analiza podobieństw między użytkownikami (np. system Netflix przewiduje filmy na podstawie ocen innych użytkowników o podobnych gustach). Modele Bayesowskie – prognozowanie na podstawie prawdopodobieństwa (np. filtry antyspamowe analizujące treść e-maili). Analiza danych: Regresja liniowa i wieloraka – wykorzystywane do przewidywania trendów na podstawie wcześniejszych danych (np. prognozy sprzedaży). Analiza wariancji (ANOVA) – stosowana do porównywania różnych grup danych (np. testowanie skuteczności reklam w różnych regionach).",
        "correct": true
      },
      {
        "text": "Responsywność oznacza szybkość reakcji systemu na działania użytkownika. Jest kluczowa dla UX (User Experience), wpływa na wydajność pracy i satysfakcję użytkowników. W systemach krytycznych, np. medycznych, może decydować o bezpieczeństwie pacjentów.",
        "correct": false
      },
      {
        "text": "Podejście Mobile First oznacza projektowanie aplikacji/webów najpierw pod urządzenia mobilne, a potem dostosowywanie do większych ekranów. Jest to ważne, bo: Większość użytkowników korzysta z internetu na smartfonach. Wpływa na SEO – Google promuje strony przyjazne mobilnie. Poprawia UX, bo eliminuje zbędne elementy i optymalizuje działanie na mniejszych ekranach.",
        "correct": false
      },
      {
        "text": "Python zarządza pamięcią za pomocą automatycznego zarządzania pamięcią i garbage collection. Zmienna w Pythonie nie jest przypisana do konkretnego miejsca w pamięci, a obiekt, który jej odpowiada, jest przechowywany w dynamicznie alokowanej pamięci (sterta). Mechanizmy: Garbage collection: Python automatycznie zwalnia pamięć, gdy obiekt nie jest już używany. Referencje: Liczba referencji do obiektów jest monitorowana, a obiekt zostaje usunięty, gdy nie ma do niego żadnej referencji.",
        "correct": false
      }
    ]
  },
  {
    "question": "Logika matematyczna i teoria zbiorów w weryfikacji kodu",
    "answers": [
      {
        "text": "Złożoność czasowa określa, jak szybko rośnie czas wykonania w zależności od ilości danych. np. O(n log n) (Merge Sort) jest lepsze niż O(n²) (Bubble Sort) dla dużych zbiorów. Złożoność pamięciowa – ile pamięci zajmuje algorytm. np. DFS może być bardziej pamięciooszczędny niż BFS w niektórych sytuacjach.",
        "correct": false
      },
      {
        "text": "Wzorce projektowe to sprawdzone, powtarzalne rozwiązania dla najczęstszych problemów projektowych w inżynierii oprogramowania. Pomagają w tworzeniu elastycznych, skalowalnych i łatwych do utrzymania systemów. Rodzaje wzorców: Creational (tworzeniowe): Wzorce służące do tworzenia obiektów, np. Factory Method. Structural (strukturalne): Wzorce organizujące klasy i obiekty, np. Adapter. Behavioral (behawioralne): Wzorce definiujące komunikację między obiektami, np. Observer.",
        "correct": false
      },
      {
        "text": "Poprawność i niezawodność kodu źródłowego można analizować za pomocą metod formalnych bazujących na logice matematycznej i teorii zbiorów. Logika matematyczna: Model checking – sprawdzanie, czy program spełnia określone własności (np. poprawność protokołów sieciowych). Twierdzenia Hoare’a – analiza poprawności kodu na poziomie pre- i postwarunków. Teoria zbiorów: Optymalizacja zapytań SQL – analiza operacji na zbiorach danych dla efektywniejszych wyników. Wykrywanie konfliktów typów danych – stosowane w językach funkcyjnych (np. Haskell, Scala).",
        "correct": true
      },
      {
        "text": "W kontekście systemów kontroli wersji, tip oznacza najnowszą zmianę w danej gałęzi, czyli najbardziej aktualny commit. Head to wskaźnik na aktualny commit w gałęzi roboczej. Można również mówić o HEAD, które wskazuje na ostatni commit w aktualnie wybranej gałęzi. Aby sprawdzić liczbę heads w repozytorium, należy użyć komendy: git show-ref –heads",
        "correct": false
      }
    ]
  },
  {
    "question": "Kryptografia oparta na teoriach liczbowych i algebraicznych",
    "answers": [
      {
        "text": "Wzorce projektowe to sprawdzone, powtarzalne rozwiązania dla najczęstszych problemów projektowych w inżynierii oprogramowania. Pomagają w tworzeniu elastycznych, skalowalnych i łatwych do utrzymania systemów. Rodzaje wzorców: Creational (tworzeniowe): Wzorce służące do tworzenia obiektów, np. Factory Method. Structural (strukturalne): Wzorce organizujące klasy i obiekty, np. Adapter. Behavioral (behawioralne): Wzorce definiujące komunikację między obiektami, np. Observer.",
        "correct": false
      },
      {
        "text": "Nowoczesne systemy kryptograficzne wykorzystują własności liczb pierwszych i operacje algebraiczne do zabezpieczania danych przed nieautoryzowanym dostępem. Teoria liczb: RSA – oparty na trudności faktoryzacji dużych liczb pierwszych (stosowany w szyfrowaniu komunikacji). Krzywe eliptyczne – bardziej efektywna metoda kryptograficzna używana w blockchainie i szyfrowaniu ECDSA. Algebra abstrakcyjna: Grupy i pierścienie – wykorzystywane w kryptografii symetrycznej i asymetrycznej. Algorytm Diffie-Hellmana – umożliwia bezpieczną wymianę kluczy w komunikacji (stosowany w HTTPS).",
        "correct": true
      },
      {
        "text": "Podejście obiektowe (OOP): Uwarunkowania: Stosowane w przypadku systemów, które wymagają dużej elastyczności, rozwoju i ponownego wykorzystania kodu. Dobre dla aplikacji złożonych, które muszą być łatwe w utrzymaniu i rozszerzaniu. Przykład: Programy oparte na aplikacjach mobilnych i rozbudowanych systemach informatycznych. Podejście strukturalne: Uwarunkowania: Skierowane na proste, sekwencyjne operacje, gdzie kod jest bardziej liniowy i łatwiejszy do zrozumienia w mniejszych projektach. Przykład: Systemy wbudowane, proste aplikacje desktopowe.",
        "correct": false
      },
      {
        "text": "SOLID to zestaw zasad ułatwiających tworzenie czytelnego i elastycznego kodu: S (Single Responsibility Principle) – Każda klasa powinna mieć tylko jedną odpowiedzialność. O (Open/Closed Principle) – Klasy powinny być otwarte na rozszerzenia, ale zamknięte na modyfikacje. L (Liskov Substitution Principle) – Obiekty klas pochodnych powinny być wymienne z obiektami klas bazowych. I (Interface Segregation Principle) – Interfejsy powinny być dopasowane do potrzeb klas. D (Dependency Inversion Principle) – Zależności powinny być skierowane na abstrakcje, a nie konkretne klasy.",
        "correct": false
      }
    ]
  },
  {
    "question": "Teoria grafów w projektowaniu struktur danych",
    "answers": [
      {
        "text": "Firewalle filtrują ruch sieciowy na podstawie reguł (np. IP, porty, protokoły). Mogą być sprzętowe lub programowe.\nOgraniczenia: Nie chronią przed atakami wewnętrznymi. Nie zabezpieczają przed phishingiem. Mogą blokować legalne usługi przy błędnej konfiguracji.",
        "correct": false
      },
      {
        "text": "Dziedziczenie to jedna z podstawowych zasad programowania obiektowego, która umożliwia tworzenie nowych klas na podstawie już istniejących, odziedziczając ich właściwości i metody. Pozwala to na organizowanie klas w hierarchię, gdzie klasy pochodne (subklasy) dziedziczą po klasach bazowych (superklasach). Dzięki dziedziczeniu możemy ponownie wykorzystać kod, a także rozszerzać funkcjonalność bez konieczności pisania tego samego kodu od nowa. Przykład w Javie: class Pojazd { void uruchomSilnik() { System.out.println(\"Silnik uruchomiony!\"); } } class Samochod extends Pojazd { void włączKlimatyzację() { System.out.println(\"Klimatyzacja włączona!\"); } } public class Main { public static void main(String[] args) { Samochod samochod = new Samochod(); samochod.uruchomSilnik(); // metoda odziedziczona samochod.włączKlimatyzację(); // metoda specyficzna dla Samochodu } } W tym przypadku klasa Samochod dziedziczy metodę uruchomSilnik z klasy Pojazd.",
        "correct": false
      },
      {
        "text": "Teoria grafów znajduje zastosowanie w wielu aspektach informatyki, od organizacji danych po optymalizację wyszukiwania. Drzewa: Drzewa binarne (BST, AVL, B-drzewa) – stosowane w bazach danych do szybkiego wyszukiwania. Grafy: Algorytm Dijkstry – najkrótsza ścieżka w sieciach (np. GPS, nawigacja Google Maps). Algorytm PageRank – analiza połączeń między stronami internetowymi (stosowany przez Google)",
        "correct": true
      },
      {
        "text": "Komputer komunikuje się z urządzeniami poprzez sterowniki oraz interfejsy (USB, PCI, Bluetooth).\nPrzykłady: Klawiatura i mysz (wejście) → przesyłanie sygnałów przez sterownik HID. Monitor (wyjście) → karta graficzna renderuje obraz. Drukarka (wyjście) → komputer wysyła dane w formacie obsługiwanym przez drukarkę (np. PCL, PostScript).",
        "correct": false
      }
    ]
  },
  {
    "question": "Algebra liniowa w strukturach danych",
    "answers": [
      {
        "text": "Cechy baz NoSQL: Elastyczność schematów: Brak sztywno zdefiniowanego schematu bazy danych pozwala na przechowywanie różnorodnych typów danych (np. JSON, BSON). Wysoka dostępność: NoSQL zapewnia rozproszone przechowywanie danych na wielu węzłach, co poprawia dostępność i odporność na awarie. Skalowalność: Umożliwia łatwe poziome skalowanie poprzez dodawanie nowych serwerów (sharding), co pozwala obsługiwać duże ilości danych. Replikacja: Dane mogą być replikowane na różnych serwerach, co zapewnia ich bezpieczeństwo i dostępność. Założenia rozproszenia: Partycjonowanie danych (Sharding): Dzieli dane na fragmenty (shardy), które są przechowywane na różnych serwerach, aby zwiększyć wydajność. Replikacja: NoSQL często stosuje replikację danych na różnych węzłach, co zapewnia odporność na awarie i zwiększa dostępność.",
        "correct": false
      },
      {
        "text": "Aby zoptymalizować wydajność i rozmiar aplikacji: Kompresja zasobów: Kompresowanie obrazów (np. format WebP), dźwięków i plików wideo, aby zmniejszyć ich rozmiar bez utraty jakości. Używanie odpowiednich rozdzielczości: Ładowanie obrazów o odpowiednich rozdzielczościach, które są dostosowane do ekranu urządzenia. Lazy loading zasobów: Ładowanie zasobów tylko wtedy, gdy są one wymagane, zamiast ładowania ich na starcie aplikacji.",
        "correct": false
      },
      {
        "text": "Algebra liniowa jest kluczowa w reprezentacji i manipulacji danymi w postaci macierzy i wektorów. Macierze: Grafika komputerowa – transformacje 3D w OpenGL. Sztuczna inteligencja – operacje na zbiorach danych w uczeniu maszynowym. Wektory: Silniki rekomendacyjne – Word2Vec w NLP do analizy znaczenia słów. Kompresja obrazów – SVD stosowane w redukcji wymiarów.",
        "correct": true
      },
      {
        "text": "Narzędzia takie jak Jira, Trello, Asana, Redmine oferują: Zarządzanie zadaniami – tworzenie i przypisywanie zadań. Harmonogramowanie – wykresy Gantta, sprinty Scrum. Śledzenie postępów – tablice Kanban. Zarządzanie dokumentacją – wiki, repozytoria kodu. Integracje z narzędziami deweloperskimi (np. GitHub, CI/CD).",
        "correct": false
      }
    ]
  },
  {
    "question": "Kombinatoryka w strukturach danych",
    "answers": [
      {
        "text": "Tablica to struktura danych, która pozwala na przechowywanie wielu wartości tego samego typu w jednym obiekcie. Zaletą tablicy jest szybki dostęp do elementów za pomocą indeksu, jednak rozmiar tablicy jest stały po jej zadeklarowaniu. Przykład w C#: int[] liczby = new int[5] {1, 2, 3, 4, 5}; Przykład w Java: int[] liczby = {1, 2, 3, 4, 5}; Zastosowanie: Tablice są używane np. do przechowywania wyników kalkulacji, zbiorów danych czy elementów w grze komputerowej.",
        "correct": false
      },
      {
        "text": "Kontrola dostępu – systemy uprawnień do plików i katalogów. Szyfrowanie danych – zabezpieczenie plików przed nieautoryzowanym dostępem. Firewalle i antywirusy – ochrona przed atakami sieciowymi. Sandboxing – uruchamianie aplikacji w izolowanym środowisku. Regularne aktualizacje – łatanie luk w zabezpieczeniach.",
        "correct": false
      },
      {
        "text": "Techniki kombinatoryczne są wykorzystywane do optymalizacji operacji na strukturach danych. Optymalizacja wyszukiwania: Drzewa AVL – minimalizacja wysokości drzewa dla szybszego wyszukiwania. Funkcje skrótu w tablicach haszujących – minimalizacja kolizji. Sortowanie: Algorytm QuickSort – optymalizacja sortowania poprzez podział i zwyciężaj.",
        "correct": true
      },
      {
        "text": "Język zapytań do baz danych (SQL) to język służący do komunikacji z bazami danych, umożliwiający wykonywanie operacji na danych. Składniki: DML (Data Manipulation Language): Służy do manipulacji danymi (np. SELECT, INSERT, UPDATE, DELETE). DDL (Data Definition Language): Służy do definiowania struktury bazy danych (np. CREATE, ALTER, DROP). DCL (Data Control Language): Służy do kontrolowania dostępu do danych (np. GRANT, REVOKE). TCL (Transaction Control Language): Zarządza transakcjami (np. COMMIT, ROLLBACK). Przeznaczenie: SQL jest używany do zarządzania bazami danych, pobierania, modyfikowania, dodawania i usuwania danych.",
        "correct": false
      }
    ]
  },
  {
    "question": "Teoria prawdopodobieństwa w filtrach Blooma i drzewach probabilistycznych",
    "answers": [
      {
        "text": "Wyzwania: Wydajność: Agregowanie dużych zbiorów danych może prowadzić do dużego obciążenia serwera, zwłaszcza w przypadku operacji takich jak JOIN, GROUP BY, HAVING przy dużych tabelach. Poprawność danych: Złożone zapytania mogą prowadzić do błędnych wyników, jeśli dane nie są poprawnie zgrupowane lub zapytania są źle zoptymalizowane. Optymalizacja: Zapytania wymagające agregacji mogą spowalniać aplikację. Rozwiązaniem jest stosowanie indeksów, ograniczanie liczby agregacji na dużych tabelach oraz wykorzystywanie zapytań z limitami. Zalecane rozwiązania: Indeksy: Stosowanie indeksów na kolumnach, które są używane w zapytaniach agregujących. Optymalizacja zapytań: Zoptymalizowanie zapytań, np. przez użycie LIMIT lub dzielenie zapytań na mniejsze operacje, aby zmniejszyć obciążenie serwera. Cache'owanie wyników: Wykorzystanie cache'owania wyników dla zapytań agregujących, zwłaszcza dla danych, które rzadko się zmieniają.",
        "correct": false
      },
      {
        "text": "Teoria prawdopodobieństwa pozwala na efektywne przechowywanie i wyszukiwanie danych z pewnym marginesem błędu. Filtr Blooma: Używany w bazach danych (np. Google BigTable) do szybkiego sprawdzania obecności elementu w zbiorze. Drzewa probabilistyczne: Algorytm Huffmana – kompresja danych poprzez drzewo kodowe. Modele Markowa – przewidywanie kolejnych elementów (np. autokorekta w klawiaturach).",
        "correct": true
      },
      {
        "text": "Data Binding w WPF to mechanizm, który pozwala na synchronizację danych między modelem danych a interfejsem użytkownika. Główna idea polega na tym, że zmiany w danych modelu automatycznie odzwierciedlają się w interfejsie, a zmiany w interfejsie mogą być przekazywane do modelu. Przykład w XAML i C#: <TextBox Text=\"{Binding Name}\" /> W tym przypadku Text w kontrolce TextBox jest powiązany z właściwością Name w modelu danych. Zmiana w Name zaktualizuje tekst w polu.",
        "correct": false
      },
      {
        "text": "Efekt lawinowy oznacza, że nawet minimalna zmiana w danych wejściowych (np. jednym bicie) powoduje znaczącą zmianę w wyniku szyfrowania. Jest kluczowy w algorytmach takich jak AES czy SHA-256, ponieważ zwiększa odporność na ataki.",
        "correct": false
      }
    ]
  },
  {
    "question": "Teoria liczb w strukturach danych dla kryptografii",
    "answers": [
      {
        "text": "Język zapytań do baz danych (SQL) to język służący do komunikacji z bazami danych, umożliwiający wykonywanie operacji na danych. Składniki: DML (Data Manipulation Language): Służy do manipulacji danymi (np. SELECT, INSERT, UPDATE, DELETE). DDL (Data Definition Language): Służy do definiowania struktury bazy danych (np. CREATE, ALTER, DROP). DCL (Data Control Language): Służy do kontrolowania dostępu do danych (np. GRANT, REVOKE). TCL (Transaction Control Language): Zarządza transakcjami (np. COMMIT, ROLLBACK). Przeznaczenie: SQL jest używany do zarządzania bazami danych, pobierania, modyfikowania, dodawania i usuwania danych.",
        "correct": false
      },
      {
        "text": "Ataki DDoS – przeciążenie serwerów np. blokowanie dostępu do strony rządowej. Phishing – fałszywe e-maile próbujące wyłudzić dane logowania. Ransomware – szyfrowanie plików i żądanie okupu (np. WannaCry). SQL Injection – atak na bazę danych poprzez wstrzyknięcie złośliwego kodu SQL. Zero-day – wykorzystanie niezałatanych luk bezpieczeństwa.",
        "correct": false
      },
      {
        "text": "Data Binding w WPF to mechanizm, który pozwala na synchronizację danych między modelem danych a interfejsem użytkownika. Główna idea polega na tym, że zmiany w danych modelu automatycznie odzwierciedlają się w interfejsie, a zmiany w interfejsie mogą być przekazywane do modelu. Przykład w XAML i C#: <TextBox Text=\"{Binding Name}\" /> W tym przypadku Text w kontrolce TextBox jest powiązany z właściwością Name w modelu danych. Zmiana w Name zaktualizuje tekst w polu.",
        "correct": false
      },
      {
        "text": "Zasady teorii liczb są stosowane w mechanizmach bezpieczeństwa. Drzewa Merkle’a: Używane w blockchainie do weryfikacji integralności danych. Generatory liczb losowych: Oparte na kongruencjach liniowych, np. w szyfrowaniu strumieniowym.",
        "correct": true
      }
    ]
  },
  {
    "question": "Kluczowe etapy budowy modelu uczenia maszynowego",
    "answers": [
      {
        "text": "Zasady Human Interface Guidelines (HIG): Spójność: Zgodność z systemowym wyglądem, zapewnienie użytkownikowi intuicyjnego i spójnego doświadczenia z innymi aplikacjami i systemem. Zrozumiałość: Aplikacja powinna mieć logiczną strukturę, nawigację, a przyciski i elementy sterujące powinny być łatwe do znalezienia i używania. Czytelność: Użycie odpowiedniego rozmiaru czcionek, kontrastu oraz przestrzeni pomiędzy elementami interfejsu. Feedback: Aplikacja powinna reagować na akcje użytkownika, np. przez animacje, wibracje lub dźwięki, co zwiększa komfort użytkowania. Dostosowanie do urządzenia: UI powinno dostosować się do różnych rozdzielczości ekranów, formatu urządzenia (iPhone, iPad), oraz wykorzystać natywne gesty. Łatwość używania: Ułatwienia takie jak prostota w obsłudze aplikacji, możliwość szybkiego dostępu do głównych funkcji oraz ograniczenie złożoności interfejsu.",
        "correct": false
      },
      {
        "text": "W programowaniu obiektowym, interfejs to kontrakt, który definiuje zestaw metod, które muszą zostać zaimplementowane przez klasy go implementujące. Interfejsy nie zawierają implementacji metod, jedynie ich deklaracje. Implementacja klasy to z kolei rzeczywista definicja metod i zmiennych w klasie. Klasa implementuje interfejs, ale może zawierać także dodatkową funkcjonalność, która nie została określona w interfejsie. Zalety interfejsów: Zwiększają elastyczność i umożliwiają wielokrotne dziedziczenie metod w językach, które tego nie wspierają (np. Java). Ułatwiają tworzenie testowalnych i łatwych do utrzymania systemów, ponieważ można je wymieniać, nie zmieniając implementacji.",
        "correct": false
      },
      {
        "text": "Zbieranie danych – określenie jakości i źródła danych (np. dane medyczne, obrazy). Przetwarzanie danych – czyszczenie i normalizacja, np. usuwanie duplikatów. Wybór modelu – regresja, SVM, sieci neuronowe w zależności od problemu. Trenowanie modelu – dostosowanie wag na podstawie zbioru treningowego. Ewaluacja modelu – sprawdzanie jakości na zbiorze testowym. Optymalizacja hiperparametrów – poprawianie wydajności (np. tuning learning rate).",
        "correct": true
      },
      {
        "text": "Zmienne automatyczne są tworzone i usuwane w czasie działania funkcji, w której zostały zadeklarowane. Przechowywane są na stosie, co zapewnia szybki dostęp, ale mają ograniczony czas życia. Są automatycznie usuwane, gdy funkcja kończy działanie. Zmienne dynamiczne są tworzone na stercie (heap), co daje im możliwość dłuższego życia niż zmienne automatyczne. Muszą być zarządzane ręcznie lub przez system garbage collection (np. w Javie czy Pythonie). Zalety i wady: Zmienne automatyczne: Szybki dostęp, ale ograniczony czas życia i wielkość. Zmienne dynamiczne: Większa elastyczność, ale wymagają zarządzania pamięcią, co może prowadzić do wycieków pamięci.",
        "correct": false
      }
    ]
  },
  {
    "question": "Uczenie nadzorowane vs. nienadzorowane",
    "answers": [
      {
        "text": "Aplikacje natywne to programy stworzone specjalnie dla konkretnego systemu operacyjnego (np. Android, iOS), natomiast aplikacje internetowe działają w przeglądarce i nie wymagają instalacji. ✅ Zalety aplikacji natywnych: Lepsza wydajność i szybkość działania. Pełny dostęp do funkcji urządzenia (kamera, GPS, powiadomienia). Możliwość pracy offline. ❌ Wady aplikacji natywnych: Wyższy koszt i czas produkcji (osobne wersje na Androida i iOS). Konieczność aktualizacji przez użytkownika. ✅ Zalety aplikacji internetowych: Działają na wszystkich urządzeniach z przeglądarką. Aktualizacje są natychmiastowe i nie wymagają instalacji. ❌ Wady aplikacji internetowych: Wolniejsze działanie w porównaniu do natywnych. Ograniczony dostęp do funkcji urządzenia. Wymagają stałego połączenia z internetem.",
        "correct": false
      },
      {
        "text": "Maska podsieci określa, która część adresu IP jest siecią, a która urządzeniem. Cel – Dzieli sieć na mniejsze podsieci, zwiększając efektywność adresowania. Przykład – Maska 255.255.255.0 oznacza, że pierwsze trzy bajty IP to adres sieci, a ostatni to urządzenie.",
        "correct": false
      },
      {
        "text": "Badania użytkowników – analiza potrzeb, np. wywiady, ankiety. Tworzenie person i scenariuszy – definiowanie grup docelowych. Wireframing i prototypowanie – szkice i interaktywne modele UI. Testy użyteczności – weryfikacja projektu na użytkownikach. Iteracyjne poprawki – dostosowanie UX na podstawie testów.",
        "correct": false
      },
      {
        "text": "Uczenie nadzorowane: Dane treningowe zawierają etykiety. Zastosowanie: klasyfikacja (np. rozpoznawanie twarzy), regresja. Uczenie nienadzorowane: Model sam znajduje wzorce w danych. Zastosowanie: klasteryzacja (np. segmentacja klientów w e-commerce).",
        "correct": true
      }
    ]
  },
  {
    "question": "Najlepsze praktyki w zarządzaniu danymi treningowymi w systemach sztucznej inteligencji",
    "answers": [
      {
        "text": "System plików organizuje dane na nośniku (np. dysku twardym, SSD). 🔹 Podstawowe funkcje: Przechowywanie i organizacja plików. Zarządzanie dostępem do danych. Zapewnienie integralności danych. Przykłady systemów plików: NTFS, FAT32, EXT4.",
        "correct": false
      },
      {
        "text": "Magistrali – wszystkie urządzenia podłączone do jednej linii (prosta, ale awaryjna). Pierścienia – dane krążą w jednym kierunku (wydajna, ale podatna na awarie). Gwiazdy – centralny punkt (switch/router) łączy wszystkie urządzenia (popularna i bezpieczna). Siatki (mesh) – każde urządzenie może łączyć się z każdym (wysoka redundancja).",
        "correct": false
      },
      {
        "text": "Podczas budowy systemów AI kluczowe jest odpowiednie zarządzanie danymi treningowymi. Obejmuje to kilka aspektów: Gromadzenie danych – Dane powinny pochodzić z wiarygodnych i legalnych źródeł oraz być zgodne z regulacjami (np. RODO). Warto stosować techniki anonimizacji. Przechowywanie – Dane powinny być zabezpieczone przed nieautoryzowanym dostępem, a ich przechowywanie powinno uwzględniać redundancję (backupy, chmura). Przetwarzanie – Należy zadbać o jakość danych (czyszczenie, normalizacja, usuwanie błędów). Warto stosować techniki augmentacji danych w AI. Zabezpieczanie – Dane muszą być chronione przed wyciekiem (szyfrowanie, kontrola dostępu, audyty).",
        "correct": true
      },
      {
        "text": "Klasa jest definicją, która wskazuje, jakie właściwości i metody będą dostępne dla tworzonych obiektów. Obiekt to instancja klasy, która może być stworzona za pomocą słowa kluczowego new. Przykład w Java: class Samochod { String model; } Samochod auto = new Samochod(); Usuwanie obiektów w Java odbywa się automatycznie przez Garbage Collector, który zarządza pamięcią.",
        "correct": false
      }
    ]
  },
  {
    "question": "Integracja dużych modeli językowych (LLM) z systemami IT",
    "answers": [
      {
        "text": "Normalizacja to proces organizowania danych w bazach danych w celu eliminacji redundancji i zapewnienia integralności danych. Głównym celem normalizacji jest zmniejszenie duplikacji danych, co poprawia efektywność przechowywania i aktualizowania informacji. Pierwsza postać normalna (1NF): Zakłada, że każda kolumna w tabeli zawiera tylko pojedyncze wartości (atomowe) oraz, że wszystkie rekordy są unikalne. Dodatkowo, wszystkie atrybuty muszą być jednorodne, tzn. zawierać dane tego samego typu. Przykład (1NF): Przed normalizacją: ID | Imię | Zajęcia 1  | Jan  | Matematyka, Fizyka 2  | Anna | Historia Po normalizacji do 1NF: ID | Imię | Zajęcia 1  | Jan  | Matematyka 1  | Jan  | Fizyka 2  | Anna | Historia Druga postać normalna (2NF): Wymaga, aby spełniona była 1NF, a także, aby każda kolumna była zależna od całkowitej klucza głównego, a nie tylko od jego części. Przykład (2NF): Przed normalizacją: ID | Nazwa kursu  | Imię nauczyciela | Zajęcia 1  | Matematyka   | Jan Kowalski     | Fizyka 1  | Fizyka       | Anna Nowak       | Matematyka Po normalizacji do 2NF: Tabela 1 (Kursy): ID | Nazwa kursu 1              | Matematyka 2              | Fizyka Tabela 2 (Nauczyciele): Kurs_ID | Nauczyciel 1         | Jan Kowalski 2         | Anna Nowak Trzecia postać normalna (3NF): Wymaga, aby spełniona była 2NF, a także aby każda kolumna niekluczowa była zależna bezpośrednio od klucza głównego i nie miała zależności przechodnich (tzn. nie może być zależna od innych kolumn, które nie są kluczem głównym). Przykład (3NF): Przed normalizacją: ID | Imię | Miasto    | Kod pocztowy 1  | Jan  | Warszawa  | 00-000 2  | Anna | Kraków    | 30-000 Po normalizacji do 3NF: Tabela 1 (Osoby): ID | Imię | Miasto_ID 1                 | Jan  | 1 2                 | Anna | 2 Tabela 2 (Miasta): Miasto_ID | Miasto     | Kod pocztowy 1              | Warszawa  | 00-000 2              | Kraków    | 30-000",
        "correct": false
      },
      {
        "text": "Komputer komunikuje się z urządzeniami poprzez sterowniki oraz interfejsy (USB, PCI, Bluetooth).\nPrzykłady: Klawiatura i mysz (wejście) → przesyłanie sygnałów przez sterownik HID. Monitor (wyjście) → karta graficzna renderuje obraz. Drukarka (wyjście) → komputer wysyła dane w formacie obsługiwanym przez drukarkę (np. PCL, PostScript).",
        "correct": false
      },
      {
        "text": "Duże modele językowe, takie jak ChatGPT, można integrować z systemami IT na kilka sposobów: Asystenci w aplikacjach – LLM mogą wspierać obsługę klienta, generując automatyczne odpowiedzi w chatbotach. Automatyczne generowanie treści – Integracja z CMS pozwala na automatyczne tworzenie podsumowań, raportów czy e-maili. Wyszukiwanie semantyczne – Można je wykorzystać do analizy zapytań użytkowników i lepszego dopasowywania wyników w wyszukiwarkach. Analiza danych – LLM pomagają w przetwarzaniu dużych zbiorów danych i generowaniu raportów na ich podstawie.",
        "correct": true
      },
      {
        "text": "Testy jednostkowe: Używanie frameworków takich jak XCTest do testowania poszczególnych funkcji i metod aplikacji. Testy UI: Automatyzacja testów UI za pomocą narzędzi takich jak XCUITest do interakcji z interfejsem aplikacji. Mockowanie danych: Używanie mocków i stubów do symulacji danych, które aplikacja przetwarza. Continuous Integration (CI): Używanie narzędzi CI, takich jak Jenkins lub Bitrise, do automatyzacji testów podczas każdego commita w kodzie. Testy wydajnościowe: Używanie narzędzi takich jak Instruments w Xcode, które pozwala na śledzenie użycia CPU, pamięci, animacji i renderowania UI w aplikacji.",
        "correct": false
      }
    ]
  },
  {
    "question": "Wykorzystanie LLM w automatyzacji NLP",
    "answers": [
      {
        "text": "Metodyki zwinne (Agile): Iteracyjne i przyrostowe podejście: Praca w krótkich iteracjach, dostarczanie działających wersji oprogramowania. Elastyczność i adaptacja: Łatwość w adaptacji do zmieniających się wymagań. Współpraca z klientem: Bliska współpraca z interesariuszami w celu lepszego zrozumienia ich potrzeb. Skupienie na wartości biznesowej: Priorytetem jest dostarczenie wartościowych funkcji. Rozwiązywane problemy: Szybka reakcja na zmiany w wymaganiach. Zwiększenie transparentności procesu tworzenia oprogramowania. Ułatwienie dostosowywania oprogramowania do rzeczywistych potrzeb użytkowników.",
        "correct": false
      },
      {
        "text": "Szyfrowanie symetryczne – Używa jednego klucza do szyfrowania i deszyfrowania (np. AES). Zalety: szybkie, wydajne. Wady: problem z bezpiecznym przekazaniem klucza. Szyfrowanie asymetryczne – Używa dwóch kluczy: publicznego i prywatnego (np. RSA). Zalety: bezpieczniejsze przy wymianie danych. Wady: wolniejsze niż szyfrowanie symetryczne.",
        "correct": false
      },
      {
        "text": "Rejestr w Windows to baza danych przechowująca ustawienia systemu i aplikacji. 🔹 Główne gałęzie rejestru: HKEY_CLASSES_ROOT – informacje o typach plików i rozszerzeniach. HKEY_CURRENT_USER – ustawienia użytkownika. HKEY_LOCAL_MACHINE – globalne ustawienia systemu. HKEY_USERS – profile użytkowników. HKEY_CURRENT_CONFIG – informacje o aktualnej konfiguracji sprzętowej.",
        "correct": false
      },
      {
        "text": "LLM mogą automatyzować wiele zadań związanych z przetwarzaniem języka naturalnego: Tłumaczenie tekstów – Modele takie jak DeepL czy Google Translate wykorzystują AI do precyzyjniejszego tłumaczenia. Podsumowywanie treści – LLM mogą skracać długie artykuły, generując ich streszczenia. Analiza sentymentu – AI potrafi wykrywać emocje w komentarzach klientów, co jest używane np. w mediach społecznościowych i analizie opinii.",
        "correct": true
      }
    ]
  },
  {
    "question": "Podział praw autorskich",
    "answers": [
      {
        "text": "Prawa autorskie chronią utwory o charakterze twórczym, takie jak książki, programy komputerowe czy muzyka. Co podlega ochronie? – Teksty, grafiki, filmy, oprogramowanie, projekty graficzne. Co nie podlega ochronie? – Fakty, idee, procedury, teorie matematyczne. Podział praw autorskich: Prawa osobiste – niezbywalne (np. autorstwo utworu). Prawa majątkowe – można nimi handlować (np. prawo do publikacji, sprzedaży).",
        "correct": true
      },
      {
        "text": "Waterfall – sztywna struktura, każda faza projektu (analiza, projektowanie, implementacja, testowanie) jest wykonywana po kolei. Dobra dla dużych projektów z jasno określonymi wymaganiami. Agile (Scrum, Kanban) – elastyczne podejście, iteracyjne, szybkie dostosowywanie do zmian. Scrum wykorzystuje sprinty, a Kanban pozwala na ciągły przepływ zadań.\nKiedy stosować? Waterfall – projekty rządowe, medyczne, gdzie wymagania są stałe. Agile – dynamiczne projekty IT, startupy, aplikacje webowe.",
        "correct": false
      },
      {
        "text": "🔹 C Deklaracja: int a; (tylko informacja o typie). Definicja: int a = 5; (tworzenie zmiennej i przypisanie wartości). Wskaźniki: int *ptr; (przechowuje adres innej zmiennej). 🔹 Java Deklaracja i definicja: int a = 5; (w Javie zmienne muszą należeć do klasy/metody). Typy referencyjne: obiekty przechowywane na stercie, np. String s = \"Hello\";. 🔹 C# Podobne do Javy, ale obsługuje wskaźniki w trybie unsafe: unsafe { int* ptr; } Typy wartościowe i referencyjne: int (przechowywany na stosie), string (na stercie). ✅ Podobieństwa: składnia deklaracji zmiennych jest zbliżona.\n❌ Różnice: zarządzanie pamięcią, obsługa wskaźników (C pozwala na bezpośredni dostęp, Java i C# działają na GC).",
        "correct": false
      },
      {
        "text": "VLAN (Virtual Local Area Network) to logiczny podział jednej fizycznej sieci na kilka podsieci. Zalety VLAN: Lepsza kontrola ruchu i bezpieczeństwa. Separacja sieci bez potrzeby dodatkowego sprzętu. Redukcja ruchu broadcastowego.",
        "correct": false
      }
    ]
  },
  {
    "question": "Szyfrowanie symetryczne vs asymetryczne",
    "answers": [
      {
        "text": "Szyfrowanie symetryczne – Używa jednego klucza do szyfrowania i deszyfrowania (np. AES). Zalety: szybkie, wydajne. Wady: problem z bezpiecznym przekazaniem klucza. Szyfrowanie asymetryczne – Używa dwóch kluczy: publicznego i prywatnego (np. RSA). Zalety: bezpieczniejsze przy wymianie danych. Wady: wolniejsze niż szyfrowanie symetryczne.",
        "correct": true
      },
      {
        "text": "Testy jednostkowe: Narzędzia takie jak JUnit (Android) lub XCTest (iOS) do testowania pojedynczych funkcji. Testy integracyjne: Użycie testów integracyjnych do sprawdzania poprawności działania aplikacji z backendem oraz integracji z bazami danych. Testy UI: Narzędzia jak Espresso (Android) i XCUITest (iOS) umożliwiają automatyczne testowanie interakcji użytkownika z aplikacją. Symulowanie różnych scenariuszy: Korzystanie z emulatorów i rzeczywistych urządzeń, aby testować aplikację w różnych warunkach (np. w trybie offline).",
        "correct": false
      },
      {
        "text": "Android Studio to oficjalne środowisko programistyczne dla systemu Android. Jego główne funkcje to: Edytor kodu: Zaawansowany edytor z funkcjami automatycznego uzupełniania kodu, refaktoryzacji oraz diagnostyki błędów. Emulator Android: Umożliwia uruchomienie aplikacji na różnych wersjach Androida i urządzeniach wirtualnych. Narzędzia do debugowania: Android Studio zapewnia narzędzia do debugowania aplikacji, które pomagają śledzić błędy i analizować logi. Wbudowane narzędzia do testowania: Integracja z narzędziami do testowania, zarówno jednostkowymi, jak i UI, umożliwia sprawdzanie jakości aplikacji. Designer UI: Graficzny edytor do tworzenia interfejsów użytkownika w technologii XML oraz Jetpack Compose.",
        "correct": false
      },
      {
        "text": "Ataki DoS blokują dostęp do usług przez przeciążenie serwera. Przykłady ataków: Flooding – wysyłanie ogromnej liczby żądań (np. SYN Flood). DDoS – atak z wielu komputerów jednocześnie. Sposoby ochrony: Filtry ruchu (firewalle). Systemy wykrywania ataków IDS/IPS. Sieci CDN ograniczające wpływ ataków.",
        "correct": false
      }
    ]
  },
  {
    "question": "Bezpieczna transmisja w SSL",
    "answers": [
      {
        "text": "Poufność – ochrona przed nieautoryzowanym dostępem (zagrożenie: sniffing, ataki man-in-the-middle). Integralność – zapewnienie, że dane nie zostały zmodyfikowane (zagrożenie: ataki typu man-in-the-middle). Dostępność – zapewnienie dostępności usług (zagrożenie: ataki DDoS). Autoryzacja i uwierzytelnianie – weryfikacja tożsamości użytkowników (zagrożenie: brute-force, kradzież sesji).",
        "correct": false
      },
      {
        "text": "Badania użytkowników – analiza potrzeb, np. wywiady, ankiety. Tworzenie person i scenariuszy – definiowanie grup docelowych. Wireframing i prototypowanie – szkice i interaktywne modele UI. Testy użyteczności – weryfikacja projektu na użytkownikach. Iteracyjne poprawki – dostosowanie UX na podstawie testów.",
        "correct": false
      },
      {
        "text": "SSL (obecnie TLS) zapewnia szyfrowanie danych przesyłanych przez internet.\nPrzebieg transmisji: Klient i serwer uzgadniają wersję protokołu i algorytmy szyfrowania. Serwer przesyła certyfikat SSL. Klient weryfikuje certyfikat i generuje klucz sesyjny. Dane są szyfrowane i przesyłane bezpiecznym kanałem.",
        "correct": true
      },
      {
        "text": "Magistrali – wszystkie urządzenia podłączone do jednej linii (prosta, ale awaryjna). Pierścienia – dane krążą w jednym kierunku (wydajna, ale podatna na awarie). Gwiazdy – centralny punkt (switch/router) łączy wszystkie urządzenia (popularna i bezpieczna). Siatki (mesh) – każde urządzenie może łączyć się z każdym (wysoka redundancja).",
        "correct": false
      }
    ]
  },
  {
    "question": "Ataki Denial of Service (DoS) i sposoby ochrony",
    "answers": [
      {
        "text": "Ataki DoS blokują dostęp do usług przez przeciążenie serwera. Przykłady ataków: Flooding – wysyłanie ogromnej liczby żądań (np. SYN Flood). DDoS – atak z wielu komputerów jednocześnie. Sposoby ochrony: Filtry ruchu (firewalle). Systemy wykrywania ataków IDS/IPS. Sieci CDN ograniczające wpływ ataków.",
        "correct": true
      },
      {
        "text": "Komputer komunikuje się z urządzeniami poprzez sterowniki oraz interfejsy (USB, PCI, Bluetooth).\nPrzykłady: Klawiatura i mysz (wejście) → przesyłanie sygnałów przez sterownik HID. Monitor (wyjście) → karta graficzna renderuje obraz. Drukarka (wyjście) → komputer wysyła dane w formacie obsługiwanym przez drukarkę (np. PCL, PostScript).",
        "correct": false
      },
      {
        "text": "Sprzętowe: Router – przekierowuje ruch w sieci. Switch – łączy urządzenia w sieci LAN. Firewall sprzętowy – filtruje ruch sieciowy. Serwery – przechowują dane i aplikacje. Programowe: Systemy operacyjne sieciowe (np. Windows Server, Linux). Oprogramowanie firewall (np. iptables, pfSense). VPN – szyfrowanie ruchu internetowego. Systemy IDS/IPS – wykrywanie i zapobieganie atakom.",
        "correct": false
      },
      {
        "text": "Modele monetyzacji: Reklamy: Wstawianie reklam w aplikacji (np. Google AdMob). Zaletą jest brak konieczności płacenia przez użytkownika, wadą – możliwość irytowania użytkowników. Zakupy w aplikacji: Umożliwienie użytkownikom kupowania treści lub funkcji w aplikacji. Zaletą jest łatwy dostęp do dodatkowych funkcji, ale wymaga dokładnego planowania modeli cenowych. Subskrypcje: Oferowanie subskrypcji na dostęp do treści lub funkcji w aplikacji. Zaletą jest przewidywalny dochód, ale może odstraszyć użytkowników, którzy nie są gotowi na regularne płatności.",
        "correct": false
      }
    ]
  },
  {
    "question": "Rola maski podsieci w konfiguracji sieci",
    "answers": [
      {
        "text": "Rodzaje testów: Jednostkowe – testowanie pojedynczych modułów kodu. Integracyjne – sprawdzanie komunikacji między modułami. Systemowe – testowanie całości aplikacji. Akceptacyjne – testowanie zgodności z wymaganiami biznesowymi. Korzyści automatyzacji: Szybsze wykrywanie błędów. Możliwość wielokrotnego powtarzania testów. Redukcja kosztów testowania. Mniejsze ryzyko błędu ludzkiego.",
        "correct": false
      },
      {
        "text": "Indeksowanie: Tworzenie odpowiednich indeksów na kolumnach, które są używane w zapytaniach. Optymalizacja zapytań: Używanie EXPLAIN w SQL do analizy zapytań i identyfikowania nieoptymalnych operacji. Cache'owanie wyników: Przechowywanie często używanych wyników zapytań w pamięci podręcznej. Sharding i replikacja: Dzielnie danych na różne serwery w celu zwiększenia dostępności i wydajności.",
        "correct": false
      },
      {
        "text": "Uczenie nadzorowane: Dane treningowe zawierają etykiety. Zastosowanie: klasyfikacja (np. rozpoznawanie twarzy), regresja. Uczenie nienadzorowane: Model sam znajduje wzorce w danych. Zastosowanie: klasteryzacja (np. segmentacja klientów w e-commerce).",
        "correct": false
      },
      {
        "text": "Maska podsieci określa, która część adresu IP jest siecią, a która urządzeniem. Cel – Dzieli sieć na mniejsze podsieci, zwiększając efektywność adresowania. Przykład – Maska 255.255.255.0 oznacza, że pierwsze trzy bajty IP to adres sieci, a ostatni to urządzenie.",
        "correct": true
      }
    ]
  },
  {
    "question": "VLAN i jego zalety",
    "answers": [
      {
        "text": "Uczenie nadzorowane: Dane treningowe zawierają etykiety. Zastosowanie: klasyfikacja (np. rozpoznawanie twarzy), regresja. Uczenie nienadzorowane: Model sam znajduje wzorce w danych. Zastosowanie: klasteryzacja (np. segmentacja klientów w e-commerce).",
        "correct": false
      },
      {
        "text": "VLAN (Virtual Local Area Network) to logiczny podział jednej fizycznej sieci na kilka podsieci. Zalety VLAN: Lepsza kontrola ruchu i bezpieczeństwa. Separacja sieci bez potrzeby dodatkowego sprzętu. Redukcja ruchu broadcastowego.",
        "correct": true
      },
      {
        "text": "Kontrola dostępu – użytkownicy mają różne poziomy uprawnień. Szyfrowanie danych – np. TLS w połączeniach do bazy. Backupy – ochrona przed utratą danych. Replikacja – zwiększenie niezawodności bazy. ACID – zasady zapewniające integralność danych.",
        "correct": false
      },
      {
        "text": "UIKit: Tradycyjny framework UI używany w iOS. Wymaga ręcznego zarządzania hierarchią widoków i kontrolerów. Bardziej rozbudowany i elastyczny, ale ma wyższą krzywą uczenia się. SwiftUI: Nowoczesny framework oparty na deklaratywnym podejściu do tworzenia UI. Umożliwia łatwiejsze tworzenie UI poprzez deklarację stanu aplikacji i jego aktualizację. Lepsza integracja z nowymi funkcjami systemu iOS, takich jak Dark Mode i Accessibility. Korzyści i wyzwania: UIKit: Jest bardziej dojrzały, szeroko wspierany i elastyczny, ale wymaga więcej kodu do zarządzania widokami. SwiftUI: Uproszczony kod, lepsze wsparcie dla dynamicznych interfejsów, ale może mieć ograniczenia w starszych wersjach iOS (przynajmniej na początku). Preferencje: SwiftUI może być preferowany w nowych projektach, natomiast UIKit pozostaje preferowaną opcją w starszych aplikacjach, gdzie konieczne jest utrzymanie kompatybilności wstecznej.",
        "correct": false
      }
    ]
  },
  {
    "question": "AI i ML w wykrywaniu zagrożeń",
    "answers": [
      {
        "text": "Wymagania funkcjonalne: Integracja z innymi systemami: Możliwość wymiany danych z systemami ERP, CRM, itp. Obsługa różnych formatów danych: Konwersja i przesyłanie danych między różnymi formatami. Wydajność: Szybka wymiana danych i integracja w czasie rzeczywistym. Wymagania niefunkcjonalne: Bezpieczeństwo: Silne mechanizmy szyfrowania, uwierzytelnianie użytkowników. Skalowalność: Możliwość rozbudowy systemu o dodatkowe moduły w przyszłości. Wydajność: Niski czas odpowiedzi, optymalizacja zapytań.",
        "correct": false
      },
      {
        "text": "Ataki DDoS – przeciążenie serwerów np. blokowanie dostępu do strony rządowej. Phishing – fałszywe e-maile próbujące wyłudzić dane logowania. Ransomware – szyfrowanie plików i żądanie okupu (np. WannaCry). SQL Injection – atak na bazę danych poprzez wstrzyknięcie złośliwego kodu SQL. Zero-day – wykorzystanie niezałatanych luk bezpieczeństwa.",
        "correct": false
      },
      {
        "text": "Sztuczna inteligencja pomaga wykrywać cyberzagrożenia poprzez analizę anomalii w ruchu sieciowym. Zastosowania: Systemy wykrywania ataków (IDS). Analiza logów pod kątem nietypowych zachowań. Predykcja zagrożeń na podstawie wzorców. Wyzwania: Fałszywe alarmy. Duża ilość przetwarzanych danych wymaga mocy obliczeniowej. Możliwość omijania algorytmów AI przez cyberprzestępców.",
        "correct": true
      },
      {
        "text": "Kontrola dostępu – systemy uprawnień do plików i katalogów. Szyfrowanie danych – zabezpieczenie plików przed nieautoryzowanym dostępem. Firewalle i antywirusy – ochrona przed atakami sieciowymi. Sandboxing – uruchamianie aplikacji w izolowanym środowisku. Regularne aktualizacje – łatanie luk w zabezpieczeniach.",
        "correct": false
      }
    ]
  },
  {
    "question": "Wady i zalety aplikacji natywnych vs aplikacji internetowych na urządzeniach mobilnych",
    "answers": [
      {
        "text": "MVC (Model-View-Controller) to wzorzec architektoniczny, który dzieli aplikację na trzy główne komponenty: Model: Odpowiada za logikę biznesową i dostęp do danych. View: Odpowiada za interfejs użytkownika (UI). Controller: Pośredniczy pomiędzy modelem a widokiem, zarządza logiką aplikacji. Zastosowanie: MVC jest idealne w aplikacjach webowych i mobilnych, gdzie mamy wyraźny podział na dane (Model), interfejs użytkownika (View) i logikę sterującą (Controller). Przykład: aplikacje typu e-commerce, blogi.",
        "correct": false
      },
      {
        "text": "Złożoność czasowa określa, jak szybko rośnie czas wykonania w zależności od ilości danych. np. O(n log n) (Merge Sort) jest lepsze niż O(n²) (Bubble Sort) dla dużych zbiorów. Złożoność pamięciowa – ile pamięci zajmuje algorytm. np. DFS może być bardziej pamięciooszczędny niż BFS w niektórych sytuacjach.",
        "correct": false
      },
      {
        "text": "Szyfrowanie chroni dane przed nieautoryzowanym dostępem, poprzez konwersję ich do postaci nieczytelnej dla osób nieposiadających klucza deszyfrującego.\nPrzykłady: HTTPS – szyfrowana komunikacja w sieci. VPN – tunelowanie ruchu internetowego. AES, RSA – algorytmy szyfrowania danych.",
        "correct": false
      },
      {
        "text": "Aplikacje natywne to programy stworzone specjalnie dla konkretnego systemu operacyjnego (np. Android, iOS), natomiast aplikacje internetowe działają w przeglądarce i nie wymagają instalacji. ✅ Zalety aplikacji natywnych: Lepsza wydajność i szybkość działania. Pełny dostęp do funkcji urządzenia (kamera, GPS, powiadomienia). Możliwość pracy offline. ❌ Wady aplikacji natywnych: Wyższy koszt i czas produkcji (osobne wersje na Androida i iOS). Konieczność aktualizacji przez użytkownika. ✅ Zalety aplikacji internetowych: Działają na wszystkich urządzeniach z przeglądarką. Aktualizacje są natychmiastowe i nie wymagają instalacji. ❌ Wady aplikacji internetowych: Wolniejsze działanie w porównaniu do natywnych. Ograniczony dostęp do funkcji urządzenia. Wymagają stałego połączenia z internetem.",
        "correct": true
      }
    ]
  },
  {
    "question": "Wątek w systemach operacyjnych",
    "answers": [
      {
        "text": "VLAN (Virtual Local Area Network) to logiczny podział jednej fizycznej sieci na kilka podsieci. Zalety VLAN: Lepsza kontrola ruchu i bezpieczeństwa. Separacja sieci bez potrzeby dodatkowego sprzętu. Redukcja ruchu broadcastowego.",
        "correct": false
      },
      {
        "text": "Wątek to podstawowa jednostka wykonawcza w systemie operacyjnym. Jest częścią procesu, ale ma własny licznik rozkazów i stos. Wątki pozwalają na równoległe wykonywanie zadań, np. odtwarzanie muzyki i przeglądanie internetu jednocześnie. Zalety wielowątkowości: poprawa wydajności, efektywne wykorzystanie procesora, szybsza reakcja aplikacji. Problemy: synchronizacja wątków (np. dostęp do tych samych zasobów).",
        "correct": true
      },
      {
        "text": "Poufność – ochrona przed nieautoryzowanym dostępem (zagrożenie: sniffing, ataki man-in-the-middle). Integralność – zapewnienie, że dane nie zostały zmodyfikowane (zagrożenie: ataki typu man-in-the-middle). Dostępność – zapewnienie dostępności usług (zagrożenie: ataki DDoS). Autoryzacja i uwierzytelnianie – weryfikacja tożsamości użytkowników (zagrożenie: brute-force, kradzież sesji).",
        "correct": false
      },
      {
        "text": "Aby zapewnić płynne działanie aplikacji i zachowanie danych podczas zmiany konfiguracji (np. obrót ekranu), można zastosować: Przechowywanie stanu w pamięci: Korzystanie z mechanizmów przechowywania stanu (np. onSaveInstanceState w Androidzie lub state restoration w iOS), które umożliwiają zachowanie danych i ponowne załadowanie ich po zmianie konfiguracji. Zarządzanie danymi w bazach danych: Przechowywanie kluczowych danych aplikacji w bazach danych lub innych trwałych magazynach, aby były dostępne po ponownym uruchomieniu aplikacji. Unikanie blokowania interfejsu: Aplikacja powinna wykorzystywać asynchroniczne operacje w celu uniknięcia blokowania interfejsu użytkownika podczas zmian konfiguracji.",
        "correct": false
      }
    ]
  },
  {
    "question": "Wirtualizacja w systemach operacyjnych",
    "answers": [
      {
        "text": "Silne hasła – unikanie prostych kombinacji, używanie menedżerów haseł. Aktualizacje oprogramowania – usuwanie luk w zabezpieczeniach. Zasada najmniejszych uprawnień – użytkownicy powinni mieć tylko niezbędne uprawnienia. Kopia zapasowa (backup) – ochrona przed awariami i ransomware. Unikanie publicznych sieci Wi-Fi – korzystanie z VPN w przypadku łączenia się w niezaufanych sieciach. Edukacja użytkowników – szkolenia z cyberbezpieczeństwa.",
        "correct": false
      },
      {
        "text": "Wirtualizacja to technika, która pozwala uruchamiać wiele systemów operacyjnych na jednym fizycznym komputerze. ✅ Korzyści: Efektywne wykorzystanie sprzętu. Możliwość testowania różnych systemów operacyjnych. Łatwe skalowanie infrastruktury IT. Przykłady narzędzi: VMware, VirtualBox, Hyper-V.",
        "correct": true
      },
      {
        "text": "Ataki DoS blokują dostęp do usług przez przeciążenie serwera. Przykłady ataków: Flooding – wysyłanie ogromnej liczby żądań (np. SYN Flood). DDoS – atak z wielu komputerów jednocześnie. Sposoby ochrony: Filtry ruchu (firewalle). Systemy wykrywania ataków IDS/IPS. Sieci CDN ograniczające wpływ ataków.",
        "correct": false
      },
      {
        "text": "LLM mogą automatyzować wiele zadań związanych z przetwarzaniem języka naturalnego: Tłumaczenie tekstów – Modele takie jak DeepL czy Google Translate wykorzystują AI do precyzyjniejszego tłumaczenia. Podsumowywanie treści – LLM mogą skracać długie artykuły, generując ich streszczenia. Analiza sentymentu – AI potrafi wykrywać emocje w komentarzach klientów, co jest używane np. w mediach społecznościowych i analizie opinii.",
        "correct": false
      }
    ]
  },
  {
    "question": "Metody zapewniania bezpieczeństwa w systemach operacyjnych",
    "answers": [
      {
        "text": "Kontrola dostępu – systemy uprawnień do plików i katalogów. Szyfrowanie danych – zabezpieczenie plików przed nieautoryzowanym dostępem. Firewalle i antywirusy – ochrona przed atakami sieciowymi. Sandboxing – uruchamianie aplikacji w izolowanym środowisku. Regularne aktualizacje – łatanie luk w zabezpieczeniach.",
        "correct": true
      },
      {
        "text": "Responsywny design: Użycie technik takich jak Auto Layout (iOS) czy ConstraintLayout (Android) do dostosowania układu do różnych rozmiarów ekranów. Testowanie na różnych urządzeniach: Regularne testowanie aplikacji na różnych urządzeniach o różnych rozdzielczościach ekranów. Minimalizm w designie: Prosty, przejrzysty design z jasnymi i łatwymi do zrozumienia interakcjami. Interaktywne elementy: Używanie animacji i przejść w sposób, który poprawia użyteczność i wrażenia użytkownika.",
        "correct": false
      },
      {
        "text": "Python zarządza pamięcią za pomocą automatycznego zarządzania pamięcią i garbage collection. Zmienna w Pythonie nie jest przypisana do konkretnego miejsca w pamięci, a obiekt, który jej odpowiada, jest przechowywany w dynamicznie alokowanej pamięci (sterta). Mechanizmy: Garbage collection: Python automatycznie zwalnia pamięć, gdy obiekt nie jest już używany. Referencje: Liczba referencji do obiektów jest monitorowana, a obiekt zostaje usunięty, gdy nie ma do niego żadnej referencji.",
        "correct": false
      },
      {
        "text": "BPMN (Business Process Model and Notation) to standard notacji graficznej służący do modelowania procesów biznesowych. Dzięki BPMN można tworzyć zrozumiałe i spójne diagramy procesów, które pomagają w analizie, automatyzacji i optymalizacji działań organizacyjnych. Zastosowanie BPMN: Wizualizacja procesów: BPMN umożliwia tworzenie przejrzystych i zrozumiałych schematów procesów, co ułatwia zrozumienie skomplikowanych działań w organizacji. Komunikacja z interesariuszami: Umożliwia przekazywanie zrozumiałych informacji między zespołami biznesowymi i technicznymi. Optymalizacja: Pozwala na identyfikację wąskich gardeł, redundancji i innych problemów w procesach. Wyzwania: Złożoność procesów: Duża liczba elementów BPMN może sprawić, że diagramy staną się nieczytelne. Integracja z systemami IT: Implementacja procesów BPMN w systemach informatycznych może wymagać zaawansowanych narzędzi do automatyzacji procesów. Szkolenie zespołów: Użycie BPMN wymaga pewnego poziomu wiedzy i doświadczenia, co może stanowić wyzwanie w organizacjach bez odpowiedniego przeszkolenia.",
        "correct": false
      }
    ]
  },
  {
    "question": "System plików i jego funkcje",
    "answers": [
      {
        "text": "Zasady teorii liczb są stosowane w mechanizmach bezpieczeństwa. Drzewa Merkle’a: Używane w blockchainie do weryfikacji integralności danych. Generatory liczb losowych: Oparte na kongruencjach liniowych, np. w szyfrowaniu strumieniowym.",
        "correct": false
      },
      {
        "text": "Aby zapewnić płynne działanie aplikacji i zachowanie danych podczas zmiany konfiguracji (np. obrót ekranu), można zastosować: Przechowywanie stanu w pamięci: Korzystanie z mechanizmów przechowywania stanu (np. onSaveInstanceState w Androidzie lub state restoration w iOS), które umożliwiają zachowanie danych i ponowne załadowanie ich po zmianie konfiguracji. Zarządzanie danymi w bazach danych: Przechowywanie kluczowych danych aplikacji w bazach danych lub innych trwałych magazynach, aby były dostępne po ponownym uruchomieniu aplikacji. Unikanie blokowania interfejsu: Aplikacja powinna wykorzystywać asynchroniczne operacje w celu uniknięcia blokowania interfejsu użytkownika podczas zmian konfiguracji.",
        "correct": false
      },
      {
        "text": "Modele relacyjne: Bazują na tabelach, gdzie dane są przechowywane w wierszach i kolumnach. Relacyjne bazy danych, jak MySQL, PostgreSQL, SQL Server, używają języka SQL do zarządzania danymi. Zalety: Struktura danych jest bardzo uporządkowana i spójna. Zastosowanie kluczy głównych i obcych zapewnia integralność danych. Obsługują transakcje ACID (Atomicity, Consistency, Isolation, Durability). Wady: Skalowalność może być problemem w przypadku dużych zbiorów danych. Modele relacyjne mogą być mniej elastyczne w przypadku nieustrukturalizowanych danych. Modele nierelacyjne (NoSQL): Bazy danych, które nie stosują tabeli i wierszy. Zamiast tego mogą używać różnych formatów przechowywania danych, takich jak dokumenty, klucze-wartości, grafy czy kolumny. Zalety: Lepsza skalowalność pozioma. Elastyczność w przechowywaniu danych niestrukturalnych. Wydajność w obsłudze dużych ilości danych w czasie rzeczywistym. Wady: Brak jednolitej struktury może prowadzić do problemów z integralnością danych. Brak standardowego języka zapytań.",
        "correct": false
      },
      {
        "text": "System plików organizuje dane na nośniku (np. dysku twardym, SSD). 🔹 Podstawowe funkcje: Przechowywanie i organizacja plików. Zarządzanie dostępem do danych. Zapewnienie integralności danych. Przykłady systemów plików: NTFS, FAT32, EXT4.",
        "correct": true
      }
    ]
  },
  {
    "question": "Hypervisor – rola i organizacja",
    "answers": [
      {
        "text": "SOLID to zestaw zasad ułatwiających tworzenie czytelnego i elastycznego kodu: S (Single Responsibility Principle) – Każda klasa powinna mieć tylko jedną odpowiedzialność. O (Open/Closed Principle) – Klasy powinny być otwarte na rozszerzenia, ale zamknięte na modyfikacje. L (Liskov Substitution Principle) – Obiekty klas pochodnych powinny być wymienne z obiektami klas bazowych. I (Interface Segregation Principle) – Interfejsy powinny być dopasowane do potrzeb klas. D (Dependency Inversion Principle) – Zależności powinny być skierowane na abstrakcje, a nie konkretne klasy.",
        "correct": false
      },
      {
        "text": "W kontekście systemów kontroli wersji, tip oznacza najnowszą zmianę w danej gałęzi, czyli najbardziej aktualny commit. Head to wskaźnik na aktualny commit w gałęzi roboczej. Można również mówić o HEAD, które wskazuje na ostatni commit w aktualnie wybranej gałęzi. Aby sprawdzić liczbę heads w repozytorium, należy użyć komendy: git show-ref –heads",
        "correct": false
      },
      {
        "text": "🔹 C Deklaracja: int a; (tylko informacja o typie). Definicja: int a = 5; (tworzenie zmiennej i przypisanie wartości). Wskaźniki: int *ptr; (przechowuje adres innej zmiennej). 🔹 Java Deklaracja i definicja: int a = 5; (w Javie zmienne muszą należeć do klasy/metody). Typy referencyjne: obiekty przechowywane na stercie, np. String s = \"Hello\";. 🔹 C# Podobne do Javy, ale obsługuje wskaźniki w trybie unsafe: unsafe { int* ptr; } Typy wartościowe i referencyjne: int (przechowywany na stosie), string (na stercie). ✅ Podobieństwa: składnia deklaracji zmiennych jest zbliżona.\n❌ Różnice: zarządzanie pamięcią, obsługa wskaźników (C pozwala na bezpośredni dostęp, Java i C# działają na GC).",
        "correct": false
      },
      {
        "text": "Hypervisor to oprogramowanie zarządzające maszynami wirtualnymi. 🔹 Rodzaje hypervisorów: Typ 1 (bare-metal) – działa bezpośrednio na sprzęcie (np. VMware ESXi). Typ 2 (hostowane) – działa jako program w systemie operacyjnym (np. VirtualBox). ✅ Zalety wirtualizacji: izolacja systemów, optymalizacja zasobów, łatwe tworzenie kopii zapasowych.",
        "correct": true
      }
    ]
  },
  {
    "question": "Struktura rejestru systemu operacyjnego",
    "answers": [
      {
        "text": "Narzędzia takie jak Jira, Trello, Asana, Redmine oferują: Zarządzanie zadaniami – tworzenie i przypisywanie zadań. Harmonogramowanie – wykresy Gantta, sprinty Scrum. Śledzenie postępów – tablice Kanban. Zarządzanie dokumentacją – wiki, repozytoria kodu. Integracje z narzędziami deweloperskimi (np. GitHub, CI/CD).",
        "correct": false
      },
      {
        "text": "Uczenie nadzorowane: Dane treningowe zawierają etykiety. Zastosowanie: klasyfikacja (np. rozpoznawanie twarzy), regresja. Uczenie nienadzorowane: Model sam znajduje wzorce w danych. Zastosowanie: klasteryzacja (np. segmentacja klientów w e-commerce).",
        "correct": false
      },
      {
        "text": "Rejestr w Windows to baza danych przechowująca ustawienia systemu i aplikacji. 🔹 Główne gałęzie rejestru: HKEY_CLASSES_ROOT – informacje o typach plików i rozszerzeniach. HKEY_CURRENT_USER – ustawienia użytkownika. HKEY_LOCAL_MACHINE – globalne ustawienia systemu. HKEY_USERS – profile użytkowników. HKEY_CURRENT_CONFIG – informacje o aktualnej konfiguracji sprzętowej.",
        "correct": true
      },
      {
        "text": "Wątek to podstawowa jednostka wykonawcza w systemie operacyjnym. Jest częścią procesu, ale ma własny licznik rozkazów i stos. Wątki pozwalają na równoległe wykonywanie zadań, np. odtwarzanie muzyki i przeglądanie internetu jednocześnie. Zalety wielowątkowości: poprawa wydajności, efektywne wykorzystanie procesora, szybsza reakcja aplikacji. Problemy: synchronizacja wątków (np. dostęp do tych samych zasobów).",
        "correct": false
      }
    ]
  },
  {
    "question": "Mechanizmy bezpieczeństwa w bazach danych",
    "answers": [
      {
        "text": "Rodzaje testów: Jednostkowe – testowanie pojedynczych modułów kodu. Integracyjne – sprawdzanie komunikacji między modułami. Systemowe – testowanie całości aplikacji. Akceptacyjne – testowanie zgodności z wymaganiami biznesowymi. Korzyści automatyzacji: Szybsze wykrywanie błędów. Możliwość wielokrotnego powtarzania testów. Redukcja kosztów testowania. Mniejsze ryzyko błędu ludzkiego.",
        "correct": false
      },
      {
        "text": "Kontrola dostępu – użytkownicy mają różne poziomy uprawnień. Szyfrowanie danych – np. TLS w połączeniach do bazy. Backupy – ochrona przed utratą danych. Replikacja – zwiększenie niezawodności bazy. ACID – zasady zapewniające integralność danych.",
        "correct": true
      },
      {
        "text": "Tworzenie nowych klas poprzez dziedziczenie z istniejących klas pozwala na reużywanie kodu, co upraszcza organizację programu. Dziedziczenie wspomaga tworzenie hierarchii klas, w których klasy dziedziczą właściwości i metody innych klas. Techniki: Dziedziczenie pojedyncze: Klasa pochodna dziedziczy po jednej klasie bazowej. Dziedziczenie wielokrotne (w językach wspierających): Klasa pochodna dziedziczy po wielu klasach. Zalety: Redukcja powtarzalności kodu. Ułatwienie rozwoju programu przez dodawanie nowych funkcji bez zmiany istniejącego kodu.",
        "correct": false
      },
      {
        "text": "Aplikacje natywne: Działają na określonej platformie (iOS, Android). Wysoka wydajność i dostęp do pełnej funkcjonalności urządzenia. Wymagają osobnych wersji dla każdej platformy. Aplikacje hybrydowe: Kombinacja aplikacji natywnych i webowych. Jedna baza kodu dla wielu platform. Mniejsza wydajność w porównaniu z aplikacjami natywnymi. Aplikacje wieloplatformowe: Pisane raz i uruchamiane na wielu platformach (np. Xamarin, React Native). Oferują kompromis między wydajnością a oszczędnością czasu rozwoju. Zagadnienia dla kierunku Informatyka, specjalność: Aplikacje mobilne i bazy danych",
        "correct": false
      }
    ]
  },
  {
    "question": "Systemy operacyjne 32-bitowe vs. 64-bitowe",
    "answers": [
      {
        "text": "32-bitowy system obsługuje do 4 GB RAM, ograniczona wydajność. 64-bitowy system obsługuje więcej pamięci i może uruchamiać zarówno aplikacje 32-, jak i 64-bitowe. ✅ Zalety 64-bitowego systemu: lepsza wydajność, możliwość obsługi większej ilości pamięci RAM, lepsza obsługa aplikacji wymagających dużej mocy obliczeniowej.",
        "correct": true
      },
      {
        "text": "Biblioteki wsparcia wzornictwa w Androidzie oferują narzędzia i komponenty ułatwiające projektowanie interfejsów zgodnych z wytycznymi Material Design. Do najważniejszych funkcji należą: Zestaw komponentów UI: Takich jak widżety przycisków, przełączników, pasków narzędzi, które pozwalają na spójne projektowanie aplikacji. Material Theming: Umożliwia łatwe dostosowanie wyglądu aplikacji poprzez palety kolorów, style typografii i kształty elementów UI. Gesty i animacje: Ułatwiają dodawanie animacji, jak przejścia między ekranami czy efekty dotykowe, które poprawiają interaktywność aplikacji. Zgodność z wersjami Androida: Zapewniają wsparcie dla różnych wersji systemu Android, co pozwala na tworzenie spójnego UI, niezależnie od wersji OS.",
        "correct": false
      },
      {
        "text": "Zbieranie danych – określenie jakości i źródła danych (np. dane medyczne, obrazy). Przetwarzanie danych – czyszczenie i normalizacja, np. usuwanie duplikatów. Wybór modelu – regresja, SVM, sieci neuronowe w zależności od problemu. Trenowanie modelu – dostosowanie wag na podstawie zbioru treningowego. Ewaluacja modelu – sprawdzanie jakości na zbiorze testowym. Optymalizacja hiperparametrów – poprawianie wydajności (np. tuning learning rate).",
        "correct": false
      },
      {
        "text": "Rejestr w Windows to baza danych przechowująca ustawienia systemu i aplikacji. 🔹 Główne gałęzie rejestru: HKEY_CLASSES_ROOT – informacje o typach plików i rozszerzeniach. HKEY_CURRENT_USER – ustawienia użytkownika. HKEY_LOCAL_MACHINE – globalne ustawienia systemu. HKEY_USERS – profile użytkowników. HKEY_CURRENT_CONFIG – informacje o aktualnej konfiguracji sprzętowej.",
        "correct": false
      }
    ]
  },
  {
    "question": "Deklaracja, definicja i wykorzystanie zmiennych w C, Java i C#",
    "answers": [
      {
        "text": "Magistrali – wszystkie urządzenia podłączone do jednej linii (prosta, ale awaryjna). Pierścienia – dane krążą w jednym kierunku (wydajna, ale podatna na awarie). Gwiazdy – centralny punkt (switch/router) łączy wszystkie urządzenia (popularna i bezpieczna). Siatki (mesh) – każde urządzenie może łączyć się z każdym (wysoka redundancja).",
        "correct": false
      },
      {
        "text": "🔹 C Deklaracja: int a; (tylko informacja o typie). Definicja: int a = 5; (tworzenie zmiennej i przypisanie wartości). Wskaźniki: int *ptr; (przechowuje adres innej zmiennej). 🔹 Java Deklaracja i definicja: int a = 5; (w Javie zmienne muszą należeć do klasy/metody). Typy referencyjne: obiekty przechowywane na stercie, np. String s = \"Hello\";. 🔹 C# Podobne do Javy, ale obsługuje wskaźniki w trybie unsafe: unsafe { int* ptr; } Typy wartościowe i referencyjne: int (przechowywany na stosie), string (na stercie). ✅ Podobieństwa: składnia deklaracji zmiennych jest zbliżona.\n❌ Różnice: zarządzanie pamięcią, obsługa wskaźników (C pozwala na bezpośredni dostęp, Java i C# działają na GC).",
        "correct": true
      },
      {
        "text": "WPF (Windows Presentation Foundation) wykorzystuje XAML (Extensible Application Markup Language) do definiowania interfejsu użytkownika. XAML to deklaratywny język znaczników, który pozwala na opisanie struktury UI w sposób wizualny. Przykład: <Button Content=\"Kliknij mnie\" Click=\"OnButtonClick\"/> Tutaj definiujemy przycisk w XAML, a jego logikę obsługujemy w C# w metodzie OnButtonClick.",
        "correct": false
      },
      {
        "text": "Techniki pozyskiwania wymagań: Wywiady: Rozmowy z interesariuszami w celu poznania ich potrzeb i oczekiwań. B2B: Wywiady z menedżerami, inżynierami, klientami B2B. B2C: Wywiady z użytkownikami indywidualnymi, badania fokusowe. Warsztaty (Workshops): Spotkania grupowe, gdzie omawia się wymagania. B2B: Warsztaty z przedstawicielami różnych działów organizacji. B2C: Warsztaty z użytkownikami, by lepiej zrozumieć ich potrzeby. Prototypowanie: Tworzenie wstępnej wersji systemu, aby zobaczyć, czy spełnia oczekiwania użytkowników. B2B: Wykorzystywane w przypadku dużych systemów B2B, np. ERP. B2C: Prototypy aplikacji mobilnych i webowych do testowania z użytkownikami. Ankiety i kwestionariusze: Zbieranie danych w formie pytań do szerokiego kręgu osób. B2B: Ankiety dla przedsiębiorstw w celu zbierania informacji o preferencjach. B2C: Kwestionariusze skierowane do użytkowników końcowych, np. aplikacji konsumenckich.",
        "correct": false
      }
    ]
  },
  {
    "question": "Obsługa wyjątków w wybranym języku programowania – mechanizmy i najlepsze praktyki",
    "answers": [
      {
        "text": "System plików organizuje dane na nośniku (np. dysku twardym, SSD). 🔹 Podstawowe funkcje: Przechowywanie i organizacja plików. Zarządzanie dostępem do danych. Zapewnienie integralności danych. Przykłady systemów plików: NTFS, FAT32, EXT4.",
        "correct": false
      },
      {
        "text": "Aby zoptymalizować wydajność i rozmiar aplikacji: Kompresja zasobów: Kompresowanie obrazów (np. format WebP), dźwięków i plików wideo, aby zmniejszyć ich rozmiar bez utraty jakości. Używanie odpowiednich rozdzielczości: Ładowanie obrazów o odpowiednich rozdzielczościach, które są dostosowane do ekranu urządzenia. Lazy loading zasobów: Ładowanie zasobów tylko wtedy, gdy są one wymagane, zamiast ładowania ich na starcie aplikacji.",
        "correct": false
      },
      {
        "text": "Obsługa wyjątków jest mechanizmem pozwalającym na zarządzanie błędami w programie. Dzięki niej, kiedy pojawia się błąd, program nie przerywa działania, lecz reaguje na niego w zaplanowany sposób. W językach takich jak Java, C# czy Python, wyjątkami zarządza się przy pomocy bloków try-catch. Blok try zawiera kod, który może spowodować wyjątek, a blok catch obsługuje go, oferując odpowiednią reakcję. Najlepsze praktyki: Zawsze obsługuj konkretne wyjątki, unikaj ogólnych catch. Unikaj używania wyjątków do kontrolowania przepływu programu (np. zamiast try-catch do logiki). Korzystaj z finally do zwalniania zasobów, np. zamykania plików.",
        "correct": true
      },
      {
        "text": "Testy jednostkowe: Używanie frameworków takich jak XCTest do testowania poszczególnych funkcji i metod aplikacji. Testy UI: Automatyzacja testów UI za pomocą narzędzi takich jak XCUITest do interakcji z interfejsem aplikacji. Mockowanie danych: Używanie mocków i stubów do symulacji danych, które aplikacja przetwarza. Continuous Integration (CI): Używanie narzędzi CI, takich jak Jenkins lub Bitrise, do automatyzacji testów podczas każdego commita w kodzie. Testy wydajnościowe: Używanie narzędzi takich jak Instruments w Xcode, które pozwala na śledzenie użycia CPU, pamięci, animacji i renderowania UI w aplikacji.",
        "correct": false
      }
    ]
  },
  {
    "question": "Tablica – zastosowanie i przykłady w C# oraz Java",
    "answers": [
      {
        "text": "Testy jednostkowe: Narzędzia takie jak JUnit (Android) lub XCTest (iOS) do testowania pojedynczych funkcji. Testy integracyjne: Użycie testów integracyjnych do sprawdzania poprawności działania aplikacji z backendem oraz integracji z bazami danych. Testy UI: Narzędzia jak Espresso (Android) i XCUITest (iOS) umożliwiają automatyczne testowanie interakcji użytkownika z aplikacją. Symulowanie różnych scenariuszy: Korzystanie z emulatorów i rzeczywistych urządzeń, aby testować aplikację w różnych warunkach (np. w trybie offline).",
        "correct": false
      },
      {
        "text": "Tablica to struktura danych, która pozwala na przechowywanie wielu wartości tego samego typu w jednym obiekcie. Zaletą tablicy jest szybki dostęp do elementów za pomocą indeksu, jednak rozmiar tablicy jest stały po jej zadeklarowaniu. Przykład w C#: int[] liczby = new int[5] {1, 2, 3, 4, 5}; Przykład w Java: int[] liczby = {1, 2, 3, 4, 5}; Zastosowanie: Tablice są używane np. do przechowywania wyników kalkulacji, zbiorów danych czy elementów w grze komputerowej.",
        "correct": true
      },
      {
        "text": "Klasa to definicja szablonu dla obiektów, zawierająca zmienne i metody. Jest jak plan budowy domu, natomiast obiekt jest jego fizycznym odpowiednikiem. Obiekt to instancja klasy, tworzona na podstawie tej definicji, która zawiera konkretne dane. Przykład w Java: class Samochod { String model; void uruchomSilnik() { System.out.println(\"Silnik uruchomiony\"); } } Samochod auto = new Samochod(); W tym przykładzie Samochod to klasa, a auto to obiekt.",
        "correct": false
      },
      {
        "text": "Duże modele językowe, takie jak ChatGPT, można integrować z systemami IT na kilka sposobów: Asystenci w aplikacjach – LLM mogą wspierać obsługę klienta, generując automatyczne odpowiedzi w chatbotach. Automatyczne generowanie treści – Integracja z CMS pozwala na automatyczne tworzenie podsumowań, raportów czy e-maili. Wyszukiwanie semantyczne – Można je wykorzystać do analizy zapytań użytkowników i lepszego dopasowywania wyników w wyszukiwarkach. Analiza danych – LLM pomagają w przetwarzaniu dużych zbiorów danych i generowaniu raportów na ich podstawie.",
        "correct": false
      }
    ]
  },
  {
    "question": "Konfiguracja upstream branch w Git",
    "answers": [
      {
        "text": "Aplikacje natywne to programy stworzone specjalnie dla konkretnego systemu operacyjnego (np. Android, iOS), natomiast aplikacje internetowe działają w przeglądarce i nie wymagają instalacji. ✅ Zalety aplikacji natywnych: Lepsza wydajność i szybkość działania. Pełny dostęp do funkcji urządzenia (kamera, GPS, powiadomienia). Możliwość pracy offline. ❌ Wady aplikacji natywnych: Wyższy koszt i czas produkcji (osobne wersje na Androida i iOS). Konieczność aktualizacji przez użytkownika. ✅ Zalety aplikacji internetowych: Działają na wszystkich urządzeniach z przeglądarką. Aktualizacje są natychmiastowe i nie wymagają instalacji. ❌ Wady aplikacji internetowych: Wolniejsze działanie w porównaniu do natywnych. Ograniczony dostęp do funkcji urządzenia. Wymagają stałego połączenia z internetem.",
        "correct": false
      },
      {
        "text": "Modyfikatory dostępu kontrolują, który kod może uzyskać dostęp do członków klasy. W różnych językach (np. Java, C#) są stosowane modyfikatory takie jak: public – dostęp do członka klasy z każdej lokalizacji w kodzie. private – dostęp tylko wewnątrz klasy. protected – dostęp w obrębie klasy i klas dziedziczących. Przykład w Java: public class Osoba { private String imie; protected int wiek; }",
        "correct": false
      },
      {
        "text": "Upstream branch w systemie kontroli wersji Git to gałąź, która jest połączona z zdalnym repozytorium, na przykład z serwerem GitHub. Aby skonfigurować upstream branch, używamy komendy: git push --set-upstream origin nazwa_gałęzi Można również nadać inną nazwę gałęzi w repozytorium zdalnym: git push --set-upstream origin lokalna_gałąź:inna_nazwa_zdalna To zapewnia, że gałąź w repozytorium lokalnym jest powiązana z odpowiednią gałęzią zdalną.",
        "correct": true
      },
      {
        "text": "Zasady Human Interface Guidelines (HIG): Spójność: Zgodność z systemowym wyglądem, zapewnienie użytkownikowi intuicyjnego i spójnego doświadczenia z innymi aplikacjami i systemem. Zrozumiałość: Aplikacja powinna mieć logiczną strukturę, nawigację, a przyciski i elementy sterujące powinny być łatwe do znalezienia i używania. Czytelność: Użycie odpowiedniego rozmiaru czcionek, kontrastu oraz przestrzeni pomiędzy elementami interfejsu. Feedback: Aplikacja powinna reagować na akcje użytkownika, np. przez animacje, wibracje lub dźwięki, co zwiększa komfort użytkowania. Dostosowanie do urządzenia: UI powinno dostosować się do różnych rozdzielczości ekranów, formatu urządzenia (iPhone, iPad), oraz wykorzystać natywne gesty. Łatwość używania: Ułatwienia takie jak prostota w obsłudze aplikacji, możliwość szybkiego dostępu do głównych funkcji oraz ograniczenie złożoności interfejsu.",
        "correct": false
      }
    ]
  },
  {
    "question": "Tip i Head w systemach kontroli wersji",
    "answers": [
      {
        "text": "W kontekście systemów kontroli wersji, tip oznacza najnowszą zmianę w danej gałęzi, czyli najbardziej aktualny commit. Head to wskaźnik na aktualny commit w gałęzi roboczej. Można również mówić o HEAD, które wskazuje na ostatni commit w aktualnie wybranej gałęzi. Aby sprawdzić liczbę heads w repozytorium, należy użyć komendy: git show-ref –heads",
        "correct": true
      },
      {
        "text": "Systemy rekomendacyjne i analiza danych opierają się na modelach probabilistycznych i metodach statystycznych, aby przewidywać preferencje użytkowników oraz analizować wzorce w danych. Systemy rekomendacyjne: Filtracja kolaboratywna – analiza podobieństw między użytkownikami (np. system Netflix przewiduje filmy na podstawie ocen innych użytkowników o podobnych gustach). Modele Bayesowskie – prognozowanie na podstawie prawdopodobieństwa (np. filtry antyspamowe analizujące treść e-maili). Analiza danych: Regresja liniowa i wieloraka – wykorzystywane do przewidywania trendów na podstawie wcześniejszych danych (np. prognozy sprzedaży). Analiza wariancji (ANOVA) – stosowana do porównywania różnych grup danych (np. testowanie skuteczności reklam w różnych regionach).",
        "correct": false
      },
      {
        "text": "Silniki ORM umożliwiają mapowanie obiektów w programowaniu obiektowym na tabele w relacyjnej bazie danych, co upraszcza pracę z bazą danych w aplikacjach. Przykłady ORM: Hibernate (Java): Umożliwia mapowanie klas Java do tabel w bazach SQL, automatyzując operacje CRUD. Entity Framework (C#): Narzędzie ORM dla platformy .NET, pozwala na manipulację danymi w bazie danych przy użyciu obiektów C#. Django ORM (Python): Zintegrowane w Django ORM, umożliwia interakcję z bazą danych SQL za pomocą Pythonowych obiektów.",
        "correct": false
      },
      {
        "text": "Normalizacja to proces organizowania danych w bazach danych w celu eliminacji redundancji i zapewnienia integralności danych. Głównym celem normalizacji jest zmniejszenie duplikacji danych, co poprawia efektywność przechowywania i aktualizowania informacji. Pierwsza postać normalna (1NF): Zakłada, że każda kolumna w tabeli zawiera tylko pojedyncze wartości (atomowe) oraz, że wszystkie rekordy są unikalne. Dodatkowo, wszystkie atrybuty muszą być jednorodne, tzn. zawierać dane tego samego typu. Przykład (1NF): Przed normalizacją: ID | Imię | Zajęcia 1  | Jan  | Matematyka, Fizyka 2  | Anna | Historia Po normalizacji do 1NF: ID | Imię | Zajęcia 1  | Jan  | Matematyka 1  | Jan  | Fizyka 2  | Anna | Historia Druga postać normalna (2NF): Wymaga, aby spełniona była 1NF, a także, aby każda kolumna była zależna od całkowitej klucza głównego, a nie tylko od jego części. Przykład (2NF): Przed normalizacją: ID | Nazwa kursu  | Imię nauczyciela | Zajęcia 1  | Matematyka   | Jan Kowalski     | Fizyka 1  | Fizyka       | Anna Nowak       | Matematyka Po normalizacji do 2NF: Tabela 1 (Kursy): ID | Nazwa kursu 1              | Matematyka 2              | Fizyka Tabela 2 (Nauczyciele): Kurs_ID | Nauczyciel 1         | Jan Kowalski 2         | Anna Nowak Trzecia postać normalna (3NF): Wymaga, aby spełniona była 2NF, a także aby każda kolumna niekluczowa była zależna bezpośrednio od klucza głównego i nie miała zależności przechodnich (tzn. nie może być zależna od innych kolumn, które nie są kluczem głównym). Przykład (3NF): Przed normalizacją: ID | Imię | Miasto    | Kod pocztowy 1  | Jan  | Warszawa  | 00-000 2  | Anna | Kraków    | 30-000 Po normalizacji do 3NF: Tabela 1 (Osoby): ID | Imię | Miasto_ID 1                 | Jan  | 1 2                 | Anna | 2 Tabela 2 (Miasta): Miasto_ID | Miasto     | Kod pocztowy 1              | Warszawa  | 00-000 2              | Kraków    | 30-000",
        "correct": false
      }
    ]
  },
  {
    "question": "Klasa vs obiekt w programowaniu obiektowym",
    "answers": [
      {
        "text": "Mechanizmy zapewniające bezpieczeństwo: Autoryzacja i uwierzytelnianie: Stosowanie systemów autoryzacji (np. Role-Based Access Control - RBAC) i szyfrowania danych. Szyfrowanie: Używanie szyfrowania danych w spoczynku (np. AES) oraz szyfrowanie komunikacji z bazą danych (SSL/TLS). Audit log: Rejestrowanie operacji na bazie danych w celu monitorowania i wykrywania podejrzanych działań. Kontrola dostępu: Stosowanie uprawnień na poziomie tabel, rekordów oraz operacji (np. SELECT, INSERT). Mechanizmy niezawodności: Transakcje ACID: Zapewnienie integralności danych za pomocą transakcji, które gwarantują atomowość, spójność, izolację i trwałość. Replikacja: Duplikowanie danych na różnych serwerach w celu zapewnienia dostępności w przypadku awarii. Backup i odzyskiwanie: Regularne wykonywanie kopii zapasowych bazy danych oraz testowanie procesu odzyskiwania danych.",
        "correct": false
      },
      {
        "text": "Klasa to definicja szablonu dla obiektów, zawierająca zmienne i metody. Jest jak plan budowy domu, natomiast obiekt jest jego fizycznym odpowiednikiem. Obiekt to instancja klasy, tworzona na podstawie tej definicji, która zawiera konkretne dane. Przykład w Java: class Samochod { String model; void uruchomSilnik() { System.out.println(\"Silnik uruchomiony\"); } } Samochod auto = new Samochod(); W tym przykładzie Samochod to klasa, a auto to obiekt.",
        "correct": true
      },
      {
        "text": "Bezpieczeństwo w systemach bazodanowych obejmuje: Autentykację i autoryzację: Określenie, kto ma dostęp do danych i jaką rolę pełni. Szyfrowanie: Chroni dane przechowywane w bazie przed nieautoryzowanym dostępem. Transakcje: Zapewniają integralność danych i ich spójność (ACID).",
        "correct": false
      },
      {
        "text": "Aby minimalizować zużycie baterii, należy: Optymalizować operacje w tle: Ograniczenie częstotliwości wykonywania operacji w tle (np. zapytań sieciowych). Wykorzystywanie lokalizacji tylko wtedy, gdy jest to konieczne: Używanie GPS tylko w razie potrzeby i w trybie oszczędzania energii. Zarządzanie powiadomieniami: Ograniczenie liczby powiadomień, które mogą wpływać na zużycie energii. Używanie trybu oszczędzania energii: Wiele urządzeń mobilnych ma wbudowane tryby oszczędzania energii, które ograniczają działanie aplikacji w tle.",
        "correct": false
      }
    ]
  },
  {
    "question": "Enkapsulacja – znaczenie i zalety",
    "answers": [
      {
        "text": "Efektywne algorytmy (np. O(n log n) zamiast O(n²)) pozwalają na obsługę większej liczby użytkowników. Struktury danych (np. drzewa AVL zamiast list) mogą poprawić czas dostępu do danych. Równoległość – algorytmy równoległe (np. MapReduce) zwiększają skalowalność w systemach rozproszonych.",
        "correct": false
      },
      {
        "text": "Enkapsulacja to technika w programowaniu obiektowym polegająca na ukrywaniu szczegółów implementacji klasy i udostępnianiu tylko niezbędnych metod lub zmiennych do interakcji z obiektem. Dzięki temu kontrolujemy dostęp do danych i metod, co zapewnia bezpieczeństwo i łatwiejsze zarządzanie kodem. Zalety: Ochrona danych przed nieautoryzowanym dostępem. Łatwiejsze utrzymanie kodu, ponieważ zmiany wewnętrzne w klasie nie wpływają na jej zewnętrzne wykorzystanie. Przykład w Java: class BankAccount { private double saldo; public void deposit(double amount) { if (amount > 0) saldo += amount; } public double getSaldo() { return saldo; } }",
        "correct": true
      },
      {
        "text": "Wymagania niefunkcjonalne odnoszą się do jakości systemu, takich jak: Wydajność: Przykład: System powinien obsługiwać 10 000 zapytań na minutę. Skalowalność: Przykład: System powinien być w stanie obsłużyć 1 milion użytkowników. Bezpieczeństwo: Przykład: Wszystkie dane powinny być szyfrowane za pomocą algorytmu AES-256.",
        "correct": false
      },
      {
        "text": "Uczenie nadzorowane: Dane treningowe zawierają etykiety. Zastosowanie: klasyfikacja (np. rozpoznawanie twarzy), regresja. Uczenie nienadzorowane: Model sam znajduje wzorce w danych. Zastosowanie: klasteryzacja (np. segmentacja klientów w e-commerce).",
        "correct": false
      }
    ]
  },
  {
    "question": "Polimorfizm – znaczenie i przykłady",
    "answers": [
      {
        "text": "Polimorfizm to cecha programowania obiektowego, która pozwala na wykorzystanie tej samej metody w różnych klasach. Pozwala to na elastyczność i ponowne użycie kodu. Przykład w Java: class Zwierze { void dzwiek() { System.out.println(\"Dźwięk zwierzęcia\"); } } class Kot extends Zwierze { void dzwiek() { System.out.println(\"Miau\"); } } Polimorfizm pozwala na to, by obiekt Kot zachowywał się zgodnie z własną implementacją metody dzwiek(), nawet jeśli jego typ to Zwierze.",
        "correct": true
      },
      {
        "text": "Enkapsulacja to technika w programowaniu obiektowym polegająca na ukrywaniu szczegółów implementacji klasy i udostępnianiu tylko niezbędnych metod lub zmiennych do interakcji z obiektem. Dzięki temu kontrolujemy dostęp do danych i metod, co zapewnia bezpieczeństwo i łatwiejsze zarządzanie kodem. Zalety: Ochrona danych przed nieautoryzowanym dostępem. Łatwiejsze utrzymanie kodu, ponieważ zmiany wewnętrzne w klasie nie wpływają na jej zewnętrzne wykorzystanie. Przykład w Java: class BankAccount { private double saldo; public void deposit(double amount) { if (amount > 0) saldo += amount; } public double getSaldo() { return saldo; } }",
        "correct": false
      },
      {
        "text": "UML (Unified Modeling Language) to język służący do tworzenia modeli systemów informatycznych, umożliwiający ich graficzne przedstawienie i zrozumienie. Główne cechy: Zastosowanie: UML jest szeroko stosowany w inżynierii oprogramowania do projektowania, dokumentowania i analizowania systemów. Diagramy: UML oferuje różne typy diagramów, takie jak: Diagramy klas: Przedstawiają struktury obiektów w systemie. Diagramy przypadków użycia: Pokazują interakcje między użytkownikami a systemem. Diagramy sekwencji: Ilustrują kolejność komunikatów między obiektami.",
        "correct": false
      },
      {
        "text": "Maska podsieci określa, która część adresu IP jest siecią, a która urządzeniem. Cel – Dzieli sieć na mniejsze podsieci, zwiększając efektywność adresowania. Przykład – Maska 255.255.255.0 oznacza, że pierwsze trzy bajty IP to adres sieci, a ostatni to urządzenie.",
        "correct": false
      }
    ]
  },
  {
    "question": "Modyfikatory dostępu w różnych językach programowania",
    "answers": [
      {
        "text": "Modyfikatory dostępu kontrolują, który kod może uzyskać dostęp do członków klasy. W różnych językach (np. Java, C#) są stosowane modyfikatory takie jak: public – dostęp do członka klasy z każdej lokalizacji w kodzie. private – dostęp tylko wewnątrz klasy. protected – dostęp w obrębie klasy i klas dziedziczących. Przykład w Java: public class Osoba { private String imie; protected int wiek; }",
        "correct": true
      },
      {
        "text": "Podejście obiektowe (OOP): Uwarunkowania: Stosowane w przypadku systemów, które wymagają dużej elastyczności, rozwoju i ponownego wykorzystania kodu. Dobre dla aplikacji złożonych, które muszą być łatwe w utrzymaniu i rozszerzaniu. Przykład: Programy oparte na aplikacjach mobilnych i rozbudowanych systemach informatycznych. Podejście strukturalne: Uwarunkowania: Skierowane na proste, sekwencyjne operacje, gdzie kod jest bardziej liniowy i łatwiejszy do zrozumienia w mniejszych projektach. Przykład: Systemy wbudowane, proste aplikacje desktopowe.",
        "correct": false
      },
      {
        "text": "Silne hasła – unikanie prostych kombinacji, używanie menedżerów haseł. Aktualizacje oprogramowania – usuwanie luk w zabezpieczeniach. Zasada najmniejszych uprawnień – użytkownicy powinni mieć tylko niezbędne uprawnienia. Kopia zapasowa (backup) – ochrona przed awariami i ransomware. Unikanie publicznych sieci Wi-Fi – korzystanie z VPN w przypadku łączenia się w niezaufanych sieciach. Edukacja użytkowników – szkolenia z cyberbezpieczeństwa.",
        "correct": false
      },
      {
        "text": "Kontrola dostępu – systemy uprawnień do plików i katalogów. Szyfrowanie danych – zabezpieczenie plików przed nieautoryzowanym dostępem. Firewalle i antywirusy – ochrona przed atakami sieciowymi. Sandboxing – uruchamianie aplikacji w izolowanym środowisku. Regularne aktualizacje – łatanie luk w zabezpieczeniach.",
        "correct": false
      }
    ]
  },
  {
    "question": "Klasa i obiekt – definicja, tworzenie i usuwanie",
    "answers": [
      {
        "text": "Aby aplikacja była przyjazna dla starszych użytkowników: Duża czcionka i kontrast: Zapewnienie dużych i czytelnych czcionek oraz wysokiego kontrastu, by poprawić czytelność. Prosty, intuicyjny interfejs: Stosowanie prostych i zrozumiałych interakcji, unikanie nadmiernej liczby opcji na ekranie. Pomocne może być użycie jednego ekranu głównego z wyraźnymi przyciskami do podstawowych funkcji. Zwiększona responsywność dotyku: Ułatwienie obsługi aplikacji osobom z ograniczoną sprawnością motoryczną poprzez większe przyciski i obszary dotykowe. Integracja z funkcjami systemowymi: Wykorzystanie funkcji systemowych takich jak Zoom, VoiceOver (iOS) czy TalkBack (Android) do poprawy dostępności aplikacji. Instrukcje i wsparcie: Proste, zrozumiałe komunikaty i dostępność samouczków lub wsparcia na każdym etapie korzystania z aplikacji.",
        "correct": false
      },
      {
        "text": "Rodzaje testów: Jednostkowe – testowanie pojedynczych modułów kodu. Integracyjne – sprawdzanie komunikacji między modułami. Systemowe – testowanie całości aplikacji. Akceptacyjne – testowanie zgodności z wymaganiami biznesowymi. Korzyści automatyzacji: Szybsze wykrywanie błędów. Możliwość wielokrotnego powtarzania testów. Redukcja kosztów testowania. Mniejsze ryzyko błędu ludzkiego.",
        "correct": false
      },
      {
        "text": "Wymagania funkcjonalne: Integracja z innymi systemami: Możliwość wymiany danych z systemami ERP, CRM, itp. Obsługa różnych formatów danych: Konwersja i przesyłanie danych między różnymi formatami. Wydajność: Szybka wymiana danych i integracja w czasie rzeczywistym. Wymagania niefunkcjonalne: Bezpieczeństwo: Silne mechanizmy szyfrowania, uwierzytelnianie użytkowników. Skalowalność: Możliwość rozbudowy systemu o dodatkowe moduły w przyszłości. Wydajność: Niski czas odpowiedzi, optymalizacja zapytań.",
        "correct": false
      },
      {
        "text": "Klasa jest definicją, która wskazuje, jakie właściwości i metody będą dostępne dla tworzonych obiektów. Obiekt to instancja klasy, która może być stworzona za pomocą słowa kluczowego new. Przykład w Java: class Samochod { String model; } Samochod auto = new Samochod(); Usuwanie obiektów w Java odbywa się automatycznie przez Garbage Collector, który zarządza pamięcią.",
        "correct": true
      }
    ]
  },
  {
    "question": "Metody instancyjne vs statyczne w C#",
    "answers": [
      {
        "text": "Biblioteki wsparcia wzornictwa w Androidzie oferują narzędzia i komponenty ułatwiające projektowanie interfejsów zgodnych z wytycznymi Material Design. Do najważniejszych funkcji należą: Zestaw komponentów UI: Takich jak widżety przycisków, przełączników, pasków narzędzi, które pozwalają na spójne projektowanie aplikacji. Material Theming: Umożliwia łatwe dostosowanie wyglądu aplikacji poprzez palety kolorów, style typografii i kształty elementów UI. Gesty i animacje: Ułatwiają dodawanie animacji, jak przejścia między ekranami czy efekty dotykowe, które poprawiają interaktywność aplikacji. Zgodność z wersjami Androida: Zapewniają wsparcie dla różnych wersji systemu Android, co pozwala na tworzenie spójnego UI, niezależnie od wersji OS.",
        "correct": false
      },
      {
        "text": "Metody instancyjne są wywoływane na obiektach i mogą korzystać z instancji klasy. Metody statyczne są wywoływane na samej klasie, nie wymagają tworzenia obiektów. Przykład w C#: class Matematyka { public static int Dodaj(int a, int b) { return a + b; } } Matematyka.Dodaj(3, 4); // Wywołanie metody statycznej class Samochod { public void Uruchom() { Console.WriteLine(\"Silnik uruchomiony!\"); } } Samochod auto = new Samochod(); auto.Uruchom(); // Wywołanie metody instancyjnej Metody statyczne są używane, gdy nie ma potrzeby tworzenia obiektów, np. w funkcjach pomocniczych.",
        "correct": true
      },
      {
        "text": "Android Studio to oficjalne środowisko programistyczne dla systemu Android. Jego główne funkcje to: Edytor kodu: Zaawansowany edytor z funkcjami automatycznego uzupełniania kodu, refaktoryzacji oraz diagnostyki błędów. Emulator Android: Umożliwia uruchomienie aplikacji na różnych wersjach Androida i urządzeniach wirtualnych. Narzędzia do debugowania: Android Studio zapewnia narzędzia do debugowania aplikacji, które pomagają śledzić błędy i analizować logi. Wbudowane narzędzia do testowania: Integracja z narzędziami do testowania, zarówno jednostkowymi, jak i UI, umożliwia sprawdzanie jakości aplikacji. Designer UI: Graficzny edytor do tworzenia interfejsów użytkownika w technologii XML oraz Jetpack Compose.",
        "correct": false
      },
      {
        "text": "Model tworzony w narzędziach takich jak Scilab czy Matlab jest tylko przybliżeniem rzeczywistości. Zawsze występują pewne niepewności, np. w parametrach modelu (np. współczynniki oporu w modelu aerodynamicznym) lub warunkach brzegowych (np. zmienne temperatury w modelu cieplnym). Te niepewności mogą wpływać na dokładność wyników i ich wiarygodność, dlatego często stosuje się analizę wrażliwości, aby zrozumieć, jak zmiany w danych wejściowych wpływają na wyniki. Przykład: Modelowanie przepływu powietrza w turbinie wiatrowej może być obarczone niepewnością w określaniu prędkości wiatru, co wpływa na dokładność prognozowanej energii.",
        "correct": false
      }
    ]
  },
  {
    "question": "Ideologia dziedziczenia w programowaniu obiektowym",
    "answers": [
      {
        "text": "Optymalizacja funkcji kosztu w AI – gradient descent używa pochodnych do minimalizacji błędów w sieciach neuronowych. Analiza szybkości zmian – różniczkowanie pomaga w dynamicznym sterowaniu systemami. Interpolacja i aproksymacja – całkowanie pozwala modelować złożone funkcje w analizie danych.",
        "correct": false
      },
      {
        "text": "Dziedziczenie to jedna z podstawowych zasad programowania obiektowego, która umożliwia tworzenie nowych klas na podstawie już istniejących, odziedziczając ich właściwości i metody. Pozwala to na organizowanie klas w hierarchię, gdzie klasy pochodne (subklasy) dziedziczą po klasach bazowych (superklasach). Dzięki dziedziczeniu możemy ponownie wykorzystać kod, a także rozszerzać funkcjonalność bez konieczności pisania tego samego kodu od nowa. Przykład w Javie: class Pojazd { void uruchomSilnik() { System.out.println(\"Silnik uruchomiony!\"); } } class Samochod extends Pojazd { void włączKlimatyzację() { System.out.println(\"Klimatyzacja włączona!\"); } } public class Main { public static void main(String[] args) { Samochod samochod = new Samochod(); samochod.uruchomSilnik(); // metoda odziedziczona samochod.włączKlimatyzację(); // metoda specyficzna dla Samochodu } } W tym przypadku klasa Samochod dziedziczy metodę uruchomSilnik z klasy Pojazd.",
        "correct": true
      },
      {
        "text": "Rejestr w Windows to baza danych przechowująca ustawienia systemu i aplikacji. 🔹 Główne gałęzie rejestru: HKEY_CLASSES_ROOT – informacje o typach plików i rozszerzeniach. HKEY_CURRENT_USER – ustawienia użytkownika. HKEY_LOCAL_MACHINE – globalne ustawienia systemu. HKEY_USERS – profile użytkowników. HKEY_CURRENT_CONFIG – informacje o aktualnej konfiguracji sprzętowej.",
        "correct": false
      },
      {
        "text": "UML (Unified Modeling Language) to język służący do tworzenia modeli systemów informatycznych, umożliwiający ich graficzne przedstawienie i zrozumienie. Główne cechy: Zastosowanie: UML jest szeroko stosowany w inżynierii oprogramowania do projektowania, dokumentowania i analizowania systemów. Diagramy: UML oferuje różne typy diagramów, takie jak: Diagramy klas: Przedstawiają struktury obiektów w systemie. Diagramy przypadków użycia: Pokazują interakcje między użytkownikami a systemem. Diagramy sekwencji: Ilustrują kolejność komunikatów między obiektami.",
        "correct": false
      }
    ]
  },
  {
    "question": "Zmienne automatyczne a dynamiczne – różnice i wpływ na pamięć",
    "answers": [
      {
        "text": "Aby aplikacja była zgodna z nowoczesnymi trendami UX/UI: Dark Mode: Implementacja trybu ciemnego zgodnie z wytycznymi systemów operacyjnych (np. iOS i Android). Użycie systemowych trybów zmiany motywów (np. UIUserInterfaceStyle w iOS) pozwala na łatwą implementację, która będzie zmieniać wygląd aplikacji w zależności od preferencji użytkownika. Gesty nawigacyjne: Integracja gestów takich jak przewijanie, przesuwanie, czy gesty dotykowe (np. Swipe, Tap, Pinch) do nawigacji, które poprawiają interakcję użytkownika. Należy również zadbać o ich spójność z systemem operacyjnym, aby uniknąć konfliktów z wbudowanymi gestami. Minimalistyczny design: Redukowanie elementów graficznych do niezbędnego minimum, co poprawia czytelność i nawigację. Zastosowanie dużych czcionek, prostych ikon oraz eliminacja zbędnych animacji zwiększa efektywność UX.",
        "correct": false
      },
      {
        "text": "Optymalizacja funkcji kosztu w AI – gradient descent używa pochodnych do minimalizacji błędów w sieciach neuronowych. Analiza szybkości zmian – różniczkowanie pomaga w dynamicznym sterowaniu systemami. Interpolacja i aproksymacja – całkowanie pozwala modelować złożone funkcje w analizie danych.",
        "correct": false
      },
      {
        "text": "Zmienne automatyczne są tworzone i usuwane w czasie działania funkcji, w której zostały zadeklarowane. Przechowywane są na stosie, co zapewnia szybki dostęp, ale mają ograniczony czas życia. Są automatycznie usuwane, gdy funkcja kończy działanie. Zmienne dynamiczne są tworzone na stercie (heap), co daje im możliwość dłuższego życia niż zmienne automatyczne. Muszą być zarządzane ręcznie lub przez system garbage collection (np. w Javie czy Pythonie). Zalety i wady: Zmienne automatyczne: Szybki dostęp, ale ograniczony czas życia i wielkość. Zmienne dynamiczne: Większa elastyczność, ale wymagają zarządzania pamięcią, co może prowadzić do wycieków pamięci.",
        "correct": true
      },
      {
        "text": "Szyfrowanie danych: Użycie szyfrowania zarówno na poziomie aplikacji (AES), jak i podczas przesyłania danych (SSL/TLS). Ochrona przed atakami Man-in-the-Middle: Użycie certyfikatów SSL/TLS do zabezpieczenia komunikacji między aplikacją a serwerem. Wykrywanie malware: Implementacja narzędzi do wykrywania złośliwego oprogramowania, jak również technik antypirackich. Bezpieczne przechowywanie danych: Unikanie przechowywania wrażliwych informacji w pamięci urządzenia, zamiast tego używanie bezpiecznych magazynów danych, takich jak Keychain (iOS) lub Keystore (Android).",
        "correct": false
      }
    ]
  },
  {
    "question": "Interfejs vs implementacja klasy – zalety interfejsów",
    "answers": [
      {
        "text": "Zasady budowy interfejsów użytkownika obejmują tworzenie intuicyjnych, efektywnych i przyjaznych dla użytkownika UI. Dobre UI powinno być spójne, czytelne i dostosowane do potrzeb użytkownika. Zasady: Zrozumiałość: Prosty i logiczny układ elementów. Responsywność: Interfejs dostosowuje się do różnych urządzeń. Intuicyjność: Użytkownik łatwo rozumie, jak korzystać z systemu.",
        "correct": false
      },
      {
        "text": "W programowaniu obiektowym, interfejs to kontrakt, który definiuje zestaw metod, które muszą zostać zaimplementowane przez klasy go implementujące. Interfejsy nie zawierają implementacji metod, jedynie ich deklaracje. Implementacja klasy to z kolei rzeczywista definicja metod i zmiennych w klasie. Klasa implementuje interfejs, ale może zawierać także dodatkową funkcjonalność, która nie została określona w interfejsie. Zalety interfejsów: Zwiększają elastyczność i umożliwiają wielokrotne dziedziczenie metod w językach, które tego nie wspierają (np. Java). Ułatwiają tworzenie testowalnych i łatwych do utrzymania systemów, ponieważ można je wymieniać, nie zmieniając implementacji.",
        "correct": true
      },
      {
        "text": "Data Binding w WPF to mechanizm, który pozwala na synchronizację danych między modelem danych a interfejsem użytkownika. Główna idea polega na tym, że zmiany w danych modelu automatycznie odzwierciedlają się w interfejsie, a zmiany w interfejsie mogą być przekazywane do modelu. Przykład w XAML i C#: <TextBox Text=\"{Binding Name}\" /> W tym przypadku Text w kontrolce TextBox jest powiązany z właściwością Name w modelu danych. Zmiana w Name zaktualizuje tekst w polu.",
        "correct": false
      },
      {
        "text": "Etapy inżynierii oprogramowania: Analiza wymagań: Zbieranie i analizowanie wymagań systemu. Artefakty: Dokument wymagań, analiza interesariuszy, przypadki użycia. Projektowanie systemu: Tworzenie ogólnej architektury i szczegółowego projektu systemu. Artefakty: Diagramy UML, dokumentacja architektury, prototypy interfejsu użytkownika. Implementacja: Programowanie systemu zgodnie z zaprojektowaną architekturą. Artefakty: Kod źródłowy, dokumentacja kodu, testy jednostkowe. Testowanie: Weryfikacja i walidacja systemu pod kątem błędów i spełnienia wymagań. Artefakty: Raporty z testów, plany testów, dokumentacja błędów. Utrzymanie: Dbanie o system po wdrożeniu, usuwanie błędów i wdrażanie nowych funkcjonalności. Artefakty: Zgłoszenia błędów, poprawki do kodu, dokumentacja aktualizacji.",
        "correct": false
      }
    ]
  },
  {
    "question": "Dziedziczenie klas – techniki i zalety",
    "answers": [
      {
        "text": "Polimorfizm to cecha programowania obiektowego, która pozwala na wykorzystanie tej samej metody w różnych klasach. Pozwala to na elastyczność i ponowne użycie kodu. Przykład w Java: class Zwierze { void dzwiek() { System.out.println(\"Dźwięk zwierzęcia\"); } } class Kot extends Zwierze { void dzwiek() { System.out.println(\"Miau\"); } } Polimorfizm pozwala na to, by obiekt Kot zachowywał się zgodnie z własną implementacją metody dzwiek(), nawet jeśli jego typ to Zwierze.",
        "correct": false
      },
      {
        "text": "Silne hasła – unikanie prostych kombinacji, używanie menedżerów haseł. Aktualizacje oprogramowania – usuwanie luk w zabezpieczeniach. Zasada najmniejszych uprawnień – użytkownicy powinni mieć tylko niezbędne uprawnienia. Kopia zapasowa (backup) – ochrona przed awariami i ransomware. Unikanie publicznych sieci Wi-Fi – korzystanie z VPN w przypadku łączenia się w niezaufanych sieciach. Edukacja użytkowników – szkolenia z cyberbezpieczeństwa.",
        "correct": false
      },
      {
        "text": "Tworzenie nowych klas poprzez dziedziczenie z istniejących klas pozwala na reużywanie kodu, co upraszcza organizację programu. Dziedziczenie wspomaga tworzenie hierarchii klas, w których klasy dziedziczą właściwości i metody innych klas. Techniki: Dziedziczenie pojedyncze: Klasa pochodna dziedziczy po jednej klasie bazowej. Dziedziczenie wielokrotne (w językach wspierających): Klasa pochodna dziedziczy po wielu klasach. Zalety: Redukcja powtarzalności kodu. Ułatwienie rozwoju programu przez dodawanie nowych funkcji bez zmiany istniejącego kodu.",
        "correct": true
      },
      {
        "text": "System zarządzania bazą danych (DBMS) pełni kluczową rolę w przechowywaniu, zarządzaniu i przetwarzaniu danych. Jego główne funkcje to: Przechowywanie danych: DBMS przechowuje dane w sposób uporządkowany, zapewniając łatwy dostęp. Zarządzanie dostępem: Kontroluje, kto ma dostęp do danych i w jakim zakresie (autentykacja, autoryzacja). Manipulacja danymi: Umożliwia dodawanie, modyfikowanie, usuwanie i wyszukiwanie danych. Bezpieczeństwo: Szyfrowanie, tworzenie kopii zapasowych, odzyskiwanie danych. Zarządzanie transakcjami: Obsługuje mechanizmy transakcyjne zapewniające integralność danych. Indeksowanie: Zoptymalizowane mechanizmy wyszukiwania danych.",
        "correct": false
      }
    ]
  },
  {
    "question": "Przykłady programów do symulacji komputerowej",
    "answers": [
      {
        "text": "Rejestr w Windows to baza danych przechowująca ustawienia systemu i aplikacji. 🔹 Główne gałęzie rejestru: HKEY_CLASSES_ROOT – informacje o typach plików i rozszerzeniach. HKEY_CURRENT_USER – ustawienia użytkownika. HKEY_LOCAL_MACHINE – globalne ustawienia systemu. HKEY_USERS – profile użytkowników. HKEY_CURRENT_CONFIG – informacje o aktualnej konfiguracji sprzętowej.",
        "correct": false
      },
      {
        "text": "W aplikacjach mobilnych zarządzanie pamięcią jest kluczowym elementem optymalizacji, ponieważ urządzenia mobilne mają ograniczone zasoby. Główne metody zarządzania pamięcią to: Garbage Collection (GC): Systemy operacyjne, takie jak Android i iOS, automatycznie zarządzają pamięcią za pomocą GC, który usuwa nieużywane obiekty z pamięci. Programista nie musi manualnie zwalniać pamięci, ale musi zadbać o unikanie wycieków pamięci. Zarządzanie zasobami: Programiści muszą dbać o poprawne zwalnianie zasobów, takich jak obrazy, pliki wideo czy połączenia sieciowe, aby uniknąć wycieków pamięci. Zarządzanie pamięcią podręczną: Używanie pamięci podręcznej do przechowywania danych, takich jak obrazy czy dane z sieci, aby zmniejszyć liczbę operacji I/O i zaoszczędzić pamięć. Ograniczanie liczby obiektów: Optymalizacja alokacji pamięci poprzez minimalizowanie liczby tworzonych obiektów i dbanie o ich ponowne użycie.",
        "correct": false
      },
      {
        "text": "MATLAB/Simulink: Zastosowanie: Używany w inżynierii do modelowania, symulacji i analizy systemów dynamicznych. Główne cechy: Obsługuje matematyczne i statystyczne obliczenia, oferuje szeroki zestaw bibliotek do różnych dziedzin. ANSYS: Zastosowanie: Symulacja i analiza inżynierska, szczególnie w zakresie mechaniki ciał stałych, przepływów i innych. Główne cechy: Silne narzędzia do analizy strukturalnej, cieplnej, elektromagnetycznej.",
        "correct": true
      },
      {
        "text": "Wyzwania: Fragmentacja urządzeń: Różne wersje systemów operacyjnych, urządzenia o różnych rozdzielczościach ekranów, procesorach, pojemności pamięci itp. mogą prowadzić do problemów z kompatybilnością aplikacji. Różnice w interfejsie użytkownika: Systemy operacyjne mogą mieć różne wytyczne dotyczące interfejsu użytkownika, co wymaga dostosowania aplikacji do specyficznych wymagań platformy. Jak radzić sobie z wyzwaniami: Testowanie na różnych urządzeniach: Regularne testowanie aplikacji na różnych wersjach systemów operacyjnych i urządzeniach za pomocą emulatorów oraz rzeczywistych urządzeń. Używanie narzędzi takich jak Firebase czy TestFlight (iOS) oraz Android Emulator: Pomagają w testowaniu aplikacji na różnych wersjach systemów operacyjnych. Responsywny design: Użycie rozwiązań responsywnych, które umożliwiają dostosowanie UI do różnych rozdzielczości ekranów. Wersjonowanie kodu: Korzystanie z narzędzi do wersjonowania kodu oraz wtyczek umożliwiających wsparcie dla starszych wersji systemów operacyjnych.",
        "correct": false
      }
    ]
  },
  {
    "question": "Niepewności w modelach matematycznych (Scilab/Matlab)",
    "answers": [
      {
        "text": "Wątek to podstawowa jednostka wykonawcza w systemie operacyjnym. Jest częścią procesu, ale ma własny licznik rozkazów i stos. Wątki pozwalają na równoległe wykonywanie zadań, np. odtwarzanie muzyki i przeglądanie internetu jednocześnie. Zalety wielowątkowości: poprawa wydajności, efektywne wykorzystanie procesora, szybsza reakcja aplikacji. Problemy: synchronizacja wątków (np. dostęp do tych samych zasobów).",
        "correct": false
      },
      {
        "text": "Etapy inżynierii oprogramowania: Analiza wymagań: Zbieranie i analizowanie wymagań systemu. Artefakty: Dokument wymagań, analiza interesariuszy, przypadki użycia. Projektowanie systemu: Tworzenie ogólnej architektury i szczegółowego projektu systemu. Artefakty: Diagramy UML, dokumentacja architektury, prototypy interfejsu użytkownika. Implementacja: Programowanie systemu zgodnie z zaprojektowaną architekturą. Artefakty: Kod źródłowy, dokumentacja kodu, testy jednostkowe. Testowanie: Weryfikacja i walidacja systemu pod kątem błędów i spełnienia wymagań. Artefakty: Raporty z testów, plany testów, dokumentacja błędów. Utrzymanie: Dbanie o system po wdrożeniu, usuwanie błędów i wdrażanie nowych funkcjonalności. Artefakty: Zgłoszenia błędów, poprawki do kodu, dokumentacja aktualizacji.",
        "correct": false
      },
      {
        "text": "SOLID to zestaw zasad ułatwiających tworzenie czytelnego i elastycznego kodu: S (Single Responsibility Principle) – Każda klasa powinna mieć tylko jedną odpowiedzialność. O (Open/Closed Principle) – Klasy powinny być otwarte na rozszerzenia, ale zamknięte na modyfikacje. L (Liskov Substitution Principle) – Obiekty klas pochodnych powinny być wymienne z obiektami klas bazowych. I (Interface Segregation Principle) – Interfejsy powinny być dopasowane do potrzeb klas. D (Dependency Inversion Principle) – Zależności powinny być skierowane na abstrakcje, a nie konkretne klasy.",
        "correct": false
      },
      {
        "text": "Model tworzony w narzędziach takich jak Scilab czy Matlab jest tylko przybliżeniem rzeczywistości. Zawsze występują pewne niepewności, np. w parametrach modelu (np. współczynniki oporu w modelu aerodynamicznym) lub warunkach brzegowych (np. zmienne temperatury w modelu cieplnym). Te niepewności mogą wpływać na dokładność wyników i ich wiarygodność, dlatego często stosuje się analizę wrażliwości, aby zrozumieć, jak zmiany w danych wejściowych wpływają na wyniki. Przykład: Modelowanie przepływu powietrza w turbinie wiatrowej może być obarczone niepewnością w określaniu prędkości wiatru, co wpływa na dokładność prognozowanej energii.",
        "correct": true
      }
    ]
  },
  {
    "question": "Zarządzanie pamięcią w Pythonie",
    "answers": [
      {
        "text": "Metodyki zwinne (Agile): Iteracyjne i przyrostowe podejście: Praca w krótkich iteracjach, dostarczanie działających wersji oprogramowania. Elastyczność i adaptacja: Łatwość w adaptacji do zmieniających się wymagań. Współpraca z klientem: Bliska współpraca z interesariuszami w celu lepszego zrozumienia ich potrzeb. Skupienie na wartości biznesowej: Priorytetem jest dostarczenie wartościowych funkcji. Rozwiązywane problemy: Szybka reakcja na zmiany w wymaganiach. Zwiększenie transparentności procesu tworzenia oprogramowania. Ułatwienie dostosowywania oprogramowania do rzeczywistych potrzeb użytkowników.",
        "correct": false
      },
      {
        "text": "Python zarządza pamięcią za pomocą automatycznego zarządzania pamięcią i garbage collection. Zmienna w Pythonie nie jest przypisana do konkretnego miejsca w pamięci, a obiekt, który jej odpowiada, jest przechowywany w dynamicznie alokowanej pamięci (sterta). Mechanizmy: Garbage collection: Python automatycznie zwalnia pamięć, gdy obiekt nie jest już używany. Referencje: Liczba referencji do obiektów jest monitorowana, a obiekt zostaje usunięty, gdy nie ma do niego żadnej referencji.",
        "correct": true
      },
      {
        "text": "Systemy rekomendacyjne i analiza danych opierają się na modelach probabilistycznych i metodach statystycznych, aby przewidywać preferencje użytkowników oraz analizować wzorce w danych. Systemy rekomendacyjne: Filtracja kolaboratywna – analiza podobieństw między użytkownikami (np. system Netflix przewiduje filmy na podstawie ocen innych użytkowników o podobnych gustach). Modele Bayesowskie – prognozowanie na podstawie prawdopodobieństwa (np. filtry antyspamowe analizujące treść e-maili). Analiza danych: Regresja liniowa i wieloraka – wykorzystywane do przewidywania trendów na podstawie wcześniejszych danych (np. prognozy sprzedaży). Analiza wariancji (ANOVA) – stosowana do porównywania różnych grup danych (np. testowanie skuteczności reklam w różnych regionach).",
        "correct": false
      },
      {
        "text": "Modele relacyjne: Bazują na tabelach, gdzie dane są przechowywane w wierszach i kolumnach. Relacyjne bazy danych, jak MySQL, PostgreSQL, SQL Server, używają języka SQL do zarządzania danymi. Zalety: Struktura danych jest bardzo uporządkowana i spójna. Zastosowanie kluczy głównych i obcych zapewnia integralność danych. Obsługują transakcje ACID (Atomicity, Consistency, Isolation, Durability). Wady: Skalowalność może być problemem w przypadku dużych zbiorów danych. Modele relacyjne mogą być mniej elastyczne w przypadku nieustrukturalizowanych danych. Modele nierelacyjne (NoSQL): Bazy danych, które nie stosują tabeli i wierszy. Zamiast tego mogą używać różnych formatów przechowywania danych, takich jak dokumenty, klucze-wartości, grafy czy kolumny. Zalety: Lepsza skalowalność pozioma. Elastyczność w przechowywaniu danych niestrukturalnych. Wydajność w obsłudze dużych ilości danych w czasie rzeczywistym. Wady: Brak jednolitej struktury może prowadzić do problemów z integralnością danych. Brak standardowego języka zapytań.",
        "correct": false
      }
    ]
  },
  {
    "question": "Wiązanie danych (Data Binding) w WPF",
    "answers": [
      {
        "text": "Data Binding w WPF to mechanizm, który pozwala na synchronizację danych między modelem danych a interfejsem użytkownika. Główna idea polega na tym, że zmiany w danych modelu automatycznie odzwierciedlają się w interfejsie, a zmiany w interfejsie mogą być przekazywane do modelu. Przykład w XAML i C#: <TextBox Text=\"{Binding Name}\" /> W tym przypadku Text w kontrolce TextBox jest powiązany z właściwością Name w modelu danych. Zmiana w Name zaktualizuje tekst w polu.",
        "correct": true
      },
      {
        "text": "Język zapytań do baz danych (SQL) to język służący do komunikacji z bazami danych, umożliwiający wykonywanie operacji na danych. Składniki: DML (Data Manipulation Language): Służy do manipulacji danymi (np. SELECT, INSERT, UPDATE, DELETE). DDL (Data Definition Language): Służy do definiowania struktury bazy danych (np. CREATE, ALTER, DROP). DCL (Data Control Language): Służy do kontrolowania dostępu do danych (np. GRANT, REVOKE). TCL (Transaction Control Language): Zarządza transakcjami (np. COMMIT, ROLLBACK). Przeznaczenie: SQL jest używany do zarządzania bazami danych, pobierania, modyfikowania, dodawania i usuwania danych.",
        "correct": false
      },
      {
        "text": "UIKit: Tradycyjny framework UI używany w iOS. Wymaga ręcznego zarządzania hierarchią widoków i kontrolerów. Bardziej rozbudowany i elastyczny, ale ma wyższą krzywą uczenia się. SwiftUI: Nowoczesny framework oparty na deklaratywnym podejściu do tworzenia UI. Umożliwia łatwiejsze tworzenie UI poprzez deklarację stanu aplikacji i jego aktualizację. Lepsza integracja z nowymi funkcjami systemu iOS, takich jak Dark Mode i Accessibility. Korzyści i wyzwania: UIKit: Jest bardziej dojrzały, szeroko wspierany i elastyczny, ale wymaga więcej kodu do zarządzania widokami. SwiftUI: Uproszczony kod, lepsze wsparcie dla dynamicznych interfejsów, ale może mieć ograniczenia w starszych wersjach iOS (przynajmniej na początku). Preferencje: SwiftUI może być preferowany w nowych projektach, natomiast UIKit pozostaje preferowaną opcją w starszych aplikacjach, gdzie konieczne jest utrzymanie kompatybilności wstecznej.",
        "correct": false
      },
      {
        "text": "Wirtualizacja to technika, która pozwala uruchamiać wiele systemów operacyjnych na jednym fizycznym komputerze. ✅ Korzyści: Efektywne wykorzystanie sprzętu. Możliwość testowania różnych systemów operacyjnych. Łatwe skalowanie infrastruktury IT. Przykłady narzędzi: VMware, VirtualBox, Hyper-V.",
        "correct": false
      }
    ]
  },
  {
    "question": "WPF i XAML w aplikacjach C#",
    "answers": [
      {
        "text": "Mechanizmy zapewniające bezpieczeństwo: Autoryzacja i uwierzytelnianie: Stosowanie systemów autoryzacji (np. Role-Based Access Control - RBAC) i szyfrowania danych. Szyfrowanie: Używanie szyfrowania danych w spoczynku (np. AES) oraz szyfrowanie komunikacji z bazą danych (SSL/TLS). Audit log: Rejestrowanie operacji na bazie danych w celu monitorowania i wykrywania podejrzanych działań. Kontrola dostępu: Stosowanie uprawnień na poziomie tabel, rekordów oraz operacji (np. SELECT, INSERT). Mechanizmy niezawodności: Transakcje ACID: Zapewnienie integralności danych za pomocą transakcji, które gwarantują atomowość, spójność, izolację i trwałość. Replikacja: Duplikowanie danych na różnych serwerach w celu zapewnienia dostępności w przypadku awarii. Backup i odzyskiwanie: Regularne wykonywanie kopii zapasowych bazy danych oraz testowanie procesu odzyskiwania danych.",
        "correct": false
      },
      {
        "text": "Wzorce projektowe to sprawdzone, powtarzalne rozwiązania dla najczęstszych problemów projektowych w inżynierii oprogramowania. Pomagają w tworzeniu elastycznych, skalowalnych i łatwych do utrzymania systemów. Rodzaje wzorców: Creational (tworzeniowe): Wzorce służące do tworzenia obiektów, np. Factory Method. Structural (strukturalne): Wzorce organizujące klasy i obiekty, np. Adapter. Behavioral (behawioralne): Wzorce definiujące komunikację między obiektami, np. Observer.",
        "correct": false
      },
      {
        "text": "WPF (Windows Presentation Foundation) wykorzystuje XAML (Extensible Application Markup Language) do definiowania interfejsu użytkownika. XAML to deklaratywny język znaczników, który pozwala na opisanie struktury UI w sposób wizualny. Przykład: <Button Content=\"Kliknij mnie\" Click=\"OnButtonClick\"/> Tutaj definiujemy przycisk w XAML, a jego logikę obsługujemy w C# w metodzie OnButtonClick.",
        "correct": true
      },
      {
        "text": "Programy komputerowe są chronione jako utwory literackie w ramach prawa autorskiego. Oznacza to, że autorzy mają wyłączne prawa do kopi owania, modyfikowania i dystrybucji kodu.\nTypy licencji oprogramowania: Proprietary (zamknięte) – np. Windows, Photoshop – użytkownik może korzystać, ale nie ma dostępu do kodu źródłowego. Open Source (otwarte) – np. Linux, Firefox – kod jest dostępny dla wszystkich, ale licencje określają warunki użytkowania (np. GPL, MIT). Freeware, Shareware, Trial – darmowe lub czasowo ograniczone wersje programów.\nKonsekwencje naruszeń: Mogą obejmować kary finansowe, odpowiedzialność cywilną i karną oraz wykluczenie z rynku.",
        "correct": false
      }
    ]
  },
  {
    "question": "Budowa interfejsów użytkownika systemów informatycznych",
    "answers": [
      {
        "text": "Optymalizacja funkcji kosztu w AI – gradient descent używa pochodnych do minimalizacji błędów w sieciach neuronowych. Analiza szybkości zmian – różniczkowanie pomaga w dynamicznym sterowaniu systemami. Interpolacja i aproksymacja – całkowanie pozwala modelować złożone funkcje w analizie danych.",
        "correct": false
      },
      {
        "text": "Aby aplikacja była przyjazna dla starszych użytkowników: Duża czcionka i kontrast: Zapewnienie dużych i czytelnych czcionek oraz wysokiego kontrastu, by poprawić czytelność. Prosty, intuicyjny interfejs: Stosowanie prostych i zrozumiałych interakcji, unikanie nadmiernej liczby opcji na ekranie. Pomocne może być użycie jednego ekranu głównego z wyraźnymi przyciskami do podstawowych funkcji. Zwiększona responsywność dotyku: Ułatwienie obsługi aplikacji osobom z ograniczoną sprawnością motoryczną poprzez większe przyciski i obszary dotykowe. Integracja z funkcjami systemowymi: Wykorzystanie funkcji systemowych takich jak Zoom, VoiceOver (iOS) czy TalkBack (Android) do poprawy dostępności aplikacji. Instrukcje i wsparcie: Proste, zrozumiałe komunikaty i dostępność samouczków lub wsparcia na każdym etapie korzystania z aplikacji.",
        "correct": false
      },
      {
        "text": "Wirtualizacja to technika, która pozwala uruchamiać wiele systemów operacyjnych na jednym fizycznym komputerze. ✅ Korzyści: Efektywne wykorzystanie sprzętu. Możliwość testowania różnych systemów operacyjnych. Łatwe skalowanie infrastruktury IT. Przykłady narzędzi: VMware, VirtualBox, Hyper-V.",
        "correct": false
      },
      {
        "text": "Zasady budowy interfejsów użytkownika obejmują tworzenie intuicyjnych, efektywnych i przyjaznych dla użytkownika UI. Dobre UI powinno być spójne, czytelne i dostosowane do potrzeb użytkownika. Zasady: Zrozumiałość: Prosty i logiczny układ elementów. Responsywność: Interfejs dostosowuje się do różnych urządzeń. Intuicyjność: Użytkownik łatwo rozumie, jak korzystać z systemu.",
        "correct": true
      }
    ]
  },
  {
    "question": "Proces normalizacji baz danych i jej trzy postaci",
    "answers": [
      {
        "text": "Normalizacja to proces organizowania danych w bazach danych w celu eliminacji redundancji i zapewnienia integralności danych. Głównym celem normalizacji jest zmniejszenie duplikacji danych, co poprawia efektywność przechowywania i aktualizowania informacji. Pierwsza postać normalna (1NF): Zakłada, że każda kolumna w tabeli zawiera tylko pojedyncze wartości (atomowe) oraz, że wszystkie rekordy są unikalne. Dodatkowo, wszystkie atrybuty muszą być jednorodne, tzn. zawierać dane tego samego typu. Przykład (1NF): Przed normalizacją: ID | Imię | Zajęcia 1  | Jan  | Matematyka, Fizyka 2  | Anna | Historia Po normalizacji do 1NF: ID | Imię | Zajęcia 1  | Jan  | Matematyka 1  | Jan  | Fizyka 2  | Anna | Historia Druga postać normalna (2NF): Wymaga, aby spełniona była 1NF, a także, aby każda kolumna była zależna od całkowitej klucza głównego, a nie tylko od jego części. Przykład (2NF): Przed normalizacją: ID | Nazwa kursu  | Imię nauczyciela | Zajęcia 1  | Matematyka   | Jan Kowalski     | Fizyka 1  | Fizyka       | Anna Nowak       | Matematyka Po normalizacji do 2NF: Tabela 1 (Kursy): ID | Nazwa kursu 1              | Matematyka 2              | Fizyka Tabela 2 (Nauczyciele): Kurs_ID | Nauczyciel 1         | Jan Kowalski 2         | Anna Nowak Trzecia postać normalna (3NF): Wymaga, aby spełniona była 2NF, a także aby każda kolumna niekluczowa była zależna bezpośrednio od klucza głównego i nie miała zależności przechodnich (tzn. nie może być zależna od innych kolumn, które nie są kluczem głównym). Przykład (3NF): Przed normalizacją: ID | Imię | Miasto    | Kod pocztowy 1  | Jan  | Warszawa  | 00-000 2  | Anna | Kraków    | 30-000 Po normalizacji do 3NF: Tabela 1 (Osoby): ID | Imię | Miasto_ID 1                 | Jan  | 1 2                 | Anna | 2 Tabela 2 (Miasta): Miasto_ID | Miasto     | Kod pocztowy 1              | Warszawa  | 00-000 2              | Kraków    | 30-000",
        "correct": true
      },
      {
        "text": "Heurystyki Nielsena to 10 zasad UX, pomagające w projektowaniu intuicyjnych interfejsów. Przykład: \"Zapewnij informację o stanie systemu\" Użytkownik powinien zawsze wiedzieć, co się dzieje (np. pasek ładowania, komunikaty błędów). Przykład: Gmail informuje o wysyłaniu wiadomości („Wiadomość została wysłana”).",
        "correct": false
      },
      {
        "text": "Optymalizacja funkcji kosztu w AI – gradient descent używa pochodnych do minimalizacji błędów w sieciach neuronowych. Analiza szybkości zmian – różniczkowanie pomaga w dynamicznym sterowaniu systemami. Interpolacja i aproksymacja – całkowanie pozwala modelować złożone funkcje w analizie danych.",
        "correct": false
      },
      {
        "text": "Upstream branch w systemie kontroli wersji Git to gałąź, która jest połączona z zdalnym repozytorium, na przykład z serwerem GitHub. Aby skonfigurować upstream branch, używamy komendy: git push --set-upstream origin nazwa_gałęzi Można również nadać inną nazwę gałęzi w repozytorium zdalnym: git push --set-upstream origin lokalna_gałąź:inna_nazwa_zdalna To zapewnia, że gałąź w repozytorium lokalnym jest powiązana z odpowiednią gałęzią zdalną.",
        "correct": false
      }
    ]
  },
  {
    "question": "Notacja BPMN i wyzwania w implementacji",
    "answers": [
      {
        "text": "Podejście algorytmiczne – ścisłe reguły, gwarantuje optymalne rozwiązanie (np. Dijkstra do wyznaczania najkrótszej ścieżki). Podejście heurystyczne – przybliżone rozwiązania, szybsze, ale nie zawsze optymalne (np. algorytm mrówkowy do problemu komiwojażera). Zastosowanie: Algorytmy – lepsze w zadaniach wymagających precyzji (np. szyfrowanie). Heurystyki – lepsze w problemach NP-trudnych, gdy optymalne rozwiązanie jest zbyt kosztowne (np. AI, optymalizacja grafiki).",
        "correct": false
      },
      {
        "text": "BPMN (Business Process Model and Notation) to standard notacji graficznej służący do modelowania procesów biznesowych. Dzięki BPMN można tworzyć zrozumiałe i spójne diagramy procesów, które pomagają w analizie, automatyzacji i optymalizacji działań organizacyjnych. Zastosowanie BPMN: Wizualizacja procesów: BPMN umożliwia tworzenie przejrzystych i zrozumiałych schematów procesów, co ułatwia zrozumienie skomplikowanych działań w organizacji. Komunikacja z interesariuszami: Umożliwia przekazywanie zrozumiałych informacji między zespołami biznesowymi i technicznymi. Optymalizacja: Pozwala na identyfikację wąskich gardeł, redundancji i innych problemów w procesach. Wyzwania: Złożoność procesów: Duża liczba elementów BPMN może sprawić, że diagramy staną się nieczytelne. Integracja z systemami IT: Implementacja procesów BPMN w systemach informatycznych może wymagać zaawansowanych narzędzi do automatyzacji procesów. Szkolenie zespołów: Użycie BPMN wymaga pewnego poziomu wiedzy i doświadczenia, co może stanowić wyzwanie w organizacjach bez odpowiedniego przeszkolenia.",
        "correct": true
      },
      {
        "text": "Firewalle filtrują ruch sieciowy na podstawie reguł (np. IP, porty, protokoły). Mogą być sprzętowe lub programowe.\nOgraniczenia: Nie chronią przed atakami wewnętrznymi. Nie zabezpieczają przed phishingiem. Mogą blokować legalne usługi przy błędnej konfiguracji.",
        "correct": false
      },
      {
        "text": "Podejście Mobile First oznacza projektowanie aplikacji/webów najpierw pod urządzenia mobilne, a potem dostosowywanie do większych ekranów. Jest to ważne, bo: Większość użytkowników korzysta z internetu na smartfonach. Wpływa na SEO – Google promuje strony przyjazne mobilnie. Poprawia UX, bo eliminuje zbędne elementy i optymalizuje działanie na mniejszych ekranach.",
        "correct": false
      }
    ]
  },
  {
    "question": "Modele relacyjne vs. nierelacyjne bazy danych",
    "answers": [
      {
        "text": "Testy jednostkowe (Unit tests): Testowanie poszczególnych funkcji i metod aplikacji w celu sprawdzenia, czy działają one zgodnie z oczekiwaniami. Testy integracyjne (Integration tests): Testowanie interakcji pomiędzy różnymi modułami lub komponentami aplikacji. Testy funkcjonalne (Functional tests): Sprawdzanie, czy aplikacja działa zgodnie z wymaganiami i specyfikacjami. Testy UI (User Interface tests): Testowanie interakcji użytkownika z aplikacją, sprawdzanie, czy elementy UI są odpowiednio rozmieszczone i czy są intuicyjne. Testy wydajnościowe (Performance tests): Mierzenie szybkości działania aplikacji, jej odpowiedzi na różne operacje, np. ładowanie danych. Testy bezpieczeństwa (Security tests): Sprawdzanie, czy aplikacja jest odporna na ataki i zapewnia bezpieczeństwo danych użytkownika.",
        "correct": false
      },
      {
        "text": "Waterfall – sztywna struktura, każda faza projektu (analiza, projektowanie, implementacja, testowanie) jest wykonywana po kolei. Dobra dla dużych projektów z jasno określonymi wymaganiami. Agile (Scrum, Kanban) – elastyczne podejście, iteracyjne, szybkie dostosowywanie do zmian. Scrum wykorzystuje sprinty, a Kanban pozwala na ciągły przepływ zadań.\nKiedy stosować? Waterfall – projekty rządowe, medyczne, gdzie wymagania są stałe. Agile – dynamiczne projekty IT, startupy, aplikacje webowe.",
        "correct": false
      },
      {
        "text": "Rejestr w Windows to baza danych przechowująca ustawienia systemu i aplikacji. 🔹 Główne gałęzie rejestru: HKEY_CLASSES_ROOT – informacje o typach plików i rozszerzeniach. HKEY_CURRENT_USER – ustawienia użytkownika. HKEY_LOCAL_MACHINE – globalne ustawienia systemu. HKEY_USERS – profile użytkowników. HKEY_CURRENT_CONFIG – informacje o aktualnej konfiguracji sprzętowej.",
        "correct": false
      },
      {
        "text": "Modele relacyjne: Bazują na tabelach, gdzie dane są przechowywane w wierszach i kolumnach. Relacyjne bazy danych, jak MySQL, PostgreSQL, SQL Server, używają języka SQL do zarządzania danymi. Zalety: Struktura danych jest bardzo uporządkowana i spójna. Zastosowanie kluczy głównych i obcych zapewnia integralność danych. Obsługują transakcje ACID (Atomicity, Consistency, Isolation, Durability). Wady: Skalowalność może być problemem w przypadku dużych zbiorów danych. Modele relacyjne mogą być mniej elastyczne w przypadku nieustrukturalizowanych danych. Modele nierelacyjne (NoSQL): Bazy danych, które nie stosują tabeli i wierszy. Zamiast tego mogą używać różnych formatów przechowywania danych, takich jak dokumenty, klucze-wartości, grafy czy kolumny. Zalety: Lepsza skalowalność pozioma. Elastyczność w przechowywaniu danych niestrukturalnych. Wydajność w obsłudze dużych ilości danych w czasie rzeczywistym. Wady: Brak jednolitej struktury może prowadzić do problemów z integralnością danych. Brak standardowego języka zapytań.",
        "correct": true
      }
    ]
  },
  {
    "question": "Definiowanie wzorców funkcji i klas (Generics)",
    "answers": [
      {
        "text": "Generics (wzorce szablonów) to technika umożliwiająca tworzenie funkcji i klas, które mogą działać na różnych typach danych bez potrzeby wielokrotnego definiowania tych samych funkcji. Generics zwiększają reużywalność i bezpieczeństwo kodu, ponieważ umożliwiają operowanie na typach w sposób ogólny i elastyczny. Przykład w Javie (Generics): class Para<T, U> { private T pierwszy; private U drugi; public Para(T pierwszy, U drugi) { this.pierwszy = pierwszy; this.drugi = drugi; } public T getPierwszy() { return pierwszy; } public U getDrugi() { return drugi; } } Tutaj Para<T, U> to klasa, która może przechowywać dwa obiekty różnych typów, np. Para<Integer, String>.",
        "correct": true
      },
      {
        "text": "Grafika rastrowa (np. JPEG, PNG): Składa się z pikseli. Traci jakość po powiększeniu. Nadaje się do zdjęć i realistycznych obrazów. Grafika wektorowa (np. SVG, AI): Składa się z figur geometrycznych. Można skalować bez utraty jakości. Idealna do logotypów i ikon.",
        "correct": false
      },
      {
        "text": "Wymagania funkcjonalne: Integracja z innymi systemami: Możliwość wymiany danych z systemami ERP, CRM, itp. Obsługa różnych formatów danych: Konwersja i przesyłanie danych między różnymi formatami. Wydajność: Szybka wymiana danych i integracja w czasie rzeczywistym. Wymagania niefunkcjonalne: Bezpieczeństwo: Silne mechanizmy szyfrowania, uwierzytelnianie użytkowników. Skalowalność: Możliwość rozbudowy systemu o dodatkowe moduły w przyszłości. Wydajność: Niski czas odpowiedzi, optymalizacja zapytań.",
        "correct": false
      },
      {
        "text": "MATLAB/Simulink: Zastosowanie: Używany w inżynierii do modelowania, symulacji i analizy systemów dynamicznych. Główne cechy: Obsługuje matematyczne i statystyczne obliczenia, oferuje szeroki zestaw bibliotek do różnych dziedzin. ANSYS: Zastosowanie: Symulacja i analiza inżynierska, szczególnie w zakresie mechaniki ciał stałych, przepływów i innych. Główne cechy: Silne narzędzia do analizy strukturalnej, cieplnej, elektromagnetycznej.",
        "correct": false
      }
    ]
  },
  {
    "question": "Zunifikowany język modelowania systemów informatycznych (UML)",
    "answers": [
      {
        "text": "UML (Unified Modeling Language) to język służący do tworzenia modeli systemów informatycznych, umożliwiający ich graficzne przedstawienie i zrozumienie. Główne cechy: Zastosowanie: UML jest szeroko stosowany w inżynierii oprogramowania do projektowania, dokumentowania i analizowania systemów. Diagramy: UML oferuje różne typy diagramów, takie jak: Diagramy klas: Przedstawiają struktury obiektów w systemie. Diagramy przypadków użycia: Pokazują interakcje między użytkownikami a systemem. Diagramy sekwencji: Ilustrują kolejność komunikatów między obiektami.",
        "correct": true
      },
      {
        "text": "Generics (wzorce szablonów) to technika umożliwiająca tworzenie funkcji i klas, które mogą działać na różnych typach danych bez potrzeby wielokrotnego definiowania tych samych funkcji. Generics zwiększają reużywalność i bezpieczeństwo kodu, ponieważ umożliwiają operowanie na typach w sposób ogólny i elastyczny. Przykład w Javie (Generics): class Para<T, U> { private T pierwszy; private U drugi; public Para(T pierwszy, U drugi) { this.pierwszy = pierwszy; this.drugi = drugi; } public T getPierwszy() { return pierwszy; } public U getDrugi() { return drugi; } } Tutaj Para<T, U> to klasa, która może przechowywać dwa obiekty różnych typów, np. Para<Integer, String>.",
        "correct": false
      },
      {
        "text": "Badania użytkowników – analiza potrzeb, np. wywiady, ankiety. Tworzenie person i scenariuszy – definiowanie grup docelowych. Wireframing i prototypowanie – szkice i interaktywne modele UI. Testy użyteczności – weryfikacja projektu na użytkownikach. Iteracyjne poprawki – dostosowanie UX na podstawie testów.",
        "correct": false
      },
      {
        "text": "Zbieranie danych – określenie jakości i źródła danych (np. dane medyczne, obrazy). Przetwarzanie danych – czyszczenie i normalizacja, np. usuwanie duplikatów. Wybór modelu – regresja, SVM, sieci neuronowe w zależności od problemu. Trenowanie modelu – dostosowanie wag na podstawie zbioru treningowego. Ewaluacja modelu – sprawdzanie jakości na zbiorze testowym. Optymalizacja hiperparametrów – poprawianie wydajności (np. tuning learning rate).",
        "correct": false
      }
    ]
  },
  {
    "question": "Abstrakcja i jej znaczenie dla wielokrotnego użycia (Reuse)",
    "answers": [
      {
        "text": "Efekt lawinowy oznacza, że nawet minimalna zmiana w danych wejściowych (np. jednym bicie) powoduje znaczącą zmianę w wyniku szyfrowania. Jest kluczowy w algorytmach takich jak AES czy SHA-256, ponieważ zwiększa odporność na ataki.",
        "correct": false
      },
      {
        "text": "Testy jednostkowe: Używanie frameworków takich jak XCTest do testowania poszczególnych funkcji i metod aplikacji. Testy UI: Automatyzacja testów UI za pomocą narzędzi takich jak XCUITest do interakcji z interfejsem aplikacji. Mockowanie danych: Używanie mocków i stubów do symulacji danych, które aplikacja przetwarza. Continuous Integration (CI): Używanie narzędzi CI, takich jak Jenkins lub Bitrise, do automatyzacji testów podczas każdego commita w kodzie. Testy wydajnościowe: Używanie narzędzi takich jak Instruments w Xcode, które pozwala na śledzenie użycia CPU, pamięci, animacji i renderowania UI w aplikacji.",
        "correct": false
      },
      {
        "text": "Abstrakcja to proces ukrywania szczegółów implementacji i skupianie się na istotnych właściwościach obiektu lub systemu. Pozwala to na wielokrotne użycie komponentów i klas w różnych częściach systemu, bez konieczności ponownego pisania kodu. Znaczenie: Umożliwia tworzenie uniwersalnych rozwiązań, które mogą być wykorzystywane w różnych kontekstach. Ułatwia rozwój systemów przez oddzielanie logiki biznesowej od szczegółów implementacyjnych.",
        "correct": true
      },
      {
        "text": "Kontrola dostępu – użytkownicy mają różne poziomy uprawnień. Szyfrowanie danych – np. TLS w połączeniach do bazy. Backupy – ochrona przed utratą danych. Replikacja – zwiększenie niezawodności bazy. ACID – zasady zapewniające integralność danych.",
        "correct": false
      }
    ]
  },
  {
    "question": "Mechanizmy zapewniania bezpieczeństwa i niezawodności w bazach danych",
    "answers": [
      {
        "text": "Hypervisor to oprogramowanie zarządzające maszynami wirtualnymi. 🔹 Rodzaje hypervisorów: Typ 1 (bare-metal) – działa bezpośrednio na sprzęcie (np. VMware ESXi). Typ 2 (hostowane) – działa jako program w systemie operacyjnym (np. VirtualBox). ✅ Zalety wirtualizacji: izolacja systemów, optymalizacja zasobów, łatwe tworzenie kopii zapasowych.",
        "correct": false
      },
      {
        "text": "Modyfikatory dostępu kontrolują, który kod może uzyskać dostęp do członków klasy. W różnych językach (np. Java, C#) są stosowane modyfikatory takie jak: public – dostęp do członka klasy z każdej lokalizacji w kodzie. private – dostęp tylko wewnątrz klasy. protected – dostęp w obrębie klasy i klas dziedziczących. Przykład w Java: public class Osoba { private String imie; protected int wiek; }",
        "correct": false
      },
      {
        "text": "Podejście Mobile First oznacza projektowanie aplikacji/webów najpierw pod urządzenia mobilne, a potem dostosowywanie do większych ekranów. Jest to ważne, bo: Większość użytkowników korzysta z internetu na smartfonach. Wpływa na SEO – Google promuje strony przyjazne mobilnie. Poprawia UX, bo eliminuje zbędne elementy i optymalizuje działanie na mniejszych ekranach.",
        "correct": false
      },
      {
        "text": "Bezpieczeństwo w systemach bazodanowych obejmuje: Autentykację i autoryzację: Określenie, kto ma dostęp do danych i jaką rolę pełni. Szyfrowanie: Chroni dane przechowywane w bazie przed nieautoryzowanym dostępem. Transakcje: Zapewniają integralność danych i ich spójność (ACID).",
        "correct": true
      }
    ]
  },
  {
    "question": "Wzorce projektowe – definicja i rola w projektowaniu",
    "answers": [
      {
        "text": "BPMN (Business Process Model and Notation) to standard notacji graficznej służący do modelowania procesów biznesowych. Dzięki BPMN można tworzyć zrozumiałe i spójne diagramy procesów, które pomagają w analizie, automatyzacji i optymalizacji działań organizacyjnych. Zastosowanie BPMN: Wizualizacja procesów: BPMN umożliwia tworzenie przejrzystych i zrozumiałych schematów procesów, co ułatwia zrozumienie skomplikowanych działań w organizacji. Komunikacja z interesariuszami: Umożliwia przekazywanie zrozumiałych informacji między zespołami biznesowymi i technicznymi. Optymalizacja: Pozwala na identyfikację wąskich gardeł, redundancji i innych problemów w procesach. Wyzwania: Złożoność procesów: Duża liczba elementów BPMN może sprawić, że diagramy staną się nieczytelne. Integracja z systemami IT: Implementacja procesów BPMN w systemach informatycznych może wymagać zaawansowanych narzędzi do automatyzacji procesów. Szkolenie zespołów: Użycie BPMN wymaga pewnego poziomu wiedzy i doświadczenia, co może stanowić wyzwanie w organizacjach bez odpowiedniego przeszkolenia.",
        "correct": false
      },
      {
        "text": "Aplikacje natywne to programy stworzone specjalnie dla konkretnego systemu operacyjnego (np. Android, iOS), natomiast aplikacje internetowe działają w przeglądarce i nie wymagają instalacji. ✅ Zalety aplikacji natywnych: Lepsza wydajność i szybkość działania. Pełny dostęp do funkcji urządzenia (kamera, GPS, powiadomienia). Możliwość pracy offline. ❌ Wady aplikacji natywnych: Wyższy koszt i czas produkcji (osobne wersje na Androida i iOS). Konieczność aktualizacji przez użytkownika. ✅ Zalety aplikacji internetowych: Działają na wszystkich urządzeniach z przeglądarką. Aktualizacje są natychmiastowe i nie wymagają instalacji. ❌ Wady aplikacji internetowych: Wolniejsze działanie w porównaniu do natywnych. Ograniczony dostęp do funkcji urządzenia. Wymagają stałego połączenia z internetem.",
        "correct": false
      },
      {
        "text": "Komputer komunikuje się z urządzeniami poprzez sterowniki oraz interfejsy (USB, PCI, Bluetooth).\nPrzykłady: Klawiatura i mysz (wejście) → przesyłanie sygnałów przez sterownik HID. Monitor (wyjście) → karta graficzna renderuje obraz. Drukarka (wyjście) → komputer wysyła dane w formacie obsługiwanym przez drukarkę (np. PCL, PostScript).",
        "correct": false
      },
      {
        "text": "Wzorce projektowe to sprawdzone, powtarzalne rozwiązania dla najczęstszych problemów projektowych w inżynierii oprogramowania. Pomagają w tworzeniu elastycznych, skalowalnych i łatwych do utrzymania systemów. Rodzaje wzorców: Creational (tworzeniowe): Wzorce służące do tworzenia obiektów, np. Factory Method. Structural (strukturalne): Wzorce organizujące klasy i obiekty, np. Adapter. Behavioral (behawioralne): Wzorce definiujące komunikację między obiektami, np. Observer.",
        "correct": true
      }
    ]
  },
  {
    "question": "Zasady SOLID w projektowaniu obiektowym",
    "answers": [
      {
        "text": "SOLID to zestaw zasad ułatwiających tworzenie czytelnego i elastycznego kodu: S (Single Responsibility Principle) – Każda klasa powinna mieć tylko jedną odpowiedzialność. O (Open/Closed Principle) – Klasy powinny być otwarte na rozszerzenia, ale zamknięte na modyfikacje. L (Liskov Substitution Principle) – Obiekty klas pochodnych powinny być wymienne z obiektami klas bazowych. I (Interface Segregation Principle) – Interfejsy powinny być dopasowane do potrzeb klas. D (Dependency Inversion Principle) – Zależności powinny być skierowane na abstrakcje, a nie konkretne klasy.",
        "correct": true
      },
      {
        "text": "UML (Unified Modeling Language) to język służący do tworzenia modeli systemów informatycznych, umożliwiający ich graficzne przedstawienie i zrozumienie. Główne cechy: Zastosowanie: UML jest szeroko stosowany w inżynierii oprogramowania do projektowania, dokumentowania i analizowania systemów. Diagramy: UML oferuje różne typy diagramów, takie jak: Diagramy klas: Przedstawiają struktury obiektów w systemie. Diagramy przypadków użycia: Pokazują interakcje między użytkownikami a systemem. Diagramy sekwencji: Ilustrują kolejność komunikatów między obiektami.",
        "correct": false
      },
      {
        "text": "CMS (np. WordPress, Joomla, Drupal) ułatwiają zarządzanie treścią, ale: Wymagają aktualizacji dla bezpieczeństwa. Mogą mieć ograniczenia w personalizacji (bez dodatkowego kodowania). Mogą być podatne na ataki (np. SQL Injection, ataki na wtyczki).",
        "correct": false
      },
      {
        "text": "Wymagania niefunkcjonalne odnoszą się do jakości systemu, takich jak: Wydajność: Przykład: System powinien obsługiwać 10 000 zapytań na minutę. Skalowalność: Przykład: System powinien być w stanie obsłużyć 1 milion użytkowników. Bezpieczeństwo: Przykład: Wszystkie dane powinny być szyfrowane za pomocą algorytmu AES-256.",
        "correct": false
      }
    ]
  },
  {
    "question": "Język zapytań do baz danych – składniki i przeznaczenie",
    "answers": [
      {
        "text": "Cechy baz NoSQL: Elastyczność schematów: Brak sztywno zdefiniowanego schematu bazy danych pozwala na przechowywanie różnorodnych typów danych (np. JSON, BSON). Wysoka dostępność: NoSQL zapewnia rozproszone przechowywanie danych na wielu węzłach, co poprawia dostępność i odporność na awarie. Skalowalność: Umożliwia łatwe poziome skalowanie poprzez dodawanie nowych serwerów (sharding), co pozwala obsługiwać duże ilości danych. Replikacja: Dane mogą być replikowane na różnych serwerach, co zapewnia ich bezpieczeństwo i dostępność. Założenia rozproszenia: Partycjonowanie danych (Sharding): Dzieli dane na fragmenty (shardy), które są przechowywane na różnych serwerach, aby zwiększyć wydajność. Replikacja: NoSQL często stosuje replikację danych na różnych węzłach, co zapewnia odporność na awarie i zwiększa dostępność.",
        "correct": false
      },
      {
        "text": "Język zapytań do baz danych (SQL) to język służący do komunikacji z bazami danych, umożliwiający wykonywanie operacji na danych. Składniki: DML (Data Manipulation Language): Służy do manipulacji danymi (np. SELECT, INSERT, UPDATE, DELETE). DDL (Data Definition Language): Służy do definiowania struktury bazy danych (np. CREATE, ALTER, DROP). DCL (Data Control Language): Służy do kontrolowania dostępu do danych (np. GRANT, REVOKE). TCL (Transaction Control Language): Zarządza transakcjami (np. COMMIT, ROLLBACK). Przeznaczenie: SQL jest używany do zarządzania bazami danych, pobierania, modyfikowania, dodawania i usuwania danych.",
        "correct": true
      },
      {
        "text": "Komputer komunikuje się z urządzeniami poprzez sterowniki oraz interfejsy (USB, PCI, Bluetooth).\nPrzykłady: Klawiatura i mysz (wejście) → przesyłanie sygnałów przez sterownik HID. Monitor (wyjście) → karta graficzna renderuje obraz. Drukarka (wyjście) → komputer wysyła dane w formacie obsługiwanym przez drukarkę (np. PCL, PostScript).",
        "correct": false
      },
      {
        "text": "Złożoność czasowa określa, jak szybko rośnie czas wykonania w zależności od ilości danych. np. O(n log n) (Merge Sort) jest lepsze niż O(n²) (Bubble Sort) dla dużych zbiorów. Złożoność pamięciowa – ile pamięci zajmuje algorytm. np. DFS może być bardziej pamięciooszczędny niż BFS w niektórych sytuacjach.",
        "correct": false
      }
    ]
  },
  {
    "question": "System śledzenia transakcji w bazach danych i przykłady problemów, które rozwiązuje",
    "answers": [
      {
        "text": "Narzędzia takie jak Jira, Trello, Asana, Redmine oferują: Zarządzanie zadaniami – tworzenie i przypisywanie zadań. Harmonogramowanie – wykresy Gantta, sprinty Scrum. Śledzenie postępów – tablice Kanban. Zarządzanie dokumentacją – wiki, repozytoria kodu. Integracje z narzędziami deweloperskimi (np. GitHub, CI/CD).",
        "correct": false
      },
      {
        "text": "System śledzenia transakcji w bazach danych to mechanizm umożliwiający zarządzanie transakcjami w sposób zapewniający spójność, niezawodność i integralność danych. Główne cechy to: ACID (Atomicity, Consistency, Isolation, Durability): Zapewnia, że transakcje są wykonywane w sposób, który gwarantuje poprawność danych. Atomicity: Transakcja jest traktowana jako całość – albo wszystkie operacje w ramach transakcji zostaną zakończone pomyślnie, albo żadna z nich nie zostanie zastosowana. Consistency: Transakcja doprowadza system do spójnego stanu przed i po jej wykonaniu. Isolation: Transakcje są wykonywane w izolacji od siebie, co oznacza, że wyniki jednej transakcji nie są widoczne dla innych do czasu jej zakończenia. Durability: Po zakończeniu transakcji jej zmiany są trwale zapisane, nawet w przypadku awarii systemu. Problemy, które rozwiązuje: Problem braku spójności: System śledzenia transakcji zapewnia, że dane będą spójne, nawet jeśli transakcje są przerwane przez awarię. Problem nieizolowanych transakcji: Mechanizm transakcji zapewnia, że operacje nie będą się nawzajem zakłócały. Problem odzyskiwania po awarii: Zabezpiecza dane przed utratą dzięki zapewnieniu trwałości operacji.",
        "correct": true
      },
      {
        "text": "Komputer komunikuje się z urządzeniami poprzez sterowniki oraz interfejsy (USB, PCI, Bluetooth).\nPrzykłady: Klawiatura i mysz (wejście) → przesyłanie sygnałów przez sterownik HID. Monitor (wyjście) → karta graficzna renderuje obraz. Drukarka (wyjście) → komputer wysyła dane w formacie obsługiwanym przez drukarkę (np. PCL, PostScript).",
        "correct": false
      },
      {
        "text": "Tworzenie nowych klas poprzez dziedziczenie z istniejących klas pozwala na reużywanie kodu, co upraszcza organizację programu. Dziedziczenie wspomaga tworzenie hierarchii klas, w których klasy dziedziczą właściwości i metody innych klas. Techniki: Dziedziczenie pojedyncze: Klasa pochodna dziedziczy po jednej klasie bazowej. Dziedziczenie wielokrotne (w językach wspierających): Klasa pochodna dziedziczy po wielu klasach. Zalety: Redukcja powtarzalności kodu. Ułatwienie rozwoju programu przez dodawanie nowych funkcji bez zmiany istniejącego kodu.",
        "correct": false
      }
    ]
  },
  {
    "question": "Etapy inżynierii oprogramowania i artefakty powstające na każdym etapie",
    "answers": [
      {
        "text": "Etapy inżynierii oprogramowania: Analiza wymagań: Zbieranie i analizowanie wymagań systemu. Artefakty: Dokument wymagań, analiza interesariuszy, przypadki użycia. Projektowanie systemu: Tworzenie ogólnej architektury i szczegółowego projektu systemu. Artefakty: Diagramy UML, dokumentacja architektury, prototypy interfejsu użytkownika. Implementacja: Programowanie systemu zgodnie z zaprojektowaną architekturą. Artefakty: Kod źródłowy, dokumentacja kodu, testy jednostkowe. Testowanie: Weryfikacja i walidacja systemu pod kątem błędów i spełnienia wymagań. Artefakty: Raporty z testów, plany testów, dokumentacja błędów. Utrzymanie: Dbanie o system po wdrożeniu, usuwanie błędów i wdrażanie nowych funkcjonalności. Artefakty: Zgłoszenia błędów, poprawki do kodu, dokumentacja aktualizacji.",
        "correct": true
      },
      {
        "text": "SOLID to zestaw zasad ułatwiających tworzenie czytelnego i elastycznego kodu: S (Single Responsibility Principle) – Każda klasa powinna mieć tylko jedną odpowiedzialność. O (Open/Closed Principle) – Klasy powinny być otwarte na rozszerzenia, ale zamknięte na modyfikacje. L (Liskov Substitution Principle) – Obiekty klas pochodnych powinny być wymienne z obiektami klas bazowych. I (Interface Segregation Principle) – Interfejsy powinny być dopasowane do potrzeb klas. D (Dependency Inversion Principle) – Zależności powinny być skierowane na abstrakcje, a nie konkretne klasy.",
        "correct": false
      },
      {
        "text": "Obsługa wyjątków jest mechanizmem pozwalającym na zarządzanie błędami w programie. Dzięki niej, kiedy pojawia się błąd, program nie przerywa działania, lecz reaguje na niego w zaplanowany sposób. W językach takich jak Java, C# czy Python, wyjątkami zarządza się przy pomocy bloków try-catch. Blok try zawiera kod, który może spowodować wyjątek, a blok catch obsługuje go, oferując odpowiednią reakcję. Najlepsze praktyki: Zawsze obsługuj konkretne wyjątki, unikaj ogólnych catch. Unikaj używania wyjątków do kontrolowania przepływu programu (np. zamiast try-catch do logiki). Korzystaj z finally do zwalniania zasobów, np. zamykania plików.",
        "correct": false
      },
      {
        "text": "Android Studio to oficjalne środowisko programistyczne dla systemu Android. Jego główne funkcje to: Edytor kodu: Zaawansowany edytor z funkcjami automatycznego uzupełniania kodu, refaktoryzacji oraz diagnostyki błędów. Emulator Android: Umożliwia uruchomienie aplikacji na różnych wersjach Androida i urządzeniach wirtualnych. Narzędzia do debugowania: Android Studio zapewnia narzędzia do debugowania aplikacji, które pomagają śledzić błędy i analizować logi. Wbudowane narzędzia do testowania: Integracja z narzędziami do testowania, zarówno jednostkowymi, jak i UI, umożliwia sprawdzanie jakości aplikacji. Designer UI: Graficzny edytor do tworzenia interfejsów użytkownika w technologii XML oraz Jetpack Compose.",
        "correct": false
      }
    ]
  },
  {
    "question": "Techniki pozyskiwania wymagań i ich zastosowanie w B2B i B2C",
    "answers": [
      {
        "text": "Generics (wzorce szablonów) to technika umożliwiająca tworzenie funkcji i klas, które mogą działać na różnych typach danych bez potrzeby wielokrotnego definiowania tych samych funkcji. Generics zwiększają reużywalność i bezpieczeństwo kodu, ponieważ umożliwiają operowanie na typach w sposób ogólny i elastyczny. Przykład w Javie (Generics): class Para<T, U> { private T pierwszy; private U drugi; public Para(T pierwszy, U drugi) { this.pierwszy = pierwszy; this.drugi = drugi; } public T getPierwszy() { return pierwszy; } public U getDrugi() { return drugi; } } Tutaj Para<T, U> to klasa, która może przechowywać dwa obiekty różnych typów, np. Para<Integer, String>.",
        "correct": false
      },
      {
        "text": "Wyzwania: Wydajność: Agregowanie dużych zbiorów danych może prowadzić do dużego obciążenia serwera, zwłaszcza w przypadku operacji takich jak JOIN, GROUP BY, HAVING przy dużych tabelach. Poprawność danych: Złożone zapytania mogą prowadzić do błędnych wyników, jeśli dane nie są poprawnie zgrupowane lub zapytania są źle zoptymalizowane. Optymalizacja: Zapytania wymagające agregacji mogą spowalniać aplikację. Rozwiązaniem jest stosowanie indeksów, ograniczanie liczby agregacji na dużych tabelach oraz wykorzystywanie zapytań z limitami. Zalecane rozwiązania: Indeksy: Stosowanie indeksów na kolumnach, które są używane w zapytaniach agregujących. Optymalizacja zapytań: Zoptymalizowanie zapytań, np. przez użycie LIMIT lub dzielenie zapytań na mniejsze operacje, aby zmniejszyć obciążenie serwera. Cache'owanie wyników: Wykorzystanie cache'owania wyników dla zapytań agregujących, zwłaszcza dla danych, które rzadko się zmieniają.",
        "correct": false
      },
      {
        "text": "Modele monetyzacji: Reklamy: Wstawianie reklam w aplikacji (np. Google AdMob). Zaletą jest brak konieczności płacenia przez użytkownika, wadą – możliwość irytowania użytkowników. Zakupy w aplikacji: Umożliwienie użytkownikom kupowania treści lub funkcji w aplikacji. Zaletą jest łatwy dostęp do dodatkowych funkcji, ale wymaga dokładnego planowania modeli cenowych. Subskrypcje: Oferowanie subskrypcji na dostęp do treści lub funkcji w aplikacji. Zaletą jest przewidywalny dochód, ale może odstraszyć użytkowników, którzy nie są gotowi na regularne płatności.",
        "correct": false
      },
      {
        "text": "Techniki pozyskiwania wymagań: Wywiady: Rozmowy z interesariuszami w celu poznania ich potrzeb i oczekiwań. B2B: Wywiady z menedżerami, inżynierami, klientami B2B. B2C: Wywiady z użytkownikami indywidualnymi, badania fokusowe. Warsztaty (Workshops): Spotkania grupowe, gdzie omawia się wymagania. B2B: Warsztaty z przedstawicielami różnych działów organizacji. B2C: Warsztaty z użytkownikami, by lepiej zrozumieć ich potrzeby. Prototypowanie: Tworzenie wstępnej wersji systemu, aby zobaczyć, czy spełnia oczekiwania użytkowników. B2B: Wykorzystywane w przypadku dużych systemów B2B, np. ERP. B2C: Prototypy aplikacji mobilnych i webowych do testowania z użytkownikami. Ankiety i kwestionariusze: Zbieranie danych w formie pytań do szerokiego kręgu osób. B2B: Ankiety dla przedsiębiorstw w celu zbierania informacji o preferencjach. B2C: Kwestionariusze skierowane do użytkowników końcowych, np. aplikacji konsumenckich.",
        "correct": true
      }
    ]
  },
  {
    "question": "Funkcje systemu zarządzania bazą danych",
    "answers": [
      {
        "text": "Modyfikatory dostępu kontrolują, który kod może uzyskać dostęp do członków klasy. W różnych językach (np. Java, C#) są stosowane modyfikatory takie jak: public – dostęp do członka klasy z każdej lokalizacji w kodzie. private – dostęp tylko wewnątrz klasy. protected – dostęp w obrębie klasy i klas dziedziczących. Przykład w Java: public class Osoba { private String imie; protected int wiek; }",
        "correct": false
      },
      {
        "text": "MATLAB/Simulink: Zastosowanie: Używany w inżynierii do modelowania, symulacji i analizy systemów dynamicznych. Główne cechy: Obsługuje matematyczne i statystyczne obliczenia, oferuje szeroki zestaw bibliotek do różnych dziedzin. ANSYS: Zastosowanie: Symulacja i analiza inżynierska, szczególnie w zakresie mechaniki ciał stałych, przepływów i innych. Główne cechy: Silne narzędzia do analizy strukturalnej, cieplnej, elektromagnetycznej.",
        "correct": false
      },
      {
        "text": "Klasa jest definicją, która wskazuje, jakie właściwości i metody będą dostępne dla tworzonych obiektów. Obiekt to instancja klasy, która może być stworzona za pomocą słowa kluczowego new. Przykład w Java: class Samochod { String model; } Samochod auto = new Samochod(); Usuwanie obiektów w Java odbywa się automatycznie przez Garbage Collector, który zarządza pamięcią.",
        "correct": false
      },
      {
        "text": "System zarządzania bazą danych (DBMS) pełni kluczową rolę w przechowywaniu, zarządzaniu i przetwarzaniu danych. Jego główne funkcje to: Przechowywanie danych: DBMS przechowuje dane w sposób uporządkowany, zapewniając łatwy dostęp. Zarządzanie dostępem: Kontroluje, kto ma dostęp do danych i w jakim zakresie (autentykacja, autoryzacja). Manipulacja danymi: Umożliwia dodawanie, modyfikowanie, usuwanie i wyszukiwanie danych. Bezpieczeństwo: Szyfrowanie, tworzenie kopii zapasowych, odzyskiwanie danych. Zarządzanie transakcjami: Obsługuje mechanizmy transakcyjne zapewniające integralność danych. Indeksowanie: Zoptymalizowane mechanizmy wyszukiwania danych.",
        "correct": true
      }
    ]
  },
  {
    "question": "Uwarunkowania stosowania podejścia obiektowego i strukturalnego w projektowaniu systemów informatycznych",
    "answers": [
      {
        "text": "Heurystyki Nielsena to 10 zasad UX, pomagające w projektowaniu intuicyjnych interfejsów. Przykład: \"Zapewnij informację o stanie systemu\" Użytkownik powinien zawsze wiedzieć, co się dzieje (np. pasek ładowania, komunikaty błędów). Przykład: Gmail informuje o wysyłaniu wiadomości („Wiadomość została wysłana”).",
        "correct": false
      },
      {
        "text": "Aby zoptymalizować wydajność aplikacji mobilnej, można zastosować: Lazy loading: Wczytywanie danych lub widoków tylko wtedy, gdy są one potrzebne, zamiast ładowania wszystkiego na raz. Kompresja zasobów: Kompresowanie obrazów, plików wideo i innych zasobów w celu zmniejszenia ich rozmiaru, co pozwala na szybsze ładowanie aplikacji. Optymalizacja zapytań sieciowych: Redukcja liczby zapytań sieciowych, używanie odpowiednich algorytmów kompresji, minimalizacja danych przesyłanych między urządzeniem a serwerem. Użycie pamięci podręcznej: Przechowywanie często używanych danych (np. obrazy, dane z API) w pamięci podręcznej, co przyspiesza dostęp do nich i zmniejsza obciążenie sieci.",
        "correct": false
      },
      {
        "text": "Podejście obiektowe (OOP): Uwarunkowania: Stosowane w przypadku systemów, które wymagają dużej elastyczności, rozwoju i ponownego wykorzystania kodu. Dobre dla aplikacji złożonych, które muszą być łatwe w utrzymaniu i rozszerzaniu. Przykład: Programy oparte na aplikacjach mobilnych i rozbudowanych systemach informatycznych. Podejście strukturalne: Uwarunkowania: Skierowane na proste, sekwencyjne operacje, gdzie kod jest bardziej liniowy i łatwiejszy do zrozumienia w mniejszych projektach. Przykład: Systemy wbudowane, proste aplikacje desktopowe.",
        "correct": true
      },
      {
        "text": "Podejście algorytmiczne – ścisłe reguły, gwarantuje optymalne rozwiązanie (np. Dijkstra do wyznaczania najkrótszej ścieżki). Podejście heurystyczne – przybliżone rozwiązania, szybsze, ale nie zawsze optymalne (np. algorytm mrówkowy do problemu komiwojażera). Zastosowanie: Algorytmy – lepsze w zadaniach wymagających precyzji (np. szyfrowanie). Heurystyki – lepsze w problemach NP-trudnych, gdy optymalne rozwiązanie jest zbyt kosztowne (np. AI, optymalizacja grafiki).",
        "correct": false
      }
    ]
  },
  {
    "question": "Kluczowe wymagania funkcjonalne i niefunkcjonalne systemu integrującego różnorodne systemy informatyczne",
    "answers": [
      {
        "text": "Aplikacje natywne: Działają na określonej platformie (iOS, Android). Wysoka wydajność i dostęp do pełnej funkcjonalności urządzenia. Wymagają osobnych wersji dla każdej platformy. Aplikacje hybrydowe: Kombinacja aplikacji natywnych i webowych. Jedna baza kodu dla wielu platform. Mniejsza wydajność w porównaniu z aplikacjami natywnymi. Aplikacje wieloplatformowe: Pisane raz i uruchamiane na wielu platformach (np. Xamarin, React Native). Oferują kompromis między wydajnością a oszczędnością czasu rozwoju. Zagadnienia dla kierunku Informatyka, specjalność: Aplikacje mobilne i bazy danych",
        "correct": false
      },
      {
        "text": "CMS (np. WordPress, Joomla, Drupal) ułatwiają zarządzanie treścią, ale: Wymagają aktualizacji dla bezpieczeństwa. Mogą mieć ograniczenia w personalizacji (bez dodatkowego kodowania). Mogą być podatne na ataki (np. SQL Injection, ataki na wtyczki).",
        "correct": false
      },
      {
        "text": "MATLAB/Simulink: Zastosowanie: Używany w inżynierii do modelowania, symulacji i analizy systemów dynamicznych. Główne cechy: Obsługuje matematyczne i statystyczne obliczenia, oferuje szeroki zestaw bibliotek do różnych dziedzin. ANSYS: Zastosowanie: Symulacja i analiza inżynierska, szczególnie w zakresie mechaniki ciał stałych, przepływów i innych. Główne cechy: Silne narzędzia do analizy strukturalnej, cieplnej, elektromagnetycznej.",
        "correct": false
      },
      {
        "text": "Wymagania funkcjonalne: Integracja z innymi systemami: Możliwość wymiany danych z systemami ERP, CRM, itp. Obsługa różnych formatów danych: Konwersja i przesyłanie danych między różnymi formatami. Wydajność: Szybka wymiana danych i integracja w czasie rzeczywistym. Wymagania niefunkcjonalne: Bezpieczeństwo: Silne mechanizmy szyfrowania, uwierzytelnianie użytkowników. Skalowalność: Możliwość rozbudowy systemu o dodatkowe moduły w przyszłości. Wydajność: Niski czas odpowiedzi, optymalizacja zapytań.",
        "correct": true
      }
    ]
  },
  {
    "question": "Zasady działania wzorca MVC (Model View Controller)",
    "answers": [
      {
        "text": "MVC (Model-View-Controller) to wzorzec architektoniczny, który dzieli aplikację na trzy główne komponenty: Model: Odpowiada za logikę biznesową i dostęp do danych. View: Odpowiada za interfejs użytkownika (UI). Controller: Pośredniczy pomiędzy modelem a widokiem, zarządza logiką aplikacji. Zastosowanie: MVC jest idealne w aplikacjach webowych i mobilnych, gdzie mamy wyraźny podział na dane (Model), interfejs użytkownika (View) i logikę sterującą (Controller). Przykład: aplikacje typu e-commerce, blogi.",
        "correct": true
      },
      {
        "text": "Model tworzony w narzędziach takich jak Scilab czy Matlab jest tylko przybliżeniem rzeczywistości. Zawsze występują pewne niepewności, np. w parametrach modelu (np. współczynniki oporu w modelu aerodynamicznym) lub warunkach brzegowych (np. zmienne temperatury w modelu cieplnym). Te niepewności mogą wpływać na dokładność wyników i ich wiarygodność, dlatego często stosuje się analizę wrażliwości, aby zrozumieć, jak zmiany w danych wejściowych wpływają na wyniki. Przykład: Modelowanie przepływu powietrza w turbinie wiatrowej może być obarczone niepewnością w określaniu prędkości wiatru, co wpływa na dokładność prognozowanej energii.",
        "correct": false
      },
      {
        "text": "Grafika rastrowa (np. JPEG, PNG): Składa się z pikseli. Traci jakość po powiększeniu. Nadaje się do zdjęć i realistycznych obrazów. Grafika wektorowa (np. SVG, AI): Składa się z figur geometrycznych. Można skalować bez utraty jakości. Idealna do logotypów i ikon.",
        "correct": false
      },
      {
        "text": "Klasa to definicja szablonu dla obiektów, zawierająca zmienne i metody. Jest jak plan budowy domu, natomiast obiekt jest jego fizycznym odpowiednikiem. Obiekt to instancja klasy, tworzona na podstawie tej definicji, która zawiera konkretne dane. Przykład w Java: class Samochod { String model; void uruchomSilnik() { System.out.println(\"Silnik uruchomiony\"); } } Samochod auto = new Samochod(); W tym przykładzie Samochod to klasa, a auto to obiekt.",
        "correct": false
      }
    ]
  },
  {
    "question": "Główne zasady metodyk zwinnych i rozwiązywane problemy",
    "answers": [
      {
        "text": "Metodyki zwinne (Agile): Iteracyjne i przyrostowe podejście: Praca w krótkich iteracjach, dostarczanie działających wersji oprogramowania. Elastyczność i adaptacja: Łatwość w adaptacji do zmieniających się wymagań. Współpraca z klientem: Bliska współpraca z interesariuszami w celu lepszego zrozumienia ich potrzeb. Skupienie na wartości biznesowej: Priorytetem jest dostarczenie wartościowych funkcji. Rozwiązywane problemy: Szybka reakcja na zmiany w wymaganiach. Zwiększenie transparentności procesu tworzenia oprogramowania. Ułatwienie dostosowywania oprogramowania do rzeczywistych potrzeb użytkowników.",
        "correct": true
      },
      {
        "text": "Wyzwania: Fragmentacja urządzeń: Różne wersje systemów operacyjnych, urządzenia o różnych rozdzielczościach ekranów, procesorach, pojemności pamięci itp. mogą prowadzić do problemów z kompatybilnością aplikacji. Różnice w interfejsie użytkownika: Systemy operacyjne mogą mieć różne wytyczne dotyczące interfejsu użytkownika, co wymaga dostosowania aplikacji do specyficznych wymagań platformy. Jak radzić sobie z wyzwaniami: Testowanie na różnych urządzeniach: Regularne testowanie aplikacji na różnych wersjach systemów operacyjnych i urządzeniach za pomocą emulatorów oraz rzeczywistych urządzeń. Używanie narzędzi takich jak Firebase czy TestFlight (iOS) oraz Android Emulator: Pomagają w testowaniu aplikacji na różnych wersjach systemów operacyjnych. Responsywny design: Użycie rozwiązań responsywnych, które umożliwiają dostosowanie UI do różnych rozdzielczości ekranów. Wersjonowanie kodu: Korzystanie z narzędzi do wersjonowania kodu oraz wtyczek umożliwiających wsparcie dla starszych wersji systemów operacyjnych.",
        "correct": false
      },
      {
        "text": "Definicja problemu – jasne określenie celu. Analiza danych wejściowych i wyjściowych – określenie struktur danych. Projektowanie algorytmu – wybór metody rozwiązania (np. rekurencja, programowanie dynamiczne). Analiza złożoności – ocena wydajności (czas/pamięć). Implementacja i testowanie – sprawdzenie poprawności działania. Optymalizacja – ulepszanie algorytmu dla lepszej efektywności.",
        "correct": false
      },
      {
        "text": "Modyfikatory dostępu kontrolują, który kod może uzyskać dostęp do członków klasy. W różnych językach (np. Java, C#) są stosowane modyfikatory takie jak: public – dostęp do członka klasy z każdej lokalizacji w kodzie. private – dostęp tylko wewnątrz klasy. protected – dostęp w obrębie klasy i klas dziedziczących. Przykład w Java: public class Osoba { private String imie; protected int wiek; }",
        "correct": false
      }
    ]
  },
  {
    "question": "Wymagania niefunkcjonalne i przykłady",
    "answers": [
      {
        "text": "Wirtualizacja to technika, która pozwala uruchamiać wiele systemów operacyjnych na jednym fizycznym komputerze. ✅ Korzyści: Efektywne wykorzystanie sprzętu. Możliwość testowania różnych systemów operacyjnych. Łatwe skalowanie infrastruktury IT. Przykłady narzędzi: VMware, VirtualBox, Hyper-V.",
        "correct": false
      },
      {
        "text": "Aby zoptymalizować wydajność aplikacji na iOS, programiści używają różnych technik i narzędzi: Profilowanie: Xcode oferuje narzędzia takie jak Instruments, które umożliwiają profilowanie aplikacji pod kątem zużycia CPU, pamięci i innych zasobów. Profilowanie pomaga zidentyfikować miejsca w aplikacji, które wymagają optymalizacji. Zarządzanie pamięcią: iOS zarządza pamięcią automatycznie, ale programiści muszą unikać wycieków pamięci i odpowiednio zarządzać zasobami. Używanie ARC (Automatic Reference Counting) w iOS pozwala na automatyczne zwalnianie pamięci, ale należy pamiętać o odpowiednim zarządzaniu cyklem życia obiektów. Optymalizacja renderowania UI: iOS oferuje różne narzędzia do analizy renderowania interfejsu użytkownika, takie jak Instruments (Core Animation) do monitorowania opóźnień renderowania UI. Optymalizacja animacji, redukcja liczby widoków w hierarchii UI i używanie lazy loading może znacznie poprawić wydajność. Redukcja operacji synchronizacji: Zbyt częsta synchronizacja z serwerem może prowadzić do spowolnienia aplikacji. Optymalizowanie czasów synchronizacji i zarządzanie nimi, np. w tle, może poprawić wydajność.",
        "correct": false
      },
      {
        "text": "Android Studio to oficjalne środowisko programistyczne dla systemu Android. Jego główne funkcje to: Edytor kodu: Zaawansowany edytor z funkcjami automatycznego uzupełniania kodu, refaktoryzacji oraz diagnostyki błędów. Emulator Android: Umożliwia uruchomienie aplikacji na różnych wersjach Androida i urządzeniach wirtualnych. Narzędzia do debugowania: Android Studio zapewnia narzędzia do debugowania aplikacji, które pomagają śledzić błędy i analizować logi. Wbudowane narzędzia do testowania: Integracja z narzędziami do testowania, zarówno jednostkowymi, jak i UI, umożliwia sprawdzanie jakości aplikacji. Designer UI: Graficzny edytor do tworzenia interfejsów użytkownika w technologii XML oraz Jetpack Compose.",
        "correct": false
      },
      {
        "text": "Wymagania niefunkcjonalne odnoszą się do jakości systemu, takich jak: Wydajność: Przykład: System powinien obsługiwać 10 000 zapytań na minutę. Skalowalność: Przykład: System powinien być w stanie obsłużyć 1 milion użytkowników. Bezpieczeństwo: Przykład: Wszystkie dane powinny być szyfrowane za pomocą algorytmu AES-256.",
        "correct": true
      }
    ]
  },
  {
    "question": "Cechy różnych typów aplikacji mobilnych",
    "answers": [
      {
        "text": "Teoria prawdopodobieństwa pozwala na efektywne przechowywanie i wyszukiwanie danych z pewnym marginesem błędu. Filtr Blooma: Używany w bazach danych (np. Google BigTable) do szybkiego sprawdzania obecności elementu w zbiorze. Drzewa probabilistyczne: Algorytm Huffmana – kompresja danych poprzez drzewo kodowe. Modele Markowa – przewidywanie kolejnych elementów (np. autokorekta w klawiaturach).",
        "correct": false
      },
      {
        "text": "Sztuczna inteligencja pomaga wykrywać cyberzagrożenia poprzez analizę anomalii w ruchu sieciowym. Zastosowania: Systemy wykrywania ataków (IDS). Analiza logów pod kątem nietypowych zachowań. Predykcja zagrożeń na podstawie wzorców. Wyzwania: Fałszywe alarmy. Duża ilość przetwarzanych danych wymaga mocy obliczeniowej. Możliwość omijania algorytmów AI przez cyberprzestępców.",
        "correct": false
      },
      {
        "text": "Aplikacje natywne: Działają na określonej platformie (iOS, Android). Wysoka wydajność i dostęp do pełnej funkcjonalności urządzenia. Wymagają osobnych wersji dla każdej platformy. Aplikacje hybrydowe: Kombinacja aplikacji natywnych i webowych. Jedna baza kodu dla wielu platform. Mniejsza wydajność w porównaniu z aplikacjami natywnymi. Aplikacje wieloplatformowe: Pisane raz i uruchamiane na wielu platformach (np. Xamarin, React Native). Oferują kompromis między wydajnością a oszczędnością czasu rozwoju. Zagadnienia dla kierunku Informatyka, specjalność: Aplikacje mobilne i bazy danych",
        "correct": true
      },
      {
        "text": "Najpopularniejsze systemy: Git (rozproszony) – używany w GitHub, GitLab, Bitbucket. SVN (Subversion) – scentralizowany, popularny w korporacjach. Mercurial – podobny do Gita, ale mniej popularny.",
        "correct": false
      }
    ]
  },
  {
    "question": "Metody zarządzania pamięcią w aplikacjach mobilnych",
    "answers": [
      {
        "text": "UML (Unified Modeling Language) to język służący do tworzenia modeli systemów informatycznych, umożliwiający ich graficzne przedstawienie i zrozumienie. Główne cechy: Zastosowanie: UML jest szeroko stosowany w inżynierii oprogramowania do projektowania, dokumentowania i analizowania systemów. Diagramy: UML oferuje różne typy diagramów, takie jak: Diagramy klas: Przedstawiają struktury obiektów w systemie. Diagramy przypadków użycia: Pokazują interakcje między użytkownikami a systemem. Diagramy sekwencji: Ilustrują kolejność komunikatów między obiektami.",
        "correct": false
      },
      {
        "text": "W aplikacjach mobilnych zarządzanie pamięcią jest kluczowym elementem optymalizacji, ponieważ urządzenia mobilne mają ograniczone zasoby. Główne metody zarządzania pamięcią to: Garbage Collection (GC): Systemy operacyjne, takie jak Android i iOS, automatycznie zarządzają pamięcią za pomocą GC, który usuwa nieużywane obiekty z pamięci. Programista nie musi manualnie zwalniać pamięci, ale musi zadbać o unikanie wycieków pamięci. Zarządzanie zasobami: Programiści muszą dbać o poprawne zwalnianie zasobów, takich jak obrazy, pliki wideo czy połączenia sieciowe, aby uniknąć wycieków pamięci. Zarządzanie pamięcią podręczną: Używanie pamięci podręcznej do przechowywania danych, takich jak obrazy czy dane z sieci, aby zmniejszyć liczbę operacji I/O i zaoszczędzić pamięć. Ograniczanie liczby obiektów: Optymalizacja alokacji pamięci poprzez minimalizowanie liczby tworzonych obiektów i dbanie o ich ponowne użycie.",
        "correct": true
      },
      {
        "text": "Bezpieczeństwo w systemach bazodanowych obejmuje: Autentykację i autoryzację: Określenie, kto ma dostęp do danych i jaką rolę pełni. Szyfrowanie: Chroni dane przechowywane w bazie przed nieautoryzowanym dostępem. Transakcje: Zapewniają integralność danych i ich spójność (ACID).",
        "correct": false
      },
      {
        "text": "Tablica to struktura danych, która pozwala na przechowywanie wielu wartości tego samego typu w jednym obiekcie. Zaletą tablicy jest szybki dostęp do elementów za pomocą indeksu, jednak rozmiar tablicy jest stały po jej zadeklarowaniu. Przykład w C#: int[] liczby = new int[5] {1, 2, 3, 4, 5}; Przykład w Java: int[] liczby = {1, 2, 3, 4, 5}; Zastosowanie: Tablice są używane np. do przechowywania wyników kalkulacji, zbiorów danych czy elementów w grze komputerowej.",
        "correct": false
      }
    ]
  },
  {
    "question": "Optymalizacja wydajności aplikacji iOS",
    "answers": [
      {
        "text": "Aby zoptymalizować wydajność aplikacji na iOS, programiści używają różnych technik i narzędzi: Profilowanie: Xcode oferuje narzędzia takie jak Instruments, które umożliwiają profilowanie aplikacji pod kątem zużycia CPU, pamięci i innych zasobów. Profilowanie pomaga zidentyfikować miejsca w aplikacji, które wymagają optymalizacji. Zarządzanie pamięcią: iOS zarządza pamięcią automatycznie, ale programiści muszą unikać wycieków pamięci i odpowiednio zarządzać zasobami. Używanie ARC (Automatic Reference Counting) w iOS pozwala na automatyczne zwalnianie pamięci, ale należy pamiętać o odpowiednim zarządzaniu cyklem życia obiektów. Optymalizacja renderowania UI: iOS oferuje różne narzędzia do analizy renderowania interfejsu użytkownika, takie jak Instruments (Core Animation) do monitorowania opóźnień renderowania UI. Optymalizacja animacji, redukcja liczby widoków w hierarchii UI i używanie lazy loading może znacznie poprawić wydajność. Redukcja operacji synchronizacji: Zbyt częsta synchronizacja z serwerem może prowadzić do spowolnienia aplikacji. Optymalizowanie czasów synchronizacji i zarządzanie nimi, np. w tle, może poprawić wydajność.",
        "correct": true
      },
      {
        "text": "Sprzętowe: Router – przekierowuje ruch w sieci. Switch – łączy urządzenia w sieci LAN. Firewall sprzętowy – filtruje ruch sieciowy. Serwery – przechowują dane i aplikacje. Programowe: Systemy operacyjne sieciowe (np. Windows Server, Linux). Oprogramowanie firewall (np. iptables, pfSense). VPN – szyfrowanie ruchu internetowego. Systemy IDS/IPS – wykrywanie i zapobieganie atakom.",
        "correct": false
      },
      {
        "text": "Aby zoptymalizować wydajność aplikacji mobilnej, można zastosować: Lazy loading: Wczytywanie danych lub widoków tylko wtedy, gdy są one potrzebne, zamiast ładowania wszystkiego na raz. Kompresja zasobów: Kompresowanie obrazów, plików wideo i innych zasobów w celu zmniejszenia ich rozmiaru, co pozwala na szybsze ładowanie aplikacji. Optymalizacja zapytań sieciowych: Redukcja liczby zapytań sieciowych, używanie odpowiednich algorytmów kompresji, minimalizacja danych przesyłanych między urządzeniem a serwerem. Użycie pamięci podręcznej: Przechowywanie często używanych danych (np. obrazy, dane z API) w pamięci podręcznej, co przyspiesza dostęp do nich i zmniejsza obciążenie sieci.",
        "correct": false
      },
      {
        "text": "Język zapytań do baz danych (SQL) to język służący do komunikacji z bazami danych, umożliwiający wykonywanie operacji na danych. Składniki: DML (Data Manipulation Language): Służy do manipulacji danymi (np. SELECT, INSERT, UPDATE, DELETE). DDL (Data Definition Language): Służy do definiowania struktury bazy danych (np. CREATE, ALTER, DROP). DCL (Data Control Language): Służy do kontrolowania dostępu do danych (np. GRANT, REVOKE). TCL (Transaction Control Language): Zarządza transakcjami (np. COMMIT, ROLLBACK). Przeznaczenie: SQL jest używany do zarządzania bazami danych, pobierania, modyfikowania, dodawania i usuwania danych.",
        "correct": false
      }
    ]
  },
  {
    "question": "Optymalizacja wydajności aplikacji mobilnej – minimalizacja czasu ładowania i zużycia zasobów",
    "answers": [
      {
        "text": "Aby zoptymalizować wydajność aplikacji mobilnej, można zastosować: Lazy loading: Wczytywanie danych lub widoków tylko wtedy, gdy są one potrzebne, zamiast ładowania wszystkiego na raz. Kompresja zasobów: Kompresowanie obrazów, plików wideo i innych zasobów w celu zmniejszenia ich rozmiaru, co pozwala na szybsze ładowanie aplikacji. Optymalizacja zapytań sieciowych: Redukcja liczby zapytań sieciowych, używanie odpowiednich algorytmów kompresji, minimalizacja danych przesyłanych między urządzeniem a serwerem. Użycie pamięci podręcznej: Przechowywanie często używanych danych (np. obrazy, dane z API) w pamięci podręcznej, co przyspiesza dostęp do nich i zmniejsza obciążenie sieci.",
        "correct": true
      },
      {
        "text": "Optymalizacja funkcji kosztu w AI – gradient descent używa pochodnych do minimalizacji błędów w sieciach neuronowych. Analiza szybkości zmian – różniczkowanie pomaga w dynamicznym sterowaniu systemami. Interpolacja i aproksymacja – całkowanie pozwala modelować złożone funkcje w analizie danych.",
        "correct": false
      },
      {
        "text": "Złożoność czasowa określa, jak szybko rośnie czas wykonania w zależności od ilości danych. np. O(n log n) (Merge Sort) jest lepsze niż O(n²) (Bubble Sort) dla dużych zbiorów. Złożoność pamięciowa – ile pamięci zajmuje algorytm. np. DFS może być bardziej pamięciooszczędny niż BFS w niektórych sytuacjach.",
        "correct": false
      },
      {
        "text": "Responsywny design: Użycie technik takich jak Auto Layout (iOS) czy ConstraintLayout (Android) do dostosowania układu do różnych rozmiarów ekranów. Testowanie na różnych urządzeniach: Regularne testowanie aplikacji na różnych urządzeniach o różnych rozdzielczościach ekranów. Minimalizm w designie: Prosty, przejrzysty design z jasnymi i łatwymi do zrozumienia interakcjami. Interaktywne elementy: Używanie animacji i przejść w sposób, który poprawia użyteczność i wrażenia użytkownika.",
        "correct": false
      }
    ]
  },
  {
    "question": "Zarządzanie stanem aplikacji mobilnej – zmiany konfiguracji",
    "answers": [
      {
        "text": "Etapy inżynierii oprogramowania: Analiza wymagań: Zbieranie i analizowanie wymagań systemu. Artefakty: Dokument wymagań, analiza interesariuszy, przypadki użycia. Projektowanie systemu: Tworzenie ogólnej architektury i szczegółowego projektu systemu. Artefakty: Diagramy UML, dokumentacja architektury, prototypy interfejsu użytkownika. Implementacja: Programowanie systemu zgodnie z zaprojektowaną architekturą. Artefakty: Kod źródłowy, dokumentacja kodu, testy jednostkowe. Testowanie: Weryfikacja i walidacja systemu pod kątem błędów i spełnienia wymagań. Artefakty: Raporty z testów, plany testów, dokumentacja błędów. Utrzymanie: Dbanie o system po wdrożeniu, usuwanie błędów i wdrażanie nowych funkcjonalności. Artefakty: Zgłoszenia błędów, poprawki do kodu, dokumentacja aktualizacji.",
        "correct": false
      },
      {
        "text": "UIKit: Tradycyjny framework UI używany w iOS. Wymaga ręcznego zarządzania hierarchią widoków i kontrolerów. Bardziej rozbudowany i elastyczny, ale ma wyższą krzywą uczenia się. SwiftUI: Nowoczesny framework oparty na deklaratywnym podejściu do tworzenia UI. Umożliwia łatwiejsze tworzenie UI poprzez deklarację stanu aplikacji i jego aktualizację. Lepsza integracja z nowymi funkcjami systemu iOS, takich jak Dark Mode i Accessibility. Korzyści i wyzwania: UIKit: Jest bardziej dojrzały, szeroko wspierany i elastyczny, ale wymaga więcej kodu do zarządzania widokami. SwiftUI: Uproszczony kod, lepsze wsparcie dla dynamicznych interfejsów, ale może mieć ograniczenia w starszych wersjach iOS (przynajmniej na początku). Preferencje: SwiftUI może być preferowany w nowych projektach, natomiast UIKit pozostaje preferowaną opcją w starszych aplikacjach, gdzie konieczne jest utrzymanie kompatybilności wstecznej.",
        "correct": false
      },
      {
        "text": "Techniki pozyskiwania wymagań: Wywiady: Rozmowy z interesariuszami w celu poznania ich potrzeb i oczekiwań. B2B: Wywiady z menedżerami, inżynierami, klientami B2B. B2C: Wywiady z użytkownikami indywidualnymi, badania fokusowe. Warsztaty (Workshops): Spotkania grupowe, gdzie omawia się wymagania. B2B: Warsztaty z przedstawicielami różnych działów organizacji. B2C: Warsztaty z użytkownikami, by lepiej zrozumieć ich potrzeby. Prototypowanie: Tworzenie wstępnej wersji systemu, aby zobaczyć, czy spełnia oczekiwania użytkowników. B2B: Wykorzystywane w przypadku dużych systemów B2B, np. ERP. B2C: Prototypy aplikacji mobilnych i webowych do testowania z użytkownikami. Ankiety i kwestionariusze: Zbieranie danych w formie pytań do szerokiego kręgu osób. B2B: Ankiety dla przedsiębiorstw w celu zbierania informacji o preferencjach. B2C: Kwestionariusze skierowane do użytkowników końcowych, np. aplikacji konsumenckich.",
        "correct": false
      },
      {
        "text": "Aby zapewnić płynne działanie aplikacji i zachowanie danych podczas zmiany konfiguracji (np. obrót ekranu), można zastosować: Przechowywanie stanu w pamięci: Korzystanie z mechanizmów przechowywania stanu (np. onSaveInstanceState w Androidzie lub state restoration w iOS), które umożliwiają zachowanie danych i ponowne załadowanie ich po zmianie konfiguracji. Zarządzanie danymi w bazach danych: Przechowywanie kluczowych danych aplikacji w bazach danych lub innych trwałych magazynach, aby były dostępne po ponownym uruchomieniu aplikacji. Unikanie blokowania interfejsu: Aplikacja powinna wykorzystywać asynchroniczne operacje w celu uniknięcia blokowania interfejsu użytkownika podczas zmian konfiguracji.",
        "correct": true
      }
    ]
  },
  {
    "question": "Najlepsze praktyki integracji aplikacji mobilnej z backendem",
    "answers": [
      {
        "text": "Kontrola dostępu – użytkownicy mają różne poziomy uprawnień. Szyfrowanie danych – np. TLS w połączeniach do bazy. Backupy – ochrona przed utratą danych. Replikacja – zwiększenie niezawodności bazy. ACID – zasady zapewniające integralność danych.",
        "correct": false
      },
      {
        "text": "Aby zaprojektować aplikację mobilną, która będzie skalowalna: Modularność: Tworzenie aplikacji w sposób modularny, dzieląc ją na mniejsze komponenty. Umożliwia to łatwiejsze zarządzanie aplikacją przy wzroście liczby użytkowników. Chmurowa infrastruktura: Wykorzystanie chmurowych usług backendowych (np. AWS, Google Cloud) do przechowywania danych i obsługi logiki biznesowej, co zapewnia skalowalność. Optymalizacja zapytań sieciowych: Używanie algorytmów kompresji oraz zmniejszenie liczby zapytań do serwera w celu zminimalizowania opóźnień i zmniejszenia obciążenia serwerów. Zastosowanie CDN: Korzystanie z sieci dostarczania treści (CDN), aby przyspieszyć ładowanie zasobów aplikacji z różnych lokalizacji geograficznych. Użycie load balancerów i rozproszonych baz danych: Rozdzielanie obciążenia między serwery i stosowanie baz danych, które obsługują dużą ilość danych oraz zapewniają redundancję.",
        "correct": false
      },
      {
        "text": "Aby zapewnić niezawodną komunikację i synchronizację danych, należy: Używać bezpiecznych połączeń (HTTPS): Zapewnienie bezpieczeństwa danych przesyłanych między aplikacją mobilną a backendem. Wykorzystanie technologii push (np. FCM, APNs): Umożliwia to synchronizację danych w czasie rzeczywistym. Zoptymalizowane API: Tworzenie RESTful API, które jest szybkie, wydajne i łatwe w integracji z aplikacjami mobilnymi. Używanie lokalnych baz danych: Zapewnia to możliwość przechowywania danych offline i synchronizacji ich, gdy połączenie z internetem będzie dostępne.",
        "correct": true
      },
      {
        "text": "Magistrali – wszystkie urządzenia podłączone do jednej linii (prosta, ale awaryjna). Pierścienia – dane krążą w jednym kierunku (wydajna, ale podatna na awarie). Gwiazdy – centralny punkt (switch/router) łączy wszystkie urządzenia (popularna i bezpieczna). Siatki (mesh) – każde urządzenie może łączyć się z każdym (wysoka redundancja).",
        "correct": false
      }
    ]
  },
  {
    "question": "Minimalizacja zużycia baterii przez aplikację mobilną",
    "answers": [
      {
        "text": "Aby minimalizować zużycie baterii, należy: Optymalizować operacje w tle: Ograniczenie częstotliwości wykonywania operacji w tle (np. zapytań sieciowych). Wykorzystywanie lokalizacji tylko wtedy, gdy jest to konieczne: Używanie GPS tylko w razie potrzeby i w trybie oszczędzania energii. Zarządzanie powiadomieniami: Ograniczenie liczby powiadomień, które mogą wpływać na zużycie energii. Używanie trybu oszczędzania energii: Wiele urządzeń mobilnych ma wbudowane tryby oszczędzania energii, które ograniczają działanie aplikacji w tle.",
        "correct": true
      },
      {
        "text": "WPF (Windows Presentation Foundation) wykorzystuje XAML (Extensible Application Markup Language) do definiowania interfejsu użytkownika. XAML to deklaratywny język znaczników, który pozwala na opisanie struktury UI w sposób wizualny. Przykład: <Button Content=\"Kliknij mnie\" Click=\"OnButtonClick\"/> Tutaj definiujemy przycisk w XAML, a jego logikę obsługujemy w C# w metodzie OnButtonClick.",
        "correct": false
      },
      {
        "text": "Grafika rastrowa (np. JPEG, PNG): Składa się z pikseli. Traci jakość po powiększeniu. Nadaje się do zdjęć i realistycznych obrazów. Grafika wektorowa (np. SVG, AI): Składa się z figur geometrycznych. Można skalować bez utraty jakości. Idealna do logotypów i ikon.",
        "correct": false
      },
      {
        "text": "Wymagania niefunkcjonalne odnoszą się do jakości systemu, takich jak: Wydajność: Przykład: System powinien obsługiwać 10 000 zapytań na minutę. Skalowalność: Przykład: System powinien być w stanie obsłużyć 1 milion użytkowników. Bezpieczeństwo: Przykład: Wszystkie dane powinny być szyfrowane za pomocą algorytmu AES-256.",
        "correct": false
      }
    ]
  },
  {
    "question": "Zarządzanie zasobami aplikacji mobilnej (obrazy, dźwięki, wideo)",
    "answers": [
      {
        "text": "Aby zoptymalizować wydajność i rozmiar aplikacji: Kompresja zasobów: Kompresowanie obrazów (np. format WebP), dźwięków i plików wideo, aby zmniejszyć ich rozmiar bez utraty jakości. Używanie odpowiednich rozdzielczości: Ładowanie obrazów o odpowiednich rozdzielczościach, które są dostosowane do ekranu urządzenia. Lazy loading zasobów: Ładowanie zasobów tylko wtedy, gdy są one wymagane, zamiast ładowania ich na starcie aplikacji.",
        "correct": true
      },
      {
        "text": "Kontrola dostępu – systemy uprawnień do plików i katalogów. Szyfrowanie danych – zabezpieczenie plików przed nieautoryzowanym dostępem. Firewalle i antywirusy – ochrona przed atakami sieciowymi. Sandboxing – uruchamianie aplikacji w izolowanym środowisku. Regularne aktualizacje – łatanie luk w zabezpieczeniach.",
        "correct": false
      },
      {
        "text": "Szyfrowanie danych: Użycie szyfrowania zarówno na poziomie aplikacji (AES), jak i podczas przesyłania danych (SSL/TLS). Ochrona przed atakami Man-in-the-Middle: Użycie certyfikatów SSL/TLS do zabezpieczenia komunikacji między aplikacją a serwerem. Wykrywanie malware: Implementacja narzędzi do wykrywania złośliwego oprogramowania, jak również technik antypirackich. Bezpieczne przechowywanie danych: Unikanie przechowywania wrażliwych informacji w pamięci urządzenia, zamiast tego używanie bezpiecznych magazynów danych, takich jak Keychain (iOS) lub Keystore (Android).",
        "correct": false
      },
      {
        "text": "SSL (obecnie TLS) zapewnia szyfrowanie danych przesyłanych przez internet.\nPrzebieg transmisji: Klient i serwer uzgadniają wersję protokołu i algorytmy szyfrowania. Serwer przesyła certyfikat SSL. Klient weryfikuje certyfikat i generuje klucz sesyjny. Dane są szyfrowane i przesyłane bezpiecznym kanałem.",
        "correct": false
      }
    ]
  },
  {
    "question": "Projektowanie aplikacji mobilnej do pracy online i offline",
    "answers": [
      {
        "text": "UIKit: Tradycyjny framework UI używany w iOS. Wymaga ręcznego zarządzania hierarchią widoków i kontrolerów. Bardziej rozbudowany i elastyczny, ale ma wyższą krzywą uczenia się. SwiftUI: Nowoczesny framework oparty na deklaratywnym podejściu do tworzenia UI. Umożliwia łatwiejsze tworzenie UI poprzez deklarację stanu aplikacji i jego aktualizację. Lepsza integracja z nowymi funkcjami systemu iOS, takich jak Dark Mode i Accessibility. Korzyści i wyzwania: UIKit: Jest bardziej dojrzały, szeroko wspierany i elastyczny, ale wymaga więcej kodu do zarządzania widokami. SwiftUI: Uproszczony kod, lepsze wsparcie dla dynamicznych interfejsów, ale może mieć ograniczenia w starszych wersjach iOS (przynajmniej na początku). Preferencje: SwiftUI może być preferowany w nowych projektach, natomiast UIKit pozostaje preferowaną opcją w starszych aplikacjach, gdzie konieczne jest utrzymanie kompatybilności wstecznej.",
        "correct": false
      },
      {
        "text": "Android Studio to oficjalne środowisko programistyczne dla systemu Android. Jego główne funkcje to: Edytor kodu: Zaawansowany edytor z funkcjami automatycznego uzupełniania kodu, refaktoryzacji oraz diagnostyki błędów. Emulator Android: Umożliwia uruchomienie aplikacji na różnych wersjach Androida i urządzeniach wirtualnych. Narzędzia do debugowania: Android Studio zapewnia narzędzia do debugowania aplikacji, które pomagają śledzić błędy i analizować logi. Wbudowane narzędzia do testowania: Integracja z narzędziami do testowania, zarówno jednostkowymi, jak i UI, umożliwia sprawdzanie jakości aplikacji. Designer UI: Graficzny edytor do tworzenia interfejsów użytkownika w technologii XML oraz Jetpack Compose.",
        "correct": false
      },
      {
        "text": "Podczas budowy systemów AI kluczowe jest odpowiednie zarządzanie danymi treningowymi. Obejmuje to kilka aspektów: Gromadzenie danych – Dane powinny pochodzić z wiarygodnych i legalnych źródeł oraz być zgodne z regulacjami (np. RODO). Warto stosować techniki anonimizacji. Przechowywanie – Dane powinny być zabezpieczone przed nieautoryzowanym dostępem, a ich przechowywanie powinno uwzględniać redundancję (backupy, chmura). Przetwarzanie – Należy zadbać o jakość danych (czyszczenie, normalizacja, usuwanie błędów). Warto stosować techniki augmentacji danych w AI. Zabezpieczanie – Dane muszą być chronione przed wyciekiem (szyfrowanie, kontrola dostępu, audyty).",
        "correct": false
      },
      {
        "text": "Aby aplikacja działała efektywnie zarówno w trybie online, jak i offline: Lokalne przechowywanie danych: Używanie baz danych lokalnych (np. SQLite, CoreData), które przechowują dane offline. Synchronizacja danych: Zapewnienie mechanizmów synchronizacji, które umożliwiają przesyłanie danych na serwer, gdy połączenie jest dostępne. Zarządzanie stanem offline: Informowanie użytkownika o braku połączenia i umożliwienie kontynuowania pracy w trybie offline.",
        "correct": true
      }
    ]
  },
  {
    "question": "Modele monetyzacji aplikacji mobilnych",
    "answers": [
      {
        "text": "Magistrali – wszystkie urządzenia podłączone do jednej linii (prosta, ale awaryjna). Pierścienia – dane krążą w jednym kierunku (wydajna, ale podatna na awarie). Gwiazdy – centralny punkt (switch/router) łączy wszystkie urządzenia (popularna i bezpieczna). Siatki (mesh) – każde urządzenie może łączyć się z każdym (wysoka redundancja).",
        "correct": false
      },
      {
        "text": "Modele monetyzacji: Reklamy: Wstawianie reklam w aplikacji (np. Google AdMob). Zaletą jest brak konieczności płacenia przez użytkownika, wadą – możliwość irytowania użytkowników. Zakupy w aplikacji: Umożliwienie użytkownikom kupowania treści lub funkcji w aplikacji. Zaletą jest łatwy dostęp do dodatkowych funkcji, ale wymaga dokładnego planowania modeli cenowych. Subskrypcje: Oferowanie subskrypcji na dostęp do treści lub funkcji w aplikacji. Zaletą jest przewidywalny dochód, ale może odstraszyć użytkowników, którzy nie są gotowi na regularne płatności.",
        "correct": true
      },
      {
        "text": "Normalizacja to proces organizowania danych w bazach danych w celu eliminacji redundancji i zapewnienia integralności danych. Głównym celem normalizacji jest zmniejszenie duplikacji danych, co poprawia efektywność przechowywania i aktualizowania informacji. Pierwsza postać normalna (1NF): Zakłada, że każda kolumna w tabeli zawiera tylko pojedyncze wartości (atomowe) oraz, że wszystkie rekordy są unikalne. Dodatkowo, wszystkie atrybuty muszą być jednorodne, tzn. zawierać dane tego samego typu. Przykład (1NF): Przed normalizacją: ID | Imię | Zajęcia 1  | Jan  | Matematyka, Fizyka 2  | Anna | Historia Po normalizacji do 1NF: ID | Imię | Zajęcia 1  | Jan  | Matematyka 1  | Jan  | Fizyka 2  | Anna | Historia Druga postać normalna (2NF): Wymaga, aby spełniona była 1NF, a także, aby każda kolumna była zależna od całkowitej klucza głównego, a nie tylko od jego części. Przykład (2NF): Przed normalizacją: ID | Nazwa kursu  | Imię nauczyciela | Zajęcia 1  | Matematyka   | Jan Kowalski     | Fizyka 1  | Fizyka       | Anna Nowak       | Matematyka Po normalizacji do 2NF: Tabela 1 (Kursy): ID | Nazwa kursu 1              | Matematyka 2              | Fizyka Tabela 2 (Nauczyciele): Kurs_ID | Nauczyciel 1         | Jan Kowalski 2         | Anna Nowak Trzecia postać normalna (3NF): Wymaga, aby spełniona była 2NF, a także aby każda kolumna niekluczowa była zależna bezpośrednio od klucza głównego i nie miała zależności przechodnich (tzn. nie może być zależna od innych kolumn, które nie są kluczem głównym). Przykład (3NF): Przed normalizacją: ID | Imię | Miasto    | Kod pocztowy 1  | Jan  | Warszawa  | 00-000 2  | Anna | Kraków    | 30-000 Po normalizacji do 3NF: Tabela 1 (Osoby): ID | Imię | Miasto_ID 1                 | Jan  | 1 2                 | Anna | 2 Tabela 2 (Miasta): Miasto_ID | Miasto     | Kod pocztowy 1              | Warszawa  | 00-000 2              | Kraków    | 30-000",
        "correct": false
      },
      {
        "text": "Zbieranie danych – określenie jakości i źródła danych (np. dane medyczne, obrazy). Przetwarzanie danych – czyszczenie i normalizacja, np. usuwanie duplikatów. Wybór modelu – regresja, SVM, sieci neuronowe w zależności od problemu. Trenowanie modelu – dostosowanie wag na podstawie zbioru treningowego. Ewaluacja modelu – sprawdzanie jakości na zbiorze testowym. Optymalizacja hiperparametrów – poprawianie wydajności (np. tuning learning rate).",
        "correct": false
      }
    ]
  },
  {
    "question": "Funkcje współdzielenia zawartości w aplikacjach mobilnych",
    "answers": [
      {
        "text": "System śledzenia transakcji w bazach danych to mechanizm umożliwiający zarządzanie transakcjami w sposób zapewniający spójność, niezawodność i integralność danych. Główne cechy to: ACID (Atomicity, Consistency, Isolation, Durability): Zapewnia, że transakcje są wykonywane w sposób, który gwarantuje poprawność danych. Atomicity: Transakcja jest traktowana jako całość – albo wszystkie operacje w ramach transakcji zostaną zakończone pomyślnie, albo żadna z nich nie zostanie zastosowana. Consistency: Transakcja doprowadza system do spójnego stanu przed i po jej wykonaniu. Isolation: Transakcje są wykonywane w izolacji od siebie, co oznacza, że wyniki jednej transakcji nie są widoczne dla innych do czasu jej zakończenia. Durability: Po zakończeniu transakcji jej zmiany są trwale zapisane, nawet w przypadku awarii systemu. Problemy, które rozwiązuje: Problem braku spójności: System śledzenia transakcji zapewnia, że dane będą spójne, nawet jeśli transakcje są przerwane przez awarię. Problem nieizolowanych transakcji: Mechanizm transakcji zapewnia, że operacje nie będą się nawzajem zakłócały. Problem odzyskiwania po awarii: Zabezpiecza dane przed utratą dzięki zapewnieniu trwałości operacji.",
        "correct": false
      },
      {
        "text": "Aby zaimplementować funkcje współdzielenia zawartości: Integracja z mediami społecznościowymi: Użycie API takich jak Facebook SDK, Twitter SDK do łatwego udostępniania treści. Udostępnianie plików: Możliwość wysyłania plików za pomocą systemów udostępniania plików, takich jak AirDrop (iOS) lub Intent (Android). Tworzenie uniwersalnych przycisków udostępniania: Umożliwienie użytkownikom udostępniania treści w różnych serwisach społecznościowych bez konieczności przełączania aplikacji.",
        "correct": true
      },
      {
        "text": "Zasady teorii liczb są stosowane w mechanizmach bezpieczeństwa. Drzewa Merkle’a: Używane w blockchainie do weryfikacji integralności danych. Generatory liczb losowych: Oparte na kongruencjach liniowych, np. w szyfrowaniu strumieniowym.",
        "correct": false
      },
      {
        "text": "Zasady Human Interface Guidelines (HIG): Spójność: Zgodność z systemowym wyglądem, zapewnienie użytkownikowi intuicyjnego i spójnego doświadczenia z innymi aplikacjami i systemem. Zrozumiałość: Aplikacja powinna mieć logiczną strukturę, nawigację, a przyciski i elementy sterujące powinny być łatwe do znalezienia i używania. Czytelność: Użycie odpowiedniego rozmiaru czcionek, kontrastu oraz przestrzeni pomiędzy elementami interfejsu. Feedback: Aplikacja powinna reagować na akcje użytkownika, np. przez animacje, wibracje lub dźwięki, co zwiększa komfort użytkowania. Dostosowanie do urządzenia: UI powinno dostosować się do różnych rozdzielczości ekranów, formatu urządzenia (iPhone, iPad), oraz wykorzystać natywne gesty. Łatwość używania: Ułatwienia takie jak prostota w obsłudze aplikacji, możliwość szybkiego dostępu do głównych funkcji oraz ograniczenie złożoności interfejsu.",
        "correct": false
      }
    ]
  },
  {
    "question": "Wyzwania związane z optymalizacją aplikacji mobilnych pod kątem różnych wersji systemów operacyjnych i jak z nimi sobie radzić?",
    "answers": [
      {
        "text": "Wyzwania: Fragmentacja urządzeń: Różne wersje systemów operacyjnych, urządzenia o różnych rozdzielczościach ekranów, procesorach, pojemności pamięci itp. mogą prowadzić do problemów z kompatybilnością aplikacji. Różnice w interfejsie użytkownika: Systemy operacyjne mogą mieć różne wytyczne dotyczące interfejsu użytkownika, co wymaga dostosowania aplikacji do specyficznych wymagań platformy. Jak radzić sobie z wyzwaniami: Testowanie na różnych urządzeniach: Regularne testowanie aplikacji na różnych wersjach systemów operacyjnych i urządzeniach za pomocą emulatorów oraz rzeczywistych urządzeń. Używanie narzędzi takich jak Firebase czy TestFlight (iOS) oraz Android Emulator: Pomagają w testowaniu aplikacji na różnych wersjach systemów operacyjnych. Responsywny design: Użycie rozwiązań responsywnych, które umożliwiają dostosowanie UI do różnych rozdzielczości ekranów. Wersjonowanie kodu: Korzystanie z narzędzi do wersjonowania kodu oraz wtyczek umożliwiających wsparcie dla starszych wersji systemów operacyjnych.",
        "correct": true
      },
      {
        "text": "Techniki pozyskiwania wymagań: Wywiady: Rozmowy z interesariuszami w celu poznania ich potrzeb i oczekiwań. B2B: Wywiady z menedżerami, inżynierami, klientami B2B. B2C: Wywiady z użytkownikami indywidualnymi, badania fokusowe. Warsztaty (Workshops): Spotkania grupowe, gdzie omawia się wymagania. B2B: Warsztaty z przedstawicielami różnych działów organizacji. B2C: Warsztaty z użytkownikami, by lepiej zrozumieć ich potrzeby. Prototypowanie: Tworzenie wstępnej wersji systemu, aby zobaczyć, czy spełnia oczekiwania użytkowników. B2B: Wykorzystywane w przypadku dużych systemów B2B, np. ERP. B2C: Prototypy aplikacji mobilnych i webowych do testowania z użytkownikami. Ankiety i kwestionariusze: Zbieranie danych w formie pytań do szerokiego kręgu osób. B2B: Ankiety dla przedsiębiorstw w celu zbierania informacji o preferencjach. B2C: Kwestionariusze skierowane do użytkowników końcowych, np. aplikacji konsumenckich.",
        "correct": false
      },
      {
        "text": "Narzędzia takie jak Jira, Trello, Asana, Redmine oferują: Zarządzanie zadaniami – tworzenie i przypisywanie zadań. Harmonogramowanie – wykresy Gantta, sprinty Scrum. Śledzenie postępów – tablice Kanban. Zarządzanie dokumentacją – wiki, repozytoria kodu. Integracje z narzędziami deweloperskimi (np. GitHub, CI/CD).",
        "correct": false
      },
      {
        "text": "Komputer komunikuje się z urządzeniami poprzez sterowniki oraz interfejsy (USB, PCI, Bluetooth).\nPrzykłady: Klawiatura i mysz (wejście) → przesyłanie sygnałów przez sterownik HID. Monitor (wyjście) → karta graficzna renderuje obraz. Drukarka (wyjście) → komputer wysyła dane w formacie obsługiwanym przez drukarkę (np. PCL, PostScript).",
        "correct": false
      }
    ]
  },
  {
    "question": "Projektowanie aplikacji mobilnych z myślą o skalowalności",
    "answers": [
      {
        "text": "Silniki ORM umożliwiają mapowanie obiektów w programowaniu obiektowym na tabele w relacyjnej bazie danych, co upraszcza pracę z bazą danych w aplikacjach. Przykłady ORM: Hibernate (Java): Umożliwia mapowanie klas Java do tabel w bazach SQL, automatyzując operacje CRUD. Entity Framework (C#): Narzędzie ORM dla platformy .NET, pozwala na manipulację danymi w bazie danych przy użyciu obiektów C#. Django ORM (Python): Zintegrowane w Django ORM, umożliwia interakcję z bazą danych SQL za pomocą Pythonowych obiektów.",
        "correct": false
      },
      {
        "text": "Aby minimalizować zużycie baterii, należy: Optymalizować operacje w tle: Ograniczenie częstotliwości wykonywania operacji w tle (np. zapytań sieciowych). Wykorzystywanie lokalizacji tylko wtedy, gdy jest to konieczne: Używanie GPS tylko w razie potrzeby i w trybie oszczędzania energii. Zarządzanie powiadomieniami: Ograniczenie liczby powiadomień, które mogą wpływać na zużycie energii. Używanie trybu oszczędzania energii: Wiele urządzeń mobilnych ma wbudowane tryby oszczędzania energii, które ograniczają działanie aplikacji w tle.",
        "correct": false
      },
      {
        "text": "Złożoność czasowa określa, jak szybko rośnie czas wykonania w zależności od ilości danych. np. O(n log n) (Merge Sort) jest lepsze niż O(n²) (Bubble Sort) dla dużych zbiorów. Złożoność pamięciowa – ile pamięci zajmuje algorytm. np. DFS może być bardziej pamięciooszczędny niż BFS w niektórych sytuacjach.",
        "correct": false
      },
      {
        "text": "Aby zaprojektować aplikację mobilną, która będzie skalowalna: Modularność: Tworzenie aplikacji w sposób modularny, dzieląc ją na mniejsze komponenty. Umożliwia to łatwiejsze zarządzanie aplikacją przy wzroście liczby użytkowników. Chmurowa infrastruktura: Wykorzystanie chmurowych usług backendowych (np. AWS, Google Cloud) do przechowywania danych i obsługi logiki biznesowej, co zapewnia skalowalność. Optymalizacja zapytań sieciowych: Używanie algorytmów kompresji oraz zmniejszenie liczby zapytań do serwera w celu zminimalizowania opóźnień i zmniejszenia obciążenia serwerów. Zastosowanie CDN: Korzystanie z sieci dostarczania treści (CDN), aby przyspieszyć ładowanie zasobów aplikacji z różnych lokalizacji geograficznych. Użycie load balancerów i rozproszonych baz danych: Rozdzielanie obciążenia między serwery i stosowanie baz danych, które obsługują dużą ilość danych oraz zapewniają redundancję.",
        "correct": true
      }
    ]
  },
  {
    "question": "Android Studio i jego główne funkcje",
    "answers": [
      {
        "text": "Klasa to definicja szablonu dla obiektów, zawierająca zmienne i metody. Jest jak plan budowy domu, natomiast obiekt jest jego fizycznym odpowiednikiem. Obiekt to instancja klasy, tworzona na podstawie tej definicji, która zawiera konkretne dane. Przykład w Java: class Samochod { String model; void uruchomSilnik() { System.out.println(\"Silnik uruchomiony\"); } } Samochod auto = new Samochod(); W tym przykładzie Samochod to klasa, a auto to obiekt.",
        "correct": false
      },
      {
        "text": "Komputer komunikuje się z urządzeniami poprzez sterowniki oraz interfejsy (USB, PCI, Bluetooth).\nPrzykłady: Klawiatura i mysz (wejście) → przesyłanie sygnałów przez sterownik HID. Monitor (wyjście) → karta graficzna renderuje obraz. Drukarka (wyjście) → komputer wysyła dane w formacie obsługiwanym przez drukarkę (np. PCL, PostScript).",
        "correct": false
      },
      {
        "text": "Klasa jest definicją, która wskazuje, jakie właściwości i metody będą dostępne dla tworzonych obiektów. Obiekt to instancja klasy, która może być stworzona za pomocą słowa kluczowego new. Przykład w Java: class Samochod { String model; } Samochod auto = new Samochod(); Usuwanie obiektów w Java odbywa się automatycznie przez Garbage Collector, który zarządza pamięcią.",
        "correct": false
      },
      {
        "text": "Android Studio to oficjalne środowisko programistyczne dla systemu Android. Jego główne funkcje to: Edytor kodu: Zaawansowany edytor z funkcjami automatycznego uzupełniania kodu, refaktoryzacji oraz diagnostyki błędów. Emulator Android: Umożliwia uruchomienie aplikacji na różnych wersjach Androida i urządzeniach wirtualnych. Narzędzia do debugowania: Android Studio zapewnia narzędzia do debugowania aplikacji, które pomagają śledzić błędy i analizować logi. Wbudowane narzędzia do testowania: Integracja z narzędziami do testowania, zarówno jednostkowymi, jak i UI, umożliwia sprawdzanie jakości aplikacji. Designer UI: Graficzny edytor do tworzenia interfejsów użytkownika w technologii XML oraz Jetpack Compose.",
        "correct": true
      }
    ]
  },
  {
    "question": "Różnice między UIKit a SwiftUI w kontekście tworzenia interfejsów użytkownika",
    "answers": [
      {
        "text": "System zarządzania bazą danych (DBMS) pełni kluczową rolę w przechowywaniu, zarządzaniu i przetwarzaniu danych. Jego główne funkcje to: Przechowywanie danych: DBMS przechowuje dane w sposób uporządkowany, zapewniając łatwy dostęp. Zarządzanie dostępem: Kontroluje, kto ma dostęp do danych i w jakim zakresie (autentykacja, autoryzacja). Manipulacja danymi: Umożliwia dodawanie, modyfikowanie, usuwanie i wyszukiwanie danych. Bezpieczeństwo: Szyfrowanie, tworzenie kopii zapasowych, odzyskiwanie danych. Zarządzanie transakcjami: Obsługuje mechanizmy transakcyjne zapewniające integralność danych. Indeksowanie: Zoptymalizowane mechanizmy wyszukiwania danych.",
        "correct": false
      },
      {
        "text": "UIKit: Tradycyjny framework UI używany w iOS. Wymaga ręcznego zarządzania hierarchią widoków i kontrolerów. Bardziej rozbudowany i elastyczny, ale ma wyższą krzywą uczenia się. SwiftUI: Nowoczesny framework oparty na deklaratywnym podejściu do tworzenia UI. Umożliwia łatwiejsze tworzenie UI poprzez deklarację stanu aplikacji i jego aktualizację. Lepsza integracja z nowymi funkcjami systemu iOS, takich jak Dark Mode i Accessibility. Korzyści i wyzwania: UIKit: Jest bardziej dojrzały, szeroko wspierany i elastyczny, ale wymaga więcej kodu do zarządzania widokami. SwiftUI: Uproszczony kod, lepsze wsparcie dla dynamicznych interfejsów, ale może mieć ograniczenia w starszych wersjach iOS (przynajmniej na początku). Preferencje: SwiftUI może być preferowany w nowych projektach, natomiast UIKit pozostaje preferowaną opcją w starszych aplikacjach, gdzie konieczne jest utrzymanie kompatybilności wstecznej.",
        "correct": true
      },
      {
        "text": "Podejście Mobile First oznacza projektowanie aplikacji/webów najpierw pod urządzenia mobilne, a potem dostosowywanie do większych ekranów. Jest to ważne, bo: Większość użytkowników korzysta z internetu na smartfonach. Wpływa na SEO – Google promuje strony przyjazne mobilnie. Poprawia UX, bo eliminuje zbędne elementy i optymalizuje działanie na mniejszych ekranach.",
        "correct": false
      },
      {
        "text": "Cechy baz NoSQL: Elastyczność schematów: Brak sztywno zdefiniowanego schematu bazy danych pozwala na przechowywanie różnorodnych typów danych (np. JSON, BSON). Wysoka dostępność: NoSQL zapewnia rozproszone przechowywanie danych na wielu węzłach, co poprawia dostępność i odporność na awarie. Skalowalność: Umożliwia łatwe poziome skalowanie poprzez dodawanie nowych serwerów (sharding), co pozwala obsługiwać duże ilości danych. Replikacja: Dane mogą być replikowane na różnych serwerach, co zapewnia ich bezpieczeństwo i dostępność. Założenia rozproszenia: Partycjonowanie danych (Sharding): Dzieli dane na fragmenty (shardy), które są przechowywane na różnych serwerach, aby zwiększyć wydajność. Replikacja: NoSQL często stosuje replikację danych na różnych węzłach, co zapewnia odporność na awarie i zwiększa dostępność.",
        "correct": false
      }
    ]
  },
  {
    "question": "Rola bibliotek wsparcia wzornictwa w projektowaniu aplikacji Android",
    "answers": [
      {
        "text": "Klasa to definicja szablonu dla obiektów, zawierająca zmienne i metody. Jest jak plan budowy domu, natomiast obiekt jest jego fizycznym odpowiednikiem. Obiekt to instancja klasy, tworzona na podstawie tej definicji, która zawiera konkretne dane. Przykład w Java: class Samochod { String model; void uruchomSilnik() { System.out.println(\"Silnik uruchomiony\"); } } Samochod auto = new Samochod(); W tym przykładzie Samochod to klasa, a auto to obiekt.",
        "correct": false
      },
      {
        "text": "Biblioteki wsparcia wzornictwa w Androidzie oferują narzędzia i komponenty ułatwiające projektowanie interfejsów zgodnych z wytycznymi Material Design. Do najważniejszych funkcji należą: Zestaw komponentów UI: Takich jak widżety przycisków, przełączników, pasków narzędzi, które pozwalają na spójne projektowanie aplikacji. Material Theming: Umożliwia łatwe dostosowanie wyglądu aplikacji poprzez palety kolorów, style typografii i kształty elementów UI. Gesty i animacje: Ułatwiają dodawanie animacji, jak przejścia między ekranami czy efekty dotykowe, które poprawiają interaktywność aplikacji. Zgodność z wersjami Androida: Zapewniają wsparcie dla różnych wersji systemu Android, co pozwala na tworzenie spójnego UI, niezależnie od wersji OS.",
        "correct": true
      },
      {
        "text": "Programy komputerowe są chronione jako utwory literackie w ramach prawa autorskiego. Oznacza to, że autorzy mają wyłączne prawa do kopi owania, modyfikowania i dystrybucji kodu.\nTypy licencji oprogramowania: Proprietary (zamknięte) – np. Windows, Photoshop – użytkownik może korzystać, ale nie ma dostępu do kodu źródłowego. Open Source (otwarte) – np. Linux, Firefox – kod jest dostępny dla wszystkich, ale licencje określają warunki użytkowania (np. GPL, MIT). Freeware, Shareware, Trial – darmowe lub czasowo ograniczone wersje programów.\nKonsekwencje naruszeń: Mogą obejmować kary finansowe, odpowiedzialność cywilną i karną oraz wykluczenie z rynku.",
        "correct": false
      },
      {
        "text": "Maska podsieci określa, która część adresu IP jest siecią, a która urządzeniem. Cel – Dzieli sieć na mniejsze podsieci, zwiększając efektywność adresowania. Przykład – Maska 255.255.255.0 oznacza, że pierwsze trzy bajty IP to adres sieci, a ostatni to urządzenie.",
        "correct": false
      }
    ]
  },
  {
    "question": "Rodzaje testów w testowaniu aplikacji mobilnych",
    "answers": [
      {
        "text": "Szyfrowanie symetryczne – Używa jednego klucza do szyfrowania i deszyfrowania (np. AES). Zalety: szybkie, wydajne. Wady: problem z bezpiecznym przekazaniem klucza. Szyfrowanie asymetryczne – Używa dwóch kluczy: publicznego i prywatnego (np. RSA). Zalety: bezpieczniejsze przy wymianie danych. Wady: wolniejsze niż szyfrowanie symetryczne.",
        "correct": false
      },
      {
        "text": "Testy jednostkowe (Unit tests): Testowanie poszczególnych funkcji i metod aplikacji w celu sprawdzenia, czy działają one zgodnie z oczekiwaniami. Testy integracyjne (Integration tests): Testowanie interakcji pomiędzy różnymi modułami lub komponentami aplikacji. Testy funkcjonalne (Functional tests): Sprawdzanie, czy aplikacja działa zgodnie z wymaganiami i specyfikacjami. Testy UI (User Interface tests): Testowanie interakcji użytkownika z aplikacją, sprawdzanie, czy elementy UI są odpowiednio rozmieszczone i czy są intuicyjne. Testy wydajnościowe (Performance tests): Mierzenie szybkości działania aplikacji, jej odpowiedzi na różne operacje, np. ładowanie danych. Testy bezpieczeństwa (Security tests): Sprawdzanie, czy aplikacja jest odporna na ataki i zapewnia bezpieczeństwo danych użytkownika.",
        "correct": true
      },
      {
        "text": "Tworzenie nowych klas poprzez dziedziczenie z istniejących klas pozwala na reużywanie kodu, co upraszcza organizację programu. Dziedziczenie wspomaga tworzenie hierarchii klas, w których klasy dziedziczą właściwości i metody innych klas. Techniki: Dziedziczenie pojedyncze: Klasa pochodna dziedziczy po jednej klasie bazowej. Dziedziczenie wielokrotne (w językach wspierających): Klasa pochodna dziedziczy po wielu klasach. Zalety: Redukcja powtarzalności kodu. Ułatwienie rozwoju programu przez dodawanie nowych funkcji bez zmiany istniejącego kodu.",
        "correct": false
      },
      {
        "text": "Aby minimalizować zużycie baterii, należy: Optymalizować operacje w tle: Ograniczenie częstotliwości wykonywania operacji w tle (np. zapytań sieciowych). Wykorzystywanie lokalizacji tylko wtedy, gdy jest to konieczne: Używanie GPS tylko w razie potrzeby i w trybie oszczędzania energii. Zarządzanie powiadomieniami: Ograniczenie liczby powiadomień, które mogą wpływać na zużycie energii. Używanie trybu oszczędzania energii: Wiele urządzeń mobilnych ma wbudowane tryby oszczędzania energii, które ograniczają działanie aplikacji w tle.",
        "correct": false
      }
    ]
  },
  {
    "question": "Najlepsze praktyki w zakresie testowania aplikacji iOS",
    "answers": [
      {
        "text": "Firewalle filtrują ruch sieciowy na podstawie reguł (np. IP, porty, protokoły). Mogą być sprzętowe lub programowe.\nOgraniczenia: Nie chronią przed atakami wewnętrznymi. Nie zabezpieczają przed phishingiem. Mogą blokować legalne usługi przy błędnej konfiguracji.",
        "correct": false
      },
      {
        "text": "Aby zoptymalizować wydajność i rozmiar aplikacji: Kompresja zasobów: Kompresowanie obrazów (np. format WebP), dźwięków i plików wideo, aby zmniejszyć ich rozmiar bez utraty jakości. Używanie odpowiednich rozdzielczości: Ładowanie obrazów o odpowiednich rozdzielczościach, które są dostosowane do ekranu urządzenia. Lazy loading zasobów: Ładowanie zasobów tylko wtedy, gdy są one wymagane, zamiast ładowania ich na starcie aplikacji.",
        "correct": false
      },
      {
        "text": "Testy jednostkowe: Używanie frameworków takich jak XCTest do testowania poszczególnych funkcji i metod aplikacji. Testy UI: Automatyzacja testów UI za pomocą narzędzi takich jak XCUITest do interakcji z interfejsem aplikacji. Mockowanie danych: Używanie mocków i stubów do symulacji danych, które aplikacja przetwarza. Continuous Integration (CI): Używanie narzędzi CI, takich jak Jenkins lub Bitrise, do automatyzacji testów podczas każdego commita w kodzie. Testy wydajnościowe: Używanie narzędzi takich jak Instruments w Xcode, które pozwala na śledzenie użycia CPU, pamięci, animacji i renderowania UI w aplikacji.",
        "correct": true
      },
      {
        "text": "Wzorce projektowe to sprawdzone, powtarzalne rozwiązania dla najczęstszych problemów projektowych w inżynierii oprogramowania. Pomagają w tworzeniu elastycznych, skalowalnych i łatwych do utrzymania systemów. Rodzaje wzorców: Creational (tworzeniowe): Wzorce służące do tworzenia obiektów, np. Factory Method. Structural (strukturalne): Wzorce organizujące klasy i obiekty, np. Adapter. Behavioral (behawioralne): Wzorce definiujące komunikację między obiektami, np. Observer.",
        "correct": false
      }
    ]
  },
  {
    "question": "Testowanie aplikacji mobilnych – narzędzia i podejścia",
    "answers": [
      {
        "text": "Podejście Mobile First oznacza projektowanie aplikacji/webów najpierw pod urządzenia mobilne, a potem dostosowywanie do większych ekranów. Jest to ważne, bo: Większość użytkowników korzysta z internetu na smartfonach. Wpływa na SEO – Google promuje strony przyjazne mobilnie. Poprawia UX, bo eliminuje zbędne elementy i optymalizuje działanie na mniejszych ekranach.",
        "correct": false
      },
      {
        "text": "Testy jednostkowe: Narzędzia takie jak JUnit (Android) lub XCTest (iOS) do testowania pojedynczych funkcji. Testy integracyjne: Użycie testów integracyjnych do sprawdzania poprawności działania aplikacji z backendem oraz integracji z bazami danych. Testy UI: Narzędzia jak Espresso (Android) i XCUITest (iOS) umożliwiają automatyczne testowanie interakcji użytkownika z aplikacją. Symulowanie różnych scenariuszy: Korzystanie z emulatorów i rzeczywistych urządzeń, aby testować aplikację w różnych warunkach (np. w trybie offline).",
        "correct": true
      },
      {
        "text": "Etapy inżynierii oprogramowania: Analiza wymagań: Zbieranie i analizowanie wymagań systemu. Artefakty: Dokument wymagań, analiza interesariuszy, przypadki użycia. Projektowanie systemu: Tworzenie ogólnej architektury i szczegółowego projektu systemu. Artefakty: Diagramy UML, dokumentacja architektury, prototypy interfejsu użytkownika. Implementacja: Programowanie systemu zgodnie z zaprojektowaną architekturą. Artefakty: Kod źródłowy, dokumentacja kodu, testy jednostkowe. Testowanie: Weryfikacja i walidacja systemu pod kątem błędów i spełnienia wymagań. Artefakty: Raporty z testów, plany testów, dokumentacja błędów. Utrzymanie: Dbanie o system po wdrożeniu, usuwanie błędów i wdrażanie nowych funkcjonalności. Artefakty: Zgłoszenia błędów, poprawki do kodu, dokumentacja aktualizacji.",
        "correct": false
      },
      {
        "text": "IDS (Intrusion Detection System) – monitoruje sieć i wykrywa potencjalne ataki, ale nie blokuje ich. IPS (Intrusion Prevention System) – działa aktywnie, wykrywa i blokuje ataki w czasie rzeczywistym.\nDziałają na zasadzie analizy sygnatur lub anomalii ruchu sieciowego.",
        "correct": false
      }
    ]
  },
  {
    "question": "Dostępność aplikacji mobilnej – wytyczne WCAG",
    "answers": [
      {
        "text": "System zarządzania bazą danych (DBMS) pełni kluczową rolę w przechowywaniu, zarządzaniu i przetwarzaniu danych. Jego główne funkcje to: Przechowywanie danych: DBMS przechowuje dane w sposób uporządkowany, zapewniając łatwy dostęp. Zarządzanie dostępem: Kontroluje, kto ma dostęp do danych i w jakim zakresie (autentykacja, autoryzacja). Manipulacja danymi: Umożliwia dodawanie, modyfikowanie, usuwanie i wyszukiwanie danych. Bezpieczeństwo: Szyfrowanie, tworzenie kopii zapasowych, odzyskiwanie danych. Zarządzanie transakcjami: Obsługuje mechanizmy transakcyjne zapewniające integralność danych. Indeksowanie: Zoptymalizowane mechanizmy wyszukiwania danych.",
        "correct": false
      },
      {
        "text": "Aplikacje natywne: Działają na określonej platformie (iOS, Android). Wysoka wydajność i dostęp do pełnej funkcjonalności urządzenia. Wymagają osobnych wersji dla każdej platformy. Aplikacje hybrydowe: Kombinacja aplikacji natywnych i webowych. Jedna baza kodu dla wielu platform. Mniejsza wydajność w porównaniu z aplikacjami natywnymi. Aplikacje wieloplatformowe: Pisane raz i uruchamiane na wielu platformach (np. Xamarin, React Native). Oferują kompromis między wydajnością a oszczędnością czasu rozwoju. Zagadnienia dla kierunku Informatyka, specjalność: Aplikacje mobilne i bazy danych",
        "correct": false
      },
      {
        "text": "Wytyczne WCAG (Web Content Accessibility Guidelines): Pomagają w tworzeniu aplikacji dostępnych dla osób z niepełnosprawnościami. Użycie odpowiednich kontrastów: Zapewnienie odpowiednich kontrastów kolorów w interfejsie. Wspieranie narracji głosowej: Wykorzystanie VoiceOver (iOS) i TalkBack (Android) dla osób niewidomych. Ułatwienia w nawigacji: Umożliwienie nawigacji za pomocą klawiatury lub innych urządzeń wspomagających. Skalowanie tekstów: Zapewnienie opcji powiększania tekstu w aplikacji.",
        "correct": true
      },
      {
        "text": "Uczenie nadzorowane: Dane treningowe zawierają etykiety. Zastosowanie: klasyfikacja (np. rozpoznawanie twarzy), regresja. Uczenie nienadzorowane: Model sam znajduje wzorce w danych. Zastosowanie: klasteryzacja (np. segmentacja klientów w e-commerce).",
        "correct": false
      }
    ]
  },
  {
    "question": "Projektowanie intuicyjnego i responsywnego UI",
    "answers": [
      {
        "text": "Silne hasła – unikanie prostych kombinacji, używanie menedżerów haseł. Aktualizacje oprogramowania – usuwanie luk w zabezpieczeniach. Zasada najmniejszych uprawnień – użytkownicy powinni mieć tylko niezbędne uprawnienia. Kopia zapasowa (backup) – ochrona przed awariami i ransomware. Unikanie publicznych sieci Wi-Fi – korzystanie z VPN w przypadku łączenia się w niezaufanych sieciach. Edukacja użytkowników – szkolenia z cyberbezpieczeństwa.",
        "correct": false
      },
      {
        "text": "Silniki ORM umożliwiają mapowanie obiektów w programowaniu obiektowym na tabele w relacyjnej bazie danych, co upraszcza pracę z bazą danych w aplikacjach. Przykłady ORM: Hibernate (Java): Umożliwia mapowanie klas Java do tabel w bazach SQL, automatyzując operacje CRUD. Entity Framework (C#): Narzędzie ORM dla platformy .NET, pozwala na manipulację danymi w bazie danych przy użyciu obiektów C#. Django ORM (Python): Zintegrowane w Django ORM, umożliwia interakcję z bazą danych SQL za pomocą Pythonowych obiektów.",
        "correct": false
      },
      {
        "text": "Responsywny design: Użycie technik takich jak Auto Layout (iOS) czy ConstraintLayout (Android) do dostosowania układu do różnych rozmiarów ekranów. Testowanie na różnych urządzeniach: Regularne testowanie aplikacji na różnych urządzeniach o różnych rozdzielczościach ekranów. Minimalizm w designie: Prosty, przejrzysty design z jasnymi i łatwymi do zrozumienia interakcjami. Interaktywne elementy: Używanie animacji i przejść w sposób, który poprawia użyteczność i wrażenia użytkownika.",
        "correct": true
      },
      {
        "text": "Wyzwania: Wydajność: Agregowanie dużych zbiorów danych może prowadzić do dużego obciążenia serwera, zwłaszcza w przypadku operacji takich jak JOIN, GROUP BY, HAVING przy dużych tabelach. Poprawność danych: Złożone zapytania mogą prowadzić do błędnych wyników, jeśli dane nie są poprawnie zgrupowane lub zapytania są źle zoptymalizowane. Optymalizacja: Zapytania wymagające agregacji mogą spowalniać aplikację. Rozwiązaniem jest stosowanie indeksów, ograniczanie liczby agregacji na dużych tabelach oraz wykorzystywanie zapytań z limitami. Zalecane rozwiązania: Indeksy: Stosowanie indeksów na kolumnach, które są używane w zapytaniach agregujących. Optymalizacja zapytań: Zoptymalizowanie zapytań, np. przez użycie LIMIT lub dzielenie zapytań na mniejsze operacje, aby zmniejszyć obciążenie serwera. Cache'owanie wyników: Wykorzystanie cache'owania wyników dla zapytań agregujących, zwłaszcza dla danych, które rzadko się zmieniają.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jak zapewnić, aby aplikacja mobilna była zgodna z trendami UX/UI, takimi jak dark mode, gesty nawigacyjne czy minimalistyczny design?",
    "answers": [
      {
        "text": "Aby aplikacja była zgodna z nowoczesnymi trendami UX/UI: Dark Mode: Implementacja trybu ciemnego zgodnie z wytycznymi systemów operacyjnych (np. iOS i Android). Użycie systemowych trybów zmiany motywów (np. UIUserInterfaceStyle w iOS) pozwala na łatwą implementację, która będzie zmieniać wygląd aplikacji w zależności od preferencji użytkownika. Gesty nawigacyjne: Integracja gestów takich jak przewijanie, przesuwanie, czy gesty dotykowe (np. Swipe, Tap, Pinch) do nawigacji, które poprawiają interakcję użytkownika. Należy również zadbać o ich spójność z systemem operacyjnym, aby uniknąć konfliktów z wbudowanymi gestami. Minimalistyczny design: Redukowanie elementów graficznych do niezbędnego minimum, co poprawia czytelność i nawigację. Zastosowanie dużych czcionek, prostych ikon oraz eliminacja zbędnych animacji zwiększa efektywność UX.",
        "correct": true
      },
      {
        "text": "Aplikacje natywne: Działają na określonej platformie (iOS, Android). Wysoka wydajność i dostęp do pełnej funkcjonalności urządzenia. Wymagają osobnych wersji dla każdej platformy. Aplikacje hybrydowe: Kombinacja aplikacji natywnych i webowych. Jedna baza kodu dla wielu platform. Mniejsza wydajność w porównaniu z aplikacjami natywnymi. Aplikacje wieloplatformowe: Pisane raz i uruchamiane na wielu platformach (np. Xamarin, React Native). Oferują kompromis między wydajnością a oszczędnością czasu rozwoju. Zagadnienia dla kierunku Informatyka, specjalność: Aplikacje mobilne i bazy danych",
        "correct": false
      },
      {
        "text": "Testy jednostkowe (Unit tests): Testowanie poszczególnych funkcji i metod aplikacji w celu sprawdzenia, czy działają one zgodnie z oczekiwaniami. Testy integracyjne (Integration tests): Testowanie interakcji pomiędzy różnymi modułami lub komponentami aplikacji. Testy funkcjonalne (Functional tests): Sprawdzanie, czy aplikacja działa zgodnie z wymaganiami i specyfikacjami. Testy UI (User Interface tests): Testowanie interakcji użytkownika z aplikacją, sprawdzanie, czy elementy UI są odpowiednio rozmieszczone i czy są intuicyjne. Testy wydajnościowe (Performance tests): Mierzenie szybkości działania aplikacji, jej odpowiedzi na różne operacje, np. ładowanie danych. Testy bezpieczeństwa (Security tests): Sprawdzanie, czy aplikacja jest odporna na ataki i zapewnia bezpieczeństwo danych użytkownika.",
        "correct": false
      },
      {
        "text": "Zasady teorii liczb są stosowane w mechanizmach bezpieczeństwa. Drzewa Merkle’a: Używane w blockchainie do weryfikacji integralności danych. Generatory liczb losowych: Oparte na kongruencjach liniowych, np. w szyfrowaniu strumieniowym.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jak zapewnić, aby aplikacja mobilna była przyjazna dla użytkowników starszych, uwzględniając ich specyficzne potrzeby i preferencje dotyczące interfejsu użytkownika?",
    "answers": [
      {
        "text": "Podejście obiektowe (OOP): Uwarunkowania: Stosowane w przypadku systemów, które wymagają dużej elastyczności, rozwoju i ponownego wykorzystania kodu. Dobre dla aplikacji złożonych, które muszą być łatwe w utrzymaniu i rozszerzaniu. Przykład: Programy oparte na aplikacjach mobilnych i rozbudowanych systemach informatycznych. Podejście strukturalne: Uwarunkowania: Skierowane na proste, sekwencyjne operacje, gdzie kod jest bardziej liniowy i łatwiejszy do zrozumienia w mniejszych projektach. Przykład: Systemy wbudowane, proste aplikacje desktopowe.",
        "correct": false
      },
      {
        "text": "Wyzwania: Fragmentacja urządzeń: Różne wersje systemów operacyjnych, urządzenia o różnych rozdzielczościach ekranów, procesorach, pojemności pamięci itp. mogą prowadzić do problemów z kompatybilnością aplikacji. Różnice w interfejsie użytkownika: Systemy operacyjne mogą mieć różne wytyczne dotyczące interfejsu użytkownika, co wymaga dostosowania aplikacji do specyficznych wymagań platformy. Jak radzić sobie z wyzwaniami: Testowanie na różnych urządzeniach: Regularne testowanie aplikacji na różnych wersjach systemów operacyjnych i urządzeniach za pomocą emulatorów oraz rzeczywistych urządzeń. Używanie narzędzi takich jak Firebase czy TestFlight (iOS) oraz Android Emulator: Pomagają w testowaniu aplikacji na różnych wersjach systemów operacyjnych. Responsywny design: Użycie rozwiązań responsywnych, które umożliwiają dostosowanie UI do różnych rozdzielczości ekranów. Wersjonowanie kodu: Korzystanie z narzędzi do wersjonowania kodu oraz wtyczek umożliwiających wsparcie dla starszych wersji systemów operacyjnych.",
        "correct": false
      },
      {
        "text": "(Szczegóły powtórzone w punkcie 25)",
        "correct": false
      },
      {
        "text": "Aby aplikacja była przyjazna dla starszych użytkowników: Duża czcionka i kontrast: Zapewnienie dużych i czytelnych czcionek oraz wysokiego kontrastu, by poprawić czytelność. Prosty, intuicyjny interfejs: Stosowanie prostych i zrozumiałych interakcji, unikanie nadmiernej liczby opcji na ekranie. Pomocne może być użycie jednego ekranu głównego z wyraźnymi przyciskami do podstawowych funkcji. Zwiększona responsywność dotyku: Ułatwienie obsługi aplikacji osobom z ograniczoną sprawnością motoryczną poprzez większe przyciski i obszary dotykowe. Integracja z funkcjami systemowymi: Wykorzystanie funkcji systemowych takich jak Zoom, VoiceOver (iOS) czy TalkBack (Android) do poprawy dostępności aplikacji. Instrukcje i wsparcie: Proste, zrozumiałe komunikaty i dostępność samouczków lub wsparcia na każdym etapie korzystania z aplikacji.",
        "correct": true
      }
    ]
  },
  {
    "question": "Kluczowe zasady projektowania UI/UX w aplikacjach iOS i wpływ Human Interface Guidelines (HIG) Apple na projektowanie",
    "answers": [
      {
        "text": "Optymalizacja funkcji kosztu w AI – gradient descent używa pochodnych do minimalizacji błędów w sieciach neuronowych. Analiza szybkości zmian – różniczkowanie pomaga w dynamicznym sterowaniu systemami. Interpolacja i aproksymacja – całkowanie pozwala modelować złożone funkcje w analizie danych.",
        "correct": false
      },
      {
        "text": "Upstream branch w systemie kontroli wersji Git to gałąź, która jest połączona z zdalnym repozytorium, na przykład z serwerem GitHub. Aby skonfigurować upstream branch, używamy komendy: git push --set-upstream origin nazwa_gałęzi Można również nadać inną nazwę gałęzi w repozytorium zdalnym: git push --set-upstream origin lokalna_gałąź:inna_nazwa_zdalna To zapewnia, że gałąź w repozytorium lokalnym jest powiązana z odpowiednią gałęzią zdalną.",
        "correct": false
      },
      {
        "text": "Zasady Human Interface Guidelines (HIG): Spójność: Zgodność z systemowym wyglądem, zapewnienie użytkownikowi intuicyjnego i spójnego doświadczenia z innymi aplikacjami i systemem. Zrozumiałość: Aplikacja powinna mieć logiczną strukturę, nawigację, a przyciski i elementy sterujące powinny być łatwe do znalezienia i używania. Czytelność: Użycie odpowiedniego rozmiaru czcionek, kontrastu oraz przestrzeni pomiędzy elementami interfejsu. Feedback: Aplikacja powinna reagować na akcje użytkownika, np. przez animacje, wibracje lub dźwięki, co zwiększa komfort użytkowania. Dostosowanie do urządzenia: UI powinno dostosować się do różnych rozdzielczości ekranów, formatu urządzenia (iPhone, iPad), oraz wykorzystać natywne gesty. Łatwość używania: Ułatwienia takie jak prostota w obsłudze aplikacji, możliwość szybkiego dostępu do głównych funkcji oraz ograniczenie złożoności interfejsu.",
        "correct": true
      },
      {
        "text": "Waterfall – sztywna struktura, każda faza projektu (analiza, projektowanie, implementacja, testowanie) jest wykonywana po kolei. Dobra dla dużych projektów z jasno określonymi wymaganiami. Agile (Scrum, Kanban) – elastyczne podejście, iteracyjne, szybkie dostosowywanie do zmian. Scrum wykorzystuje sprinty, a Kanban pozwala na ciągły przepływ zadań.\nKiedy stosować? Waterfall – projekty rządowe, medyczne, gdzie wymagania są stałe. Agile – dynamiczne projekty IT, startupy, aplikacje webowe.",
        "correct": false
      }
    ]
  },
  {
    "question": "Wyzwania związane z wydajnością oraz poprawnością danych przy funkcjach agregujących w złożonych zapytaniach bazodanowych",
    "answers": [
      {
        "text": "Wyzwania: Wydajność: Agregowanie dużych zbiorów danych może prowadzić do dużego obciążenia serwera, zwłaszcza w przypadku operacji takich jak JOIN, GROUP BY, HAVING przy dużych tabelach. Poprawność danych: Złożone zapytania mogą prowadzić do błędnych wyników, jeśli dane nie są poprawnie zgrupowane lub zapytania są źle zoptymalizowane. Optymalizacja: Zapytania wymagające agregacji mogą spowalniać aplikację. Rozwiązaniem jest stosowanie indeksów, ograniczanie liczby agregacji na dużych tabelach oraz wykorzystywanie zapytań z limitami. Zalecane rozwiązania: Indeksy: Stosowanie indeksów na kolumnach, które są używane w zapytaniach agregujących. Optymalizacja zapytań: Zoptymalizowanie zapytań, np. przez użycie LIMIT lub dzielenie zapytań na mniejsze operacje, aby zmniejszyć obciążenie serwera. Cache'owanie wyników: Wykorzystanie cache'owania wyników dla zapytań agregujących, zwłaszcza dla danych, które rzadko się zmieniają.",
        "correct": true
      },
      {
        "text": "Responsywny design: Użycie technik takich jak Auto Layout (iOS) czy ConstraintLayout (Android) do dostosowania układu do różnych rozmiarów ekranów. Testowanie na różnych urządzeniach: Regularne testowanie aplikacji na różnych urządzeniach o różnych rozdzielczościach ekranów. Minimalizm w designie: Prosty, przejrzysty design z jasnymi i łatwymi do zrozumienia interakcjami. Interaktywne elementy: Używanie animacji i przejść w sposób, który poprawia użyteczność i wrażenia użytkownika.",
        "correct": false
      },
      {
        "text": "Definicja problemu – jasne określenie celu. Analiza danych wejściowych i wyjściowych – określenie struktur danych. Projektowanie algorytmu – wybór metody rozwiązania (np. rekurencja, programowanie dynamiczne). Analiza złożoności – ocena wydajności (czas/pamięć). Implementacja i testowanie – sprawdzenie poprawności działania. Optymalizacja – ulepszanie algorytmu dla lepszej efektywności.",
        "correct": false
      },
      {
        "text": "Język zapytań do baz danych (SQL) to język służący do komunikacji z bazami danych, umożliwiający wykonywanie operacji na danych. Składniki: DML (Data Manipulation Language): Służy do manipulacji danymi (np. SELECT, INSERT, UPDATE, DELETE). DDL (Data Definition Language): Służy do definiowania struktury bazy danych (np. CREATE, ALTER, DROP). DCL (Data Control Language): Służy do kontrolowania dostępu do danych (np. GRANT, REVOKE). TCL (Transaction Control Language): Zarządza transakcjami (np. COMMIT, ROLLBACK). Przeznaczenie: SQL jest używany do zarządzania bazami danych, pobierania, modyfikowania, dodawania i usuwania danych.",
        "correct": false
      }
    ]
  },
  {
    "question": "Główne cechy baz danych typu NoSQL ze szczególnym uwzględnieniem założeń dotyczących ich rozproszenia",
    "answers": [
      {
        "text": "Silniki ORM umożliwiają mapowanie obiektów w programowaniu obiektowym na tabele w relacyjnej bazie danych, co upraszcza pracę z bazą danych w aplikacjach. Przykłady ORM: Hibernate (Java): Umożliwia mapowanie klas Java do tabel w bazach SQL, automatyzując operacje CRUD. Entity Framework (C#): Narzędzie ORM dla platformy .NET, pozwala na manipulację danymi w bazie danych przy użyciu obiektów C#. Django ORM (Python): Zintegrowane w Django ORM, umożliwia interakcję z bazą danych SQL za pomocą Pythonowych obiektów.",
        "correct": false
      },
      {
        "text": "Polimorfizm to cecha programowania obiektowego, która pozwala na wykorzystanie tej samej metody w różnych klasach. Pozwala to na elastyczność i ponowne użycie kodu. Przykład w Java: class Zwierze { void dzwiek() { System.out.println(\"Dźwięk zwierzęcia\"); } } class Kot extends Zwierze { void dzwiek() { System.out.println(\"Miau\"); } } Polimorfizm pozwala na to, by obiekt Kot zachowywał się zgodnie z własną implementacją metody dzwiek(), nawet jeśli jego typ to Zwierze.",
        "correct": false
      },
      {
        "text": "Cechy baz NoSQL: Elastyczność schematów: Brak sztywno zdefiniowanego schematu bazy danych pozwala na przechowywanie różnorodnych typów danych (np. JSON, BSON). Wysoka dostępność: NoSQL zapewnia rozproszone przechowywanie danych na wielu węzłach, co poprawia dostępność i odporność na awarie. Skalowalność: Umożliwia łatwe poziome skalowanie poprzez dodawanie nowych serwerów (sharding), co pozwala obsługiwać duże ilości danych. Replikacja: Dane mogą być replikowane na różnych serwerach, co zapewnia ich bezpieczeństwo i dostępność. Założenia rozproszenia: Partycjonowanie danych (Sharding): Dzieli dane na fragmenty (shardy), które są przechowywane na różnych serwerach, aby zwiększyć wydajność. Replikacja: NoSQL często stosuje replikację danych na różnych węzłach, co zapewnia odporność na awarie i zwiększa dostępność.",
        "correct": true
      },
      {
        "text": "Etapy inżynierii oprogramowania: Analiza wymagań: Zbieranie i analizowanie wymagań systemu. Artefakty: Dokument wymagań, analiza interesariuszy, przypadki użycia. Projektowanie systemu: Tworzenie ogólnej architektury i szczegółowego projektu systemu. Artefakty: Diagramy UML, dokumentacja architektury, prototypy interfejsu użytkownika. Implementacja: Programowanie systemu zgodnie z zaprojektowaną architekturą. Artefakty: Kod źródłowy, dokumentacja kodu, testy jednostkowe. Testowanie: Weryfikacja i walidacja systemu pod kątem błędów i spełnienia wymagań. Artefakty: Raporty z testów, plany testów, dokumentacja błędów. Utrzymanie: Dbanie o system po wdrożeniu, usuwanie błędów i wdrażanie nowych funkcjonalności. Artefakty: Zgłoszenia błędów, poprawki do kodu, dokumentacja aktualizacji.",
        "correct": false
      }
    ]
  },
  {
    "question": "Mechanizmy zapewniania bezpieczeństwa i niezawodności w systemach zarządzania bazami danych",
    "answers": [
      {
        "text": "Indeksowanie: Tworzenie odpowiednich indeksów na kolumnach, które są używane w zapytaniach. Optymalizacja zapytań: Używanie EXPLAIN w SQL do analizy zapytań i identyfikowania nieoptymalnych operacji. Cache'owanie wyników: Przechowywanie często używanych wyników zapytań w pamięci podręcznej. Sharding i replikacja: Dzielnie danych na różne serwery w celu zwiększenia dostępności i wydajności.",
        "correct": false
      },
      {
        "text": "Enkapsulacja to technika w programowaniu obiektowym polegająca na ukrywaniu szczegółów implementacji klasy i udostępnianiu tylko niezbędnych metod lub zmiennych do interakcji z obiektem. Dzięki temu kontrolujemy dostęp do danych i metod, co zapewnia bezpieczeństwo i łatwiejsze zarządzanie kodem. Zalety: Ochrona danych przed nieautoryzowanym dostępem. Łatwiejsze utrzymanie kodu, ponieważ zmiany wewnętrzne w klasie nie wpływają na jej zewnętrzne wykorzystanie. Przykład w Java: class BankAccount { private double saldo; public void deposit(double amount) { if (amount > 0) saldo += amount; } public double getSaldo() { return saldo; } }",
        "correct": false
      },
      {
        "text": "Mechanizmy zapewniające bezpieczeństwo: Autoryzacja i uwierzytelnianie: Stosowanie systemów autoryzacji (np. Role-Based Access Control - RBAC) i szyfrowania danych. Szyfrowanie: Używanie szyfrowania danych w spoczynku (np. AES) oraz szyfrowanie komunikacji z bazą danych (SSL/TLS). Audit log: Rejestrowanie operacji na bazie danych w celu monitorowania i wykrywania podejrzanych działań. Kontrola dostępu: Stosowanie uprawnień na poziomie tabel, rekordów oraz operacji (np. SELECT, INSERT). Mechanizmy niezawodności: Transakcje ACID: Zapewnienie integralności danych za pomocą transakcji, które gwarantują atomowość, spójność, izolację i trwałość. Replikacja: Duplikowanie danych na różnych serwerach w celu zapewnienia dostępności w przypadku awarii. Backup i odzyskiwanie: Regularne wykonywanie kopii zapasowych bazy danych oraz testowanie procesu odzyskiwania danych.",
        "correct": true
      },
      {
        "text": "Aby zaimplementować funkcje współdzielenia zawartości: Integracja z mediami społecznościowymi: Użycie API takich jak Facebook SDK, Twitter SDK do łatwego udostępniania treści. Udostępnianie plików: Możliwość wysyłania plików za pomocą systemów udostępniania plików, takich jak AirDrop (iOS) lub Intent (Android). Tworzenie uniwersalnych przycisków udostępniania: Umożliwienie użytkownikom udostępniania treści w różnych serwisach społecznościowych bez konieczności przełączania aplikacji.",
        "correct": false
      }
    ]
  },
  {
    "question": "Główne cechy baz danych typu NoSQL – rozproszenie",
    "answers": [
      {
        "text": "Rejestr w Windows to baza danych przechowująca ustawienia systemu i aplikacji. 🔹 Główne gałęzie rejestru: HKEY_CLASSES_ROOT – informacje o typach plików i rozszerzeniach. HKEY_CURRENT_USER – ustawienia użytkownika. HKEY_LOCAL_MACHINE – globalne ustawienia systemu. HKEY_USERS – profile użytkowników. HKEY_CURRENT_CONFIG – informacje o aktualnej konfiguracji sprzętowej.",
        "correct": false
      },
      {
        "text": "(Szczegóły powtórzone w punkcie 25)",
        "correct": true
      },
      {
        "text": "Aby zaimplementować funkcje współdzielenia zawartości: Integracja z mediami społecznościowymi: Użycie API takich jak Facebook SDK, Twitter SDK do łatwego udostępniania treści. Udostępnianie plików: Możliwość wysyłania plików za pomocą systemów udostępniania plików, takich jak AirDrop (iOS) lub Intent (Android). Tworzenie uniwersalnych przycisków udostępniania: Umożliwienie użytkownikom udostępniania treści w różnych serwisach społecznościowych bez konieczności przełączania aplikacji.",
        "correct": false
      },
      {
        "text": "W aplikacjach mobilnych zarządzanie pamięcią jest kluczowym elementem optymalizacji, ponieważ urządzenia mobilne mają ograniczone zasoby. Główne metody zarządzania pamięcią to: Garbage Collection (GC): Systemy operacyjne, takie jak Android i iOS, automatycznie zarządzają pamięcią za pomocą GC, który usuwa nieużywane obiekty z pamięci. Programista nie musi manualnie zwalniać pamięci, ale musi zadbać o unikanie wycieków pamięci. Zarządzanie zasobami: Programiści muszą dbać o poprawne zwalnianie zasobów, takich jak obrazy, pliki wideo czy połączenia sieciowe, aby uniknąć wycieków pamięci. Zarządzanie pamięcią podręczną: Używanie pamięci podręcznej do przechowywania danych, takich jak obrazy czy dane z sieci, aby zmniejszyć liczbę operacji I/O i zaoszczędzić pamięć. Ograniczanie liczby obiektów: Optymalizacja alokacji pamięci poprzez minimalizowanie liczby tworzonych obiektów i dbanie o ich ponowne użycie.",
        "correct": false
      }
    ]
  },
  {
    "question": "Rola i przykłady silników ORM (Object-Relational Mapping)",
    "answers": [
      {
        "text": "Modele monetyzacji: Reklamy: Wstawianie reklam w aplikacji (np. Google AdMob). Zaletą jest brak konieczności płacenia przez użytkownika, wadą – możliwość irytowania użytkowników. Zakupy w aplikacji: Umożliwienie użytkownikom kupowania treści lub funkcji w aplikacji. Zaletą jest łatwy dostęp do dodatkowych funkcji, ale wymaga dokładnego planowania modeli cenowych. Subskrypcje: Oferowanie subskrypcji na dostęp do treści lub funkcji w aplikacji. Zaletą jest przewidywalny dochód, ale może odstraszyć użytkowników, którzy nie są gotowi na regularne płatności.",
        "correct": false
      },
      {
        "text": "BPMN (Business Process Model and Notation) to standard notacji graficznej służący do modelowania procesów biznesowych. Dzięki BPMN można tworzyć zrozumiałe i spójne diagramy procesów, które pomagają w analizie, automatyzacji i optymalizacji działań organizacyjnych. Zastosowanie BPMN: Wizualizacja procesów: BPMN umożliwia tworzenie przejrzystych i zrozumiałych schematów procesów, co ułatwia zrozumienie skomplikowanych działań w organizacji. Komunikacja z interesariuszami: Umożliwia przekazywanie zrozumiałych informacji między zespołami biznesowymi i technicznymi. Optymalizacja: Pozwala na identyfikację wąskich gardeł, redundancji i innych problemów w procesach. Wyzwania: Złożoność procesów: Duża liczba elementów BPMN może sprawić, że diagramy staną się nieczytelne. Integracja z systemami IT: Implementacja procesów BPMN w systemach informatycznych może wymagać zaawansowanych narzędzi do automatyzacji procesów. Szkolenie zespołów: Użycie BPMN wymaga pewnego poziomu wiedzy i doświadczenia, co może stanowić wyzwanie w organizacjach bez odpowiedniego przeszkolenia.",
        "correct": false
      },
      {
        "text": "Silniki ORM umożliwiają mapowanie obiektów w programowaniu obiektowym na tabele w relacyjnej bazie danych, co upraszcza pracę z bazą danych w aplikacjach. Przykłady ORM: Hibernate (Java): Umożliwia mapowanie klas Java do tabel w bazach SQL, automatyzując operacje CRUD. Entity Framework (C#): Narzędzie ORM dla platformy .NET, pozwala na manipulację danymi w bazie danych przy użyciu obiektów C#. Django ORM (Python): Zintegrowane w Django ORM, umożliwia interakcję z bazą danych SQL za pomocą Pythonowych obiektów.",
        "correct": true
      },
      {
        "text": "Kontrola dostępu – systemy uprawnień do plików i katalogów. Szyfrowanie danych – zabezpieczenie plików przed nieautoryzowanym dostępem. Firewalle i antywirusy – ochrona przed atakami sieciowymi. Sandboxing – uruchamianie aplikacji w izolowanym środowisku. Regularne aktualizacje – łatanie luk w zabezpieczeniach.",
        "correct": false
      }
    ]
  },
  {
    "question": "Sposoby zapewniania wydajności i strojenia w systemach baz danych",
    "answers": [
      {
        "text": "Indeksowanie: Tworzenie odpowiednich indeksów na kolumnach, które są używane w zapytaniach. Optymalizacja zapytań: Używanie EXPLAIN w SQL do analizy zapytań i identyfikowania nieoptymalnych operacji. Cache'owanie wyników: Przechowywanie często używanych wyników zapytań w pamięci podręcznej. Sharding i replikacja: Dzielnie danych na różne serwery w celu zwiększenia dostępności i wydajności.",
        "correct": true
      },
      {
        "text": "Techniki kombinatoryczne są wykorzystywane do optymalizacji operacji na strukturach danych. Optymalizacja wyszukiwania: Drzewa AVL – minimalizacja wysokości drzewa dla szybszego wyszukiwania. Funkcje skrótu w tablicach haszujących – minimalizacja kolizji. Sortowanie: Algorytm QuickSort – optymalizacja sortowania poprzez podział i zwyciężaj.",
        "correct": false
      },
      {
        "text": "Mechanizmy zapewniające bezpieczeństwo: Autoryzacja i uwierzytelnianie: Stosowanie systemów autoryzacji (np. Role-Based Access Control - RBAC) i szyfrowania danych. Szyfrowanie: Używanie szyfrowania danych w spoczynku (np. AES) oraz szyfrowanie komunikacji z bazą danych (SSL/TLS). Audit log: Rejestrowanie operacji na bazie danych w celu monitorowania i wykrywania podejrzanych działań. Kontrola dostępu: Stosowanie uprawnień na poziomie tabel, rekordów oraz operacji (np. SELECT, INSERT). Mechanizmy niezawodności: Transakcje ACID: Zapewnienie integralności danych za pomocą transakcji, które gwarantują atomowość, spójność, izolację i trwałość. Replikacja: Duplikowanie danych na różnych serwerach w celu zapewnienia dostępności w przypadku awarii. Backup i odzyskiwanie: Regularne wykonywanie kopii zapasowych bazy danych oraz testowanie procesu odzyskiwania danych.",
        "correct": false
      },
      {
        "text": "Generics (wzorce szablonów) to technika umożliwiająca tworzenie funkcji i klas, które mogą działać na różnych typach danych bez potrzeby wielokrotnego definiowania tych samych funkcji. Generics zwiększają reużywalność i bezpieczeństwo kodu, ponieważ umożliwiają operowanie na typach w sposób ogólny i elastyczny. Przykład w Javie (Generics): class Para<T, U> { private T pierwszy; private U drugi; public Para(T pierwszy, U drugi) { this.pierwszy = pierwszy; this.drugi = drugi; } public T getPierwszy() { return pierwszy; } public U getDrugi() { return drugi; } } Tutaj Para<T, U> to klasa, która może przechowywać dwa obiekty różnych typów, np. Para<Integer, String>.",
        "correct": false
      }
    ]
  },
  {
    "question": "Techniki zabezpieczania aplikacji mobilnych przed zagrożeniami",
    "answers": [
      {
        "text": "Testy jednostkowe (Unit tests): Testowanie poszczególnych funkcji i metod aplikacji w celu sprawdzenia, czy działają one zgodnie z oczekiwaniami. Testy integracyjne (Integration tests): Testowanie interakcji pomiędzy różnymi modułami lub komponentami aplikacji. Testy funkcjonalne (Functional tests): Sprawdzanie, czy aplikacja działa zgodnie z wymaganiami i specyfikacjami. Testy UI (User Interface tests): Testowanie interakcji użytkownika z aplikacją, sprawdzanie, czy elementy UI są odpowiednio rozmieszczone i czy są intuicyjne. Testy wydajnościowe (Performance tests): Mierzenie szybkości działania aplikacji, jej odpowiedzi na różne operacje, np. ładowanie danych. Testy bezpieczeństwa (Security tests): Sprawdzanie, czy aplikacja jest odporna na ataki i zapewnia bezpieczeństwo danych użytkownika.",
        "correct": false
      },
      {
        "text": "Komputer komunikuje się z urządzeniami poprzez sterowniki oraz interfejsy (USB, PCI, Bluetooth).\nPrzykłady: Klawiatura i mysz (wejście) → przesyłanie sygnałów przez sterownik HID. Monitor (wyjście) → karta graficzna renderuje obraz. Drukarka (wyjście) → komputer wysyła dane w formacie obsługiwanym przez drukarkę (np. PCL, PostScript).",
        "correct": false
      },
      {
        "text": "Szyfrowanie danych: Użycie szyfrowania zarówno na poziomie aplikacji (AES), jak i podczas przesyłania danych (SSL/TLS). Ochrona przed atakami Man-in-the-Middle: Użycie certyfikatów SSL/TLS do zabezpieczenia komunikacji między aplikacją a serwerem. Wykrywanie malware: Implementacja narzędzi do wykrywania złośliwego oprogramowania, jak również technik antypirackich. Bezpieczne przechowywanie danych: Unikanie przechowywania wrażliwych informacji w pamięci urządzenia, zamiast tego używanie bezpiecznych magazynów danych, takich jak Keychain (iOS) lub Keystore (Android).",
        "correct": true
      },
      {
        "text": "Waterfall – sztywna struktura, każda faza projektu (analiza, projektowanie, implementacja, testowanie) jest wykonywana po kolei. Dobra dla dużych projektów z jasno określonymi wymaganiami. Agile (Scrum, Kanban) – elastyczne podejście, iteracyjne, szybkie dostosowywanie do zmian. Scrum wykorzystuje sprinty, a Kanban pozwala na ciągły przepływ zadań.\nKiedy stosować? Waterfall – projekty rządowe, medyczne, gdzie wymagania są stałe. Agile – dynamiczne projekty IT, startupy, aplikacje webowe.",
        "correct": false
      }
    ]
  },
  {
    "question": "Wyjaśnij, jak prawo autorskie chroni programy komputerowe oraz jakie są różne typy licencji oprogramowania. Omów konsekwencje prawne naruszenia tych licencji.",
    "answers": [
      {
        "text": "Ochrona programów komputerowych przez prawo autorskie i licencje\nProgramy komputerowe są chronione jako utwory literackie w ramach prawa autorskiego. Oznacza to, że autorzy mają wyłączne prawa do kopi\nowania, modyfikowania i dystrybucji kodu.\nTypy licencji oprogramowania:\nProprietary (zamknięte) – np. Windows, Photoshop – użytkownik może korzystać, ale nie ma dostępu do kodu źródłowego.\nOpen Source (otwarte) – np. Linux, Firefox – kod jest dostępny dla wszystkich, ale licencje określają warunki użytkowania (np. GPL, MIT).\nFreeware, Shareware, Trial – darmowe lub czasowo ograniczone wersje programów.\nKonsekwencje naruszeń: Mogą obejmować kary finansowe, odpowiedzialność cywilną i karną oraz wykluczenie z rynku.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Przedstaw kluczowe różnice między tradycyjnymi metodami zarządzania projektami (np. Waterfall) a metodykami zwinnymi (np. Scrum, Kanban) oraz omów, w jakich sytuacjach każda z tych metod może być najbardziej efektywna, szczególnie w kontekście projektów IT.",
    "answers": [
      {
        "text": "Różnice między Waterfall a Agile (Scrum, Kanban)\nWaterfall – sztywna struktura, każda faza projektu (analiza, projektowanie, implementacja, testowanie) jest wykonywana po kolei. Dobra dla dużych projektów z jasno określonymi wymaganiami.\nAgile (Scrum, Kanban) – elastyczne podejście, iteracyjne, szybkie dostosowywanie do zmian. Scrum wykorzystuje sprinty, a Kanban pozwala na ciągły przepływ zadań.\nKiedy stosować?\nWaterfall – projekty rządowe, medyczne, gdzie wymagania są stałe.\nAgile – dynamiczne projekty IT, startupy, aplikacje webowe.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Omów znacznie responsywności w wykorzystaniu systemów informatycznych.",
    "answers": [
      {
        "text": "Znaczenie responsywności w systemach informatycznych\nResponsywność oznacza szybkość reakcji systemu na działania użytkownika. Jest kluczowa dla UX (User Experience), wpływa na wydajność pracy i satysfakcję użytkowników. W systemach krytycznych, np. medycznych, może decydować o bezpieczeństwie pacjentów.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Co to jest \"Mobile First\"w projektowaniu i dlaczego jest to ważne?",
    "answers": [
      {
        "text": "Mobile First – co to i dlaczego ważne?\nPodejście Mobile First oznacza projektowanie aplikacji/webów najpierw pod urządzenia mobilne, a potem dostosowywanie do większych ekranów. Jest to ważne, bo:\nWiększość użytkowników korzysta z internetu na smartfonach.\nWpływa na SEO – Google promuje strony przyjazne mobilnie.\nPoprawia UX, bo eliminuje zbędne elementy i optymalizuje działanie na mniejszych ekranach.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jak zorganizowane są dane w systemach plików i jakie to ma znaczenie z punktu widzenia bezpieczeństwa?",
    "answers": [
      {
        "text": "Organizacja danych w systemach plików a bezpieczeństwo\nDane w systemach plików są organizowane hierarchicznie (katalogi, pliki). Kluczowe aspekty bezpieczeństwa:\nUprawnienia dostępu (np. chmod w Linuxie).\nSzyfrowanie plików i dysków.\nKontrola wersji i kopie zapasowe.\nOgraniczenia uprawnień dla użytkowników (zasada najmniejszych uprawnień).",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Podaj uwarunkowania wykorzystania systemów Content Management System (CMS).",
    "answers": [
      {
        "text": "Uwarunkowania wykorzystania CMS (Content Management System)\nCMS (np. WordPress, Joomla, Drupal) ułatwiają zarządzanie treścią, ale:\nWymagają aktualizacji dla bezpieczeństwa.\nMogą mieć ograniczenia w personalizacji (bez dodatkowego kodowania).\nMogą być podatne na ataki (np. SQL Injection, ataki na wtyczki).",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jakie mogą być najczęstsze zagrożenia dla bezpieczeństwa sieci teleinformatycznych?",
    "answers": [
      {
        "text": "Najczęstsze zagrożenia dla bezpieczeństwa sieci\nAtaki DDoS – przeciążenie serwera.\nPhishing – wyłudzanie danych.\nMalware, ransomware – złośliwe oprogramowanie.\nMan-in-the-middle – przechwytywanie komunikacji.\nNieaktualne oprogramowanie – podatności bezpieczeństwa.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Czym są systemy wykrywania i zapobiegania intruzom (IDS/IPS) i jak one działają?",
    "answers": [
      {
        "text": "Systemy IDS/IPS – wykrywanie i zapobieganie intruzom\nIDS (Intrusion Detection System) – monitoruje sieć i wykrywa potencjalne ataki, ale nie blokuje ich.\nIPS (Intrusion Prevention System) – działa aktywnie, wykrywa i blokuje ataki w czasie rzeczywistym.\nDziałają na zasadzie analizy sygnatur lub anomalii ruchu sieciowego.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jak działają zapory sieciowe (firewalle) i jakie mają ograniczenia?",
    "answers": [
      {
        "text": "Zapory sieciowe (firewalle) i ich ograniczenia\nFirewalle filtrują ruch sieciowy na podstawie reguł (np. IP, porty, protokoły). Mogą być sprzętowe lub programowe.\nOgraniczenia:\nNie chronią przed atakami wewnętrznymi.\nNie zabezpieczają przed phishingiem.\nMogą blokować legalne usługi przy błędnej konfiguracji.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jakie są zasady bezpiecznego wykorzystywania systemów teleinformatycznych?",
    "answers": [
      {
        "text": "Zasady bezpiecznego wykorzystywania systemów teleinformatycznych\nSilne hasła – unikanie prostych kombinacji, używanie menedżerów haseł.\nAktualizacje oprogramowania – usuwanie luk w zabezpieczeniach.\nZasada najmniejszych uprawnień – użytkownicy powinni mieć tylko niezbędne uprawnienia.\nKopia zapasowa (backup) – ochrona przed awariami i ransomware.\nUnikanie publicznych sieci Wi-Fi – korzystanie z VPN w przypadku łączenia się w niezaufanych sieciach.\nEdukacja użytkowników – szkolenia z cyberbezpieczeństwa.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "W jaki sposób szyfrowanie wpływa na bezpieczeństwo systemów teleinformatycznych?",
    "answers": [
      {
        "text": "Wpływ szyfrowania na bezpieczeństwo systemów teleinformatycznych\nSzyfrowanie chroni dane przed nieautoryzowanym dostępem, poprzez konwersję ich do postaci nieczytelnej dla osób nieposiadających klucza deszyfrującego.\nPrzykłady:\nHTTPS – szyfrowana komunikacja w sieci.\nVPN – tunelowanie ruchu internetowego.\nAES, RSA – algorytmy szyfrowania danych.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Wymień i omów popierając przykładami główne zagrożenia w systemach teleinformatycznych",
    "answers": [
      {
        "text": "Główne zagrożenia w systemach teleinformatycznych\nAtaki DDoS – przeciążenie serwerów np. blokowanie dostępu do strony rządowej.\nPhishing – fałszywe e-maile próbujące wyłudzić dane logowania.\nRansomware – szyfrowanie plików i żądanie okupu (np. WannaCry).\nSQL Injection – atak na bazę danych poprzez wstrzyknięcie złośliwego kodu SQL.\nZero-day – wykorzystanie niezałatanych luk bezpieczeństwa.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Wymień i opisz co najmniej 4 usługi bezpieczeństwa informacji uwzględniając możliwe ataki na te usługi.",
    "answers": [
      {
        "text": "Usługi bezpieczeństwa informacji i możliwe ataki\nPoufność – ochrona przed nieautoryzowanym dostępem (zagrożenie: sniffing, ataki man-in-the-middle).\nIntegralność – zapewnienie, że dane nie zostały zmodyfikowane (zagrożenie: ataki typu man-in-the-middle).\nDostępność – zapewnienie dostępności usług (zagrożenie: ataki DDoS).\nAutoryzacja i uwierzytelnianie – weryfikacja tożsamości użytkowników (zagrożenie: brute-force, kradzież sesji).",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Proszę wymienić i omówić sprzętowe oraz programowe składniki sieci komputerowych",
    "answers": [
      {
        "text": "Sprzętowe i programowe składniki sieci komputerowych\nSprzętowe:\nRouter – przekierowuje ruch w sieci.\nSwitch – łączy urządzenia w sieci LAN.\nFirewall sprzętowy – filtruje ruch sieciowy.\nSerwery – przechowują dane i aplikacje.\nProgramowe:\nSystemy operacyjne sieciowe (np. Windows Server, Linux).\nOprogramowanie firewall (np. iptables, pfSense).\nVPN – szyfrowanie ruchu internetowego.\nSystemy IDS/IPS – wykrywanie i zapobieganie atakom.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Na czym polega efekt lawinowy w systemie kryptograficznym?",
    "answers": [
      {
        "text": "Efekt lawinowy w kryptografii\nEfekt lawinowy oznacza, że nawet minimalna zmiana w danych wejściowych (np. jednym bicie) powoduje znaczącą zmianę w wyniku szyfrowania. Jest kluczowy w algorytmach takich jak AES czy SHA-256, ponieważ zwiększa odporność na ataki.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Proszę podać właściwości grafiki rastrowej i wektorowej.",
    "answers": [
      {
        "text": "Właściwości grafiki rastrowej i wektorowej\nGrafika rastrowa (np. JPEG, PNG):\nSkłada się z pikseli.\nTraci jakość po powiększeniu.\nNadaje się do zdjęć i realistycznych obrazów.\nGrafika wektorowa (np. SVG, AI):\nSkłada się z figur geometrycznych.\nMożna skalować bez utraty jakości.\nIdealna do logotypów i ikon.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Proszę podać i scharakteryzować znane topologie sieci komputerowych.",
    "answers": [
      {
        "text": "Znane topologie sieci komputerowych\nMagistrali – wszystkie urządzenia podłączone do jednej linii (prosta, ale awaryjna).\nPierścienia – dane krążą w jednym kierunku (wydajna, ale podatna na awarie).\nGwiazdy – centralny punkt (switch/router) łączy wszystkie urządzenia (popularna i bezpieczna).\nSiatki (mesh) – każde urządzenie może łączyć się z każdym (wysoka redundancja).",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Omów zasady współpracy komputera z urządzeniami wejścia/wyjścia",
    "answers": [
      {
        "text": "Współpraca komputera z urządzeniami wejścia/wyjścia\nKomputer komunikuje się z urządzeniami poprzez sterowniki oraz interfejsy (USB, PCI, Bluetooth).\nPrzykłady:\nKlawiatura i mysz (wejście) → przesyłanie sygnałów przez sterownik HID.\nMonitor (wyjście) → karta graficzna renderuje obraz.\nDrukarka (wyjście) → komputer wysyła dane w formacie obsługiwanym przez drukarkę (np. PCL, PostScript).",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Omów rodzaje testów i jakie korzyści przynosi automatyzacja testów w procesie wytwarzania oprogramowania?",
    "answers": [
      {
        "text": "Rodzaje testów i korzyści automatyzacji\nRodzaje testów:\nJednostkowe – testowanie pojedynczych modułów kodu.\nIntegracyjne – sprawdzanie komunikacji między modułami.\nSystemowe – testowanie całości aplikacji.\nAkceptacyjne – testowanie zgodności z wymaganiami biznesowymi.\nKorzyści automatyzacji:\nSzybsze wykrywanie błędów.\nMożliwość wielokrotnego powtarzania testów.\nRedukcja kosztów testowania.\nMniejsze ryzyko błędu ludzkiego.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jakie funkcje oferują narzędzia do zarządzania projektami, które są kluczowe dla skutecznego zarządzania zespołem programistycznym?",
    "answers": [
      {
        "text": "Kluczowe funkcje narzędzi do zarządzania projektami\nNarzędzia takie jak Jira, Trello, Asana, Redmine oferują:\nZarządzanie zadaniami – tworzenie i przypisywanie zadań.\nHarmonogramowanie – wykresy Gantta, sprinty Scrum.\nŚledzenie postępów – tablice Kanban.\nZarządzanie dokumentacją – wiki, repozytoria kodu.\nIntegracje z narzędziami deweloperskimi (np. GitHub, CI/CD).",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jakie są najpopularniejsze systemy kontroli wersji i jakie są ich główne zalety i wady w pracy w dużych zespołach?",
    "answers": [
      {
        "text": "Najpopularniejsze systemy kontroli wersji i ich zalety/wady\nNajpopularniejsze systemy:\nGit (rozproszony) – używany w GitHub, GitLab, Bitbucket.\nSVN (Subversion) – scentralizowany, popularny w korporacjach.\nMercurial – podobny do Gita, ale mniej popularny.\nZalety Gita dla dużych zespołów:\n✅ Rozproszony model – każdy ma pełną kopię repozytorium.\n✅ Efektywność – szybkie operacje na lokalnym repozytorium.\n✅ Branching – łatwe tworzenie i scalanie gałęzi.\tWady:\n❌ Może być skomplikowany dla początkujących.\n❌ Brak natywnej kontroli dostępu (trzeba używać GitHub/GitLab).",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Czym są heurystyki Jacoba Nielsena? Omów jedną z nich.",
    "answers": [
      {
        "text": "Heurystyki Jacoba Nielsena – zasady użyteczności interfejsów\nHeurystyki Nielsena to 10 zasad UX, pomagające w projektowaniu intuicyjnych interfejsów.\nPrzykład: \"Zapewnij informację o stanie systemu\"\nUżytkownik powinien zawsze wiedzieć, co się dzieje (np. pasek ładowania, komunikaty błędów).\nPrzykład: Gmail informuje o wysyłaniu wiadomości („Wiadomość została wysłana”).",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jakie są główne etapy procesu UX produktu cyfrowego?",
    "answers": [
      {
        "text": "Etapy procesu UX produktu cyfrowego\nBadania użytkowników – analiza potrzeb, np. wywiady, ankiety.\nTworzenie person i scenariuszy – definiowanie grup docelowych.\nWireframing i prototypowanie – szkice i interaktywne modele UI.\nTesty użyteczności – weryfikacja projektu na użytkownikach.\nIteracyjne poprawki – dostosowanie UX na podstawie testów.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jakie są główne kroki w procesie projektowania algorytmu i jak wpływają one na efektywność systemu informatycznego?",
    "answers": [
      {
        "text": "Główne kroki projektowania algorytmu i ich wpływ na system\nDefinicja problemu – jasne określenie celu.\nAnaliza danych wejściowych i wyjściowych – określenie struktur danych.\nProjektowanie algorytmu – wybór metody rozwiązania (np. rekurencja, programowanie dynamiczne).\nAnaliza złożoności – ocena wydajności (czas/pamięć).\nImplementacja i testowanie – sprawdzenie poprawności działania.\nOptymalizacja – ulepszanie algorytmu dla lepszej efektywności.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "W jaki sposób analiza złożoności obliczeniowej (czasowej i pamięciowej) wpływa na wybór algorytmu do konkretnego zadania?",
    "answers": [
      {
        "text": "Wpływ analizy złożoności obliczeniowej na wybór algorytmu\nZłożoność czasowa określa, jak szybko rośnie czas wykonania w zależności od ilości danych. \nnp. O(n log n) (Merge Sort) jest lepsze niż O(n²) (Bubble Sort) dla dużych zbiorów.\nZłożoność pamięciowa – ile pamięci zajmuje algorytm. \nnp. DFS może być bardziej pamięciooszczędny niż BFS w niektórych sytuacjach.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jakie są najczęstsze techniki optymalizacji algorytmów i w jakich sytuacjach ich stosowanie jest najbardziej efektywne?",
    "answers": [
      {
        "text": "Najczęstsze techniki optymalizacji algorytmów i ich zastosowania\nProgramowanie dynamiczne – np. optymalizacja problemów plecakowych.\nPodział i zwyciężaj (Divide & Conquer) – np. QuickSort, MergeSort.\nKompresja danych – np. Huffman coding w kompresji plików.\nRównoległe przetwarzanie – np. MapReduce w big data.\nPrzybliżone algorytmy – np. heurystyki dla NP-trudnych problemów.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jak podejścia algorytmiczne mogą wpływać na skalowalność systemu informatycznego?",
    "answers": [
      {
        "text": "Wpływ podejść algorytmicznych na skalowalność systemu\nEfektywne algorytmy (np. O(n log n) zamiast O(n²)) pozwalają na obsługę większej liczby użytkowników.\nStruktury danych (np. drzewa AVL zamiast list) mogą poprawić czas dostępu do danych.\nRównoległość – algorytmy równoległe (np. MapReduce) zwiększają skalowalność w systemach rozproszonych.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jakie są kluczowe różnice między podejściem algorytmicznym a heurystycznym w rozwiązywaniu problemów w systemach informatycznych?",
    "answers": [
      {
        "text": "Podejście algorytmiczne vs. heurystyczne w rozwiązywaniu problemów\nPodejście algorytmiczne – ścisłe reguły, gwarantuje optymalne rozwiązanie (np. Dijkstra do wyznaczania najkrótszej ścieżki).\nPodejście heurystyczne – przybliżone rozwiązania, szybsze, ale nie zawsze optymalne (np. algorytm mrówkowy do problemu komiwojażera).\nZastosowanie:\nAlgorytmy – lepsze w zadaniach wymagających precyzji (np. szyfrowanie).\nHeurystyki – lepsze w problemach NP-trudnych, gdy optymalne rozwiązanie jest zbyt kosztowne (np. AI, optymalizacja grafiki).",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jak algebra liniowa może być wykorzystana w przetwarzaniu obrazów i analizie danych w systemach informatycznych?",
    "answers": [
      {
        "text": "Algebra liniowa w przetwarzaniu obrazów i analizie danych\nPrzetwarzanie obrazów:\nMacierze do reprezentacji obrazów.\nTransformaty (np. DCT w JPEG).\n\tAnaliza danych:\nPCA (analiza głównych składowych) do redukcji wymiarów.\nSieci neuronowe – mnożenie macierzy w warstwach neuronowych.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "W jaki sposób rachunek różniczkowy i całkowy przyczynia się do optymalizacji algorytmów i modeli predykcyjnych?",
    "answers": [
      {
        "text": "Rachunek różniczkowy i całkowy w optymalizacji algorytmów i modeli predykcyjnych\nOptymalizacja funkcji kosztu w AI – gradient descent używa pochodnych do minimalizacji błędów w sieciach neuronowych.\nAnaliza szybkości zmian – różniczkowanie pomaga w dynamicznym sterowaniu systemami.\nInterpolacja i aproksymacja – całkowanie pozwala modelować złożone funkcje w analizie danych.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jak teoria prawdopodobieństwa i statystyka wspierają podejmowanie decyzji w systemach rekomendacyjnych i analizie danych?",
    "answers": [
      {
        "text": "Teoria prawdopodobieństwa i statystyka w systemach rekomendacyjnych i analizie danych\nSystemy rekomendacyjne i analiza danych opierają się na modelach probabilistycznych i metodach statystycznych, aby przewidywać preferencje użytkowników oraz analizować wzorce w danych.\nSystemy rekomendacyjne: \nFiltracja kolaboratywna – analiza podobieństw między użytkownikami (np. system Netflix przewiduje filmy na podstawie ocen innych użytkowników o podobnych gustach).\nModele Bayesowskie – prognozowanie na podstawie prawdopodobieństwa (np. filtry antyspamowe analizujące treść e-maili).\nAnaliza danych: \nRegresja liniowa i wieloraka – wykorzystywane do przewidywania trendów na podstawie wcześniejszych danych (np. prognozy sprzedaży).\nAnaliza wariancji (ANOVA) – stosowana do porównywania różnych grup danych (np. testowanie skuteczności reklam w różnych regionach).",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "W jaki sposób logika matematyczna i teoria zbiorów mogą być wykorzystane w weryfikacji poprawności i niezawodności kodu źródłowego?",
    "answers": [
      {
        "text": "Logika matematyczna i teoria zbiorów w weryfikacji kodu\nPoprawność i niezawodność kodu źródłowego można analizować za pomocą metod formalnych bazujących na logice matematycznej i teorii zbiorów.\nLogika matematyczna: \nModel checking – sprawdzanie, czy program spełnia określone własności (np. poprawność protokołów sieciowych).\nTwierdzenia Hoare’a – analiza poprawności kodu na poziomie pre- i postwarunków.\nTeoria zbiorów: \nOptymalizacja zapytań SQL – analiza operacji na zbiorach danych dla efektywniejszych wyników.\nWykrywanie konfliktów typów danych – stosowane w językach funkcyjnych (np. Haskell, Scala).",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jak kryptografia, oparta na teoriach liczbowych i algebraicznych, wpływa na bezpieczeństwo systemów informatycznych?",
    "answers": [
      {
        "text": "Kryptografia oparta na teoriach liczbowych i algebraicznych\nNowoczesne systemy kryptograficzne wykorzystują własności liczb pierwszych i operacje algebraiczne do zabezpieczania danych przed nieautoryzowanym dostępem.\nTeoria liczb: \nRSA – oparty na trudności faktoryzacji dużych liczb pierwszych (stosowany w szyfrowaniu komunikacji).\nKrzywe eliptyczne – bardziej efektywna metoda kryptograficzna używana w blockchainie i szyfrowaniu ECDSA.\nAlgebra abstrakcyjna: \nGrupy i pierścienie – wykorzystywane w kryptografii symetrycznej i asymetrycznej.\nAlgorytm Diffie-Hellmana – umożliwia bezpieczną wymianę kluczy w komunikacji (stosowany w HTTPS).",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jak teoria grafów wpływa na projektowanie i implementację struktur danych takich jak drzewa, grafy i sieci?",
    "answers": [
      {
        "text": "Teoria grafów w projektowaniu struktur danych\nTeoria grafów znajduje zastosowanie w wielu aspektach informatyki, od organizacji danych po optymalizację wyszukiwania.\nDrzewa: \nDrzewa binarne (BST, AVL, B-drzewa) – stosowane w bazach danych do szybkiego wyszukiwania.\nGrafy: \nAlgorytm Dijkstry – najkrótsza ścieżka w sieciach (np. GPS, nawigacja Google Maps).\nAlgorytm PageRank – analiza połączeń między stronami internetowymi (stosowany przez Google)",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "W jaki sposób algebra liniowa jest stosowana w budowie i manipulacji strukturami danych, takimi jak macierze i wektory?",
    "answers": [
      {
        "text": "Algebra liniowa w strukturach danych\nAlgebra liniowa jest kluczowa w reprezentacji i manipulacji danymi w postaci macierzy i wektorów.\nMacierze: \nGrafika komputerowa – transformacje 3D w OpenGL.\nSztuczna inteligencja – operacje na zbiorach danych w uczeniu maszynowym.\nWektory: \nSilniki rekomendacyjne – Word2Vec w NLP do analizy znaczenia słów.\nKompresja obrazów – SVD stosowane w redukcji wymiarów.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jak zasady kombinatoryki są wykorzystywane w projektowaniu struktur danych optymalizujących wyszukiwanie i sortowanie?",
    "answers": [
      {
        "text": "Kombinatoryka w strukturach danych\nTechniki kombinatoryczne są wykorzystywane do optymalizacji operacji na strukturach danych.\nOptymalizacja wyszukiwania: \nDrzewa AVL – minimalizacja wysokości drzewa dla szybszego wyszukiwania.\nFunkcje skrótu w tablicach haszujących – minimalizacja kolizji.\nSortowanie: \nAlgorytm QuickSort – optymalizacja sortowania poprzez podział i zwyciężaj.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "W jaki sposób teoria prawdopodobieństwa jest używana w strukturach danych takich jak filtry Blooma i drzewa probabilistyczne?",
    "answers": [
      {
        "text": "Teoria prawdopodobieństwa w filtrach Blooma i drzewach probabilistycznych\nTeoria prawdopodobieństwa pozwala na efektywne przechowywanie i wyszukiwanie danych z pewnym marginesem błędu.\nFiltr Blooma: \nUżywany w bazach danych (np. Google BigTable) do szybkiego sprawdzania obecności elementu w zbiorze.\nDrzewa probabilistyczne: \nAlgorytm Huffmana – kompresja danych poprzez drzewo kodowe.\nModele Markowa – przewidywanie kolejnych elementów (np. autokorekta w klawiaturach).",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jak pojęcia z teorii liczb są stosowane w projektowaniu struktur danych dla kryptografii i zabezpieczeń?",
    "answers": [
      {
        "text": "Teoria liczb w strukturach danych dla kryptografii\nZasady teorii liczb są stosowane w mechanizmach bezpieczeństwa.\nDrzewa Merkle’a: \nUżywane w blockchainie do weryfikacji integralności danych.\nGeneratory liczb losowych: \nOparte na kongruencjach liniowych, np. w szyfrowaniu strumieniowym.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jakie są kluczowe etapy w procesie budowy modelu uczenia maszynowego i jak wpływają one na jakość i efektywność systemu sztucznej inteligencji?",
    "answers": [
      {
        "text": "Kluczowe etapy budowy modelu uczenia maszynowego\nZbieranie danych – określenie jakości i źródła danych (np. dane medyczne, obrazy).\nPrzetwarzanie danych – czyszczenie i normalizacja, np. usuwanie duplikatów.\nWybór modelu – regresja, SVM, sieci neuronowe w zależności od problemu.\nTrenowanie modelu – dostosowanie wag na podstawie zbioru treningowego.\nEwaluacja modelu – sprawdzanie jakości na zbiorze testowym.\nOptymalizacja hiperparametrów – poprawianie wydajności (np. tuning learning rate).",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "W jaki sposób techniki uczenia nadzorowanego i nienadzorowanego różnią się pod względem zastosowań i implementacji w systemach sztucznej inteligencji?",
    "answers": [
      {
        "text": "Uczenie nadzorowane vs. nienadzorowane\nUczenie nadzorowane: \nDane treningowe zawierają etykiety.\nZastosowanie: klasyfikacja (np. rozpoznawanie twarzy), regresja.\nUczenie nienadzorowane: \nModel sam znajduje wzorce w danych.\nZastosowanie: klasteryzacja (np. segmentacja klientów w e-commerce).",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jakie są najlepsze praktyki w zakresie zarządzania danymi treningowymi, w tym ich gromadzenie, przechowywanie, przetwarzanie i zabezpieczanie, w kontekście budowy systemów sztucznej inteligencji?",
    "answers": [
      {
        "text": "Najlepsze praktyki w zarządzaniu danymi treningowymi w systemach sztucznej inteligencji\nPodczas budowy systemów AI kluczowe jest odpowiednie zarządzanie danymi treningowymi. Obejmuje to kilka aspektów:\nGromadzenie danych – Dane powinny pochodzić z wiarygodnych i legalnych źródeł oraz być zgodne z regulacjami (np. RODO). Warto stosować techniki anonimizacji.\nPrzechowywanie – Dane powinny być zabezpieczone przed nieautoryzowanym dostępem, a ich przechowywanie powinno uwzględniać redundancję (backupy, chmura).\nPrzetwarzanie – Należy zadbać o jakość danych (czyszczenie, normalizacja, usuwanie błędów). Warto stosować techniki augmentacji danych w AI.\nZabezpieczanie – Dane muszą być chronione przed wyciekiem (szyfrowanie, kontrola dostępu, audyty).",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jak duże modele językowe (LLM) mogą być integrowane z istniejącymi systemami informatycznymi i aplikacjami, aby poprawić ich funkcjonalność i wydajność",
    "answers": [
      {
        "text": "Integracja dużych modeli językowych (LLM) z systemami IT\nDuże modele językowe, takie jak ChatGPT, można integrować z systemami IT na kilka sposobów:\nAsystenci w aplikacjach – LLM mogą wspierać obsługę klienta, generując automatyczne odpowiedzi w chatbotach.\nAutomatyczne generowanie treści – Integracja z CMS pozwala na automatyczne tworzenie podsumowań, raportów czy e-maili.\nWyszukiwanie semantyczne – Można je wykorzystać do analizy zapytań użytkowników i lepszego dopasowywania wyników w wyszukiwarkach.\nAnaliza danych – LLM pomagają w przetwarzaniu dużych zbiorów danych i generowaniu raportów na ich podstawie.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "W jaki sposób duże modele językowe (LLM) mogą być wykorzystywane do automatyzacji zadań związanych z przetwarzaniem języka naturalnego (NLP), takich jak tłumaczenie, podsumowywanie tekstu i analiza sentymentu?",
    "answers": [
      {
        "text": "Wykorzystanie LLM w automatyzacji NLP\nLLM mogą automatyzować wiele zadań związanych z przetwarzaniem języka naturalnego:\nTłumaczenie tekstów – Modele takie jak DeepL czy Google Translate wykorzystują AI do precyzyjniejszego tłumaczenia.\nPodsumowywanie treści – LLM mogą skracać długie artykuły, generując ich streszczenia.\nAnaliza sentymentu – AI potrafi wykrywać emocje w komentarzach klientów, co jest używane np. w mediach społecznościowych i analizie opinii.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Co jest przedmiotem praw autorskich, a co jest spod nich wyłączone? Przedstaw podział praw autorskich i omów je",
    "answers": [
      {
        "text": "Podział praw autorskich\nPrawa autorskie chronią utwory o charakterze twórczym, takie jak książki, programy komputerowe czy muzyka.\nCo podlega ochronie? – Teksty, grafiki, filmy, oprogramowanie, projekty graficzne.\nCo nie podlega ochronie? – Fakty, idee, procedury, teorie matematyczne.\nPodział praw autorskich:\nPrawa osobiste – niezbywalne (np. autorstwo utworu).\nPrawa majątkowe – można nimi handlować (np. prawo do publikacji, sprzedaży).",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Wyjaśnij różnicę pomiędzy szyfrowaniem symetrycznym a asymetrycznym.",
    "answers": [
      {
        "text": "Szyfrowanie symetryczne vs asymetryczne\nSzyfrowanie symetryczne – Używa jednego klucza do szyfrowania i deszyfrowania (np. AES). \nZalety: szybkie, wydajne.\nWady: problem z bezpiecznym przekazaniem klucza.\nSzyfrowanie asymetryczne – Używa dwóch kluczy: publicznego i prywatnego (np. RSA). \nZalety: bezpieczniejsze przy wymianie danych.\nWady: wolniejsze niż szyfrowanie symetryczne.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Omówić przebieg bezpiecznej transmisji w sieciach teleinformatycznych na przykładzie protokołu SSL (Secure Socket Layer)",
    "answers": [
      {
        "text": "Bezpieczna transmisja w SSL\nSSL (obecnie TLS) zapewnia szyfrowanie danych przesyłanych przez internet.\nPrzebieg transmisji:\nKlient i serwer uzgadniają wersję protokołu i algorytmy szyfrowania.\nSerwer przesyła certyfikat SSL.\nKlient weryfikuje certyfikat i generuje klucz sesyjny.\nDane są szyfrowane i przesyłane bezpiecznym kanałem.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Ataki odmowy dostępu do usług (Denial of Service) - podaj przykłady ataku i sposoby jego unikania.",
    "answers": [
      {
        "text": "Ataki Denial of Service (DoS) i sposoby ochrony\nAtaki DoS blokują dostęp do usług przez przeciążenie serwera.\nPrzykłady ataków:\nFlooding – wysyłanie ogromnej liczby żądań (np. SYN Flood).\nDDoS – atak z wielu komputerów jednocześnie.\nSposoby ochrony:\nFiltry ruchu (firewalle).\nSystemy wykrywania ataków IDS/IPS.\nSieci CDN ograniczające wpływ ataków.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jaki jest cel, do czego jest używana maski podsieci w konfiguracji sieci?",
    "answers": [
      {
        "text": "Rola maski podsieci w konfiguracji sieci\nMaska podsieci określa, która część adresu IP jest siecią, a która urządzeniem.\nCel – Dzieli sieć na mniejsze podsieci, zwiększając efektywność adresowania.\nPrzykład – Maska 255.255.255.0 oznacza, że pierwsze trzy bajty IP to adres sieci, a ostatni to urządzenie.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Wyjaśnij koncepcję wykorzystania Virtual Local Area Network (VLAN) i ich zalety w zarządzaniu siecią",
    "answers": [
      {
        "text": "VLAN i jego zalety\nVLAN (Virtual Local Area Network) to logiczny podział jednej fizycznej sieci na kilka podsieci.\nZalety VLAN: \nLepsza kontrola ruchu i bezpieczeństwa.\nSeparacja sieci bez potrzeby dodatkowego sprzętu.\nRedukcja ruchu broadcastowego.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jaką rolę odgrywają sztuczna inteligencja (AI) i uczenie maszynowe (ML) w nowoczesnych systemach wykrywania zagrożeń i jakie są wyzwania związane z ich wykorzystaniem?",
    "answers": [
      {
        "text": "AI i ML w wykrywaniu zagrożeń\nSztuczna inteligencja pomaga wykrywać cyberzagrożenia poprzez analizę anomalii w ruchu sieciowym.\nZastosowania:\nSystemy wykrywania ataków (IDS).\nAnaliza logów pod kątem nietypowych zachowań.\nPredykcja zagrożeń na podstawie wzorców.\nWyzwania:\nFałszywe alarmy.\nDuża ilość przetwarzanych danych wymaga mocy obliczeniowej.\nMożliwość omijania algorytmów AI przez cyberprzestępców.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jakie są wady i zalety aplikacji natywnych w porównaniu do aplikacji internetowych w przypadku urządzeń mobilnych?",
    "answers": [
      {
        "text": "Wady i zalety aplikacji natywnych vs aplikacji internetowych na urządzeniach mobilnych\nAplikacje natywne to programy stworzone specjalnie dla konkretnego systemu operacyjnego (np. Android, iOS), natomiast aplikacje internetowe działają w przeglądarce i nie wymagają instalacji.\n✅ Zalety aplikacji natywnych:\nLepsza wydajność i szybkość działania.\nPełny dostęp do funkcji urządzenia (kamera, GPS, powiadomienia).\nMożliwość pracy offline.\n❌ Wady aplikacji natywnych:\nWyższy koszt i czas produkcji (osobne wersje na Androida i iOS).\nKonieczność aktualizacji przez użytkownika.\n✅ Zalety aplikacji internetowych:\nDziałają na wszystkich urządzeniach z przeglądarką.\nAktualizacje są natychmiastowe i nie wymagają instalacji.\n❌ Wady aplikacji internetowych:\nWolniejsze działanie w porównaniu do natywnych.\nOgraniczony dostęp do funkcji urządzenia.\nWymagają stałego połączenia z internetem.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Wyjaśnij, czym jest wątek w kontekście systemów operacyjnych.",
    "answers": [
      {
        "text": "Wątek w systemach operacyjnych\nWątek to podstawowa jednostka wykonawcza w systemie operacyjnym. Jest częścią procesu, ale ma własny licznik rozkazów i stos.\nWątki pozwalają na równoległe wykonywanie zadań, np. odtwarzanie muzyki i przeglądanie internetu jednocześnie.\nZalety wielowątkowości: poprawa wydajności, efektywne wykorzystanie procesora, szybsza reakcja aplikacji.\nProblemy: synchronizacja wątków (np. dostęp do tych samych zasobów).",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Czym jest wirtualizacja w kontekście systemów operacyjnych i jakie przynosi korzyści?",
    "answers": [
      {
        "text": "Wirtualizacja w systemach operacyjnych\nWirtualizacja to technika, która pozwala uruchamiać wiele systemów operacyjnych na jednym fizycznym komputerze.\n✅ Korzyści:\nEfektywne wykorzystanie sprzętu.\nMożliwość testowania różnych systemów operacyjnych.\nŁatwe skalowanie infrastruktury IT.\nPrzykłady narzędzi: VMware, VirtualBox, Hyper-V.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jakie są metody zapewniania bezpieczeństwa w systemach operacyjnych?",
    "answers": [
      {
        "text": "Metody zapewniania bezpieczeństwa w systemach operacyjnych\nKontrola dostępu – systemy uprawnień do plików i katalogów.\nSzyfrowanie danych – zabezpieczenie plików przed nieautoryzowanym dostępem.\nFirewalle i antywirusy – ochrona przed atakami sieciowymi.\nSandboxing – uruchamianie aplikacji w izolowanym środowisku.\nRegularne aktualizacje – łatanie luk w zabezpieczeniach.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Czym jest system plików i jakie są jego podstawowe funkcje?",
    "answers": [
      {
        "text": "System plików i jego funkcje\nSystem plików organizuje dane na nośniku (np. dysku twardym, SSD).\n Podstawowe funkcje:\nPrzechowywanie i organizacja plików.\nZarządzanie dostępem do danych.\nZapewnienie integralności danych.\nPrzykłady systemów plików: NTFS, FAT32, EXT4.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Czym jest hypervisor w wirtualizacji, jaką pełni rolę i jak jest zorganizowany?",
    "answers": [
      {
        "text": "Hypervisor – rola i organizacja\nHypervisor to oprogramowanie zarządzające maszynami wirtualnymi.\n Rodzaje hypervisorów:\nTyp 1 (bare-metal) – działa bezpośrednio na sprzęcie (np. VMware ESXi).\nTyp 2 (hostowane) – działa jako program w systemie operacyjnym (np. VirtualBox).\n✅ Zalety wirtualizacji: izolacja systemów, optymalizacja zasobów, łatwe tworzenie kopii zapasowych.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Omów strukturę rejestru systemu operacyjnego?",
    "answers": [
      {
        "text": "Struktura rejestru systemu operacyjnego\nRejestr w Windows to baza danych przechowująca ustawienia systemu i aplikacji.\n Główne gałęzie rejestru:\nHKEY_CLASSES_ROOT – informacje o typach plików i rozszerzeniach.\nHKEY_CURRENT_USER – ustawienia użytkownika.\nHKEY_LOCAL_MACHINE – globalne ustawienia systemu.\nHKEY_USERS – profile użytkowników.\nHKEY_CURRENT_CONFIG – informacje o aktualnej konfiguracji sprzętowej.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Omów mechanizmy zapewniania bezpieczeństwa i niezawodności w systemach zarządzania bazami danych.",
    "answers": [
      {
        "text": "Mechanizmy bezpieczeństwa w bazach danych\nKontrola dostępu – użytkownicy mają różne poziomy uprawnień.\nSzyfrowanie danych – np. TLS w połączeniach do bazy.\nBackupy – ochrona przed utratą danych.\nReplikacja – zwiększenie niezawodności bazy.\nACID – zasady zapewniające integralność danych.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Wyjaśnij co oznacza i dlaczego mówimy o systemach operacyjnych 32 i 64 bitowych?",
    "answers": [
      {
        "text": "Systemy operacyjne 32-bitowe vs. 64-bitowe\n32-bitowy system obsługuje do 4 GB RAM, ograniczona wydajność.\n64-bitowy system obsługuje więcej pamięci i może uruchamiać zarówno aplikacje 32-, jak i 64-bitowe.\n✅ Zalety 64-bitowego systemu: lepsza wydajność, możliwość obsługi większej ilości pamięci RAM, lepsza obsługa aplikacji wymagających dużej mocy obliczeniowej.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jakie są różnice i podobieństwa w sposobach deklaracji, definicji oraz wykorzystania zmiennych typów prostych w językach C, Java i C#?",
    "answers": [
      {
        "text": "Deklaracja, definicja i wykorzystanie zmiennych w C, Java i C#\n C\nDeklaracja: int a; (tylko informacja o typie).\nDefinicja: int a = 5; (tworzenie zmiennej i przypisanie wartości).\nWskaźniki: int *ptr; (przechowuje adres innej zmiennej).\n Java\nDeklaracja i definicja: int a = 5; (w Javie zmienne muszą należeć do klasy/metody).\nTypy referencyjne: obiekty przechowywane na stercie, np. String s = \"Hello\";.\n C#\nPodobne do Javy, ale obsługuje wskaźniki w trybie unsafe: \nunsafe {\n    int* ptr;\n}\nTypy wartościowe i referencyjne: int (przechowywany na stosie), string (na stercie).\n✅ Podobieństwa: składnia deklaracji zmiennych jest zbliżona.\n❌ Różnice: zarządzanie pamięcią, obsługa wskaźników (C pozwala na bezpośredni dostęp, Java i C# działają na GC).",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "W jaki sposób realizowana jest obsługa wyjątków w wybranym języku programowania i jakie są jej główne mechanizmy oraz najlepsze praktyki?",
    "answers": [
      {
        "text": "Obsługa wyjątków w wybranym języku programowania – mechanizmy i najlepsze praktyki\nObsługa wyjątków jest mechanizmem pozwalającym na zarządzanie błędami w programie. Dzięki niej, kiedy pojawia się błąd, program nie przerywa działania, lecz reaguje na niego w zaplanowany sposób. W językach takich jak Java, C# czy Python, wyjątkami zarządza się przy pomocy bloków try-catch. Blok try zawiera kod, który może spowodować wyjątek, a blok catch obsługuje go, oferując odpowiednią reakcję.\nNajlepsze praktyki:\nZawsze obsługuj konkretne wyjątki, unikaj ogólnych catch.\nUnikaj używania wyjątków do kontrolowania przepływu programu (np. zamiast try-catch do logiki).\nKorzystaj z finally do zwalniania zasobów, np. zamykania plików.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Omów, dla jakich danych zastosujesz tablicę. Podaj przykłady z deklaracją, utworzeniem i zainicjowaniem tablicy w języku C# lub Java.",
    "answers": [
      {
        "text": "Tablica – zastosowanie i przykłady w C# oraz Java\nTablica to struktura danych, która pozwala na przechowywanie wielu wartości tego samego typu w jednym obiekcie. Zaletą tablicy jest szybki dostęp do elementów za pomocą indeksu, jednak rozmiar tablicy jest stały po jej zadeklarowaniu.\nPrzykład w C#:\nint[] liczby = new int[5] {1, 2, 3, 4, 5};\nPrzykład w Java:\nint[] liczby = {1, 2, 3, 4, 5};\nZastosowanie: Tablice są używane np. do przechowywania wyników kalkulacji, zbiorów danych czy elementów w grze komputerowej.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jak zdefiniować upstream branch, a następnie skonfigurować go w zdalnym repozytorium tak, aby miał tę samą nazwę co w repozytorium lokalnym oraz jak skonfigurować go pod inną nazwą niż w repozytorium lokalnym?",
    "answers": [
      {
        "text": "Konfiguracja upstream branch w Git\nUpstream branch w systemie kontroli wersji Git to gałąź, która jest połączona z zdalnym repozytorium, na przykład z serwerem GitHub. Aby skonfigurować upstream branch, używamy komendy:\ngit push --set-upstream origin nazwa_gałęzi\nMożna również nadać inną nazwę gałęzi w repozytorium zdalnym:\ngit push --set-upstream origin lokalna_gałąź:inna_nazwa_zdalna\nTo zapewnia, że gałąź w repozytorium lokalnym jest powiązana z odpowiednią gałęzią zdalną.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jak zdefiniować pojęcia tip i head w kontekście systemów kontroli wersji, oraz w jaki sposób można określić liczbę heads w repozytorium?",
    "answers": [
      {
        "text": "Tip i Head w systemach kontroli wersji\nW kontekście systemów kontroli wersji, tip oznacza najnowszą zmianę w danej gałęzi, czyli najbardziej aktualny commit. Head to wskaźnik na aktualny commit w gałęzi roboczej. Można również mówić o HEAD, które wskazuje na ostatni commit w aktualnie wybranej gałęzi.\nAby sprawdzić liczbę heads w repozytorium, należy użyć komendy:\ngit show-ref –heads",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jakie są kluczowe różnice między klasą a obiektem w programowaniu obiektowym, oraz jak te różnice wpływają na tworzenie i wykorzystanie kodu?",
    "answers": [
      {
        "text": "Klasa vs obiekt w programowaniu obiektowym\nKlasa to definicja szablonu dla obiektów, zawierająca zmienne i metody. Jest jak plan budowy domu, natomiast obiekt jest jego fizycznym odpowiednikiem.\nObiekt to instancja klasy, tworzona na podstawie tej definicji, która zawiera konkretne dane.\nPrzykład w Java:\nclass Samochod {\n    String model;\n    void uruchomSilnik() {\n        System.out.println(\"Silnik uruchomiony\");\n    }\n}\nSamochod auto = new Samochod();\n\nW tym przykładzie Samochod to klasa, a auto to obiekt.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Czym jest enkapsulacja w programowaniu obiektowym, jakie są jej główne zalety i dlaczego jest istotna dla tworzenia solidnego i bezpiecznego kodu?",
    "answers": [
      {
        "text": "Enkapsulacja – znaczenie i zalety\nEnkapsulacja to technika w programowaniu obiektowym polegająca na ukrywaniu szczegółów implementacji klasy i udostępnianiu tylko niezbędnych metod lub zmiennych do interakcji z obiektem. Dzięki temu kontrolujemy dostęp do danych i metod, co zapewnia bezpieczeństwo i łatwiejsze zarządzanie kodem.\nZalety:\nOchrona danych przed nieautoryzowanym dostępem.\nŁatwiejsze utrzymanie kodu, ponieważ zmiany wewnętrzne w klasie nie wpływają na jej zewnętrzne wykorzystanie.\nPrzykład w Java:\nclass BankAccount {\n    private double saldo;\n    public void deposit(double amount) {\n        if (amount > 0) saldo += amount;\n    }\n    public double getSaldo() {\n        return saldo;\n    }\n}",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jakie jest znaczenie polimorfizmu w programowaniu obiektowym i jakie są przykłady jego praktycznego zastosowania w różnych językach programowania?",
    "answers": [
      {
        "text": "Polimorfizm – znaczenie i przykłady\nPolimorfizm to cecha programowania obiektowego, która pozwala na wykorzystanie tej samej metody w różnych klasach. Pozwala to na elastyczność i ponowne użycie kodu.\nPrzykład w Java:\nclass Zwierze {\n    void dzwiek() {\n        System.out.println(\"Dźwięk zwierzęcia\");\n    }\n}\nclass Kot extends Zwierze {\n    void dzwiek() {\n        System.out.println(\"Miau\");\n    }\n}\nPolimorfizm pozwala na to, by obiekt Kot zachowywał się zgodnie z własną implementacją metody dzwiek(), nawet jeśli jego typ to Zwierze.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jakie są różnice między modyfikatorami dostępu public, private i protected w różnych językach programowania oraz jak te różnice wpływają na sposób zarządzania dostępem do członków klasy?",
    "answers": [
      {
        "text": "Modyfikatory dostępu w różnych językach programowania\nModyfikatory dostępu kontrolują, który kod może uzyskać dostęp do członków klasy. W różnych językach (np. Java, C#) są stosowane modyfikatory takie jak:\npublic – dostęp do członka klasy z każdej lokalizacji w kodzie.\nprivate – dostęp tylko wewnątrz klasy.\nprotected – dostęp w obrębie klasy i klas dziedziczących.\nPrzykład w Java:\npublic class Osoba {\n    private String imie;\n    protected int wiek;\n}",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Wyjaśnij pojęcie klasy i obiektu. Definiowanie klasy, tworzenie i usuwanie obiektów w wybranym języku programowania.",
    "answers": [
      {
        "text": "Klasa i obiekt – definicja, tworzenie i usuwanie\nKlasa jest definicją, która wskazuje, jakie właściwości i metody będą dostępne dla tworzonych obiektów.\nObiekt to instancja klasy, która może być stworzona za pomocą słowa kluczowego new.\nPrzykład w Java:\nclass Samochod {\n    String model;\n}\nSamochod auto = new Samochod();\nUsuwanie obiektów w Java odbywa się automatycznie przez Garbage Collector, który zarządza pamięcią.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Omów składnię definiowania oraz różnice w przekazywaniu parametrów, zwracaniu wartości i wywoływaniu metod obiektowych (instancyjnych) i klasowych (statycznych) na przykładzie wybranego języka.",
    "answers": [
      {
        "text": "Metody instancyjne vs statyczne w C#\nMetody instancyjne są wywoływane na obiektach i mogą korzystać z instancji klasy.\nMetody statyczne są wywoływane na samej klasie, nie wymagają tworzenia obiektów.\nPrzykład w C#:\nclass Matematyka {\n    public static int Dodaj(int a, int b) { return a + b; }\n}\nMatematyka.Dodaj(3, 4); // Wywołanie metody statycznej\n\nclass Samochod {\n    public void Uruchom() { Console.WriteLine(\"Silnik uruchomiony!\"); }\n}\nSamochod auto = new Samochod();\nauto.Uruchom(); // Wywołanie metody instancyjnej\nMetody statyczne są używane, gdy nie ma potrzeby tworzenia obiektów, np. w funkcjach pomocniczych.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Opisz ideę dziedziczenia i jej realizację w wybranym obiektowym języku programowania.",
    "answers": [
      {
        "text": "Ideologia dziedziczenia w programowaniu obiektowym\nDziedziczenie to jedna z podstawowych zasad programowania obiektowego, która umożliwia tworzenie nowych klas na podstawie już istniejących, odziedziczając ich właściwości i metody. Pozwala to na organizowanie klas w hierarchię, gdzie klasy pochodne (subklasy) dziedziczą po klasach bazowych (superklasach). Dzięki dziedziczeniu możemy ponownie wykorzystać kod, a także rozszerzać funkcjonalność bez konieczności pisania tego samego kodu od nowa.\nPrzykład w Javie:\nclass Pojazd {\n    void uruchomSilnik() {\n        System.out.println(\"Silnik uruchomiony!\");\n    }\n}\n\nclass Samochod extends Pojazd {\n    void włączKlimatyzację() {\n        System.out.println(\"Klimatyzacja włączona!\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Samochod samochod = new Samochod();\n        samochod.uruchomSilnik(); // metoda odziedziczona\n        samochod.włączKlimatyzację(); // metoda specyficzna dla Samochodu\n    }\n}\nW tym przypadku klasa Samochod dziedziczy metodę uruchomSilnik z klasy Pojazd.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jakie są kluczowe różnice między zmiennymi automatycznymi a dynamicznymi w kontekście programowania, oraz jak te różnice wpływają na zarządzanie pamięcią i działanie programu?",
    "answers": [
      {
        "text": "Zmienne automatyczne a dynamiczne – różnice i wpływ na pamięć\nZmienne automatyczne są tworzone i usuwane w czasie działania funkcji, w której zostały zadeklarowane. Przechowywane są na stosie, co zapewnia szybki dostęp, ale mają ograniczony czas życia. Są automatycznie usuwane, gdy funkcja kończy działanie.\nZmienne dynamiczne są tworzone na stercie (heap), co daje im możliwość dłuższego życia niż zmienne automatyczne. Muszą być zarządzane ręcznie lub przez system garbage collection (np. w Javie czy Pythonie).\nZalety i wady:\nZmienne automatyczne: Szybki dostęp, ale ograniczony czas życia i wielkość.\nZmienne dynamiczne: Większa elastyczność, ale wymagają zarządzania pamięcią, co może prowadzić do wycieków pamięci.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jak różni się pojęcie interfejsu od implementacji klasy w kontekście programowania obiektowego, oraz jakie są główne zalety korzystania z interfejsów w projektowaniu oprogramowania?",
    "answers": [
      {
        "text": "Interfejs vs implementacja klasy – zalety interfejsów\nW programowaniu obiektowym, interfejs to kontrakt, który definiuje zestaw metod, które muszą zostać zaimplementowane przez klasy go implementujące. Interfejsy nie zawierają implementacji metod, jedynie ich deklaracje.\nImplementacja klasy to z kolei rzeczywista definicja metod i zmiennych w klasie. Klasa implementuje interfejs, ale może zawierać także dodatkową funkcjonalność, która nie została określona w interfejsie.\nZalety interfejsów:\nZwiększają elastyczność i umożliwiają wielokrotne dziedziczenie metod w językach, które tego nie wspierają (np. Java).\nUłatwiają tworzenie testowalnych i łatwych do utrzymania systemów, ponieważ można je wymieniać, nie zmieniając implementacji.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jakie są główne techniki i zalety tworzenia nowych klas poprzez dziedziczenie z już istniejących klas w programowaniu obiektowym, oraz w jaki sposób dziedziczenie wspomaga reużywalność kodu i organizację hierarchii klas?",
    "answers": [
      {
        "text": "Dziedziczenie klas – techniki i zalety\nTworzenie nowych klas poprzez dziedziczenie z istniejących klas pozwala na reużywanie kodu, co upraszcza organizację programu. Dziedziczenie wspomaga tworzenie hierarchii klas, w których klasy dziedziczą właściwości i metody innych klas.\nTechniki:\nDziedziczenie pojedyncze: Klasa pochodna dziedziczy po jednej klasie bazowej.\nDziedziczenie wielokrotne (w językach wspierających): Klasa pochodna dziedziczy po wielu klasach.\nZalety:\nRedukcja powtarzalności kodu.\nUłatwienie rozwoju programu przez dodawanie nowych funkcji bez zmiany istniejącego kodu.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Podaj dwa przykłady programów komputerowych, które są wykorzystywane do symulacji komputerowej, oraz omów ich zastosowanie i główne cechy, które sprawiają, że są użyteczne w symulacji.",
    "answers": [
      {
        "text": "Przykłady programów do symulacji komputerowej\nMATLAB/Simulink:\nZastosowanie: Używany w inżynierii do modelowania, symulacji i analizy systemów dynamicznych.\nGłówne cechy: Obsługuje matematyczne i statystyczne obliczenia, oferuje szeroki zestaw bibliotek do różnych dziedzin.\nANSYS:\nZastosowanie: Symulacja i analiza inżynierska, szczególnie w zakresie mechaniki ciał stałych, przepływów i innych.\nGłówne cechy: Silne narzędzia do analizy strukturalnej, cieplnej, elektromagnetycznej.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Model tworzony w Scilabie/Matlabie jest przybliżeniem rzeczywistości. Dokładnemu odwzorowaniu towarzyszą niepewności np. co do -parametrów modelu -warunków brzegowych które mogą wpływać na dokładność i wiarygodność wyników. Omów te niepewności na dowolnym przykładzie.",
    "answers": [
      {
        "text": "Niepewności w modelach matematycznych (Scilab/Matlab)\nModel tworzony w narzędziach takich jak Scilab czy Matlab jest tylko przybliżeniem rzeczywistości. Zawsze występują pewne niepewności, np. w parametrach modelu (np. współczynniki oporu w modelu aerodynamicznym) lub warunkach brzegowych (np. zmienne temperatury w modelu cieplnym). Te niepewności mogą wpływać na dokładność wyników i ich wiarygodność, dlatego często stosuje się analizę wrażliwości, aby zrozumieć, jak zmiany w danych wejściowych wpływają na wyniki.\nPrzykład:\nModelowanie przepływu powietrza w turbinie wiatrowej może być obarczone niepewnością w określaniu prędkości wiatru, co wpływa na dokładność prognozowanej energii.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jak Python zarządza pamięcią dla obiektów i jakie są główne mechanizmy oraz strategie, które są stosowane w tym języku programowania?",
    "answers": [
      {
        "text": "Zarządzanie pamięcią w Pythonie\nPython zarządza pamięcią za pomocą automatycznego zarządzania pamięcią i garbage collection. Zmienna w Pythonie nie jest przypisana do konkretnego miejsca w pamięci, a obiekt, który jej odpowiada, jest przechowywany w dynamicznie alokowanej pamięci (sterta).\nMechanizmy:\nGarbage collection: Python automatycznie zwalnia pamięć, gdy obiekt nie jest już używany.\nReferencje: Liczba referencji do obiektów jest monitorowana, a obiekt zostaje usunięty, gdy nie ma do niego żadnej referencji.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Wyjaśnij, co to jest wiązanie danych (Data Binding) w kontekście Windows Presentation Foundation i jak może być używane do synchronizacji danych między modelem danych a interfejsem użytkownika.",
    "answers": [
      {
        "text": "Wiązanie danych (Data Binding) w WPF\nData Binding w WPF to mechanizm, który pozwala na synchronizację danych między modelem danych a interfejsem użytkownika. Główna idea polega na tym, że zmiany w danych modelu automatycznie odzwierciedlają się w interfejsie, a zmiany w interfejsie mogą być przekazywane do modelu.\nPrzykład w XAML i C#:\n<TextBox Text=\"{Binding Name}\" />\nW tym przypadku Text w kontrolce TextBox jest powiązany z właściwością Name w modelu danych. Zmiana w Name zaktualizuje tekst w polu.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Wyjaśnij, jak Extensible Application Markup Language współpracuje z kodem C# w aplikacjach Windows Presentation Foundation. Podaj przykład, w jaki sposób można zdefiniować interfejs użytkownika i manipulować nim z poziomu kodu C#.",
    "answers": [
      {
        "text": "WPF i XAML w aplikacjach C#\nWPF (Windows Presentation Foundation) wykorzystuje XAML (Extensible Application Markup Language) do definiowania interfejsu użytkownika. XAML to deklaratywny język znaczników, który pozwala na opisanie struktury UI w sposób wizualny.\nPrzykład:\n<Button Content=\"Kliknij mnie\" Click=\"OnButtonClick\"/>\nTutaj definiujemy przycisk w XAML, a jego logikę obsługujemy w C# w metodzie OnButtonClick.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Omów zasady budowy interfejsów użytkownika systemów informatycznych.",
    "answers": [
      {
        "text": "Budowa interfejsów użytkownika systemów informatycznych\nZasady budowy interfejsów użytkownika obejmują tworzenie intuicyjnych, efektywnych i przyjaznych dla użytkownika UI. Dobre UI powinno być spójne, czytelne i dostosowane do potrzeb użytkownika.\nZasady:\nZrozumiałość: Prosty i logiczny układ elementów.\nResponsywność: Interfejs dostosowuje się do różnych urządzeń.\nIntuicyjność: Użytkownik łatwo rozumie, jak korzystać z systemu.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Omów proces normalizacji baz i jej trzy postaci popierając przykładami.",
    "answers": [
      {
        "text": "Proces normalizacji baz danych i jej trzy postaci\nNormalizacja to proces organizowania danych w bazach danych w celu eliminacji redundancji i zapewnienia integralności danych. Głównym celem normalizacji jest zmniejszenie duplikacji danych, co poprawia efektywność przechowywania i aktualizowania informacji.\nPierwsza postać normalna (1NF): Zakłada, że każda kolumna w tabeli zawiera tylko pojedyncze wartości (atomowe) oraz, że wszystkie rekordy są unikalne. Dodatkowo, wszystkie atrybuty muszą być jednorodne, tzn. zawierać dane tego samego typu.\nPrzykład (1NF): Przed normalizacją:\nID | Imię | Zajęcia\n1  | Jan  | Matematyka, Fizyka\n2  | Anna | Historia\nPo normalizacji do 1NF:\nID | Imię | Zajęcia\n1  | Jan  | Matematyka\n1  | Jan  | Fizyka\n2  | Anna | Historia\nDruga postać normalna (2NF): Wymaga, aby spełniona była 1NF, a także, aby każda kolumna była zależna od całkowitej klucza głównego, a nie tylko od jego części.\nPrzykład (2NF): Przed normalizacją:\nID | Nazwa kursu  | Imię nauczyciela | Zajęcia\n1  | Matematyka   | Jan Kowalski     | Fizyka\n1  | Fizyka       | Anna Nowak       | Matematyka\nPo normalizacji do 2NF:\nTabela 1 (Kursy): ID | Nazwa kursu\n1              | Matematyka\n2              | Fizyka\nTabela 2 (Nauczyciele): Kurs_ID | Nauczyciel\n1         | Jan Kowalski\n2         | Anna Nowak\nTrzecia postać normalna (3NF): Wymaga, aby spełniona była 2NF, a także aby każda kolumna niekluczowa była zależna bezpośrednio od klucza głównego i nie miała zależności przechodnich (tzn. nie może być zależna od innych kolumn, które nie są kluczem głównym).\nPrzykład (3NF): Przed normalizacją:\nID | Imię | Miasto    | Kod pocztowy\n1  | Jan  | Warszawa  | 00-000\n2  | Anna | Kraków    | 30-000\nPo normalizacji do 3NF:\nTabela 1 (Osoby): ID | Imię | Miasto_ID\n1                 | Jan  | 1\n2                 | Anna | 2\nTabela 2 (Miasta): Miasto_ID | Miasto     | Kod pocztowy\n1              | Warszawa  | 00-000\n2              | Kraków    | 30-000",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "W jaki sposób notacja BPMN (ang. Business Process Model and Notation) może być wykorzystana do modelowania złożonych procesów biznesowych w organizacji, i jakie wyzwania mogą się pojawić podczas jej implementacji w systemach informatycznych?",
    "answers": [
      {
        "text": "Notacja BPMN i wyzwania w implementacji\nBPMN (Business Process Model and Notation) to standard notacji graficznej służący do modelowania procesów biznesowych. Dzięki BPMN można tworzyć zrozumiałe i spójne diagramy procesów, które pomagają w analizie, automatyzacji i optymalizacji działań organizacyjnych.\nZastosowanie BPMN:\nWizualizacja procesów: BPMN umożliwia tworzenie przejrzystych i zrozumiałych schematów procesów, co ułatwia zrozumienie skomplikowanych działań w organizacji.\nKomunikacja z interesariuszami: Umożliwia przekazywanie zrozumiałych informacji między zespołami biznesowymi i technicznymi.\nOptymalizacja: Pozwala na identyfikację wąskich gardeł, redundancji i innych problemów w procesach.\nWyzwania:\nZłożoność procesów: Duża liczba elementów BPMN może sprawić, że diagramy staną się nieczytelne.\nIntegracja z systemami IT: Implementacja procesów BPMN w systemach informatycznych może wymagać zaawansowanych narzędzi do automatyzacji procesów.\nSzkolenie zespołów: Użycie BPMN wymaga pewnego poziomu wiedzy i doświadczenia, co może stanowić wyzwanie w organizacjach bez odpowiedniego przeszkolenia.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Proszę omówić i porównać modele relacyjne i nierelacyjne bazy danych.",
    "answers": [
      {
        "text": "Modele relacyjne vs. nierelacyjne bazy danych\nModele relacyjne: Bazują na tabelach, gdzie dane są przechowywane w wierszach i kolumnach. Relacyjne bazy danych, jak MySQL, PostgreSQL, SQL Server, używają języka SQL do zarządzania danymi.\nZalety:\nStruktura danych jest bardzo uporządkowana i spójna.\nZastosowanie kluczy głównych i obcych zapewnia integralność danych.\nObsługują transakcje ACID (Atomicity, Consistency, Isolation, Durability).\nWady:\nSkalowalność może być problemem w przypadku dużych zbiorów danych.\nModele relacyjne mogą być mniej elastyczne w przypadku nieustrukturalizowanych danych.\nModele nierelacyjne (NoSQL): Bazy danych, które nie stosują tabeli i wierszy. Zamiast tego mogą używać różnych formatów przechowywania danych, takich jak dokumenty, klucze-wartości, grafy czy kolumny.\nZalety:\nLepsza skalowalność pozioma.\nElastyczność w przechowywaniu danych niestrukturalnych.\nWydajność w obsłudze dużych ilości danych w czasie rzeczywistym.\nWady:\nBrak jednolitej struktury może prowadzić do problemów z integralnością danych.\nBrak standardowego języka zapytań.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Proszę omówić zasady definiowania wzorców funkcji i klas (znane również jako szablony lub generics).",
    "answers": [
      {
        "text": "Definiowanie wzorców funkcji i klas (Generics)\nGenerics (wzorce szablonów) to technika umożliwiająca tworzenie funkcji i klas, które mogą działać na różnych typach danych bez potrzeby wielokrotnego definiowania tych samych funkcji. Generics zwiększają reużywalność i bezpieczeństwo kodu, ponieważ umożliwiają operowanie na typach w sposób ogólny i elastyczny.\nPrzykład w Javie (Generics):\nclass Para<T, U> {\n    private T pierwszy;\n    private U drugi;\n\n    public Para(T pierwszy, U drugi) {\n        this.pierwszy = pierwszy;\n        this.drugi = drugi;\n    }\n\n    public T getPierwszy() {\n        return pierwszy;\n    }\n\n    public U getDrugi() {\n        return drugi;\n    }\n}\nTutaj Para<T, U> to klasa, która może przechowywać dwa obiekty różnych typów, np. Para<Integer, String>.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Proszę podać główne cechy zunifikowanego języka modelowania systemów informatycznych (ang. UML ) – zastosowanie, charakterystykę oraz jego podstawowe diagramy.",
    "answers": [
      {
        "text": "Zunifikowany język modelowania systemów informatycznych (UML)\nUML (Unified Modeling Language) to język służący do tworzenia modeli systemów informatycznych, umożliwiający ich graficzne przedstawienie i zrozumienie.\nGłówne cechy:\nZastosowanie: UML jest szeroko stosowany w inżynierii oprogramowania do projektowania, dokumentowania i analizowania systemów.\nDiagramy: UML oferuje różne typy diagramów, takie jak: \nDiagramy klas: Przedstawiają struktury obiektów w systemie.\nDiagramy przypadków użycia: Pokazują interakcje między użytkownikami a systemem.\nDiagramy sekwencji: Ilustrują kolejność komunikatów między obiektami.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Omów pojęcie abstrakcji i wskaż jego znaczenie z punktu widzenia wielokrotnego użycia (ang. Reuse).",
    "answers": [
      {
        "text": "Abstrakcja i jej znaczenie dla wielokrotnego użycia (Reuse)\nAbstrakcja to proces ukrywania szczegółów implementacji i skupianie się na istotnych właściwościach obiektu lub systemu. Pozwala to na wielokrotne użycie komponentów i klas w różnych częściach systemu, bez konieczności ponownego pisania kodu.\nZnaczenie:\nUmożliwia tworzenie uniwersalnych rozwiązań, które mogą być wykorzystywane w różnych kontekstach.\nUłatwia rozwój systemów przez oddzielanie logiki biznesowej od szczegółów implementacyjnych.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Mechanizmy zapewniania bezpieczeństwa i niezawodności w systemach zarządzania bazami danych.",
    "answers": [
      {
        "text": "Mechanizmy zapewniania bezpieczeństwa i niezawodności w bazach danych\nBezpieczeństwo w systemach bazodanowych obejmuje:\nAutentykację i autoryzację: Określenie, kto ma dostęp do danych i jaką rolę pełni.\nSzyfrowanie: Chroni dane przechowywane w bazie przed nieautoryzowanym dostępem.\nTransakcje: Zapewniają integralność danych i ich spójność (ACID).",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Omów pojęcie wzorca projektowego ich rodzaje oraz jego rola w procesie projektowania.",
    "answers": [
      {
        "text": "Wzorce projektowe – definicja i rola w projektowaniu\nWzorce projektowe to sprawdzone, powtarzalne rozwiązania dla najczęstszych problemów projektowych w inżynierii oprogramowania. Pomagają w tworzeniu elastycznych, skalowalnych i łatwych do utrzymania systemów.\nRodzaje wzorców:\nCreational (tworzeniowe): Wzorce służące do tworzenia obiektów, np. Factory Method.\nStructural (strukturalne): Wzorce organizujące klasy i obiekty, np. Adapter.\nBehavioral (behawioralne): Wzorce definiujące komunikację między obiektami, np. Observer.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Wyjaśnij na przykładach zasady SOLID w projektowaniu obiektowym.",
    "answers": [
      {
        "text": "Zasady SOLID w projektowaniu obiektowym\nSOLID to zestaw zasad ułatwiających tworzenie czytelnego i elastycznego kodu:\nS (Single Responsibility Principle) – Każda klasa powinna mieć tylko jedną odpowiedzialność.\nO (Open/Closed Principle) – Klasy powinny być otwarte na rozszerzenia, ale zamknięte na modyfikacje.\nL (Liskov Substitution Principle) – Obiekty klas pochodnych powinny być wymienne z obiektami klas bazowych.\nI (Interface Segregation Principle) – Interfejsy powinny być dopasowane do potrzeb klas.\nD (Dependency Inversion Principle) – Zależności powinny być skierowane na abstrakcje, a nie konkretne klasy.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Co to jest język zapytań do baz danych i z jakich elementów się składa. Omów ich przeznaczenie.",
    "answers": [
      {
        "text": "Język zapytań do baz danych – składniki i przeznaczenie\nJęzyk zapytań do baz danych (SQL) to język służący do komunikacji z bazami danych, umożliwiający wykonywanie operacji na danych.\nSkładniki:\nDML (Data Manipulation Language): Służy do manipulacji danymi (np. SELECT, INSERT, UPDATE, DELETE).\nDDL (Data Definition Language): Służy do definiowania struktury bazy danych (np. CREATE, ALTER, DROP).\nDCL (Data Control Language): Służy do kontrolowania dostępu do danych (np. GRANT, REVOKE).\nTCL (Transaction Control Language): Zarządza transakcjami (np. COMMIT, ROLLBACK).\nPrzeznaczenie: SQL jest używany do zarządzania bazami danych, pobierania, modyfikowania, dodawania i usuwania danych.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Omów system śledzenia traksakcji w bazach danych i podaj przykłady problemów jakie on rozwiązuje.",
    "answers": [
      {
        "text": "System śledzenia transakcji w bazach danych i przykłady problemów, które rozwiązuje\nSystem śledzenia transakcji w bazach danych to mechanizm umożliwiający zarządzanie transakcjami w sposób zapewniający spójność, niezawodność i integralność danych. Główne cechy to:\nACID (Atomicity, Consistency, Isolation, Durability): Zapewnia, że transakcje są wykonywane w sposób, który gwarantuje poprawność danych. \nAtomicity: Transakcja jest traktowana jako całość – albo wszystkie operacje w ramach transakcji zostaną zakończone pomyślnie, albo żadna z nich nie zostanie zastosowana.\nConsistency: Transakcja doprowadza system do spójnego stanu przed i po jej wykonaniu.\nIsolation: Transakcje są wykonywane w izolacji od siebie, co oznacza, że wyniki jednej transakcji nie są widoczne dla innych do czasu jej zakończenia.\nDurability: Po zakończeniu transakcji jej zmiany są trwale zapisane, nawet w przypadku awarii systemu.\nProblemy, które rozwiązuje:\nProblem braku spójności: System śledzenia transakcji zapewnia, że dane będą spójne, nawet jeśli transakcje są przerwane przez awarię.\nProblem nieizolowanych transakcji: Mechanizm transakcji zapewnia, że operacje nie będą się nawzajem zakłócały.\nProblem odzyskiwania po awarii: Zabezpiecza dane przed utratą dzięki zapewnieniu trwałości operacji.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Omów etapy inżynierii oprogramowania i wskaż jakie artefakty powstają na każdym z etapów.",
    "answers": [
      {
        "text": "Etapy inżynierii oprogramowania i artefakty powstające na każdym etapie\nEtapy inżynierii oprogramowania:\nAnaliza wymagań: Zbieranie i analizowanie wymagań systemu.\nArtefakty: Dokument wymagań, analiza interesariuszy, przypadki użycia.\nProjektowanie systemu: Tworzenie ogólnej architektury i szczegółowego projektu systemu.\nArtefakty: Diagramy UML, dokumentacja architektury, prototypy interfejsu użytkownika.\nImplementacja: Programowanie systemu zgodnie z zaprojektowaną architekturą.\nArtefakty: Kod źródłowy, dokumentacja kodu, testy jednostkowe.\nTestowanie: Weryfikacja i walidacja systemu pod kątem błędów i spełnienia wymagań.\nArtefakty: Raporty z testów, plany testów, dokumentacja błędów.\nUtrzymanie: Dbanie o system po wdrożeniu, usuwanie błędów i wdrażanie nowych funkcjonalności.\nArtefakty: Zgłoszenia błędów, poprawki do kodu, dokumentacja aktualizacji.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Omów techniki pozyskiwania wymagań. Wskaż, które z nich są adekwatne gdy odbiorcami rozwiązania są firmy B2B (Business-to-Business), a które gdy indywidualni użytkownicy B2C (Buisness-to-Consumer).",
    "answers": [
      {
        "text": "Techniki pozyskiwania wymagań i ich zastosowanie w B2B i B2C\nTechniki pozyskiwania wymagań:\nWywiady: Rozmowy z interesariuszami w celu poznania ich potrzeb i oczekiwań.\nB2B: Wywiady z menedżerami, inżynierami, klientami B2B.\nB2C: Wywiady z użytkownikami indywidualnymi, badania fokusowe.\nWarsztaty (Workshops): Spotkania grupowe, gdzie omawia się wymagania.\nB2B: Warsztaty z przedstawicielami różnych działów organizacji.\nB2C: Warsztaty z użytkownikami, by lepiej zrozumieć ich potrzeby.\nPrototypowanie: Tworzenie wstępnej wersji systemu, aby zobaczyć, czy spełnia oczekiwania użytkowników.\nB2B: Wykorzystywane w przypadku dużych systemów B2B, np. ERP.\nB2C: Prototypy aplikacji mobilnych i webowych do testowania z użytkownikami.\nAnkiety i kwestionariusze: Zbieranie danych w formie pytań do szerokiego kręgu osób.\nB2B: Ankiety dla przedsiębiorstw w celu zbierania informacji o preferencjach.\nB2C: Kwestionariusze skierowane do użytkowników końcowych, np. aplikacji konsumenckich.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jakie funkcje powinien realizować system zarządzania bazą danych?",
    "answers": [
      {
        "text": "Funkcje systemu zarządzania bazą danych\nSystem zarządzania bazą danych (DBMS) pełni kluczową rolę w przechowywaniu, zarządzaniu i przetwarzaniu danych. Jego główne funkcje to:\nPrzechowywanie danych: DBMS przechowuje dane w sposób uporządkowany, zapewniając łatwy dostęp.\nZarządzanie dostępem: Kontroluje, kto ma dostęp do danych i w jakim zakresie (autentykacja, autoryzacja).\nManipulacja danymi: Umożliwia dodawanie, modyfikowanie, usuwanie i wyszukiwanie danych.\nBezpieczeństwo: Szyfrowanie, tworzenie kopii zapasowych, odzyskiwanie danych.\nZarządzanie transakcjami: Obsługuje mechanizmy transakcyjne zapewniające integralność danych.\nIndeksowanie: Zoptymalizowane mechanizmy wyszukiwania danych.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Podaj uwarunkowania stosowania podejścia obiektowego i strukturalnego w projektowaniu systemów informatycznych.",
    "answers": [
      {
        "text": "Uwarunkowania stosowania podejścia obiektowego i strukturalnego w projektowaniu systemów informatycznych\nPodejście obiektowe (OOP):\nUwarunkowania: Stosowane w przypadku systemów, które wymagają dużej elastyczności, rozwoju i ponownego wykorzystania kodu. Dobre dla aplikacji złożonych, które muszą być łatwe w utrzymaniu i rozszerzaniu.\nPrzykład: Programy oparte na aplikacjach mobilnych i rozbudowanych systemach informatycznych.\nPodejście strukturalne:\nUwarunkowania: Skierowane na proste, sekwencyjne operacje, gdzie kod jest bardziej liniowy i łatwiejszy do zrozumienia w mniejszych projektach.\nPrzykład: Systemy wbudowane, proste aplikacje desktopowe.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jakie są kluczowe wymagania funkcjonalne i niefunkcjonalne systemu, który ma integrować różnorodne systemy informatyczne w dużej organizacji?",
    "answers": [
      {
        "text": "Kluczowe wymagania funkcjonalne i niefunkcjonalne systemu integrującego różnorodne systemy informatyczne\nWymagania funkcjonalne:\nIntegracja z innymi systemami: Możliwość wymiany danych z systemami ERP, CRM, itp.\nObsługa różnych formatów danych: Konwersja i przesyłanie danych między różnymi formatami.\nWydajność: Szybka wymiana danych i integracja w czasie rzeczywistym.\nWymagania niefunkcjonalne:\nBezpieczeństwo: Silne mechanizmy szyfrowania, uwierzytelnianie użytkowników.\nSkalowalność: Możliwość rozbudowy systemu o dodatkowe moduły w przyszłości.\nWydajność: Niski czas odpowiedzi, optymalizacja zapytań.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Omów zasady działania wzorca MVC (ang. Model View Controler). W jakich projektach zastosowałbyś tę architekturę?",
    "answers": [
      {
        "text": "Zasady działania wzorca MVC (Model View Controller)\nMVC (Model-View-Controller) to wzorzec architektoniczny, który dzieli aplikację na trzy główne komponenty:\nModel: Odpowiada za logikę biznesową i dostęp do danych.\nView: Odpowiada za interfejs użytkownika (UI).\nController: Pośredniczy pomiędzy modelem a widokiem, zarządza logiką aplikacji.\nZastosowanie: MVC jest idealne w aplikacjach webowych i mobilnych, gdzie mamy wyraźny podział na dane (Model), interfejs użytkownika (View) i logikę sterującą (Controller). Przykład: aplikacje typu e-commerce, blogi.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Omów główne zasady metodyk zwinnych i jakie rozwiązują problemy?",
    "answers": [
      {
        "text": "Główne zasady metodyk zwinnych i rozwiązywane problemy\nMetodyki zwinne (Agile):\nIteracyjne i przyrostowe podejście: Praca w krótkich iteracjach, dostarczanie działających wersji oprogramowania.\nElastyczność i adaptacja: Łatwość w adaptacji do zmieniających się wymagań.\nWspółpraca z klientem: Bliska współpraca z interesariuszami w celu lepszego zrozumienia ich potrzeb.\nSkupienie na wartości biznesowej: Priorytetem jest dostarczenie wartościowych funkcji.\nRozwiązywane problemy:\nSzybka reakcja na zmiany w wymaganiach.\nZwiększenie transparentności procesu tworzenia oprogramowania.\nUłatwienie dostosowywania oprogramowania do rzeczywistych potrzeb użytkowników.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Z jakimi obszarami związane są wymagania niefunkcjonale i jakich? Podaj przykłady poprawnie sformułowanych wymagań.",
    "answers": [
      {
        "text": "Wymagania niefunkcjonalne i przykłady\nWymagania niefunkcjonalne odnoszą się do jakości systemu, takich jak:\nWydajność: Przykład: System powinien obsługiwać 10 000 zapytań na minutę.\nSkalowalność: Przykład: System powinien być w stanie obsłużyć 1 milion użytkowników.\nBezpieczeństwo: Przykład: Wszystkie dane powinny być szyfrowane za pomocą algorytmu AES-256.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Wymień i opisz cechy różnych typów aplikacji mobilnych (natywne, hybrydowe, wieloplatformowe itp.).",
    "answers": [
      {
        "text": "Cechy różnych typów aplikacji mobilnych\nAplikacje natywne:\nDziałają na określonej platformie (iOS, Android).\nWysoka wydajność i dostęp do pełnej funkcjonalności urządzenia.\nWymagają osobnych wersji dla każdej platformy.\nAplikacje hybrydowe:\nKombinacja aplikacji natywnych i webowych.\nJedna baza kodu dla wielu platform.\nMniejsza wydajność w porównaniu z aplikacjami natywnymi.\nAplikacje wieloplatformowe:\nPisane raz i uruchamiane na wielu platformach (np. Xamarin, React Native).\nOferują kompromis między wydajnością a oszczędnością czasu rozwoju.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nZagadnienia dla kierunku Informatyka,\nspecjalność: Aplikacje mobilne i bazy danych",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jakie są metody zarządzania pamięcią w aplikacjach mobilnych?",
    "answers": [
      {
        "text": "Metody zarządzania pamięcią w aplikacjach mobilnych\nW aplikacjach mobilnych zarządzanie pamięcią jest kluczowym elementem optymalizacji, ponieważ urządzenia mobilne mają ograniczone zasoby. Główne metody zarządzania pamięcią to:\nGarbage Collection (GC): Systemy operacyjne, takie jak Android i iOS, automatycznie zarządzają pamięcią za pomocą GC, który usuwa nieużywane obiekty z pamięci. Programista nie musi manualnie zwalniać pamięci, ale musi zadbać o unikanie wycieków pamięci.\nZarządzanie zasobami: Programiści muszą dbać o poprawne zwalnianie zasobów, takich jak obrazy, pliki wideo czy połączenia sieciowe, aby uniknąć wycieków pamięci.\nZarządzanie pamięcią podręczną: Używanie pamięci podręcznej do przechowywania danych, takich jak obrazy czy dane z sieci, aby zmniejszyć liczbę operacji I/O i zaoszczędzić pamięć.\nOgraniczanie liczby obiektów: Optymalizacja alokacji pamięci poprzez minimalizowanie liczby tworzonych obiektów i dbanie o ich ponowne użycie.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "W jaki sposób można zoptymalizować wydajność aplikacji iOS, proszę przedstawić różne techniki i narzędzia używane do monitorowania i poprawy wydajności aplikacji, takie jak profilowanie, zarządzanie pamięcią i optymalizacja renderowania interfejsu użytkownika?",
    "answers": [
      {
        "text": "Optymalizacja wydajności aplikacji iOS\nAby zoptymalizować wydajność aplikacji na iOS, programiści używają różnych technik i narzędzi:\nProfilowanie: Xcode oferuje narzędzia takie jak Instruments, które umożliwiają profilowanie aplikacji pod kątem zużycia CPU, pamięci i innych zasobów. Profilowanie pomaga zidentyfikować miejsca w aplikacji, które wymagają optymalizacji.\nZarządzanie pamięcią: iOS zarządza pamięcią automatycznie, ale programiści muszą unikać wycieków pamięci i odpowiednio zarządzać zasobami. Używanie ARC (Automatic Reference Counting) w iOS pozwala na automatyczne zwalnianie pamięci, ale należy pamiętać o odpowiednim zarządzaniu cyklem życia obiektów.\nOptymalizacja renderowania UI: iOS oferuje różne narzędzia do analizy renderowania interfejsu użytkownika, takie jak Instruments (Core Animation) do monitorowania opóźnień renderowania UI. Optymalizacja animacji, redukcja liczby widoków w hierarchii UI i używanie lazy loading może znacznie poprawić wydajność.\nRedukcja operacji synchronizacji: Zbyt częsta synchronizacja z serwerem może prowadzić do spowolnienia aplikacji. Optymalizowanie czasów synchronizacji i zarządzanie nimi, np. w tle, może poprawić wydajność.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jakie techniki i narzędzia można zastosować, aby zoptymalizować wydajność aplikacji mobilnej, minimalizując czas ładowania i zużycie zasobów?",
    "answers": [
      {
        "text": "Optymalizacja wydajności aplikacji mobilnej – minimalizacja czasu ładowania i zużycia zasobów\nAby zoptymalizować wydajność aplikacji mobilnej, można zastosować:\nLazy loading: Wczytywanie danych lub widoków tylko wtedy, gdy są one potrzebne, zamiast ładowania wszystkiego na raz.\nKompresja zasobów: Kompresowanie obrazów, plików wideo i innych zasobów w celu zmniejszenia ich rozmiaru, co pozwala na szybsze ładowanie aplikacji.\nOptymalizacja zapytań sieciowych: Redukcja liczby zapytań sieciowych, używanie odpowiednich algorytmów kompresji, minimalizacja danych przesyłanych między urządzeniem a serwerem.\nUżycie pamięci podręcznej: Przechowywanie często używanych danych (np. obrazy, dane z API) w pamięci podręcznej, co przyspiesza dostęp do nich i zmniejsza obciążenie sieci.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jak skutecznie zarządzać stanem aplikacji mobilnej, aby zapewnić płynne działanie i zachowanie danych podczas zmiany konfiguracji, takich jak obrót ekranu?",
    "answers": [
      {
        "text": "Zarządzanie stanem aplikacji mobilnej – zmiany konfiguracji\nAby zapewnić płynne działanie aplikacji i zachowanie danych podczas zmiany konfiguracji (np. obrót ekranu), można zastosować:\nPrzechowywanie stanu w pamięci: Korzystanie z mechanizmów przechowywania stanu (np. onSaveInstanceState w Androidzie lub state restoration w iOS), które umożliwiają zachowanie danych i ponowne załadowanie ich po zmianie konfiguracji.\nZarządzanie danymi w bazach danych: Przechowywanie kluczowych danych aplikacji w bazach danych lub innych trwałych magazynach, aby były dostępne po ponownym uruchomieniu aplikacji.\nUnikanie blokowania interfejsu: Aplikacja powinna wykorzystywać asynchroniczne operacje w celu uniknięcia blokowania interfejsu użytkownika podczas zmian konfiguracji.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jakie są najlepsze praktyki integracji aplikacji mobilnej z backendem, aby zapewnić niezawodną komunikację i synchronizację danych?",
    "answers": [
      {
        "text": "Najlepsze praktyki integracji aplikacji mobilnej z backendem\nAby zapewnić niezawodną komunikację i synchronizację danych, należy:\nUżywać bezpiecznych połączeń (HTTPS): Zapewnienie bezpieczeństwa danych przesyłanych między aplikacją mobilną a backendem.\nWykorzystanie technologii push (np. FCM, APNs): Umożliwia to synchronizację danych w czasie rzeczywistym.\nZoptymalizowane API: Tworzenie RESTful API, które jest szybkie, wydajne i łatwe w integracji z aplikacjami mobilnymi.\nUżywanie lokalnych baz danych: Zapewnia to możliwość przechowywania danych offline i synchronizacji ich, gdy połączenie z internetem będzie dostępne.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jakie techniki można zastosować, aby minimalizować zużycie baterii przez aplikację mobilną, jednocześnie zapewniając pełną funkcjonalność?",
    "answers": [
      {
        "text": "Minimalizacja zużycia baterii przez aplikację mobilną\nAby minimalizować zużycie baterii, należy:\nOptymalizować operacje w tle: Ograniczenie częstotliwości wykonywania operacji w tle (np. zapytań sieciowych).\nWykorzystywanie lokalizacji tylko wtedy, gdy jest to konieczne: Używanie GPS tylko w razie potrzeby i w trybie oszczędzania energii.\nZarządzanie powiadomieniami: Ograniczenie liczby powiadomień, które mogą wpływać na zużycie energii.\nUżywanie trybu oszczędzania energii: Wiele urządzeń mobilnych ma wbudowane tryby oszczędzania energii, które ograniczają działanie aplikacji w tle.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jak zarządzać zasobami aplikacji mobilnej, takimi jak obrazy, dźwięki i pliki wideo, aby zoptymalizować jej wydajność i rozmiar?",
    "answers": [
      {
        "text": "Zarządzanie zasobami aplikacji mobilnej (obrazy, dźwięki, wideo)\nAby zoptymalizować wydajność i rozmiar aplikacji:\nKompresja zasobów: Kompresowanie obrazów (np. format WebP), dźwięków i plików wideo, aby zmniejszyć ich rozmiar bez utraty jakości.\nUżywanie odpowiednich rozdzielczości: Ładowanie obrazów o odpowiednich rozdzielczościach, które są dostosowane do ekranu urządzenia.\nLazy loading zasobów: Ładowanie zasobów tylko wtedy, gdy są one wymagane, zamiast ładowania ich na starcie aplikacji.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jak zaprojektować aplikację mobilną, która działa efektywnie zarówno w trybie online, jak i offline, zapewniając synchronizację danych, gdy połączenie jest dostępne?",
    "answers": [
      {
        "text": "Projektowanie aplikacji mobilnej do pracy online i offline\nAby aplikacja działała efektywnie zarówno w trybie online, jak i offline:\nLokalne przechowywanie danych: Używanie baz danych lokalnych (np. SQLite, CoreData), które przechowują dane offline.\nSynchronizacja danych: Zapewnienie mechanizmów synchronizacji, które umożliwiają przesyłanie danych na serwer, gdy połączenie jest dostępne.\nZarządzanie stanem offline: Informowanie użytkownika o braku połączenia i umożliwienie kontynuowania pracy w trybie offline.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jakie są skuteczne modele monetyzacji aplikacji mobilnych, takie jak reklamy, zakupy w aplikacji, subskrypcje, i jakie są ich zalety i wady w kontekście doświadczenia użytkownika?",
    "answers": [
      {
        "text": "Modele monetyzacji aplikacji mobilnych\nModele monetyzacji:\nReklamy: Wstawianie reklam w aplikacji (np. Google AdMob). Zaletą jest brak konieczności płacenia przez użytkownika, wadą – możliwość irytowania użytkowników.\nZakupy w aplikacji: Umożliwienie użytkownikom kupowania treści lub funkcji w aplikacji. Zaletą jest łatwy dostęp do dodatkowych funkcji, ale wymaga dokładnego planowania modeli cenowych.\nSubskrypcje: Oferowanie subskrypcji na dostęp do treści lub funkcji w aplikacji. Zaletą jest przewidywalny dochód, ale może odstraszyć użytkowników, którzy nie są gotowi na regularne płatności.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jak projektować i implementować funkcje współdzielenia zawartości w aplikacjach mobilnych, takie jak udostępnianie zdjęć, plików i treści w mediach społecznościowych?",
    "answers": [
      {
        "text": "Funkcje współdzielenia zawartości w aplikacjach mobilnych\nAby zaimplementować funkcje współdzielenia zawartości:\nIntegracja z mediami społecznościowymi: Użycie API takich jak Facebook SDK, Twitter SDK do łatwego udostępniania treści.\nUdostępnianie plików: Możliwość wysyłania plików za pomocą systemów udostępniania plików, takich jak AirDrop (iOS) lub Intent (Android).\nTworzenie uniwersalnych przycisków udostępniania: Umożliwienie użytkownikom udostępniania treści w różnych serwisach społecznościowych bez konieczności przełączania aplikacji.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jakie są wyzwania związane z optymalizacją aplikacji mobilnych pod kątem różnych wersji systemów operacyjnych i jak z nimi sobie radzić?",
    "answers": [
      {
        "text": "Wyzwania związane z optymalizacją aplikacji mobilnych pod kątem różnych wersji systemów operacyjnych i jak z nimi sobie radzić?\nWyzwania:\nFragmentacja urządzeń: Różne wersje systemów operacyjnych, urządzenia o różnych rozdzielczościach ekranów, procesorach, pojemności pamięci itp. mogą prowadzić do problemów z kompatybilnością aplikacji.\nRóżnice w interfejsie użytkownika: Systemy operacyjne mogą mieć różne wytyczne dotyczące interfejsu użytkownika, co wymaga dostosowania aplikacji do specyficznych wymagań platformy.\nJak radzić sobie z wyzwaniami:\nTestowanie na różnych urządzeniach: Regularne testowanie aplikacji na różnych wersjach systemów operacyjnych i urządzeniach za pomocą emulatorów oraz rzeczywistych urządzeń.\nUżywanie narzędzi takich jak Firebase czy TestFlight (iOS) oraz Android Emulator: Pomagają w testowaniu aplikacji na różnych wersjach systemów operacyjnych.\nResponsywny design: Użycie rozwiązań responsywnych, które umożliwiają dostosowanie UI do różnych rozdzielczości ekranów.\nWersjonowanie kodu: Korzystanie z narzędzi do wersjonowania kodu oraz wtyczek umożliwiających wsparcie dla starszych wersji systemów operacyjnych.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jak projektować aplikacje mobilne z myślą o skalowalności, aby rosnąca liczba użytkowników nie wpływała negatywnie na wydajność i dostępność aplikacji?",
    "answers": [
      {
        "text": "Projektowanie aplikacji mobilnych z myślą o skalowalności\nAby zaprojektować aplikację mobilną, która będzie skalowalna:\nModularność: Tworzenie aplikacji w sposób modularny, dzieląc ją na mniejsze komponenty. Umożliwia to łatwiejsze zarządzanie aplikacją przy wzroście liczby użytkowników.\nChmurowa infrastruktura: Wykorzystanie chmurowych usług backendowych (np. AWS, Google Cloud) do przechowywania danych i obsługi logiki biznesowej, co zapewnia skalowalność.\nOptymalizacja zapytań sieciowych: Używanie algorytmów kompresji oraz zmniejszenie liczby zapytań do serwera w celu zminimalizowania opóźnień i zmniejszenia obciążenia serwerów.\nZastosowanie CDN: Korzystanie z sieci dostarczania treści (CDN), aby przyspieszyć ładowanie zasobów aplikacji z różnych lokalizacji geograficznych.\nUżycie load balancerów i rozproszonych baz danych: Rozdzielanie obciążenia między serwery i stosowanie baz danych, które obsługują dużą ilość danych oraz zapewniają redundancję.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Czym jest Android Studio i jakie są jego główne funkcje?",
    "answers": [
      {
        "text": "Android Studio i jego główne funkcje\nAndroid Studio to oficjalne środowisko programistyczne dla systemu Android. Jego główne funkcje to:\nEdytor kodu: Zaawansowany edytor z funkcjami automatycznego uzupełniania kodu, refaktoryzacji oraz diagnostyki błędów.\nEmulator Android: Umożliwia uruchomienie aplikacji na różnych wersjach Androida i urządzeniach wirtualnych.\nNarzędzia do debugowania: Android Studio zapewnia narzędzia do debugowania aplikacji, które pomagają śledzić błędy i analizować logi.\nWbudowane narzędzia do testowania: Integracja z narzędziami do testowania, zarówno jednostkowymi, jak i UI, umożliwia sprawdzanie jakości aplikacji.\nDesigner UI: Graficzny edytor do tworzenia interfejsów użytkownika w technologii XML oraz Jetpack Compose.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jakie są kluczowe różnice między frameworkiem UIKit a SwiftUI w kontekście tworzenia interfejsów użytkownika w aplikacjach iOS, proszę omówić, jakie korzyści i wyzwania wiążą się z korzystaniem z każdego z tych frameworków oraz w jakich scenariuszach jeden może być preferowany nad drugim?",
    "answers": [
      {
        "text": "Różnice między UIKit a SwiftUI w kontekście tworzenia interfejsów użytkownika\nUIKit:\nTradycyjny framework UI używany w iOS.\nWymaga ręcznego zarządzania hierarchią widoków i kontrolerów.\nBardziej rozbudowany i elastyczny, ale ma wyższą krzywą uczenia się.\nSwiftUI:\nNowoczesny framework oparty na deklaratywnym podejściu do tworzenia UI.\nUmożliwia łatwiejsze tworzenie UI poprzez deklarację stanu aplikacji i jego aktualizację.\nLepsza integracja z nowymi funkcjami systemu iOS, takich jak Dark Mode i Accessibility.\nKorzyści i wyzwania:\nUIKit: Jest bardziej dojrzały, szeroko wspierany i elastyczny, ale wymaga więcej kodu do zarządzania widokami.\nSwiftUI: Uproszczony kod, lepsze wsparcie dla dynamicznych interfejsów, ale może mieć ograniczenia w starszych wersjach iOS (przynajmniej na początku).\nPreferencje: SwiftUI może być preferowany w nowych projektach, natomiast UIKit pozostaje preferowaną opcją w starszych aplikacjach, gdzie konieczne jest utrzymanie kompatybilności wstecznej.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Omów rolę bibliotek wsparcia wzornictwa w projektowaniu i programowaniu aplikacji mobilnych dla systemu Android.",
    "answers": [
      {
        "text": "Rola bibliotek wsparcia wzornictwa w projektowaniu aplikacji Android\nBiblioteki wsparcia wzornictwa w Androidzie oferują narzędzia i komponenty ułatwiające projektowanie interfejsów zgodnych z wytycznymi Material Design. Do najważniejszych funkcji należą:\nZestaw komponentów UI: Takich jak widżety przycisków, przełączników, pasków narzędzi, które pozwalają na spójne projektowanie aplikacji.\nMaterial Theming: Umożliwia łatwe dostosowanie wyglądu aplikacji poprzez palety kolorów, style typografii i kształty elementów UI.\nGesty i animacje: Ułatwiają dodawanie animacji, jak przejścia między ekranami czy efekty dotykowe, które poprawiają interaktywność aplikacji.\nZgodność z wersjami Androida: Zapewniają wsparcie dla różnych wersji systemu Android, co pozwala na tworzenie spójnego UI, niezależnie od wersji OS.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jakie są główne rodzaje testów w testowaniu aplikacji mobilnych?",
    "answers": [
      {
        "text": "Rodzaje testów w testowaniu aplikacji mobilnych\nTesty jednostkowe (Unit tests): Testowanie poszczególnych funkcji i metod aplikacji w celu sprawdzenia, czy działają one zgodnie z oczekiwaniami.\nTesty integracyjne (Integration tests): Testowanie interakcji pomiędzy różnymi modułami lub komponentami aplikacji.\nTesty funkcjonalne (Functional tests): Sprawdzanie, czy aplikacja działa zgodnie z wymaganiami i specyfikacjami.\nTesty UI (User Interface tests): Testowanie interakcji użytkownika z aplikacją, sprawdzanie, czy elementy UI są odpowiednio rozmieszczone i czy są intuicyjne.\nTesty wydajnościowe (Performance tests): Mierzenie szybkości działania aplikacji, jej odpowiedzi na różne operacje, np. ładowanie danych.\nTesty bezpieczeństwa (Security tests): Sprawdzanie, czy aplikacja jest odporna na ataki i zapewnia bezpieczeństwo danych użytkownika.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jakie są najlepsze praktyki w zakresie testowania aplikacji iOS, zwłaszcza w kontekście testów jednostkowych i testów UI",
    "answers": [
      {
        "text": "Najlepsze praktyki w zakresie testowania aplikacji iOS\nTesty jednostkowe: Używanie frameworków takich jak XCTest do testowania poszczególnych funkcji i metod aplikacji.\nTesty UI: Automatyzacja testów UI za pomocą narzędzi takich jak XCUITest do interakcji z interfejsem aplikacji.\nMockowanie danych: Używanie mocków i stubów do symulacji danych, które aplikacja przetwarza.\nContinuous Integration (CI): Używanie narzędzi CI, takich jak Jenkins lub Bitrise, do automatyzacji testów podczas każdego commita w kodzie.\nTesty wydajnościowe: Używanie narzędzi takich jak Instruments w Xcode, które pozwala na śledzenie użycia CPU, pamięci, animacji i renderowania UI w aplikacji.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jakie podejścia i narzędzia można wykorzystać do skutecznego testowania aplikacji mobilnych, obejmującego testy jednostkowe, integracyjne oraz testy UI?",
    "answers": [
      {
        "text": "Testowanie aplikacji mobilnych – narzędzia i podejścia\nTesty jednostkowe: Narzędzia takie jak JUnit (Android) lub XCTest (iOS) do testowania pojedynczych funkcji.\nTesty integracyjne: Użycie testów integracyjnych do sprawdzania poprawności działania aplikacji z backendem oraz integracji z bazami danych.\nTesty UI: Narzędzia jak Espresso (Android) i XCUITest (iOS) umożliwiają automatyczne testowanie interakcji użytkownika z aplikacją.\nSymulowanie różnych scenariuszy: Korzystanie z emulatorów i rzeczywistych urządzeń, aby testować aplikację w różnych warunkach (np. w trybie offline).",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jak zaprojektować aplikację mobilną, aby była dostępna dla użytkowników z różnymi niepełnosprawnościami, zgodnie z wytycznymi WCAG (Web Content Accessibility Guidelines)?",
    "answers": [
      {
        "text": "Dostępność aplikacji mobilnej – wytyczne WCAG\nWytyczne WCAG (Web Content Accessibility Guidelines): Pomagają w tworzeniu aplikacji dostępnych dla osób z niepełnosprawnościami.\nUżycie odpowiednich kontrastów: Zapewnienie odpowiednich kontrastów kolorów w interfejsie.\nWspieranie narracji głosowej: Wykorzystanie VoiceOver (iOS) i TalkBack (Android) dla osób niewidomych.\nUłatwienia w nawigacji: Umożliwienie nawigacji za pomocą klawiatury lub innych urządzeń wspomagających.\nSkalowanie tekstów: Zapewnienie opcji powiększania tekstu w aplikacji.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jak zaprojektować intuicyjny i responsywny interfejs użytkownika, który zapewni pozytywne doświadczenia użytkownika na różnych urządzeniach i rozmiarach ekranów?",
    "answers": [
      {
        "text": "Projektowanie intuicyjnego i responsywnego UI\nResponsywny design: Użycie technik takich jak Auto Layout (iOS) czy ConstraintLayout (Android) do dostosowania układu do różnych rozmiarów ekranów.\nTestowanie na różnych urządzeniach: Regularne testowanie aplikacji na różnych urządzeniach o różnych rozdzielczościach ekranów.\nMinimalizm w designie: Prosty, przejrzysty design z jasnymi i łatwymi do zrozumienia interakcjami.\nInteraktywne elementy: Używanie animacji i przejść w sposób, który poprawia użyteczność i wrażenia użytkownika.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jakie są kluczowe zasady projektowania interfejsu użytkownika (UI) i doświadczeń użytkownika (UX) w kontekście aplikacji iOS, proszę omówić, jak zasady Human Interface Guidelines (HIG) Apple wpływają na projektowanie aplikacji oraz jak można je zastosować, aby tworzyć intuicyjne i atrakcyjne interfejsy użytkownika",
    "answers": [
      {
        "text": "Kluczowe zasady projektowania UI/UX w aplikacjach iOS i wpływ Human Interface Guidelines (HIG) Apple na projektowanie\nZasady Human Interface Guidelines (HIG):\nSpójność: Zgodność z systemowym wyglądem, zapewnienie użytkownikowi intuicyjnego i spójnego doświadczenia z innymi aplikacjami i systemem.\nZrozumiałość: Aplikacja powinna mieć logiczną strukturę, nawigację, a przyciski i elementy sterujące powinny być łatwe do znalezienia i używania.\nCzytelność: Użycie odpowiedniego rozmiaru czcionek, kontrastu oraz przestrzeni pomiędzy elementami interfejsu.\nFeedback: Aplikacja powinna reagować na akcje użytkownika, np. przez animacje, wibracje lub dźwięki, co zwiększa komfort użytkowania.\nDostosowanie do urządzenia: UI powinno dostosować się do różnych rozdzielczości ekranów, formatu urządzenia (iPhone, iPad), oraz wykorzystać natywne gesty.\nŁatwość używania: Ułatwienia takie jak prostota w obsłudze aplikacji, możliwość szybkiego dostępu do głównych funkcji oraz ograniczenie złożoności interfejsu.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Rola i przykłady silników do odwzorowań obiektowo-relacyjnych (ORM)",
    "answers": [
      {
        "text": "Rola i przykłady silników ORM (Object-Relational Mapping)\nSilniki ORM umożliwiają mapowanie obiektów w programowaniu obiektowym na tabele w relacyjnej bazie danych, co upraszcza pracę z bazą danych w aplikacjach. Przykłady ORM:\nHibernate (Java): Umożliwia mapowanie klas Java do tabel w bazach SQL, automatyzując operacje CRUD.\nEntity Framework (C#): Narzędzie ORM dla platformy .NET, pozwala na manipulację danymi w bazie danych przy użyciu obiektów C#.\nDjango ORM (Python): Zintegrowane w Django ORM, umożliwia interakcję z bazą danych SQL za pomocą Pythonowych obiektów.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Sposoby zapewniania wydajności i strojenia w systemach zarządzania bazami danych",
    "answers": [
      {
        "text": "Sposoby zapewniania wydajności i strojenia w systemach baz danych\nIndeksowanie: Tworzenie odpowiednich indeksów na kolumnach, które są używane w zapytaniach.\nOptymalizacja zapytań: Używanie EXPLAIN w SQL do analizy zapytań i identyfikowania nieoptymalnych operacji.\nCache'owanie wyników: Przechowywanie często używanych wyników zapytań w pamięci podręcznej.\nSharding i replikacja: Dzielnie danych na różne serwery w celu zwiększenia dostępności i wydajności.",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  },
  {
    "question": "Jakie są kluczowe strategie i techniki zabezpieczania aplikacji mobilnych przed zagrożeniami, takimi jak ataki typu man-in-the-middle, kradzież danych czy malware?",
    "answers": [
      {
        "text": "Techniki zabezpieczania aplikacji mobilnych przed zagrożeniami\nSzyfrowanie danych: Użycie szyfrowania zarówno na poziomie aplikacji (AES), jak i podczas przesyłania danych (SSL/TLS).\nOchrona przed atakami Man-in-the-Middle: Użycie certyfikatów SSL/TLS do zabezpieczenia komunikacji między aplikacją a serwerem.\nWykrywanie malware: Implementacja narzędzi do wykrywania złośliwego oprogramowania, jak również technik antypirackich.\nBezpieczne przechowywanie danych: Unikanie przechowywania wrażliwych informacji w pamięci urządzenia, zamiast tego używanie bezpiecznych magazynów danych, takich jak Keychain (iOS) lub Keystore (Android).",
        "correct": true
      },
      {
        "text": "To niepoprawna odpowiedź nr 1.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 2.",
        "correct": false
      },
      {
        "text": "To niepoprawna odpowiedź nr 3.",
        "correct": false
      }
    ]
  }
];
