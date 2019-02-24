import { Id } from './';
export declare type QueryableId = Id<Queryable, number>;
export declare type QueryableArguments = {
    dateAdded?: number;
    dateUpdated?: number;
};
export default class Queryable {
    dateAdded: number;
    dateUpdated?: number;
    id?: QueryableId;
    constructor(args: any);
    readonly columns: Array<string>;
    readonly columnValues: any[];
    readonly ownKeys: string[];
    readonly upsertKeys: string[];
}
