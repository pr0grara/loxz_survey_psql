CREATE DATABASE loxzsurvey;

CREATE TABLE Answers(
    id SERIAL PRIMARY KEY,
    question VARCHAR(255),
    content VARCHAR(255),
    analysis TEXT[],
    resultNo INT,
    createdAt DATE NOT NULL DEFAULT CURRENT_DATE,
    updatedAt DATE DEFAULT CURRENT_DATE
);

CREATE TABLE Questions(
    id SERIAL PRIMARY KEY,
    question_type VARCHAR(255),
    content VARCHAR(255),
    answers TEXT[],
    username VARCHAR(255),
    createdAt DATE NOT NULL DEFAULT CURRENT_DATE,
    updatedAt DATE DEFAULT CURRENT_DATE
);

CREATE TABLE Results(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    answers TEXT[],
    createdAt DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE Surveys(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    questions TEXT[],
    createdAt DATE NOT NULL DEFAULT CURRENT_DATE,
    updatedAt DATE DEFAULT CURRENT_DATE
);

