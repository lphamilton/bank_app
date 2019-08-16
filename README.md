# Banking App

A website for tracking your bank transactions

### Introduction

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Getting started

You will need MySql (8.0.10) installed and running. I've installed with [Homebrew](https://brew.sh/)

```
brew install mysql
mysql -u root
```
You will need to install all dependencies:
```
npm install
```
And you will need to create your database:
```
npm run makeDb
```

### What the application format will be
The application will allow users to "login" and see their current balance, past transactions, and to transfer money to other accounts. The end goal will be to create visualization that show clients their transaction trends in a format that is more friendly than a table.

The frontend will be making calls to the database via a node server with routes:

### CRUD operations
* GET: /user/:userId/main  [Will access the users transactions as a table]
* PUT: /transfer/:sender/:amount/:receiver/:amount [A way for the client to transfer money to another account]

## Built With

* [React](https://reactjs.org/docs/getting-started.html) - The web framework used
* [NPM](https://docs.npmjs.com/) - Dependency Management
* [mySQL](https://dev.mysql.com/doc/refman/5.7/en/) - The database
