import { Queryable, Id, QueryableArguments } from './';
export type ExerciseArguments = {
  id?: number;
  machineId?: string;
  name: string;
  seatSetting?: string;
  rangeSetting?: string;
  notes?: string;
} & QueryableArguments;

export type ExerciseId = Id<Exercise, number>;

export default class Exercise extends Queryable {
  id?: ExerciseId;
  machineId?: string;
  name: string;
  seatSetting?: string;
  rangeSetting?: string;
  notes?: string;
  constructor(args: ExerciseArguments) {
    super(args);
    this.id = args.id ? Exercise.createId(args.id) : null;
    this.machineId = args.machineId;
    this.name = args.name;
    this.seatSetting = args.seatSetting;
    this.rangeSetting = args.rangeSetting;
    this.notes = args.notes;
  }
  static createId(id: number) {
    return id as ExerciseId;
  }
}
