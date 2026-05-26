import { Entity } from '../../core/entities/entity.ts'
import type { UniqueEntityID } from '../../core/entities/unique-entity-id.ts'
import type { Optional } from '../../core/types/optional.ts'
import type { Slug } from './value-objects/slug.ts'

interface QuestionProps {
  title: string
  authorId: UniqueEntityID
  bestAnswerId?: UniqueEntityID
  content: string
  slug: Slug
  createdAt: Date
  updatedAt?: Date
}

export class Question extends Entity<QuestionProps> {
  static create(
    props: Optional<QuestionProps, 'createdAt'>,
    id?: UniqueEntityID,
  ) {
    const question = new Question(
      {
        ...props,
        createdAt: new Date(),
      },
      id,
    )

    return question
  }
}
