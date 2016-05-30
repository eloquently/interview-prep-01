export const countWhile = () => {
    let str = '';
    
    let i = 1;
    
    while(i <= 100) {
        str = `${str}${i}\n`;
        i++;
    }
    
    return str;
};

export const countFor = () => {
    let str = '';
    
    for(let i = 1; i <= 100; i++) {
        str = `${str}${i}\n`;
    }
    
    return str;
};

export const countOdds = () => {
    let str = '';
    
    for(let i = 1; i <= 100; i++) {
        let odd = '';
        if(i % 2 == 1) odd = ' - odd';
        str = `${str}${i}${odd}\n`;
    }
    
    return str;
};

export const fizzBuzz = () => {
    let str = '';
    
    for(let i = 1; i <= 100; i++) {
        let num = '';
        if(i % 3 == 0) num += 'fizz';
        if(i % 5 == 0) num += 'buzz';
        if(num == '') num = i;
        str += `${num}\n`;
    }
    
    return str;
};