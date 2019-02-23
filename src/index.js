const encodeMsg = document.getElementById("encodeMsg");
const decodeMsg = document.getElementById("decodeMsg");
const desp = document.getElementById("offsetNumber");
const clear = document.getElementById("clear");

encodeMsg.addEventListener('keyup', ()=>{
  const cipherText = encodeMsg.value;
  const arrDecodeMsg = []

  for (let i = 0; i < cipherText.length; i++) {
    const x = cipherText[i];
    const a = parseInt(desp.value);
    cipher.encode(a, x, arrDecodeMsg, 65) //función encode en cipher.js
    cipher.encode(a, x, arrDecodeMsg, 97)
  }
  const stringDecode = arrDecodeMsg.toString() // convirtiendo el array a string
  const newString = stringDecode.replace (/,/g, "") // quitando las comas del string
  console.log(newString)

  decodeMsg.value = newString;
})



decodeMsg.addEventListener('keyup', () => {
  const dcipherText = decodeMsg.value;
  const arrEncodeMsg = []

  for (i=0 ; i<dcipherText.length ; i++) {
    const y = dcipherText[i];
    const b=parseInt(desp.value)
    cipher.decode(b,y, arrEncodeMsg, 65); //función decode en cipher.js
    cipher.decode(b,y, arrEncodeMsg, 97)
  }

  const stringEncode = arrEncodeMsg.toString() // convirtiendo el array a string
  console.log(stringEncode)
  const newStringD = stringEncode.replace (/,/g, "") // quitando las comas del string
  encodeMsg.value = newStringD
})

clear.addEventListener('click', ()=>{
  location.reload();
})