CREATE TABLE `user` (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    birth_date DATE NOT NULL
);

-- Sample data
INSERT INTO `user` (first_name, last_name, birth_date) VALUES
    ('John', 'Doe', '1990-01-15'),
    ('Jane', 'Smith', '1985-03-22'),
    ('Mike', 'Johnson', '1992-07-08');