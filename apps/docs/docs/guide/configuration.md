# Configuration

## Git

For further work, we need to configure Git to WSL. Setup you own email address and name.

```bash
email=john.doe@email.com
name="John Doe"

git config --global user.email $email
git config --global user.name $name
git config --global core.editor "code --wait"
```

Setting up GPG is optional. The `highlighted` lines are meaningful on WSL.

```bash{4,23,24}
sudo apt update -y && sudo apt upgrade -y
sudo apt install -y gpg socat && sudo apt autoremove -y

echo "pinentry-program $(command -v pinentry.exe)" >~/.gnupg/gpg-agent.conf

chmod 700 ~/.gnupg
chmod 600 ~/.gnupg/*
gpg-connect-agent reloadagent /bye
gpg --default-new-key-algo rsa4096 --gen-key

signing_key=$(
  gpg --list-secret-keys --keyid-format long |
  grep ^sec |
  tail -1 |
  cut -f 2 -d "/" |
  cut -f 1 -d " "
)

git config --global commit.gpgsign true
git config --global tag.forcesignannotated true
git config --global user.signingkey "${signing_key}"

gpg --armor --export "${signing_key}" | clip.exe
explorer.exe https://github.com/settings/gpg/new
```

The browser will be open the settings page on GitHub - you need to log in. Title isn't required but you can paste the created signing key from your clipboard, so just paste it - `⌃ctrl v`.

![GPG example](/images/gpg-example.png)

## Docker Desktop

No need to setup by default but there are some settings recommended to be checked.

- General
  - Use the WSL 2 based engine
  - Use Docker Compose V2
- Resources
  - WSL integration
    - Enable integration with my default WSL distro

## Visual Studio Code

We need previously mentioned extensions and they need to be installed globally.

```ps
code --install-extension ms-vscode-remote.remote-containers
code --install-extension ms-vscode-remote.remote-wsl
```
::: warning IMPORTANT
`Docker` need to be started and running alongside `VS Code`, devcontainers wouldn't start without docker engine!
:::

### Open new WSL window in `VS Code`

Open command pallette `F1` or `⌃ctrl ⇧shift p` and select `WSL: New WSL Window`

```bash
code --remote wsl+Ubuntu
```

## WSL

It's recommend to create folder inside WSL and use it for further projects.

```bash
mkdir -p ~/Code/GitHub/johndoe
```
