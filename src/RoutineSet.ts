import { Queryable, Id } from './';
import { RoutineId } from './Routine';
import { WorkoutSetId } from './WorkoutSet';

export type RoutineSetId = Id<RoutineSet, number>;

export type RoutineSetArguments = {
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
  constructor(args: RoutineSetArguments) {
    super();
    this.id = args.id ? RoutineSet.createId(args.id) : null;
    this.routineId = args.routineId;
    this.setId = args.setId;
    this.ordering = args.ordering;
  }
  static createId(id: number) {
    return id as RoutineSetId;
  }
}
