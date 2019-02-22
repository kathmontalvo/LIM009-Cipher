window.cipher = {
 encode: (offset,string, arr) => {
    const r= string.charCodeAt();
  
    if (r > 64 && r < 91){
      const formulaC = String.fromCharCode((r-65+offset)%26+65);
      arr.push(formulaC)
    }
  },

  
  decode: (offset,string, arr) => {
    const d = string.charCodeAt()
    
    if (d > 64 && d < 91){
    const formulaD = String.fromCharCode((d+65-offset)%26+65);
    arr.push(formulaD)


    }
  } 
}