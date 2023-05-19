import { simpleHash } from '@tamagui/helpers'

import { Variable, createVariable, isVariable } from './createVariable'

type DeepTokenObject<Val extends string | number = any> = {
  [key: string]: Val | DeepTokenObject<Val>
}

export type DeepVariableObject<A extends DeepTokenObject> = {
  [Key in keyof A]: A[Key] extends string | number
    ? Variable<A[Key]>
    : A[Key] extends DeepTokenObject
    ? DeepVariableObject<A[Key]>
    : never
}

export const createVariables = <A extends DeepTokenObject>(
  tokens: A,
  parentPath = '',
  isFont = false
): DeepVariableObject<A> => {
  const res: any = {}
  let i = 0
  for (let keyIn in tokens) {
    i++
    const val = tokens[keyIn]
    const keyWithPrefix = keyIn[0] === '$' ? keyIn : `$${keyIn}`
    const key = keyWithPrefix.slice(1)
    if (isVariable(val)) {
      res[key] = val
      continue
    }
    const niceKey = simpleHash(key)
    let name = isFont ? niceKey.slice(0, 2) : i
    name = parentPath ? `${parentPath}-${name}` : niceKey
    if (val && typeof val === 'object') {
      // recurse
      res[key] = createVariables(tokens[key] as any, name)
      continue
    }
    res[key] = isVariable(val) ? val : createVariable({ val, name, key: keyWithPrefix })
  }

  return res
}
