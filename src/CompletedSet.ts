import { Queryable, Id, WorkoutId, ExerciseSetId, QueryableArguments } from './';

export type CompletedSetId = Id<CompletedSet, number>;

export type CompletedSetArguments = {
  id?: number;
  exerciseSetId: ExerciseSetId;
  workoutId: WorkoutId;
} & QueryableArguments;

export default class CompletedSet extends Queryable {
  id: CompletedSetId;
  exerciseSetId?: ExerciseSetId;
  workoutId?: WorkoutId;
  constructor(args: CompletedSetArguments) {
    super(args);
    this.id = args.id ? CompletedSet.createId(args.id) : null;
    this.exerciseSetId = args.exerciseSetId;
    this.workoutId = args.workoutId;
  }

  static createId(id: number) {
    return id as CompletedSetId;
  }
}
