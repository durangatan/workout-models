import { Queryable, Id, QueryableArguments, WorkoutId, RoutineId } from './';

export type WorkoutRoutineId = Id<WorkoutRoutine, number>;

export type WorkoutRoutineArguments = {
  id?: number;
  workoutId: WorkoutId;
  routineId: RoutineId;
} & QueryableArguments;

export default class WorkoutRoutine extends Queryable {
  id?: WorkoutRoutineId;
  workoutId: WorkoutId;
  routineId: RoutineId;
  constructor(args: WorkoutRoutineArguments) {
    super(args);
    this.id = args.id ? WorkoutRoutine.createId(args.id) : null;
    this.workoutId = args.workoutId;
    this.routineId = args.routineId;
  }

  static createId(id: number) {
    return id as WorkoutRoutineId;
  }
}
