export class Character {
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

export class Bowerman extends Character {
	constructor(name, type, health, level, attack = 25, defence = 25) {
		super(name, type, health, level, attack, defence);
	}
}

export class Swordsman extends Character {
	constructor(name, type, health, level, attack = 40, defence = 10) {
		super(name, type, health, level, attack, defence);
	}
}

export class Magician extends Character {
	constructor(name, type, health, level, attack = 10, defence = 40) {
		super(name, type, health, level, attack, defence);
	}
}

export class Daemon extends Character {
	constructor(name, type, health, level, attack = 10, defence = 40) {
		super(name, type, health, level, attack, defence);
	}
}

export class Undead extends Character {
	constructor(name, type, health, level, attack = 25, defence = 25) {
		super(name, type, health, level, attack, defence);
	}
}

export class Zombie extends Character {
	constructor(name, type, health, level, attack = 40, defence = 10) {
		super(name, type, health, level, attack, defence);
	}
}
