import { Queryable, Id } from './';
import { RoutineId } from './Routine';
import { WorkoutSetId } from './WorkoutSet';
export declare type RoutineSetId = Id<RoutineSet, number>;
export declare type RoutineSetArguments = {
    id?: number;
    routineId: RoutineId;
    setId: WorkoutSetId;
    ordering: number;
};
export default class RoutineSet extends Queryable {
    id?: RoutineSetId;
    routineId: RoutineId;
    setId: WorkoutSetId;
    ordering: number;
    constructor(args: RoutineSetArguments);
    static createId(id: number): Id<RoutineSet, number>;
}
