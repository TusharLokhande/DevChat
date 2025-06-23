import { ExampleRepository } from '../repositories/example.repository';
import { Example } from '../types/example.types';

export class ExampleService {
  private exampleRepository: ExampleRepository;

  constructor() {
    this.exampleRepository = new ExampleRepository();
  }

  async getAll(): Promise<Example[]> {
    return this.exampleRepository.findAll();
  }

  async getById(id: string): Promise<Example | null> {
    return this.exampleRepository.findById(id);
  }

  async create(data: Partial<Example>): Promise<Example> {
    return this.exampleRepository.create(data);
  }

  async update(id: string, data: Partial<Example>): Promise<Example | null> {
    return this.exampleRepository.update(id, data);
  }

  async delete(id: string): Promise<boolean> {
    return this.exampleRepository.delete(id);
  }
} 