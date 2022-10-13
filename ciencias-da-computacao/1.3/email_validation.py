import re

email_regex = re.compile('^[a-z]+[a-z0-9_-]*@([a-z0-9]*?\\.)+[a-z0-9]{3}$')


def validate_email(email):
    validation = email_regex.match(email)
    if not validation:
        raise ValueError('Invalid E-mail')
    else:
        return True


if __name__ == '__main__':
    print(validate_email('queitesc@gmail.vom'))
    print(validate_email('3ueitesc@gmail.om'))
