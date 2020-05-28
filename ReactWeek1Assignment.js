class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}
class Bootcamp {
    constructor(name, level,students = []) {
        //super(email, community)
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(newStudent) {
        if (this.students.map(s => s.email).includes(newStudent.email)) {
            console.log('Student already registered');
        } else {
            this.students.push(newStudent);
            console.log(`Registering ${this.name} to the bootcamp ${this.level}`)
        }
        console.log(`${this.students}`);
        return this.students
    };
}

const Riley = new Student("Riley", "riley@gmail.com", "MN");
const Kev = new Student("Kev", "kev@gmail.com", "MN");
const Steve = new Student("Steve", "steve@gmail.com", "MN");
let webDevFundamentals = new Bootcamp("Web Development", "beginner");
const fullstack = new Bootcamp("Fullstack developement", "Advanced");