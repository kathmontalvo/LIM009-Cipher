const encodeMsg = document.getElementById("encodeMsg");
const decodeMsg = document.getElementById("decodeMsg");
const desp = document.getElementById("offsetNumber");
// const btn = document.getElementById("btn");

encodeMsg.addEventListener('keyup', ()=>{
  const cipherText = encodeMsg.value;
  const arrDecodeMsg = []

  for (i = 0; i < cipherText.length; i++) {
    const x = cipherText[i];
    const a = parseInt(desp.value);
    cipher.encode(a, x, arrDecodeMsg) //función encode en cipher.js
  }
  const stringDecode = arrDecodeMsg.toString() // convirtiendo el array a string
  console.log(stringDecode)
  const newString = stringDecode.replace (/,/g, "") // quitando las comas del string
  decodeMsg.value = decodeMsg.defaultValue
  decodeMsg.innerHTML = newString
})



decodeMsg.addEventListener('keyup', ()=>{
    const dcipherText = decodeMsg.value;
    const arrEncodeMsg = []

    for (i=0 ; i<dcipherText.length ; i++){
    const y = dcipherText[i];
    const b=parseInt(desp.value)
    cipher.decode(b,y, arrEncodeMsg) //función decode en cipher.js
    }
    const stringEncode = arrEncodeMsg.toString() // convirtiendo el array a string
  console.log(stringEncode)
  const newStringD = stringEncode.replace (/,/g, "") // quitando las comas del string
  encodeMsg.value = encodeMsg.defaultValue
  encodeMsg.innerHTML = newStringD
})
