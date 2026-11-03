"""Correct the legacy hosted resume's Harness license without changing its layout."""
from io import BytesIO
from pathlib import Path
import subprocess
from pypdf import PdfReader, PdfWriter
from pypdf.generic import DecodedStreamObject

root = Path(__file__).resolve().parents[1]
relative = 'public/downloads/Sean-McDonnell-Technical-Support-Implementation-Engineer-Resume.pdf'
original = subprocess.check_output(['git', 'show', 'HEAD:' + relative], cwd=root)
reader = PdfReader(BytesIO(original))
writer = PdfWriter()
writer.clone_document_from_reader(reader)
before = b'a proprietary public proof of concept'
after = b'an MIT-licensed work assistant'
changed = 0
for page in writer.pages:
    raw = page.get_contents().get_data()
    changed += raw.count(before)
    stream = DecodedStreamObject()
    stream.set_data(raw.replace(before, after))
    page.replace_contents(stream)
assert changed == 1, f'Expected one license correction, found {changed}'
result = BytesIO()
writer.write(result)
for target in [relative, relative.removeprefix('public/')]:
    (root / target).write_bytes(result.getvalue())
text = '\n'.join(p.extract_text() for p in PdfReader(BytesIO(result.getvalue())).pages)
assert 'proprietary' not in text and 'MIT-licensed' in text
print('Corrected both hosted resume copies; original remains in Git history.')
