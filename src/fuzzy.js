import vagueTime from 'vague-time';

export class FuzzyValueConverter {
  toView(value){
    if (value === undefined || value === null || value === '')
      return value;
    if (typeof value === 'string')
      value = Date.parse(value);
    return vagueTime.get({ to: value });
  }
} 

