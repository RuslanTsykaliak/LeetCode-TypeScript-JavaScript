function maxSatisfied(customers: number[], grumpy: number[], minutes: number): number {
    let satisfactionWithGrumpy = customers.reduce((totalSatisfaction, customersThisMinute, i) => !grumpy[i] || i < minutes ? totalSatisfaction + customersThisMinute : totalSatisfaction, 0);
    let maxSatisfaction = satisfactionWithGrumpy;
    for (let i = minutes; i < customers.length; i++) {
        satisfactionWithGrumpy += customers[i] * grumpy[i];
        satisfactionWithGrumpy -= customers[i - minutes] * grumpy[i - minutes];
        maxSatisfaction = Math.max(maxSatisfaction, satisfactionWithGrumpy);
    }
    return maxSatisfaction;
};