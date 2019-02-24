import { Queryable, Exercise, Id, ExerciseId } from '.';
import { QueryableArguments } from './Queryable';
export type SetType = 'Default' | 'Warmup';

export type ExerciseSetId = Id<ExerciseSet, number>;

export type ExerciseSetArguments = {
  id?: number;
  exerciseId?: ExerciseId;
  weight: number;
  repetitions: number;
  notes?: string;
  type?: SetType;
  exercise?: Exercise;
  completed?: boolean;
} & QueryableArguments;

export default class ExerciseSet extends Queryable {
  id?: ExerciseSetId;
  exerciseId?: ExerciseId;
  weight: number;
  repetitions: number;
  notes?: string;
  type: SetType;
  _exercise?: Exercise;
  _completed: boolean;

  constructor(args: ExerciseSetArguments) {
    super(args);
    this.id = args.id ? ExerciseSet.createId(args.id) : undefined;
    this.exerciseId = args.exerciseId;
    this.weight = args.weight;
    this.repetitions = args.repetitions;
    this.notes = args.notes;
    this.type = args.type || 'Default';
    this._exercise = args.exercise;
    this._completed = args.completed || false;
  }

  static createId(id: number) {
    return id as ExerciseSetId;
  }

  get exercise() {
    return this._exercise;
  }

  set exercise(exercise) {
    this._exercise = exercise;
  }

  get completed() {
    return this._completed;
  }

  set completed(completed: boolean) {
    this._completed = completed;
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
