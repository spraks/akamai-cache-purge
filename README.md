# akamai-cache-purge

Akamai Cache Purge utility is a expressJs based application which can be used to clear akamai cached URLs. It currently supports single URL cache clear using edgeGrid API.

Important info:
 - Create .edgerc file on applicaiton root directory

```
[default]
host = akab-xxxxxxxxxxxxxxxxxxxxxxxxxx.purge.akamaiapis.net
client_token = akab-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
client_secret = xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
access_token = xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
max-body = 131072
```

  - Install required npm modules 

### Tech

This utility uses a number of open source projects to work properly:

* [Bootstrap] - great UI for modern web apps
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework 

And of course akamai-cache-clear itself is open source with a [public repository][dill]
 on GitHub.

### Installation

akamai-cache-clear requires [Node.js](https://nodejs.org/) v4+ to run.

Download https://github.com/spraks/akamai-cache-purge.git

Install the dependencies and devDependencies and start the server.

```sh
$ cd akamai-cache-purge
$ npm install -d
$ node app.js
```

