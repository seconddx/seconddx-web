from __future__ import annotations


import json
from pathlib import Path

from rago.retrieval.tools.pdf import (
    extract_text_from_pdf,
    extract_metadata_from_pdf,
    extract_tables_from_pdf,
    is_pdf,
)

from rago.retrieval.tools.pdf import extract_text_from_pdf, is_pdf


def extract_content_from_pdf(file_path: str) -> str:
    """Extract text content from a medical PDF file."""
    if is_pdf(file_path):
        return extract_text_from_pdf(file_path)

    return ""




def extract_content_from_pdf_to_json(file_path: str | Path) -> str:
    """Extract structured content from a medical PDF file and return it as JSON.

    Args:
        file_path (str | Path): Path to the medical PDF file.

    Returns:
        str: JSON-formatted string containing:
            - "file_name": Processed file name.
            - "metadata": Extracted document metadata.
            - "text": Extracted raw text.
            - "tables": Extracted structured tables (if any).
    """
    file_path = Path(file_path)

    if not file_path.exists() or not file_path.is_file():
        return json.dumps({"error": "File does not exist"}, indent=4)

    if not is_pdf(str(file_path)):
        return json.dumps({"error": "Invalid PDF file"}, indent=4)

    extracted_data = {
        "file_name": file_path.name,
        "metadata": extract_metadata_from_pdf(str(file_path)) or {},
        "text": extract_text_from_pdf(str(file_path)),
        "tables": extract_tables_from_pdf(str(file_path)) or [],
    }

    return json.dumps(extracted_data, indent=4)
