var DHT = require("bittorrent-dht");
var exec = require("exec-sync");


var dht = new DHT();
//process.stdout.write(process.argv.toString());

if (process.argv.length < 3)
{
    process.stderr.write("Please give a hash to lookup\n");
    process.exit();
}

var serverHash = process.argv[2];

dht.on('ready', function() {
    process.stdout.write("DHT is ready, starting lookup\n");
    dht.lookup(serverHash);
});

var seenIPs = [];

dht.on('peer', function(addr, hash, from) {
    if (seenIPs.indexOf(addr) == -1)
    {
       seenIPs.push(addr);
       process.stdout.write(addr); 
    }
});

dht.on('error', function(error) {
    process.stdout.write("Error: " + error + "\n");
});
