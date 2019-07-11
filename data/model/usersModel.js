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
    return db('USERS')
}

function findByUser(username) {
    return db('USERS').where({ username }).first()
}

function findById(id) {
    return db('USERS').where({ id }).first()
}

function remove(id) {
    return db('USERS').delete(id)
}

function update(id, user) {
    return db('USERS').where({ id }).insert(user)
}