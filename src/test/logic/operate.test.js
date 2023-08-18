import operate from '../../logic/operate';

describe('operate', () => {
  let obj;
  it('should sum the two numbers given', () => {
    obj = {
      total: '5',
      next: '10',
      operation: '+',
    };
    expect(operate(obj.total, obj.next, obj.operation)).toEqual('15');
  });

  it('should return the rest of the two numbers given', () => {
    obj = {
      total: '5',
      next: '10',
      operation: '-',
    };
    expect(operate(obj.total, obj.next, obj.operation)).toEqual('-5');
  });

  it('should return the two numbers multiplyed', () => {
    obj = {
      total: '5',
      next: '10',
      operation: 'x',
    };
    expect(operate(obj.total, obj.next, obj.operation)).toEqual('50');
  });

  it('should return the factor of the given numbers', () => {
    obj = {
      total: '5',
      next: '10',
      operation: '÷',
    };
    expect(operate(obj.total, obj.next, obj.operation)).toEqual('0.5');
  });

  it('should return the modulo result', () => {
    obj = {
      total: '10',
      next: '3',
      operation: '%',
    };
    expect(operate(obj.total, obj.next, obj.operation)).toEqual('1');
  });
});
