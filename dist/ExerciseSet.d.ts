import { Queryable, Exercise, Id, ExerciseId } from '.';
import { QueryableArguments } from './Queryable';
export declare type SetType = 'Default' | 'Warmup';
export declare type ExerciseSetId = Id<ExerciseSet, number>;
export declare type ExerciseSetArguments = {
    id?: number;
    exerciseId?: ExerciseId;
    weight: number;
    repetitions: number;
    notes?: string;
    type?: SetType;
    exercise?: Exercise;
    completed?: boolean;
} & QueryableArguments;
export default class ExerciseSet extends Queryable {
    id?: ExerciseSetId;
    exerciseId?: ExerciseId;
    weight: number;
    repetitions: number;
    notes?: string;
    type: SetType;
    _exercise?: Exercise;
    _completed: boolean;
    constructor(args: ExerciseSetArguments);
    static createId(id: number): Id<ExerciseSet, number>;
    exercise: Exercise;
    completed: boolean;
    toJSON(): {
        id: Id<ExerciseSet, number>;
        exerciseId: Id<Exercise, number>;
        weight: number;
        repetitions: number;
        notes: string;
        type: SetType;
        exercise: Exercise;
    };
}
