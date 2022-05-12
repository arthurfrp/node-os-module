var os = require('os');

funtion os(){

// OS Type
console.log('type : ' + os.type());

// Total System Memory
console.log('Total Memory : ' + os.totalmem() /  1024 + ' mbytes');

// Total Free Memory
console.log('Free Memory : ' + os.freemem() / 1024 + ' bytes');

// Endianness
console.log('Endianness : ' + os.endianness());

// OS Platform
console.log('Platform : ' + os.platform());

}

export.os
