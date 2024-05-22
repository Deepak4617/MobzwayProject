function stringToBase64(str) {
    const buffer = Buffer.from(str, 'utf8');
    
    return buffer.toString('base64');
  }
  
  const inputString = "Hello, World!";
  const base64String = stringToBase64(inputString);
  
  console.log(`Original string: ${inputString}`);
  console.log(`Base64 encoded string: ${base64String}`);
  