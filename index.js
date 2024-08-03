let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes=[{
    quote:`"If names are not correct, language will not be in accordance with the truth of things."`,
    person:'Confucius.'
},{
    quote:`"The glory of my name increases my shame. Less known by mortals, I could better escape their eyes."`,
    person:'Jean Racine.'
},{
    quote:`"Forgive your enemies, but never forget their names."`,
    person:'John F. Kennedy.'
},{
    quote:`"They say we die twice - once when the last breath leaves our body and once when the last person we know says our name."`,
    person:' Al Pacino.'
},{
    quote:`"We write our names in the sand: and then the waves roll in and wash them away."`,
    person:' Neil Gaiman'
},{
    quote:`"Leadership is not a popularity contest; it's about leaving your ego at the door. The name of the game is to lead without a title."`,
    person:'Robin Sharma.'
}, ];

btn.addEventListener('click',function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})