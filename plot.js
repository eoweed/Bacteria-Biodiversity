// Run local server and REFRESH IN BROWSER!
// python -m http.server

d3.json("samples.json").then(data => console.log(data));

// use map() to get wfreq for each person (weekly belly button washing frequency)
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
});

// use sort() to sorf wfreq in descending order (highest to lowest)
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    wfeqSorted = wfreq.sort((x,y)=> y-x);
    console.log("sorted", wfeqSorted);
});

// use filter() to delete null values from wfreq
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    wfeqSorted = wfreq.sort((x,y)=> y-x);
    wfreqNoNull = wfeqSorted.filter(x => x!=null)
    console.log("delete null", wfreqNoNull);
});



researcher1 = {
    name: "Roza",
    age: 34,
    hobby: "hiking"
};
console.log("keys", Object.keys(researcher1));
console.log("values", Object.values(researcher1));
console.log("key:value pair", Object.entries(researcher1));

// print the matadata for the first person (ID 940)
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    console.log("firstPerson", firstPerson);
});
// use Object.entries() and forEach() to print metadata for first person
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([x,y])=>
    {console.log(x,y)})
});