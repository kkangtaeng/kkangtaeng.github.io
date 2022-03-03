---
layout: single
title: "개발자 환경 초기설정"

categories:
  - Etc
---

용량과 작은 문제로 인해 포맷을 하게되어서 초기설정을 다시 하게되면서

블로그를 작성해보았다. 초기설정은 어려워...

# 개발자 환경 설정

### — Xcode Command Line Tools

- homebrew를 설치하기 이전에 Xcode Command Line Tools를 먼저 설치해야한다

```jsx
xcode-select--install
// 위 명령어를 입력해 설치를 진행한다
```

### — Homebrew

- homebrew 사이트 : [https://brew.sh/](https://brew.sh/)

```jsx
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
// 위 명령어를 입력해 설치를 진행한다
```

- 위 명령어를 입력하면 비밀번호 입력칸이 나오는데 mac os 비밀번호를 입력하면 된다

```jsx
==> Next steps:
- Run these two commands in your terminal to add Homebrew to your PATH:
    echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/kkangtaeng/.zprofile
    eval "$(/opt/homebrew/bin/brew shellenv)"
- Run brew help to get started
```

- Next steps부분에 있는대로 터미널에 입력한다

### — wget

```jsx
brew install wget
// 위 명령어를 입력해 설치를 진행한다

brew update
brew install wget
// 만약에 Command 'wget' not found가 뜨게되면 위 명령어를 입력한다
```

### — nvm

nvm 사이트 : [https://github.com/nvm-sh/nvm#install--update-script](https://github.com/nvm-sh/nvm#install--update-script)

```jsx
wget -qO- [https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh](https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh) | bash
// 위 명령어를 입력해 설치를 진행한다
```

- 설치가 끝나면 터미널을 재시작해야 적용된다

```jsx
nvm --versio
// 위 코드를 입력하면 버전이 나온다

zsh: command not found: nvm
// 만약에 위처럼 에러가 뜨면

touch ~/.zshrc
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
// 위 코드를 입력하면 된다
```

### — node.js

node 사이트 : [https://nodejs.org/en/](https://nodejs.org/en/)

```jsx
nvm install <node 버전>
// 위 명령어로 node를 다운받으면 된다

nvm use <node 버전>
// 위 명령어로 node 버전을 변경할 수 있다
```
