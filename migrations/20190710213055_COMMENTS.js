const COMMENTS = 'COMMENTS'
const USERS = 'USERS'
const HOW_TO = 'HOW_TO'

exports.up = async function(knex) {
    await knex.schema.createTable(COMMENTS, tbl => {
        tbl.increments()
        tbl.string('comment').notNullable()
        tbl.integer('likes')
            .notNullable()
            .defaultTo(0)
        tbl.integer('user_id')
            .unsigned()
            .references('id')
            .inTable(USERS)
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.integer('how_to_id')
            .unsigned()
            .references('id')
            .inTable(HOW_TO)
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
}

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists(COMMENTS)
}
