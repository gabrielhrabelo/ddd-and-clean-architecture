import { Entity } from '../../core/entities/entity.ts'
import type { UniqueEntityID } from '../../core/entities/unique-entity-id.ts'

interface AnswerProps {
  authorId: UniqueEntityID
  questionId: UniqueEntityID
  content: string
  createdAt: Date
  updatedAt?: Date
}

export class Answer extends Entity<AnswerProps> {
  public get content() {
    return this.props.content
  }
}
