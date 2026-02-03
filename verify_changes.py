import os
from bs4 import BeautifulSoup

def verify_index_html():
    print("Verifying index.html...")
    if not os.path.exists('index.html'):
        print("FAIL: index.html not found")
        return False

    with open('index.html', 'r', encoding='utf-8') as f:
        content = f.read()

    soup = BeautifulSoup(content, 'html.parser')

    # Check for the specific image
    img = soup.find('img', {'class': 'profile-image-rect'})
    if not img:
        print("FAIL: Profile image with class 'profile-image-rect' not found")
        return False

    # Check attributes
    loading = img.get('loading')
    decoding = img.get('decoding')

    if loading != 'lazy':
        print(f"FAIL: Expected loading='lazy', found '{loading}'")
        return False

    if decoding != 'async':
        print(f"FAIL: Expected decoding='async', found '{decoding}'")
        return False

    print("PASS: index.html has correct attributes on profile image")
    return True

def verify_theme_js():
    print("Verifying js/theme.js...")
    if not os.path.exists('js/theme.js'):
        print("FAIL: js/theme.js not found")
        return False

    with open('js/theme.js', 'r', encoding='utf-8') as f:
        content = f.read()

    # Check that createRipple does not create style
    start = content.find("function createRipple(event) {")
    if start == -1:
            print("FAIL: createRipple function not found")
            return False

    # Extract approximate function body (up to next function or end of file)
    # This is a heuristic.
    end = content.find("function", start + 1)
    if end == -1:
        func_snippet = content[start:]
    else:
        func_snippet = content[start:end]

    if "document.createElement('style')" in func_snippet and ".ripple {" in func_snippet:
            print("FAIL: createRipple still seems to create styles")
            print("Snippet found:")
            print(func_snippet)
            return False

    # Also check if the CSS was added to animationStyles (which is earlier in the file)
    # The string ".ripple {" should appear in the file.
    if ".ripple {" not in content or "@keyframes ripple" not in content:
        print("FAIL: Ripple CSS not found in file")
        return False

    print("PASS: js/theme.js looks correct")
    return True

if __name__ == "__main__":
    html_pass = verify_index_html()
    js_pass = verify_theme_js()

    if html_pass and js_pass:
        print("ALL CHECKS PASSED")
        exit(0)
    else:
        print("SOME CHECKS FAILED")
        exit(1)
