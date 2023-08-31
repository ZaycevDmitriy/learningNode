const textToBuffer = (text: string, encoding: BufferEncoding) =>
  Buffer.from(text, encoding);

const bufferToText = (buffer: Buffer, encoding: BufferEncoding) =>
  buffer.toString(encoding);

const text = 'Привет мир!';
const utf8Buffer = textToBuffer(text, 'utf8');
console.log(utf8Buffer);

const decodedText = bufferToText(utf8Buffer, 'utf8');
console.log(decodedText);
