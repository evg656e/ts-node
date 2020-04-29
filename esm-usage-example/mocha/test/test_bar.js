import { strictEqual } from 'assert';
import { bar } from '../lib/bar.js';

describe('bar', () => {
    it('bar', () => {
        strictEqual(bar(), 'bar');
    });
});
