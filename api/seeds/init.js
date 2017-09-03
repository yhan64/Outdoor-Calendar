import moment from 'moment';

exports.seed = async function(knex) {
  for (let i = -5; i < 10; ++i) {
    const act = {
      duration: 5,
      start_date: moment(new Date()).add(i, 'days'),
      end_date: moment(new Date()).add(i + 5, 'days'),
      type: 'hiking'
    }
    await knex('events').insert(act).then();
  }
  return Promise.resolve();
};
