const sut = require('./index')

test('write your first test', () => {
    const result  = sut.method(null, null);

    expect(result).toStrictEqual([]);
});