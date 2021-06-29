const Database = require('../db/config');

module.exports = {
    async create(req, res) {
        const db = await Database();
        // Recuperamos a senha digitada no formulario
        const pass = req.body.password;
        let roomId;
        let isRoom = true;

        while(isRoom) {
             // Gera o numero da sala
            for (let i = 0; i < 6; i++) {
                // Ternario que  vai impedir um id que comece com 0
                i == 0 ? roomId = Math.floor(Math.random() * 10).toString() :
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
    async open(req, res) {
        const db = await Database();

        // Recuperamos o id da sala
        const roomId = req.params.id;
        
        // Recupera todas as perguntas se o id da sala corresponde com o id passado na url
        const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 0`);

        // Recuper as questoes que ja foram lidas
        const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 1`);

        let isNoQuestions;

        // Verifica se tem perguntas na sala
        if (questions.length == 0) {
            if (questionsRead.length == 0) {
                isNoQuestions = true;
            }
        }

        res.render("room", { roomId: roomId, questions: questions, questionsRead: questionsRead, isNoQuestions: isNoQuestions });
    },

    enter(req, res) {
        // roomId é o nome do input que a gente deu
        const roomId = req.body.roomId;

        res.redirect(`/room/${roomId}`);   
    }
}