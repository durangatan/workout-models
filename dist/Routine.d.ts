import { Queryable, RoutineSet, Id, QueryableArguments } from './';
export declare type RoutineId = Id<Routine, number>;
export declare type RoutineArguments = {
    id?: number;
    name: string;
    sets?: Array<RoutineSet>;
} & QueryableArguments;
export default class Routine extends Queryable {
    id: RoutineId;
    name: string;
    _sets?: Array<RoutineSet>;
    constructor(args: RoutineArguments);
    static createId(id: number): Id<Routine, number>;
    sets: Array<RoutineSet>;
    toJSON(): {
        id: Id<Routine, number>;
        name: string;
        sets: RoutineSet[];
    };
}
