-- Erstellen von Tabellen
CREATE TABLE IF NOT EXISTS meine_tabelle (
                                             id SERIAL PRIMARY KEY,
                                             spalte1 VARCHAR(255),
                                             spalte2 INT,
                                             spalte3 date
);

-- Einfügen von Daten
INSERT INTO meine_tabelle (spalte1, spalte2, spalte3) VALUES ('Wert1', 123, '2023-11-10'), ('Wert2', 456, '2022-01-01');
