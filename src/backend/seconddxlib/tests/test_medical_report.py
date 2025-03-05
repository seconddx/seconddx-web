from pathlib import Path

import pytest

from seconddxlib.medical_reports import extract_content_from_pdf


@pytest.fixture
def file_path() -> Path:
    """Fixture to provide the path to a sample medical report PDF."""
    return Path(__file__).parent / "data" / "Lab_Test_Menu_rev_Oct2019.pdf"


def test_extract_content_from_pdf(file_path: Path) -> None:
    """Test extracting text from a medical report PDF."""
    pdf_text: str = extract_content_from_pdf(str(file_path))

    assert "LABORATORY TEST LIST" in pdf_text
    assert "TEST NAME" in pdf_text
