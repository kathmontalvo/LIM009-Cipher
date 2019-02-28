describe('cipher', () => {
  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });
   
  describe('cipher.encode', () => {
    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () =>{
      const abc = cipher.encode(33, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
      assert.equal(abc, 'HIJKLMNOPQRSTUVWXYZABCDEFG');
    });
    it('debería retornar "lmnopqrstuvwxyzabcdefghijk" para "abcdefghijklmnopqrstuvwxyz" con offset 37', () =>{
      const def = cipher.encode(37, 'abcdefghijklmnopqrstuvwxyz');
      assert.equal(def, 'lmnopqrstuvwxyzabcdefghijk');
    });
    it('debería retornar " " para " " con offset 37', () =>{
      const ghi = cipher.encode(37, ' ');
      assert.equal(ghi, ' ');
    });
  });

  describe('cipher.decode', () => {
    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', ()=>{
        const abc = cipher.decode(33, 'HIJKLMNOPQRSTUVWXYZABCDEFG');
        assert.equal(abc, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    })
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "lmnopqrstuvwxyzabcdefghijk" con offset 37', () =>{
      const def = cipher.decode(37, 'lmnopqrstuvwxyzabcdefghijk');
      assert.equal(def, 'abcdefghijklmnopqrstuvwxyz');
    });
    it('debería retornar " " para " " con offset 37', () =>{
      const ghi = cipher.decode(37, ' ');
     assert.equal(ghi, ' ');
    });
  });
});
