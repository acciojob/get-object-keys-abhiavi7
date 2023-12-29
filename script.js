// Create a student object with a 'name' property
let student = {
    name: "John"
};

// Add a property to the Object prototype
Object.prototype.getKeys = function () {
    return Object.keys(this);
};

// Example usage
let keys = student.getKeys();
console.log(keys); // Output: ['name']
