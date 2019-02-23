import { Queryable, Id } from './';
import { WorkoutId } from './Workout';
import { RoutineId } from './Routine';

export type WorkoutRoutineId = Id<WorkoutRoutine, number>;

export type WorkoutRoutineArguments = {
  id?: number;
  workoutId: WorkoutId;
  routineId: RoutineId;
};

export default class WorkoutRoutine extends Queryable {
  id?: WorkoutRoutineId;
  workoutId: WorkoutId;
  routineId: RoutineId;
  constructor(args: WorkoutRoutineArguments) {
    super();
    this.id = args.id ? WorkoutRoutine.createId(args.id) : null;
    this.workoutId = args.workoutId;
    this.routineId = args.routineId;
  }

  static createId(id: number) {
    return id as WorkoutRoutineId;
  }
}
