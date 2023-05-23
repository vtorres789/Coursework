const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
    
    // grabbing root element
    const root = document.getElementById("root");
    
    // add h1 element and appending HTML
    const h1 = document.createElement("h1");
    h1.innerHTML = "FREELANCERS";
    root.appendChild(h1);

    // creating a for loop with li in a ul
    for (let person of users) {
        let li = document.createElement('li');
        li.innerHTML = person.name + ', age: ' + person.age + ', occupation: ' + person.occupation;
        ul.appendChild(li);
        // append HTML of the loop
        root.appendChild(ul);
    }
    
}
//call the main function
main();