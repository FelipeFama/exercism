class Acronym {
    String phrase;
    
    Acronym(String phrase) {
        this.phrase = phrase;
    }

    String get() {
       String[] words = this.phrase.split("\\s|-|_");
       StringBuffer ac = new StringBuffer();
       for(int i=0; i < words.length; i++) {
           if(words[i].length() == 0) continue;
           Character c = words[i].charAt(0);
           if(Character.isLetter(c)) ac.append(c);
       }
       return ac.toString().toUpperCase();
    }

}
