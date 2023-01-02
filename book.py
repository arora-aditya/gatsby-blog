# Python's built-in module for encoding and decoding JSON data
import json
import ssl
import os
import re
import argparse
from datetime import date
from functools import lru_cache

from urllib.request import urlopen
from urllib.parse import urlencode

ssl._create_default_https_context = ssl._create_unverified_context

BOOKS = "Books"
NON_FICTION = "Non-Fiction"

def slugify(s):
  s = s.lower().strip()
  s = re.sub(r'[^\w\s-]', '', s)
  s = re.sub(r'[\s_-]+', '-', s)
  s = re.sub(r'^-+|-+$', '', s)
  return s

@lru_cache(None)
def query_google_books(book: str) -> str:
        api = "https://www.googleapis.com/books/v1/volumes?"
        params = {"q": book}
        url = api + urlencode(params)
        resp = urlopen(url)
        return json.load(resp)["items"][0]["volumeInfo"]

def get_book_details(book: str) -> str:
    book_data = query_google_books(book)

    volume_info = book_data
    title = volume_info["title"]
    description = (volume_info.get("description", "")).replace("\"", "\\\"")
    authors = volume_info["authors"]
    prettify_author = ", ".join(authors)
    categories = "\n".join(map(lambda x: "  - " + x, volume_info.get("categories", []) + [BOOKS, NON_FICTION]))
    today = date.today()

    return f"""---
title: "{title}"
author: "{prettify_author}"
date: '{today}T00:00:00.000Z'
published: false
upcoming: true
categories:
{categories}
description: "{description}"
---
"""

def check_or_create(path):
    if not os.path.exists(path):
        os.makedirs(path)

def write_to_file(book: str):
    # get current working directory
    cwd = os.getcwd()

    title = query_google_books(book)["title"]

    # create a directory for the book
    book_path = os.path.join(cwd, "content", "books", slugify(title))

    check_or_create(book_path)
    details = get_book_details(book)
    with open(os.path.join(book_path, "index.md"), "w+") as file:
        file.write(details)
    print(details)
    print(f"File created {book_path}/index.md")


parser = argparse.ArgumentParser(
                    prog = 'Generate book page',
                    description = 'Fetches book information from google books and creates a template file for me to use')
parser.add_argument('book', help='The book to fetch information for')
book = parser.parse_args().book

write_to_file(book)