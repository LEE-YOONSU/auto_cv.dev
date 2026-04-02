from __future__ import annotations

import json
from pathlib import Path

import fitz
import numpy as np
from pypdf import PdfReader
from rapidocr_onnxruntime import RapidOCR


def extract_text_with_ocr(pdf_path: Path) -> list[str]:
    doc = fitz.open(pdf_path)
    engine = RapidOCR()
    page_texts: list[str] = []

    for page in doc:
        pix = page.get_pixmap(matrix=fitz.Matrix(2, 2), alpha=False)
        image = np.frombuffer(pix.samples, dtype=np.uint8).reshape(pix.height, pix.width, pix.n)
        result, _ = engine(image)

        if not result:
            page_texts.append("")
            continue

        lines = [entry[1] for entry in result if len(entry) > 1 and entry[1]]
        page_texts.append("\n".join(lines).strip())

    return page_texts


def main() -> None:
    repo_root = Path.cwd()
    output_dir = repo_root / "documents"
    pdf_candidates = sorted(output_dir.glob("*.pdf"), key=lambda path: path.stat().st_size, reverse=True)
    if not pdf_candidates:
        raise FileNotFoundError("No PDF file found in the documents directory.")
    pdf_path = pdf_candidates[0]
    txt_path = output_dir / "portfolio_extracted.txt"
    json_path = output_dir / "portfolio_extracted.json"

    reader = PdfReader(str(pdf_path))
    extracted_pages = [(page.extract_text() or "").replace("\r\n", "\n").replace("\r", "\n").strip() for page in reader.pages]
    if not any(extracted_pages):
        extracted_pages = extract_text_with_ocr(pdf_path)

    pages: list[dict[str, object]] = []
    text_chunks: list[str] = []

    for index, normalized in enumerate(extracted_pages, start=1):
        pages.append(
            {
                "page": index,
                "text": normalized,
                "char_count": len(normalized),
            }
        )
        text_chunks.append(f"[Page {index}]\n{normalized}")

    full_text = "\n\n".join(text_chunks).strip()

    txt_path.write_text(full_text, encoding="utf-8")
    json_path.write_text(
        json.dumps(
            {
                "source_pdf": pdf_path.name,
                "page_count": len(pages),
                "text": full_text,
                "pages": pages,
            },
            ensure_ascii=False,
            indent=2,
        ),
        encoding="utf-8",
    )
    print("Created output files.")
    print(f"Pages: {len(pages)}")


if __name__ == "__main__":
    main()
