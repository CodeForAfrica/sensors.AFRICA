from django.test import TestCase
from django.urls import resolve
from django.http import HttpRequest


class HomePageTest(TestCase):
    def test_root_url_resolves_to_homepage(self):
        found = resolve('/')
        self.assertEqual(found.view_name, 'homepage')

