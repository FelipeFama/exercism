class SqueakyClean {
    static String clean(String identifier) {
       
       StringBuilder cleaned = new StringBuilder();
       boolean capitalizeNext = false;
       
       for(int i = 0; i < identifier.length(); i++) {
            char c = identifier.charAt(i);
            if(Character.isWhitespace(c)) {
                cleaned.append('_');
            } else if(c == '-') {
                capitalizeNext = true;
            } else if(capitalizeNext) {
                cleaned.append(Character.toUpperCase(c));
                capitalizeNext = false;
            } else if(Character.isDigit(c)){
                switch(c) {
                    case '4': 
                        cleaned.append('a'); 
                        break;
                    case '3': 
                        cleaned.append('e'); 
                        break;
                    case '0': 
                        cleaned.append('o'); 
                        break;
                    case '1': 
                        cleaned.append('l'); 
                        break;
                    case '7': 
                        cleaned.append('t'); 
                        break;
                }
            } else if(Character.isLetter(c) || c == '_') {
                cleaned.append(c);
            } 
        }
        return cleaned.toString();
    }
}
