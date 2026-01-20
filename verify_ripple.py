from playwright.sync_api import sync_playwright
import time
import os

def verify_ripple():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        cwd = os.getcwd()
        page.goto(f"file://{cwd}/index.html")

        # Wait for JS
        time.sleep(1)

        button = page.locator("#menuToggle")

        # Click to trigger ripple
        button.click()

        # Wait a tiny bit for the ripple to be rendered but not finished
        time.sleep(0.1)

        # Check if ripple exists
        ripple = button.locator(".ripple")

        if ripple.count() > 0:
            print("Ripple element found.")
            os.makedirs("/home/jules/verification", exist_ok=True)
            screenshot_path = "/home/jules/verification/ripple_check.png"
            # Screenshot the button area
            button.screenshot(path=screenshot_path)
            print(f"Screenshot saved to {screenshot_path}")
        else:
            print("Ripple element NOT found.")

        browser.close()

if __name__ == "__main__":
    verify_ripple()
