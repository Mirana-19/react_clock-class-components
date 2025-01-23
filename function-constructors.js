"use strict";

class User {
  static list = [];
  constructor(name, email) {
    this.name = name;
    this.email = email;

    this.role = "user";

    User.list.push(this);
  }
}

const peter = new User("Peter", "peter@gmail.com"); // { name: 'Peter', email: peter@gmail.com' }

console.log(peter);

class Admin extends User {
  static list = [];

  constructor(name, email) {
    super(name, email);

    this.role = "admin";

    Admin.list.push(this);
  }
}
const dennis = new Admin("Dennis", "dennis@gmail.com"); // { name: 'Dennis', email: 'dennis@gmail.com' }
const alex = new Admin("Alex", "alex@gmail.com"); // { name: 'Alex', email: 'alex@gmail.com' }

const ann = new User("Ann", "ann@gmail.com"); // { name: 'Ann', email: 'ann@gmail.com; }

console.log(User.list);

console.log(Admin.list);
console.log(dennis.list);
