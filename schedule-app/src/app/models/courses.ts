export class Courses {
    constructor(
        public name: string,
        public description: string,
        public creditHours: string,
        public meetTimes: string,
        public filteredTime: string,
        public numStudents: number,
        public instructor: {
            username: string,
            dept: string
        },
        public term: {
            id: string,
            term: string,
            startDate: string,
            endDate: string
        },
        public terms: string[],
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
