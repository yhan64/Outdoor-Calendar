import knext from 'knex'

export async function up(knex) {
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

    await knex.schema.createTable('activities', (t) => {
        t.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
        t.timestamp('created_at').defaultTo(knex.raw('now()'));
        t.date('start_date');
        t.date('end_date');
        t.integer('duration');
        t.string('meet_at');
        t.string('dismiss_at');
        t.string('destination');
        t.string('type');
    })

    return Promise.resolve();
}

export async function down(knex) {
    await knex.schema.dropTable('activities');
    return Promise.resolve();
}
