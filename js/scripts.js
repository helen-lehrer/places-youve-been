// Business logic for directory
function LocationDirectory() {
  this.locations = {};
}

LocationDirectory.prototype.addLocation = function(place) {
this.locations[place.name] = place;
}


LocationDirectory.prototype.findLocation = function(name) {
  if (this.locations[name] !== undefined) {
    return this.locations[name];
  }
  return false;
}

LocationDirectory.prototype.deleteLocation = function(name) {
  if (this.locations[name] === undefined) {
    return false;
  }
  delete this.locations[name];
  return true;
}

function Place(name, year, landmark, notes) {
  this.name = name;
  this.year = year;
  this.landmark = landmark;
  this.notes = notes;
}

// UI Logic
let locationDirectory = new LocationDirectory(); 

function handleSubmission(event) {
  event.preventDefault();
  // get input values
  const nameInput = document.getElementById("location-input").value;
  const yearInput = document.getElementById("year-input").value;
  const landmarkInput = document.getElementById("landmark-input").value;
  const notesInput = document.getElementById("notes-input").value;

  
  let place = new Place(nameInput, yearInput, landmarkInput, notesInput);
  locationDirectory.addLocation(place);
  console.log(locationDirectory.locations[nameInput]);

  document.getElementById("place-result").innerHTML = place.name;
  document.getElementById("year-result").innerText = place.year;
  document.getElementById("landmarks-result").innerText = place.landmark;
  document.getElementById("notes-result").innerText = place.notes;

  document.getElementById("results").removeAttribute("class");
}

function resetForm() {
document.getElementById("inputPlace").reset();
}

window.addEventListener ("load", function() {
  let form = document.getElementById("inputPlace");
  form.addEventListener("submit", handleSubmission);
  form.addEventListener("submit", resetForm);
  form.addEventListener("submit", unhide);
   
});

