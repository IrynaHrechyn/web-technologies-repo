const car1 = new Object();
car1.color = "red";
car1.maxSpeed = 150;
car1.tuning = true;
car1["number of accidents"] = 0;

car1.driver = new Object();
car1.driver.name = "Iryna Hrechyn";
car1.driver.category = "C";
car1.driver.personalLimitations = "No driving at night";

car1.drive = function() {
    console.log("I am not driving at night");
};

car1.drive();
