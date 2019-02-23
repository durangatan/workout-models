import { Id } from './';
export declare type QueryableId = Id<Queryable, number>;
export default class Queryable {
    readonly columns: Array<string>;
    readonly columnValues: any[];
    readonly ownKeys: string[];
    readonly upsertKeys: string[];
}
