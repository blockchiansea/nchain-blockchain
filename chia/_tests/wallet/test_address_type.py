from __future__ import annotations

from typing import Any, Dict

import pytest

from chia.wallet.util.address_type import AddressType, ensure_valid_address, is_valid_address


@pytest.mark.parametrize("prefix", [None])
def test_nch_hrp_for_default_config(config_with_address_prefix: Dict[str, Any]) -> None:
    config = config_with_address_prefix
    assert AddressType.NCH.hrp(config) == "nch"


@pytest.mark.parametrize("prefix", ["tnch"])
def test_tnch_hrp_for_testnet(config_with_address_prefix: Dict[str, Any]) -> None:
    config = config_with_address_prefix
    assert AddressType.NCH.hrp(config) == "tnch"


@pytest.mark.parametrize("prefix", [None])
def test_is_valid_address_nch(config_with_address_prefix: Dict[str, Any]) -> None:
    config = config_with_address_prefix
    valid = is_valid_address(
        "nch1mnr0ygu7lvmk3nfgzmncfk39fwu0dv933yrcv97nd6pmrt7fzmhs3l4l8f", allowed_types={AddressType.NCH}, config=config
    )
    assert valid is True


@pytest.mark.parametrize("prefix", ["tnch"])
def test_is_valid_address_tnch(config_with_address_prefix: Dict[str, Any]) -> None:
    config = config_with_address_prefix
    # TNCH address validation requires a config
    valid = is_valid_address(
        "nch1mnr0ygu7lvmk3nfgzmncfk39fwu0dv933yrcv97nd6pmrt7fzmhs3l4l8f",
        allowed_types={AddressType.NCH},
        config=config,
    )
    assert valid is True


@pytest.mark.parametrize("prefix", [None])
def test_is_valid_address_nch_bad_address(config_with_address_prefix: Dict[str, Any]) -> None:
    config = config_with_address_prefix
    valid = is_valid_address(
        "nch1mnr0ygu7lvmk3nfgzmncfk39fwu0dv933yrcv97nd6pmrt7fzmhs8xxxxx", allowed_types={AddressType.NCH}, config=config
    )
    assert valid is False


@pytest.mark.parametrize("prefix", [None])
def test_is_valid_address_nft(config_with_address_prefix: Dict[str, Any]) -> None:
    config = config_with_address_prefix
    valid = is_valid_address(
        "nft1mx2nkvml2eekjtqwdmxvmf3js8g083hpszzhkhtwvhcss8efqzhqtza773", allowed_types={AddressType.NFT}, config=config
    )
    assert valid is True


@pytest.mark.parametrize("prefix", ["tnch"])
def test_is_valid_address_nft_with_testnet(config_with_address_prefix: Dict[str, Any]) -> None:
    config = config_with_address_prefix
    valid = is_valid_address(
        "nft1mx2nkvml2eekjtqwdmxvmf3js8g083hpszzhkhtwvhcss8efqzhqtza773", allowed_types={AddressType.NFT}, config=config
    )
    assert valid is True


@pytest.mark.parametrize("prefix", [None])
def test_is_valid_address_nft_bad_address(config_with_address_prefix: Dict[str, Any]) -> None:
    config = config_with_address_prefix
    valid = is_valid_address(
        "nft1mx2nkvml2eekjtqwdmxvmf3js8g083hpszzhkhtwvhcss8efqzhqtxxxxx", allowed_types={AddressType.NFT}, config=config
    )
    assert valid is False


@pytest.mark.parametrize("prefix", [None])
def test_is_valid_address_did(config_with_address_prefix: Dict[str, Any]) -> None:
    config = config_with_address_prefix
    valid = is_valid_address(
        "did:nchain:14jxdtqcyp3gk8ka0678eq8mmtnktgpmp2vuqq3vtsl2e5qr7fyrszz86fh",
        allowed_types={AddressType.DID},
        config=config,
    )
    assert valid is True


@pytest.mark.parametrize("prefix", ["tnch"])
def test_is_valid_address_did_with_testnet(config_with_address_prefix: Dict[str, Any]) -> None:
    config = config_with_address_prefix
    valid = is_valid_address(
        "did:nchain:14jxdtqcyp3gk8ka0678eq8mmtnktgpmp2vuqq3vtsl2e5qr7fyrszz86fh",
        allowed_types={AddressType.DID},
        config=config,
    )
    assert valid is True


@pytest.mark.parametrize("prefix", [None])
def test_is_valid_address_did_bad_address(config_with_address_prefix: Dict[str, Any]) -> None:
    config = config_with_address_prefix
    valid = is_valid_address(
        "did:nchain:14jxdtqcyp3gk8ka0678eq8mmtnktgpmp2vuqq3vtsl2e5qr7fyrxxxxx",
        allowed_types={AddressType.DID},
        config=config,
    )
    assert valid is False


@pytest.mark.parametrize("prefix", [None])
def test_ensure_valid_address_nch(config_with_address_prefix: Dict[str, Any]) -> None:
    config = config_with_address_prefix
    address = ensure_valid_address(
        "nch1mnr0ygu7lvmk3nfgzmncfk39fwu0dv933yrcv97nd6pmrt7fzmhs3l4l8f", allowed_types={AddressType.NCH}, config=config
    )
    assert address == "nch1mnr0ygu7lvmk3nfgzmncfk39fwu0dv933yrcv97nd6pmrt7fzmhs3l4l8f"


@pytest.mark.parametrize("prefix", ["tnch"])
def test_ensure_valid_address_tnch(config_with_address_prefix: Dict[str, Any]) -> None:
    config = config_with_address_prefix
    address = ensure_valid_address(
        "nch1mnr0ygu7lvmk3nfgzmncfk39fwu0dv933yrcv97nd6pmrt7fzmhs3l4l8f",
        allowed_types={AddressType.NCH},
        config=config,
    )
    assert address == "nch1mnr0ygu7lvmk3nfgzmncfk39fwu0dv933yrcv97nd6pmrt7fzmhs3l4l8f"


@pytest.mark.parametrize("prefix", [None])
def test_ensure_valid_address_nch_bad_address(config_with_address_prefix: Dict[str, Any]) -> None:
    config = config_with_address_prefix
    with pytest.raises(ValueError):
        ensure_valid_address(
            "nch1mnr0ygu7lvmk3nfgzmncfk39fwu0dv933yrcv97nd6pmrt7fzmhs8xxxxx",
            allowed_types={AddressType.NCH},
            config=config,
        )


@pytest.mark.parametrize("prefix", [None])
def test_ensure_valid_address_nft(config_with_address_prefix: Dict[str, Any]) -> None:
    config = config_with_address_prefix
    address = ensure_valid_address(
        "nft1mx2nkvml2eekjtqwdmxvmf3js8g083hpszzhkhtwvhcss8efqzhqtza773", allowed_types={AddressType.NFT}, config=config
    )
    assert address == "nft1mx2nkvml2eekjtqwdmxvmf3js8g083hpszzhkhtwvhcss8efqzhqtza773"


@pytest.mark.parametrize("prefix", [None])
def test_ensure_valid_address_nft_bad_address(config_with_address_prefix: Dict[str, Any]) -> None:
    config = config_with_address_prefix
    with pytest.raises(ValueError):
        ensure_valid_address(
            "nft1mx2nkvml2eekjtqwdmxvmf3js8g083hpszzhkhtwvhcss8efqzhqtxxxxx",
            allowed_types={AddressType.NFT},
            config=config,
        )


@pytest.mark.parametrize("prefix", [None])
def test_ensure_valid_address_did(config_with_address_prefix: Dict[str, Any]) -> None:
    config = config_with_address_prefix
    address = ensure_valid_address(
        "did:nchain:14jxdtqcyp3gk8ka0678eq8mmtnktgpmp2vuqq3vtsl2e5qr7fyrszz86fh",
        allowed_types={AddressType.DID},
        config=config,
    )
    assert address == "did:nchain:14jxdtqcyp3gk8ka0678eq8mmtnktgpmp2vuqq3vtsl2e5qr7fyrszz86fh"


@pytest.mark.parametrize("prefix", [None])
def test_ensure_valid_address_did_bad_address(config_with_address_prefix: Dict[str, Any]) -> None:
    config = config_with_address_prefix
    with pytest.raises(ValueError):
        ensure_valid_address(
            "did:nchain:14jxdtqcyp3gk8ka0678eq8mmtnktgpmp2vuqq3vtsl2e5qr7fyrxxxxx",
            allowed_types={AddressType.DID},
            config=config,
        )


@pytest.mark.parametrize("prefix", [None])
def test_ensure_valid_address_bad_length(config_with_address_prefix: Dict[str, Any]) -> None:
    config = config_with_address_prefix
    with pytest.raises(ValueError):
        ensure_valid_address("nch1qqqqqqqqqqqqqqqq5jyrlq", allowed_types={AddressType.NCH}, config=config)
