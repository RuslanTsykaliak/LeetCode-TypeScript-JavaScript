function lemonadeChange(bills: number[]): boolean {
    const currentMoney = {
        5: 0,
        10: 0,
        20: 0,
    };

    for (let i = 0; i < bills.length; i++) {
        const currentBill = bills[i];

        switch (currentBill) {
            case 5:
                currentMoney[5]++;
                break;

            case 10:
                if (currentMoney[5] === 0) {
                    return false;
                }
                currentMoney[5]--;
                currentMoney[10]++;
                break;

            case 20:
                if (currentMoney[10] > 0 && currentMoney[5] > 0) {
                    currentMoney[10]--;
                    currentMoney[5]--;
                    currentMoney[20]++;
                } else if (currentMoney[5] >= 3) {
                    currentMoney[5] -= 3;
                    currentMoney[20]++;
                } else {
                    return false;
                }
                break;
        }
    }

    return true;
}