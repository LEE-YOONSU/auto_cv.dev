#!/usr/bin/env bash

set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
dist_dir="$repo_root/dist"

if [[ ! -d "$dist_dir" ]]; then
  echo "dist directory not found. Run npm run build first." >&2
  exit 1
fi

cp "$dist_dir/index.html" "$repo_root/index.html"
cp "$dist_dir/index.html" "$repo_root/404.html"
cp "$dist_dir/favicon.ico" "$repo_root/favicon.ico"
cp "$dist_dir/placeholder.svg" "$repo_root/placeholder.svg"
cp "$dist_dir/robots.txt" "$repo_root/robots.txt"

mkdir -p "$repo_root/assets" "$repo_root/documents"
cp -R "$dist_dir/assets/." "$repo_root/assets/"
cp -R "$dist_dir/documents/." "$repo_root/documents/"
