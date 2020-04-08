export class RecordedWorkout {
    constructor(
        public id: string,
        public title: string,
        public date: Date,
        public notes: string,
        public exercises: string[],
        public weights: number[],
    ) {}
}
