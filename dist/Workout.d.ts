import { Queryable, Routine, ExerciseSet, Id, QueryableArguments } from './';
export declare type WorkoutId = Id<Workout, number>;
export declare type WorkoutArguments = {
    id?: number;
    startTime: number;
    endTime: number;
    completedExerciseSets?: Array<ExerciseSet>;
    routines?: Array<Routine>;
} & QueryableArguments;
export default class Workout extends Queryable {
    id?: WorkoutId;
    startTime: number;
    endTime: number;
    _completedExerciseSets?: Array<ExerciseSet>;
    _routines?: Array<Routine>;
    constructor(args: WorkoutArguments);
    static createId(id: number): Id<Workout, number>;
    completedExerciseSets: Array<ExerciseSet>;
    routines: Routine[];
    readonly totalTime: number;
    toJSON(): {
        id: Id<Workout, number>;
        completedExerciseSets: ExerciseSet[];
        routines: Routine[];
        startTime: number;
        endTime: number;
    };
}
