import 'jest';
import WordWrapper from '../src/word-wrapper';

describe('Test word wrap', ()=> {
  test('Should get \"\" when given words \"\" and column number 0', () => {
    const wordWrapper = new WordWrapper('', 0);
    const res = wordWrapper.wrap();
    expect(res).toEqual('');
  });

  test('Should get \"word\" when given words \"word\" and column number 6', () => {
    const wordWrapper = new WordWrapper('word', 6);
    const res = wordWrapper.wrap();
    expect(res).toEqual('word');
  });

  test('Should get \"word\nword\" when given words \"word word\" and column number 6', () => {
    const wordWrapper = new WordWrapper('word word', 6);
    const res = wordWrapper.wrap();
    expect(res).toEqual('word\nword');
  });

  test('Should get \"word\nword\nword\" when given words \"word word word\" and column number 6', () => {
    const wordWrapper = new WordWrapper('word word word', 6);
    const res = wordWrapper.wrap();
    expect(res).toEqual('word\nword\nword');
  });


  test('Should get \"hello\nworld" when given words \"hello world\" and column number 6', () => {
    const wordWrapper = new WordWrapper('hello world', 6);
    const res = wordWrapper.wrap();
    expect(res).toEqual('hello\nworld');
  });});
