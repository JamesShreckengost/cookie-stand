'use strict';

var storesElement = document.getElementById('store-list');
var tableElement = document.getElementById('store-table');
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var stores = [];

function CookieStore(name, minCust, maxCust, avgCookie) {
   this.name = name;
   this.minCust = minCust;
   this.maxCust = maxCust;
   this.avgCookies = avgCookie;
   this.openHours = hours;
   this.cookieSalesPerHour = [];
   this.cookieTotalSales = 0;
};

CookieStore.prototype.generateStoreCustomers = function (min, max) {
   return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
 },

CookieStore.prototype.generateCookiesAtHour = function () {
   return Math.floor(this.generateStoreCustomers(this.minCust, this.maxCust) * this.avgCookies) 
   },

   CookieStore.prototype.generateCookiesPerHour = function () {
      for (var i = 0; i < this.openHours.length; i++) {
         var cookieSales = this.generateCookiesAtHour();
         this.cookieTotalSales = this.cookieTotalSales + cookieSales;
         this.cookieSalesPerHour.push(cookieSales);
      }
   }




CookieStore.prototype.displayTable = function () {
   
   var rowElement = document.createElement('tr');
   var nameElement = document.createElement('td');
   nameElement.textContent = this.name;
   rowElement.appendChild(nameElement);

   for (var i = 0; i < this.cookieSalesPerHour.length; i++) {
      var cellElement = document.createElement('td');

      cellElement.textContent = `${this.cookieSalesPerHour[i]}`;
      rowElement.appendChild(cellElement)
   }

   var totalElement = document.createElement('td');
   totalElement.textContent = `${this.cookieTotalSales}`;
   rowElement.appendChild(totalElement);

   tableElement.appendChild(rowElement);
}


function createHeader(){


}

   function createFooter() {

      var totalofTotals = 0;
      var hourlytotal = 0;
      for (var i = 0; i < hours.length; i++) {

         hourlytotal = 0

         for (var j = 0; j < stores.length; j++) {
            
            hourlytotal += stores[j].cookiesSalesPerHour[i];
            totalofTotals += stores[j].cookieSalesPerHour[i];
         }
      }
   }

   var seattle = new CookieStore('Seattle', 23, 65, 6.3)
   stores.push(seattle);
   seattle.generateCookiesPerHour();

   var lima = new CookieStore('Lima', 2, 16, 4.6);
   lima.generateCookiesPerHour();
   stores.push(lima);

   var tokyo = new CookieStore('Tokyo', 3, 24, 1.2);
   tokyo.generateCookiesPerHour();
   stores.push(tokyo);

   var dubai = new CookieStore('Dubai', 11, 38, 3.7);
   dubai.generateCookiesPerHour();
   stores.push(dubai)

   var paris = new CookieStore('Paris', 20, 38, 2.3);
   paris.generateCookiesPerHour();
   stores.push(paris);

   console.log(stores);

   for (var i = 0; i < stores.length; i++) {
      stores[i].displayTable();
   }





















//        // how do I get a number between 23 and 65
//        // we subtract the min from the max to get our middle point
//        // We add the min so that if zer0 we get our middle point
//        //   If we use a middle point instead of the absolute maximum, we go above when we add the minimum.
//       var randomCustomers = Math.floor(Math.random() * (this.maxCust - this.minCust ) + this.minCust);

//       var randomCookies = randomCustomers * this.avgCookie;
//       return randomCookies;
//  }
// } 

// var Seattle = new Location ('Seattle', '23', '65', '6.3')
// var Tokyo = new Location ('Tokyo', '3', '24', '1.2')
// var Dubai = new Location ('Paris', '11', '38', '3.7')
// var Paris = new Location ('Paris', '20', '38', '2.3')
// var Lima = new Location ('Lima', '2', '16', '4.6')

// var arrayofLocations = [Seattle, Tokyo, Dubai, Paris, Lima]

//    for (var i = 0; i < arrayofLocations.length; i++) {
//       arrayofLocations[i].cookieSalesPerDay()
//    }



// Location.prototype.cookieSalesPerDay = function() {
//    for (var i = 0; i < hours.length; i++) {
//       var cookiesCurrentHour = this.findCookiesPerHour();
//       this.locationDailySales.push(cookiesCurrentHour);

//    }
// }



// // Now we can build are list
// // create a prototype function that renders the location to the DOM.
// Location.prototype.render = function() {

//    var locationVariable = document.getElementById('dom');

//    var myNewElement = document.createElement('p');

//       myNewElement.textContent = 'Location: '
//       // or
//       myNewElement.textContent = arrayofLocations.Location;

//    locationVariable.appendChild(myNewElement)


// }

// for (var i = 0; i < arrayofLocations.length; i++) {
//    myNewElement.textContent = arrayofLocations[i].otherPropertyValue

// }

// // get element by id div
// var divElement = document.getElementById('div');
// var h2Element = document.createElement('h2');
// h2Element.textContent = this.locationName;
// divElement.appendChild(h2Element);
// var trElement = document.createElement('tr')

// for (var i = 0; i < this.locationDailySales.length; i++) {
//    var tdElement = document.createElement('td');
//    tdElement.textContent = thislocationDailysales[i];
//    trElement.appendChild(tdElement);
//    // populate li with locationDailySales[i]
//    // append li to the ul
// }
//    trElement.appendChild(tdElement);






