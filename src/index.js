const encodeMsg = document.getElementById("encodeMsg");
const decodeMsg = document.getElementById("decodeMsg");
const desp = document.getElementById("offsetNumber");
// const btn = document.getElementById("btn");

encodeMsg.addEventListener('keyup', ()=>{
    const cipherText = encodeMsg.value; 
    for ( i = 0; i < cipherText.length; i++) {
    const x = cipherText[i];
    a=desp.value
    cipher.encode(a,x) //función en cipher.js
    }
})

decodeMsg.addEventListener('keyup', ()=>{
    const dcipherText = decodeMsg.value;
    for (i=0 ; i<dcipherText.length ; i++){
    const y = dcipherText[i];
    a=desp.value
    cipher.decode(a,y) 
    }
})
