{ pkgs ? import (fetchTarball
  "https://github.com/NixOS/nixpkgs/archive/23d5823337f4502dfa17e192d8c53a47cabcb6b4.tar.gz")
  { } }:
let
  name = "full-cycle-docker";
in pkgs.mkShell {
  inherit name;
  buildInputs = with pkgs; [
    docker
    docker-compose
    go
  ];
  shellHook = ''
    echo "Started ${name} environment";
  '';
  DOCKER_BUILDKIT = "1";
}
