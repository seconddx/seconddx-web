"""Test configuration module."""

import pytest

from rest_framework.authtoken.models import Token
from rest_framework.test import APIClient
from seconddx_web.users.models import User


@pytest.fixture
def user(db) -> User:
    """Return a user as fixture"""
    return User.objects.create_user(
        email="test@seconddx.com",
        password="password",  # noqa: S106
    )


@pytest.fixture
def api_client():
    """Fixture for creating an API client."""
    return APIClient()


@pytest.fixture
def auth_client(api_client, user):
    """Fixture for authenticating the API client."""
    token, _ = Token.objects.get_or_create(user=user)
    api_client.credentials(HTTP_AUTHORIZATION=f"Token {token.key}")
    api_client.force_authenticate(user=user)
    return api_client
