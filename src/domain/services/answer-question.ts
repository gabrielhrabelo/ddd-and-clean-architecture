import { UniqueEntityID } from '../../core/entities/unique-entity-id.ts'
import { Answer } from '../entities/answer.ts'
import type { AnswersRepository } from '../repositories/answers-repository.ts'

interface AnswerQuestionServiceRequest {
  instructorId: string
  questionId: string
  content: string
}

export class AnswerQuestionService {
  constructor(private answersRepository: AnswersRepository) {}
  async execute({
    instructorId,
    questionId,
    content,
  }: AnswerQuestionServiceRequest) {
    const answer = Answer.create({
      content,
      authorId: new UniqueEntityID(instructorId),
      questionId: new UniqueEntityID(questionId),
    })

    await this.answersRepository.create(answer)

    return answer
  }
}
