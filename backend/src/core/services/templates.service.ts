import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/index';
import { Templates } from 'src/domain/templatesEntity/templates.entity';
import { CreateTemplateDto } from 'src/dtos/create-template.dto';
import { Questions } from 'src/domain/questionsEntity/questions.entity';
import { Options } from '../../domain/optionsEntity/options.entity';

@Injectable({ scope: Scope.REQUEST })
export class TemplateService {
  constructor(
    @InjectRepository(Templates)
    private templatesRepository: Repository<Templates>,

    @InjectRepository(Questions)
    private questionsRepository: Repository<Questions>,
    @InjectRepository(Options)
    private optionsRepository: Repository<Options>,
  ) {}

  async findAll(): Promise<Templates[]> {
    const result = await this.templatesRepository.find({});
    return result;
  }

  async findTemplateCreatorId(id): Promise<Templates[]> {
    const result = await this.templatesRepository.find({
      where: { creatorId: id },
    });
    return result;
  }

  async createTemplate(dto: CreateTemplateDto) {
    const temmplateCreate = this.templatesRepository.create({
      name: dto.name,
      creatorId: dto.creatorId,
      description: dto.description,
      date: dto.date,
      type: dto.type,
    });

    const template = await this.templatesRepository.save(temmplateCreate);
    dto.questions.forEach((element) => {
      const question = this.questionsRepository.create({
        name: element.name,
        type: element.type,
        description: element.description,
        questionTemplate: [{ templateId: template.id }],
      });
      const addOption = async () => {
        const questionInfo = await this.questionsRepository.save(question);
        element.options.forEach((item) => {
          const option = this.optionsRepository.create({
            questionId: questionInfo.id,
            name: item.name,
          });
          this.optionsRepository.save(option);
        });
      };
      addOption();
    });
    return 'Poll successfully сreated templates';
  }

  async delete(id) {
    try {
      const templateOnDelete = await this.templatesRepository.findOne(id);
      await this.templatesRepository.softRemove(templateOnDelete);
    } catch (err) {
      return 'Failed to delete, perhaps the template with this id does not exist';
    }
  }
}
