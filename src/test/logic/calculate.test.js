import calculate from '../../logic/calculate';

describe('Calculate', () => {
  let calculatorObject;
  beforeEach(() => {
    calculatorObject = {
      total: null,
      next: null,
      operation: null,
    };
  });

  it('should return the calculator object reseted when pressing AC', () => {
    calculatorObject = {
      total: 300,
      next: null,
      operation: null,
    };

    expect(calculate(calculatorObject, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('should concatenate the number to next property when buttonName is a number', () => {
    calculatorObject = {
      total: null,
      next: '5',
      operation: null,
    };

    expect(calculate(calculatorObject, '5')).toEqual({
      total: null,
      next: '55',
    });
  });

  it('should update next property when buttonName is a number and operation already exists', () => {
    calculatorObject = {
      total: '10',
      next: '5',
      operation: '+',
    };

    expect(calculate(calculatorObject, '5')).toEqual({
      total: '10',
      operation: '+',
      next: '55',
    });
  });

  it('should update total and operation propertys when buttonName is an operator', () => {
    calculatorObject = {
      total: null,
      next: '55',
      operation: null,
    };

    expect(calculate(calculatorObject, '-')).toEqual({
      total: '55',
      operation: '-',
      next: null,
    });
  });

  it('should update next property with "0." when buttonName is "." and next is null', () => {
    calculatorObject = {
      total: null,
      next: null,
      operation: null,
    };

    expect(calculate(calculatorObject, '.')).toEqual({
      total: null,
      next: '0.',
      operation: null,
    });
  });

  it('should update next property with "[next]." when buttonName is "." and next is not null', () => {
    calculatorObject = {
      total: null,
      next: '53',
      operation: null,
    };

    expect(calculate(calculatorObject, '.')).toEqual({
      total: null,
      next: '53.',
      operation: null,
    });
  });

  it('should call the operate function when pressing "="', () => {
    calculatorObject = {
      total: '20',
      next: '53',
      operation: '+',
    };

    expect(calculate(calculatorObject, '=')).toEqual({
      total: '73',
      next: null,
      operation: null,
    });
  });
});
