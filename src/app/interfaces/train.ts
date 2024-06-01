export interface ITrain {
  name: string;
  description: string;
  characteristics: ITrainSpecs[];
}

export interface ITrainSpecs {
  speed: number;
  force: number;
  engineAmperage: number;
}
