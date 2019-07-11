const db = require('../dbConfig')

module.exports = {
    add,
    find,
    findByUser,
    findById,
    remove,
    update

}

function add(keyPoint) {
    return db('KEY_POINTS').insert(keyPoint)
}

function find() {
    return db('KEY_POINTS')
}

function findByUser(keyPoints) {
    return db('KEY_POINTS').where({ keyPoints }).first()
}

function findById(id) {
    return db('KEY_POINTS').where({ id }).first()
}

function remove(id) {
    return db('KEY_POINTS').delete(id)
}

function update(id, keyPoints) {
    return db('KEY_POINTS').where({ id }).insert(keyPoints)
}