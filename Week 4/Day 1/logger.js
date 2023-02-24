var url = 'http:/mylogger.io/log';

function log(message){
    console.log(message);
}

// Making A Module Public So That It Can Be Accessible To Another Module

module.exports.log = log;