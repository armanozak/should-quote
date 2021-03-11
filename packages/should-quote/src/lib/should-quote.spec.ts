import { shouldQuote } from './should-quote';

describe('shouldQuote', () => {
  it('should work', () => {
    expect(shouldQuote()).toEqual('should-quote');
  });
});
