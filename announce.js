var DHT = require("bittorrent-dht");
var exec = require("exec-sync");


var dht = new DHT();
//process.stdout.write(process.argv.toString());

var serverHash = exec('ssh-keygen -lf /etc/ssh/ssh_host_rsa_key.pub | cut -f 2 -d " " | head -n 1 | sha1sum | cut -f 1 -d " "');
var serverPort = 21;

process.stdout.write("Announcing as: " + serverHash + "\n");

dht.on('ready', function() {
    process.stdout.write("DHT is ready");
    
    dht.announce(serverHash, 21);
});

dht.on('peer', function(addr, hash, from) {
    process.stdout.write("We are now known as " + serverHash + "\n");
});

dht.on('error', function(error) {
    process.stdout.write("Error: " + error);
});
