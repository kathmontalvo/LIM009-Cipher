describe('cipher', () => {
  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {
    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      const abc = cipher.encode(33, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
      assert.equal(abc, 'HIJKLMNOPQRSTUVWXYZABCDEFG');
    });
    it('debería retornar "XYZABCDEFGHIJKLMNOPQRSTUVW" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset -29', () => {
      const xyz = cipher.encode(-29, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
      assert.equal(xyz, 'XYZABCDEFGHIJKLMNOPQRSTUVW');
    });
    it('debería retornar "lmnopqrstuvwxyzabcdefghijk" para "abcdefghijklmnopqrstuvwxyz" con offset 37', () => {
      const def = cipher.encode(37, 'abcdefghijklmnopqrstuvwxyz');
      assert.equal(def, 'lmnopqrstuvwxyzabcdefghijk');
    });
    it('debería retornar "xyzabcdefghijklmnopqrstuvw" para "abcdefghijklmnopqrstuvwxyz" con offset -29', () => {
      const uvw = cipher.encode(-29, 'abcdefghijklmnopqrstuvwxyz');
      assert.equal(uvw, 'xyzabcdefghijklmnopqrstuvw');
    });
    it("debería retornar '7890123456' para '0123456789' con offset 7", () => {
      const rst = cipher.encode(7, "0123456789");
      assert.equal(rst, "7890123456");
    });
    it("debería retornar '3456789012' para '0123456789' con offset -7", () => {
      const opq = cipher.encode(-7, "0123456789");
      assert.equal(opq, "3456789012");
    });
    it("debería retornar ' !\"#$%&'()*+,-./0123456789:;<=>?@' para ' !\"#$%&'()*+,-./0123456789:;<=>?@' con offset 30", () => {
      const jkl = cipher.encode(30, " !\"#$%&'()*+,-./0123456789:;<=>?@");
      assert.equal(jkl, " !\"#$%&'()*+,-./0123456789:;<=>?@");
    });
  });

  describe('cipher.decode', () => {
    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      const abc = cipher.decode(33, 'HIJKLMNOPQRSTUVWXYZABCDEFG');
      assert.equal(abc, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    })
    it('debería retornar "DEFGHIJKLMNOPQRSTUVWXYZABC" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset -29', () => {
      const xyz = cipher.decode(-29, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
      assert.equal(xyz, 'DEFGHIJKLMNOPQRSTUVWXYZABC');
    });
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "lmnopqrstuvwxyzabcdefghijk" con offset 37', () => {
      const def = cipher.decode(37, 'lmnopqrstuvwxyzabcdefghijk');
      assert.equal(def, 'abcdefghijklmnopqrstuvwxyz');
    });
    it('debería retornar "defghijklmnopqrstuvwxyzabc" para "abcdefghijklmnopqrstuvwxyz" con offset -29', () => {
      const uvw = cipher.decode(-29, 'abcdefghijklmnopqrstuvwxyz');
      assert.equal(uvw, 'defghijklmnopqrstuvwxyzabc');
    });
    it('debería retornar "1234567890" para "0123456789" con offset 9', () => {
      const opq = cipher.decode(9, '0123456789');
      assert.equal(opq, '1234567890');
    });
      it('debería retornar "9012345678" para "0123456789" con offset -9', () => {
      const rst = cipher.decode(-9, '0123456789');
      assert.equal(rst, '9012345678');
    });
    it("debería retornar ' !\"#$%&'()*+,-./0123456789:;<=>?@' para ' !\"#$%&'()*+,-./0123456789:;<=>?@' con offset 30", () => {
      const jkl = cipher.decode(30, " !\"#$%&'()*+,-./0123456789:;<=>?@");
      assert.equal(jkl, " !\"#$%&'()*+,-./0123456789:;<=>?@");
    });
  });
});
