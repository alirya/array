
type HeadCapture<Array extends unknown[], Position extends number, Captures extends unknown[] = []> =
    Captures['length'] extends Position
        ? Captures
        : (
            Array extends [infer Capture, ...infer Remain]
                ? HeadCapture<[...Remain], Position, [...Captures, Capture]>
                : Captures
            );


type Heads<Array extends unknown[], Position extends number> = HeadCapture<Array, Position>;

export default Heads;
