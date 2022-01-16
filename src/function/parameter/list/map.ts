
/**
 * map list of parameters {@link any[]} to record of function with the same parameter
 */

type Map<Arguments extends unknown[][]> = {
    [Key in keyof Arguments] : Arguments[Key] extends any[] ?  (...args:Arguments[Key])=>any : never
};
export default Map;
