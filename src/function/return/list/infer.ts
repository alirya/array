import Callable from '@alirya/function/callable.js';

type Infer<Values extends Callable[]> = {
    [Key in keyof Values]:  Values[Key] extends Callable ? ReturnType<Values[Key]> : never
};
export default Infer;
