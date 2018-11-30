describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', ()=>{
      assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"HIJKLMNOPQRSTUVWXYZABCDEFG");
    });
    it('debería retornar espacio " " al ingresar un " " con offset 50', ()=>{
      assert.equal(cipher.encode(50," ")," ");
    });
    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', ()=>{
      assert.equal(cipher.encode(33,"abcdefghijklmnopqrstuvwxyz"),"hijklmnopqrstuvwxyzabcdefg");
    });
    it('debería retornar "HiJkLmNoPqRsTuVwXyZaBcDeFg" para "AbCdEfGhIjKlMnOpQrStUvWxYz" con offset 33', ()=>{
      assert.equal(cipher.encode(33,"AbCdEfGhIjKlMnOpQrStUvWxYz"),"HiJkLmNoPqRsTuVwXyZaBcDeFg");
    });
     
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33',()=>{
      assert.equal(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"),"ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });

    it('debería retornar espacio " " al ingresar un " " con offset 50', ()=>{
      assert.equal(cipher.decode(50," ")," ");
    });

    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33', ()=>{
      assert.equal(cipher.decode(33,"hijklmnopqrstuvwxyzabcdefg"),"abcdefghijklmnopqrstuvwxyz");
    });

    it('debería retornar "AbCdEfGhIjKlMnOpQrStUvWxYz" para "HiJkLmNoPqRsTuVwXyZaBcDeFg" con offset 33', ()=>{
      assert.equal(cipher.decode(33,"HiJkLmNoPqRsTuVwXyZaBcDeFg"),"AbCdEfGhIjKlMnOpQrStUvWxYz");
    });
  });


/*  describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado');

  });*/

});

describe('cipherSpecial', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipherSpecial, 'object');
  });

  describe('cipherSpecial.encodeSpecial', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipherSpecial.encodeSpecial, 'function');
    });
    it('debería retornar "bcdefghijklmnopqrstuvwxyz{" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', ()=>{
      assert.equal(cipherSpecial.encodeSpecial(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"bcdefghijklmnopqrstuvwxyz{");
    });
    it('debería retornar espacio "R" al ingresar un " " con offset 50', ()=>{
      assert.equal(cipherSpecial.encodeSpecial(50," "),"R");
    });
    it('debería retornar "" para "abcdefghijklmnopqrstuvwxyz" con offset 33', ()=>{
      assert.equal(cipherSpecial.encodeSpecial(33,"abcdefghijklmnopqrstuvwxyz"),"");
    });
    it('debería retornar "bdfhjlnprtvxz" para "AbCdEfGhIjKlMnOpQrStUvWxYz" con offset 33', ()=>{
      assert.equal(cipherSpecial.encodeSpecial(33,"AbCdEfGhIjKlMnOpQrStUvWxYz"),"bdfhjlnprtvxz");
    });
    it('debería retornar "ĂĊĎĔě" para "áéíóú" con offset 33', ()=>{
      assert.equal(cipherSpecial.encodeSpecial(33,"áéíóú"),"ĂĊĎĔě");
    });
    it('debería retornar "bcdefghijk" para "0123456789" con offset 50', ()=>{
      assert.equal(cipherSpecial.encodeSpecial(50,"0123456789"),"bcdefghijk");
    });
    it('debería retornar "2" para "丠" con offset 50', ()=>{
      assert.equal(cipherSpecial.encodeSpecial(50,"丠"),"2");
    });
  });
  describe('cipherSpecial.decodeSpecial', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipherSpecial.decodeSpecial, 'function');
    });
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "bcdefghijklmnopqrstuvwxyz{" con offset 33', ()=>{
      assert.equal(cipherSpecial.decodeSpecial(33,"bcdefghijklmnopqrstuvwxyz{"),"ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });
    it('debería retornar espacio " " al ingresar un "R" con offset 50', ()=>{
      assert.equal(cipherSpecial.decodeSpecial(50,"R")," ");
    });
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "" con offset 33', ()=>{
      assert.equal(cipherSpecial.decodeSpecial(33,""),"abcdefghijklmnopqrstuvwxyz");
    });
    it('debería retornar "AbCdEfGhIjKlMnOpQrStUvWxYz" para "bdfhjlnprtvxz" con offset 33', ()=>{
      assert.equal(cipherSpecial.decodeSpecial(33,"bdfhjlnprtvxz"),"AbCdEfGhIjKlMnOpQrStUvWxYz");
    });
    it('debería retornar "áéíóú" para "ĂĊĎĔě" con offset 33', ()=>{
      assert.equal(cipherSpecial.decodeSpecial(33,"ĂĊĎĔě"),"áéíóú");
    });
    it('debería retornar "0123456789" para "bcdefghijk" con offset 50', ()=>{
      assert.equal(cipherSpecial.decodeSpecial(50,"bcdefghijk"),"0123456789");
    });
    it('debería retornar "丠" para "2" con offset 50', ()=>{
      assert.equal(cipherSpecial.decodeSpecial(50,"2"),"丠");
    });
  });

});