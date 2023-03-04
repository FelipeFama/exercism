

export class Allergies {
  private allergieItems: string[] = [
    "eggs",
    "peanuts",
    "shellfish",
    "strawberries",
    "tomatoes",
    "chocolate",
    "pollen",
    "cats",
  ];

  private listItems: string[] = [];

  constructor(allergenIndex: number) {
    allergenIndex
     .toString(2)
     .split("")
     .reverse()
     .splice(0, 8)
     .forEach((value, index) => {
       if(value === "1") {
         this.listItems.push(this.allergieItems[index]);
       }
     });
  }
  
  public list(): string[] {
    return this.listItems;
  }

  public allergicTo(allergen: string): boolean {
    return this.listItems.includes(allergen);
  }
}
