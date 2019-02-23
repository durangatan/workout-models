import { Queryable, Id, QueryableArguments } from './';
import { WorkoutId } from './Workout';
export declare type WorkoutMetaId = Id<WorkoutMeta, number>;
export declare type WorkoutMetaArguments = {
    id?: number;
    workoutId: WorkoutId;
} & QueryableArguments;
export default class WorkoutMeta extends Queryable {
    id?: WorkoutMetaId;
    workoutId: WorkoutId;
    constructor(args: WorkoutMetaArguments);
    static createId(id: number): Id<WorkoutMeta, number>;
}
