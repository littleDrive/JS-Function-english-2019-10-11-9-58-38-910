function countWords(message){
    // wirte your code here
    if (message == "" || message == null) {
        return 0;
    }
    return message.split(" ").length;
  }
