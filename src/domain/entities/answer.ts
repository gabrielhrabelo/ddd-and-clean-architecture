import { Entity } from '../../core/entities/entity.ts'

interface AnswerProps {
  content: string
  authorId: string
  questionId: string
}

export class Answer extends Entity<AnswerProps> {
  public get content() {
    return this.props.content
  }
}
