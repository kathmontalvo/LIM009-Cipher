window.cipher = {
 encode: (offset,string, arr, inic) => {
    const r= string.charCodeAt();
  
    if (r >= inic && r <= inic+25){
      const formulaC = String.fromCharCode((r-inic+offset)%26+inic);
      arr.push(formulaC)
    }
  },

  
  decode: (offset,string, arr, inic) => {
    const d = string.charCodeAt()
    
    if (d >= inic && d <=inic+25 && inic==65){
    const formulaD = String.fromCharCode((d+inic-offset)%26+ inic);
    arr.push(formulaD)
    }  else if (d >= inic && d <=inic+25 && inic==97){
      const formulaD = String.fromCharCode((d+(inic-65+1)-offset)% 26 + inic);
      arr.push(formulaD)
      } 
  }
}