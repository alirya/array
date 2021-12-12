
/**
 * reset array index
 *
 * removes deleted index
 *
 * @param argument
 */
export default function Reset<
    Argument extends unknown[]
>(argument : Argument) : void {

    let i = 0;
    argument.forEach((value) => {

        argument[i] = value;
        i++;
    });

    argument.splice(i);
}
