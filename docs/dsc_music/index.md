---
title: Installation
sidebar-position: 1
---

Here's how to install **dsc-music** on your machine.

## Step 1: Installing the needed software.

To use dsc-music you'll need to have [**NodeJS**](https://www.nodejs.org) and NPM installed on your computer.

### Linux:

:::caution

**BEWARE**: The NodeJS package name may vary between _node_ and _nodejs_
:::

Debian/Ubuntu based:

```bash
sudo apt update
sudo apt upgrade
sudo apt install node npm
```

Arch based:

```bash
sudo pacman -Syu
sudo pacman -Sy node npm
```

Generic (Work In Progress):

```bash
mkdir node_download && cd node_download
wget
```

### Windows:

Bruh go to the [**Official Site**](https://nodejs.org/en/download/current/) and download that nasty .exe file.

### Mac OS

In Mac OS you can both use the [**Installer**](https://nodejs.org/en/download/current/) or you can install it using [**Homebrew**](https://brew.sh/).

```bash
brew install nodejs
```

## Step 2: Download the library

```bash
npm i --save dsc-music
```