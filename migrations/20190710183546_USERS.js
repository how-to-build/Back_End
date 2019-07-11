const USERS = 'USERS'

exports.up = async function(knex) {
    knex.schema.createTable(USERS, tbl => {
        tbl.increments()
        tbl.string('first_name').notNullable()
        tbl.string('last_name').notNullable()
        tbl.string('email')
            .notNullable()
            .unique()
        tbl.string('username')
            .notNullable()
            .unique()
        tbl.string('password').notNullable()
        tbl.string('role')
            .notNullable()
            .defaultTo('general_user')
        tbl.string('avatar').notNullable().defaultTo('default')
    })
}

exports.down = async function(knex) {
    knex.schema.dropTableIfExists(USERS)
}
