export function returnFirstNumber(str: string): string {
  let theNumber: string = '';
  let index = 1;

  while (index < str.length) {
    const subStr = str.slice(0, index);
    const stringAsDigit = /\d/.exec(subStr)?.[0];
    if (stringAsDigit) {
      theNumber = stringAsDigit;
      break;
    }

    const numberFromString = decodeNumberFromString(subStr);
    if (numberFromString) {
      theNumber = numberFromString;
      break;
    }
    index++;
  }

  if (!theNumber) {
    console.log('didnt find number in ', str);
  }
  return theNumber;
}

export function returnLastNumber(str: string): string {
  const reversedString = str.split('').reverse().join('');
  let theNumber: string = '';
  let index = 1;

  while (index < str.length) {
    const subStr = reversedString.slice(0, index);
    const stringAsDigit = /\d/.exec(subStr)?.[0];
    if (stringAsDigit) {
      theNumber = stringAsDigit;
      break;
    }

    const numberFromString = decodeNumberFromStringReversed(subStr);
    if (numberFromString) {
      theNumber = numberFromString;
      break;
    }
    index++;
  }

  if (!theNumber) {
    console.log('didnt find number in ', reversedString);
  }
  return theNumber;
}

export function decodeNumberFromString(str: string): string | null {
  if (str.search('one') >= 0) {
    return '1';
  }
  if (str.search('two') >= 0) {
    return '2';
  }
  if (str.search('three') >= 0) {
    return '3';
  }
  if (str.search('four') >= 0) {
    return '4';
  }
  if (str.search('five') >= 0) {
    return '5';
  }
  if (str.search('six') >= 0) {
    return '6';
  }
  if (str.search('seven') >= 0) {
    return '7';
  }
  if (str.search('eight') >= 0) {
    return '8';
  }
  if (str.search('nine') >= 0) {
    return '9';
  }
  return null;
}

export function decodeNumberFromStringReversed(str: string): string | null {
  if (str.search('one'.split('').reverse().join('')) >= 0) {
    return '1';
  }
  if (str.search('two'.split('').reverse().join('')) >= 0) {
    return '2';
  }
  if (str.search('three'.split('').reverse().join('')) >= 0) {
    return '3';
  }
  if (str.search('four'.split('').reverse().join('')) >= 0) {
    return '4';
  }
  if (str.search('five'.split('').reverse().join('')) >= 0) {
    return '5';
  }
  if (str.search('six'.split('').reverse().join('')) >= 0) {
    return '6';
  }
  if (str.search('seven'.split('').reverse().join('')) >= 0) {
    return '7';
  }
  if (str.search('eight'.split('').reverse().join('')) >= 0) {
    return '8';
  }
  if (str.search('nine'.split('').reverse().join('')) >= 0) {
    return '9';
  }
  return null;
}
