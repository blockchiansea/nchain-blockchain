from __future__ import annotations

from typing import Dict, Generator, Iterable, KeysView

SERVICES_FOR_GROUP: Dict[str, list[str]] = {
    "all": [
        "nchain_harvester",
        "nchain_timelord_launcher",
        "nchain_timelord",
        "nchain_farmer",
        "nchain_full_node",
        "nchain_wallet",
        "nchain_data_layer",
        "nchain_data_layer_http",
    ],
    "daemon": [],
    # TODO: should this be `data_layer`?
    "data": ["nchain_wallet", "nchain_data_layer"],
    "data_layer_http": ["nchain_data_layer_http"],
    "node": ["nchain_full_node"],
    "harvester": ["nchain_harvester"],
    "farmer": ["nchain_harvester", "nchain_farmer", "nchain_full_node", "nchain_wallet"],
    "farmer-no-wallet": ["nchain_harvester", "nchain_farmer", "nchain_full_node"],
    "farmer-only": ["nchain_farmer"],
    "timelord": ["nchain_timelord_launcher", "nchain_timelord", "nchain_full_node"],
    "timelord-only": ["nchain_timelord"],
    "timelord-launcher-only": ["nchain_timelord_launcher"],
    "wallet": ["nchain_wallet"],
    "introducer": ["nchain_introducer"],
    "simulator": ["nchain_full_node_simulator"],
    "crawler": ["nchain_crawler"],
    "seeder": ["nchain_crawler", "nchain_seeder"],
    "seeder-only": ["nchain_seeder"],
}


def all_groups() -> KeysView[str]:
    return SERVICES_FOR_GROUP.keys()


def services_for_groups(groups: Iterable[str]) -> Generator[str, None, None]:
    for group in groups:
        yield from SERVICES_FOR_GROUP[group]


def validate_service(service: str) -> bool:
    return any(service in _ for _ in SERVICES_FOR_GROUP.values())
