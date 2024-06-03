#!/usr/bin/env node
import fs from 'fs/promises';

const cmp = (first, second) => first.toLowerCase() === second.toLowerCase();

const pageType = (() => {
  switch (process.argv[2]) {
    case 'h':
      return 'home';
    case 'c':
      return 'collection';
    case 'p':
      return 'pdp';
    case 's':
      return 'search';
    default:
      'home';
  }
})();

const vitalsList = JSON.parse(
  await fs.readFile(
    process.cwd() + '/data/webVitals/' + pageType + '.json',
    'utf-8',
  ),
);

const metricList = vitalsList.map((vitals) =>
  vitals.find((metric) => cmp(metric.name, process.argv[3])),
);

switch (process.argv[3]) {
  default: {
    console.log(metricList.map((metric) => metric.value));
    break;
  }
}
