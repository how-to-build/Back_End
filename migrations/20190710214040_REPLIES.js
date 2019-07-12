const REPLIES = 'REPLIES'
const USERS = 'USERS'
const COMMENTS = 'COMMENTS'

exports.up = async function(knex) {
    await knex.schema.createTable(REPLIES, tbl => {
        tbl.increments()
        tbl.string('reply')
        tbl.integer('likes')
            .notNullable()
            .defaultTo(0)
        tbl.integer('user_id')
            .unsigned()
            .references('id')
            .inTable(USERS)
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.integer('comment_id')
            .unsigned()
            .references('id')
            .inTable(COMMENTS)
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
}

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists(REPLIES)
}
