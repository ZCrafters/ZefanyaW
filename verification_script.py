import os
import time
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={'width': 1280, 'height': 800})

        # Listen for console logs
        page.on("console", lambda msg: print(f"CONSOLE: {msg.text}"))
        page.on("pageerror", lambda err: print(f"PAGE ERROR: {err}"))

        cwd = os.getcwd()
        url = f"file://{cwd}/index.html"
        print(f"Loading {url}")
        page.goto(url)
        page.wait_for_load_state("domcontentloaded")

        # Inject CSS to disable infinite animations to stabilize screenshot if needed
        # page.add_style_tag(content="* { animation-iteration-count: 1 !important; }")

        # Get initial style count
        initial_styles = page.evaluate("document.querySelectorAll('style').length")
        print(f"Initial <style> tags count: {initial_styles}")

        # Find ANY button to click (since themeToggle is missing on index.html)
        # We know js/theme.js attaches to all 'button' elements.
        button = page.locator("button").first
        if button.count() == 0:
            print("No button found!")
            browser.close()
            return

        print(f"Clicking button: {button.inner_html().strip()}")

        # Click multiple times
        for i in range(5):
            button.click()
            time.sleep(0.1)

        # Get final style count
        final_styles = page.evaluate("document.querySelectorAll('style').length")
        print(f"Final <style> tags count: {final_styles}")

        if final_styles > initial_styles:
            print(f"FAIL: Style tags increased by {final_styles - initial_styles}")
        else:
            print("PASS: Style tags count remained constant.")

        # Verify ripple element creation
        print("Clicking once more to verify ripple element...")
        button.click()
        # Wait just enough for DOM insertion
        time.sleep(0.05)

        ripples = button.locator(".ripple").count()
        print(f"Ripple elements inside button: {ripples}")

        if ripples > 0:
            print("PASS: Ripple element created.")
        else:
            print("WARNING: Ripple element not found inside button.")

        # Take screenshot
        os.makedirs("verification", exist_ok=True)
        screenshot_path = "verification/ripple_fix.png"
        page.screenshot(path=screenshot_path)
        print(f"Screenshot saved to {screenshot_path}")

        browser.close()

if __name__ == "__main__":
    run()
