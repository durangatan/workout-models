import { Queryable, RoutineSet, Id } from './';

export type RoutineId = Id<Routine, number>;

export type RoutineArguments = {
  id?: number;
  name: string;
  sets?: Array<RoutineSet>;
};

export default class Routine extends Queryable {
  id: RoutineId;
  name: string;
  _sets?: Array<RoutineSet>;

  constructor(args: RoutineArguments) {
    super();
    this.id = args.id ? Routine.createId(args.id) : null;
    this.name = args.name;
    this._sets = args.sets;
  }

  static createId(id: number) {
    return id as RoutineId;
  }

  get sets() {
    return this._sets;
  }

  set sets(sets: Array<RoutineSet>) {
    this._sets = sets;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      sets: this.sets
    };
  }
}
