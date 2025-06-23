import { Request, Response, NextFunction } from 'express';
import { ExampleService } from '../services/example.service';
import { AppError } from '../middleware/errorHandler';

export class ExampleController {
  private exampleService: ExampleService;

  constructor() {
    this.exampleService = new ExampleService();
  }

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const examples = await this.exampleService.getAll();
      res.status(200).json({
        status: 'success',
        data: examples
      });
    } catch (error) {
      next(error);
    }
  };

  getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const example = await this.exampleService.getById(req.params.id);
      if (!example) {
        throw new AppError('Example not found', 404);
      }
      res.status(200).json({
        status: 'success',
        data: example
      });
    } catch (error) {
      next(error);
    }
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const example = await this.exampleService.create(req.body);
      res.status(201).json({
        status: 'success',
        data: example
      });
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const example = await this.exampleService.update(req.params.id, req.body);
      if (!example) {
        throw new AppError('Example not found', 404);
      }
      res.status(200).json({
        status: 'success',
        data: example
      });
    } catch (error) {
      next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.exampleService.delete(req.params.id);
      if (!result) {
        throw new AppError('Example not found', 404);
      }
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  };
} 