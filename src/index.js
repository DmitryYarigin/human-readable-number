module.exports = function toReadable (number) {

// function toReadable (number) {

  let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  function convert_hundreds(num) {
    if (num > 99) {
      if(convert_tens(num % 100) == ""){
        return ones[Math.floor(num / 100)] + " hundred";
      }
      return ones[Math.floor(num / 100)] + " hundred " + convert_tens(num % 100);
    }  else {
      return convert_tens(num);
    }
  }

  function convert_tens(num) {
    if (num < 10) return ones[num];
    else if (num >= 10 && num < 20) return teens[num - 10];
    else if(ones[num % 10] == "") {
      return `${tens[Math.floor(num / 10)]}`;
    }
    else {
      return `${tens[Math.floor(num / 10)]} ${ones[num % 10]}`;
    }
  }

  function convert (num) {
    if (num == 0) return "zero";
    else return convert_hundreds(num);
  }

  return convert(number);
}

// console.log(toReadable(496));
