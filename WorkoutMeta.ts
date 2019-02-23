import { Queryable } from './';
import { Id } from 'workout-utils';
import { WorkoutId } from './Workout';
export type WorkoutMetaId = Id<WorkoutMeta, number>;

export type WorkoutMetaArguments = {
  id?: number;
  workoutId: WorkoutId;
};

export default class WorkoutMeta extends Queryable {
  id?: WorkoutMetaId;
  workoutId: WorkoutId;
  constructor(args: WorkoutMetaArguments) {
    super();
    this.id = args.id ? WorkoutMeta.createId(args.id) : null;
    this.workoutId = args.workoutId;
  }

  static createId(id: number) {
    return id as WorkoutMetaId;
  }
}
