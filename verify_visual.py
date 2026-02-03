import os
import time
from playwright.sync_api import sync_playwright

def verify_ripple(page):
    url = f"file://{os.getcwd()}/index.html"
    print(f"Navigating to {url}")
    page.goto(url)

    # Wait for page to be ready
    page.wait_for_load_state("networkidle")

    print("Taking initial screenshot...")
    page.screenshot(path="/home/jules/verification/index.png")

    # Listen for console logs/errors
    page.on("console", lambda msg: print(f"Console: {msg.text}"))
    page.on("pageerror", lambda err: print(f"Page Error: {err}"))

    # Find the contact button
    button = page.locator("a.glowing-button").first
    if button.is_visible():
        print("Clicking button...")
        # Use a real click to trigger the ripple event listener
        # Prevent navigation so we stay on page
        page.evaluate("""
            const btn = document.querySelector('a.glowing-button');
            btn.addEventListener('click', (e) => e.preventDefault());
        """)
        button.click()

        # Wait a bit for ripple to start (it's 0.6s)
        time.sleep(0.1)
        print("Taking screenshot with ripple...")
        page.screenshot(path="/home/jules/verification/ripple_active.png")
    else:
        print("Button not found")

if __name__ == "__main__":
    os.makedirs("/home/jules/verification", exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_ripple(page)
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()
