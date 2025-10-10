class Student {
  readonly studentId: number;
  name: string;
  email?: string;
  static schoolName: string = "ABC School";

  constructor(sId: number, sName: string, sEmail?: string) {
    this.studentId = sId;
    this.name = sName;
    this.email = sEmail;
  }

  displayInfo() {
    console.log("Student id is:" + this.studentId);
    console.log("Student name is:" + this.name);
    this.email
      ? console.log("Student email is:" + this.email)
      : console.log("Email id is not provided");
    Student.changeSchoolName("XYZ School");
  }

  static changeSchoolName(newName: string) {
    Student.schoolName = newName;
    console.log("School name is changed to:" + Student.schoolName);
  }
}

let s1 = new Student(101, "Anil Simha");

s1.displayInfo();

let s2 = new Student(102, "Anil Simha Tallapragada", "anildrive9@gmail.com");
s2.displayInfo();
