export interface Point {
  x: number;
  y: number;
}

export type Difficulty = "easy" | "medium" | "hard";

export interface Puzzle {
  id: string;
  date: string;
  gridSize: number;
  start: Point;
  end: Point;
  correctPath: Point[];
  label: string;
  difficulty: Difficulty;
}

export interface ScoreResult {
  correctPoints: number;
  totalPoints: number;
  percentage: number;
  perfect: boolean;
}

export type GamePhase = "memorize" | "drawing" | "result";

export interface GameState {
  puzzle: Puzzle;
  phase: GamePhase;
  memorizeTimeLeft: number;
  drawnPath: Point[];
  score: ScoreResult;
  hasPlayedToday: boolean;
}

