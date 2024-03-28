function solution(bandage, health, attacks) {
	const maxHealth = health;
	const attack = {};
	let bandageCount = 0;
	const [bandageTime, bandageSize, bonus] = bandage;
	for (let i = 0; i < attacks.length; i++) {
		const [time, size] = attacks[i].map(Number);
		attack[time] = size;
	}
	for (let i = 0; i <= attacks[attacks.length - 1][0]; i++) {
		if (attack[i]) {
			// hp 깎고, 붕대 초기화
			health -= attack[i];
			bandageCount = 0;
			if (health <= 0) {
				return -1;
			}
		} else {
			// 공격 없으면 붕대 감기(연속 성공 count)
			if (i !== 0) {
				bandageCount++;
			}
			if (health < maxHealth) {
				health += bandageSize;
			}
			if (bandageCount === bandageTime) {
				health += bonus;
				bandageCount = 0;
			}
			if (health > maxHealth) {
				health = maxHealth;
			}
		}
	}
	return health > 0 ? health : -1;
}

console.log(
	solution([2, 1, 3], 20, [
		[1, 15],
		[6, 2],
	])
);

// 0 20
// 1 5
// 2 1 6
// 3 2 7 10
// 4 1 11
// 5 2 15
// 6 13
