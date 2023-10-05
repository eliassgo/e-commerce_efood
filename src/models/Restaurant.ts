class Restaurant {
  category: string[]
  image: string
  title: string
  score: string
  description: string
  id: number

  constructor(
    id: number,
    category: string[],
    description: string,
    image: string,
    title: string,
    score: string
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.image = image
    this.title = title
    this.score = score
  }
}

export default Restaurant
