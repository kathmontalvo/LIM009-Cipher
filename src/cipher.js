window.cipher = {
 encode: (offset,string) => {
    const r= string.charCodeAt();
    if (r > 64 && r < 91){
    const formu = String.fromCharCode((r-65+offset)%26+65);
    decodeMsg.innerHTML+=formu
    }
  },

  decode: (offset,string) => {
    const d = string.charCodeAt()
    if (d > 64 && d < 91){
    const formula = String.fromCharCode((d+65-offset)%26+65);
    encodeMsg.innerHTML+=formula

    }
  }
}