window.cipher = {
 encode: (offset,string, arr) => {
    const r= string.charCodeAt();
  
    if (r > 64 && r < 91){
      const formulaC = String.fromCharCode((r-65+offset)%26+65);
      
      arr.concat(formulaC)
    }
  },

  
  decode: (offset,string) => {
    const valord = string.charCodeAt()
    if (valord > 64 && valord < 91){
    const formulaD = String.fromCharCode((valord+65-offset)%26+65);
    encodeMsg.innerHTML+=formulaD

    }
  } 
}