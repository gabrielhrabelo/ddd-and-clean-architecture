import { Entity } from '../../core/entities/entity.ts'
import type { Slug } from './value-objects/slug.ts'

interface QuestionProps {
  title: string
  authorId: string
  content: string
  slug: Slug
}

export class Question extends Entity<QuestionProps> {}
