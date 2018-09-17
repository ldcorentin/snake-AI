class Food {

  constructor (field) {
    const freePositions = field.getfreePositions()
    this.position = freePositions[Math.floor(Math.random() * freePositions.length)]
  }

  draw(p, field) {
    p.fill(74, 232, 26)
    p.rect(
      field.food.position[0] * field.unit - field.unit,
      field.food.position[1] * field.unit - field.unit,
      field.unit,
      field.unit
    )
  }
}
