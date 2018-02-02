export class Course {
    constructor(
        public id: string,
        public type: string,
        public term: string,
        public name: string,
        public description: string,
        public creditHours: string,
        public meetTimes: string,
        public filteredTimes: string,
        public terms: string[],
        public instructor: {
            username: string,
            dept: string
        },
        public students: {
            id: string,
            term: string,
            username: string,
            name: string,
            year: string,
            majors: string,
            minors: string,
            graduationDate: string,
            advisor: string
        }
    ) { }
}
