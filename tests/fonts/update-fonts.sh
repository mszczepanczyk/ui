#!/usr/bin/env bash
# Updates Liberation fonts to match the fonts used in CI (Ubuntu/Playwright Docker)

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
FONTS_VERSION="2.1.5"
FONTS_URL="https://github.com/liberationfonts/liberation-fonts/files/7261482/liberation-fonts-ttf-${FONTS_VERSION}.tar.gz"

echo "Downloading Liberation Fonts ${FONTS_VERSION}..."
curl -L "${FONTS_URL}" -o /tmp/liberation-fonts.tar.gz

echo "Extracting fonts..."
tar -xzf /tmp/liberation-fonts.tar.gz -C /tmp

echo "Copying fonts to ${SCRIPT_DIR}..."
cp /tmp/liberation-fonts-ttf-${FONTS_VERSION}/*.ttf "${SCRIPT_DIR}/"

echo "Cleaning up..."
rm -rf /tmp/liberation-fonts.tar.gz /tmp/liberation-fonts-ttf-${FONTS_VERSION}

echo "✓ Liberation fonts updated successfully!"
ls -lh "${SCRIPT_DIR}"/*.ttf
