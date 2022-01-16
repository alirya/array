/**
 * Convert {@template Container} Value type to {@template Replace} type
 *
 */
type Map<Container extends unknown[], Replace> = {
    [Index in keyof Container] :  Replace
};

export default Map;
