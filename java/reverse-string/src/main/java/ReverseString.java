class ReverseString {

    String reverse(String inputString) {
        return (inputString == "") ? "" : reverse(inputString.substring(1)) + inputString.charAt(0);
    }
  
}
