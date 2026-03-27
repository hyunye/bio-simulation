export interface Position {
  x: number;
  y: number;
}

export interface Organism {
  id: string;
  position: Position;
  energy: number;
  speed: number;
  color: string;
}

export interface SimulationState {
  organisms: Organism[];
  width: number;
  height: number;
}
