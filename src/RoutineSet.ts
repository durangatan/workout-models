import { Queryable, Id, QueryableArguments, ExerciseSet } from './';
import { RoutineId } from './Routine';
import { ExerciseSetId } from './ExerciseSet';

export type RoutineSetId = Id<RoutineSet, number>;

export type RoutineSetArguments = {
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

  constructor(args: RoutineSetArguments) {
    super(args);
    this.id = args.id ? RoutineSet.createId(args.id) : null;
    this.routineId = args.routineId;
    this.exerciseSetId = args.exerciseSetId;
    this.ordering = args.ordering;
    this._exerciseSet = args.exerciseSet;
  }

  set exerciseSet(exerciseSet: ExerciseSet) {
    this._exerciseSet = exerciseSet;
  }

  get exerciseSet() {
    return this._exerciseSet;
  }

  static createId(id: number) {
    return id as RoutineSetId;
  }
}
