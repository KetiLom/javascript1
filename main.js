 //1. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს და დააბრუნებს true -ს თუ რიცხვი არის ლუწი ან false -ს თუ რიცხვი არის კენტი.
function checkdOddEven(num) {
    var num = parseInt(prompt("Enter number:"));
    if (num % 2 == 0) {
        return console.log(num + ' is an Even number');
    } else {
        return console.log(num + ' is an Odd number');
    }
}
console.log(checkdOddEven(3));

//2. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ორ რიცხვს - მართკუთხედის გვერდების ზომებს და დააბრუნებს მართკუთხედის ფართობს.
function calcArea(a,b)
{
    var a = parseInt(prompt("Enter length of rectangle:"));
    var b = parseInt(prompt("Enter width of rectangle:"));
    return (a * b);
}
console.log(calcArea(2, 3));

//3. დაწერეთ ფუქცია, რომელიც პარამეტრად მიიღებს ერთ რიცხვს - კვადრატის გვერდის სიგრძეს და დააბრუნებს კვადრატის ფართობს. ფართობის გამოსათვლელად გამოიყენეთ #2 პუნქტში აღწერილი ფუნქცია.
 console.log(calcArea(4, 4));
//4. დაწერეთ ფუნქცია, რომელიც Math.random() ფუნქციის გამოყენებით დააგენერირებს და დააბრუნებს 0-დან 100-მდე შემთხვევით რიცხვს.
function random(num) {
    return (Math.floor(Math.random() * 100));
}
console.log(random());
//5. დაწერეთ ფუნქცია, რომელიც მიიღებს ორ რიცხვს პარამეტრად (a, b)  და დააბრუნებს შემთხვევით რიცხვს a -დან b -მდე შუალედში.
function randombetween(a, b) {
    var a = parseInt(prompt("Enter first number:"));
    var b = parseInt(prompt("Enter second number:"));
    return Math.floor(Math.random() * (b - a)) + a;
}
console.log(randombetween(2, 5));
//6. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს სტრინგს: "boy" ან "girl" და დააბრუნებს 10 გოგოს ან ბიჭის სახელიდან ერთ-ერთს შემთხვევითად. (სახელები ჩაწერილი იქნება მასივში ამავე ფუნქციაში. კარგი იქნება გამოიყენოთ #5 პუნქტში დაწერილი ფუნქცია
 
function randomName(gender){
    var girls=["Ana", "Barbare", "Diana", "Kira", "Maia", "Mariami", "Miranda", "Elene", "Takov", "Mia"];
    var boys=['Giga', 'Zura', 'Sandro', 'Dachi', 'Kosta', 'Andro', 'Alex', 'Ilia', 'Misha', 'Dato'];
    var gender = prompt("Enter Gender (girl or boy):");
    var id = randombetween(0, 11)
    if (gender == 'girl') {
        return console.log(girls[id]);
    } else if (gender == 'boy') {
        return console.log(boys[id]);
    } else { console.log('Input parameter is not valid! enter girl or boy') }
}
console.log(randomName('girl'));

//7. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს წელს (მაგალითად 2021) და დააბრუნებს true-ს თუ ეს წელი არის ნაკიანი ან false-ს წინააღმდეგ შემთხვევაში.
function leapYear(year) {
    var year = parseInt(prompt("Enter year:"));
    var boolean = new Date(year, 2, 0).getDate();
    return console.log(boolean == 29)
}
    console.log(leapYear(2021));
//8. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს მართკუთხა პარალელეპიპედის გვერდების ზომებს და სიმაღლეს (a, b, c) და დააბრუნებს ფიგურის მოცულობას. მოცულობის გამოსათვლელად დაიხმარეთ #2 პუნქტში დაწერილი ფუნქცია.*/
function value(a, b, c) {
    var a = parseInt(prompt("Enter width:"));
    var b = parseInt(prompt("Enter height:"));
    var c = parseInt(prompt("Enter length:"));
    return console.log(a * b * c);
}
console.log(value(2, 3, 4));