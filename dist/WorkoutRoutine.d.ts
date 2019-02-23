import { Queryable, Id } from './';
import { WorkoutId } from './Workout';
import { RoutineId } from './Routine';
export declare type WorkoutRoutineId = Id<WorkoutRoutine, number>;
export declare type WorkoutRoutineArguments = {
    id?: number;
    workoutId: WorkoutId;
    routineId: RoutineId;
};
export default class WorkoutRoutine extends Queryable {
    id?: WorkoutRoutineId;
    workoutId: WorkoutId;
    routineId: RoutineId;
    constructor(args: WorkoutRoutineArguments);
    static createId(id: number): Id<WorkoutRoutine, number>;
}
