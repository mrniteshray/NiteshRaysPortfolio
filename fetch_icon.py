import urllib.request
import re

url = "https://play.google.com/store/apps/details?id=xcom.niteshray.xapps.xblockit"
try:
    with urllib.request.urlopen(url) as response:
        html = response.read().decode('utf-8')
        
    # Regex for Google Play icon URLs
    # They generally start with https://play-lh.googleusercontent.com/ 
    # and might be followed by alphanumeric characters and parameters like =w240-h480
    
    # Let's just find all image sources that match the domain
    pattern = r'src="(https://play-lh\.googleusercontent\.com/[^"]+)"'
    matches = re.findall(pattern, html)
    
    if matches:
        print("Found matches:")
        for match in matches:
            print(match)
    else:
        print("No matches found.")

except Exception as e:
    print(f"Error: {e}")
