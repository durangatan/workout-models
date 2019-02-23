import { Queryable, Routine, WorkoutSet } from './';
import { Id } from '../workout-utils';

export type WorkoutId = Id<Workout, number>;

export type WorkoutArguments = {
  id?: number;
  startTime: number;
  endTime: number;
  completedSets?: Array<WorkoutSet>;
  routines?: Array<Routine>;
};

export default class Workout extends Queryable {
  id?: WorkoutId;
  startTime: number;
  endTime: number;
  _completedSets?: Array<WorkoutSet>;
  _routines?: Array<Routine>;

  constructor(args: WorkoutArguments) {
    super();
    this.id = args.id ? Workout.createId(args.id) : undefined;
    this.startTime = args.startTime;
    this.endTime = args.endTime;
    this._completedSets = args.completedSets;
    this._routines = args.routines;
  }

  static createId(id: number) {
    return id as WorkoutId;
  }

  get completedSets() {
    return this._completedSets;
  }

  set completedSets(completedSets) {
    this._completedSets = completedSets;
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
}
