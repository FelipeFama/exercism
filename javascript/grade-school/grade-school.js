//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this.students = {}
  }
  
  roster() {
    return this.deepCopy(this.students);
  }

  add(name, grade) {
    const previousGrade = this.findGrade(name);
    if(previousGrade) {
      this.students[previousGrade] = this.students[previousGrade]
        .filter(student => student !== name);
    }
  
    if(!this.students[grade]) {
      this.students[grade] = []
    }

    this.students[grade].push(name);
    this.students[grade].sort();
  }

  grade(grade) {
     return this.deepCopy(this.students[grade] || []);
  }

  findGrade(name) {
    for(const grade in this.students) {
      if(this.students[grade].includes(name)) {
        return grade;
      }
    }
    return null
  }

  deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
}
