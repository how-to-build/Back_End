const db = require('../dbConfig')

module.exports = {
    add,
    find,
    findByUser,
    findById,
    remove,
    update

}

function find() {
    return db('COMMENTS')
}

function findByUser(comment) {
    return db('COMMENTS').where({ comment }).first()
}

function findById(id) {
    return db('COMMENTS').where({ id }).first()
}

function remove(id) {
    return db('COMMENTS').delete(id)
}

function update(id, user) {
    return db('COMMENTS').where({ id }).insert(user)
}