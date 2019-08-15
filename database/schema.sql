DROP DATABASE IF EXISTS bank;
-- DROP DATABASE bank;
CREATE DATABASE IF NOT EXISTS bank;
USE bank;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name varchar(500) NOT NULL,
  balance INT,
);

CREATE TABLE IF NOT EXISTS transactions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstUserId INT,
  secondUserId INT,
  type varchar(500) NOT NULL,
  amount INT,
  balance FLOAT
);

-- INSERT INTO transactions (firstUser, type, amount, balance) VALUES (1, Withdrawl, -500, 5050);

-- INSERT INTO users (name, balance)
-- VALUES ('Ally', 30000);

-- ALTER TABLE transactions ADD COLUMN balance FLOAT;


-- UPDATE transactions SET balance = 5000 WHERE id=1;
