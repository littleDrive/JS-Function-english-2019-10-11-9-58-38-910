
function reverseString(message){
    // wirte your code here
    if (message.length <= 0) {
        return "";
    }
    let s = [];
    for (let i = message.length - 1; i >= 0; i --) {
        s.push(message[i]);
    }
    return s.join("");
  }
  
function palindrome(message){
    // wirte your code here
    if (message == reverseString(message)) {
        return true;
    } else {
        return false;
    }
  }
