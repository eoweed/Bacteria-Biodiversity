const url = "https://api.spacexdata.com/v2/launchpads";

// d3.json().then() ensures the data is recieved before printing the results
d3.json(url).then(receivedData => console.log(receivedData));

// // this also works:
// d3.json(url).then(data => console.log(data));

// retrieve info on first launch location (first object in array)
d3.json(url).then(data => console.log("first object", data[0]));

// retrieve full_name of first launch location
d3.json(url).then(data => console.log("full_name", data[0].full_name));

// retrieve latitude of first launch location
d3.json(url).then(data => console.log("latitude", data[0].location.latitude));

// use map() to print array of latitude and longitude
d3.json(url).then(function(data) {
    latitude = data.map(x=>x.location.latitude);
    longitude = data.map(x=>x.location.longitude);
    coordinates = [latitude, longitude];
    console.log("coordinates", coordinates)
})