export class FacultyInfo {
    constructor(
        public username: string,
        public name: string,
        public dept: string,
        public term: {
            term: string,
            name: string,
            startDate: string,
            endDate: string
        },
        public courses: [{
            name: string,
            description: string,
            creditHours: string,
            meetTimes: string,
            instructor: string
        }],
    ) { }
}
