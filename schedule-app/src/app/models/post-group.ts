export class PostGroup {
    constructor(
        public id: string,
        public type: string,
        public groupName: string,
        public term: string,
        public description: string,
        public forClass: boolean,
        public members: string[]
    ) {}
}
