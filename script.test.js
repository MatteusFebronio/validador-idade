/** @jest-environment jsdom */

const { validarIdade } = require("./script")

test('TRUE', function () {
    var resultado = validarIdade('18');
    expect(resultado).toBe(true);
})
test('FALSE', function () {
    var resultado = validarIdade(17);
    expect(resultado).toBe(false);
})