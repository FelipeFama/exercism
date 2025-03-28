class ArmstrongNumbers {

    boolean isArmstrongNumber(int numberToCheck) {
        String digits = String.valueOf(numberToCheck);
        int numOfDigits = digits.length();
        int sum = 0;

        for(int i = 0; i < numOfDigits; i++) {
            int digit = Character.getNumericValue(digits.charAt(i));
            sum += Math.pow(digit,numOfDigits);
        }
        
        return numberToCheck == sum;
    }

}
