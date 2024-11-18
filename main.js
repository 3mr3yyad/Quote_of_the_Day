
var qoutes = [
    {
        qoute:'Be yourself; everyone else is already taken.',
        author:'Oscar Wilde'
    },
    {
        qoute:'So many books, so little time.',
        author:'Frank Zappa'
    },
    {
        qoute:'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
        author:'Albert Einstein'
    },
    {
        qoute:'A room without books is like a body without a soul.',
        author:'Marcus Tullius Cicero'
    },
    {
        qoute:'You only live once, but if you do it right, once is enough.',
        author:'Mae West'
    },
    {
        qoute:'Be the change that you wish to see in the world.',
        author:'Mahatma Gandhi'
    },
    {
        qoute:'In three words I can sum up everything I\'ve learned about life: it goes on.',
        author:'Robert Frost'
    },
    {
        qoute:'If you tell the truth, you don\'t have to remember anything.',
        author:'Mark Twain'
    },
    {
        qoute:'To live is the rarest thing in the world. Most people exist, that is all.',
        author:'Oscar Wilde'
    },
    {
        qoute:'Without music, life would be a mistake.',
        author:'Friedrich Nietzsche'
    }
]

function newQuote() {
    var rand = Math.floor(Math.random() * qoutes.length);

    var newQuote = qoutes[rand];

    document.getElementById("theQuote").innerHTML = '"' + newQuote.qoute + '"'
    document.getElementById("theAuthor").innerHTML = '― ' + newQuote.author
}