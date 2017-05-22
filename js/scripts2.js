function Register(clgInput, yrInput, entInput) {
  this.college = clgInput;
  this.year = yrInput;
  this.event = entInput;
}

Register.prototype.price = function () {
  var clgCost = 0;
  var yrCost = 0;
  var entCost = 0;
  if (this.college === "ceg" || this.college === "act" || this.college === "sap") {
    clgCost = 100;
  }
  else {
    clgCost = 300;
  }

  if (this.year === "first") {
    yrCost = 25;
  }
  else if (this.year === "second") {
    yrCost = 50;
  }
  else if (this.year === "third") {
    yrCost = 75;
  }
  else if (this.year === "fourth") {
    yrCost = 100;
  }
  else {
    yrCost = 125;
  }

  if (this.event === "General")
  {
    entCost = 1000;
  }
  else if (this.event === "Engineering")
  {
    entCost = 2000;
  }
  else if (this.event === "Robotics")
  {
    entCost = 3000;
  }
  else if (this.event === "Management")
  {
    entCost = 1500;
  }
  else if (this.event === "School")
  {
    entCost = 1000;
  }
  else if (this.event === "Carnival")
  {
    entCost = 75;
  }
  return clgCost + yrCost + entCost;
}

$(document).ready(function() {
  $("#formOne").submit(function(event) {
  event.preventDefault();

  var nameInput = $("#name").val();
  var courseInput = $("#course").val();
  var collegeInput = $("#college").val();
  var yearInput = $("input:radio[name=year]:checked").val();
  var intervalInput = $("input:radio[name=interval]:checked").val();
  var eventInput = $("#event").val();
  var newPrice = new Register(collegeInput, yearInput, eventInput);
  $(".price").show();
  $("#result").text(newPrice.price());
  $(".name1").text(nameInput);
  $(".course1").text(courseInput);
  $(".college1").text(collegeInput);
  $(".year1").text(yearInput);
  $(".interval1").text(intervalInput);
  $(".events").text(eventInput);
  });
});
