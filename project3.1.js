/**
 *   @author sawyer, Kulman (Sawyerkulman@gmail.com)
 *   @version 0.0.1
 *   @summary Project 3 code || created: 10.30.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let continueResponse;
let movieTitle;
let rating, numRatings, averageRating, totalRating;

function main() {
    process.stdout.write('\x1Bc');
    setContinueResponse();
    while (continueResponse == 1) {
        setMovieTitle();
        setNumRatings();
        setRating();
        setAverageRating();
        setTotalRating();
        printAverageRating();
    }
}

main();

function setContinueResponse() {
    if (continueResponse == null) {
        continueResponse = Number (PROMPT.question(`\nWould you like to rate a movie? [1=yes, 0=No]: `));
    } else if (continueResponse == 0) {
        setAverageRating();
    }
}

function setMovieTitle() {
    movieTitle = PROMPT.question('\nWhat movie will you like to rate? ');
}

function setRating() {
    let counter = 0;
    let answered = 0;
    const MAX_TRY = 3;
    const MAX_RATE = 5;

    while (counter < MAX_TRY && answered != "yes") {
        rating = Number(PROMPT.question(`\nwhat would you rate ${movieTitle} on a scale of 0-5 stars? `));
        if (rating < 0 || rating > MAX_RATE) {
            console.log(`\n${rating} is an incorrect value try again please`); counter++
        } else if (rating >= 0 && rating <= MAX_RATE) {
            answered = "yes"
        }
    }
}

function setNumRatings() {
    if (numRatings >= 1 ) {
        numRatings = numRatings + 1
    } else if (numRatings == null) {
        numRatings = 1
    }
}

function setTotalRating() {
    if (totalRating != null) {
        totalRating = totalRating +rating
    } else { totalRating = rating
    }
}

function setAverageRating() {
    averageRating = Number((totalRating / numRatings))
}

function printAverageRating(){
    console.log(`\nThe average rating for ${movieTitle} is ${averageRating}`);
}

