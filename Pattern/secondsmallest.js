function second_smallest(n) {
    let small = Number.MAX_VALUE
    let small_second = Number.MAX_VALUE;
    for (let i = 0; i < n.length; i++) {
        let currentNumber = n[i];

        if (currentNumber < small) {
            small_second = small;
            small = currentNumber;
        }
        if (currentNumber < small_second && currentNumber != small) {
            small_second = currentNumber;
        }
    }

    // Print the second smallest number to the console
    console.log(small_second);
}

second_smallest([1, 2, 3, 4, 5, 1, 2, 3, 4]);