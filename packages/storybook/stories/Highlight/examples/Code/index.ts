/* eslint-disable quotes */
export const __tsx = `import React from 'react';
import { Button } from "./components/Button";

type Props = {
  name: string;
  age: number;
};

const MyComponent: React.FC<Props> = ({ name, age }) => {
  const [count, setCount] = React.useState(0);
  const handleClick = () => setCount(count + 1);
  
  return (
    <div>
      <h1>Meu componente</h1>
      <p>Nome: {name}</p>
      <p>Idade: {age}</p>
      <p>Você clicou {count} vezes</p>
      <Button onClick={handleClick}>
        Clique aqui
      </Button>
    </div>
  );
};

export default MyComponent;`;

export const __typescript = `enum Role {
  ADMIN,
  USER,
  GUEST
}

class User {
  name: string;
  role: Role;

  constructor(name: string, role: Role) {
    this.name = name;
    this.role = role;
  }

  getPermissions(): string[] {
    switch (this.role) {
      case Role.ADMIN:
        return ['create', 'read', 'update', 'delete'];
      case Role.USER:
        return ['read', 'update'];
      case Role.GUEST:
        return ['read'];
      default:
        return [];
    }
  }
}

const user = new User('John', Role.USER);
console.log(user.getPermissions());`;

export const __jsx = `import React from 'react';

const MyComponent = () => {
  const [count, setCount] = React.useState(0);
  const handleClick = () => setCount(count + 1);

  return (
    <div>
      <h1>Meu componente</h1>
      <p>Você clicou {count} vezes</p>
      <button onClick={handleClick}>
        Clique aqui
      </button>
    </div>
  );
};

export default MyComponent;`;

export const __javascript = `const getData = async () => {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

getData()
  .then(data => console.log(data))
  .catch(error => console.error(error));
`;

export const __markup = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <header>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <h1>Welcome!</h1>
  </main>
  <footer>
    <p>Copyright 2023</p>
  </footer>
</body>
</html>`;

export const __bash = `#!/bin/bash

# Atualizar os pacotes do sistema
sudo apt-get update

# Instalar o Apache
sudo apt-get install apache2 -y

# Habilitar o módulo rewrite do Apache
sudo a2enmod rewrite

# Habilitar o Virtual Host do Apache
sudo cp /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/app.conf

# Alterar o DocumentRoot do Virtual Host para o diretório da aplicação
sed -i 's|/var/www/html|/var/www/app|g' /etc/apache2/sites-available/app.conf

# Desabilitar o Virtual Host padrão e habilitar o novo Virtual Host
sudo a2dissite 000-default.conf
sudo a2ensite app.conf

# Reiniciar o Apache
sudo systemctl restart apache2`;

export const __clike = `#include <stdio.h>

int main() {
  int a = 10;
  int b = 20;
  int c = a + b;
  printf("%d + %d = %d\\n", a, b, c);
  return 0;
}`;

export const __c = `#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
  srand(time(NULL));
  int randomNumber = rand();
  printf("Número aleatório: %d\\n", randomNumber);
  return 0;
}`;

export const __cpp = `#include <iostream>
#include <string>

using namespace std;

int main() {
  string name;
  cout << "Enter your name: ";
  getline(cin, name);
  cout << "Hello, " << name << "!" << endl;
  return 0;
}`;

export const __css = `body {
  font-family: sans-serif;
  color: #333;
  background-color: #fafafa;
}

h1 {
  font-size: 2em;
  margin: 0.5em 0;
}

p {
  font-size: 1.5em;
  margin: 0.5em 0;
}

a {
  color: #0070f3;
  text-decoration: none;
}

a:hover,
a:focus {
  color: #0050e3;
}

a:active {
  color: #0040d3;
}`;

export const __diff = `--- a/index.html
+++ b/index.html
@@ -1,7 +1,7 @@
 <!DOCTYPE html>
 <html lang="en">
   <head>
-    <link/>
-    <meta charset="UTF-8">
+    <meta charset="UTF-8" />
     <title>Document</title>
   </head>
   <body>
@@ -10,7 +10,7 @@
       <li><a href="#">About</a></li>
       <li><a href="#">Contact</a></li>
     </ul>
-  </nav>
+  </nav> 
   </header>
   <main>
     <h1>Welcome!</h1>`;

export const __git = `git add .
git commit -m "[feat]: Um exemplo do git"
git push origin main --force`;

export const __go = `package main

import "fmt"

func main() {
  numbers := []int{1, 2, 3, 4, 5}
  sum := 0
  for _, number := range numbers {
    sum += number
  }
  fmt.Println("Sum:", sum)
}`;

export const __graphql = `type Query {
  getUser(id: ID!): User
}

type User {
  id: ID!
  name: String!
  age: Int!
  email: String!
}

type Mutation {
  createUser(name: String!, age: Int!, email: String!): User
}`;

export const __handlebars = `<h1>{{title}}</h1>
<ul>
  {{#each items}}
    <li>{{this}}</li>
  {{/each}}
</ul>
{{#if hasItems}}
  <p>There are items in the list</p>
{{else}}
  <p>The list is empty</p>
{{/if}}`;

export const __json = `{
  "users": [
    {
      "id": 1,
      "name": "John",
      "age": 30,
      "email": "john@example.com"
    },
    {
      "id": 2,
      "name": "Jane",
      "age": 25,
      "email": "jane@example.com"
    }
  ]
}`;

export const __less = `@color: #333;

body {
  font-family: sans-serif;
  color: @color;
}

a {
  color: darken(@color, 10%);
  &:hover {
    color: darken(@color, 20%);
  }
  &:active {
    color: darken(@color, 30%);
  }
}

h1 {
  font-size: 2em;
  margin: 0.5em 0;
}

p {
  font-size: 1.5em;
  margin: 0.5em 0;
}`;

export const __makeFile = `CC = gcc
CFLAGS = -Wall -Wextra -Werror

all: main.o factorial.o
	$(CC) $(CFLAGS) main.o factorial.o -o main

main.o: main.c
	$(CC) $(CFLAGS) -c main.c

factorial.o: factorial.c
	$(CC) $(CFLAGS) -c factorial.c

clean:
	rm -f *.o main

.PHONY: all clean`;

export const __markdown = `# Welcome to my blog

Hi there! My name is John and this is my blog. Here, I write about my interests and share my thoughts with the world.

## Latest posts

- [The importance of staying curious](/posts/stay-curious)
- [5 tips for better time management](/posts/time-management)
- [My favorite books of all time](/posts/favorite-books)

## About me

I'm a software developer and avid reader. In my free time, I enjoy traveling and trying new foods. I hope you enjoy reading my blog!`;

export const __objectivec = `#import <Foundation/Foundation.h>

int main(int argc, const char * argv[]) {
  @autoreleasepool {
    NSLog(@"Hello, World!");
  }
  return 0;
}`;

export const __ocaml = `let rec factorial n =
if n = 0 then 1
else n * factorial (n - 1)

let () =
let n = 5 in
let result = factorial n in
Printf.printf "The factorial of %d is %d\\n" n result`;

export const __python = `def factorial(n):
if n == 0:
    return 1
else:
    return n * factorial(n - 1)

n = 5
result = factorial(n)
printf("The factorial of {n} is {result}")`;

export const __reason = `let factorial = (n: int) => {
  if (n == 0) {
    1
  } else {
    n * factorial(n - 1)
  }
};

let n = 5;
let result = factorial(n);
print_endline(string_of_int(result));`;

export const __sass = `$font-stack: Helvetica, sans-serif
$primary-color: #333

body
  font: 100% $font-stack
  color: $primary-color
`;

export const __scss = `body {
  font: 100% $font-stack;
  color: $primary-color;
}

a {
  color: darken($primary-color, 10%);
  &:hover {
    color: darken($primary-color, 20%);
  }
  &:active {
    color: darken($primary-color, 30%);
  }
}

h1 {
  font-size: 2em;
  margin: 0.5em 0;
}

p {
  font-size: 1.5em;
  margin: 0.5em 0;
}`;

export const __sql = `CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  age INTEGER NOT NULL,
  email TEXT NOT NULL UNIQUE
);

INSERT INTO users (name, age, email)
VALUES ('John', 30, 'john@example.com'),
       ('Jane', 25, 'jane@example.com');

SELECT * FROM users;`;

export const __stylus = `body
font: 100% font-stack
color: primary-color

a
color: darken(primary-color, 10%)
&:hover
  color: darken(primary-color, 20%)
&:active
  color: darken(primary-color, 30%)

h1
font-size: 2em
margin: 0.5em 0

p
font-size: 1.5em
margin: 0.5em 0`;

export const __yaml = `applications:
- name: my-app
  memory: 128M
  instances: 1
  domain: example.com
  host: my-app
  path: .
  buildpack: nodejs_buildpack
- name: my-other-app
  memory: 256M
  instances: 2
  domain: example.com
  host: my-other-app
  path: .
  buildpack: python_buildpack`;

export const __latex = `x = \\frac{5}{4}`;

export const __ruby = `def sum_eq_n?(arr, n)
  return true if arr.empty? && n == 0
  arr.product(arr).reject { |a,b| a == b }.any? { |a,b| a + b == n }
end`;