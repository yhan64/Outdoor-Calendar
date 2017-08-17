import db from './db';
import express from 'express';
import bodyParser from 'body-parser';

const app = express()
  .use(bodyParser.json());

const routes = {
  postActivity: '/post',
  getActivities: '/getAll'
}

app.post(routes.postActivity, async function (req, res) {
  // res.send('Hello World!')
  // {duration: 5, start_date: '2017-9-10', end_date: '2017-9-15'}
  console.log('--------------> req.body -------------->')
  console.log(req.body);
  let ans = 'init';
  // db('activities').insert(req.body)
  // .then()
  // .then(ans = 'succeeded')  //the two assignment would work, so the fianl value of ans is always failed
  // .catch(ans = 'failed');
  await db('activities').insert(req.body)
  .then()
  .then(function (data) {
    ans = 'succeeded';
  })
  .catch(function (data) {
    ans = 'failed';
  });
  res
  .status(200)
  .send(ans)
})

app.get(routes.getActivities, async function(req, res) {
  res.send('Hello world');
})

app.listen(process.env.API_PORT, function () {
  console.log('Example app listening on port', process.env.API_PORT)
})