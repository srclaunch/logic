export interface AnalyzerClass {
  name?: string;
  description?: string;
  process?: (context: unknown) => Promise<void>;
}

export class Analyzer implements AnalyzerClass {}
