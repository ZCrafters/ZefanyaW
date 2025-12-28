from playwright.sync_api import sync_playwright

def verify_changes():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the page
        page.goto("http://localhost:8080/index.html")

        # Verify lazy loading on the image
        # We need to check the attribute in the DOM
        image = page.locator("#about-preview img.profile-image-rect")
        loading_attr = image.get_attribute("loading")
        print(f"Loading attribute: {loading_attr}")

        if loading_attr == "lazy":
            print("SUCCESS: Image has loading='lazy'")
        else:
            print("FAILURE: Image does not have loading='lazy'")

        # Verify ripple effect styles
        # We can't easily check for *absence* of duplicate styles without clicking multiple times
        # But we can check if the ripple works.

        # Scroll to a button
        button = page.locator(".glowing-button").first
        button.scroll_into_view_if_needed()
        button.click()

        # Wait a bit for ripple
        page.wait_for_timeout(500)

        # Take a screenshot
        page.screenshot(path="verification.png")

        browser.close()

if __name__ == "__main__":
    verify_changes()
