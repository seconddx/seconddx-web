from typing import Any, cast

from factory import Faker, post_generation
from factory.django import DjangoModelFactory
from faker import Faker as RealFaker

from seconddx_web.users.models import User


class UserFactory(DjangoModelFactory):
    """Factory for creating User instances."""

    email = Faker("email")
    name = Faker("name")

    @post_generation
    def password(
        self,
        create: bool,  # noqa: FBT001
        extracted: str | None,
        **kwargs: Any,
    ) -> None:
        """Set a password on the user instance.

        Parameters
        ----------
        create : bool
            Whether the instance is being created.
        extracted : Optional[str]
            The provided password, if any.
        kwargs : dict
            Additional keyword arguments.
        """
        user = cast(User, self)
        password = extracted or RealFaker().password(
            length=42,
            special_chars=True,
            digits=True,
            upper_case=True,
            lower_case=True,
        )
        user.set_password(password)

    class Meta:
        model = User
        django_get_or_create = ["email"]
