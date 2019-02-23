import { Queryable, Routine, WorkoutSet, Id } from './';
export declare type WorkoutId = Id<Workout, number>;
export declare type WorkoutArguments = {
    id?: number;
    startTime: number;
    endTime: number;
    completedSets?: Array<WorkoutSet>;
    routines?: Array<Routine>;
};
export default class Workout extends Queryable {
    id?: WorkoutId;
    startTime: number;
    endTime: number;
    _completedSets?: Array<WorkoutSet>;
    _routines?: Array<Routine>;
    constructor(args: WorkoutArguments);
    static createId(id: number): Id<Workout, number>;
    completedSets: WorkoutSet[];
    routines: Routine[];
    readonly totalTime: number;
}