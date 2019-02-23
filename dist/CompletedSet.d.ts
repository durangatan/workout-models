import { Queryable, Id } from './';
import { WorkoutId } from './Workout';
import { RoutineSetId } from './RoutineSet';
export declare type CompletedSetId = Id<CompletedSet, number>;
export declare type CompletedSetArguments = {
    id?: number;
    routineSetId: RoutineSetId;
    workoutId: WorkoutId;
};
export default class CompletedSet extends Queryable {
    id: CompletedSetId;
    routineSetId?: RoutineSetId;
    workoutId?: WorkoutId;
    constructor(args: CompletedSetArguments);
    static createId(id: number): Id<CompletedSet, number>;
}
