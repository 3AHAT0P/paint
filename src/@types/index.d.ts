declare global {
  type Primitive = string | number | boolean | symbol;

  type FilterFlags<Base, Condition> = {
    [Key in keyof Base]:
    Base[Key] extends Condition ? Key : never
  };

  type AllowedNames<Base, Condition> =
    FilterFlags<Base, Condition>[keyof Base]

  type SubType<Base, Condition> = Pick<Base, {
    [Key in keyof Base]: Base[Key] extends Condition ? Key : never
  }[keyof Base]>;
}

export { };
