public class CarsAssemble {

    public double productionRatePerHour(int speed) {
        int carsProduced = 221 * speed;

        if(speed >= 0 && speed <= 4) {return carsProduced;}
        if(speed > 4 && speed <= 8) {return carsProduced * 0.9;}
        if(speed == 9) {return carsProduced * 0.8;}
        if(speed == 10) {return carsProduced * 0.77;}
        
        return carsProduced;        
    }

    public int workingItemsPerMinute(int speed) {
        int result = (int) (productionRatePerHour(speed) / 60);
        return result;
    }
}
