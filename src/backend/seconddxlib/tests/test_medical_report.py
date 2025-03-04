from seconddxlib.medical_reports import extract_content_from_pdf


def test_extract_content_from_pdf():
    pdf_file2 = extract_content_from_pdf("opened")

    assert pdf_file2 == "opened"
