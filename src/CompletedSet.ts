import { Queryable, Id } from './';
import { WorkoutId } from './Workout';
import { RoutineSetId } from './RoutineSet';
import { QueryableArguments } from './Queryable';

export type CompletedSetId = Id<CompletedSet, number>;

export type CompletedSetArguments = {
  id?: number;
  routineSetId: RoutineSetId;
  workoutId: WorkoutId;
} & QueryableArguments;

export default class CompletedSet extends Queryable {
  id: CompletedSetId;
  routineSetId?: RoutineSetId;
  workoutId?: WorkoutId;
  constructor(args: CompletedSetArguments) {
    super(args);
    this.id = args.id ? CompletedSet.createId(args.id) : null;
    this.routineSetId = args.routineSetId;
    this.workoutId = args.workoutId;
  }

  static createId(id: number) {
    return id as CompletedSetId;
  }
}
