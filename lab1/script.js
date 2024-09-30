function triangle(value1, type1, value2, type2) {
    const validTypes = ["leg", "hypotenuse", "angle", "adjacent angle", "opposite angle"];

    if (!validTypes.includes(type1) || !validTypes.includes(type2)) {
        console.log("Invalid types entered. Please check the instruction and try again.");
        return "failed";
    }

    const toRadians = (degrees) => degrees * (Math.PI / 180);
    const toDegrees = (radians) => radians * (180 / Math.PI);

    if (value1 <= 0 || value2 <= 0) return "Zero or negative input";

    let a, b, c, alpha, beta;

    const calculations = {
        "leg||hypotenuse": () => {
            a = type1 === "leg" ? value1 : value2;
            c = type1 === "hypotenuse" ? value1 : value2;
            if (a >= c) {
                return "Leg cannot be greater than or equal to hypotenuse";
            }
            b = Math.sqrt(c * c - a * a);
            alpha = toDegrees(Math.asin(a / c));
            beta = 90 - alpha;
        },
        "leg||leg": () => {
            a = value1;
            b = value2;
            c = Math.sqrt(a * a + b * b);
            alpha = toDegrees(Math.atan(a / b));
            beta = 90 - alpha;
        },
        "angle||hypotenuse": () => {
            alpha = type1 === "angle" ? value1 : value2;
            if (alpha >= 90) {
                return "Angle must be acute (less than 90 degrees)";
            }
            c = type1 === "hypotenuse" ? value1 : value2;
            a = c * Math.sin(toRadians(alpha));
            b = Math.sqrt(c * c - a * a);
            beta = 90 - alpha;
        },
        "angle||leg": () => {
            alpha = type1 === "angle" ? value1 : value2;
            if (alpha >= 90) {
                return "Angle must be acute (less than 90 degrees)";
            }
            a = type1 === "leg" ? value1 : value2;
            c = a / Math.sin(toRadians(alpha));
            b = Math.sqrt(c * c - a * a);
            beta = 90 - alpha;
        },
        "adjacent angle||leg": () => {
            alpha = type1 === "adjacent angle" ? value1 : value2;
            if (alpha >= 90) {
                return "Angle must be acute (less than 90 degrees)";
            }
            b = type1 === "leg" ? value1 : value2;
            beta = 90 - alpha;
            c = b / Math.cos(toRadians(alpha));
            a = Math.sqrt(c * c - b * b);
        },
        "opposite angle||leg": () => {
            alpha = type1 === "opposite angle" ? value1 : value2;
            if (alpha >= 90) {
                return "Angle must be acute (less than 90 degrees)";
            }
            a = type1 === "leg" ? value1 : value2;
            c = a / Math.sin(toRadians(alpha));
            b = Math.sqrt(c * c - a * a);
            beta = 90 - alpha;
        },
        "adjacent angle||hypotenuse": () => {
            alpha = type1 === "adjacent angle" ? value1 : value2;
            if (alpha >= 90)  return "Angle must be acute (less than 90 degrees)";
            c = type1 === "hypotenuse" ? value1 : value2;
            beta = 90 - alpha;
            b = c * Math.cos(toRadians(alpha));
            a = Math.sqrt(c * c - b * b);
        },
        "opposite angle||hypotenuse": () => {
            alpha = type1 === "opposite angle" ? value1 : value2;
            if (alpha >= 90) return "Angle must be acute (less than 90 degrees)";
            c = type1 === "hypotenuse" ? value1 : value2;
            a = c * Math.sin(toRadians(alpha));
            b = Math.sqrt(c * c - a * a);
            beta = 90 - alpha;
        }
    };

    const key = `${type1}||${type2}`;


    if (calculations[key]) {
        const result = calculations[key]();
        if (result) {
            return result;
        } else {
            console.log("Calculation successful.");
            console.log(`success: a = ${a}, b = ${b}, c = ${c}, alpha = ${alpha}, beta = ${beta}`);
        }
    } else {
        console.log("Invalid types or incompatible pair. Please check the instruction and try again.");
        return "failed";
    }
}

