-- Erstellen von Tabellen
CREATE TABLE IF NOT EXISTS meine_tabelle (
                                             id SERIAL PRIMARY KEY,
                                             spalte1 VARCHAR(255),
                                             spalte2 INT
);

-- Einfügen von Daten
INSERT INTO meine_tabelle (spalte1, spalte2) VALUES ('Wert1', 123), ('Wert2', 456);
