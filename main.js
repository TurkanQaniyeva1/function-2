let obj = [
    {
        name: "Ali",
        surname: "Aliyev",
        age: 10,
        driving: true
    }, {
        name: "Veli",
        surname: "Aliyev",
        age: 17,
        driving: false,
    }, {
        name: "Mehman",
        surname: "Aliyev",
        age: 25,
        driving: true,
    }, {
        name: "Nicat",
        surname: "Aliyev",
        age: 26,
        driving: false
    }, {
        name: "Ayxan",
        surname: "Aliyev",
        age: 15,
        driving: true
    }
]

let driver = obj.filter(person => person.driving && person.age >= 18);
console.log(driver);

let driver2 = obj.filter(person => person.surname === "Aliyev" && person.age < 18);
console.log(driver2);
