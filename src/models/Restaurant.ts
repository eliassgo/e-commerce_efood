class Restaurant {
  category: string[]
  image: string
  title: string
  score: string
  description: string
  id: number
  to: string
  constructor(
    id: number,
    category: string[],
    description: string,
    image: string,
    title: string,
    score: string,
    to: string
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.image = image
    this.title = title
    this.score = score
    this.to = to
  }
}

export default Restaurant
