#!/usr/bin/env python3
"""
    Programa que retorna acoes e FIIs
"""

import shutilwhich
from selenium import webdriver

# Usar o browser do Google ou da Mozilla
if shutilwhich.which('google-chrome') is not None:
    from selenium.webdriver.chrome.service import Service as ChromiumService
    from webdriver_manager.chrome import ChromeDriverManager
    from webdriver_manager.core.utils import ChromeType
    serv = ChromeDriverManager(chrome_type=ChromeType.CHROMIUM).install()
    driver = webdriver.Chrome(service=ChromiumService(service=serv))
elif shutilwhich.which('firefox') is not None:
    # /opt/mozilla/firefox/firefox
    from selenium.webdriver.firefox.service import Service as FirefoxService
    from webdriver_manager.firefox import GeckoDriverManager
    serv = GeckoDriverManager().install()
    driver = webdriver.Firefox(service=FirefoxService(service=serv))
else:
    raise ModuleNotFoundError('Não foi encontrado web browser firefox ou chrome')



driver.get("https://google.co.uk")

driver.close()
