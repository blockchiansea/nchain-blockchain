from __future__ import annotations

from typing import Any, Dict

from chia.consensus.default_constants import update_testnet_overrides


def test_testnet0() -> None:
    overrides: Dict[str, Any] = {}
    update_testnet_overrides("testnet0", overrides)
    assert overrides == {
        "SOFT_FORK6_HEIGHT": 2000000,
    }


def test_mainnet() -> None:
    overrides: Dict[str, Any] = {}
    update_testnet_overrides("ext9", overrides)
    assert overrides == {}
