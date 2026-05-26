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
    const answer = new Answer({
      content,
      authorId: instructorId,
      questionId,
    })

    await this.answersRepository.create(answer)

    return answer
  }
}
