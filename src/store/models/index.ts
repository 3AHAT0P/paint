import {
  markRaw,
  readonly,
  reactive,
  DeepReadonly,
} from 'vue';

interface GeoDTO {
  lat: string;
  lng: string;
}

interface AddressDTO {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoDTO;
}

interface CompanyDTO {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface UserDTO {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  address: AddressDTO;
  company: CompanyDTO;
}

export default class User {
  public static fromDTO(data: UserDTO) {
    const instance = new this(data);
    return markRaw(instance);
  }

  #state: UserDTO;

  public readonly state: DeepReadonly<UserDTO>;

  constructor(data: UserDTO) {
    this.#state = reactive(data);
    this.state = readonly(this.#state);
  }

  updateField(key: AllowedNames<UserDTO, Primitive>, value: UserDTO[typeof key]): this {
    if (key == null) throw new Error('Key is invalid!');

    Reflect.set(this.#state, key, value);

    return this;
  }

  updateRelation(key: Exclude<keyof UserDTO, AllowedNames<UserDTO, Primitive>>, value: UserDTO[typeof key]): this {
    if (key == null) throw new Error('Key is invalid!');

    Reflect.set(this.#state, key, value);

    return this;
  }

  toDTO() {
    return JSON.parse(JSON.stringify(this.state));
  }

  toJSON() {
    return JSON.stringify(this.state);
  }

  valueOf() {
    return this.toJSON();
  }
}
