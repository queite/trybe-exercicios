def fizzbuzz(number):
    mumbers_list = []
    for num in range(1, number + 1):
        if num % 15 == 0:
            mumbers_list.append('FizzBuzz')
        elif num % 3 == 0:
            mumbers_list.append('Fizz')
        elif num % 5 == 0:
            mumbers_list.append('Buzz')
        else:
            mumbers_list.append(num)
    return mumbers_list


print(fizzbuzz(2))
