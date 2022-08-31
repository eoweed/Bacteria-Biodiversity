// view all of the cityGrowths data
console.log(cityGrowths);

// sort cities in descending order based on population growth
var sortedCities = cityGrowths.sort((x, y) => x.Increase_from_2016 - y.Increase_from_2016).reverse();
console.log(sortedCities);

// slice out top 5 cities from the above "sortedCities"
var sliceSortedCities = sortedCities.slice(0,5);
console.log(sliceSortedCities);

// create two arrays: city names and population growth
var topCities = sliceSortedCities.map(x => x.City);
var topCitiesPopulation = sliceSortedCities.map(x => parseInt(x.Increase_from_2016));
console.log(topCities);
console.log(topCitiesPopulation);

// create bar chart from arrays
var data = {
    x: topCities,
    y: topCitiesPopulation,
    type: "bar"
};
var layout = {
    title: "Fastest Growing Cities",
    xaxis: {title:"City"},
    yaxis: {title:"Population Growth from 2016-2017"}
};

// Plotly.newPlot("bar-plot", [{x:topCities, y:topCitiesPopulation, type:"bar"}]);
Plotly.newPlot("bar-plot", [data], layout);