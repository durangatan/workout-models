import { Queryable, Id } from './';
import { WorkoutId } from './Workout';
import { RoutineSetId } from './RoutineSet';
import { QueryableArguments } from './Queryable';
export declare type CompletedSetId = Id<CompletedSet, number>;
export declare type CompletedSetArguments = {
    id?: number;
    routineSetId: RoutineSetId;
    workoutId: WorkoutId;
} & QueryableArguments;
export default class CompletedSet extends Queryable {
    id: CompletedSetId;
    routineSetId?: RoutineSetId;
    workoutId?: WorkoutId;
    constructor(args: CompletedSetArguments);
    static createId(id: number): Id<CompletedSet, number>;
}
