const KEY_POINTS = 'KEY_POINTS'
const STEPS = 'STEPS'

exports.up = async function(knex) {
    await knex.schema.createTable(KEY_POINTS, tbl => {
        tbl.increments()
        tbl.string('description').notNullable()
        tbl.integer('step_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable(STEPS)
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
}

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists(KEY_POINTS)
}
