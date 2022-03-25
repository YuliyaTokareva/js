'use strict';

export class User {
  constructor(id, name, sessionId) {
    this._id = String(id);
    this._name = String(name);
    this._sessionId = String(sessionId);
  }
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get sessionId() {
    return this._sessionId;
  }
}

export class UserRepository {
  constructor(users) {
    this._users = Object.freeze(users);
  }
  get users() {
    return this._users;
  }
  getUserNames() {
    const allName = [];
    this._users.forEach(el => {
      allName.push(el._name);
    });
    return allName;
  }
  getUserIds() {
    const allId = [];
    this._users.forEach(el => {
      allId.push(el._id);
    });
    return allId;
  }
  getUserNameById(id) {
    const user = this._users.find(user => user.id === id);
    return user ? user.name : null;
  }
}

// examples
const user = new User('1', 'Tom', 'session-id');
const user1 = new User('12', 'Ann', 'session-id');
const user2 = new UserRepository([user, user1]);

console.log(user2.getUserNames());
console.log(user2.getUserIds());
console.log(user2.getUserNameById(15));
console.log(user2._users);

// получить свойства можем
console.log(user.id); // ===> '1'
console.log(user.name); // ===> 'Tom'
console.log(user.sessionId); // ===> 'session-id'

// но изменить эти свойства нельзя
// user.name = 'Bob'; // пытаемся изменить старое значение
// console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует
