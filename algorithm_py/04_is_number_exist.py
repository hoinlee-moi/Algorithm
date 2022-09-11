input = [3, 5, 6, 1, 2, 4]


def is_number_exist(number, array):
    for num_array in array:  # array 의 길이만큼 아래의연산이 반복된다
        if num_array == number:  # 비교 연산이 1번 실행
            return True  # N * 1 = N 만큼

    return False



result = is_number_exist(3, input)
print(result)