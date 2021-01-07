export default class UserSchema {
  static schema = {
    name: 'UserInfo',
    primary: 'id',
    properties: {
      id: { type: 'int', indexed: true },
      login: 'string',
      fullName: 'string',
      avatar_url: 'string',
      name: 'string',
      location: 'string',
      url: 'string',
      followers: 'string',
      following: 'string',
    },
  };
}
