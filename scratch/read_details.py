import json

with open("scratch/extracted_data.json", "r", encoding="utf-8") as f:
    data = json.load(f)

blocks = data.get("contentBlockInfo", {}).get("data", {})

# Gallery block details (952583235)
gallery_block = blocks.get("952583235", {})
gallery_data = gallery_block.get("blockData", {}).get("data", {}).get("data", [])
print("=== GALLERY IMAGES ===")
for idx, item in enumerate(gallery_data):
    print(f"[{idx+1}] {item.get('imgSrc')}")

# Testimonials block details (952583236)
test_block = blocks.get("952583236", {})
test_data = test_block.get("blockData", {}).get("data", {}).get("data", [])
print("\n=== TESTIMONIALS ===")
for idx, item in enumerate(test_data):
    text = item.get("text", "")
    author = item.get("author", "")
    print(f"[{idx+1}] Text: {text}")
    print(f"    Author: {author}")

# Remaining blocks details
for bid in ["952583238", "952583239"]:
    block = blocks.get(bid, {})
    if block:
        print(f"\n=== BLOCK {bid} ({block.get('type')}) ===")
        # print some keys
        print(json.dumps(block.get("blockData", {}).get("data", {}), indent=2)[:1000])
