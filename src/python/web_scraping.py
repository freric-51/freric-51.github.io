#!/usr/bin/env python3

"""
    Programa que retorna acoes e FIIs
    Configuração em arquivo json
    Ajustado para Chrome e Firefox
"""

import os
import time
import json
import shutilwhich
from selenium import webdriver
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.by import By

BasePath = os.path.realpath('.')
DownloadPath = BasePath + '/data/'
JsonPath = BasePath + '/src/python/'

# Usar o browser do Google ou da Mozilla
if shutilwhich.which('google-chrome') is not None:
    from selenium.webdriver.chrome.options import Options
    from selenium.webdriver.chrome.service import Service as ChromiumService
    from webdriver_manager.chrome import ChromeDriverManager
    from webdriver_manager.core.utils import ChromeType
    serv = ChromeDriverManager(chrome_type=ChromeType.CHROMIUM).install()
    # default download path
    opt = Options()
    opt.add_argument("--disable-notifications")
    opt.add_experimental_option("prefs",{
        "download.default_directory": DownloadPath,
        "download.prompt_for_download": False,
        "download.directory_upgrade": True})
    # define browser
    browser = webdriver.Chrome(service=ChromiumService(service=serv),options=opt)
elif shutilwhich.which('firefox') is not None:
    # ln /opt/mozilla/firefox/firefox to /usr/bin
    from selenium.webdriver.firefox.options import Options
    from selenium.webdriver.firefox.service import Service as FirefoxService
    from webdriver_manager.firefox import GeckoDriverManager
    serv = GeckoDriverManager().install()
    # default download path
    opt = Options()
    opt.add_argument("--disable-notifications")

    opt.set_preference("browser.download.folderList", 2)
    opt.set_preference("browser.download.manager.showWhenStarting", False)
    opt.set_preference("browser.download.dir", DownloadPath)
    opt.set_preference("browser.helperApps.neverAsk.saveToDisk", "application/x-gzip")

    # define browser
    browser = webdriver.Firefox(service=FirefoxService(service=serv),options=opt)
else:
    raise ModuleNotFoundError('Não foi encontrado web browser firefox ou chrome')

# JSON configs
with open(file=JsonPath + 'web_scraping.json',mode='r',encoding='UTF-8') as file_json:
    dict_JSON=json.load(file_json)

file_json.close()

# get site data
TIMEOUT=30
browser.implicitly_wait(TIMEOUT) # seconds

for sites in dict_JSON['sites']:
    xpath_search=sites['xPathBuscar']
    xpath_save=sites['xPathDownload']

    browser.get('about:blank')
    time.sleep(0.5)
    browser.get(sites['site'])

    # Clear old file
    file_src=DownloadPath + sites['DownloadFileName']
    if os.path.exists(file_src):
        os.remove(file_src)

    file_dst=DownloadPath + sites['NewFileName']
    if os.path.exists(file_dst):
        os.remove(file_dst)

    # wait for objects and data
    try:
        element = EC.presence_of_element_located((By.XPATH, xpath_search))
        element = WebDriverWait(browser, TIMEOUT, poll_frequency=0.5).until(element)
        element.click()
    except TimeoutException as eto:
        print("Timed out waiting for page", eto)
        raise

    # The page is rolling
    time.sleep(2)

    # wait for objects and data
    try:
        element = EC.presence_of_element_located((By.XPATH, xpath_save))
        element = WebDriverWait(browser, TIMEOUT, poll_frequency=0.5).until(element)
        element.click()
    except TimeoutException as eto:
        print("Timed out waiting for page", eto)
        raise

    # wait for end of download
    loop=TIMEOUT
    while (loop > 0) and (not os.path.exists(file_src)):
        time.sleep(0.5)
        loop -= 0.5

    # Rename file
    os.rename(src=file_src,dst=file_dst)

time.sleep(0.5)
browser.close()


#   ##############
#   Backup of code
#   ##############
# element = WebDriverWait(browser, TIMEOUT).until(
#     EC.presence_of_element_located(('xpath', xpath_save)))
# element = WebDriverWait(browser, timeout= TIMEOUT, poll_frequency=0.5).until(
#     EC.element_to_be_clickable(('xpath', xpath_save)))
# browser.find_element('xpath',xpath_save).click()
