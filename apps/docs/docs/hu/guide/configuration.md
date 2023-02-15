# Configuration

## Git

A további munkához a Git-et WSL-re kell konfigurálnunk. Állítsa be saját e-mail címét és nevét.

```bash
email=john.doe@email.com
name="John Doe"

git config --global user.email $email
git config --global user.name $name
git config --global core.editor "code --wait"
```

A GPG beállítása nem kötelező. A "kiemelt" sorok jelentőségteljesek a WSL-n.

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

A böngésző megnyitja a GitHub beállítási oldalát – be kell jelentkeznie. A cím nem kötelező, de a létrehozott aláíró kulcsot beillesztheti a vágólapról, tehát csak illessze be - `⌃ctrl v`.

![GPG example](/images/gpg-example.png)

## Docker Desktop

Alapértelmezés szerint nem kell beállítani, de néhány beállítást ajánlott ellenőrizni.

- General
  - Use the WSL 2 based engine
  - Use Docker Compose V2
- Resources
  - WSL integration
    - Enable integration with my default WSL distro

## Visual Studio Code

Szükségünk van a korábban említett bővítményekre, és ezeket globálisan kell telepíteni.

```ps
code --install-extension ms-vscode-remote.remote-containers
code --install-extension ms-vscode-remote.remote-wsl
```
::: warning IMPORTANT
A `Docker`-t a `VS Code`-dal együtt kell elindítani és futni, a devcontainerek nem indulnának el docker motor nélkül!
:::

### Nyissa meg az új WSL ablakot a `VS Code`-ban

Nyissa meg az `F1` parancspalettát vagy a `⌃ctrl ⇧shift p` billentyűt, és válassza a `WSL: Új WSL ablak` lehetőséget.

```bash
code --remote wsl+Ubuntu
```

## WSL

Javasoljuk, hogy a WSL-en belül hozzon létre mappát, és használja további projektekhez.

```bash
mkdir -p ~/Code/GitHub/johndoe
```
