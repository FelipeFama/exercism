class Fighter {

    boolean isVulnerable() {
        return true;
    }

    int getDamagePoints(Fighter opponent) {
        return 1;
    }

    public String toString() {
        return "Fighter";
    }
}

class Warrior extends Fighter {
    boolean isVulnerable() {
        return false;
    }

    int getDamagePoints(Fighter opponent) {
        // Warrior deals 10 damage if the opponent is vulnerable
        return opponent.isVulnerable() ? 10 : 6;
    }

    public String toString() {
        return "Fighter is a Warrior";
    }
}

class Wizard extends Fighter {

    private boolean preparedSpell = false;

    void prepareSpell() {
        preparedSpell = true;
    }

    boolean isVulnerable() {
        // Vulnerable unless spell is prepared
        return !preparedSpell;
    }

    int getDamagePoints(Fighter opponent) {
        return preparedSpell ? 12 : 3;
    }

    public String toString() {
        return "Fighter is a Wizard";
    }
}