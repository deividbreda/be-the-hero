const connection = require('../database/connection');
const crypto = require('crypto');  

module.exports = {
    async index(request, response){
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response) {
        const {name, email, whatsapp, cidade, uf} = request.body;
    
        const id = crypto.randomBytes(4).toString('HEX');

        //await = Aguarda o código finalizar
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            cidade,
            uf, 
         })
    // codigo do connection tem que terminar para que dai retorne 
    //      |
    //      V
    return response.json({ id });
    }
};