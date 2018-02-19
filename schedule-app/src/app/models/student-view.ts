export class StudentView {
    constructor(
        public id: string,
        public term: string,
        public username: string,
        public name: string,
        public year: string,
        public advisor: string,
        public majors: [string],
        public minors: [string],
        public graduationDate: string,
        public terms: [{
            id: string,
            type: string,
            termKey: string,
            startDate: string,
            endDate: string
        }]
    ) { }
}
