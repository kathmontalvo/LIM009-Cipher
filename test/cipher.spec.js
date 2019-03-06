describe('cipher', () => {
  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {
    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode(33, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'HIJKLMNOPQRSTUVWXYZABCDEFG');
    });
    it('debería retornar "XYZABCDEFGHIJKLMNOPQRSTUVW" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset -29', () => {
      assert.equal(cipher.encode(-29, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'XYZABCDEFGHIJKLMNOPQRSTUVW');
    });
    it('debería retornar "lmnopqrstuvwxyzabcdefghijk" para "abcdefghijklmnopqrstuvwxyz" con offset 37', () => {
      assert.equal(cipher.encode(37, 'abcdefghijklmnopqrstuvwxyz'), 'lmnopqrstuvwxyzabcdefghijk');
    });
    it('debería retornar "xyzabcdefghijklmnopqrstuvw" para "abcdefghijklmnopqrstuvwxyz" con offset -29', () => {
      assert.equal(cipher.encode(-29, 'abcdefghijklmnopqrstuvwxyz')
      , 'xyzabcdefghijklmnopqrstuvw');
    });
    it("debería retornar '7890123456' para '0123456789' con offset 7", () => {
      assert.equal(cipher.encode(7, "0123456789"), "7890123456");
    });
    it("debería retornar '3456789012' para '0123456789' con offset -7", () => {
      assert.equal(cipher.encode(-7, "0123456789"), "3456789012");
    });
    it("debería retornar ' !\"#$%&'()*+,-./0123456789:;<=>?@' para ' !\"#$%&'()*+,-./0123456789:;<=>?@' con offset 30", () => {
      assert.equal(cipher.encode(30, " !\"#$%&'()*+,-./0123456789:;<=>?@"), " !\"#$%&'()*+,-./0123456789:;<=>?@");
    });
  });

  describe('cipher.decode', () => {
    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      assert.equal(cipher.decode(33, 'HIJKLMNOPQRSTUVWXYZABCDEFG'), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    })
    it('debería retornar "DEFGHIJKLMNOPQRSTUVWXYZABC" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset -29', () => {
      assert.equal(cipher.decode(-29, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'DEFGHIJKLMNOPQRSTUVWXYZABC');
    });
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "lmnopqrstuvwxyzabcdefghijk" con offset 37', () => {
      assert.equal(cipher.decode(37, 'lmnopqrstuvwxyzabcdefghijk'), 'abcdefghijklmnopqrstuvwxyz');
    });
    it('debería retornar "defghijklmnopqrstuvwxyzabc" para "abcdefghijklmnopqrstuvwxyz" con offset -29', () => {
      assert.equal(cipher.decode(-29, 'abcdefghijklmnopqrstuvwxyz'), 'defghijklmnopqrstuvwxyzabc');
    });
    it('debería retornar "1234567890" para "0123456789" con offset 9', () => {
      assert.equal(cipher.decode(9, '0123456789'), '1234567890');
    });
      it('debería retornar "9012345678" para "0123456789" con offset -9', () => {
      assert.equal(cipher.decode(-9, '0123456789'), '9012345678');
    });
    it("debería retornar ' !\"#$%&'()*+,-./0123456789:;<=>?@' para ' !\"#$%&'()*+,-./0123456789:;<=>?@' con offset 30", () => {
      assert.equal(cipher.decode(30, " !\"#$%&'()*+,-./0123456789:;<=>?@"), " !\"#$%&'()*+,-./0123456789:;<=>?@");
    });
  });
});
