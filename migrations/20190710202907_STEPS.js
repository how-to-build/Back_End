const STEPS = 'STEPS'
const HOW_TO = 'HOW_TO'

exports.up = async function(knex) {
    await knex.schema.createTable(STEPS, tbl => {
        tbl.increments()
        tbl.string('title').notNullable()
        tbl.string('description').notNullable()
        tbl.string('image')

        tbl.integer('how_to_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable(HOW_TO)
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
}

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists(STEPS)
}
