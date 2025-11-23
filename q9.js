function displayCar(){
    console.log("this is car");
}
function displayTruck(){
    console.log("this is Truck");
}
function displayBike(){
    console.log("this is Bike");
}
function vechileinfp( vechileCategory, callbackFn){
    console.log("category:", vechileCategory);
    callbackFn();
}
vechileinfp("Car",displayCar);
vechileinfp("bike",displayBike);
vechileinfp("truck",displayTruck);