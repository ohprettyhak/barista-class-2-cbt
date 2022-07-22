import fs from 'fs';
import path from 'path';
import _ from 'lodash';

export default function handler(req, res) {
  const problemJsonData = fs.readFileSync(path.join('datas/practice/introduction.json'), 'utf-8');
  const data = JSON.parse(problemJsonData);

  let array = [];
  data.map((it) => array.push({ title: it.title, answer: it.answer }));

  res.status(200).json(_.sortBy(array, 'title'));
}
