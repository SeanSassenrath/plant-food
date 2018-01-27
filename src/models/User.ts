import { types } from 'mobx-state-tree';

export const User = types
  .model({
    name: types.string,
    profileImg: '',
    isLoggedIn: types.boolean,
  })