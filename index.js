var botName = "botTest"
var channal = "#ysitd"
var irc = require('irc');

var interval = 10000;
var lastTime = 0;

var client = new irc.Client('chat.freenode.net', botName, {
    channels: [channal],
});
client.activateFloodProtection(1000);

client.addListener('error', function (e) {
    console.log(e);
});

client.addListener('message', function (from, to, message) {
    console.log(from + ' => ' + to + ': ' + message);
    if (to !== channal) {
        return;
    }
    if (message.search(botName) >= 0) {
        if (Date.now() - lastTime > interval) {
            message = getRandomItem(messages);
            say(client, message)
            lastTime = Date.now()
        } else {
            console.log("too fast for next message!")
        }
    }
});

function say(client, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        client.say(channal, list[i]);
    }
    return;
}

function getRandomItem(list) {
    return list[Math.floor(list.length * Math.random())];
}

var messages = [
    [
        "!!!!!!!!!!!!!海豹神教，千秋萬歲!!!!!!!!!!!!!",
        "　　海豹愛尻尻",
        "　　　　　不管是",
        "　　　　　　　　　左尻",
        "　　　　　　　　　　　右尻",
        "　　　　　　　　　　　　　還是海豹最愛尻",
        "!!!!!!!!!!!!!海豹神教，千秋萬歲!!!!!!!!!!!!!"
    ],
    [
        "!!!!!!!!!!!!!海豹神教，千秋萬歲!!!!!!!!!!!!!",
        "　　我說海豹他啊(被打斷)",
        "　　　海豹",
        "　　　　不~~~~",
        "　　　　　啊，這是不可以的阿",
        "　　　　　　住手~~~",
        "　　　　　　　阿阿阿阿啊啊",
        "　　　　　　　　　　　　　阿阿阿阿啊",
        "　　　(謎)：這究竟發生了甚麼事呢？",
        "　　　　　　試圖說出海豹事情的人怎麼了？",
        "!!!!!!!!!!!!!海豹神教，千秋萬歲!!!!!!!!!!!!!"
    ]
]
