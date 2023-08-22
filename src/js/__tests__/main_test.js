import Char from '../Character';
import Team from '../Team';

const char1 = new Char('4242', 'sword');
const char2 = new Char('4343', 'bow');
const char3 = new Char('4444', 'wiz');

test('test add', () => {
  const team1 = new Team();
  team1.add(char1);
  expect(team1.members.size).toBe(1);
});
test('test add error', () => {
  const team1 = new Team();
  team1.add(char1);
  expect(() => { team1.add(char1); }).toThrow('Такой персонаж уже есть!');
});
test('test addAll', () => {
  const team1 = new Team();
  team1.addAll(char1, char2, char3);
  expect(team1.members.size).toBe(3);
});
test('test addAll duble', () => {
  const team1 = new Team();
  team1.addAll(char1, char2, char3, char1, char2);
  expect(team1.members.size).toBe(3);
});
test('test toArray', () => {
  const team1 = new Team();
  team1.addAll(char1, char2, char3);
  expect(Array.isArray(team1.toArray())).toBe(true);
});
