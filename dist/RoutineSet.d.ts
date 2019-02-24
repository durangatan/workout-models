import { Queryable, Id, QueryableArguments, ExerciseSet } from './';
import { RoutineId } from './Routine';
import { ExerciseSetId } from './ExerciseSet';
export declare type RoutineSetId = Id<RoutineSet, number>;
export declare type RoutineSetArguments = {
    id?: number;
    routineId: RoutineId;
    exerciseSetId: ExerciseSetId;
    ordering: number;
    exerciseSet?: ExerciseSet;
} & QueryableArguments;
export default class RoutineSet extends Queryable {
    id?: RoutineSetId;
    routineId: RoutineId;
    exerciseSetId: ExerciseSetId;
    ordering: number;
    _exerciseSet: ExerciseSet;
    constructor(args: RoutineSetArguments);
    exerciseSet: ExerciseSet;
    static createId(id: number): Id<RoutineSet, number>;
}
