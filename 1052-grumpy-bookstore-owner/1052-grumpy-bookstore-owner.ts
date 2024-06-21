function maxSatisfied(customers: number[], grumpy: number[], minutes: number): number {
    // Calculate the initial satisfaction when the owner is grumpy for the first 'minutes' minutes.
    // If the owner is not grumpy (!grumpy[i]), add the customers for that minute to the total.
    // If the owner is grumpy, but we're still within the first 'minutes' minutes, also add the customers for that minute to the total.
    let satisfactionWithGrumpy = customers.reduce((totalSatisfaction, customersThisMinute, i) => !grumpy[i] || i < minutes ? totalSatisfaction + customersThisMinute : totalSatisfaction, 0);

    // Initialize maxSatisfaction with the initial satisfaction.
    let maxSatisfaction = satisfactionWithGrumpy;

    // Iterate over the rest of the minutes.
    for (let i = minutes; i < customers.length; i++) {
        // If the owner is grumpy at minute i, add the customers for that minute to satisfactionWithGrumpy.
        satisfactionWithGrumpy += customers[i] * grumpy[i];

        // If the owner was grumpy 'minutes' minutes ago, subtract the customers for that minute from satisfactionWithGrumpy.
        satisfactionWithGrumpy -= customers[i - minutes] * grumpy[i - minutes];

        // Update maxSatisfaction if the current satisfaction is greater.
        maxSatisfaction = Math.max(maxSatisfaction, satisfactionWithGrumpy);
    }

    // Return the maximum satisfaction that can be achieved.
    return maxSatisfaction;
};