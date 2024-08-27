const country = {
    name: "Korea",
    population: "5178579",
    get_name: function () {
        return this.name;
    }
};

console.log(country.get_name()); // Korea
console.log(country.name);
console.log(country.population);