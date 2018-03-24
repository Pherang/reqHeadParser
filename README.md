# reqHeadParser

Returns specific headers back to user when they request a specific URL.
Project for the Freecodecamp bootcamp.

Live version here https://nameless-shelf-41350.herokuapp.com/

Uses Node.js built in http module to process requests and responses. Express wasn't really needed in this case.
Learned about greedy vs non-greedy regular expressions in this project. Came in useful in parsing the system information from the user-agent in the request header.

Also used the forwarded package to get the client's IP. https://www.npmjs.com/package/forwarded Thanks Doug Wilson!

