var POP3Client = require("poplib");
let port = 995;
let host = 'pop.126.com';

var client = new POP3Client(port, host, {
    tlserrs: false,
    enabletls: true,
    debug: false
});


client.on("connect", function() {

    console.log("CONNECT success");
    client.login('xuzhongyong1234@126.com', 'Jone2Wangyi');

});

client.on("login", function(status, rawdata) {
    console.log('test');

    if (status) {

        console.log("LOGIN/PASS success");
        client.list(1);

    } else {

        console.log("LOGIN/PASS failed");
        client.quit();

    }
});