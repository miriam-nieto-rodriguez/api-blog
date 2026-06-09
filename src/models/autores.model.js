const db = require('../config/db');

const selectAll = async () => {
    const [result] = await db.query ('SELECT * FROM autores')
    return result;
}

const selectById = async (autorId) => {
    const [result] = await db.query (
        'SELECT * FROM autores WHERE id = ?',
        [autorId]
    );

    if (result.length === 0) return null
    return result[0]
}

const insertAutor = async ({nombre, email, imagen}) => {
    const [result] = await db.query(
        `INSERT INTO autores (nombre, email, imagen) VALUES
        (?,?,?)`,
        [nombre, email, imagen]
    );
    return result;
}

module.exports = {
    selectAll,
    selectById,
    insertAutor
}