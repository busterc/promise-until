import assert from 'assert';
import promiseUntil from '../lib';

describe('promise-until', function () {
  it('should loop 5 times', function (done) {
    let count = 0;
    promiseUntil(() => {
      return count === 5;
    }, () => {
      count++;
    }).then(() => {
      assert(count === 5, 'did not log 5 loops');
      done();
    });
  });

  it('should not loop', function (done) {
    let count = 0;
    promiseUntil(() => {
      return count > -1;
    }, () => {
      count++;
    }).then(() => {
      assert(count === 0, 'should not have executed an action');
      done();
    });
  });
});
