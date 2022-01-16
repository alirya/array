/**
 * map list of parameter to record of function with the same parameter
 */
type MapSingle<Arguments extends unknown[]> = {
    [Key in keyof Arguments] :  (arg:Arguments[Key])=>any
};
export default MapSingle;
