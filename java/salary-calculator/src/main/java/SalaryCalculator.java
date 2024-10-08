public class SalaryCalculator {
    public double salaryMultiplier(int daysSkipped) {
        return daysSkipped >= 5 ? 0.85 : 1.0;
    }

    public int bonusMultiplier(int productsSold) {
        return productsSold >= 20 ? 13 : 10;
    }

    public double bonusForProductsSold(int productsSold) {
        return productsSold * bonusMultiplier(productsSold);
    }

    public double finalSalary(int daysSkipped, int productsSold) {
        double baseSalary = 1000.0;
        double salaryMultiplier = baseSalary * salaryMultiplier(daysSkipped);
        double salaryBonus = bonusForProductsSold(productsSold);
        double finalSalary = salaryMultiplier + salaryBonus;

       return finalSalary >= 2000.0 ? 2000.0 : finalSalary;
    } 
}
