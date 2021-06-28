// Antes de criar as tabelas do banco de dados, temos que importar o arquivo onde criamos a conexao com o sqlite
const Database = require('./config');

const initDb = {
    async init() {
        const db = await Database(); 
        
        await db.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY,
            pass TEXT
        )`);

        await db.exec(`CREATE TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            read INT
        )`);

        await db.close();
    }
} 

initDb.init();



