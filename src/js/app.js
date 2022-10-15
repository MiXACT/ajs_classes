export default class Character {
	constructor(name, type, health = 100, level = 1, attack, defence) {
		const characterTypes = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
		if (name.length < 2 || name.length > 10) {
			throw new Error('NAME error');
		} else {
			this.name = name;
		}
		if (!characterTypes.includes(type)) {
			throw new Error('TYPE error');
		} else {
			this.type = type;
		}
		this.health = health;
		this.level = level;
		this.attack = attack;
		this.defence = defence;
	}
}
