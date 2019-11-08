/**
 * @name Client
 * @author Jeremy
 * @version 1.0.0
 * @package models
 * @abstrat Definition of a client
 */
class Client {
    
    constructor() {
        this._name = null;
        this._email = null;
        this._phone = null;
    }
    // setName is a setter (range l'information à l'interieur de la classe)
    // le _ est une convention
    // le return du setter permet de ne pas repréciser l'objet
    /**
     * @var _name Nom du client
     * @param {*} name 
     * @return void
     */
    setName(name) {
        this._name = name;
        return this;
    }

    // getName is a getter (va chercher l'information à l'interieur de la classe)
    /**
     * @return string
     * Return the nameof the client
     */
    getName() {
        return this._name
    }

    // Methode qui centralise les retours d'informations, les getxxxx ne sont plus utiles
    // '\n' permet un retour à la ligne lors de l'affichage
    presentMe() {
        return 'Bonjour ' + this._name + '\n' + 'Email : ' + this._email + '\n' + 'Tel : ' + this._phone
    }
    
    isActive(isActive) {
        this._isactive = isActive
        return this;
    }

    getStatus() {
        if(this.isActive === true)
            return 'Client actif'
        else return "Client inactif"
    }

    setEmail(email) {
        this._email = email;
        return this;
    }
    getEmail() {
        return this._email
    }

    setPhone(phone) {
        this._phone = phone;
        return this;
    }
    getPhone() {
        return this._phone;
    }
}

module.exports = Client;