import { Queryable, Exercise, Id } from './';
import { ExerciseId } from './Exercise';
export declare type SetType = 'Default' | 'Warmup';
export declare type WorkoutSetId = Id<WorkoutSet, number>;
export declare type WorkoutSetArguments = {
    id?: number;
    exerciseId?: ExerciseId;
    weight: number;
    repetitions: number;
    notes?: string;
    type?: SetType;
    exercise?: Exercise;
    completed?: boolean;
};
export default class WorkoutSet extends Queryable {
    id?: WorkoutSetId;
    exerciseId?: ExerciseId;
    weight: number;
    repetitions: number;
    notes?: string;
    type: SetType;
    _exercise?: Exercise;
    _completed: boolean;
    constructor(args: WorkoutSetArguments);
    static createId(id: number): Id<WorkoutSet, number>;
    exercise: Exercise;
    completed: boolean;
    toJSON(): {
        id: Id<WorkoutSet, number>;
        exerciseId: Id<Exercise, number>;
        weight: number;
        repetitions: number;
        notes: string;
        type: SetType;
        exercise: Exercise;
    };
}
