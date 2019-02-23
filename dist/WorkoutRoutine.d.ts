import { Queryable, Id, QueryableArguments, WorkoutId, RoutineId } from './';
export declare type WorkoutRoutineId = Id<WorkoutRoutine, number>;
export declare type WorkoutRoutineArguments = {
    id?: number;
    workoutId: WorkoutId;
    routineId: RoutineId;
} & QueryableArguments;
export default class WorkoutRoutine extends Queryable {
    id?: WorkoutRoutineId;
    workoutId: WorkoutId;
    routineId: RoutineId;
    constructor(args: WorkoutRoutineArguments);
    static createId(id: number): Id<WorkoutRoutine, number>;
}
