
from playwright.sync_api import sync_playwright
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Load the index file
        url = f"file://{os.getcwd()}/index.html"
        print(f"Loading {url}")
        page.goto(url)

        # Disable animations to allow stable interaction/screenshot
        page.add_style_tag(content="""
            *, *::before, *::after {
                animation: none !important;
                transition: none !important;
            }
        """)

        # 1. Verify Image Attributes
        img_locator = page.locator(".profile-image-rect")

        loading_attr = img_locator.get_attribute("loading")
        print(f"Loading attribute: {loading_attr}")
        if loading_attr != "lazy":
            print("FAILED: loading attribute is not lazy")

        decoding_attr = img_locator.get_attribute("decoding")
        print(f"Decoding attribute: {decoding_attr}")
        if decoding_attr != "async":
            print("FAILED: decoding attribute is not async")

        # 2. Verify Particles Logic Removal
        # Now that animations are disabled, hover should be stable
        try:
            img_locator.hover(timeout=5000)

            # Wait a bit
            page.wait_for_timeout(500)

            # Check if any .particle elements exist in body
            particle_count = page.locator(".particle").count()
            print(f"Particle count after hover: {particle_count}")

            if particle_count > 0:
                print("WARNING: Particles were created!")
            else:
                print("SUCCESS: No particles created")

        except Exception as e:
            print(f"Hover failed even with animations disabled: {e}")

        # Take screenshot
        img_locator.scroll_into_view_if_needed()
        page.screenshot(path=".jules/verification/about_section.png")

        browser.close()

if __name__ == "__main__":
    run()
