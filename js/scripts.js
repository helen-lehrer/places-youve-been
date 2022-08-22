// Business logic for directory
function LocationDirectory() {
  this.locations = {};
}

LocationDirectory.prototype.addLocation = function(place) {
  this.locations[place.name] = place;
}
// Business logic for locations
function Place(name, year, landmark, notes) {
  this.name = name;
  this.year = year;
  this.landmark = landmark;
  this.notes = notes;
}

