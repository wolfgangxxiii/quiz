const questions = [
  {
    "question": "Wyjaśnij, jak prawo autorskie chroni programy komputerowe oraz jakie są różne typy licencji oprogramowania. Omów konsekwencje prawne naruszenia tych licencji.",
    "answer": "Prawo autorskie obejmuje programy komputerowe jako utwory literackie, co zapewnia autorom i właścicielom praw kontrolę nad kopiowaniem, modyfikacją oraz rozpowszechnianiem kodu. Licencje mogą być zamknięte (np. Microsoft Office – użytkownik ma prawo tylko do korzystania), otwarte (np. Linux na licencji GPL umożliwia dowolne modyfikacje i rozpowszechnianie), freeware (np. Acrobat Reader, darmowy do użytku bez modyfikacji), shareware (np. WinRAR, bezpłatny tylko przez określony czas) czy trial (np. Photoshop na 30 dni). Przykładowo, nieuprawnione kopiowanie lub dystrybucja oprogramowania prowadzi do konsekwencji takich jak grzywny, pozwy sądowe, a nawet kara więzienia, zwłaszcza gdy chodzi o duże firmy i komercyjne oprogramowanie."
  },
  {
    "question": "Przedstaw kluczowe różnice między tradycyjnymi metodami zarządzania projektami (np. Waterfall) a metodykami zwinnymi (np. Scrum, Kanban) oraz omów, w jakich sytuacjach każda z tych metod może być najbardziej efektywna, szczególnie w kontekście projektów IT.",
    "answer": "Tradycyjne metody jak Waterfall opierają się na sekwencyjnych etapach, które realizuje się po kolei bez cofania, co sprawdza się przy stałych wymaganiach (np. budowa systemu ewidencji magazynu), natomiast metodyki zwinne typu Scrum czy Kanban umożliwiają częste zmiany, szybkie dostosowania i pracę w krótkich iteracjach, dzięki czemu świetnie nadają się do projektów o niepewnych wymaganiach, jak rozwój aplikacji mobilnej. W praktyce wdrażając nowy system bankowy korzysta się zwykle z Waterfalla, a rozwijając aplikację społecznościową z Agile."
  },
  {
    "question": "Omów znacznie responsywności w wykorzystaniu systemów informatycznych.",
    "answer": "Responsywność oznacza szybkość reakcji systemu na działania użytkownika, co przekłada się na komfort pracy, efektywność i zadowolenie z korzystania, a w systemach krytycznych jak systemy medyczne czy finansowe decyduje nawet o bezpieczeństwie. Przykładowo, w sklepie internetowym szybkie ładowanie koszyka poprawia konwersję, a opóźnienia mogą zniechęcić klientów."
  },
  {
    "question": "Co to jest \"Mobile First\" w projektowaniu i dlaczego jest to ważne?",
    "answer": "Mobile First to strategia, w której projektowanie interfejsu rozpoczyna się od wersji mobilnej, a dopiero później dostosowuje się go do większych ekranów, co jest istotne, ponieważ większość użytkowników przegląda internet na smartfonach i oczekuje wygody oraz szybkości, jak na przykład w aplikacjach bankowych czy portalach społecznościowych. Przykład: Google premiuje strony zoptymalizowane pod urządzenia mobilne wyższą pozycją w wynikach wyszukiwania."
  },
  {
    "question": "Jak zorganizowane są dane w systemach plików i jakie to ma znaczenie z punktu widzenia bezpieczeństwa?",
    "answer": "Dane w systemach plików są zorganizowane w strukturze hierarchicznej (foldery, podfoldery, pliki), co umożliwia stosowanie uprawnień dostępu, szyfrowania, backupów oraz kontroli wersji. Przykładowo, w systemie Linux można ograniczyć dostęp do plików systemowych tylko dla administratora, co zapobiega przypadkowemu usunięciu lub modyfikacji przez zwykłego użytkownika."
  },
  {
    "question": "Podaj uwarunkowania wykorzystania systemów Content Management System (CMS).",
    "answer": "Systemy CMS takie jak WordPress, Joomla czy Drupal pozwalają na szybkie i łatwe zarządzanie treścią, lecz wymagają regularnych aktualizacji i kontroli nad wtyczkami w celu zapewnienia bezpieczeństwa, a bez dodatkowego programowania często mają ograniczone możliwości personalizacji. Przykład: firmowa strona internetowa oparta na WordPress może być łatwo aktualizowana przez osoby bez wiedzy technicznej, ale jest narażona na ataki przez nieaktualne wtyczki."
  },
  {
    "question": "Jakie mogą być najczęstsze zagrożenia dla bezpieczeństwa sieci teleinformatycznych?",
    "answer": "Do najczęstszych zagrożeń należą ataki DDoS (blokowanie dostępu do usług, jak podczas ataku na serwery gier online), phishing (podszywanie się pod instytucje finansowe w celu wyłudzenia danych), złośliwe oprogramowanie (malware, np. ransomware blokujący dostęp do plików), ataki man-in-the-middle (przechwytywanie poufnych informacji) oraz wykorzystywanie luk w nieaktualnym oprogramowaniu. Przykład: atak WannaCry, który zablokował systemy w szpitalach."
  },
  {
    "question": "Czym są systemy wykrywania i zapobiegania intruzom (IDS/IPS) i jak one działają?",
    "answer": "Systemy IDS (Intrusion Detection System) analizują ruch sieciowy w poszukiwaniu podejrzanych aktywności i powiadamiają administratora o potencjalnych zagrożeniach, natomiast IPS (Intrusion Prevention System) dodatkowo automatycznie blokuje szkodliwy ruch, na przykład zatrzymując atak typu SQL Injection. Przykładem są rozwiązania Snort (IDS) oraz Cisco Firepower (IPS)."
  },
  {
    "question": "Jak działają zapory sieciowe (firewalle) i jakie mają ograniczenia?",
    "answer": "Firewalle analizują ruch sieciowy na podstawie ustalonych reguł dotyczących adresów IP, portów i protokołów, umożliwiając blokowanie nieautoryzowanego dostępu do sieci. Ich ograniczeniem jest brak ochrony przed atakami pochodzącymi z wnętrza sieci lub przez phishing, a także możliwość błędnej konfiguracji skutkującej blokadą legalnych usług. Przykład: firewall może zablokować port 80, uniemożliwiając dostęp do stron WWW."
  },
  {
    "question": "Jakie są zasady bezpiecznego wykorzystywania systemów teleinformatycznych?",
    "answer": "Bezpieczne korzystanie z systemów teleinformatycznych polega na stosowaniu silnych haseł, regularnych aktualizacji, ograniczaniu uprawnień według zasady najmniejszych uprawnień, wykonywaniu kopii zapasowych, unikaniu otwierania podejrzanych załączników oraz korzystaniu z oprogramowania antywirusowego. Przykładowo, pracownicy powinni być szkoleni w zakresie rozpoznawania fałszywych maili."
  },
  {
    "question": "W jaki sposób szyfrowanie wpływa na bezpieczeństwo systemów teleinformatycznych?",
    "answer": "Szyfrowanie zabezpiecza dane przed nieautoryzowanym dostępem, przekształcając je w nieczytelną formę bez odpowiedniego klucza, dzięki czemu nawet po przechwyceniu przesyłki przez osoby trzecie nie można ich odczytać. Przykład: transmisja danych bankowych przez HTTPS uniemożliwia podglądanie zawartości przez osoby postronne."
  },
  {
    "question": "Wymień i omów popierając przykładami główne zagrożenia w systemach teleinformatycznych",
    "answer": "Główne zagrożenia to ataki DDoS (przykład: blokada serwerów Amazona w wyniku masowych żądań), phishing (np. maile podszywające się pod bank w celu wyłudzenia haseł), ransomware (atak WannaCry – zaszyfrowanie plików i żądanie okupu), SQL Injection (manipulowanie zapytaniami w bazie, jak w ataku na stronę TalkTalk), oraz ataki typu zero-day (wykorzystanie nieznanych luk, np. w przeglądarce)."
  },
  {
    "question": "Wymień i opisz co najmniej 4 usługi bezpieczeństwa informacji uwzględniając możliwe ataki na te usługi.",
    "answer": "Poufność chroni dane przed dostępem nieuprawnionych osób (zagrożenie: sniffing), integralność zapewnia niezmienność informacji (atak: modyfikacja danych przez malware), dostępność umożliwia korzystanie z systemu w każdej chwili (atak: DDoS blokujący dostęp), a autoryzacja i uwierzytelnianie gwarantują, że użytkownik jest tym, za kogo się podaje (atak: brute force lub przejęcie sesji). Przykład: logowanie się do bankowości online wymaga uwierzytelnienia, a ataki brute-force próbują odgadnąć hasło."
  },
  {
    "question": "Proszę wymienić i omówić sprzętowe oraz programowe składniki sieci komputerowych",
    "answer": "Do sprzętowych składników sieci należą routery (kierują ruchem sieciowym), switche (przełączają dane pomiędzy urządzeniami), firewalle sprzętowe (ochrona na poziomie sprzętu) i serwery (udostępniają zasoby), a do programowych systemy operacyjne sieciowe (np. Windows Server), oprogramowanie firewall (np. ZoneAlarm), VPN oraz systemy IDS/IPS (np. Snort). Przykład: router domowy umożliwia podłączenie kilku komputerów do internetu."
  },
  {
    "question": "Na czym polega efekt lawinowy w systemie kryptograficznym?",
    "answer": "Efekt lawinowy polega na tym, że nawet minimalna zmiana danych wejściowych, np. zmiana jednego bitu, prowadzi do znacznej zmiany wyniku szyfrowania, co utrudnia przewidzenie efektu bez znajomości klucza. Przykład: w algorytmie AES różnica jednego znaku w hasle skutkuje całkowicie innym zaszyfrowanym tekstem."
  },
  {
    "question": "Proszę podać właściwości grafiki rastrowej i wektorowej.",
    "answer": "Grafika rastrowa składa się z pikseli, przez co traci jakość po powiększeniu (np. JPEG, PNG – zdjęcia), natomiast grafika wektorowa oparta jest na opisach matematycznych kształtów, dzięki czemu zachowuje jakość przy dowolnym powiększeniu (np. SVG, AI – logotypy, ikony). Przykład: logo w formacie SVG będzie ostre na każdej rozdzielczości, podczas gdy JPEG może się rozpikselować."
  },
  {
    "question": "Proszę podać i scharakteryzować znane topologie sieci komputerowych.",
    "answer": "Magistrala (bus) łączy wszystkie urządzenia jednym kablem (awaria kabla blokuje całą sieć), pierścień przesyła dane w jednym kierunku między urządzeniami (przykład: sieci Token Ring), gwiazda centralizuje połączenia w jednym punkcie, jak switch lub hub (często używana w biurach), a siatka pozwala każdemu urządzeniu łączyć się z każdym innym (wysoce niezawodna, np. sieci mesh Wi-Fi w dużych firmach)."
  },
  {
    "question": "Omów zasady współpracy komputera z urządzeniami wejścia/wyjścia",
    "answer": "Komputer komunikuje się z urządzeniami wejścia/wyjścia przez sterowniki i interfejsy sprzętowe, takie jak USB, PCI czy Bluetooth, zapewniając odpowiednią wymianę danych i kompatybilność. Przykładowo, klawiatura przekazuje dane do komputera przez port USB, a komputer wysyła dane do drukarki w odpowiednim formacie, korzystając ze sterownika producenta."
  },
  {
    "question": "Omów rodzaje testów i jakie korzyści przynosi automatyzacja testów w procesie wytwarzania oprogramowania?",
    "answer": "Testy dzielą się na jednostkowe (sprawdzają pojedyncze funkcje), integracyjne (sprawdzają współpracę modułów), systemowe (całość działania) oraz akceptacyjne (zgodność z wymaganiami klienta). Automatyzacja testów pozwala na szybkie i wielokrotne powtarzanie testów, wykrywanie błędów na wczesnym etapie oraz zmniejszenie kosztów, co jest widoczne np. przy użyciu narzędzi typu Selenium lub JUnit w dużych projektach informatycznych."
  },
  {
    "question": "Jakie są najpopularniejsze systemy kontroli wersji i jakie są ich główne zalety i wady w pracy w dużych zespołach?",
    "answer": "Do najpopularniejszych systemów kontroli wersji należą Git (system rozproszony), SVN (scentralizowany) oraz Mercurial, przy czym Git pozwala każdemu programiście pracować na własnej kopii repozytorium i wygodnie łączyć zmiany, co ułatwia pracę dużym zespołom i szybkie rozwiązywanie konfliktów, ale jego rozbudowane funkcje mogą być trudne dla początkujących. Przykład: duże projekty open source, jak Linux czy Chromium, wykorzystują Git ze względu na skalowalność i efektywne zarządzanie wieloma wersjami kodu."
  },
  {
    "question": "Czym są heurystyki Jacoba Nielsena? Omów jedną z nich.",
    "answer": "Heurystyki Jacoba Nielsena to zbiór dziesięciu zasad, które pomagają projektować użyteczne i intuicyjne interfejsy użytkownika; jedną z nich jest zapewnienie informacji o stanie systemu, czyli informowanie użytkownika, co się aktualnie dzieje, na przykład przez wyświetlanie paska postępu podczas ładowania pliku lub komunikatu o pomyślnym zapisaniu danych. Przykład: Gmail pokazuje animowany wskaźnik ładowania podczas pobierania załączników."
  },
  {
    "question": "Jakie są główne etapy procesu UX produktu cyfrowego?",
    "answer": "Proces UX produktu cyfrowego obejmuje badania potrzeb użytkowników (np. wywiady), tworzenie person i scenariuszy użytkowania, projektowanie makiet (wireframes) i prototypów, testy użyteczności na realnych użytkownikach oraz iteracyjne poprawki na podstawie feedbacku, co w praktyce widać przy rozwoju aplikacji mobilnych, gdzie po fazie testów prototyp często jest zmieniany. Przykład: projektowanie nowej funkcji w aplikacji bankowej wymaga wcześniejszego zbadania oczekiwań użytkowników."
  },
  {
    "question": "Jakie są główne kroki w procesie projektowania algorytmu i jak wpływają one na efektywność systemu informatycznego?",
    "answer": "Projektowanie algorytmu rozpoczyna się od zdefiniowania problemu i określenia wymagań, następnie analizuje się dane wejściowe i wyjściowe, tworzy strukturę algorytmu (np. w postaci schematu blokowego), analizuje złożoność obliczeniową, wdraża algorytm w kodzie i testuje pod kątem poprawności oraz wydajności. Przykład: projektując algorytm wyszukiwania w sklepie internetowym, ważne jest, aby działał szybko przy dużej liczbie produktów."
  },
  {
    "question": "W jaki sposób analiza złożoności obliczeniowej (czasowej i pamięciowej) wpływa na wybór algorytmu do konkretnego zadania?",
    "answer": "Analiza złożoności czasowej pozwala ocenić, jak długo algorytm będzie działał przy rosnącej ilości danych, a złożoność pamięciowa określa, ile zasobów zużyje, co umożliwia wybór najlepszego rozwiązania pod względem wydajności i oszczędności, np. do sortowania małych zbiorów danych można użyć prostych algorytmów, ale przy dużych zbiorach lepiej sprawdzi się Quicksort lub Merge Sort. Przykład: wyszukiwanie binarne jest wydajniejsze niż liniowe przy dużych, posortowanych danych."
  },
  {
    "question": "Jakie są najczęstsze techniki optymalizacji algorytmów i w jakich sytuacjach ich stosowanie jest najbardziej efektywne?",
    "answer": "Do technik optymalizacji należą programowanie dynamiczne (rozwiązywanie problemów przez zapamiętywanie wyników podproblemów, np. algorytm plecakowy), podział i zwyciężaj (dzielenie problemu na mniejsze części, jak Merge Sort), kompresja danych (np. algorytm Huffmana w kompresji plików), przetwarzanie równoległe (wykorzystywane w analizie big data), a także algorytmy przybliżone dla problemów trudnych obliczeniowo. Przykład: programowanie dynamiczne jest wykorzystywane w znajdowaniu najkrótszej ścieżki w grafie, np. w GPS."
  },
  {
    "question": "Jak podejścia algorytmiczne mogą wpływać na skalowalność systemu informatycznego?",
    "answer": "Wybór efektywnych algorytmów i odpowiednich struktur danych, np. drzew AVL czy tablic haszujących, pozwala systemom obsłużyć rosnącą liczbę użytkowników bez zauważalnego spadku wydajności, co jest kluczowe dla aplikacji takich jak platformy streamingowe lub portale społecznościowe. Przykład: YouTube wykorzystuje złożone algorytmy do zarządzania treściami milionów użytkowników bez opóźnień."
  },
  {
    "question": "Jakie są kluczowe różnice między podejściem algorytmicznym a heurystycznym w rozwiązywaniu problemów w systemach informatycznych?",
    "answer": "Podejście algorytmiczne opiera się na precyzyjnie zdefiniowanych regułach i zapewnia zawsze optymalne rozwiązanie (np. algorytm Dijkstry do najkrótszej ścieżki), podczas gdy podejście heurystyczne korzysta z uproszczeń i przybliżeń, aby szybko znaleźć dobre, ale nie zawsze optymalne rozwiązanie, jak algorytm mrówkowy w optymalizacji tras kurierskich. Przykład: szachowy silnik komputerowy używa heurystyk, aby szybko ocenić setki możliwych ruchów."
  },
  {
    "question": "Jak algebra liniowa może być wykorzystana w przetwarzaniu obrazów i analizie danych w systemach informatycznych?",
    "answer": "Algebra liniowa służy do reprezentacji obrazów za pomocą macierzy oraz do operacji takich jak obracanie, skalowanie i filtrowanie zdjęć, a także analizy danych przez redukcję wymiarów za pomocą PCA (Principal Component Analysis) czy w uczeniu maszynowym do trenowania sieci neuronowych przez mnożenie macierzy wag. Przykład: kompresja zdjęć JPEG opiera się na przekształceniach macierzowych."
  },
  {
    "question": "W jaki sposób rachunek różniczkowy i całkowy przyczynia się do optymalizacji algorytmów i modeli predykcyjnych?",
    "answer": "Rachunek różniczkowy pozwala optymalizować funkcje kosztu podczas uczenia modeli AI (np. metodą gradientu prostego), analizować szybkość zmian w systemach dynamicznych i modelować złożone procesy w analizie danych, natomiast całki pozwalają wyznaczać obszary pod krzywą lub przewidywać trendy. Przykład: trenowanie sieci neuronowej wykorzystuje obliczanie pochodnych funkcji aktywacji."
  },
  {
    "question": "Jak teoria prawdopodobieństwa i statystyka wspierają podejmowanie decyzji w systemach rekomendacyjnych i analizie danych?",
    "answer": "Systemy rekomendacyjne używają teorii prawdopodobieństwa do przewidywania preferencji użytkowników na podstawie dotychczasowych zachowań, modelowania niepewności oraz oceny skuteczności działań, np. przez filtrację kolaboratywną czy regresję liniową. Przykład: Netflix rekomenduje filmy na podstawie analizy oglądanych przez użytkownika tytułów i ocen."
  },
  {
    "question": "W jaki sposób logika matematyczna i teoria zbiorów mogą być wykorzystane w weryfikacji poprawności i niezawodności kodu źródłowego?",
    "answer": "Logika matematyczna umożliwia formalną analizę kodu poprzez model checking oraz stosowanie twierdzeń Hoare’a do dowodzenia poprawności programów, natomiast teoria zbiorów pozwala optymalizować operacje na danych oraz wykrywać konflikty typów. Przykład: narzędzia do statycznej analizy kodu weryfikują, czy każda możliwa ścieżka wykonania jest poprawna logicznie."
  },
  {
    "question": "Jak kryptografia, oparta na teoriach liczbowych i algebraicznych, wpływa na bezpieczeństwo systemów informatycznych?",
    "answer": "Kryptografia wykorzystuje właściwości liczb pierwszych i operacje algebraiczne, jak w algorytmie RSA czy na krzywych eliptycznych, zapewniając bezpieczne szyfrowanie i wymianę danych, co uniemożliwia podsłuchiwanie lub manipulację informacjami przesyłanymi przez Internet. Przykład: komunikacja bankowa online zabezpieczona jest protokołem SSL/TLS, który używa kryptografii asymetrycznej."
  },
  {
    "question": "Jak teoria grafów wpływa na projektowanie i implementację struktur danych takich jak drzewa, grafy i sieci?",
    "answer": "Teoria grafów umożliwia projektowanie wydajnych struktur danych, jak drzewa binarne do szybkiego wyszukiwania (np. drzewa AVL w bazach danych) oraz algorytmów przeszukiwania najkrótszej ścieżki, takich jak Dijkstra czy PageRank w wyszukiwarkach internetowych. Przykład: nawigacja GPS korzysta z grafów do wyznaczania najkrótszej drogi."
  },
  {
    "question": "W jaki sposób algebra liniowa jest stosowana w budowie i manipulacji strukturami danych, takimi jak macierze i wektory?",
    "answer": "Algebra liniowa umożliwia reprezentację danych w postaci macierzy (np. w grafice komputerowej do transformacji obiektów 3D) oraz operacje wektorowe używane w analizie tekstu (np. model Word2Vec w NLP) czy kompresji obrazów przez dekompozycję SVD. Przykład: wyszukiwanie obrazów przez porównanie ich reprezentacji wektorowych."
  },
  {
    "question": "Jak zasady kombinatoryki są wykorzystywane w projektowaniu struktur danych optymalizujących wyszukiwanie i sortowanie?",
    "answer": "Kombinatoryka pozwala na optymalizację struktur danych, na przykład minimalizując wysokość drzew AVL czy projektując efektywne algorytmy sortowania jak QuickSort, a także w funkcjach skrótu dla tablic haszujących. Przykład: dobór optymalnej liczby bucketów w tablicy haszującej zależy od obliczeń kombinatorycznych."
  },
  {
    "question": "W jaki sposób teoria prawdopodobieństwa jest używana w strukturach danych takich jak filtry Blooma i drzewa probabilistyczne?",
    "answer": "Teoria prawdopodobieństwa umożliwia budowanie struktur danych, które szybko sprawdzają przynależność elementu do zbioru, jak filtry Blooma w bazach danych (np. sprawdzanie czy email był już sprawdzany pod kątem spamu) oraz drzewa probabilistyczne, jak drzewo Huffmana do kompresji danych lub modele Markowa do przewidywania kolejnych znaków. Przykład: autokorekta w telefonach wykorzystuje modele Markowa."
  },
 {
    "question": "Jakie są najlepsze praktyki w zakresie zarządzania danymi treningowymi, w tym ich gromadzenie, przechowywanie, przetwarzanie i zabezpieczanie, w kontekście budowy systemów sztucznej inteligencji?",
    "answer": "Najlepsze praktyki obejmują pozyskiwanie danych z legalnych i wiarygodnych źródeł, stosowanie redundantnych kopii zapasowych, szyfrowanie i anonimizację wrażliwych informacji, regularne czyszczenie i normalizację danych oraz ograniczenie dostępu wyłącznie do uprawnionych osób; przykładowo w rozwoju systemów rozpoznawania twarzy zdjęcia użytkowników powinny być przechowywane na bezpiecznych serwerach i poddawane anonimizacji."
  },
  {
    "question": "Jak duże modele językowe (LLM) mogą być integrowane z istniejącymi systemami informatycznymi i aplikacjami, aby poprawić ich funkcjonalność i wydajność",
    "answer": "Duże modele językowe można integrować jako asystentów AI w aplikacjach, wykorzystywać do automatycznego generowania odpowiedzi, analizy dokumentów, wyszukiwania semantycznego czy tłumaczenia treści, co pozwala znacząco zwiększyć funkcjonalność systemu, na przykład przez wdrożenie chatbota obsługującego klientów na stronie banku lub sklepu internetowego."
  },
  {
    "question": "W jaki sposób duże modele językowe (LLM) mogą być wykorzystywane do automatyzacji zadań związanych z przetwarzaniem języka naturalnego (NLP), takich jak tłumaczenie, podsumowywanie tekstu i analiza sentymentu?",
    "answer": "LLM mogą automatycznie tłumaczyć teksty na różne języki, streszczać długie dokumenty do najważniejszych informacji, analizować opinię użytkowników pod kątem pozytywnego lub negatywnego nastawienia, a także generować odpowiedzi na zapytania, co jest wykorzystywane np. w automatycznych systemach wsparcia klienta czy w narzędziach do analizy recenzji produktów."
  },
  {
    "question": "Co jest przedmiotem praw autorskich, a co jest spod nich wyłączone? Przedstaw podział praw autorskich i omów je",
    "answer": "Przedmiotem ochrony praw autorskich są utwory o indywidualnym charakterze, takie jak teksty, muzyka, grafiki czy programy komputerowe, natomiast spod ochrony wyłączone są idee, procedury, metody działania i odkrycia; prawa autorskie dzielą się na osobiste (np. prawo do autorstwa, niepodlegające zbyciu) i majątkowe (prawo do czerpania korzyści finansowych, możliwe do przeniesienia lub licencjonowania). Przykład: książka jest chroniona, ale jej temat czy pomysł — nie."
  },
  {
    "question": "Wyjaśnij różnicę pomiędzy szyfrowaniem symetrycznym a asymetrycznym.",
    "answer": "Szyfrowanie symetryczne używa jednego klucza do szyfrowania i odszyfrowywania danych, co zapewnia szybkość i wydajność (np. AES w dyskach szyfrowanych), natomiast szyfrowanie asymetryczne wykorzystuje dwa różne klucze — publiczny do szyfrowania i prywatny do deszyfrowania — co pozwala na bezpieczną wymianę danych przez Internet, jak w przypadku poczty e-mail szyfrowanej kluczem PGP."
  },
  {
    "question": "Omówić przebieg bezpiecznej transmisji w sieciach teleinformatycznych na przykładzie protokołu SSL (Secure Socket Layer)",
    "answer": "Bezpieczna transmisja przez SSL (obecnie TLS) polega na wymianie certyfikatów i uzgodnieniu klucza sesji pomiędzy klientem a serwerem, po czym cała dalsza komunikacja jest szyfrowana i chroniona przed podsłuchem oraz manipulacją; przykład: logowanie do bankowości internetowej przez stronę z kłódką w przeglądarce oznacza wykorzystanie TLS."
  },
  {
    "question": "Ataki odmowy dostępu do usług (Denial of Service) - podaj przykłady ataku i sposoby jego unikania.",
    "answer": "Ataki DoS polegają na zalewaniu serwera dużą ilością żądań, przez co staje się on niedostępny dla zwykłych użytkowników, a przykładem może być atak SYN Flood lub rozproszony atak DDoS z wielu komputerów (np. botnet), przed którymi chronią firewalle, systemy IDS/IPS oraz usługi typu Cloudflare, które filtrują niepożądany ruch."
  },
  {
    "question": "Jaki jest cel, do czego jest używana maski podsieci w konfiguracji sieci?",
    "answer": "Maska podsieci umożliwia wydzielenie mniejszych, logicznych sieci z jednej dużej sieci adresowej IP, co pozwala lepiej zarządzać ruchem, zwiększyć bezpieczeństwo przez izolację segmentów oraz ograniczyć liczbę broadcastów; przykładowo w firmie można rozdzielić sieć pracowników od gości za pomocą osobnych podsieci."
  },
  {
    "question": "Wyjaśnij koncepcję wykorzystania Virtual Local Area Network (VLAN) i ich zalety w zarządzaniu siecią",
    "answer": "VLAN pozwala podzielić jedną fizyczną sieć na kilka logicznych segmentów, co ułatwia kontrolę nad ruchem, poprawia bezpieczeństwo poprzez izolację różnych działów firmy oraz redukuje ilość broadcastów, bez potrzeby stosowania dodatkowego sprzętu; na przykład w szkole można oddzielić sieć dla nauczycieli od sieci uczniowskiej korzystając z VLAN."
  },
  {
    "question": "Jaką rolę odgrywają sztuczna inteligencja (AI) i uczenie maszynowe (ML) w nowoczesnych systemach wykrywania zagrożeń i jakie są wyzwania związane z ich wykorzystaniem?",
    "answer": "AI i ML analizują duże zbiory danych i logów w celu wykrywania nietypowych wzorców, predykcji ataków oraz szybkiego reagowania na incydenty, jednak wymagają dużej ilości danych treningowych, zasobów obliczeniowych i są narażone na próby omijania przez cyberprzestępców; przykładem są systemy wykrywające phishing w poczcie firmowej lub nieautoryzowane logowania."
  },
  {
    "question": "Jakie są wady i zalety aplikacji natywnych w porównaniu do aplikacji internetowych w przypadku urządzeń mobilnych?",
    "answer": "Aplikacje natywne mają dostęp do wszystkich funkcji urządzenia, działają szybciej i offline, ale wymagają osobnych wersji na różne systemy (np. iOS i Android), podczas gdy aplikacje internetowe są uniwersalne i łatwe do aktualizacji, lecz zwykle wolniejsze i wymagają stałego połączenia z Internetem; przykład: WhatsApp to aplikacja natywna, a Facebook Lite to aplikacja webowa."
  },
  {
    "question": "Wyjaśnij, czym jest wątek w kontekście systemów operacyjnych.",
    "answer": "Wątek to najmniejsza jednostka wykonawcza wewnątrz procesu, posiadająca własny licznik rozkazów i stos, co pozwala na równoległe wykonywanie zadań w ramach jednej aplikacji; na przykład w przeglądarce internetowej jeden wątek odpowiada za ładowanie strony, a inny za odtwarzanie muzyki w tle."
  },
  {
    "question": "Czym jest wirtualizacja w kontekście systemów operacyjnych i jakie przynosi korzyści?",
    "answer": "Wirtualizacja umożliwia uruchamianie wielu systemów operacyjnych na jednym fizycznym serwerze, co poprawia wykorzystanie zasobów, ułatwia testowanie, zwiększa bezpieczeństwo przez izolację środowisk i umożliwia szybkie przywracanie systemu po awarii; przykładem są maszyny wirtualne w chmurze, np. AWS EC2."
  },
  {
    "question": "Jakie są metody zapewniania bezpieczeństwa w systemach operacyjnych?",
    "answer": "Bezpieczeństwo systemów operacyjnych zapewnia się przez kontrolę dostępu do plików i katalogów, szyfrowanie danych, korzystanie z firewalli i antywirusów, stosowanie sandboxingu oraz regularne aktualizacje systemu; przykładowo, Windows Defender chroni przed złośliwym oprogramowaniem, a Linux stosuje mechanizm sudo do kontroli uprawnień."
  },
  {
    "question": "Czym jest system plików i jakie są jego podstawowe funkcje?",
    "answer": "System plików zarządza przechowywaniem, organizacją oraz kontrolą dostępu do danych na dyskach i innych nośnikach, zapewniając integralność i strukturę plików oraz katalogów; przykładem są systemy NTFS (Windows), EXT4 (Linux) czy FAT32 (starsze dyski USB)."
  },
  {
    "question": "Czym jest hypervisor w wirtualizacji, jaką pełni rolę i jak jest zorganizowany?",
    "answer": "Hypervisor to oprogramowanie zarządzające maszynami wirtualnymi, dzielące zasoby sprzętowe pomiędzy systemy gości; wyróżnia się typ 1 (bare-metal, np. VMware ESXi, działa bezpośrednio na sprzęcie) i typ 2 (hostowane, np. VirtualBox, uruchamiane w systemie operacyjnym gospodarza). Przykład: Hyper-V w Windows Server."
  },
  {
    "question": "Omów strukturę rejestru systemu operacyjnego?",
    "answer": "Rejestr Windows to hierarchiczna baza danych zawierająca ustawienia systemu operacyjnego i aplikacji, podzielona na główne gałęzie takie jak HKEY_CLASSES_ROOT, HKEY_CURRENT_USER, HKEY_LOCAL_MACHINE, HKEY_USERS i HKEY_CURRENT_CONFIG; na przykład w rejestrze przechowywane są ścieżki instalacji programów oraz konfiguracje sieci."
  },
  {
    "question": "Omów mechanizmy zapewniania bezpieczeństwa i niezawodności w systemach zarządzania bazami danych.",
    "answer": "Bezpieczeństwo baz danych zapewnia kontrola dostępu, szyfrowanie danych, wykonywanie regularnych kopii zapasowych, replikacja i stosowanie zasad ACID, które gwarantują integralność oraz możliwość odtworzenia danych po awarii; przykładem jest stosowanie backupów i szyfrowania w bazie PostgreSQL lub MySQL."
  },
  {
    "question": "Wyjaśnij co oznacza i dlaczego mówimy o systemach operacyjnych 32 i 64 bitowych?",
    "answer": "Systemy 32-bitowe mogą obsługiwać maksymalnie 4 GB pamięci RAM i mają ograniczoną wydajność, natomiast 64-bitowe wspierają dużo większą ilość pamięci i pozwalają uruchamiać zarówno aplikacje 32-, jak i 64-bitowe, co skutkuje lepszą wydajnością; przykładowo, Windows 10 64-bit pozwala na pracę z dużymi bazami danych czy programami graficznymi."
  },
  {
    "question": "Jakie są różnice i podobieństwa w sposobach deklaracji, definicji oraz wykorzystania zmiennych typów prostych w językach C, Java i C#?",
    "answer": "W każdym z tych języków zmienne deklaruje się podobnie, jednak w C możliwy jest bezpośredni dostęp do pamięci przez wskaźniki, a Java i C# wykorzystują garbage collector i dzielą zmienne na typy wartościowe oraz referencyjne; przykładowo w C: int liczba = 5;, w Java: int liczba = 5;, w C#: int liczba = 5; — ale tylko w C operujemy wskaźnikami."
  },
 {
    "question": "W jaki sposób realizowana jest obsługa wyjątków w wybranym języku programowania i jakie są jej główne mechanizmy oraz najlepsze praktyki?",
    "answer": "Obsługa wyjątków polega na wychwytywaniu i zarządzaniu błędami w bloku try-catch (lub try-except w Pythonie), pozwalając na bezpieczne zakończenie programu lub wykonanie procedur naprawczych; najlepsze praktyki to obsługa konkretnych wyjątków, logowanie błędów, unikanie pustych bloków catch oraz zwalnianie zasobów w bloku finally. Przykład: w Javie obsługa wyjątku dzielenia przez zero zapobiega awarii aplikacji i umożliwia wyświetlenie komunikatu użytkownikowi."
  },
  {
    "question": "Omów, dla jakich danych zastosujesz tablicę. Podaj przykłady z deklaracją, utworzeniem i zainicjowaniem tablicy w języku C# lub Java.",
    "answer": "Tablice używa się do przechowywania wielu elementów tego samego typu, np. wyników pomiarów lub listy nazwisk; w C#: int[] liczby = new int[5] {1, 2, 3, 4, 5};, w Java: int[] liczby = {1, 2, 3, 4, 5};. Przykład: tablica przechowująca wyniki egzaminów studentów lub kolejne ruchy w grze komputerowej."
  },
  {
    "question": "Jak zdefiniować upstream branch, a następnie skonfigurować go w zdalnym repozytorium tak, aby miał tę samą nazwę co w repozytorium lokalnym oraz jak skonfigurować go pod inną nazwą niż w repozytorium lokalnym?",
    "answer": "Upstream branch w Git definiuje się za pomocą komendy git push --set-upstream origin nazwa_gałęzi, co ustawia tę samą nazwę w repozytorium zdalnym; aby nadać inną nazwę zdalną, używa się git push --set-upstream origin lokalna_gałąź:inna_nazwa_zdalna. Przykład: lokalną gałąź 'feature1' można wysłać do zdalnej jako 'feature_prod'."
  },
  {
    "question": "Jak zdefiniować pojęcia tip i head w kontekście systemów kontroli wersji, oraz w jaki sposób można określić liczbę heads w repozytorium?",
    "answer": "Tip to najnowszy commit na danej gałęzi, a head oznacza obecnie aktywną gałąź lub commit, do którego jesteśmy 'przyklejeni'; liczbę heads w repozytorium Git można sprawdzić poleceniem git show-ref --heads. Przykład: w projekcie z kilkoma równoległymi funkcjonalnościami, każda z nich może mieć własny 'head'."
  },
  {
    "question": "Jakie są kluczowe różnice między klasą a obiektem w programowaniu obiektowym, oraz jak te różnice wpływają na tworzenie i wykorzystanie kodu?",
    "answer": "Klasa to definicja struktury i zachowania (szablon), natomiast obiekt to konkretna instancja tej klasy z własnymi danymi; dzięki temu można wielokrotnie tworzyć obiekty z tej samej klasy, np. klasa Samochod, a obiekty: mojSamochod, twojSamochod. Przykład: tworząc klasę Student, można utworzyć wiele obiektów reprezentujących różnych studentów."
  },
  {
    "question": "Czym jest enkapsulacja w programowaniu obiektowym, jakie są jej główne zalety i dlaczego jest istotna dla tworzenia solidnego i bezpiecznego kodu?",
    "answer": "Enkapsulacja to ukrywanie szczegółów implementacji klasy oraz udostępnianie na zewnątrz tylko wybranych metod, co chroni dane przed niepożądanym dostępem i ułatwia zarządzanie kodem; przykładem jest pole prywatne 'saldo' w klasie KontoBankowe, do którego można się odwoływać wyłącznie przez metody 'wpłać' lub 'pobierz'."
  },
  {
    "question": "Jakie jest znaczenie polimorfizmu w programowaniu obiektowym i jakie są przykłady jego praktycznego zastosowania w różnych językach programowania?",
    "answer": "Polimorfizm umożliwia stosowanie tej samej nazwy metody dla różnych klas, co pozwala na elastyczne wykorzystanie kodu i łatwe rozszerzanie funkcjonalności; przykładem jest metoda 'Rysuj' zaimplementowana w klasie Koło i Prostokąt, która w każdym przypadku działa zgodnie z typem obiektu. Przykład: metoda 'drukuj' może działać inaczej w klasie Faktura i w klasie Rachunek."
  },
  {
    "question": "Jakie są różnice między modyfikatorami dostępu public, private i protected w różnych językach programowania oraz jak te różnice wpływają na sposób zarządzania dostępem do członków klasy?",
    "answer": "Public umożliwia dostęp do elementu klasy z dowolnego miejsca programu, private ogranicza dostęp tylko do wnętrza danej klasy, a protected pozwala na dostęp w klasie oraz klasach pochodnych; umożliwia to kontrolę nad bezpieczeństwem i ukrywaniem wrażliwych danych, np. prywatne pole hasło nie jest dostępne poza klasą Użytkownik."
  },
  {
    "question": "Wyjaśnij pojęcie klasy i obiektu. Definiowanie klasy, tworzenie i usuwanie obiektów w wybranym języku programowania.",
    "answer": "Klasa to szablon opisujący właściwości i metody, z którego można utworzyć obiekty (instancje) za pomocą operatora new, a w językach takich jak Java usuwanie obiektów odbywa się automatycznie dzięki mechanizmowi garbage collector; przykładowo, definiując klasę 'Auto', można utworzyć obiekt: Auto mojeAuto = new Auto();."
  },
  {
    "question": "Omów składnię definiowania oraz różnice w przekazywaniu parametrów, zwracaniu wartości i wywoływaniu metod obiektowych (instancyjnych) i klasowych (statycznych) na przykładzie wybranego języka.",
    "answer": "Metody instancyjne wywołuje się na obiektach (np. samochod.jedz()), mają dostęp do pól tej instancji, natomiast metody statyczne należą do klasy i wywołuje się je bez tworzenia obiektu (np. Math.sqrt(4)), nie mają dostępu do pól instancji; zwracanie wartości realizuje się poprzez typ zwracany, np. int dodaj(int a, int b) { return a+b; } w C#. Przykład: Math.Pow(2,3) jako metoda statyczna."
  },
  {
    "question": "Opisz ideę dziedziczenia i jej realizację w wybranym obiektowym języku programowania.",
    "answer": "Dziedziczenie umożliwia tworzenie nowych klas bazujących na istniejących, co pozwala na ponowne wykorzystanie kodu i łatwiejsze rozszerzanie funkcjonalności; w Javie realizowane jest przez słowo kluczowe 'extends', np. klasa Samochod dziedziczy po klasie Pojazd. Przykład: klasa Pies rozszerza klasę Zwierze, dodając specyficzne metody szczekania."
  },
  {
    "question": "Jakie są kluczowe różnice między zmiennymi automatycznymi a dynamicznymi w kontekście programowania, oraz jak te różnice wpływają na zarządzanie pamięcią i działanie programu?",
    "answer": "Zmienne automatyczne tworzone są na stosie i istnieją tylko w czasie działania funkcji (np. int x w funkcji w C), natomiast zmienne dynamiczne umieszczane są na stercie i mogą żyć dłużej, ale wymagają ręcznego zwalniania (np. malloc i free w C) lub zarządzania przez garbage collector w językach wysokiego poziomu. Przykład: dynamicznie tworzone obiekty w C# są automatycznie usuwane przez GC po zakończeniu użycia."
  },
  {
    "question": "Jak różni się pojęcie interfejsu od implementacji klasy w kontekście programowania obiektowego, oraz jakie są główne zalety korzystania z interfejsów w projektowaniu oprogramowania?",
    "answer": "Interfejs określa zestaw metod, które muszą być zaimplementowane przez klasę, lecz nie zawiera ich kodu, co pozwala na elastyczność, wielokrotne dziedziczenie zachowań i łatwiejsze testowanie; przykład: interfejs Drukowalny z metodą drukuj() może być implementowany przez różne klasy, np. Faktura i Raport, które drukują się na różne sposoby."
  },
  {
    "question": "Jakie są główne techniki i zalety tworzenia nowych klas poprzez dziedziczenie z już istniejących klas w programowaniu obiektowym, oraz w jaki sposób dziedziczenie wspomaga reużywalność kodu i organizację hierarchii klas?",
    "answer": "Dziedziczenie pozwala tworzyć klasy potomne na bazie klas bazowych (np. klasa Osoba → klasa Pracownik), co upraszcza strukturę kodu, pozwala unikać duplikacji i ułatwia modyfikacje; dzięki temu rozbudowa systemu, np. dodanie klasy Student, wymaga jedynie rozszerzenia bazowej klasy Osoba bez przepisywania wspólnych metod."
  },
  {
    "question": "Podaj dwa przykłady programów komputerowych, które są wykorzystywane do symulacji komputerowej, oraz omów ich zastosowanie i główne cechy, które sprawiają, że są użyteczne w symulacji.",
    "answer": "MATLAB/Simulink wykorzystywany jest do modelowania i symulacji systemów dynamicznych, oferując rozbudowane biblioteki matematyczne oraz możliwość wizualizacji wyników, a Ansys pozwala na symulacje mechaniczne, analizę wytrzymałości i przepływów, dzięki czemu inżynierowie mogą odwzorowywać warunki rzeczywiste; przykładowo, symulacja zderzenia samochodu z barierą pozwala przewidzieć skutki wypadku bez kosztownych testów fizycznych."
  },
  {
    "question": "Model tworzony w Scilabie/Matlabie jest przybliżeniem rzeczywistości. Dokładnemu odwzorowaniu towarzyszą niepewności np. co do -parametrów modelu -warunków brzegowych które mogą wpływać na dokładność i wiarygodność wyników. Omów te niepewności na dowolnym przykładzie.",
    "answer": "Niepewności modelowania mogą wynikać z przyjęcia nieprecyzyjnych parametrów (np. przewodność cieplna materiału) lub warunków brzegowych (np. temperatura otoczenia), co wpływa na dokładność symulacji; przykładowo, przy modelowaniu układu grzewczego w budynku nawet mały błąd w parametrach izolacji może prowadzić do dużych rozbieżności między wynikiem symulacji a rzeczywistym zużyciem energii."
  },
  {
    "question": "Jak Python zarządza pamięcią dla obiektów i jakie są główne mechanizmy oraz strategie, które są stosowane w tym języku programowania?",
    "answer": "Python wykorzystuje automatyczne zarządzanie pamięcią za pomocą systemu garbage collection, opartego o liczenie referencji i detekcję cykli nieużywanych obiektów, co minimalizuje ryzyko wycieków pamięci; przykładem jest automatyczne usunięcie listy z pamięci po zakończeniu jej używania w programie."
  },
  {
    "question": "Wyjaśnij, co to jest wiązanie danych (Data Binding) w kontekście Windows Presentation Foundation i jak może być używane do synchronizacji danych między modelem danych a interfejsem użytkownika.",
    "answer": "Data Binding w WPF umożliwia automatyczną synchronizację między modelem danych a interfejsem użytkownika, dzięki czemu zmiana danych w modelu natychmiast pojawia się w widoku i odwrotnie, bez konieczności ręcznej aktualizacji; przykład: zmiana tekstu w polu TextBox aktualizuje wartość właściwości w obiekcie klasy Person."
  },
  {
    "question": "Wyjaśnij, jak Extensible Application Markup Language współpracuje z kodem C# w aplikacjach Windows Presentation Foundation. Podaj przykład, w jaki sposób można zdefiniować interfejs użytkownika i manipulować nim z poziomu kodu C#.",
    "answer": "XAML pozwala deklaratywnie tworzyć interfejs użytkownika, który następnie jest powiązany z kodem C#, umożliwiając dynamiczną manipulację elementami interfejsu; przykładowo przycisk zdefiniowany w XAML można odnaleźć po nazwie w kodzie C# i zmienić jego właściwość tekstową metodą button.Content = \"Kliknięto\"."
  },
  {
    "question": "Omów zasady budowy interfejsów użytkownika systemów informatycznych.",
    "answer": "Projektowanie interfejsu użytkownika powinno opierać się na zasadach czytelności, prostoty, intuicyjności i spójności wizualnej, aby użytkownik mógł bez problemu znaleźć potrzebne funkcje; przykładem jest umieszczenie przycisku 'Zapisz' w prawym dolnym rogu formularza i wyróżnienie go kolorem."
  },
{
    "question": "Omów proces normalizacji baz i jej trzy postaci popierając przykładami.",
    "answer": "Normalizacja baz danych to proces eliminowania nadmiarowości i zapewniania integralności poprzez podział danych na logiczne tabele; pierwsza postać normalna (1NF) zakłada brak powtarzających się grup i pojedyncze wartości w komórkach (np. tabela z osobnymi kolumnami dla telefonów), druga postać normalna (2NF) eliminuje częściowe zależności (np. podział danych o zamówieniach i produktach na dwie tabele), a trzecia postać normalna (3NF) eliminuje zależności przechodnie (np. oddzielenie danych o dostawcach od produktów). Przykład: rozdzielenie danych o klientach i zamówieniach na osobne tabele."
  },
  {
    "question": "W jaki sposób notacja BPMN (ang. Business Process Model and Notation) może być wykorzystana do modelowania złożonych procesów biznesowych w organizacji, i jakie wyzwania mogą się pojawić podczas jej implementacji w systemach informatycznych?",
    "answer": "Notacja BPMN umożliwia wizualne przedstawienie złożonych procesów biznesowych w formie diagramów, co ułatwia komunikację między zespołami, analizę oraz optymalizację przepływów pracy; wyzwaniami są integracja modeli BPMN z istniejącymi systemami IT, zachowanie aktualności modeli przy zmianach procesów oraz dostosowanie do specyficznych wymagań organizacji. Przykład: wdrożenie modelu obiegu faktur, który musi być powiązany z systemem ERP."
  },
  {
    "question": "Proszę omówić i porównać modele relacyjne i nierelacyjne bazy danych.",
    "answer": "Relacyjne bazy danych przechowują dane w tabelach połączonych relacjami, zapewniając integralność i możliwość użycia języka SQL (np. MySQL), natomiast bazy nierelacyjne (NoSQL) umożliwiają elastyczne przechowywanie danych w dokumentach, grafach lub klucz-wartość i są skalowalne poziomo (np. MongoDB); relacyjne sprawdzają się w systemach księgowych, a nierelacyjne w aplikacjach gromadzących różnorodne dane, jak media społecznościowe."
  },
  {
    "question": "Proszę omówić zasady definiowania wzorców funkcji i klas (znane również jako szablony lub generics).",
    "answer": "Szablony (C++) lub generics (Java, C#) pozwalają tworzyć funkcje i klasy operujące na dowolnym typie danych bez powielania kodu, co zwiększa elastyczność i bezpieczeństwo typów; przykład: klasa List<T> w C# umożliwia przechowywanie dowolnych obiektów, a szablonowa funkcja swap<T> zamienia miejscami dwa elementy dowolnego typu."
  },
  {
    "question": "Proszę podać główne cechy zunifikowanego języka modelowania systemów informatycznych (ang. UML ) – zastosowanie, charakterystykę oraz jego podstawowe diagramy.",
    "answer": "UML to graficzny język służący do modelowania struktur i procesów systemów informatycznych, umożliwiający tworzenie diagramów klas, przypadków użycia, sekwencji czy aktywności; ułatwia zrozumienie architektury i komunikację w zespole. Przykład: diagram przypadków użycia pokazuje relacje między użytkownikami a funkcjami systemu."
  },
  {
    "question": "Omów pojęcie abstrakcji i wskaż jego znaczenie z punktu widzenia wielokrotnego użycia (ang. Reuse).",
    "answer": "Abstrakcja polega na ukrywaniu szczegółów implementacji i ujawnianiu tylko kluczowych cech obiektu, co pozwala projektować elastyczne, wielokrotnego użycia komponenty; na przykład interfejs pojazd z metodą jedz() umożliwia stworzenie różnych klas (Samochód, Rower), które wykorzystują tę samą abstrakcję w różnych kontekstach."
  },
  {
    "question": "Mechanizmy zapewniania bezpieczeństwa i niezawodności w systemach zarządzania bazami danych.",
    "answer": "Bezpieczeństwo i niezawodność w bazach danych zapewnia się przez uwierzytelnianie użytkowników, kontrolę uprawnień, szyfrowanie, wykonywanie kopii zapasowych, replikację danych oraz stosowanie zasad ACID; przykładem jest regularne wykonywanie backupów i testowanie odtwarzania danych w systemie PostgreSQL."
  },
  {
    "question": "Omów pojęcie wzorca projektowego ich rodzaje oraz jego rola w procesie projektowania.",
    "answer": "Wzorce projektowe to sprawdzone rozwiązania typowych problemów programistycznych, dzielące się na kreacyjne (np. Singleton), strukturalne (np. Adapter) i behawioralne (np. Observer); ich stosowanie przyspiesza rozwój oprogramowania i poprawia czytelność kodu. Przykład: wzorzec Singleton zapewnia istnienie tylko jednej instancji klasy konfiguracji."
  },
  {
    "question": "Wyjaśnij na przykładach zasady SOLID w projektowaniu obiektowym.",
    "answer": "SOLID to pięć zasad: pojedynczej odpowiedzialności (klasa powinna mieć tylko jeden powód do zmiany, np. klasa obsługująca tylko logowanie), otwartości/zamkniętości (można rozszerzać, ale nie zmieniać istniejącego kodu, np. dodanie nowego typu płatności przez rozszerzenie klasy), podstawienia Liskov (obiekty klas pochodnych mogą być używane zamiast bazowej), segregacji interfejsów (wiele małych interfejsów zamiast jednego dużego), odwrócenia zależności (moduły wysokiego poziomu nie zależą od modułów niskiego poziomu)."
  },
  {
    "question": "Co to jest język zapytań do baz danych i z jakich elementów się składa. Omów ich przeznaczenie.",
    "answer": "Język zapytań do baz danych (np. SQL) pozwala na wyszukiwanie, dodawanie, modyfikowanie i usuwanie danych w bazie oraz zarządzanie jej strukturą; składa się z poleceń SELECT (pobieranie danych), INSERT (dodawanie), UPDATE (aktualizacja), DELETE (usuwanie) i DDL (tworzenie tabel). Przykład: SELECT * FROM klienci pobiera wszystkich klientów."
  },
  {
    "question": "Omów system śledzenia transakcji w bazach danych i podaj przykłady problemów jakie on rozwiązuje.",
    "answer": "System śledzenia transakcji rejestruje wszystkie operacje wykonywane w bazie, umożliwiając odtworzenie stanu po awarii, cofnięcie zmian oraz rozwiązywanie konfliktów czy naruszeń integralności; przykładowo po błędnym transferze bankowym można przywrócić poprzedni stan konta."
  },
  {
    "question": "Omów etapy inżynierii oprogramowania i wskaż jakie artefakty powstają na każdym z etapów.",
    "answer": "Etapy inżynierii oprogramowania to analiza wymagań (dokument wymagań), projektowanie (diagramy UML, modele), implementacja (kod źródłowy), testowanie (scenariusze testowe i raporty), wdrożenie (dokumentacja użytkownika, instrukcje instalacji) oraz utrzymanie (logi zmian, aktualizacje). Przykład: w fazie testowania powstaje raport z testów regresyjnych."
  },
  {
    "question": "Omów techniki pozyskiwania wymagań. Wskaż, które z nich są adekwatne gdy odbiorcami rozwiązania są firmy B2B (Business-to-Business), a które gdy indywidualni użytkownicy B2C (Business-to-Consumer).",
    "answer": "Techniki pozyskiwania wymagań to wywiady, ankiety, analiza dokumentów, warsztaty, obserwacja czy prototypowanie; w projektach B2B lepiej sprawdzają się wywiady z przedstawicielami firm oraz analiza procesów, natomiast w B2C masowe ankiety i testy użyteczności na użytkownikach indywidualnych. Przykład: w projekcie systemu ERP stosuje się warsztaty z zespołem klienta."
  },
  {
    "question": "Jakie funkcje powinien realizować system zarządzania bazą danych?",
    "answer": "System zarządzania bazą danych powinien umożliwiać przechowywanie, wyszukiwanie, aktualizowanie i usuwanie danych, zarządzać uprawnieniami użytkowników, zapewniać integralność i bezpieczeństwo informacji, realizować backupy oraz wspierać transakcje. Przykład: MS SQL Server automatycznie wykonuje kopie zapasowe oraz kontroluje dostęp do danych."
  },
  {
    "question": "Podaj uwarunkowania stosowania podejścia obiektowego i strukturalnego w projektowaniu systemów informatycznych.",
    "answer": "Podejście obiektowe jest korzystne w projektach wymagających elastyczności, rozbudowy i ponownego użycia kodu (np. systemy ERP, aplikacje mobilne), podczas gdy podejście strukturalne sprawdza się w mniejszych, jednorazowych projektach z prostą logiką (np. prosty system rejestracji). Przykład: system bankowy rozwijany przez lata wymaga obiektowego podejścia."
  },
  {
    "question": "Jakie są kluczowe wymagania funkcjonalne i niefunkcjonalne systemu, który ma integrować różnorodne systemy informatyczne w dużej organizacji?",
    "answer": "Wymagania funkcjonalne to m.in. integracja danych i procesów, natomiast niefunkcjonalne obejmują bezpieczeństwo, wydajność, niezawodność, skalowalność i zgodność ze standardami; przykładowo, system integrujący HR i finanse powinien umożliwiać wymianę danych i spełniać wymogi RODO."
  },
  {
    "question": "Omów zasady działania wzorca MVC (ang. Model View Controller). W jakich projektach zastosowałbyś tę architekturę?",
    "answer": "MVC rozdziela aplikację na warstwę modelu (logika i dane), widoku (interfejs użytkownika) oraz kontrolera (zarządzanie przepływem danych), co upraszcza rozwój i testowanie; wzorzec ten jest szczególnie polecany w aplikacjach webowych i mobilnych z rozbudowanym interfejsem, jak sklepy internetowe czy platformy społecznościowe."
  },
  {
    "question": "Omów główne zasady metodyk zwinnych i jakie rozwiązują problemy?",
    "answer": "Metodyki zwinne, jak Scrum i Kanban, opierają się na elastyczności, iteracyjności, regularnych spotkaniach i ścisłej współpracy zespołu, umożliwiając szybkie reagowanie na zmiany wymagań oraz lepsze dostosowanie produktu do potrzeb klienta. Przykład: w Scrumie zmiany mogą być wprowadzane w każdej iteracji (sprincie)."
  },
  {
    "question": "Z jakimi obszarami związane są wymagania niefunkcjonale i jakich? Podaj przykłady poprawnie sformułowanych wymagań.",
    "answer": "Wymagania niefunkcjonalne dotyczą bezpieczeństwa, wydajności, dostępności, skalowalności czy użyteczności systemu; przykłady: 'Czas odpowiedzi systemu nie może przekroczyć 2 sekund' lub 'System musi być dostępny 24/7 i obsłużyć 1000 użytkowników jednocześnie.'"
  },
  {
    "question": "Wymień i opisz cechy różnych typów aplikacji mobilnych (natywne, hybrydowe, wieloplatformowe itp.).",
    "answer": "Aplikacje natywne są tworzone bezpośrednio pod dany system operacyjny (np. Swift dla iOS), oferują najwyższą wydajność i dostęp do funkcji urządzenia; hybrydowe działają na wielu platformach dzięki webview (np. Ionic), są łatwiejsze w utrzymaniu, ale mogą być wolniejsze; wieloplatformowe (np. Flutter, React Native) kompilują się do natywnego kodu, zapewniając kompromis między wydajnością a uniwersalnością."
  },
{
    "question": "Jakie są metody zarządzania pamięcią w aplikacjach mobilnych?",
    "answer": "Zarządzanie pamięcią w aplikacjach mobilnych obejmuje stosowanie mechanizmów garbage collection (np. w Androidzie i iOS), ręczne zwalnianie nieużywanych zasobów, ograniczanie liczby uruchomionych procesów, optymalizację cyklu życia komponentów oraz monitorowanie zużycia pamięci za pomocą narzędzi deweloperskich; przykładem jest usuwanie bitmap i zamykanie strumieni po zakończonej operacji, aby zapobiec wyciekom pamięci."
  },
  {
    "question": "W jaki sposób można zoptymalizować wydajność aplikacji iOS, proszę przedstawić różne techniki i narzędzia używane do monitorowania i poprawy wydajności aplikacji, takie jak profilowanie, zarządzanie pamięcią i optymalizacja renderowania interfejsu użytkownika?",
    "answer": "Wydajność aplikacji iOS można poprawić poprzez profilowanie kodu (Xcode Instruments), optymalizację zarządzania pamięcią (unikanie retain cycles, odpowiednie stosowanie ARC), minimalizację operacji na głównym wątku, ograniczanie liczby odświeżeń UI i korzystanie z cache; przykładem jest wykorzystanie narzędzia Time Profiler do identyfikacji wolnych fragmentów kodu oraz usuwanie nieużywanych obiektów podczas przewijania listy."
  },
  {
    "question": "Jakie techniki i narzędzia można zastosować, aby zoptymalizować wydajność aplikacji mobilnej, minimalizując czas ładowania i zużycie zasobów?",
    "answer": "Optymalizację wydajności aplikacji mobilnej osiąga się przez asynchroniczne ładowanie danych, stosowanie cache, lazy loading grafik, kompresję zasobów, minimalizowanie liczby zapytań sieciowych oraz korzystanie z narzędzi takich jak Android Profiler czy LeakCanary; na przykład obrazy pobierane z serwera mogą być przetwarzane w tle i zapisywane lokalnie, aby przyspieszyć wyświetlanie."
  },
  {
    "question": "Jak skutecznie zarządzać stanem aplikacji mobilnej, aby zapewnić płynne działanie i zachowanie danych podczas zmiany konfiguracji, takich jak obrót ekranu?",
    "answer": "Efektywne zarządzanie stanem obejmuje wykorzystanie wzorców architektonicznych takich jak MVVM, zapisywanie danych w ViewModelach, używanie Bundle czy SharedPreferences oraz korzystanie z lokalnych baz danych; przykładem jest przechowywanie tymczasowych danych w onSaveInstanceState lub Room Database, by nie utracić ich przy zmianie orientacji ekranu."
  },
  {
    "question": "Jakie są najlepsze praktyki integracji aplikacji mobilnej z backendem, aby zapewnić niezawodną komunikację i synchronizację danych?",
    "answer": "Najlepsze praktyki to stosowanie bezpiecznych protokołów (HTTPS), obsługa błędów sieciowych, automatyczna synchronizacja w tle, serializacja danych z użyciem sprawdzonych bibliotek (np. Gson, Moshi), wdrożenie mechanizmów retry oraz kolejek offline; przykładem jest implementacja synchronizacji kontaktów w aplikacji, która wysyła dane do serwera przy wykryciu połączenia z Internetem."
  },
  {
    "question": "Jakie techniki można zastosować, aby minimalizować zużycie baterii przez aplikację mobilną, jednocześnie zapewniając pełną funkcjonalność?",
    "answer": "Zużycie baterii można ograniczyć optymalizując korzystanie z lokalizacji (np. zapytania co określony czas zamiast ciągłego śledzenia), ograniczając operacje w tle, stosując wakelocki tylko w razie konieczności, optymalizując animacje i minimalizując wykorzystanie CPU i GPU; przykład: aplikacja fitness pobiera dane GPS tylko podczas aktywności użytkownika, a nie stale."
  },
  {
    "question": "Jak zarządzać zasobami aplikacji mobilnej, takimi jak obrazy, dźwięki i pliki wideo, aby zoptymalizować jej wydajność i rozmiar?",
    "answer": "Zasoby aplikacji należy kompresować do odpowiednich formatów, skalować grafiki do potrzebnych rozdzielczości, ładować na żądanie (lazy loading), stosować cache oraz unikać trzymania dużych plików w pamięci RAM; przykładowo dźwięki i filmy mogą być strumieniowane, a obrazy przechowywane w kilku wersjach rozdzielczości dla różnych urządzeń."
  },
  {
    "question": "Jak zaprojektować aplikację mobilną, która działa efektywnie zarówno w trybie online, jak i offline, zapewniając synchronizację danych, gdy połączenie jest dostępne?",
    "answer": "Aplikacja powinna przechowywać dane lokalnie (np. SQLite, Realm), implementować mechanizmy kolejkowania operacji offline, a po nawiązaniu połączenia synchronizować zmiany z backendem, rozwiązując konflikty; przykładem jest aplikacja do notatek, która umożliwia edycję bez internetu, a zmiany są przesyłane na serwer po odzyskaniu połączenia."
  },
  {
    "question": "Jakie są skuteczne modele monetyzacji aplikacji mobilnych, takie jak reklamy, zakupy w aplikacji, subskrypcje, i jakie są ich zalety i wady w kontekście doświadczenia użytkownika?",
    "answer": "Reklamy są łatwe do wdrożenia i zapewniają dochód przy dużej liczbie użytkowników, ale mogą być irytujące; zakupy w aplikacji pozwalają użytkownikom płacić za dodatkowe funkcje lub przedmioty, co bywa bardziej akceptowalne, a subskrypcje gwarantują stały przychód, jednak wymagają stałego dostarczania wartości; przykładem są aplikacje do nauki języków oferujące wersję darmową z reklamami oraz płatną subskrypcję bez reklam i z dodatkowymi funkcjami."
  },
  {
    "question": "Jak projektować i implementować funkcje współdzielenia zawartości w aplikacjach mobilnych, takie jak udostępnianie zdjęć, plików i treści w mediach społecznościowych?",
    "answer": "Współdzielenie realizuje się przez integrację z systemowymi mechanizmami udostępniania (Intents w Android, UIActivityViewController w iOS), obsługę różnych formatów i aplikacji zewnętrznych oraz odpowiednie zarządzanie uprawnieniami do plików; przykładem jest funkcja udostępniania zdjęcia z galerii bezpośrednio na Facebooka czy WhatsAppa."
  },
  {
    "question": "Jakie są wyzwania związane z optymalizacją aplikacji mobilnych pod kątem różnych wersji systemów operacyjnych i jak z nimi sobie radzić?",
    "answer": "Wyzwania to fragmentacja systemów (różne wersje Androida/iOS), odmienne API, różnice w zachowaniu komponentów oraz obsługa starych urządzeń; rozwiązaniem jest testowanie na wielu urządzeniach, korzystanie z bibliotek kompatybilności, unikanie funkcji nieobsługiwanych na starszych systemach i stosowanie feature detection. Przykład: aplikacja na Androida korzysta z AppCompat, by zapewnić spójny wygląd na różnych wersjach."
  },
  {
    "question": "Jak projektować aplikacje mobilne z myślą o skalowalności, aby rosnąca liczba użytkowników nie wpływała negatywnie na wydajność i dostępność aplikacji?",
    "answer": "Projektowanie skalowalnych aplikacji wymaga zastosowania architektury klient-serwer, wykorzystania chmury do backendu, optymalizacji kodu i zapytań do bazy, wprowadzenia cache oraz asynchronicznego przetwarzania; przykładem jest zastosowanie Firebase do synchronizacji danych i automatycznego skalowania infrastruktury przy dużym ruchu."
  },
  {
    "question": "Czym jest Android Studio i jakie są jego główne funkcje?",
    "answer": "Android Studio to oficjalne środowisko IDE do tworzenia aplikacji na Androida, oferujące zaawansowany edytor kodu, projektant interfejsów, emulator urządzeń, narzędzia do debugowania, profilowania oraz integrację z systemami kontroli wersji; przykładem jest możliwość natychmiastowego podglądu zmian w interfejsie aplikacji dzięki funkcji Layout Inspector."
  },
  {
    "question": "Jakie są kluczowe różnice między frameworkiem UIKit a SwiftUI w kontekście tworzenia interfejsów użytkownika w aplikacjach iOS, proszę omówić, jakie korzyści i wyzwania wiążą się z korzystaniem z każdego z tych frameworków oraz w jakich scenariuszach jeden może być preferowany nad drugim?",
    "answer": "UIKit jest dojrzałym frameworkiem opartym na imperatywnym podejściu, daje pełną kontrolę i kompatybilność ze starszymi wersjami iOS, natomiast SwiftUI to nowoczesny, deklaratywny framework umożliwiający szybsze tworzenie responsywnych interfejsów, ale nie obsługuje wszystkich zaawansowanych funkcji i jest dostępny od iOS 13; przykładowo aplikacje wymagające wsparcia dla starszych urządzeń powinny używać UIKit, natomiast nowe projekty mogą korzystać ze SwiftUI."
  },
  {
    "question": "Omów rolę bibliotek wsparcia wzornictwa w projektowaniu i programowaniu aplikacji mobilnych dla systemu Android.",
    "answer": "Biblioteki wsparcia wzornictwa (np. AndroidX, Material Components) dostarczają gotowych komponentów zgodnych z wytycznymi Material Design, zapewniają kompatybilność między różnymi wersjami Androida i ułatwiają wdrażanie nowoczesnych wzorców UI; przykładem jest wykorzystanie BottomNavigationView do tworzenia dolnego paska nawigacji zgodnego z najnowszymi standardami."
  },
  {
    "question": "Jakie są główne rodzaje testów w testowaniu aplikacji mobilnych?",
    "answer": "Wyróżnia się testy jednostkowe (sprawdzają pojedyncze funkcje), integracyjne (testują współdziałanie modułów), testy UI (interakcje użytkownika z interfejsem), testy wydajnościowe i testy akceptacyjne; przykładem jest automatyczne testowanie logowania użytkownika, integracji z API oraz szybkości ładowania ekranu startowego."
  },
  {
    "question": "Jakie są najlepsze praktyki w zakresie testowania aplikacji iOS, zwłaszcza w kontekście testów jednostkowych i testów UI?",
    "answer": "Najlepsze praktyki to pokrycie testami wszystkich krytycznych funkcji, stosowanie narzędzi takich jak XCTest, automatyzacja testów UI (XCUITest), regularne testowanie w środowisku CI/CD oraz użycie realistycznych danych testowych; przykładowo automatyczne testy jednostkowe sprawdzają poprawność logiki obliczeń, a testy UI — poprawność wyświetlania przycisków na różnych urządzeniach."
  },
  {
    "question": "Jakie podejścia i narzędzia można wykorzystać do skutecznego testowania aplikacji mobilnych, obejmującego testy jednostkowe, integracyjne oraz testy UI?",
    "answer": "Do testowania aplikacji mobilnych stosuje się narzędzia takie jak JUnit, Espresso, Mockito (dla Androida) oraz XCTest i XCUITest (dla iOS), a skuteczne podejście obejmuje automatyzację testów, regularne testy na różnych urządzeniach oraz integrację z platformą CI/CD; przykładem jest użycie Espresso do sprawdzania interakcji z interfejsem logowania."
  },
  {
    "question": "Jak zaprojektować aplikację mobilną, aby była dostępna dla użytkowników z różnymi niepełnosprawnościami, zgodnie z wytycznymi WCAG (Web Content Accessibility Guidelines)?",
    "answer": "Należy stosować odpowiedni kontrast kolorów, etykietować elementy interfejsu, umożliwiać powiększanie tekstu, obsługiwać czytniki ekranu i zapewnić nawigację bez użycia dotyku; przykładowo przyciski powinny być odpowiednio duże, a obrazy posiadać opisy alternatywne dla VoiceOver na iOS."
  },
  {
    "question": "Jak zaprojektować intuicyjny i responsywny interfejs użytkownika, który zapewni pozytywne doświadczenia użytkownika na różnych urządzeniach i rozmiarach ekranów?",
    "answer": "Trzeba stosować elastyczne układy (ConstraintLayout, Flexbox), projektować czytelne i zrozumiałe ikony, korzystać z systemowych wzorców nawigacji oraz testować aplikację na różnych urządzeniach; przykładem jest responsywny layout, który automatycznie dostosowuje rozmieszczenie przycisków na smartfonie i tablecie."
  },
{
    "question": "Jak zapewnić, aby aplikacja mobilna była zgodna z trendami UX/UI, takimi jak dark mode, gesty nawigacyjne czy minimalistyczny design?",
    "answer": "Aby aplikacja była zgodna z nowoczesnymi trendami UX/UI, należy wykorzystywać systemowe motywy (np. wsparcie dark mode w Androidzie i iOS), implementować intuicyjne gesty nawigacyjne zgodnie z wytycznymi platformy oraz projektować minimalistyczne ekrany, które skupiają się na najważniejszych funkcjach i nie przytłaczają użytkownika nadmiarem informacji; przykładem jest aplikacja z trybem ciemnym aktywowanym automatycznie w zależności od ustawień systemu."
  },
  {
    "question": "Jak zapewnić, aby aplikacja mobilna była przyjazna dla użytkowników starszych, uwzględniając ich specyficzne potrzeby i preferencje dotyczące interfejsu użytkownika?",
    "answer": "Aplikacja powinna oferować większe i wyraźne przyciski, kontrastowe kolory, czytelne czcionki, prostą i przewidywalną nawigację oraz ograniczać zbędne animacje; dodatkowo należy umożliwić powiększanie tekstu i testować rozwiązania z udziałem osób starszych. Przykład: aplikacja zdrowotna dla seniorów z dużym, czytelnym menu i funkcją powiadomień głosowych."
  },
  {
    "question": "Jakie są kluczowe zasady projektowania interfejsu użytkownika (UI) i doświadczeń użytkownika (UX) w kontekście aplikacji iOS, proszę omówić, jak zasady Human Interface Guidelines (HIG) Apple wpływają na projektowanie aplikacji oraz jak można je zastosować, aby tworzyć intuicyjne i atrakcyjne interfejsy użytkownika",
    "answer": "Zasady HIG Apple kładą nacisk na prostotę, spójność, czytelność i intuicyjność, dzięki czemu aplikacje są łatwe w obsłudze, estetyczne i przewidywalne; stosowanie się do tych wytycznych pozwala projektować interfejsy z zachowaniem standardowych gestów, jasnych kontrastów oraz płynnych animacji, co zapewnia komfort użytkowania. Przykład: aplikacja wykorzystuje domyślne komponenty systemowe i zapewnia zgodność z trybem ciemnym."
  },
  {
    "question": "Jakie są kluczowe wyzwania i potencjalne problemy związane z wydajnością oraz poprawnością danych przy stosowaniu funkcji agregujących w złożonych zapytaniach bazodanowych?",
    "answer": "Wyzwania obejmują wysokie zużycie zasobów przy dużych zbiorach danych, ryzyko spadku wydajności oraz możliwość pojawienia się błędów logicznych, jeśli agregacje są wykonywane na nieprzygotowanych lub nieposortowanych danych; przykładem problemu jest długie oczekiwanie na wyniki raportu sprzedaży w sklepie internetowym przy złej optymalizacji zapytań."
  },
  {
    "question": "Główne cechy baz danych typu NoSQL ze szczególnym uwzględnieniem założeń dotyczących ich rozproszenia",
    "answer": "Bazy NoSQL charakteryzują się elastyczną strukturą danych (dokumenty, grafy, klucz-wartość), łatwością skalowania poziomego przez rozproszenie na wiele serwerów (sharding), szybkim zapisem i odczytem oraz odpornością na awarie; przykładem jest MongoDB, w którym dane użytkowników mogą być automatycznie rozproszone na kilka maszyn w chmurze."
  },
  {
    "question": "Mechanizmy zapewniania bezpieczeństwa i niezawodności w systemach zarządzania bazami danych",
    "answer": "Bezpieczeństwo i niezawodność baz danych zapewnia się przez uwierzytelnianie, kontrolę dostępu, szyfrowanie danych w spoczynku i w tranzycie, wykonywanie kopii zapasowych (backup), replikację danych na wiele serwerów i monitorowanie integralności transakcji; przykładowo PostgreSQL pozwala na automatyczne wykonywanie backupów oraz replikację master-slave."
  },
  {
    "question": "Główne cechy baz danych typu NoSQL ze szczególnym uwzględnieniem założeń dotyczących ich rozproszenia",
    "answer": "NoSQL zapewniają brak sztywnego schematu danych, możliwość łatwego rozpraszania danych na wiele węzłów (sharding), szybkie operacje zapisu i odczytu oraz wysoką dostępność, nawet przy awarii pojedynczego serwera; przykładem jest baza Cassandra wykorzystywana w dużych serwisach społecznościowych do obsługi milionów zapytań jednocześnie."
  },
  {
    "question": "Rola i przykłady silników do odwzorowań obiektowo-relacyjnych (ORM)",
    "answer": "Silniki ORM (Object-Relational Mapping), takie jak Hibernate dla Javy czy Entity Framework dla C#, umożliwiają mapowanie obiektów aplikacji na rekordy w relacyjnych bazach danych, co upraszcza operacje CRUD, eliminuje potrzebę ręcznego pisania zapytań SQL i pozwala programiście pracować na obiektach; przykładem jest automatyczna synchronizacja klasy Produkt z tabelą products w bazie danych."
  },
  {
    "question": "Sposoby zapewniania wydajności i strojenia w systemach zarządzania bazami danych",
    "answer": "Wydajność baz danych poprawia się przez indeksowanie tabel, optymalizację zapytań SQL, archiwizację starych danych, rozpraszanie obciążenia na wiele serwerów, tuning parametrów serwera oraz regularne analizy wydajności; przykładem jest zastosowanie indeksu na kolumnie email w tabeli użytkowników, co przyspiesza wyszukiwanie po adresie e-mail."
  },
  {
    "question": "Jakie są kluczowe strategie i techniki zabezpieczania aplikacji mobilnych przed zagrożeniami, takimi jak ataki typu man-in-the-middle, kradzież danych czy malware?",
    "answer": "Należy stosować szyfrowanie transmisji danych (SSL/TLS), przechowywać wrażliwe dane w bezpiecznych magazynach (np. Keychain, Keystore), ograniczać uprawnienia aplikacji, regularnie aktualizować biblioteki oraz monitorować podejrzane zachowania aplikacji; przykładem jest szyfrowanie tokenów logowania i wykrywanie prób modyfikacji aplikacji przez rootowanie."
  },
  {
    "question": "Jakie funkcje oferują narzędzia do zarządzania projektami, które są kluczowe dla skutecznego zarządzania zespołem programistycznym?",
    "answer": "Narzędzia do zarządzania projektami, takie jak Jira, Trello czy Asana, oferują zarządzanie zadaniami, harmonogramowanie, śledzenie postępów, zarządzanie dokumentacją oraz integracje z narzędziami deweloperskimi."
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
  }
];
