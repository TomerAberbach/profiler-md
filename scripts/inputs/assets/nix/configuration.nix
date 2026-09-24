# A NixOS configuration for a small server with a desktop. Evaluating its
# system closure exercises most of the nixpkgs module system and the stdenv
# bootstrap.
{ pkgs, ... }:
{
  nixpkgs.hostPlatform = "x86_64-linux";

  boot.loader.systemd-boot.enable = true;
  boot.loader.efi.canTouchEfiVariables = true;

  fileSystems."/" = {
    device = "/dev/disk/by-label/nixos";
    fsType = "ext4";
  };

  networking.hostName = "profiler";
  networking.firewall.allowedTCPPorts = [ 80 443 ];

  services.openssh.enable = true;
  services.nginx = {
    enable = true;
    virtualHosts."example.org" = {
      enableACME = true;
      forceSSL = true;
      root = "/var/www";
    };
  };
  security.acme = {
    acceptTerms = true;
    defaults.email = "admin@example.org";
  };
  services.postgresql.enable = true;

  services.xserver.enable = true;
  services.displayManager.gdm.enable = true;
  services.desktopManager.gnome.enable = true;

  users.users.alice = {
    isNormalUser = true;
    extraGroups = [ "wheel" ];
  };

  environment.systemPackages = with pkgs; [
    git
    vim
    htop
    firefox
  ];

  system.stateVersion = "25.05";
}
