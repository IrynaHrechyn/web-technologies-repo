const car2 = {
    color: "blue",
    maxSpeed: 160,
    driver: {
        name: "Iryna Hrechyn",
        category: "B",
        personalLimitations: null
    },
    tuning: false,
    "number of accidents": 2,

    drive: function() {
        console.log("I can drive anytime");
    }
};

car2.drive();
