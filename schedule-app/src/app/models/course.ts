export class Course {
    constructor(
        public id: string,
        public type: string,
        public term: string,
        public name: string,
        public description: string,
        public creditHours: string,
        public meetTimes: string,
        public instructor: string,
        public filteredTimes: string,
        public numStudents: string
    ) { }
}
