# Import necessary modules from the Selenium library
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
import time

# Start the WebDriver and open the HTML page
# Define the location of the Chrome WebDriver executable
service = Service(executable_path='/usr/local/bin/chromedriver')
# Configure Chrome options, such as running in headless mode (without a visible browser window) and avoiding sandboxing
options = webdriver.ChromeOptions()
options.add_argument("--headless")  # Run Chrome in headless mode (without a visible browser window)
options.add_argument('--no-sandbox')  # Avoid sandboxing to prevent certain security restrictions
# Initialize the WebDriver with the defined service and options
driver = webdriver.Chrome(service=service, options=options)
# Open a specific URL (in this case, a local HTML file) in the WebDriver-controlled browser
driver.get("https://shub-saini.github.io/QuoteGenerator")  # Update this with the path to your HTML file

# Add a delay to ensure that the page fully loads before proceeding (not recommended for production code)
time.sleep(6)  # Adding a delay to see the result

# Assert some condition to verify the result
# Check if the title of the webpage contains the expected text "My Awesome Website"
# assert "Oxer" in driver.title

# Take a screenshot of the current state of the browser window
# Generate a timestamp for the screenshot file name to ensure uniqueness
timestamp = time.strftime("%Y%m%d-%H%M%S")
# Define the filename for the screenshot, including the timestamp
screenshot_file = f"screenshot_{timestamp}.png"
# Save the screenshot to the specified file path
driver.save_screenshot(screenshot_file)

# Close the WebDriver, terminating the controlled browser session
driver.close()
