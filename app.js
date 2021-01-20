'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am','12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var locations = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima']
function Location (minCust, maxCust, locationName, avgCookiePerSale){
   this.locationName = locationName
   this.minCust = minCust
   this.maxCust = maxCust
   this.avgCookiesPerSale = avgCookiePerSale
   this.locationDailySales = []
   this.findCookiesPerHour = function() { // this is an anonymos function (it doesnt get a function)
      
       // how do I get a number between 23 and 65
       // we subtract the min from the max to get our middle point
       // We add the min so that if zer0 we get our middle point
       //   If we use a middle point instead of the absolute maximum, we go above when we add the minimum.
      var randomCustomers = Math.floor(Math.random() * (this.maxCust - this.minCust ) + this.minCust);

  
      var randomCookies = randomCustomers * this.avgCookiesPerSale;
      return randomCookies;
 }
} 

var Seattle = new Location ('Seattle', '23', '65', '6.3')
var Tokyo = new Location ('Tokyo', '3', '24', '1.2')
var Dubai = new Location ('Paris', '11', '38', '3.7')
var Paris = new Location ('Paris', '20', '38', '2.3')
var Lima = new Location ('Lima', '2', '16', '4.6')

var arrayofLocations = [Seattle, Tokyo, Dubai, Paris, Lima]

   for (var i = 0; i < arrayofLocations.length; i++) {
      arrayofLocations[i].cookieSalesPerDay()
   }



Location.prototype.cookieSalesPerDay = function() {
   for (var i = 0; i < hours.length; i++) {
      var cookiesCurrentHour = this.findCookiesPerHour();
      this.locationDailySales.push(cookiesCurrentHour);
    
   }
}



// Now we can build are list
// create a prototype function that renders the location to the DOM.
Location.prototype.render = function() {
   for (var i = 0; i < arrayofLocations.length; i++){
      var domElement = document.createElement('dom');
      domElement.textContent = dom;
      domElement.appendChild(dom);
   }
}

// get element by id div
var divElement = document.getElementById('div');
var h2Element = document.createElement('h2');
h2Element.textContent = this.locationName;
divElement.appendChild(h2Element);
var ulElement = document.createElement('ul')

for (var i = 0; i < this.locationDailySales.length; i++) {
   var liElement = document.createElement('li');
   liElement.textContent = thislocationDailysales[i];
   ulElement.appendChild(liElement);
   // populate li with locationDailySales[i]
   // append li to the ul
}
   divElement.appendChild(ulElement);
// append the ul to the div

// passing a store into our function
//    generateCookiesPerHour(minCust, maxCust) {
//     return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
//    }
// }
// generateCookiesPerHour(6,25)








var Tokyo = {






}

var Dubai = {






}

var Paris = {





}


var Lima = {






}