export class StudentInfo {
    constructor(
        public username: string,
        public name: string,
        public graduationDate: string,
        public term: {
            id: string,
            term: string,
            name: string,
            startDate: string,
            endDate: string
        },
        public courses: {
            id: string,
            name: string,
            description: string,
            creditHours: string,
            meetTimes: string,
            instructor: string
        },
    ) { }
}
