// - Створити функцію конструктор для об'єктів User з полями
// id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//

const users = [
    {
        id: 1,
        name: 'Ivan',
        surname: 'Ivanov',
        email: 'ivan.ivanov@example.com',
        phone: '+380501234567'
    },
    {
        id: 2,
        name: 'Petro',
        surname: 'Petrenko',
        email: 'petro.petrenko@example.com',
        phone: '+380502345678'
    },
    {
        id: 3,
        name: 'Olena',
        surname: 'Shevchenko',
        email: 'olena.shevchenko@example.com',
        phone: '+380503456789'
    },
    {
        id: 4,
        name: 'Nina',
        surname: 'Kovalenko',
        email: 'nina.kovalenko@example.com',
        phone: '+380504567890'
    },
    {
        id: 5,
        name: 'Oleh',
        surname: 'Bondarenko',
        email: 'oleh.bondarenko@example.com',
        phone: '+380505678901'
    },
    {
        id: 6,
        name: 'Sergiy',
        surname: 'Tkachenko',
        email: 'sergiy.tkachenko@example.com',
        phone: '+380506789012'
    },
    {
        id: 7,
        name: 'Viktor',
        surname: 'Melnyk',
        email: 'viktor.melnyk@example.com',
        phone: '+380507890123'
    },
    {
        id: 8,
        name: 'Anna',
        surname: 'Kravchenko',
        email: 'anna.kravchenko@example.com',
        phone: '+380508901234'
    },
    {
        id: 9,
        name: 'Andriy',
        surname: 'Pavlenko',
        email: 'andriy.pavlenko@example.com',
        phone: '+380509012345'
    },
    {
        id: 10,
        name: 'Kateryna',
        surname: 'Moroz',
        email: 'kateryna.moroz@example.com',
        phone: '+380510123456'
    }
];

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let usersFunc = [];
users.map(user => {
    usersFunc.push(new User(user.id, user.name, user.surname, user.email, user.phone));
})

console.log(usersFunc);

console.log('-----------------------');

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// залишивши тільки об'єкти з парними id (filter)

const usersFuncFilter = usersFunc.filter(user => user.id % 2 === 0);

console.log(usersFuncFilter);
console.log('-----------------------');

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

const usersFuncSort = usersFunc.sort((user1, user2) => user2.id - user1.id);

console.log(usersFuncSort)
console.log('=======================');

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

const clients = [
    {
        id: 1,
        name: 'Ivan',
        surname: 'Ivanov',
        email: 'ivan.ivanov@example.com',
        phone: '+380501234567',
        order: ['item1', 'item2']
    },
    {
        id: 2,
        name: 'Petro',
        surname: 'Petrenko',
        email: 'petro.petrenko@example.com',
        phone: '+380502345678',
        order: ['item3']
    },
    {
        id: 3,
        name: 'Olena',
        surname: 'Shevchenko',
        email: 'olena.shevchenko@example.com',
        phone: '+380503456789',
        order: ['item4', 'item5', 'item6']
    },
    {
        id: 4,
        name: 'Nina',
        surname: 'Kovalenko',
        email: 'nina.kovalenko@example.com',
        phone: '+380504567890',
        order: ['item7']
    },
    {
        id: 5,
        name: 'Oleh',
        surname: 'Bondarenko',
        email: 'oleh.bondarenko@example.com',
        phone: '+380505678901',
        order: ['item8', 'item9']
    },
    {
        id: 6,
        name: 'Sergiy',
        surname: 'Tkachenko',
        email: 'sergiy.tkachenko@example.com',
        phone: '+380506789012',
        order: []
    },
    {
        id: 7,
        name: 'Viktor',
        surname: 'Melnyk',
        email: 'viktor.melnyk@example.com',
        phone: '+380507890123',
        order: ['item10']
    },
    {
        id: 8,
        name: 'Anna',
        surname: 'Kravchenko',
        email: 'anna.kravchenko@example.com',
        phone: '+380508901234',
        order: ['item11', 'item12']
    },
    {
        id: 9,
        name: 'Andriy',
        surname: 'Pavlenko',
        email: 'andriy.pavlenko@example.com',
        phone: '+380509012345',
        order: ['item13']
    },
    {
        id: 10,
        name: 'Kateryna',
        surname: 'Moroz',
        email: 'kateryna.moroz@example.com',
        phone: '+380510123456',
        order: ['item14', 'item15']
    }
];

class Client {
    constructor(id, name, surname, email, phone, order = []) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clientClass = [];

clients.map(client => clientClass.push(
    new Client(client.id, client.name, client.surname, client.email, client.phone, client.order)
));

console.log(clientClass);
console.log('-----------------------');

let clientClassSort = clientClass.sort((iterm1, iterm2) => iterm1.order.length - iterm2.order.length);

console.log('Sort client iterm', clientClassSort);
console.log('=======================');

// - Створити функцію конструктор яка дозволяє створювати об'єкти car,
// з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

const cars = [
    {
        model: 'Model S',
        manufacturer: 'Tesla',
        year: 2022,
        maxSpeed: 322, // km/h
        engineCapacity: 'None' // Electric car
    },
    {
        model: 'Civic',
        manufacturer: 'Honda',
        year: 2020,
        maxSpeed: 220, // km/h
        engineCapacity: 2.0 // liters
    },
    {
        model: 'Mustang',
        manufacturer: 'Ford',
        year: 2021,
        maxSpeed: 250, // km/h
        engineCapacity: 5.0 // liters
    },
    {
        model: '911 Carrera',
        manufacturer: 'Porsche',
        year: 2019,
        maxSpeed: 308, // km/h
        engineCapacity: 3.0 // liters
    },
    {
        model: 'A8',
        manufacturer: 'Audi',
        year: 2018,
        maxSpeed: 250, // km/h
        engineCapacity: 3.0 // liters
    },
    {
        model: 'Camry',
        manufacturer: 'Toyota',
        year: 2021,
        maxSpeed: 210, // km/h
        engineCapacity: 2.5 // liters
    },
    {
        model: 'Impreza',
        manufacturer: 'Subaru',
        year: 2020,
        maxSpeed: 240, // km/h
        engineCapacity: 2.0 // liters
    },
    {
        model: 'Chiron',
        manufacturer: 'Bugatti',
        year: 2022,
        maxSpeed: 420, // km/h
        engineCapacity: 8.0 // liters
    },
    {
        model: 'Model 3',
        manufacturer: 'Tesla',
        year: 2021,
        maxSpeed: 261, // km/h
        engineCapacity: 'None' // Electric car
    },
    {
        model: 'X5',
        manufacturer: 'BMW',
        year: 2019,
        maxSpeed: 235, // km/h
        engineCapacity: 3.0 // liters
    }
];

function Car(model, manufacturer, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
}

Car.prototype.drive = function () {
    return `їдемо зі швидкістю ${this.maxSpeed} на годину`;
}

Car.prototype.info = function () {
    for (const key in this) {
        if (typeof this[key] !== 'function') {
            console.log(`${key}: ${this[key]}`);
        }
    }
}

Car.prototype.increaseMaxSpeed = function (newSpeed) {
    return this.maxSpeed = this.maxSpeed + newSpeed;
}

Car.prototype.changeYear = function (newValue) {
    return this.year = newValue;
}

Car.prototype.addDriver = function (driver = {name: 'defaultDriver'}) {
    this.driver = driver;
    return this;
}


const carsArr = [];

cars.map(car => carsArr.push(
    new Car(car.model, car.manufacturer, car.year, car.maxSpeed, car.engineCapacity
    )));

console.log(carsArr);
console.log('-----------------------');
console.log(carsArr[0].drive());
console.log('-----------------------');

for (let v of carsArr) {
    v.info();
    console.log('----------');
}

console.log('-----------------------');

console.log('Швидкість до збільшення', carsArr[0].maxSpeed);
carsArr[0].increaseMaxSpeed(20);
console.log('Швидкість після збільшення', carsArr[0].maxSpeed);

console.log('-----------------------');

console.log(carsArr[1].year)
console.log('Змінна року на', carsArr[1].changeYear(1990));
console.log(carsArr[1].year)

console.log('-----------------------');

console.log('Add driver');
carsArr[0].addDriver({name: 'Andrew'});
console.log(carsArr[0].driver)
console.log(carsArr[0]);
console.log('==============================================');

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class CarClass {
    constructor(model, manufacturer, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive() {
        return `їдемо зі швидкістю ${this.maxSpeed} на годину`;
    }

    info() {
        for (const key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key}: ${this[key]}`);
            }
        }
    }

    increaseMaxSpeed(newSpeed) {
        return this.maxSpeed = this.maxSpeed + newSpeed;
    }

    changeYear(newValue) {
        return this.year = newValue;
    }

    addDriver(driver = {name: 'defaultDriver'}) {
        this.driver = driver;
        return this;
    }
}

const CarClassArr = [];

cars.map(car => CarClassArr.push(
    new CarClass(car.model, car.manufacturer, car.year, car.maxSpeed, car.engineCapacity
    )));

console.log(CarClassArr);
console.log(CarClassArr[0].drive());
console.log('-----------------------');

for (let v of CarClassArr) {
    v.info();
    console.log('----------');
}

console.log('-----------------------');

console.log('Швидкість до збільшення', CarClassArr[0].maxSpeed);
CarClassArr[0].increaseMaxSpeed(20);
console.log('Швидкість після збільшення', CarClassArr[0].maxSpeed);

console.log('-----------------------');

console.log(CarClassArr[1].year)
console.log('Змінна року на', CarClassArr[1].changeYear(1990));
console.log(CarClassArr[1].year)

console.log('-----------------------');

console.log('Add driver');
CarClassArr[2].addDriver({name: 'Bogdan'});
console.log(CarClassArr[2].driver)
console.log(CarClassArr[2]);
console.log('==============================================');

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//

const cinderellas = [
    {
        name: 'Cindy1',
        age: 20,
        footSize: 35
    },
    {
        name: 'Cindy2',
        age: 22,
        footSize: 36
    },
    {
        name: 'Cindy3',
        age: 25,
        footSize: 37
    },
    {
        name: 'Cindy4',
        age: 23,
        footSize: 38
    },
    {
        name: 'Cindy5',
        age: 21,
        footSize: 39
    },
    {
        name: 'Cindy6',
        age: 24,
        footSize: 35
    },
    {
        name: 'Cindy7',
        age: 26,
        footSize: 36
    },
    {
        name: 'Cindy8',
        age: 27,
        footSize: 37
    },
    {
        name: 'Cindy9',
        age: 28,
        footSize: 38
    },
    {
        name: 'Cindy10',
        age: 29,
        footSize: 39
    }
];

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

const cinderellasArr = [];

console.log('----- 10 arrays cinderellas -----');
cinderellas.map(cinderella => cinderellasArr.push(new Cinderella(cinderella.name, cinderella.age, cinderella.footSize)));

console.log(cinderellasArr)
console.log('-----------------------');

//----------------------------------------------
const prince = new Prince('Prince Charming', 30, 38);

let foundCinderella;
for (const cinderella of cinderellasArr) {
    if (cinderella.footSize === prince.shoe) {
        foundCinderella = cinderella;
        break;
    }
}
console.log('За допомогою циклу');
console.log('Попелюшка, яка повинна бути з принцем:', foundCinderella);
console.log('--------------------')
console.log('За допомогою find');
const foundCinderellaUsingFind = cinderellasArr.find(value => value.footSize === prince.shoe);
console.log('Попелюшка, яка повинна бути з принцем (за допомогою find):', foundCinderellaUsingFind);
console.log('==============================================');

//
//
// Через Array.prototype. створити власний foreach, filter, map

let arrr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

Array.prototype.customForeach = function (callback) {
    for (let index = 0; index < this.length; index++) {
        callback(this[index], index, this)
    }
}

arrr.customForeach((x, i) => {
    console.log(x ,i)
})

console.log('--------------------');

Array.prototype.customFilter = function (callback) {
    const filterArr = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)){
            filterArr.push(this[i]);
        }
    }

    return filterArr;
}

console.log(arrr.customFilter(value => value > 3));
console.log('--------------------');

class CustomMap {
    constructor() {
        this.items = [];
    }

    set(key, value) {
        const index = this.items.findIndex(item => item[0] === key);
        if (index === -1) {
            this.items.push([key, value]);
        } else {
            this.items[index][1] = value;
        }
    }

    get(key) {
        const item = this.items.find(item => item[0] === key);
        return item ? item[1] : undefined;
    }

    has(key) {
        return this.items.some(item => item[0] === key);
    }

    delete(key) {
        const index = this.items.findIndex(item => item[0] === key);
        if (index !== -1) {
            this.items.splice(index, 1);
            return true;
        }
        return false;
    }

    clear() {
        this.items = [];
    }

    size() {
        return this.items.length;
    }

    keys() {
        return this.items.map(item => item[0]);
    }

    values() {
        return this.items.map(item => item[1]);
    }

    entries() {
        return this.items;
    }
}

const myMap = new CustomMap();

myMap.set('key1', 'value1');
myMap.set('key2', 'value2');

console.log(myMap.get('key1'));
console.log(myMap.get('key2'));
console.log('-----');

console.log(myMap.has('key2')); // true
console.log('-----');

console.log(myMap.size()); // 2
console.log('-----');

myMap.delete('key1');
console.log(myMap.get('key1')); // undefined
console.log('-----');

myMap.clear();
console.log(myMap.size()); // 0

console.log('==============================================');