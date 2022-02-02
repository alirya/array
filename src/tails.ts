type TailCapture<
    Array extends unknown[],
    Position extends number,
    Buffer extends unknown[] = [],
    Capture extends unknown[] = []
> =
    Array['length'] extends Position
        ? Capture
        : (
            Array extends [...infer Remain, infer Capture]
                ? TailCapture<[...Remain], Position, [Capture, ...Buffer], Buffer>
                : Buffer
            );


type Tails<Array extends unknown[], Position extends number> = TailCapture<Array, Position>;

export default Tails;
