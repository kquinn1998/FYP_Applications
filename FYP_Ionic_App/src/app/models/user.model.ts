export class User {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public userType: string,
        public bodyWeigth: number,
        public height: number,
    ) {}
}
