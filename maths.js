const G = 6.673e-11; // Gravitational constant in m^3 kg^-1 s^-2
const radiusEarth = 6.38e6; // Radius of the Earth in meters
const massEarth = 5.98e24; // Mass of the Earth in kilograms
let hight = 400000; // Height above Earth's surface in meters
let acceleration = G * massEarth /(radiusEarth + hight) ** 2; // Gravitational acceleration at height hight

console.log("acceleration =", acceleration, "m/s^2");
