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



// Business logic for locations
function Place(name, year, landmark, notes) {
  this.name = name;
  this.year = year;
  this.landmark = landmark;
  this.notes = notes;
}

