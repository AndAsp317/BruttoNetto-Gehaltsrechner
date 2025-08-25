# Brutto/Netto‑Gehaltsrechner

Ein einfacher, responsiver **Brutto-/Netto‑Rechner** im Browser. Du gibst dein Brutto ein (monatlich oder jährlich), wählst Steuerklasse, Familienstand und optional Kirchensteuer – und erhältst sofort dein geschätztes Nettogehalt.

> **Hinweis:** Der Rechner nutzt ein **vereinfachtes, pauschales Modell** (keine echte Lohnsteuer-/SV‑Berechnung). Er ist ideal für grobe Überschläge, ersetzt aber **keine steuerliche Beratung**.

## Screenshot (Demo)

Die folgende Abbildung zeigt das Tool mit Beispielwerten (3.500 € brutto/Monat, Steuerklasse I, ledig, ohne Kirchensteuer):

![Screenshot des Gehaltsrechners](screenshot-demo.png)

## Features

- Eingabe **Monats-** *oder* **Jahresbrutto** – die jeweils andere Größe wird automatisch synchronisiert.
- Auswahl **Steuerklasse I–VI**, **Familienstand**, **Kirchensteuer** (*mit BY/BW = 8 %, sonst 9 %*).
- Ein Klick auf **„Berechnen“** liefert **Netto pro Monat** sowie **Brutto/Netto pro Jahr**.
- **Responsive** UI (mobilfreundlich), dezentes, klares Design.

## Berechnungslogik (vereinfacht)

- Pauschale Abzugssätze je **Steuerklasse** (z. B. Klasse I ≈ 32 %, Klasse III ≈ 22 %, Klasse V ≈ 40 %).
- **Familienstand „verheiratet“** reduziert (außer in V/VI) pauschal um 2 %-Punkte.
- **Kirchensteuer** (wenn aktiv) addiert **8 % (BY/BW) bzw. 9 % (restliche Bundesländer)** auf den Abzugssatz.
- Ergebnis: `nettoMonat = bruttoMonat * (1 - abzugSatz)` → `nettoJahr = nettoMonat * 12`.

Siehe Implementierung in [`script.js`](./script.js).

## Quickstart

1. Projekt lokal klonen / Dateien herunterladen.
2. **Öffne `index.html` direkt im Browser.** Es ist kein Build/Server nötig.
3. Werte eingeben → **„Berechnen“** klicken.

## Projektstruktur

```
.
├── index.html
├── style.css
└── script.js
```

- **`index.html`** – Markup der App, Formularfelder, Ergebnisbereich.
- **`style.css`** – Layout, Farben, Responsiveness.
- **`script.js`** – Logik: Synchronisierung Monats-/Jahresbrutto, Abzugssätze, Kirchensteuer‑Toggle & Berechnung.

## Beispielwerte aus dem Screenshot

- Monatsbrutto: **3.500,00 €**
- Jahresbrutto: **42.000,00 €** (automatisch)
- Steuerklasse: **I** | Familienstand: **Ledig** | Kirchensteuer: **Nein**
- Ergebnis: **Monatsnetto ≈ 2.380,00 €**, **Jahresnetto ≈ 28.560,00 €**

## Nächste Schritte (Ideen)

- Reale Lohnsteuer-/SV‑Berechnung integrieren (Tabellen/Regeln je Jahr).
- Netto‑**Aufschlüsselung** (Steuer/Sozialabgaben) & **Diagramm**.
- **Persistenz** (LocalStorage) für zuletzt genutzte Eingaben.
- **Unit‑Tests** für Rechenweg (z. B. mit Vitest/Jest).
- **Deployment** via GitHub Pages.

## Lizenz

MIT – nutze den Code gerne weiter. (*Passe die Lizenz nach Wunsch an.*)

---

© 2025 – Brutto/Netto‑Rechner
