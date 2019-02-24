import { Queryable, Routine, ExerciseSet, Id, QueryableArguments } from './';

export type WorkoutId = Id<Workout, number>;

export type WorkoutArguments = {
  id?: number;
  startTime: number;
  endTime: number;
  completedExerciseSets?: Array<ExerciseSet>;
  routines?: Array<Routine>;
} & QueryableArguments;

export default class Workout extends Queryable {
  id?: WorkoutId;
  startTime: number;
  endTime: number;
  _completedExerciseSets?: Array<ExerciseSet>;
  _routines?: Array<Routine>;

  constructor(args: WorkoutArguments) {
    super(args);
    this.id = args.id ? Workout.createId(args.id) : undefined;
    this.startTime = args.startTime;
    this.endTime = args.endTime;
    this._completedExerciseSets = args.completedExerciseSets;
    this._routines = args.routines;
  }

  static createId(id: number) {
    return id as WorkoutId;
  }

  get completedExerciseSets() {
    return this._completedExerciseSets;
  }

  set completedExerciseSets(completedExerciseSets: Array<ExerciseSet>) {
    this._completedExerciseSets = completedExerciseSets;
  }

  get routines() {
    return this._routines;
  }

  set routines(routines) {
    this._routines = routines;
  }

  get totalTime() {
    return this.endTime - this.startTime;
  }

  toJSON() {
    return {
      id: this.id,
      completedSets: this._completedSets || [],
      routines: this._routines || [],
      startTime: this.startTime,
      endTime: this.endTime
    };
  }
}
