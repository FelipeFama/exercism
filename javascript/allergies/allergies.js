//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Allergies {
  constructor(allergyScore) {
    this.allergyScore = allergyScore
  }

  list() {
    return [
      "eggs",
      "peanuts",
      "shellfish",
      "strawberries",
      "tomatoes",
      "chocolate",
      "pollen",
      "cats"
    ].filter((allergyScore,index) => 
      this.allergyScore & 2 ** index)
  }
  
  allergicTo(allergen) {
    return this.list()
      .some(i => i == allergen)
  }
}
