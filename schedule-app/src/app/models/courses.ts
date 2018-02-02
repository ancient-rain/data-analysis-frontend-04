export class Courses {
    constructor(
        public id: string,
        public term: string,
        public name: string,
        public description: string,
        public creditHours: string,
        public meetTimes: string,
        public instructor: string,
        public numStudents: number,
        public terms: string[],
        public filteredTimes: string
    ) { }
}
