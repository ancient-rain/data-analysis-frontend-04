export class Faculty {
    constructor(
        public id: string,
        public type: string,
        public term: string,
        public username: string,
        public name: string,
        public dept: string,
        public advisees: [string]
    ) { }
}
