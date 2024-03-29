function solution(friends, gifts) {
	const giftList = {};

	friends.forEach((friend) => {
		giftList[friend] = {
			giftScore: 0,
			nextCount: 0,
		};
	});

	for (let i = 0; i < gifts.length; i++) {
		const [sendFriend, receiveFriend] = gifts[i].split(" ");

		if (!giftList[sendFriend][receiveFriend]) {
			giftList[sendFriend][receiveFriend] = 0;
		}
		giftList[sendFriend][receiveFriend] += 1;
		giftList[sendFriend].giftScore++;
		giftList[receiveFriend].giftScore--;
	}
	for (let i = 0; i < friends.length - 1; i++) {
		for (let j = i + 1; j < friends.length; j++) {
			// 선물 주고 받은 기록이 있다면 많이 준 사람 ++
			const senderScore = giftList[friends[i]][friends[j]]
				? giftList[friends[i]][friends[j]]
				: 0;
			const receiverScore = giftList[friends[j]][friends[i]]
				? giftList[friends[j]][friends[i]]
				: 0;
			if (senderScore > receiverScore) {
				giftList[friends[i]].nextCount++;
			} else if (senderScore < receiverScore) {
				giftList[friends[j]].nextCount++;
			} else if (senderScore === receiverScore) {
				if (giftList[friends[i]].giftScore > giftList[friends[j]].giftScore) {
					giftList[friends[i]].nextCount++;
				} else if (
					giftList[friends[i]].giftScore < giftList[friends[j]].giftScore
				) {
					giftList[friends[j]].nextCount++;
				}
			}
		}
	}
	let maxCount = Math.max(
		...Object.values(giftList).map((friend) => friend.nextCount)
	);
	return maxCount;
}
console.log(
	solution(
		["muzi", "ryan", "frodo", "neo", "king"],
		[
			"muzi frodo",
			"muzi frodo",
			"ryan muzi",
			"ryan muzi",
			"ryan muzi",
			"frodo muzi",
			"frodo ryan",
			"neo muzi",
		]
	)
);
