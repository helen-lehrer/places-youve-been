// Business logic for locations

function submitPlace () { 
  // Business logic for directory
  function LocationDirectory() {
    this.locations = {};
  }

  LocationDirectory.prototype.addLocation = function(place) {
  this.locations[place.name] = place;
  }
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


function handleSubmission(event) {
  event.preventDefault();
  submitPlace;

  // get input values
  const nameInput = document.getElementById("nameOfPlace").value;
  const yearInput = document.getElementById("year").value;
  const landmarkInput = document.getElementById("landmark").value;
  const notesInput = document.getElementById("notes").value;

}

window.addEventListener ("load", function {
  let form = document.getElementById("inputPlace");
  form.addEventListener("submit", submitPlace()); 
})

