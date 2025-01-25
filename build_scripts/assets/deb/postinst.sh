#!/usr/bin/env bash
# Post install script for the UI .deb to place symlinks in places to allow the CLI to work similarly in both versions

set -e

chown -f root:root /opt/nchain/chrome-sandbox || true
chmod -f 4755 /opt/nchain/chrome-sandbox || true
ln -s /opt/nchain/resources/app.asar.unpacked/daemon/nchain /usr/bin/nchain || true
ln -s /opt/nchain/nchain-blockchain /usr/bin/nchain-blockchain || true
