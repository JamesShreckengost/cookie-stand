'use strict';

var Seattle = {
minCust: 23,
maxCust: 65,
avgCookiePerCust: 6.3,
CookiesPerHour: null, 
// generateCookiesPerHour: function (limitPerHour) {
//   // random number generation
//   var randomCookiesPerHour = Math.floor((Math.random() * limitPerHour) + 1);
//   this.CookiesPerHour = randomCookiesPerHour;
// }

   generateCookiesPerHour(minCust, maxCust) {
    return Math.floor(Math.random() * (maxCust - minCust) + minCust);
   }
}
generateCookiesPerHour(6,25)







var Tokyo = {






}

var Dubai = {






}

var Paris = {





}


var Lima = {






}