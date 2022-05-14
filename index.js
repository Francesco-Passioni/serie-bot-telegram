const app=require("express")();
const fs = require("fs");
var contenuto = JSON.parse(fs.readFileSync("serie.json"));
const TelegramBot = require('node-telegram-bot-api');
const token = '5382880248:AAE7qqWjvTXWLlofzpB-TffJr8Fd9hJi6Og';
const PORT = process.env.P0RT || 3000;

app.listen(PORT, () =>{
  console.log( App up at port ${PORT}` );
});

const bot = new TelegramBot(token,
    {
        polling: true
    });
bot.onText(/\/start/, (msg) =>
{
    bot.sendMessage(msg.chat.id, "Bevenuto, questo bot ti da la possibilità di scegliere la serie tv più adatta a te e alla situazione in cui ti trovi, prova qualche comando per iniziare");
})

//comando mood
bot.onText(/\/mood/, (msg) =>         
{
    bot.sendMessage(msg.chat.id, "Come ti senti oggi?", 
    {
        "reply_markup":
        {
            "keyboard": [
                ["Mi sento tranquillo", "Sono contento"],
                ["Sono un po in ansia", "Non mi sento molto bene"]
            ]
        }
    });
});
bot.on('message' , (msg) => 
{
    console.log(msg.text.toString())
    var pp = "Mi sento tranquillo";
    if(msg.text.toString().indexOf(pp) === 0)
    {
        bot.sendMessage(msg.chat.id, "Non dire altro, ecco alcune serie tv adatte a te");
        let results = contenuto.search_engines.filter((searchEngine) => searchEngine.name.includes('Action'));
        results.forEach((risultato) => {
            for(var i = 0; i<risultato.films.length; i++){
                bot.sendMessage(msg.chat.id, risultato.films[i]);
            }
        })
    }
});
bot.on('message' , (msg) => 
{
    console.log(msg.text.toString())
    var pl = "Sono contento";
    if(msg.text.toString().indexOf(pl) === 0)
    {
        bot.sendMessage(msg.chat.id, "Qualcuno qui ha avuto un aumento? Vediamo di tenere attivo questo mood, ecco qualcosa che fa al caso tuo");
        let results = contenuto.search_engines.filter((searchEngine) => searchEngine.name.includes('Comedy'));
        results.forEach((risultato) => {
            for(var i = 0; i<risultato.films.length; i++){
                bot.sendMessage(msg.chat.id, risultato.films[i]);
            }
        })
    }
});
bot.on('message' , (msg) => 
{
    console.log(msg.text.toString())
    var nd = "Sono un po in ansia";
    if(msg.text.toString().indexOf(nd) === 0)
    {
        bot.sendMessage(msg.chat.id, "Ok, nessun problema, rilassati e goditi qualche serie tv");
        let results = contenuto.search_engines.filter((searchEngine) => searchEngine.name.includes('Thrillers'));
        results.forEach((risultato) => {
            for(var i = 0; i<risultato.films.length; i++){
                bot.sendMessage(msg.chat.id, risultato.films[i]);
            }
        })
    }
});
bot.on('message' , (msg) => 
{
    console.log(msg.text.toString())
    var nc = "Non mi sento molto bene";
    if(msg.text.toString().indexOf(nc) === 0)
    {
        bot.sendMessage(msg.chat.id, "Chiaro, vediamo se c'è qualcosa di tranquillo che fa al caso tuo?");
        let results = contenuto.search_engines.filter((searchEngine) => searchEngine.name.includes('Fantasy'));
        results.forEach((risultato) => {
            for(var i = 0; i<risultato.films.length; i++){
                bot.sendMessage(msg.chat.id, risultato.films[i]);
            }
        })
    }
});

//comando giornata
/*bot.onText(/\/giornata/, (msg) => 
{
    bot.sendMessage(msg.chat.id, "Quanto tempo hai a disposizione?", 
    {
        "reply_markup":
        {
            "keyboard": [
                ["Sono in pausa pranzo", "Ho tutto il pomeriggio libero"],
                ["Non riesco a dormire", "Serata netflix and chill"]
            ]
        }
    });
});
bot.on('message' , (msg) => 
{
    console.log(msg.text.toString())
    var pp = "Sono in pausa pranzo";
    if(msg.text.toString().indexOf(pp) === 0)
    {
        bot.sendMessage(msg.chat.id, "Ok vediamo se c'è qualcosa da vedere al volo");
    }
});
bot.on('message' , (msg) => 
{
    console.log(msg.text.toString())
    var pl = "Ho tutto il pomeriggio libero";
    if(msg.text.toString().indexOf(pl) === 0)
    {
        bot.sendMessage(msg.chat.id, "Perfetto, oggi ci si diverte");
    }
});
bot.on('message' , (msg) => 
{
    console.log(msg.text.toString())
    var nd = "Non riesco a dormire";
    if(msg.text.toString().indexOf(nd) === 0)
    {
        bot.sendMessage(msg.chat.id, "Piazzati a letto e rilassati, ecco qualcosa che fa al caso tuo");
    }
});
bot.on('message' , (msg) => 
{
    console.log(msg.text.toString())
    var nc = "Serata netflix and chill";
    if(msg.text.toString().indexOf(nc) === 0)
    {
        bot.sendMessage(msg.chat.id, "cibo, divano e clicca play");
    }
});*/