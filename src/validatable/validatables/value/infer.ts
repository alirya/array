import Validatables from '../validatables.js';


type Infer<Instance> = Instance extends Validatables<infer Validatable> ? Validatable : never;

export default Infer;
