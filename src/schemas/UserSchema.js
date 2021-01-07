export default class UserSchema {
  static schema = {
    name: 'UserInfo',
    primary: 'id',
    properties: {
      id: { type: 'int', indexed: true },
      avatar_url: 'string',
      name: 'string',
      login: 'string',
      location: 'string',
      public_repos: 'int',
      followers: 'int',
      following: 'int',
      html_url: 'string',
    },
  };
}
