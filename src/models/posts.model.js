const db = require('../config/db');

const selectAll = async () => {
    const [result] = await db.query(`
        SELECT p.*, a.nombre AS autor_nombre, a.email AS autor_email, a.imagen AS autor_imagen
        FROM posts AS p
        INNER JOIN autores AS a ON p.fk_autores_id = a.id
        `);

    return result
}

const selectById = async (postId) => {
    const [result] = await db.query(`SELECT p.*, a.nombre AS autor_nombre, a.email AS autor_email, a.imagen AS autor_imagen
    FROM posts AS p
    INNER JOIN autores AS a ON p.fk_autores_id = a.id
    WHERE p.id = ?`,
    [postId])

    if (result.length === 0) return null
    return result[0]

}

const insertPost = async ({
    titulo,
    descripcion,
    fecha_creacion,
    categoria,
    fk_autores_id
}) => {
    const [result] = await db.query(
        ` INSERT INTO posts (titulo, descripcion, categoria, fk_autores_id) VALUES
        ( ? , ? , ? , ? )`,
        [titulo, descripcion, categoria, fk_autores_id]
    );
    return result;
}

module.exports = {
    selectAll,
    selectById,
    insertPost
}