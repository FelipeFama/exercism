import java.util.Random;

class CaptainsLog {

    private static final char[] PLANET_CLASSES = new char[]{'D', 'H', 'J', 'K', 'L', 'M', 'N', 'R', 'T', 'Y'};

    private Random random;

    CaptainsLog(Random random) {
        this.random = random;
    }

    char randomPlanetClass() {
        int index = random.nextInt(PLANET_CLASSES.length);
        return PLANET_CLASSES[index];
    }

    String randomShipRegistryNumber() {
        int registryNumber = 1000 + random.nextInt(9000);
        return String.format("NCC-%04d",registryNumber);
    }

    double randomStardate() {
        double lowerBound = 41000.0;
        double upperBound = 42000.0;
        return lowerBound + (upperBound - lowerBound) * random.nextDouble();
    }
}
