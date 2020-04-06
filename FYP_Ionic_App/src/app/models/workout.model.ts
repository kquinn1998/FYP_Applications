export class Workout {
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public exercises: string[],
        public sets: number[],
        public reps: number[]
    ) {}
}
