input = 20


def find_prime_list_under_number(number):
    prime_list = []
    for n in range(2, number + 1):
        for i in prime_list:
            if n % i == 0:
                break
            elif i*i >= n:
                prime_list.append(n)
                break

    return prime_list


result = find_prime_list_under_number(input)
print(result)