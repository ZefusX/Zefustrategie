def parse_markdown(raw):
    import re

    import yaml

    # regex pour front matter entre --- au début
    pattern = r"^---\s*\n(.*?)\n---\s*\n(.*)$"
    match = re.match(pattern, raw, re.DOTALL)
    if match:
        front_matter = match.group(1)
        content = match.group(2)
        metadata = yaml.safe_load(front_matter)
    else:
        metadata = {}
        content = raw
    return metadata, content
