import { Queryable } from './';
import { Id } from '../workout-utils';
import { WorkoutId } from './Workout';
import { RoutineSetId } from './RoutineSet';

export type CompletedSetId = Id<CompletedSet, number>;

export type CompletedSetArguments = {
  id?: number;
  routineSetId: RoutineSetId;
  workoutId: WorkoutId;
};

export default class CompletedSet extends Queryable {
  id: CompletedSetId;
  routineSetId?: RoutineSetId;
  workoutId?: WorkoutId;
  constructor(args: CompletedSetArguments) {
    super();
    this.id = args.id ? CompletedSet.createId(args.id) : null;
    this.routineSetId = args.routineSetId;
    this.workoutId = args.workoutId;
  }

  static createId(id: number) {
    return id as CompletedSetId;
  }
}
