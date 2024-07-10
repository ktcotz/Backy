Authentication

Temat dotyczy tworzenia użytkowników i zarządzania nimi.

Flow signup:

1. Pobierz dane od użytkownika
2. Zwaliduj dane
3. Sprawdź czy istnieje może już użytkownik z danym mailem/innym polem.
4. Istnieje? Błąd konfliktowy.
5. Shashuj hasło.
6. Stwórz nowego użytkownika.
7. Zwróć token JWT.

Czym jest token JWT?

Token JWT jest mechanizmem który tworzy nam token na podstawie danych które mu damy. Będzie on potrzebny do weryfikacji użytkownika podczas requestów.
