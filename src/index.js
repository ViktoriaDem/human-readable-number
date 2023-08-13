module.exports = function toReadable (number) {
  let result = '';
  let arr_num = number.toString().split('');
  let arr_length = arr_num.length;
  if (arr_length == 3) {
    result += getNumber(arr_num[0]) + ' hundred ';
    result += getDes(arr_num[1], arr_num[2]);
    if(arr_num[1]!=='1') {
      result += getNumber(arr_num[2]);
    }
  } 
  else if(arr_length === 2) {
    result += getDes(arr_num[0], arr_num[1]);
    if(arr_num[0]!=='1') {
      result += getNumber(arr_num[1]);
    }
  } else {
    if(arr_num[0] === '0') {
      result += 'zero';
    } else {
      result += getNumber(arr_num[0]);
    }
  }
  return result.trim();
}

function getNumber(num) {
  let result = '';
  switch (num) {
    case '1':
      result = 'one';
      break;
    case '2':
      result = 'two';
      break;
    case '3':
      result = 'three';
      break;
    case '4':
      result = 'four';
      break;
    case '5':
      result = 'five';
      break;
    case '6':
      result = 'six';
      break;
    case '7':
      result = 'seven';
      break;
    case '8':
      result = 'eight';
      break;
    case '9':
      result = 'nine';
      break;
  }
  return result;
}

function getDes(num1, num2) {
  let result = '';
  switch (num1) {
    case '1':
      switch (num2) {
        case '0':
          result += 'ten ';
          break;
        case '1':
          result += 'eleven ';
          break;
        case '2':
          result += 'twelve ';
          break;
        case '3':
          result += 'thirteen ';
          break;
        case '5':
          result += 'fifteen ';
          break;
        case '8':
          result += 'eighteen';
          break;
        default:
          result += getNumber(num2) + 'teen ';
          break;
      }
      break;
    case '2':
      result += 'twenty ';
      break;
    case '3':
      result += 'thirty ';
      break;
    case '4':
      result += 'forty ';
      break;
    case '5':
      result += 'fifty ';
      break;
    case '8':
      result += 'eighty ';
      break;
    case '0':
      result += '';
      break;
    default:
      result += getNumber(num1) + 'ty ';
      break;
  }
  return result;
}
