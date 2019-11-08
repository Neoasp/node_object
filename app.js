/**
 * @name app
 * @author Jeremy
 * @version 1.1.0
 * @abstract Entry point
 */

 // Load class definition
 const Client = require('./src/models/Client')

 //Create (instanciante) a new Client
 const theClient = new Client();
 // setName is a setter (range l'information à l'interieur de la classe)
 theClient
    .setName('Bond')
    .setEmail('jamesbond@gmail.com')
    .setPhone('0600000000')
    .isActive(true);

 // getName is a getter (va chercher l'information à l'interieur de la classe)
 console.log (theClient.presentMe());
 console.log (theClient.getStatus())


