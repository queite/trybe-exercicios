from email_validation import validate_email
import pytest


def test_validates_if_raise_exception_when_email_starts_with_number():
    with pytest.raises(ValueError, match="Invalid E-mail"):
        validate_email('3fgtt@gmail.com')


def test_validates_if_raise_exception_when_user_has_special_char():
    with pytest.raises(ValueError, match="Invalid E-mail"):
        validate_email('tes#t@gmail.com')


def test_validates_if_raise_exception_when_email_ends_with_more_then_3_char():
    with pytest.raises(ValueError, match="Invalid E-mail"):
        validate_email('teste@gmail.comh')


def test_validates_if_raise_exception_when_dominio_has_special_char():
    with pytest.raises(ValueError, match="Invalid E-mail"):
        validate_email('teste@g-ail.comh')


def test_validates_when_email_is_correct():
    assert validate_email('teste@gmail.com') is True


def test_validates_when_email_has_digits():
    assert validate_email('teste123@gmail.com') is True
