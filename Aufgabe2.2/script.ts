namespace Aufgabe2_2 {

    function min(..._inputs: number[]): number {
        let min: number = Infinity;
        for (let i: number = 0; i < _inputs.length; i++) {
            if (min > _inputs[i]) {
                min = _inputs[i];
            }
        }
        return min;
    }


    console.log(min);
    
    function isEven(_input: number): boolean {
        if (_input == 0) return true;
        if (_input == 1) return false;

        return isEven(_input + Math.sign(_input) * -2);
    }
    console.log(isEven);

    class Student {
        name: string;
        course: string;
        semester: number;
        matriculation: number;
      
        constructor(_name: string, _course: string, _semester: number, _matriculation: number) {
          this.name = _name;
          this.course = _course;
          this.semester = _semester;
          this.matriculation = _matriculation;
        }
      
        showInfo(): void {
          console.log(`Name: ${this.name}, Kurs: ${this.course} ${this.semester}, Matrikelnummer: ${this.matriculation}`);
        }
      }
      
      let student1: Student = new Student("Lukas Scheuerle", "MIM", 7, 257396);
      let student2: Student = new Student("Max Mustermann", "OMB", 2, 123456);
      let student3: Student = new Student("Laura Musterfrau", "MIB", 2, 654321);
      
      let studentArray: Student[] = [student1, student2];
      studentArray.push(student3);
      studentArray.push(new Student("Andreas Reich", "MIM", 4, 259123));
      
      console.log(studentArray[0].name);
      console.log(studentArray[1].matriculation);
      console.log(studentArray[3].semester);
      
      // dieser Teil der Aufgabe ist weiterhin außerhalb der Klasse, da er innerhalb keinen Sinn macht.
      for (let student of studentArray) {
        student.showInfo();
      }
      
}
