import re
import json

def extract_jdomni_data():
    with open("index.html", "r", encoding="utf-8") as f:
        html = f.read()
    
    # Search for window.PRELOADED_STATE in the HTML
    idx = html.find("window.PRELOADED_STATE")
    if idx != -1:
        start = html.find("{", idx)
        # Find matching bracket
        count = 0
        end = -1
        for i in range(start, len(html)):
            if html[i] == '{':
                count += 1
            elif html[i] == '}':
                count -= 1
                if count == 0:
                    end = i + 1
                    break
        if end != -1:
            state_str = html[start:end]
            # Replace undefined with null so JSON is valid
            state_str = state_str.replace(":undefined", ":null")
            state_str = state_str.replace("undefined,", "null,")
            return json.loads(state_str)
    raise Exception("Could not find or parse PRELOADED_STATE")

if __name__ == "__main__":
    try:
        data = extract_jdomni_data()
        
        # Write extracted data to a JSON file
        with open("scratch/extracted_data.json", "w", encoding="utf-8") as out:
            json.dump(data, out, indent=2)
            
        print("Successfully extracted data into scratch/extracted_data.json!")
        
        # Print summary
        outlet = data.get("staticData", {}).get("outletDetails", {}).get("results", {})
        print("\n=== OUTLET INFO ===")
        print(f"Name: {outlet.get('outletname')}")
        print(f"Address: {outlet.get('address')}, {outlet.get('area')}, {outlet.get('city')}, {outlet.get('state')} - {outlet.get('pincode')}")
        print(f"Phone: {outlet.get('mobile')} / {outlet.get('alternate_number')}")
        print(f"Email: {outlet.get('email')}")
        print(f"Owner: {outlet.get('contactperson')}")
        print(f"Hours: {outlet.get('hoursofoperation')}")
        
        blocks = data.get("contentBlockInfo", {}).get("data", {})
        print(f"\n=== CONTENT BLOCKS FOUND: {len(blocks)} ===")
        
        # Let's inspect block content
        for block_id, block in blocks.items():
            btype = block.get("type")
            template = block.get("template")
            print(f"\n--- Block {block_id}: Type={btype}, Template={template} ---")
            
            block_data = block.get("blockData", {}).get("data", {})
            if isinstance(block_data, dict):
                # Service block or similar
                items = block_data.get("data", [])
                if items:
                    print("Items:")
                    for idx, item in enumerate(items):
                        title = item.get("title", {}).get("text", "") if isinstance(item.get("title"), dict) else item.get("title", "")
                        subTitle = item.get("subTitle", {}).get("text", "") if isinstance(item.get("subTitle"), dict) else item.get("subTitle", "")
                        img = item.get("image", {}).get("imgSrc", "") if isinstance(item.get("image"), dict) else item.get("image", "")
                        print(f"  [{idx+1}] Title: {title}")
                        print(f"      Subtitle: {subTitle}")
                        print(f"      Image: {img}")
            
            # Check elements
            elements = block.get("blockData", {}).get("elements", {})
            if elements:
                # Recursively extract text from elements
                text_elements = []
                def extract_text_from_el(el):
                    if isinstance(el, dict):
                        if "text" in el and el["text"]:
                            # clean html tags
                            text = re.sub('<[^<]+?>', '', el["text"])
                            text_elements.append(text.strip())
                        for k, v in el.items():
                            extract_text_from_el(v)
                    elif isinstance(el, list):
                        for item in el:
                            extract_text_from_el(item)
                extract_text_from_el(elements)
                if text_elements:
                    print("Texts:")
                    for t in set(text_elements):
                        if t:
                            print(f"  - {t}")
                            
    except Exception as e:
        import traceback
        traceback.print_exc()
