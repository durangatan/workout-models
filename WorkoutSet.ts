import { Queryable, Exercise } from './';
import { ExerciseId } from './Exercise';
import { Id } from '../workout-utils';
export type SetType = 'Default' | 'Warmup';

export type WorkoutSetId = Id<'WorkoutSet', number>;

export type WorkoutSetArguments = {
  id?: number;
  exerciseId?: ExerciseId;
  weight: number;
  repetitions: number;
  notes?: string;
  type?: SetType;
  exercise: Exercise;
};

export default class WorkoutSet extends Queryable {
  id?: WorkoutSetId;
  exerciseId?: ExerciseId;
  weight: number;
  repetitions: number;
  notes?: string;
  type: string;
  _exercise?: Exercise;

  constructor(args: WorkoutSetArguments) {
    super();
    this.id = args.id ? WorkoutSet.createId(args.id) : null;
    this.exerciseId = args.exerciseId;
    this.weight = args.weight;
    this.repetitions = args.repetitions;
    this.notes = args.notes;
    this.type = args.type || 'Default';
    this._exercise = args.exercise;
  }

  static createId(id: number) {
    return id as WorkoutSetId;
  }

  get exercise() {
    return this._exercise;
  }

  set exercise(exercise) {
    this._exercise = exercise;
  }

  toJSON() {
    return {
      id: this.id,
      exerciseId: this.exerciseId,
      weight: this.weight,
      repetitions: this.repetitions,
      notes: this.notes,
      type: this.type,
      exercise: this.exercise
    };
  }
}
