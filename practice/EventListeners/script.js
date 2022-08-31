// create event listener to track selections for dropdown menu

d3.selectAll("#selectOption").on("change", updatePage);

function updatePage() {
  var dropdownMenu = d3.selectAll("#selectOption").node();
  var dropdownMenuID = dropdownMenu.id;
  var selectedOption = dropdownMenu.value;

  console.log(dropdownMenuID);
  console.log(selectedOption);


};


// disneyOption
d3.selectAll("#disneyOption").on("change", updateDisney);

function updateDisney() {
  var disneyMenu = d3.selectAll("#disneyOption").node();
  var disneyID = disneyMenu.id;
  var disneyName = disneyMenu.value;

  console.log(disneyID);
  console.log(disneyName);
};