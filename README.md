# TorrentDNS

Dynamic DNS sucks, keeping a hostname will either cost you money, or you'll have to refresh your account all 30 days (+ forget to and have your hostname deleted).

If you just want to make a few of your devices talk to each other, why not use the BitTorrent DHT to store where? 

TorrentDNS stores a hash of the server's public SSH-key as key in the DHT, the client can then request the IP:Port of the server form the DHT and authenticate the server using the given hash.

## Caveats

- Requesting the IP:Port combination from the DHT is relatively slow, compared to e.g. DNS.
- Knowing the hashed public key by heart is more difficult than memorizing a regular host name, you may wanna use some kind of bookmark. 
