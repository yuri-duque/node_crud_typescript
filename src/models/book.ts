import { BaseModel } from './baseModel';

export interface Book extends BaseModel {
  title: string;
  author: string;
  language: string;
  pages: number;
}
