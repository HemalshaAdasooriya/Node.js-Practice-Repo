let radius = 7149000; // radius of Jupiter in meters
const mass = 1.898e27; // mass of Jupiter in kilograms
const G = 6.673e-11; // Gravitational constant in m^3 kg^-1 s^-2

let escapeVelocity = Math.sqrt((2 * G * mass) / radius);
console.log("escape velocity :=" + escapeVelocity.toFixed(2) + " m/s");