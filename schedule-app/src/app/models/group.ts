export class Group {
    constructor(
        public id: string,
        public groupName: string,
        public className: string,
        public term: {
            id: string,
            term: string,
            name: string,
            startDate: string,
            endDate: string
        },
        public students: {
            id: string,
            username: string,
            name: string,
            year: string,
            majors: string,
            minors: string,
            graduationDate: string,
            courses: string[]
        },
        public faculty: {
            id: string,
            username: string,
            name: string,
            dept: string,
        },
        public courses: {
            name: string,
            description: string,
            meetTimes: string,
            instructor: string
        }
    ) { }
}
