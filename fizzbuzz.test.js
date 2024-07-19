function fizzbuzz(number) {
    if (typeof number != 'number') {
        throw new Error('the parameter is not valid');
    }

    if(number % 3 === 0 && number % 5 === 0) return 'fizzbuzz'
    if(number == 1) return 1
    if(number % 3 === 0) return 'fizz'
    if(number % 5 === 0) return 'buzz'
    if(number % 7 === 0) return 'woff'
    
}

describe('fizzbuzz', () => {
    test('should be a function', () => {
        expect(typeof fizzbuzz).toBe('function');
    });

    test('need a paramenter number', () => {
        expect(() => fizzbuzz('number')).toThrow('the parameter is not valid')
    });

    test('if parameter is one need to return 1', ()=> {
        expect(fizzbuzz(1)).toBe(1);
    });

    test('need to return buzz when paramenter is multiplo of 5', ()=> {
        expect(fizzbuzz(10)).toBe('buzz');
        expect(fizzbuzz(50)).toBe('buzz');
        expect(fizzbuzz(100)).toBe('buzz');
    });

    test('need to return fizz when paramenter is multiplo of 3', ()=> {
        expect(fizzbuzz(9)).toBe('fizz');
        expect(fizzbuzz(27)).toBe('fizz');
        expect(fizzbuzz(18)).toBe('fizz');
    });

    test('need to return fizzbuzz if the parameter is multiplo of 3 and 5', () => {
        expect(fizzbuzz(45)).toBe('fizzbuzz');
    });

    test('need to return woff if the parameter is 7', () => {
        expect(fizzbuzz(7)).toBe('woff');
    });


});