from fizzbuzz import fizzbuzz


def test_should_return_numbers_list():
    assert fizzbuzz(2) == [1, 2]


def test_should_return_fizz_if_diviseble_by_3():
    assert fizzbuzz(3) == [1, 2, "Fizz"]


def test_should_return_buzz_if_diviseble_by_5():
    assert fizzbuzz(5) == [1, 2, "Fizz", 4, "Buzz"]


def test_should_return_fizzbuzz_if_diviseble_by_3_and_5():
    assert fizzbuzz(15)[-1] == "FizzBuzz"
    # [-1] é a última posição
