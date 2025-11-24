export class Random {
    static random(min: number, max: number): number {
        if (hashRand && hashRand.rand) {
            return (hashRand.rand() * (max - min)) + min;
        } else {
            return Math.random() * (max - min) + min;
        }
    }

    static randomFloat(min: number, max: number): number {
        return Random.random(min, max);
    }

    static randomInt(min: number, max: number): number {
        return Math.floor(Random.randomFloat(min, max));
    }

    public static randomBoolean(): boolean {
        return Random.randomFloat(0, 1) < 0.5;
    }
}
