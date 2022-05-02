import { JsonFragmentType, Result } from '@ethersproject/abi';
import Coder from 'abi-coder';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Params = any[];

type ReadonlyJsonFragments = ReadonlyArray<JsonFragmentType>;

class Abi {
  static encode(
    name: string,
    jsonInputs: ReadonlyJsonFragments,
    params: Params,
  ): string {
    const abi = [
      {
        type: 'function',
        name,
        inputs: jsonInputs,
      },
    ];
    const coder = new Coder(abi);
    return coder.encodeFunction(name, params);
  }

  static encodeConstructor(
    jsonInputs: ReadonlyJsonFragments,
    params: Params,
  ): string {
    const abi = [
      {
        type: 'constructor',
        inputs: jsonInputs,
      },
    ];
    const coder = new Coder(abi);
    return coder.encodeConstructor(params);
  }

  static decode(
    name: string,
    jsonOutputs: ReadonlyJsonFragments,
    data: string,
  ): Result {
    const abi = [
      {
        type: 'function',
        name,
        outputs: jsonOutputs,
      },
    ];
    const coder = new Coder(abi);
    const output = coder.decodeFunctionOutput(name, data);
    return output.values;
  }
}

export { Params, ReadonlyJsonFragments };

export default Abi;
