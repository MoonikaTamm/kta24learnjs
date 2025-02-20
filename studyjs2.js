/*kasuta pigem let-i kui var-i. let-i kasutamine võib aitada vältida bugge mis tekivad.
Näide
*/
console.log(foo);
var foo = "tere";
/*
ei prindi välja tere, antud kood võrdub pmst
var foo;
console.log(foo);
foo = "tere"
ehk ss printimisel on lihtsalt tühja muutuja
*/

function hello(name) {
    return  'Hello ' + name;
}

let greeting = hello("Tiit")
console.log(greeting);
greeting = hello("Teet")
console.log(greeting);

let goodbye = function(name) {
    return "goodbye " + name;
}

goodbye = name => 'goodbye ' + name;

let farwell = goodbye('Tiit')
console.log(farwell)
farwell = goodbye('Tiit')
console.log(farwell)

let person = {
    name: 'Moonika',
    age: 26,
    greeting() 
    {return 'hello ' + this.name},
    goodbye: () => {return 'goodbye '}
}

function recursive(i) {
    console.log(i);
    if (i < 10)
    {
        recursive(i + 1);
    }
}

recursive(0);
/* rekursiivne - kutsub välja iseennast enda sees. järgmisena sama asi loopiga */

for (let i = 0; i < 11; i++) {
    console.log(i);
}

let template = `hello
world
${person.name}
!!!`;

/*
vormindatud nagu konsoolis välja printimisel nagu siin.
*/
console.log(template);
console.log(template.length);

/* length jälgida, et oleks ascii-s muidu pole täpne, emoji võib võrduda 2 baitiga- pikkusühikuga*/
/*numbreid loetavamad, suured numbrid n lõppu -Bigint(ei tee numbritega tehteid)*/
let number = 100_000_000_000_000
console.log(number);

let array = [
    'asadd',
    12,
    true, 
    () => "hello",
     [1, 3, 5]
];

console.log(array);
console.log(array[1]);
console.log(array[4][1]);

let x = Math.random(); /*annab numbri 1 ja 0 vahel */

let x2 = Math.round(x * 100); /* 0-100 */

if (x > 10) {
    console.log('suurem kui 10');
}
else if (x < 10) {
    console.log('väiksem kui 10');
} else {
    console.log('võrnde 10');
}

let day = new Date().getDay();
console.log(day);
let asnwer = '';
if (day == 0) {
    answer = 'Pühapäev'
} else if (day == 1) {
    answer = 'Esmaspäev'
} else if (day == 2) {
    answer = 'Teisipäev'
} else if (day == 3) {
    answer = 'Kolmapäev'
}
else if (day == 4) {
    answer = 'Neljapäev'
}
else if (day == 5) {
    answer = 'Reede'
}
else if (day == 6) {
    answer = 'Laupäev'
} else {
    answer = 'weird day'
}

console.log(answer);

switch(day) {
    case 0:
        answer = 'Pühapäev';
        break;
    case 1:
        answer = 'Esmaspäev';
        break;
    case 2:
        answer = 'Teisipäev';
        break;
    case 3:
        answer = 'Kolmapäev';
        break;
    case 4:
        answer = 'Neljapäev';
        break;
    case 5:
        answer = 'Reede';
        break;
    case 4:
        answer = 'Neljapäev';
        break;
    case 5:
    case 6:
        answer = 'Pidupäev';
        break;
    default:
        answer = 'Weird day'
}

/* break lõpetab, muidu läheb järgmisesse case ja täidab seda */
console.log(answer);

// while(true)
//lõputu loop

//do while ja while erinevus, do while teeb alguses ära ja ss kontrollib kas teha veel.

let a = 1;

while(a<1) {
    console.log('do stuff') //ei jõua siia kui while(false)
}


do {
    console.log('do stuff') //teeb asja ja  siis kontrollib whilegakas teha veel.
} while (a<1);

for (let key in person) {
    console.log(key);
}

for (let value of array) {
    console.log(value);
}


