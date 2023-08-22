export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Такой персонаж уже есть!');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    const addChars = [...characters];
    addChars.forEach((el) => this.members.add(el));
  }

  toArray() {
    return Array.from(this.members);
  }
}
