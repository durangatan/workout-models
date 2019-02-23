import { Id } from './';

export type QueryableId = Id<Queryable, number>;
export type QueryableArguments = {
  dateAdded?: number;
  dateUpdated?: number;
};

export default class Queryable {
  dateAdded: number;
  dateUpdated?: number;
  constructor(args: any) {
    this.dateAdded = args.dateAdded ? args.dateAdded : Date.now();
    this.dateUpdated = args.dateUpdated;
  }

  get columns(): Array<string> {
    return Object.keys(this)
      .filter(key => {
        if (typeof key === 'string' && key[0] === '_') {
          return false;
        }
        return typeof this[key] !== 'function';
      })
      .map(key => String(key));
  }

  get columnValues() {
    return this.columns.map(column => (this[column] ? this[column] : null));
  }

  get ownKeys() {
    return Object.keys(this).filter(key => {
      const value = this[key];
      if (value === undefined || value === null) {
        return false;
      }
      if (typeof key === 'string' && key[0] === '_') {
        return false;
      }
      return typeof this[key] !== 'function';
    });
  }

  get upsertKeys() {
    return this.ownKeys.filter(key => key !== 'id');
  }
}
