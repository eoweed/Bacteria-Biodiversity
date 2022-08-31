// Create line
Plotly.newPlot("practicePlot", [{x:[1,2,3,4,5,6], y:[1,2,3,4,5,6]}]);

// Create bar chart
var trace = {
    x:["burrito", "pizza", "chicken"],
    y:[10, 18, 5],
    type: "bar"
};
// Add title and axis labels to bar chart
var layout = {
    title: "Lunch Survey",
    xaxis: {title: "Food Options"},
    yaxis: {title: "Number of Respondents"}
};
Plotly.newPlot("barChart", [trace], layout);


// Create another bar chart
var data = {
    x: [
        "nonalcoholic beer", 
        "nonalcoholic wine", 
        "nonalcoholic martini", 
        "nonalcoholic margarita", 
        "ice tea", 
        "nonalcoholic rum & coke", 
        "nonalcoholic mai tai", 
        "nonalcoholic gin & tonic"
    ],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
};
var labels = {
    title: "Drink Preferences",
    xaxis: {title: "Drink Options"},
    yaxis: {title: "Percent of Drinks Ordered"}
};

Plotly.newPlot("barChartDrinks", [data], labels);

// Pie Chart
// insead of (x,y) we use "labels" and "values"
var pieData = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "pie"
};

var pieLayout = {
    title: "Pie Chart"
};

Plotly.newPlot("pieChart", [pieData], pieLayout);

// Scatter Plot
var scatterData = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: 'markers',
    type: 'scatter'
};
var scatterLayout = {title: "Scatter Plot"};
Plotly.newPlot("scatterPlot", [scatterData], scatterLayout);


// ---------------------------------------------------------------
// map() method --> OPEN CONSOLE IN WEB BROWSER
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);

var cityPopulation = cities.map(function(pop){return pop.population;});
console.log(cityPopulation);

// filter() method --> OPEN CONSOLE IN WEB BROWSER 
var numbers = [1,2,3,4,5];
var larger = numbers.filter(function(x){return x>1;});
console.log(larger);

var familyAge = [2,3,29,37,9];
var olderThanFive = familyAge.filter(function(x){return x>5;});
console.log(olderThanFive);

// simplify map() and filter() with arrow functions
// --> OPEN CONSOLE IN WEB BROWSER 
var numbers = [1,2,3,4,5];
var doubled = numbers.map(x => x*2);
console.log(doubled);

var familyAge = [2,3,29,37,9];
var olderThanFive = familyAge.filter(x => x>5);
console.log(olderThanFive);

// sort() method --> ascending order (lowest to highest)
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((x,y) => x-y);
console.log(sortedAge);

// sort() method --> descending order (highest to lowest)
var familyAge = [3,2,39,37,9];
sortedAge = familyAge.sort((a,b) => b - a);
console.log(sortedAge);

// slice() method
// return values at positions 0 and 1 (stops at position 2)
var integers = [0,1,2,3,4,5];
var sliceIntegers = integers.slice(0,2);
console.log(sliceIntegers);

// return remaining values starting from position 3
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var sliceWords = words.slice(3, );
console.log(sliceWords);