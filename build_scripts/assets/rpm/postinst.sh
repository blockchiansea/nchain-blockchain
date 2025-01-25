#!/usr/bin/env bash
# Post install script for the UI .rpm to place symlinks in places to allow the CLI to work similarly in both versions

set -e

ln -s /opt/nchain/resources/app.asar.unpacked/daemon/nchain /usr/bin/nchain || true
ln -s /opt/nchain/nchain-blockchain /usr/bin/nchain-blockchain || true
