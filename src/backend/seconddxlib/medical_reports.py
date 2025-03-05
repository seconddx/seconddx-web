from __future__ import annotations

from rago.retrieval.tools.pdf import extract_text_from_pdf, is_pdf


def extract_content_from_pdf(file_path: str) -> str:
    """Extract text content from a medical PDF file."""
    if is_pdf(file_path):
        return extract_text_from_pdf(file_path)

    return ""
