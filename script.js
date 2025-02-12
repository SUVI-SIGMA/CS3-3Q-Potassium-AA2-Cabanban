function population() {
    let initialPopulation = prompt("Enter the value for initial population: ");
    let rateOfGrowth = prompt("Enter the value for the rate of growth: ");
    let timeinHours = prompt("Enter the value for time (in HOURS): ");
    let valOne = parseFloat(initialPopulation);
    let valTwo = parseFloat(rateOfGrowth);
    let valThree = parseFloat(timeinHours);
    let finalPopulation = Math.round(valOne * (Math.pow(Math.E,valTwo) * valThree));
    
    let location = prompt("Enter the location of the Monster: ");
    let name = prompt("Enter the name of the Monster: ");

    let conclusion = ('After ' + valThree + ' hours, the population of ' + name + ' has risen to ' + finalPopulation);
    document.getElementById('result').innerHTML = conclusion;
}
