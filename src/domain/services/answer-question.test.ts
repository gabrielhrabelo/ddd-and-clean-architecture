import { expect, test } from 'vitest'
import type { Answer } from '../entities/answer.ts'
import type { AnswersRepository } from '../repositories/answers-repository.ts'
import { AnswerQuestionService } from './answer-question.ts'

const fakeAnswersRepository: AnswersRepository = {
  create: async (answer: Answer) => {
    return
  },
}

test('create an answer', async () => {
  const answerQuestion = new AnswerQuestionService(fakeAnswersRepository)

  const answer = await answerQuestion.execute({
    instructorId: '1',
    questionId: '1',
    content: 'new answer',
  })

  expect(answer.content).toEqual('new answer')
})
