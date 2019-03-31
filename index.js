const empty = '';

const parse = v => {
    if(typeof(v) === 'string'){
        return v;
    } else if(typeof(v) === 'number'){
        return isNaN(v) ? empty : v.toString();
    } else if(!v){
        return empty;
    } else {
        return v.toString();
    }
};

const trim = v => parse(v).replace(/^\s+|\s+$/g, '');

module.exports = {
    empty, parse, trim,
};