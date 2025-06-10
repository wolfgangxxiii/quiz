const questions = [
  {
    "question": "Wyjaśnij, jak prawo autorskie chroni programy komputerowe oraz jakie są różne typy licencji oprogramowania. Omów konsekwencje prawne naruszenia tych licencji.",
    "answer": "Programy komputerowe są chronione jako utwory literackie w ramach prawa autorskiego. Oznacza to, że autorzy mają wyłączne prawa do kopiowania, modyfikowania i dystrybucji kodu. Wyróżniamy licencje proprietary (zamknięte), open source (otwarte), freeware, shareware i trial. Konsekwencje naruszenia licencji to kary finansowe, odpowiedzialność cywilna i karna oraz wykluczenie z rynku."
  },
  {
    "question": "Przedstaw kluczowe różnice między tradycyjnymi metodami zarządzania projektami (np. Waterfall) a metodykami zwinnymi (np. Scrum, Kanban) oraz omów, w jakich sytuacjach każda z tych metod może być najbardziej efektywna, szczególnie w kontekście projektów IT.",
    "answer": "Metody Waterfall cechuje sztywna struktura i sekwencyjne przechodzenie przez kolejne fazy projektu, co sprawdza się w projektach z jasno określonymi wymaganiami. Metodyki zwinne (Agile) pozwalają na elastyczność i szybkie dostosowywanie się do zmian, co jest idealne dla dynamicznych projektów IT, startupów i aplikacji webowych."
  },
  {
    "question": "Omów znacznie responsywności w wykorzystaniu systemów informatycznych.",
    "answer": "Responsywność systemów informatycznych to szybkość reakcji systemu na działania użytkownika. Jest kluczowa dla pozytywnego doświadczenia użytkownika, wpływa na wydajność pracy i satysfakcję, a w systemach krytycznych może nawet decydować o bezpieczeństwie."
  },
  {
    "question": "Co to jest \"Mobile First\"w projektowaniu i dlaczego jest to ważne?",
    "answer": "Mobile First to podejście polegające na projektowaniu aplikacji najpierw z myślą o urządzeniach mobilnych, a dopiero później na większe ekrany. Jest to ważne, ponieważ większość użytkowników korzysta z internetu na smartfonach, wpływa to na SEO oraz poprawia użyteczność i wydajność stron."
  },
  {
    "question": "Jak zorganizowane są dane w systemach plików i jakie to ma znaczenie z punktu widzenia bezpieczeństwa?",
    "answer": "Dane w systemach plików są organizowane hierarchicznie w katalogach i plikach. Kluczowe znaczenie mają uprawnienia dostępu, szyfrowanie plików i dysków, kontrola wersji i kopie zapasowe oraz ograniczanie uprawnień użytkowników według zasady najmniejszych uprawnień."
  },
  {
    "question": "Podaj uwarunkowania wykorzystania systemów Content Management System (CMS).",
    "answer": "Systemy CMS takie jak WordPress, Joomla czy Drupal ułatwiają zarządzanie treścią, ale wymagają regularnych aktualizacji dla bezpieczeństwa, mają ograniczenia w personalizacji bez dodatkowego kodowania i mogą być podatne na ataki, np. przez wtyczki."
  },
  {
    "question": "Jakie mogą być najczęstsze zagrożenia dla bezpieczeństwa sieci teleinformatycznych?",
    "answer": "Najczęstsze zagrożenia to ataki DDoS, phishing, złośliwe oprogramowanie (malware, ransomware), ataki typu man-in-the-middle oraz korzystanie z nieaktualnego oprogramowania z podatnościami."
  },
  {
    "question": "Czym są systemy wykrywania i zapobiegania intruzom (IDS/IPS) i jak one działają?",
    "answer": "IDS (Intrusion Detection System) to systemy monitorujące sieć w celu wykrycia potencjalnych ataków, natomiast IPS (Intrusion Prevention System) nie tylko wykrywają, ale też aktywnie blokują ataki w czasie rzeczywistym, analizując sygnatury i anomalie ruchu sieciowego."
  },
  {
    "question": "Jak działają zapory sieciowe (firewalle) i jakie mają ograniczenia?",
    "answer": "Zapory sieciowe filtrują ruch na podstawie reguł dotyczących adresów IP, portów czy protokołów i mogą być sprzętowe lub programowe. Nie chronią jednak przed atakami wewnętrznymi ani phishingiem i mogą blokować legalne usługi przy błędnej konfiguracji."
  },
  {
    "question": "Jakie są zasady bezpiecznego wykorzystywania systemów teleinformatycznych?",
    "answer": "Podstawowe zasady to stosowanie silnych haseł, regularne aktualizacje oprogramowania, przestrzeganie zasady najmniejszych uprawnień, wykonywanie kopii zapasowych, unikanie publicznych sieci Wi-Fi i edukowanie użytkowników w zakresie cyberbezpieczeństwa."
  },
  {
    "question": "W jaki sposób szyfrowanie wpływa na bezpieczeństwo systemów teleinformatycznych?",
    "answer": "Szyfrowanie chroni dane przed nieautoryzowanym dostępem, zamieniając je na nieczytelną postać bez klucza deszyfrującego. Przykładami są HTTPS, VPN oraz algorytmy takie jak AES czy RSA, które zabezpieczają dane w różnych zastosowaniach."
  },
  {
    "question": "Wymień i omów popierając przykładami główne zagrożenia w systemach teleinformatycznych",
    "answer": "Główne zagrożenia to ataki DDoS (np. blokowanie stron rządowych), phishing (wyłudzanie danych przez fałszywe maile), ransomware (np. WannaCry – szyfrowanie plików i żądanie okupu), SQL Injection (wstrzykiwanie złośliwego kodu do bazy danych) oraz ataki typu zero-day."
  },
  {
    "question": "Wymień i opisz co najmniej 4 usługi bezpieczeństwa informacji uwzględniając możliwe ataki na te usługi.",
    "answer": "Usługi bezpieczeństwa informacji to poufność (zagrożona przez sniffing czy ataki man-in-the-middle), integralność (atakowana np. przez modyfikacje danych), dostępność (atakowana przez DDoS) oraz autoryzacja i uwierzytelnianie (np. ataki brute-force lub kradzież sesji)."
  },
  {
    "question": "Proszę wymienić i omówić sprzętowe oraz programowe składniki sieci komputerowych",
    "answer": "Do sprzętowych składników sieci należą routery, switche, firewalle sprzętowe i serwery, natomiast do programowych zaliczamy systemy operacyjne sieciowe, oprogramowanie firewall, VPN oraz systemy IDS/IPS."
  },
  {
    "question": "Na czym polega efekt lawinowy w systemie kryptograficznym?",
    "answer": "Efekt lawinowy to zjawisko, w którym nawet drobna zmiana w danych wejściowych (np. jeden bit) powoduje dużą zmianę w wyniku szyfrowania, co znacznie zwiększa bezpieczeństwo algorytmów takich jak AES czy SHA-256."
  },
  {
    "question": "Proszę podać właściwości grafiki rastrowej i wektorowej.",
    "answer": "Grafika rastrowa, np. JPEG czy PNG, składa się z pikseli i traci jakość po powiększeniu, dlatego nadaje się do zdjęć. Grafika wektorowa, jak SVG czy AI, składa się z figur geometrycznych i można ją skalować bez utraty jakości, idealna do logotypów i ikon."
  },
  {
    "question": "Proszę podać i scharakteryzować znane topologie sieci komputerowych.",
    "answer": "Topologie sieci to magistrali (wszystkie urządzenia do jednej linii), pierścienia (dane krążą w jednym kierunku), gwiazdy (wszystkie urządzenia łączą się z centralnym punktem) i siatki (każde urządzenie może łączyć się z każdym innym)."
  },
  {
    "question": "Omów zasady współpracy komputera z urządzeniami wejścia/wyjścia",
    "answer": "Komputer komunikuje się z urządzeniami wejścia/wyjścia poprzez sterowniki i interfejsy, np. USB, PCI czy Bluetooth. Przykładem są klawiatura i mysz (wejście), monitor (wyjście) oraz drukarka, do której komputer wysyła dane w odpowiednim formacie."
  },
  {
    "question": "Omów rodzaje testów i jakie korzyści przynosi automatyzacja testów w procesie wytwarzania oprogramowania?",
    "answer": "Testy dzielimy na jednostkowe, integracyjne, systemowe i akceptacyjne. Automatyzacja testów przyspiesza wykrywanie błędów, pozwala wielokrotnie powtarzać testy, obniża koszty testowania i minimalizuje ryzyko błędów ludzkich."
  },
  {
    "question": "Jakie funkcje oferują narzędzia do zarządzania projektami, które są kluczowe dla skutecznego zarządzania zespołem programistycznym?",
    "answer": "Narzędzia do zarządzania projektami, takie jak Jira, Trello czy Asana, oferują zarządzanie zadaniami, harmonogramowanie, śledzenie postępów, zarządzanie dokumentacją oraz integracje z narzędziami deweloperskimi."
  },
  {
    "question": "Jakie są najpopularniejsze systemy kontroli wersji i jakie są ich główne zalety i wady w pracy w dużych zespołach?",
    "answer": "Do najpopularniejszych systemów kontroli wersji należą Git (rozproszony), SVN (scentralizowany) i Mercurial. Git umożliwia efektywną pracę w dużych zespołach dzięki rozproszonemu modelowi i branchowaniu, ale może być trudny dla początkujących i nie ma natywnej kontroli dostępu."
  },
  {
    "question": "Czym są heurystyki Jacoba Nielsena? Omów jedną z nich.",
    "answer": "Heurystyki Jacoba Nielsena to zestaw 10 zasad użyteczności interfejsów, które pomagają projektować intuicyjne aplikacje. Przykład: zawsze zapewniaj informację o stanie systemu – np. pasek ładowania czy komunikat o wysłaniu wiadomości."
  },
  {
    "question": "Jakie są główne etapy procesu UX produktu cyfrowego?",
    "answer": "Proces UX obejmuje badania użytkowników, tworzenie person i scenariuszy, wireframing i prototypowanie, testy użyteczności oraz iteracyjne poprawki na podstawie wyników testów."
  },
  {
    "question": "Jakie są główne kroki w procesie projektowania algorytmu i jak wpływają one na efektywność systemu informatycznego?",
    "answer": "Główne kroki to: definicja problemu, analiza danych wejściowych i wyjściowych, projektowanie algorytmu, analiza złożoności, implementacja i testowanie oraz optymalizacja. Każdy z tych etapów wpływa na efektywność systemu."
  },
  {
    "question": "W jaki sposób analiza złożoności obliczeniowej (czasowej i pamięciowej) wpływa na wybór algorytmu do konkretnego zadania?",
    "answer": "Analiza złożoności czasowej określa, jak szybko algorytm wykona zadanie przy rosnącej ilości danych, a analiza pamięciowa – ile pamięci zużyje. Dzięki temu można wybrać najefektywniejszy algorytm do danego problemu."
  },
  {
    "question": "Jakie są najczęstsze techniki optymalizacji algorytmów i w jakich sytuacjach ich stosowanie jest najbardziej efektywne?",
    "answer": "Do najczęstszych technik należą programowanie dynamiczne, podział i zwyciężaj, kompresja danych, przetwarzanie równoległe oraz przybliżone algorytmy. Każda z nich sprawdza się w innych zadaniach, np. big data lub problemach NP-trudnych."
  },
  {
    "question": "Jak podejścia algorytmiczne mogą wpływać na skalowalność systemu informatycznego?",
    "answer": "Efektywne algorytmy i odpowiednie struktury danych, np. drzewa AVL czy algorytmy równoległe, pozwalają systemom obsługiwać większą liczbę użytkowników i lepiej skalować się wraz z rozwojem."
  },
  {
    "question": "Jakie są kluczowe różnice między podejściem algorytmicznym a heurystycznym w rozwiązywaniu problemów w systemach informatycznych?",
    "answer": "Podejście algorytmiczne opiera się na ścisłych regułach i gwarantuje optymalne rozwiązania, np. algorytm Dijkstry, natomiast podejście heurystyczne oferuje szybkie, choć nie zawsze optymalne wyniki – jak algorytmy mrówkowe w zadaniach NP-trudnych."
  },
  {
    "question": "Jak algebra liniowa może być wykorzystana w przetwarzaniu obrazów i analizie danych w systemach informatycznych?",
    "answer": "Algebra liniowa wykorzystywana jest do reprezentacji obrazów za pomocą macierzy oraz w analizie danych, np. przy użyciu PCA do redukcji wymiarów czy w sieciach neuronowych do mnożenia macierzy."
  },
  {
    "question": "W jaki sposób rachunek różniczkowy i całkowy przyczynia się do optymalizacji algorytmów i modeli predykcyjnych?",
    "answer": "Rachunek różniczkowy i całkowy umożliwia optymalizację funkcji kosztu w AI (np. gradient descent), analizę szybkości zmian w systemach dynamicznych oraz modelowanie złożonych funkcji w analizie danych."
  },
  {
    "question": "Jak teoria prawdopodobieństwa i statystyka wspierają podejmowanie decyzji w systemach rekomendacyjnych i analizie danych?",
    "answer": "Systemy rekomendacyjne oraz analiza danych korzystają z teorii prawdopodobieństwa i statystyki do przewidywania preferencji użytkowników, modelowania trendów i oceny skuteczności działań, np. przez filtrację kolaboratywną czy regresję liniową."
  },
  {
    "question": "W jaki sposób logika matematyczna i teoria zbiorów mogą być wykorzystane w weryfikacji poprawności i niezawodności kodu źródłowego?",
    "answer": "Logika matematyczna umożliwia stosowanie model checking oraz twierdzeń Hoare’a do analizy poprawności kodu, a teoria zbiorów pozwala optymalizować operacje na danych oraz wykrywać konflikty typów w językach funkcyjnych."
  },
  {
    "question": "Jak kryptografia, oparta na teoriach liczbowych i algebraicznych, wpływa na bezpieczeństwo systemów informatycznych?",
    "answer": "Kryptografia wykorzystuje własności liczb pierwszych i operacje algebraiczne, np. RSA, krzywe eliptyczne czy algorytm Diffie-Hellmana, co zapewnia bezpieczne szyfrowanie i wymianę danych w systemach informatycznych."
  },
  {
    "question": "Jak teoria grafów wpływa na projektowanie i implementację struktur danych takich jak drzewa, grafy i sieci?",
    "answer": "Teoria grafów umożliwia projektowanie efektywnych struktur danych, jak drzewa binarne czy algorytmy wyszukiwania najkrótszych ścieżek, np. algorytm Dijkstry lub PageRank."
  },
  {
    "question": "W jaki sposób algebra liniowa jest stosowana w budowie i manipulacji strukturami danych, takimi jak macierze i wektory?",
    "answer": "Algebra liniowa umożliwia reprezentację danych w formie macierzy (np. w grafice 3D czy AI) oraz analizę wektorową, jak Word2Vec czy kompresja obrazów za pomocą SVD."
  },
  {
    "question": "Jak zasady kombinatoryki są wykorzystywane w projektowaniu struktur danych optymalizujących wyszukiwanie i sortowanie?",
    "answer": "Kombinatoryka pozwala optymalizować struktury danych, np. przez minimalizowanie wysokości drzew AVL czy optymalizację sortowania przez QuickSort i funkcje skrótu w tablicach haszujących."
  },
  {
    "question": "W jaki sposób teoria prawdopodobieństwa jest używana w strukturach danych takich jak filtry Blooma i drzewa probabilistyczne?",
    "answer": "Teoria prawdopodobieństwa umożliwia efektywne przechowywanie i szybkie sprawdzanie obecności elementów w zbiorach, czego przykładem są filtry Blooma używane w bazach danych. Drzewa probabilistyczne, jak drzewo Huffmana czy modele Markowa, pozwalają na kompresję danych oraz przewidywanie kolejnych elementów, np. w autokorekcie."
  },
  {
    "question": "Jak pojęcia z teorii liczb są stosowane w projektowaniu struktur danych dla kryptografii i zabezpieczeń?",
    "answer": "Teoria liczb jest podstawą działania wielu struktur bezpieczeństwa, takich jak drzewa Merkle’a używane w blockchainie do weryfikacji integralności danych oraz generatory liczb losowych oparte na kongruencjach liniowych, stosowane w szyfrowaniu strumieniowym."
  },
  {
    "question": "Jakie są kluczowe etapy w procesie budowy modelu uczenia maszynowego i jak wpływają one na jakość i efektywność systemu sztucznej inteligencji?",
    "answer": "Proces budowy modelu uczenia maszynowego obejmuje zbieranie danych, ich przetwarzanie, wybór modelu, trenowanie, ewaluację i optymalizację hiperparametrów. Każdy z tych etapów wpływa na jakość i skuteczność końcowego systemu AI."
  },
  {
    "question": "W jaki sposób techniki uczenia nadzorowanego i nienadzorowanego różnią się pod względem zastosowań i implementacji w systemach sztucznej inteligencji?",
    "answer": "Uczenie nadzorowane wykorzystuje dane z etykietami i znajduje zastosowanie w klasyfikacji czy regresji, np. rozpoznawanie twarzy. Uczenie nienadzorowane pozwala modelowi samodzielnie wykrywać wzorce w danych, np. przez klasteryzację klientów."
  },
  {
    "question": "Jakie są najlepsze praktyki w zakresie zarządzania danymi treningowymi, w tym ich gromadzenie, przechowywanie, przetwarzanie i zabezpieczanie, w kontekście budowy systemów sztucznej inteligencji?",
    "answer": "Dane treningowe powinny pochodzić z legalnych i wiarygodnych źródeł, być przechowywane z redundancją i zabezpieczane przed nieautoryzowanym dostępem. Ważne jest również czyszczenie i normalizacja danych oraz stosowanie technik anonimizacji i szyfrowania."
  },
  {
    "question": "Jak duże modele językowe (LLM) mogą być integrowane z istniejącymi systemami informatycznymi i aplikacjami, aby poprawić ich funkcjonalność i wydajność",
    "answer": "Duże modele językowe mogą być wykorzystywane jako asystenci w aplikacjach, generować automatyczne odpowiedzi, wspierać wyszukiwanie semantyczne oraz analizować duże zbiory danych, zwiększając funkcjonalność i wydajność systemów IT."
  },
  {
    "question": "W jaki sposób duże modele językowe (LLM) mogą być wykorzystywane do automatyzacji zadań związanych z przetwarzaniem języka naturalnego (NLP), takich jak tłumaczenie, podsumowywanie tekstu i analiza sentymentu?",
    "answer": "LLM mogą automatyzować tłumaczenie tekstów, podsumowywać długie artykuły oraz analizować sentyment wypowiedzi użytkowników, co pozwala na lepsze zrozumienie opinii oraz skuteczniejsze zarządzanie treściami."
  },
  {
    "question": "Co jest przedmiotem praw autorskich, a co jest spod nich wyłączone? Przedstaw podział praw autorskich i omów je",
    "answer": "Przedmiotem ochrony praw autorskich są utwory o charakterze twórczym, np. teksty, grafiki, oprogramowanie, muzyka. Nie podlegają ochronie fakty, idee czy teorie matematyczne. Prawa autorskie dzielą się na osobiste (niezbywalne, np. autorstwo) oraz majątkowe (możliwe do sprzedaży czy licencjonowania)."
  },
  {
    "question": "Wyjaśnij różnicę pomiędzy szyfrowaniem symetrycznym a asymetrycznym.",
    "answer": "Szyfrowanie symetryczne wykorzystuje jeden klucz do szyfrowania i deszyfrowania, jest szybkie i wydajne, ale wymaga bezpiecznej wymiany klucza. Szyfrowanie asymetryczne opiera się na dwóch kluczach – publicznym i prywatnym – i jest bezpieczniejsze przy wymianie danych, lecz wolniejsze od symetrycznego."
  },
  {
    "question": "Omówić przebieg bezpiecznej transmisji w sieciach teleinformatycznych na przykładzie protokołu SSL (Secure Socket Layer)",
    "answer": "SSL, obecnie znany jako TLS, zapewnia bezpieczne przesyłanie danych w sieci poprzez uzgadnianie protokołu, przesyłanie certyfikatu, weryfikację certyfikatu przez klienta, wygenerowanie klucza sesyjnego i szyfrowanie całej transmisji."
  },
  {
    "question": "Ataki odmowy dostępu do usług (Denial of Service) - podaj przykłady ataku i sposoby jego unikania.",
    "answer": "Ataki DoS polegają na przeciążeniu serwera przez nadmiar żądań (np. SYN Flood) lub rozproszony atak z wielu komputerów (DDoS). Ochrona polega na stosowaniu firewalli, systemów IDS/IPS i sieci CDN ograniczających skutki ataku."
  },
  {
    "question": "Jaki jest cel, do czego jest używana maski podsieci w konfiguracji sieci?",
    "answer": "Maska podsieci służy do wydzielania mniejszych podsieci z jednej sieci głównej, co pozwala na efektywniejsze zarządzanie adresacją IP oraz zwiększenie bezpieczeństwa i organizacji ruchu sieciowego."
  },
  {
    "question": "Wyjaśnij koncepcję wykorzystania Virtual Local Area Network (VLAN) i ich zalety w zarządzaniu siecią",
    "answer": "VLAN to logiczny podział jednej fizycznej sieci na kilka podsieci, co pozwala na lepszą kontrolę ruchu, zwiększenie bezpieczeństwa oraz redukcję ruchu broadcastowego bez konieczności inwestowania w dodatkowy sprzęt."
  },
  {
    "question": "Jaką rolę odgrywają sztuczna inteligencja (AI) i uczenie maszynowe (ML) w nowoczesnych systemach wykrywania zagrożeń i jakie są wyzwania związane z ich wykorzystaniem?",
    "answer": "AI i ML pomagają wykrywać cyberzagrożenia przez analizę anomalii w ruchu sieciowym, logach i predykcję ataków, ale wymagają dużych zasobów obliczeniowych i mogą być omijane przez sprytnych cyberprzestępców."
  },
  {
    "question": "Jakie są wady i zalety aplikacji natywnych w porównaniu do aplikacji internetowych w przypadku urządzeń mobilnych?",
    "answer": "Aplikacje natywne oferują lepszą wydajność, pełny dostęp do funkcji urządzenia i mogą działać offline, ale są droższe i wymagają oddzielnego tworzenia na różne systemy. Aplikacje internetowe są uniwersalne i łatwiejsze do aktualizacji, ale działają wolniej i wymagają stałego połączenia z internetem."
  },
  {
    "question": "Wyjaśnij, czym jest wątek w kontekście systemów operacyjnych.",
    "answer": "Wątek to najmniejsza jednostka wykonawcza w systemie operacyjnym, będąca częścią procesu, mająca własny licznik rozkazów i stos. Wątki umożliwiają równoległe wykonywanie zadań i zwiększają wydajność aplikacji."
  },
  {
    "question": "Czym jest wirtualizacja w kontekście systemów operacyjnych i jakie przynosi korzyści?",
    "answer": "Wirtualizacja umożliwia uruchamianie wielu systemów operacyjnych na jednym fizycznym sprzęcie, co prowadzi do lepszego wykorzystania zasobów, ułatwia testowanie i skalowanie infrastruktury IT."
  },
  {
    "question": "Jakie są metody zapewniania bezpieczeństwa w systemach operacyjnych?",
    "answer": "Do metod bezpieczeństwa zaliczamy kontrolę dostępu do plików i katalogów, szyfrowanie danych, stosowanie firewalli i antywirusów, uruchamianie aplikacji w sandboxie oraz regularne aktualizacje systemu."
  },
  {
    "question": "Czym jest system plików i jakie są jego podstawowe funkcje?",
    "answer": "System plików odpowiada za przechowywanie, organizację oraz zarządzanie dostępem do danych na nośnikach, zapewniając integralność i strukturę plików oraz katalogów, np. NTFS, FAT32 czy EXT4."
  },
  {
    "question": "Czym jest hypervisor w wirtualizacji, jaką pełni rolę i jak jest zorganizowany?",
    "answer": "Hypervisor to oprogramowanie zarządzające maszynami wirtualnymi. Dzieli się na typ 1 (bare-metal, działa bezpośrednio na sprzęcie) oraz typ 2 (hostowane, działa jako aplikacja w systemie operacyjnym). Umożliwia izolację systemów i efektywną optymalizację zasobów."
  },
  {
    "question": "Omów strukturę rejestru systemu operacyjnego?",
    "answer": "Rejestr systemowy Windows to hierarchiczna baza danych przechowująca ustawienia systemu i aplikacji. Główne gałęzie to HKEY_CLASSES_ROOT, HKEY_CURRENT_USER, HKEY_LOCAL_MACHINE, HKEY_USERS i HKEY_CURRENT_CONFIG."
  },
  {
    "question": "Omów mechanizmy zapewniania bezpieczeństwa i niezawodności w systemach zarządzania bazami danych.",
    "answer": "Bezpieczeństwo w bazach danych zapewnia kontrola dostępu, szyfrowanie danych, regularne kopie zapasowe, replikacja oraz stosowanie zasad ACID, które gwarantują integralność i niezawodność danych."
  },
  {
    "question": "Wyjaśnij co oznacza i dlaczego mówimy o systemach operacyjnych 32 i 64 bitowych?",
    "answer": "Systemy 32-bitowe obsługują do 4 GB RAM, mają ograniczoną wydajność, a 64-bitowe mogą korzystać z większej ilości pamięci, obsługiwać zarówno aplikacje 32-, jak i 64-bitowe, oferując wyższą wydajność i lepsze zarządzanie pamięcią."
  },
  {
    "question": "Jakie są różnice i podobieństwa w sposobach deklaracji, definicji oraz wykorzystania zmiennych typów prostych w językach C, Java i C#?",
    "answer": "We wszystkich tych językach zmienne deklaruje się podobnie, jednak C pozwala na bezpośredni dostęp do pamięci przez wskaźniki, a Java i C# korzystają z garbage collectora i dzielą zmienne na wartościowe i referencyjne."
  },
  {
    "question": "W jaki sposób realizowana jest obsługa wyjątków w wybranym języku programowania i jakie są jej główne mechanizmy oraz najlepsze praktyki?",
    "answer": "Obsługa wyjątków polega na zarządzaniu błędami za pomocą bloków try-catch. Najlepsze praktyki to obsługa konkretnych wyjątków, unikanie ogólnych catch i korzystanie z finally do zwalniania zasobów."
  },
  {
    "question": "Omów, dla jakich danych zastosujesz tablicę. Podaj przykłady z deklaracją, utworzeniem i zainicjowaniem tablicy w języku C# lub Java.",
    "answer": "Tablica jest używana do przechowywania wielu wartości tego samego typu. Przykład w C#: int[] liczby = new int[5] {1, 2, 3, 4, 5}; Przykład w Java: int[] liczby = {1, 2, 3, 4, 5}; Tablice są idealne do przechowywania wyników kalkulacji lub elementów gry."
  },
  {
    "question": "Jak zdefiniować upstream branch, a następnie skonfigurować go w zdalnym repozytorium tak, aby miał tę samą nazwę co w repozytorium lokalnym oraz jak skonfigurować go pod inną nazwą niż w repozytorium lokalnym?",
    "answer": "Upstream branch w Git definiuje się przez komendę git push --set-upstream origin nazwa_gałęzi. Aby mieć inną nazwę w repozytorium zdalnym, używa się git push --set-upstream origin lokalna_gałąź:inna_nazwa_zdalna."
  },
  {
    "question": "Jak zdefiniować pojęcia tip i head w kontekście systemów kontroli wersji, oraz w jaki sposób można określić liczbę heads w repozytorium?",
    "answer": "Tip oznacza najnowszą zmianę w gałęzi, a head wskazuje na aktualny commit. Aby sprawdzić liczbę heads, w Gicie używa się polecenia git show-ref –heads."
  },
  {
    "question": "Jakie są kluczowe różnice między klasą a obiektem w programowaniu obiektowym, oraz jak te różnice wpływają na tworzenie i wykorzystanie kodu?",
    "answer": "Klasa to szablon definiujący zmienne i metody, natomiast obiekt jest instancją klasy i posiada konkretne dane. Różnice te umożliwiają tworzenie elastycznego, wielokrotnego użycia kodu."
  },
  {
    "question": "Czym jest enkapsulacja w programowaniu obiektowym, jakie są jej główne zalety i dlaczego jest istotna dla tworzenia solidnego i bezpiecznego kodu?",
    "answer": "Enkapsulacja polega na ukrywaniu szczegółów implementacji klasy i udostępnianiu tylko niezbędnych metod, co zapewnia ochronę danych i ułatwia zarządzanie kodem."
  },
  {
    "question": "Jakie jest znaczenie polimorfizmu w programowaniu obiektowym i jakie są przykłady jego praktycznego zastosowania w różnych językach programowania?",
    "answer": "Polimorfizm pozwala na wykorzystywanie tej samej metody w różnych klasach, dzięki czemu kod jest elastyczny i łatwy do rozszerzania, np. przez nadpisywanie metod w klasach dziedziczących."
  },
  {
    "question": "Jakie są różnice między modyfikatorami dostępu public, private i protected w różnych językach programowania oraz jak te różnice wpływają na sposób zarządzania dostępem do członków klasy?",
    "answer": "Public umożliwia dostęp z każdej lokalizacji, private tylko w obrębie klasy, a protected w klasie i klasach dziedziczących. Pozwala to kontrolować widoczność i bezpieczeństwo danych."
  },
  {
    "question": "Wyjaśnij pojęcie klasy i obiektu. Definiowanie klasy, tworzenie i usuwanie obiektów w wybranym języku programowania.",
    "answer": "Klasa to definicja właściwości i metod, a obiekt jest jej instancją tworzona np. przez new. W językach takich jak Java, usuwanie obiektów odbywa się automatycznie przez garbage collector."
  },
  {
    "question": "Omów składnię definiowania oraz różnice w przekazywaniu parametrów, zwracaniu wartości i wywoływaniu metod obiektowych (instancyjnych) i klasowych (statycznych) na przykładzie wybranego języka.",
    "answer": "Metody instancyjne są wywoływane na obiektach i mają dostęp do instancji klasy, a metody statyczne na samej klasie. Przykład w C#: Matematyka.Dodaj(3, 4); (statyczna), auto.Uruchom(); (instancyjna)."
  },
  {
    "question": "Opisz ideę dziedziczenia i jej realizację w wybranym obiektowym języku programowania.",
    "answer": "Dziedziczenie umożliwia tworzenie nowych klas na podstawie już istniejących, co pozwala na ponowne użycie kodu i jego rozszerzanie bez powielania. Przykład: klasa Samochod dziedziczy po klasie Pojazd."
  },
  {
    "question": "Jakie są kluczowe różnice między zmiennymi automatycznymi a dynamicznymi w kontekście programowania, oraz jak te różnice wpływają na zarządzanie pamięcią i działanie programu?",
    "answer": "Zmienne automatyczne tworzone są na stosie i usuwane po zakończeniu funkcji, a dynamiczne na stercie i mogą żyć dłużej, ale wymagają zarządzania przez garbage collector lub ręczne zwalnianie pamięci. Automatyczne są szybkie, ale krótkotrwałe; dynamiczne elastyczne, lecz mogą powodować wycieki pamięci."
  },
  {
    "question": "Jak różni się pojęcie interfejsu od implementacji klasy w kontekście programowania obiektowego, oraz jakie są główne zalety korzystania z interfejsów w projektowaniu oprogramowania?",
    "answer": "Interfejs definiuje zestaw metod, które muszą być zaimplementowane przez klasę, ale nie zawiera ich implementacji. Dzięki interfejsom zwiększamy elastyczność i reużywalność kodu oraz umożliwiamy wielokrotne dziedziczenie zachowań w językach, które nie wspierają go natywnie."
  },
  {
    "question": "Jakie są główne techniki i zalety tworzenia nowych klas poprzez dziedziczenie z już istniejących klas w programowaniu obiektowym, oraz w jaki sposób dziedziczenie wspomaga reużywalność kodu i organizację hierarchii klas?",
    "answer": "Dziedziczenie umożliwia tworzenie nowych klas na bazie istniejących (pojedyncze lub wielokrotne), co pozwala ograniczyć powtarzalność kodu, łatwiej rozwijać programy i lepiej organizować hierarchię klas w projekcie."
  },
  {
    "question": "Podaj dwa przykłady programów komputerowych, które są wykorzystywane do symulacji komputerowej, oraz omów ich zastosowanie i główne cechy, które sprawiają, że są użyteczne w symulacji.",
    "answer": "MATLAB/Simulink służy do modelowania i symulacji systemów dynamicznych w inżynierii, oferując zaawansowane biblioteki i narzędzia do analizy matematycznej. Ansys umożliwia symulacje mechaniczne, przepływów oraz analizę wytrzymałości, co pozwala dokładnie odwzorowywać warunki rzeczywiste."
  },
  {
    "question": "Model tworzony w Scilabie/Matlabie jest przybliżeniem rzeczywistości. Dokładnemu odwzorowaniu towarzyszą niepewności np. co do -parametrów modelu -warunków brzegowych które mogą wpływać na dokładność i wiarygodność wyników. Omów te niepewności na dowolnym przykładzie.",
    "answer": "Niepewności w modelowaniu komputerowym dotyczą parametrów modelu i warunków brzegowych – na przykład w symulacji układu grzewczego drobna niedokładność pomiaru materiału czy temperatury otoczenia może prowadzić do istotnych różnic pomiędzy symulacją a rzeczywistością, przez co wyniki modelu wymagają ostrożnej interpretacji."
  },
  {
    "question": "Jak Python zarządza pamięcią dla obiektów i jakie są główne mechanizmy oraz strategie, które są stosowane w tym języku programowania?",
    "answer": "Python zarządza pamięcią automatycznie za pomocą systemu garbage collection, który wykrywa nieużywane obiekty i zwalnia pamięć, korzysta z liczenia referencji oraz cyklicznego detektora nieużywanych obiektów."
  },
  {
    "question": "Wyjaśnij, co to jest wiązanie danych (Data Binding) w kontekście Windows Presentation Foundation i jak może być używane do synchronizacji danych między modelem danych a interfejsem użytkownika.",
    "answer": "Data Binding w WPF pozwala na automatyczną synchronizację danych między warstwą logiki (modelem) a interfejsem użytkownika, co oznacza, że zmiana w modelu natychmiast odzwierciedla się w widoku i odwrotnie, bez konieczności ręcznego aktualizowania."
  },
  {
    "question": "Wyjaśnij, jak Extensible Application Markup Language współpracuje z kodem C# w aplikacjach Windows Presentation Foundation. Podaj przykład, w jaki sposób można zdefiniować interfejs użytkownika i manipulować nim z poziomu kodu C#.",
    "answer": "XAML umożliwia deklaratywne tworzenie interfejsu użytkownika w WPF, który następnie jest powiązany z kodem C#, pozwalając programiście na dynamiczną manipulację elementami interfejsu – na przykład przez odwołanie się do przycisku zdefiniowanego w XAML i zmienianie jego właściwości w kodzie C#."
  },
  {
    "question": "Omów zasady budowy interfejsów użytkownika systemów informatycznych.",
    "answer": "Budowa interfejsów użytkownika powinna być oparta na zasadach czytelności, prostoty, intuicyjności, spójności, dostępności i elastyczności, aby użytkownik mógł w sposób naturalny i efektywny korzystać z systemu."
  },
  {
    "question": "Omów proces normalizacji baz i jej trzy postaci popierając przykładami.",
    "answer": "Normalizacja baz danych to proces porządkowania struktury tabel w celu wyeliminowania redundancji i zapewnienia integralności danych. Pierwsza postać normalna eliminuje powtarzające się grupy, druga wymaga pełnej zależności funkcjonalnej, a trzecia – braku zależności przechodnich między atrybutami."
  },
  {
    "question": "W jaki sposób notacja BPMN (ang. Business Process Model and Notation) może być wykorzystana do modelowania złożonych procesów biznesowych w organizacji, i jakie wyzwania mogą się pojawić podczas jej implementacji w systemach informatycznych?",
    "answer": "Notacja BPMN pozwala na wizualne modelowanie procesów biznesowych, co ułatwia komunikację i optymalizację procesów w organizacji. Wyzwania obejmują integrację modeli BPMN z istniejącymi systemami oraz utrzymanie aktualności modeli w obliczu zmian organizacyjnych."
  },
  {
    "question": "Proszę omówić i porównać modele relacyjne i nierelacyjne bazy danych.",
    "answer": "Relacyjne bazy danych opierają się na tabelach połączonych relacjami, zapewniając integralność i możliwość korzystania z języka SQL. Bazy nierelacyjne (NoSQL) pozwalają na przechowywanie danych w dokumentach, grafach lub kolumnach, są skalowalne i elastyczne, ale zwykle nie oferują pełnej zgodności z ACID."
  },
  {
    "question": "Proszę omówić zasady definiowania wzorców funkcji i klas (znane również jako szablony lub generics).",
    "answer": "Szablony i generics pozwalają na definiowanie funkcji i klas operujących na różnych typach danych bez powielania kodu, co poprawia elastyczność i bezpieczeństwo typów w programowaniu."
  },
  {
    "question": "Proszę podać główne cechy zunifikowanego języka modelowania systemów informatycznych (ang. UML ) – zastosowanie, charakterystykę oraz jego podstawowe diagramy.",
    "answer": "UML jest graficznym językiem do modelowania systemów informatycznych, oferującym takie diagramy jak diagramy klas, przypadków użycia, aktywności czy sekwencji. Pozwala to na jednoznaczną dokumentację i analizę projektowanych systemów."
  },
  {
    "question": "Omów pojęcie abstrakcji i wskaż jego znaczenie z punktu widzenia wielokrotnego użycia (ang. Reuse).",
    "answer": "Abstrakcja polega na ukrywaniu szczegółów implementacyjnych i eksponowaniu tylko istotnych cech obiektu, co pozwala na wielokrotne użycie kodu, upraszcza projektowanie i umożliwia elastyczne rozwijanie systemów."
  },
  {
    "question": "Mechanizmy zapewniania bezpieczeństwa i niezawodności w systemach zarządzania bazami danych.",
    "answer": "Bezpieczeństwo i niezawodność baz danych zapewnia się przez kontrolę dostępu, szyfrowanie, regularne backupy, replikację danych oraz stosowanie zasad ACID."
  },
  {
    "question": "Omów pojęcie wzorca projektowego ich rodzaje oraz jego rola w procesie projektowania.",
    "answer": "Wzorce projektowe to sprawdzone rozwiązania typowych problemów w projektowaniu oprogramowania. Wyróżnia się m.in. wzorce kreacyjne, strukturalne i behawioralne, a ich stosowanie przyspiesza rozwój i poprawia jakość kodu."
  },
  {
    "question": "Wyjaśnij na przykładach zasady SOLID w projektowaniu obiektowym.",
    "answer": "SOLID to zbiór pięciu zasad dobrego projektowania obiektowego: pojedyncza odpowiedzialność, otwartość/zamkniętość, podstawienie Liskov, segregacja interfejsów i odwrócenie zależności. Na przykład zasada pojedynczej odpowiedzialności mówi, że klasa powinna mieć tylko jeden powód do zmiany."
  },
  {
    "question": "Co to jest język zapytań do baz danych i z jakich elementów się składa. Omów ich przeznaczenie.",
    "answer": "Język zapytań do baz danych, np. SQL, składa się z poleceń do pobierania, modyfikowania i zarządzania danymi w bazie. Obejmuje m.in. SELECT, INSERT, UPDATE, DELETE, które służą do operowania na danych oraz zarządzania strukturą bazy."
  },
  {
    "question": "Omów system śledzenia transakcji w bazach danych i podaj przykłady problemów jakie on rozwiązuje.",
    "answer": "System śledzenia transakcji rejestruje wszystkie operacje wykonywane w bazie, co pozwala na odtwarzanie stanu po awarii i rozwiązuje problemy utraty danych, konfliktów transakcji oraz naruszeń integralności."
  },
  {
    "question": "Omów etapy inżynierii oprogramowania i wskaż jakie artefakty powstają na każdym z etapów.",
    "answer": "Etapy inżynierii oprogramowania to analiza wymagań (dokumenty wymagań), projektowanie (diagramy, modele), implementacja (kod źródłowy), testowanie (scenariusze testowe, raporty), wdrożenie (instrukcje, dokumentacja techniczna) oraz utrzymanie (logi zmian, aktualizacje)."
  },
  {
    "question": "Omów techniki pozyskiwania wymagań. Wskaż, które z nich są adekwatne gdy odbiorcami rozwiązania są firmy B2B (Business-to-Business), a które gdy indywidualni użytkownicy B2C (Business-to-Consumer).",
    "answer": "Do technik pozyskiwania wymagań należą wywiady, ankiety, obserwacje czy analiza dokumentacji. W B2B lepsze są wywiady i analiza procesów, w B2C sprawdza się masowe ankietowanie i testy z użytkownikami."
  },
  {
    "question": "Jakie funkcje powinien realizować system zarządzania bazą danych?",
    "answer": "System zarządzania bazą danych powinien zapewniać przechowywanie, wyszukiwanie, aktualizację, usuwanie danych, kontrolę dostępu, integralność, bezpieczeństwo oraz wykonywanie transakcji i backupów."
  },
  {
    "question": "Podaj uwarunkowania stosowania podejścia obiektowego i strukturalnego w projektowaniu systemów informatycznych.",
    "answer": "Podejście obiektowe stosuje się w projektach wymagających elastyczności, reużywalności i łatwego rozszerzania, natomiast podejście strukturalne w prostszych systemach, gdzie ważna jest jasność przepływu danych."
  },
  {
    "question": "Jakie są kluczowe wymagania funkcjonalne i niefunkcjonalne systemu, który ma integrować różnorodne systemy informatyczne w dużej organizacji?",
    "answer": "Wymagania funkcjonalne obejmują m.in. integrację danych i procesów, natomiast niefunkcjonalne to bezpieczeństwo, wydajność, skalowalność, niezawodność i zgodność z istniejącymi standardami."
  },
  {
    "question": "Omów zasady działania wzorca MVC (ang. Model View Controller). W jakich projektach zastosowałbyś tę architekturę?",
    "answer": "MVC oddziela logikę biznesową (Model), interfejs użytkownika (View) i kontrolę przepływu danych (Controller), co ułatwia rozwój i testowanie aplikacji. Wzorzec ten sprawdza się w aplikacjach webowych i mobilnych o złożonej strukturze interfejsu."
  },
  {
    "question": "Omów główne zasady metodyk zwinnych i jakie rozwiązują problemy?",
    "answer": "Metodyki zwinne, takie jak Scrum czy Kanban, kładą nacisk na elastyczność, współpracę i szybkie dostosowanie się do zmian. Rozwiązują problem sztywności, opóźnień i braku reakcji na zmieniające się wymagania."
  },
  {
    "question": "Z jakimi obszarami związane są wymagania niefunkcjonale i jakich? Podaj przykłady poprawnie sformułowanych wymagań.",
    "answer": "Wymagania niefunkcjonalne dotyczą bezpieczeństwa, wydajności, dostępności, skalowalności czy użyteczności. Przykład: 'System musi obsłużyć 1000 użytkowników jednocześnie' lub 'Czas odpowiedzi nie może przekraczać 2 sekund.'"
  },
  {
    "question": "Wymień i opisz cechy różnych typów aplikacji mobilnych (natywne, hybrydowe, wieloplatformowe itp.).",
    "answer": "Aplikacje natywne są tworzone pod konkretny system (np. Android), hybrydowe działają na różnych platformach przez opakowanie w webview, a wieloplatformowe są kompilowane do natywnego kodu na wiele systemów, zapewniając kompromis między wydajnością a uniwersalnością."
  },
  {
    "question": "Jakie są metody zarządzania pamięcią w aplikacjach mobilnych?",
    "answer": "Metody zarządzania pamięcią w aplikacjach mobilnych obejmują stosowanie mechanizmów automatycznego odśmiecania pamięci (garbage collection), ręczne zwalnianie nieużywanych zasobów, zarządzanie cyklem życia komponentów oraz ograniczanie liczby uruchomionych procesów i usług w tle."
  },
  {
    "question": "W jaki sposób można zoptymalizować wydajność aplikacji iOS, proszę przedstawić różne techniki i narzędzia używane do monitorowania i poprawy wydajności aplikacji, takie jak profilowanie, zarządzanie pamięcią i optymalizacja renderowania interfejsu użytkownika?",
    "answer": "Wydajność aplikacji iOS można poprawić, używając narzędzi do profilowania (np. Xcode Instruments), optymalizując zarządzanie pamięcią i dbając o efektywne renderowanie interfejsu, unikanie nadmiernego zużycia CPU i minimalizowanie pracy na głównym wątku aplikacji."
  },
  {
    "question": "Jakie techniki i narzędzia można zastosować, aby zoptymalizować wydajność aplikacji mobilnej, minimalizując czas ładowania i zużycie zasobów?",
    "answer": "Optymalizację wydajności aplikacji mobilnej można osiągnąć przez ładowanie danych asynchronicznie, stosowanie cache, kompresję zasobów, lazy loading grafik, minimalizowanie liczby zapytań sieciowych oraz korzystanie z narzędzi do profilowania, takich jak Android Profiler."
  },
  {
    "question": "Jak skutecznie zarządzać stanem aplikacji mobilnej, aby zapewnić płynne działanie i zachowanie danych podczas zmiany konfiguracji, takich jak obrót ekranu?",
    "answer": "Aby zachować dane podczas zmian konfiguracji (np. obrót ekranu), stosuje się wzorce architektoniczne takie jak MVVM, zapisuje dane w ViewModelach lub korzysta z mechanizmów Bundle, SharedPreferences i baz danych lokalnych."
  },
  {
    "question": "Jakie są najlepsze praktyki integracji aplikacji mobilnej z backendem, aby zapewnić niezawodną komunikację i synchronizację danych?",
    "answer": "Najlepsze praktyki to korzystanie z bezpiecznych protokołów (HTTPS), obsługa błędów sieciowych, stosowanie mechanizmów retry i kolejki offline, a także regularna synchronizacja danych oraz serializacja/deserializacja z użyciem sprawdzonych bibliotek."
  },
  {
    "question": "Jakie techniki można zastosować, aby minimalizować zużycie baterii przez aplikację mobilną, jednocześnie zapewniając pełną funkcjonalność?",
    "answer": "Zużycie baterii można ograniczyć poprzez optymalizację lokalizacji, redukcję odświeżania w tle, użycie wakelocków tylko gdy to konieczne, optymalizację animacji i unikanie nadmiernych operacji na CPU i GPU."
  },
  {
    "question": "Jak zarządzać zasobami aplikacji mobilnej, takimi jak obrazy, dźwięki i pliki wideo, aby zoptymalizować jej wydajność i rozmiar?",
    "answer": "Optymalizacja zarządzania zasobami polega na kompresji plików, używaniu odpowiednich formatów, ładowaniu ich na żądanie (lazy loading), skalowaniu grafik do potrzebnych rozdzielczości i stosowaniu cache dla najczęściej używanych zasobów."
  },
  {
    "question": "Jak zaprojektować aplikację mobilną, która działa efektywnie zarówno w trybie online, jak i offline, zapewniając synchronizację danych, gdy połączenie jest dostępne?",
    "answer": "Aplikacja powinna zapisywać dane lokalnie (np. w SQLite, Realm lub cache) i synchronizować je z serwerem, gdy tylko pojawi się połączenie internetowe, stosując mechanizmy kolejek i konfliktów synchronizacji."
  },
  {
    "question": "Jakie są skuteczne modele monetyzacji aplikacji mobilnych, takie jak reklamy, zakupy w aplikacji, subskrypcje, i jakie są ich zalety i wady w kontekście doświadczenia użytkownika?",
    "answer": "Popularne modele to reklamy (łatwe wdrożenie, ale mogą przeszkadzać użytkownikom), zakupy w aplikacji (pozwalają płacić za dodatkowe funkcje) oraz subskrypcje (stały dochód, ale wymagają oferowania wartości w dłuższym czasie)."
  },
  {
    "question": "Jak projektować i implementować funkcje współdzielenia zawartości w aplikacjach mobilnych, takie jak udostępnianie zdjęć, plików i treści w mediach społecznościowych?",
    "answer": "Funkcje współdzielenia implementuje się poprzez integrację z systemowymi mechanizmami udostępniania (np. Intents w Android, UIActivityViewController w iOS), zapewniając wsparcie dla różnych formatów i aplikacji społecznościowych."
  },
  {
    "question": "Jakie są wyzwania związane z optymalizacją aplikacji mobilnych pod kątem różnych wersji systemów operacyjnych i jak z nimi sobie radzić?",
    "answer": "Największym wyzwaniem jest fragmentacja systemów i różnice w API – można temu zaradzić poprzez testy na różnych urządzeniach, stosowanie bibliotek zgodności i ograniczanie użycia najnowszych funkcji do urządzeń je wspierających."
  },
  {
    "question": "Jak projektować aplikacje mobilne z myślą o skalowalności, aby rosnąca liczba użytkowników nie wpływała negatywnie na wydajność i dostępność aplikacji?",
    "answer": "Projektując skalowalne aplikacje, należy stosować architekturę klient-serwer, korzystać z chmury, optymalizować backend, unikać nadmiernych transferów oraz wdrażać cache i asynchroniczne przetwarzanie danych."
  },
  {
    "question": "Czym jest Android Studio i jakie są jego główne funkcje?",
    "answer": "Android Studio to oficjalne środowisko IDE do tworzenia aplikacji na Androida, oferujące edytor kodu, projektant interfejsów, emulator, debugowanie i integrację z systemami kontroli wersji."
  },
  {
    "question": "Jakie są kluczowe różnice między frameworkiem UIKit a SwiftUI w kontekście tworzenia interfejsów użytkownika w aplikacjach iOS, proszę omówić, jakie korzyści i wyzwania wiążą się z korzystaniem z każdego z tych frameworków oraz w jakich scenariuszach jeden może być preferowany nad drugim?",
    "answer": "UIKit to tradycyjny framework do tworzenia interfejsów w iOS z rozbudowaną dokumentacją i wsparciem, natomiast SwiftUI to nowoczesny framework deklaratywny. SwiftUI ułatwia budowę responsywnych interfejsów, ale jest mniej dojrzały i nie obsługuje wszystkich funkcji starszych wersji iOS."
  },
  {
    "question": "Omów rolę bibliotek wsparcia wzornictwa w projektowaniu i programowaniu aplikacji mobilnych dla systemu Android.",
    "answer": "Biblioteki wsparcia wzornictwa zapewniają gotowe komponenty interfejsu zgodne z Material Design, ułatwiają implementację nowoczesnych wzorców UI oraz zapewniają kompatybilność z wieloma wersjami Androida."
  },
  {
    "question": "Jakie są główne rodzaje testów w testowaniu aplikacji mobilnych?",
    "answer": "Wyróżniamy testy jednostkowe (sprawdzają pojedyncze funkcje), testy integracyjne (współdziałanie modułów), testy UI (interakcje użytkownika z interfejsem), testy wydajnościowe oraz testy akceptacyjne."
  },
  {
    "question": "Jakie są najlepsze praktyki w zakresie testowania aplikacji iOS, zwłaszcza w kontekście testów jednostkowych i testów UI?",
    "answer": "Najlepsze praktyki to pokrywanie testami krytycznych funkcji aplikacji, używanie narzędzi takich jak XCTest, regularne automatyczne uruchamianie testów w CI/CD i dbałość o realistyczne przypadki testowe."
  },
  {
    "question": "Jakie podejścia i narzędzia można wykorzystać do skutecznego testowania aplikacji mobilnych, obejmującego testy jednostkowe, integracyjne oraz testy UI?",
    "answer": "Do testowania aplikacji mobilnych używa się narzędzi takich jak Espresso, JUnit, Mockito (dla Androida) oraz XCTest i XCUITest (dla iOS). Ważne jest wdrażanie automatyzacji testów oraz regularne testy na różnych urządzeniach."
  },
  {
    "question": "Jak zaprojektować aplikację mobilną, aby była dostępna dla użytkowników z różnymi niepełnosprawnościami, zgodnie z wytycznymi WCAG (Web Content Accessibility Guidelines)?",
    "answer": "Należy stosować czytelne kontrasty, obsługę czytników ekranu, odpowiednie oznaczenia przycisków, umożliwiać powiększanie tekstu i nawigację bez użycia dotyku oraz testować aplikację pod kątem dostępności."
  },
  {
    "question": "Jak zaprojektować intuicyjny i responsywny interfejs użytkownika, który zapewni pozytywne doświadczenia użytkownika na różnych urządzeniach i rozmiarach ekranów?",
    "answer": "Intuicyjny i responsywny UI zapewnia się przez stosowanie elastycznych layoutów, czytelnych ikon i tekstów, projektowanie zgodne z zasadami platformy oraz testowanie na różnych urządzeniach i rozdzielczościach."
  },
  {
    "question": "Jak zapewnić, aby aplikacja mobilna była zgodna z trendami UX/UI, takimi jak dark mode, gesty nawigacyjne czy minimalistyczny design?",
    "answer": "Należy stosować systemowe motywy (dark/light), wprowadzać obsługę gestów zgodnie z zaleceniami platformy i projektować minimalistyczne, funkcjonalne ekrany, które nie przytłaczają użytkownika nadmiarem informacji."
  },
  {
    "question": "Jak zapewnić, aby aplikacja mobilna była przyjazna dla użytkowników starszych, uwzględniając ich specyficzne potrzeby i preferencje dotyczące interfejsu użytkownika?",
    "answer": "Aplikacja powinna oferować większe przyciski, czytelne czcionki, prostą nawigację i wyraźne kontrasty kolorów, a także ograniczać zbędne animacje czy złożoność obsługi."
  },
  {
    "question": "Jakie są kluczowe zasady projektowania interfejsu użytkownika (UI) i doświadczeń użytkownika (UX) w kontekście aplikacji iOS, proszę omówić, jak zasady Human Interface Guidelines (HIG) Apple wpływają na projektowanie aplikacji oraz jak można je zastosować, aby tworzyć intuicyjne i atrakcyjne interfejsy użytkownika",
    "answer": "Zasady HIG Apple obejmują prostotę, spójność, przewidywalność i elastyczność interfejsu, co przekłada się na łatwość obsługi i estetykę. Stosowanie tych zasad umożliwia projektowanie intuicyjnych, atrakcyjnych i zgodnych ze standardami aplikacji."
  },
  {
    "question": "Jakie są kluczowe wyzwania i potencjalne problemy związane z wydajnością oraz poprawnością danych przy stosowaniu funkcji agregujących w złożonych zapytaniach bazodanowych?",
    "answer": "Najważniejsze wyzwania to wysokie zużycie zasobów i spadek wydajności przy dużych zbiorach danych, a także ryzyko błędów logicznych, jeśli zapytania są źle zoptymalizowane lub agregacje wykonywane są na niewłaściwie przygotowanych danych."
  },
  {
    "question": "Główne cechy baz danych typu NoSQL ze szczególnym uwzględnieniem założeń dotyczących ich rozproszenia",
    "answer": "Bazy NoSQL zapewniają elastyczność struktury danych, wysoką skalowalność poziomą, szybkie zapisy/odczyty i możliwość rozproszenia danych na wiele serwerów, co poprawia wydajność oraz odporność na awarie."
  },
  {
    "question": "Mechanizmy zapewniania bezpieczeństwa i niezawodności w systemach zarządzania bazami danych",
    "answer": "Bezpieczeństwo zapewnia się przez uwierzytelnianie użytkowników, kontrolę dostępu, szyfrowanie danych, backupy oraz replikację, a niezawodność – przez mechanizmy transakcyjne i monitorowanie integralności danych."
  },
  {
    "question": "Główne cechy baz danych typu NoSQL ze szczególnym uwzględnieniem założeń dotyczących ich rozproszenia",
    "answer": "NoSQL cechuje się skalowalnością, przechowywaniem danych w różnych strukturach (dokumenty, klucz-wartość, grafy), brakiem sztywnego schematu i możliwością rozproszenia danych między wieloma węzłami, co zwiększa dostępność i elastyczność."
  },
  {
    "question": "Rola i przykłady silników do odwzorowań obiektowo-relacyjnych (ORM)",
    "answer": "Silniki ORM, takie jak Hibernate (Java) czy Entity Framework (C#), umożliwiają mapowanie obiektów w aplikacji na rekordy w bazie danych, automatyzując operacje CRUD i pozwalając programiście pracować na obiektach zamiast na zapytaniach SQL."
  },
  {
    "question": "Sposoby zapewniania wydajności i strojenia w systemach zarządzania bazami danych",
    "answer": "Wydajność baz danych zapewnia się poprzez indeksowanie tabel, optymalizację zapytań SQL, regularne analizy wydajności, archiwizowanie starych danych, rozpraszanie obciążenia i tuning parametrów serwera."
  },
  {
    "question": "Jakie są kluczowe strategie i techniki zabezpieczania aplikacji mobilnych przed zagrożeniami, takimi jak ataki typu man-in-the-middle, kradzież danych czy malware?",
    "answer": "Należy stosować szyfrowanie transmisji (np. SSL/TLS), przechowywać wrażliwe dane w bezpiecznych magazynach, ograniczać uprawnienia aplikacji, regularnie aktualizować komponenty oraz wykrywać i reagować na podejrzane zachowania aplikacji."
  }
];
