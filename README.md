Describe: LocationDirectory()

Test: It should have a property called locations that has a value of an empty array.

Code: 
let locationDirectory = new LocationDirectory();
locationDirectory;

Expected Output: 
locationDirectory()
  > locations = {};

Describe: Locations(place)

Test: It will have a place property
Code: 
let locationDirectory = new LocationDirectory();
let locations = new Locations("South Africa");
Expected Output: 
Locations(place)
 > place = {"South Africa"};

Test:
Code:
Expected Output: