import Validatables from '../validatables';


type Infer<Instance> = Instance extends Validatables<infer Validatable> ? Validatable : never;

export default Infer;
