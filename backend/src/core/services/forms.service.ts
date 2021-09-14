import { Injectable, NotFoundException, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/index';
import { CreateFormDto } from '../../dtos/create-form.dto';
import { Forms } from '../../domain/formEntity/forms.entity';
import { Questions } from '../../domain/questionsEntity/questions.entity';
import { FormQuestions } from '../../domain/formEntity/formQuestions.entity';
import { UserForms } from '../../domain/userEntity/userForms.entity';
import { UpdateFormDto } from '../../dtos/update-form';
import { Options } from '../../domain/optionsEntity/options.entity';

@Injectable({ scope: Scope.REQUEST })
export class FormsService {
  constructor(
    @InjectRepository(Forms)
    private formsRepository: Repository<Forms>,
    @InjectRepository(Questions)
    private questionsRepository: Repository<Questions>,
    @InjectRepository(FormQuestions)
    private formQuestionRepository: Repository<FormQuestions>,
    @InjectRepository(UserForms)
    private userFormRepository: Repository<UserForms>,
    @InjectRepository(Options)
    private optionsRepository: Repository<Options>,
  ) {}

  async findAll(): Promise<Forms[]> {
    return await this.formsRepository.find({
      relations: ['userForms', 'userForms.user'],
    });
  }

  async findFormsCreatorId(id): Promise<Forms[]> {
    return await this.formsRepository.find({
      where: { creatorId: id },
      relations: ['userForms', 'userForms.user'],
    });
  }

  async findForm(id): Promise<Forms> {
    return await this.formsRepository.findOne(id, {
      relations: ['userForms', 'userForms.user'],
    });
  }

  async createForm(dto: CreateFormDto) {
    const formCreate = this.formsRepository.create({
      name: dto.name,
      creatorId: dto.creatorId,
      periodicityType: dto.periodicity.type,
      periodicityDate: new Date(dto.periodicity.date),
      userForms: dto.users,
    });
    const form = await this.formsRepository.save(formCreate);

    dto.questions.forEach((element) => {
      const question = this.questionsRepository.create({
        name: element.name,
        type: element.type,
        description: element.description,
        formQuestions: [{ formId: form.id }],
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
    return 'Poll successfully added';
  }

  async delete(id) {
    const form = await this.formsRepository.findOne(id, {
      relations: ['userForms', 'userForms.user'],
    });
    await this.formsRepository.softRemove(form);
    return 'Poll successfully deleted';
  }

  async update(id: number, updateFormDto: UpdateFormDto) {
    const form = await this.formsRepository.findOne(id);
    if (form == undefined) {
      throw new NotFoundException(`Form with id=${id} not exists`);
    }
    form.activeStatus = updateFormDto.activeStatus;
    return await this.formsRepository.save(form);
  }
}
