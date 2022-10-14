import {
	Character,
	Bowerman,
	Swordsman,
	Magician,
	Daemon,
	Undead,
	Zombie,
} from '../app';

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

	expect(new Bowerman('TestMan', 'Bowerman')).toBeDefined();
	expect(new Swordsman('TestMan', 'Swordsman')).toBeDefined();
	expect(new Magician('TestMan', 'Magician')).toBeDefined();
	expect(new Daemon('TestMan', 'Daemon')).toBeDefined();
	expect(new Undead('TestMan', 'Undead')).toBeDefined();
	expect(new Zombie('TestMan', 'Zombie')).toBeDefined();
});
