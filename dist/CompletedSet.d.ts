import { Queryable, Id, WorkoutId, ExerciseSetId, QueryableArguments } from './';
export declare type CompletedSetId = Id<CompletedSet, number>;
export declare type CompletedSetArguments = {
    id?: number;
    exerciseSetId: ExerciseSetId;
    workoutId: WorkoutId;
} & QueryableArguments;
export default class CompletedSet extends Queryable {
    id: CompletedSetId;
    exerciseSetId?: ExerciseSetId;
    workoutId?: WorkoutId;
    constructor(args: CompletedSetArguments);
    static createId(id: number): Id<CompletedSet, number>;
}
