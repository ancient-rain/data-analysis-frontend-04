export class PostGroup {
    constructor(
        public id: string,
        public type: string,
        public groupName: string,
        public term: string,
        public className: string,
        public faculty: string[],
        public students: string[]
    ) {}
}
