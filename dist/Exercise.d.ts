import { Queryable, Id } from './';
export declare type ExerciseArguments = {
    id?: number;
    machineId?: string;
    name: string;
    seatSetting?: string;
    rangeSetting?: string;
    notes?: string;
};
export declare type ExerciseId = Id<Exercise, number>;
export default class Exercise extends Queryable {
    id?: ExerciseId;
    machineId?: string;
    name: string;
    seatSetting?: string;
    rangeSetting?: string;
    notes?: string;
    constructor(args: ExerciseArguments);
    static createId(id: number): Id<Exercise, number>;
}
