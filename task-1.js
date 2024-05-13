function climbHill() {
    const hillHeight = 100;
    const climbPerDay = 50;
    const slipPerNight = 30;
    let distanceClimbed = 0;
    let days;

    // Цикл для подсчета дней
    for (days = 0; distanceClimbed < hillHeight; days++) {
        // Черепашка забирается вверх
        distanceClimbed += climbPerDay;
        if (distanceClimbed === hillHeight) {
            break;
        }
        // Черепашка скатывается вниз
        distanceClimbed -= slipPerNight;
    }

    console.log("Черепашка залезет на столб на " + days + " день.");
}

climbHill();

// За день черепашка преодолевает 50м вверх и 30м вниз, что означает, что она продвигается на 20м вверх за каждый день.
// Таким образом, черепашке потребуется 100м (высота холма) / 20м (прогресс за день) = 5 дней, чтобы достичь вершины холма.
// Таким образом, черепашка залезет на вершину холма на 5-й день.