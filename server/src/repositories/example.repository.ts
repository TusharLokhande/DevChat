import { Example } from '../types/example.types';

export class ExampleRepository {
  private examples: Example[] = [];

  async findAll(): Promise<Example[]> {
    return this.examples;
  }

  async findById(id: string): Promise<Example | null> {
    return this.examples.find(example => example.id === id) || null;
  }

  async create(data: Partial<Example>): Promise<Example> {
    const example: Example = {
      id: Math.random().toString(36).substr(2, 9),
      name: data.name || '',
      description: data.description || '',
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.examples.push(example);
    return example;
  }

  async update(id: string, data: Partial<Example>): Promise<Example | null> {
    const index = this.examples.findIndex(example => example.id === id);
    if (index === -1) return null;

    const updatedExample = {
      ...this.examples[index],
      ...data,
      updatedAt: new Date()
    };
    this.examples[index] = updatedExample;
    return updatedExample;
  }

  async delete(id: string): Promise<boolean> {
    const index = this.examples.findIndex(example => example.id === id);
    if (index === -1) return false;

    this.examples.splice(index, 1);
    return true;
  }
} 