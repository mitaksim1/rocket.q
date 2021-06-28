const Database = require('../db/config');

module.exports = {
    async create(req, res) {
        const db = await Database();
        // Recuperamos a senha digitada no formulario
        const pass = req.body.password;
        let roomId= '';
        let isRoom = true;

        while(isRoom) {
             // Gera o numero da sala
            for (let i = 0; i < 6; i++) {
                roomId += Math.floor(Math.random() * 10).toString();
            }
            // Verifica se o numero randômico criado ja existe
            const roomsExistsIds = await db.all(`SELECT id FROM rooms`);
            // Método some() retorna true se condiçao verdadeira sem fazer o loop em todo o vetor
            isRoom = roomsExistsIds.some(roomExistsId => roomExistsId === roomId);
            if (!isRoom) {
                /**
                 * Insere a sala no banco de dados
                 */
                await db.run(`INSERT INTO rooms (
                    id,
                    pass
                ) VALUES (
                    ${parseInt(roomId)},
                    ${pass}
                )`);
            }
        }
       
        await db.close();

        res.redirect(`/room/${roomId}`);
    }, 

    // Renderiza a sala com o id
    open(req, res) {
        // Recuperamos o id da sala
        const roomId = req.params.id;
        res.render("room", {roomId: roomId});
    }
}