export class Robot {
  private static usedNames: Set<string> = new Set();
  private static ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  private _name: string;

  constructor() {
    // Generate name during robot creation
    this._name = this.generateName(); 
  }

  public get name(): string {
    // Return the robot's name
    return this._name; 
  }

  public resetName(): void {
    // Reset name with a new unique name
    this._name = this.generateName(); 
  }

  public static releaseNames(): void {
    // Clear the set of used names
    Robot.usedNames.clear(); 
  }

  // Helper function to generate a unique name
  private generateName(): string {
    let name: string;
    do {
      // Generate a name
      name = `${this.randomLetters()}${this.randomDigits()}`; 
    // Ensure uniqueness
    } while (Robot.usedNames.has(name)); 

    // Add the name to the set of used names
    Robot.usedNames.add(name); 
    return name;
  }

  // Generate two random letters from A-Z
  private randomLetters(): string {
    const first = Robot.ALPHABET[Math.floor(Math.random() * 26)];
    const second = Robot.ALPHABET[Math.floor(Math.random() * 26)];
    return `${first}${second}`;
  }

  // Generate three random digits from 000-999
  private randomDigits(): string {
    const number = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return number;
  }
}
