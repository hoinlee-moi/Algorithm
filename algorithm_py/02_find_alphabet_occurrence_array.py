# 내가 짠 코드
def find_alphabet_occurrence_array(string):
    alphabet_occurrence_array = [0] * 26
    for char in string :
        if char.isalpha() :
            alphabet_ascii = ord(char)
            alphabet_order = alphabet_ascii - ord('a')
            alphabet_occurrence_array[alphabet_order] +=1

    # 이 부분을 채워보세요!

    return alphabet_occurrence_array


print(find_alphabet_occurrence_array("hello my name is sparta"))

# 튜터님 코드
# def find_alphabet_occurrence_array(string):
#     alphabet_occurrence_array = [0] * 26
#
#     for char in string :
#         if not char.isalpha() :
#             continue
#        arr_index = ord(char) - ord("a")
#     alphabet_occurrence_array[arr_index] +=1
#
#     return alphabet_occurrence_array

#
# print(find_alphabet_occurrence_array("hello my name is sparta"))