import Character from '../app';
import Bowerman from '../bowerman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Daemon from '../daemon';
import Undead from '../undead';
import Zombie from '../zombie';

test('testing hero classes', () => {
	function parentHeroNameError() {
		const hero = new Character('e', 'name error type');
		return hero;
	}

	function parentHeroTypeError() {
		const hero = new Character('ErrorMan', 'error type');
		return hero;
	}

	expect(parentHeroNameError).toThrow('NAME error');
	expect(parentHeroTypeError).toThrow('TYPE error');

	expect(new Bowerman('TestMan')).toBeDefined();
	expect(new Swordsman('TestMan')).toBeDefined();
	expect(new Magician('TestMan')).toBeDefined();
	expect(new Daemon('TestMan')).toBeDefined();
	expect(new Undead('TestMan')).toBeDefined();
	expect(new Zombie('TestMan')).toBeDefined();
});
