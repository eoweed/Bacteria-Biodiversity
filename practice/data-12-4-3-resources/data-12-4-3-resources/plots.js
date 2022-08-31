// create function to show ID options in dropdown menu
function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      // use forEach loop to append dropdown menu options:
      // <option value="ID number">ID number</option>
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}
  
  // run the above function
  init();


  // create function that's called inside index.html file (<select> tag)
  //index.html variable (this.value) = variable below (newSample)
  function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
  }

  // buildMetadata() will display the metadata from samples.json of the matching ID number
function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
        var metadata = data.metadata;
        var resultArray = metadata.filter(x => x.id == sample);
        var result = resultArray[0];
        var PANEL = d3.select("#sample-metadata");

        console.log("results", result);

        var age = "Age: "+result.age
        var bbtype = "Bbtype: "+result.bbtype;
        var ethnicity = "Ethnicity: "+result.ethnicity;
        var gender = "Gender: "+result.gender;
        var id = "Id: "+result.id;
        var location = "Location: "+result.location;
        var wfreq = "wfreq: "+result.wfreq;

        PANEL.html("");
        PANEL.append("h4").text(age);
        PANEL.append("h4").text(bbtype);
        PANEL.append("h4").text(ethnicity);
        PANEL.append("h4").text(gender);
        PANEL.append("h4").text(id);
        PANEL.append("h4").text(location);
        PANEL.append("h4").text(wfreq);

    });
}