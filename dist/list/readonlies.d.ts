export default interface Readonlies<Type extends unknown[]> {
    list: Readonly<Type>;
}
