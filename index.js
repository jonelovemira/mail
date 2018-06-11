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
        client.stat();

    } else {

        console.log("LOGIN/PASS failed");
        client.quit();

    }
});

client.on("list", function(status, msgcount, msgnumber, data, rawdata) {

    if (status === false) {

        console.log("LIST failed");
        client.quit();

    } else {

        console.log("LIST success with " + msgcount + " element(s)");

        if (msgcount > 0)
            client.retr(1);
        else
            client.quit();

    }
});

client.on("retr", function(status, msgnumber, data, rawdata) {

    if (status === true) {

        console.log("RETR success for msgnumber " + msgnumber);
        // client.dele(msgnumber);
        client.quit();

    } else {

        console.log("RETR failed for msgnumber " + msgnumber);
        client.quit();

    }
});

client.on('stat', (resp, returnValue, data) => {
    console.log(resp, returnValue, data);
})