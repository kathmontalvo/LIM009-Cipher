describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });
  describe('cipher.encode', () => {
    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () =>{
      const arrayTry = []
      cipher.encode(33, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', arrayTry);
      const stringDecode = arrayTry.toString() // convirtiendo el array a string
      const newString = stringDecode.replace(/,/g, "");
      assert.equal(newString, 'HIJKLMNOPQRSTUVWXYZABCDEFG');
    });
  });

  describe('cipher.decode', () => {
    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', ()=>{
        const arrayTrying = []
        cipher.decode(33, 'HIJKLMNOPQRSTUVWXYZABCDEFG', arrayTrying);
        const stringDecoded = arrayTrying.toString() // convirtiendo el array a string
        const newStringB = stringDecoded.replace(/,/g, "");
        assert.equal(newStringB, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    })
  });

});
