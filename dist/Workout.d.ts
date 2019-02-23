import { Queryable, Routine, WorkoutSet, Id, QueryableArguments } from './';
export declare type WorkoutId = Id<Workout, number>;
export declare type WorkoutArguments = {
    id?: number;
    startTime: number;
    endTime: number;
    completedSets?: Array<WorkoutSet>;
    routines?: Array<Routine>;
} & QueryableArguments;
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
    toJSON(): {
        id: Id<Workout, number>;
        completedSets: WorkoutSet[];
        routines: Routine[];
        startTime: number;
        endTime: number;
    };
}
