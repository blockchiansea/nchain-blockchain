from __future__ import annotations

import os
from pathlib import Path

DEFAULT_ROOT_PATH = Path(os.path.expanduser(os.getenv("NCHAIN_ROOT", "~/.nchain/ext9"))).resolve()

DEFAULT_KEYS_ROOT_PATH = Path(os.path.expanduser(os.getenv("NCHAIN_KEYS_ROOT", "~/.nchain_keys"))).resolve()

SIMULATOR_ROOT_PATH = Path(os.path.expanduser(os.getenv("NCHAIN_SIMULATOR_ROOT", "~/.nchain/simulator"))).resolve()
