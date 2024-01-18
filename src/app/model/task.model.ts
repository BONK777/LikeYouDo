// models/task.model.ts
export interface Task {
    id: number; 
    attributes: {
      description: string;
      term: {
        id: number; 
        term: string;
      };
      answerFormat: {
        id: number; 
        format: string;
      };
      subCategory: {
        data: {
          id: number;
          attributes: {
            name: string;
          };
        };
      };
    };
  }
  