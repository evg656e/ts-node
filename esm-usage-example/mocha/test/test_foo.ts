import { strictEqual } from 'assert';
import { foo } from '../lib/foo';

describe('foo', () => {
    it('foo', () => {
        strictEqual(foo(), 'foo');
    });
});
