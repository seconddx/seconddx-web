#!/usr/bin/env bash

export CONDA_PATH=/opt/conda/bin/conda
eval "$($CONDA_PATH shell.bash hook)"

echo "[II] activate seconddx-web"
conda activate seconddx-web
