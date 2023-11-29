// models/task.model.ts
export interface Task {
    id: number; // <-- изменено на string
    attributes: {
      description: string;
      term: {
        id: number; // <-- изменено на string
        term: string;
      };
      answerFormat: {
        id: number; // <-- изменено на string
        format: string;
      };
      subCategory: {
        data: {
          id: number; // <-- изменено на string
          attributes: {
            name: string;
          };
        };
      };
    };
  }
  