Describe: LocationDirectory()

Test: It should have a property called locations that has a value of an empty array.

Code: 
let locationDirectory = new LocationDirectory();
locationDirectory;

Expected Output: 
locationDirectory()
  > locations = {};

Describe: Locations(place)

Test: It will have a name property
Code: 
let locationDirectory = new LocationDirectory();
let locations = new Locations("South Africa");
Expected Output: 
Locations(name)
 > name = {"South Africa"};

Describe: AddLocation()

Test: It will add a new Location object to the locationDirectory
Code: AddLocation(name);
Expected Output: 
locationDirectory()
  > locations = {
    South Africa: ("name", "year", "landmark", "notes")
  }

Describe: FindLocation()

Test: It will find a location in the locationDirectory
Code: FindLocation(name);
Expected Output:
locationDirectory(name)
> name