const encodeMsg = document.getElementById("encodeMsg");
const decodeMsg = document.getElementById("decodeMsg");
const desp = document.getElementById("offsetNumber");
const btn = document.getElementById("btn");

btn.addEventListener('click', ()=>{
    const cipherText = encodeMsg.value; 
    for ( i = 0; i < cipherText.length; i++) {
    const x = cipherText[i];
    const a = parseInt(desp.value);
    const r= x.charCodeAt();
    if (r > 64 && r < 91){
    const formu = String.fromCharCode((r-65+a)%26+65);
    decodeMsg.innerHTML+=formu
    }
}
})